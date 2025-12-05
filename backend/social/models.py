"""
Social models for Ohana Live.
Handles messaging, conversations, friendships, and community interactions.
"""

import uuid
from django.db import models
from django.utils import timezone as django_timezone
from users.models import CustomUser


class Conversation(models.Model):
    """
    Represents a conversation between two or more users.
    Supports both direct messages (2 people) and group chats (3+ people).
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    participants = models.ManyToManyField(
        CustomUser,
        related_name='conversations',
        help_text='Users in this conversation'
    )

    CONVERSATION_TYPES = [
        ('direct', 'Direct Message'),
        ('group', 'Group Chat'),
    ]
    conversation_type = models.CharField(max_length=20, choices=CONVERSATION_TYPES, default='direct')

    # Group chat metadata
    group_name = models.CharField(max_length=100, blank=True, help_text='Name for group chats')
    group_avatar = models.URLField(max_length=500, blank=True)

    # Last activity
    last_message_at = models.DateTimeField(null=True, blank=True, db_index=True)

    created_at = models.DateTimeField(default=django_timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'social_conversation'
        verbose_name = 'Conversation'
        verbose_name_plural = 'Conversations'
        ordering = ['-last_message_at']
        indexes = [
            models.Index(fields=['-last_message_at']),
        ]

    def __str__(self):
        if self.conversation_type == 'group' and self.group_name:
            return f"Group: {self.group_name}"
        participant_names = ', '.join([p.public_handle for p in self.participants.all()[:3]])
        return f"Chat: {participant_names}"

    def get_other_participant(self, current_user):
        """For direct messages, get the other person in the conversation."""
        if self.conversation_type == 'direct':
            return self.participants.exclude(id=current_user.id).first()
        return None

    def mark_as_read(self, user):
        """Mark all messages in conversation as read for a specific user."""
        self.messages.filter(recipient=user, is_read=False).update(is_read=True, read_at=django_timezone.now())


class Message(models.Model):
    """
    Individual message within a conversation.
    Supports text, emojis, and future rich content.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        related_name='messages'
    )

    sender = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        related_name='sent_messages'
    )

    # Message content
    content = models.TextField(help_text='Message text')

    MESSAGE_TYPES = [
        ('text', 'Text'),
        ('emoji', 'Emoji Only'),
        ('system', 'System Message'),
    ]
    message_type = models.CharField(max_length=20, choices=MESSAGE_TYPES, default='text')

    # Read status (for direct messages)
    recipient = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='received_messages',
        help_text='For direct messages only'
    )
    is_read = models.BooleanField(default=False)
    read_at = models.DateTimeField(null=True, blank=True)

    # Moderation
    is_deleted = models.BooleanField(default=False)
    deleted_at = models.DateTimeField(null=True, blank=True)
    is_flagged = models.BooleanField(default=False)

    created_at = models.DateTimeField(default=django_timezone.now, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'social_message'
        verbose_name = 'Message'
        verbose_name_plural = 'Messages'
        ordering = ['created_at']
        indexes = [
            models.Index(fields=['conversation', 'created_at']),
            models.Index(fields=['sender']),
            models.Index(fields=['recipient', 'is_read']),
        ]

    def __str__(self):
        sender_name = self.sender.public_handle if self.sender else 'System'
        preview = self.content[:50]
        return f"{sender_name}: {preview}..."

    def save(self, *args, **kwargs):
        """Update conversation's last_message_at when message is saved."""
        super().save(*args, **kwargs)

        # Update conversation timestamp
        self.conversation.last_message_at = self.created_at
        self.conversation.save(update_fields=['last_message_at'])

    def delete_message(self):
        """Soft delete message."""
        self.is_deleted = True
        self.deleted_at = django_timezone.now()
        self.save()


class Friendship(models.Model):
    """
    Represents a friendship/connection between two users.
    Both users must accept for friendship to be active.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    requester = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='friendship_requests_sent'
    )

    receiver = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='friendship_requests_received'
    )

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('declined', 'Declined'),
        ('blocked', 'Blocked'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')

    # Optional message with friend request
    message = models.TextField(blank=True, max_length=500)

    created_at = models.DateTimeField(default=django_timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'social_friendship'
        verbose_name = 'Friendship'
        verbose_name_plural = 'Friendships'
        unique_together = [['requester', 'receiver']]
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['requester', 'status']),
            models.Index(fields=['receiver', 'status']),
        ]

    def __str__(self):
        return f"{self.requester.public_handle} → {self.receiver.public_handle} ({self.status})"

    def accept(self):
        """Accept friend request."""
        self.status = 'accepted'
        self.save()

    def decline(self):
        """Decline friend request."""
        self.status = 'declined'
        self.save()

    def block(self):
        """Block user."""
        self.status = 'blocked'
        self.save()

    @classmethod
    def are_friends(cls, user1, user2):
        """Check if two users are friends."""
        return cls.objects.filter(
            models.Q(requester=user1, receiver=user2, status='accepted') |
            models.Q(requester=user2, receiver=user1, status='accepted')
        ).exists()

    @classmethod
    def get_friends(cls, user):
        """Get all friends of a user."""
        friendships = cls.objects.filter(
            models.Q(requester=user, status='accepted') |
            models.Q(receiver=user, status='accepted')
        )

        friends = []
        for friendship in friendships:
            if friendship.requester == user:
                friends.append(friendship.receiver)
            else:
                friends.append(friendship.requester)

        return friends


class Block(models.Model):
    """
    User blocking system for safety.
    Blocked users cannot see each other's content or message each other.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    blocker = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='social_blocking'
    )

    blocked = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='social_blocked_by'
    )

    reason = models.TextField(blank=True, help_text='Optional reason for blocking')

    created_at = models.DateTimeField(default=django_timezone.now)

    class Meta:
        db_table = 'social_block'
        verbose_name = 'Block'
        verbose_name_plural = 'Blocks'
        unique_together = [['blocker', 'blocked']]
        indexes = [
            models.Index(fields=['blocker']),
            models.Index(fields=['blocked']),
        ]

    def __str__(self):
        return f"{self.blocker.public_handle} blocked {self.blocked.public_handle}"

    @classmethod
    def is_blocked(cls, user1, user2):
        """Check if user1 has blocked user2 or vice versa."""
        return cls.objects.filter(
            models.Q(blocker=user1, blocked=user2) |
            models.Q(blocker=user2, blocked=user1)
        ).exists()


class Post(models.Model):
    """
    Community posts/feed items.
    Users can share updates, reflections, and resources.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    author = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='posts'
    )

    content = models.TextField(max_length=5000)

    POST_TYPES = [
        ('reflection', 'Reflection'),
        ('milestone', 'Milestone'),
        ('resource', 'Resource'),
        ('general', 'General'),
    ]
    post_type = models.CharField(max_length=20, choices=POST_TYPES, default='general')

    VISIBILITY_CHOICES = [
        ('public', 'Public'),
        ('friends', 'Friends Only'),
        ('private', 'Private'),
    ]
    visibility = models.CharField(max_length=20, choices=VISIBILITY_CHOICES, default='friends')

    # Engagement
    like_count = models.IntegerField(default=0)
    comment_count = models.IntegerField(default=0)

    # Moderation
    is_flagged = models.BooleanField(default=False)
    is_archived = models.BooleanField(default=False)

    created_at = models.DateTimeField(default=django_timezone.now, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'social_post'
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['author', '-created_at']),
            models.Index(fields=['-created_at']),
        ]

    def __str__(self):
        preview = self.content[:50]
        return f"{self.author.public_handle}: {preview}..."


class PostLike(models.Model):
    """Likes on posts."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='likes')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='post_likes')

    created_at = models.DateTimeField(default=django_timezone.now)

    class Meta:
        db_table = 'social_postlike'
        verbose_name = 'Post Like'
        verbose_name_plural = 'Post Likes'
        unique_together = [['post', 'user']]
        indexes = [
            models.Index(fields=['post']),
            models.Index(fields=['user']),
        ]

    def __str__(self):
        return f"{self.user.public_handle} liked post by {self.post.author.public_handle}"


class Comment(models.Model):
    """Comments on posts."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='comments')

    content = models.TextField(max_length=2000)

    # Nested comments (replies)
    parent = models.ForeignKey(
        'self',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='replies'
    )

    is_flagged = models.BooleanField(default=False)

    created_at = models.DateTimeField(default=django_timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'social_comment'
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'
        ordering = ['created_at']
        indexes = [
            models.Index(fields=['post', 'created_at']),
        ]

    def __str__(self):
        preview = self.content[:50]
        return f"{self.author.public_handle}: {preview}..."

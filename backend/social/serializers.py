"""
Serializers for social app API endpoints.
"""

from rest_framework import serializers
from .models import (
    Conversation, Message, Friendship, Block, Post, PostLike, Comment
)
from users.models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    """Simplified user serializer for social features."""

    class Meta:
        model = CustomUser
        fields = ['id', 'public_handle', 'first_name', 'avatar_url', 'pronouns']


class MessageSerializer(serializers.ModelSerializer):
    """Serializer for Message model."""

    sender = UserSerializer(read_only=True)
    recipient = UserSerializer(read_only=True)

    class Meta:
        model = Message
        fields = [
            'id', 'conversation', 'sender', 'recipient',
            'content', 'message_type', 'is_read', 'read_at',
            'is_deleted', 'is_flagged',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'sender', 'created_at', 'updated_at', 'read_at']


class ConversationSerializer(serializers.ModelSerializer):
    """Serializer for Conversation model."""

    participants = UserSerializer(many=True, read_only=True)
    last_message = serializers.SerializerMethodField()
    unread_count = serializers.SerializerMethodField()

    class Meta:
        model = Conversation
        fields = [
            'id', 'conversation_type', 'group_name', 'group_avatar',
            'participants', 'last_message', 'last_message_at',
            'unread_count', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

    def get_last_message(self, obj):
        """Get the most recent message in conversation."""
        last_msg = obj.messages.order_by('-created_at').first()
        if last_msg:
            return MessageSerializer(last_msg).data
        return None

    def get_unread_count(self, obj):
        """Get count of unread messages for current user."""
        request = self.context.get('request')
        if request and request.user:
            return obj.messages.filter(
                recipient=request.user,
                is_read=False
            ).count()
        return 0


class FriendshipSerializer(serializers.ModelSerializer):
    """Serializer for Friendship model."""

    requester = UserSerializer(read_only=True)
    receiver = UserSerializer(read_only=True)

    class Meta:
        model = Friendship
        fields = [
            'id', 'requester', 'receiver', 'status',
            'message', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'requester', 'created_at', 'updated_at']


class PostSerializer(serializers.ModelSerializer):
    """Serializer for Post model."""

    author = UserSerializer(read_only=True)
    is_liked_by_user = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'id', 'author', 'content', 'post_type', 'visibility',
            'like_count', 'comment_count', 'is_liked_by_user',
            'is_flagged', 'is_archived',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'author', 'like_count', 'comment_count', 'created_at', 'updated_at']

    def get_is_liked_by_user(self, obj):
        """Check if current user has liked this post."""
        request = self.context.get('request')
        if request and request.user and request.user.is_authenticated:
            return obj.likes.filter(user=request.user).exists()
        return False


class CommentSerializer(serializers.ModelSerializer):
    """Serializer for Comment model."""

    author = UserSerializer(read_only=True)
    replies = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = [
            'id', 'post', 'author', 'content', 'parent',
            'replies', 'is_flagged',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'author', 'created_at', 'updated_at']

    def get_replies(self, obj):
        """Get all replies to this comment."""
        if obj.replies.exists():
            return CommentSerializer(obj.replies.all(), many=True, context=self.context).data
        return []


class BlockSerializer(serializers.ModelSerializer):
    """Serializer for Block model."""

    blocker = UserSerializer(read_only=True)
    blocked = UserSerializer(read_only=True)

    class Meta:
        model = Block
        fields = ['id', 'blocker', 'blocked', 'reason', 'created_at']
        read_only_fields = ['id', 'blocker', 'created_at']

"""
API views for social app endpoints.
"""

from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone
from django.db.models import Q, Count

from .models import (
    Conversation, Message, Friendship, Block, Post, PostLike, Comment
)
from .serializers import (
    ConversationSerializer, MessageSerializer, FriendshipSerializer,
    BlockSerializer, PostSerializer, CommentSerializer
)


class ConversationViewSet(viewsets.ModelViewSet):
    """
    API endpoint for conversations (DMs and group chats).
    """

    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Get conversations for current user."""
        return Conversation.objects.filter(
            participants=self.request.user
        ).prefetch_related('participants', 'messages').order_by('-last_message_at')

    @action(detail=False, methods=['post'])
    def start_conversation(self, request):
        """Start a new conversation with another user."""
        recipient_id = request.data.get('recipient_id')

        if not recipient_id:
            return Response(
                {'error': 'recipient_id is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Check if conversation already exists
        existing = Conversation.objects.filter(
            conversation_type='direct',
            participants=request.user
        ).filter(participants__id=recipient_id).first()

        if existing:
            serializer = self.get_serializer(existing)
            return Response(serializer.data)

        # Create new conversation
        conversation = Conversation.objects.create(conversation_type='direct')
        conversation.participants.add(request.user, recipient_id)

        serializer = self.get_serializer(conversation)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['post'])
    def mark_as_read(self, request, pk=None):
        """Mark all messages in conversation as read."""
        conversation = self.get_object()

        Message.objects.filter(
            conversation=conversation,
            recipient=request.user,
            is_read=False
        ).update(is_read=True, read_at=timezone.now())

        return Response({'message': 'Messages marked as read'})


class MessageViewSet(viewsets.ModelViewSet):
    """
    API endpoint for messages within conversations.
    """

    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Get messages for conversations user is part of."""
        user_conversations = Conversation.objects.filter(participants=self.request.user)

        queryset = Message.objects.filter(
            conversation__in=user_conversations,
            is_deleted=False
        ).select_related('sender', 'recipient', 'conversation').order_by('-created_at')

        # Filter by conversation if specified
        conversation_id = self.request.query_params.get('conversation_id')
        if conversation_id:
            queryset = queryset.filter(conversation_id=conversation_id)

        return queryset

    def perform_create(self, serializer):
        """Create a new message."""
        conversation = serializer.validated_data['conversation']

        # Ensure user is part of conversation
        if not conversation.participants.filter(id=self.request.user.id).exists():
            raise permissions.PermissionDenied("You are not part of this conversation")

        # For direct messages, set recipient
        recipient = None
        if conversation.conversation_type == 'direct':
            recipient = conversation.participants.exclude(id=self.request.user.id).first()

        serializer.save(sender=self.request.user, recipient=recipient)

    @action(detail=True, methods=['post'])
    def mark_read(self, request, pk=None):
        """Mark a message as read."""
        message = self.get_object()

        if message.recipient == request.user:
            message.is_read = True
            message.read_at = timezone.now()
            message.save(update_fields=['is_read', 'read_at'])
            return Response({'message': 'Marked as read'})

        return Response(
            {'error': 'You can only mark messages sent to you as read'},
            status=status.HTTP_403_FORBIDDEN
        )

    @action(detail=True, methods=['post'])
    def flag(self, request, pk=None):
        """Flag a message for review."""
        message = self.get_object()
        message.is_flagged = True
        message.save(update_fields=['is_flagged'])
        return Response({'message': 'Message flagged for review'})


class FriendshipViewSet(viewsets.ModelViewSet):
    """
    API endpoint for friend connections and requests.
    """

    queryset = Friendship.objects.all()
    serializer_class = FriendshipSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Get friendships for current user."""
        return Friendship.objects.filter(
            Q(requester=self.request.user) | Q(receiver=self.request.user)
        ).select_related('requester', 'receiver').order_by('-created_at')

    @action(detail=False, methods=['get'])
    def my_friends(self, request):
        """Get list of current user's friends."""
        friends = Friendship.get_friends(request.user)
        from .serializers import UserSerializer
        serializer = UserSerializer(friends, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def pending_requests(self, request):
        """Get pending friend requests received by user."""
        requests = Friendship.objects.filter(
            receiver=request.user,
            status='pending'
        ).select_related('requester', 'receiver')

        serializer = self.get_serializer(requests, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['post'])
    def send_request(self, request):
        """Send a friend request to another user."""
        receiver_id = request.data.get('receiver_id')
        message = request.data.get('message', '')

        if not receiver_id:
            return Response(
                {'error': 'receiver_id is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Check if already friends or request exists
        existing = Friendship.objects.filter(
            Q(requester=request.user, receiver_id=receiver_id) |
            Q(requester_id=receiver_id, receiver=request.user)
        ).first()

        if existing:
            return Response(
                {'error': 'Friend request already exists or you are already friends'},
                status=status.HTTP_400_BAD_REQUEST
            )

        friendship = Friendship.objects.create(
            requester=request.user,
            receiver_id=receiver_id,
            message=message,
            status='pending'
        )

        serializer = self.get_serializer(friendship)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['post'])
    def accept(self, request, pk=None):
        """Accept a friend request."""
        friendship = self.get_object()

        if friendship.receiver != request.user:
            return Response(
                {'error': 'You can only accept requests sent to you'},
                status=status.HTTP_403_FORBIDDEN
            )

        friendship.status = 'accepted'
        friendship.save(update_fields=['status', 'updated_at'])

        return Response({
            'message': 'Friend request accepted',
            'friendship': self.get_serializer(friendship).data
        })

    @action(detail=True, methods=['post'])
    def decline(self, request, pk=None):
        """Decline a friend request."""
        friendship = self.get_object()

        if friendship.receiver != request.user:
            return Response(
                {'error': 'You can only decline requests sent to you'},
                status=status.HTTP_403_FORBIDDEN
            )

        friendship.status = 'declined'
        friendship.save(update_fields=['status', 'updated_at'])

        return Response({'message': 'Friend request declined'})

    @action(detail=True, methods=['delete'])
    def unfriend(self, request, pk=None):
        """Remove a friend connection."""
        friendship = self.get_object()

        if friendship.requester != request.user and friendship.receiver != request.user:
            return Response(
                {'error': 'You are not part of this friendship'},
                status=status.HTTP_403_FORBIDDEN
            )

        friendship.delete()
        return Response({'message': 'Friendship removed'})


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint for community posts.
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Get posts visible to current user."""
        user = self.request.user

        # Get user's friends
        friend_ids = Friendship.get_friends(user).values_list('id', flat=True)

        # Build query
        queryset = Post.objects.filter(
            Q(visibility='public') |
            Q(author=user) |
            Q(visibility='friends', author__id__in=friend_ids)
        ).select_related('author').annotate(
            like_count=Count('likes'),
            comment_count=Count('comments')
        ).filter(is_archived=False).order_by('-created_at')

        # Filter by post type if specified
        post_type = self.request.query_params.get('post_type')
        if post_type:
            queryset = queryset.filter(post_type=post_type)

        return queryset

    def perform_create(self, serializer):
        """Create a new post."""
        serializer.save(author=self.request.user)

    @action(detail=True, methods=['post'])
    def like(self, request, pk=None):
        """Like a post."""
        post = self.get_object()

        like, created = PostLike.objects.get_or_create(
            post=post,
            user=request.user
        )

        if created:
            return Response({'message': 'Post liked'})
        else:
            return Response({'message': 'Already liked'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def unlike(self, request, pk=None):
        """Unlike a post."""
        post = self.get_object()

        deleted_count, _ = PostLike.objects.filter(
            post=post,
            user=request.user
        ).delete()

        if deleted_count:
            return Response({'message': 'Post unliked'})
        else:
            return Response({'message': 'Not liked'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def flag(self, request, pk=None):
        """Flag a post for review."""
        post = self.get_object()
        post.is_flagged = True
        post.save(update_fields=['is_flagged'])
        return Response({'message': 'Post flagged for review'})


class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint for post comments.
    """

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Get comments for posts."""
        queryset = Comment.objects.select_related('author', 'post').order_by('created_at')

        # Filter by post if specified
        post_id = self.request.query_params.get('post_id')
        if post_id:
            queryset = queryset.filter(post_id=post_id, parent__isnull=True)

        return queryset

    def perform_create(self, serializer):
        """Create a new comment."""
        serializer.save(author=self.request.user)

    @action(detail=True, methods=['post'])
    def flag(self, request, pk=None):
        """Flag a comment for review."""
        comment = self.get_object()
        comment.is_flagged = True
        comment.save(update_fields=['is_flagged'])
        return Response({'message': 'Comment flagged for review'})


class BlockViewSet(viewsets.ModelViewSet):
    """
    API endpoint for blocking users.
    """

    queryset = Block.objects.all()
    serializer_class = BlockSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Get list of users blocked by current user."""
        return Block.objects.filter(
            blocker=self.request.user
        ).select_related('blocker', 'blocked')

    @action(detail=False, methods=['post'])
    def block_user(self, request):
        """Block a user."""
        blocked_id = request.data.get('blocked_id')
        reason = request.data.get('reason', '')

        if not blocked_id:
            return Response(
                {'error': 'blocked_id is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        block, created = Block.objects.get_or_create(
            blocker=request.user,
            blocked_id=blocked_id,
            defaults={'reason': reason}
        )

        if created:
            return Response(
                {'message': 'User blocked', 'block': self.get_serializer(block).data},
                status=status.HTTP_201_CREATED
            )
        else:
            return Response({'message': 'User already blocked'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['delete'])
    def unblock(self, request, pk=None):
        """Unblock a user."""
        block = self.get_object()

        if block.blocker != request.user:
            return Response(
                {'error': 'You can only unblock users you have blocked'},
                status=status.HTTP_403_FORBIDDEN
            )

        block.delete()
        return Response({'message': 'User unblocked'})

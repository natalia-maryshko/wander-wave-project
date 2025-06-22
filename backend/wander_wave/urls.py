from django.urls import path, include
from rest_framework import routers

from backend.wander_wave.views import (
    PostViewSet,
    LocationViewSet,
    HashtagViewSet,
    CommentViewSet,
    LikeViewSet,
    SubscriptionsPostViewSet,
    PostNotificationViewSet,
    LikeNotificationViewSet,
    CommentNotificationViewSet,

)

from backend.user.views import (
    SubscriptionView,
    UnsubscribeView,
    SubscriptionNotificationViewSet
)


router = routers.DefaultRouter()


router.register("posts", PostViewSet, basename="posts")
router.register(
    "subscriptions-posts",
    SubscriptionsPostViewSet,
    basename="subscribed-posts"
)
router.register("locations", LocationViewSet, basename="locations")
router.register("hashtags", HashtagViewSet, basename="hashtags")
router.register("comments", CommentViewSet, basename="comments")
router.register("likes", LikeViewSet, basename="likes")
router.register(
    "post_notifications",
    PostNotificationViewSet,
    basename="post_notifications"
)
router.register(
    "like_notifications",
    LikeNotificationViewSet,
    basename="like_notifications"
)
router.register(
    "comment_notifications",
    CommentNotificationViewSet,
    basename="comment_notifications"
)
router.register(
    "subscription_notifications",
    SubscriptionNotificationViewSet,
    basename="subscription_notifications"
)
urlpatterns = [
    path("", include(router.urls)),

    path(
        "posts/<int:pk>/author-profile/",
        PostViewSet.as_view({"get": "author"}),
        name="author-profile"
    ),
    path(
        "posts/<int:pk>/set-like/",
        PostViewSet.as_view({"post": "set_like"}),
        name="set-like",
    ),
    path(
        "posts/<int:pk>/add-to-favorites/",
        PostViewSet.as_view({"post": "add_to_favorites"}),
        name="add-to-favorites",
    ),
    path(
        "posts/<int:pk>/author-profile/subscribe/",
        SubscriptionView.as_view(),
        name="subscribe"
    ),
    path(
        "posts/<int:user_id>/author-profile/unsubscribe/",
        UnsubscribeView.as_view(),
        name="unsubscribe"
    ),
]

app_name = "wander_wave"

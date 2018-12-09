from rest_framework import routers
from articles import views as myapp_views
from videos.api import views as video_views 

router = routers.DefaultRouter()
router.register('article', myapp_views.ArticleViewset)
router.register('document', myapp_views.DocumentViewset)
router.register('gallery', myapp_views.GalleryViewset)
router.register('videos', video_views.VideoViewset)
# router.register('videos_list', video_views.VideoListView)
# router.register('videos_details', video_views.VideoDetailView)
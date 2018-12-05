from rest_framework import routers
from articles import views as myapp_views

router = routers.DefaultRouter()
router.register('article', myapp_views.ArticleViewset)
router.register('document', myapp_views.DocumentViewset)
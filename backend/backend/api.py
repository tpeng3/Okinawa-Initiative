from rest_framework import routers
from articles import views as myapp_views

router = routers.DefaultRouter()
router.register(r'article', myapp_views.ArticleViewset)
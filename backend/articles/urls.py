from django.conf.urls import url
from . import views

#TEMPORARY STATIC FILE HOSTING
#from django.contrib.staticfiles.urls import staticfiles_urlpatterns

app_name = 'articles'

urlpatterns = [
    # syntax = (reg ex, page, name)
    url(r'^$', views.article_list, name="list"),
    url(r'^(?P<slug>[\w-]+)/$', views.article_detail, name="detail"),
]

 
from django.contrib import admin
from .models import Article

#allows us to create article in admin server
admin.site.register(Article)
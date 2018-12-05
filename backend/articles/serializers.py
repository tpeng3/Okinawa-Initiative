from rest_framework import serializers
from . import models

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Article
        fields = ('id', 'title', 'slug', 'author', 'body', 'date', 'thumb')

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Documents
        fields = ('id', 'title', 'slug', 'author', 'body', 'date', 'thumb')
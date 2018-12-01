from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from . import models
from . import serializers

# Create your views here.
def article_list(request):
    #grabs all articles
    articles = models.Article.objects.all().order_by('date')

    return render(request, 'articles/article_list.html', {'articles': articles })

def article_detail(request, slug):
    #return HttpResponse(slug)
    article = models.Article.objects.get(slug=slug)
   
    #takes article from template, and outputs to browser
    return render(request,'articles/article_detail.html', {'article': article})

class ArticleViewset(viewsets.ModelViewSet):
    queryset = models.Article.objects.all()
    serializer_class = serializers.ArticleSerializer
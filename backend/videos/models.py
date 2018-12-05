from django.db import models

class Video(models.Model):
    title = models.CharField(max_length = 100)
    slug = models.SlugField()
    author = models.CharField(default='', max_length = 100)
    body = models.TextField()
    date = models.DateTimeField(auto_now_add = True)
    thumb = models.ImageField(default='default.png', blank = True)
    url = models.URLField(max_length = 200)
    
    
    def __str__(self):
        return self.title
    
    def snippet(self):
        return self.body[:50] + '...'
    
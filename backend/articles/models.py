# | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | #
# V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V # 
###################################################################################
# ************EVERY TIME YOU EDIT THIS FILE BE SURE TO MIGRATE THE CHANGES*********
###################################################################################
# ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ # 
# | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | #
#python manage.py makemigrations
#python manage.py migrate
from django.db import models

# Create your models here.
class Article(models.Model):
    
    #FIELDS
    title = models.CharField(max_length = 100)
    slug = models.SlugField()
    body = models.TextField()
    date = models.DateTimeField(auto_now_add = True)
    thumb = models.ImageField(default='default.png', blank = True)
    # add in author later    
    
    #everytime make change or make a model use these commands
    
#    
#    #shows title of article in command line
#    # in python shell command: Articles.objects.all()
    def __str__(self):
        return self.title
   
    def snippet(self):
        return self.body[:50] + '...'
    
# | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | #
# V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V # 
###################################################################################
# ************EVERY TIME YOU EDIT THIS FILE BE SURE TO MIGRATE THE CHANGES*********
###################################################################################
# ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ # 
# | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | #
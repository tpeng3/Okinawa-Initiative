"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
# import pyrebase

# print("firebase auth")

# # Firebase auth
# config = {
#     "apiKey": "AIzaSyBU2XaMu1t7oneOeSaWNyelV4IlAzw3dX4",
#     "authDomain": "okinawa-initiative.firebaseapp.com",
#     "databaseURL": "https://okinawa-initiative.firebaseio.com",
#     "projectId": "okinawa-initiative",
#     "storageBucket": "okinawa-initiative.appspot.com",
#     "messagingSenderId": "784545152381"
# }
# firebase = pyrebase.initialize_app(config)

# auth = firebase.auth()
# user = auth.sign_in_with_email_and_password("wmchan@ucsc.edu", "okinawa")

# print("this is the user: \n" , user)

# db = firebase.database()

# # data = {
# #     "test": "this test data"
# # }

# # results = db.child("test").push(data, user['idToken'])

# # print("these are the results: \n", results)
# db.child("test").get()
# print( "\n\ndb\n\n",db)

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from pprint import pprint

# Use a service account
cred = credentials.Certificate('okinawa-initiative.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()

collection = 'test'
document= 'uZ0hMJUl6HAr8HZrzbTH'
field = 'test'

print("here")
doc_ref = db.collection(u'sampleData').document(u'inspiration')
doc_ref.set({
    u'quote': 'quote',
})

print("successful write")

# print("here!")
# test = db.collection(u'test')
# print(test.to_dict())
# print("here")

# try:
#     doc = test.get()
# except:
#     print("bamboozle")
# print("here!")
# print(u'Document data: {}'.format(doc.to_dict()))


urlpatterns = [
    url(r'^admin/', admin.site.urls),
]

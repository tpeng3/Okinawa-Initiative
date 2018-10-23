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
import pyrebase

print("firebase auth")

# Firebase auth
config = {
    "apiKey": "AIzaSyBU2XaMu1t7oneOeSaWNyelV4IlAzw3dX4",
    "authDomain": "okinawa-initiative.firebaseapp.com",
    "databaseURL": "https://okinawa-initiative.firebaseio.com",
    "projectId": "okinawa-initiative",
    "storageBucket": "okinawa-initiative.appspot.com",
    "messagingSenderId": "784545152381"
}
firebase = pyrebase.initialize_app(config)

auth = firebase.auth()

def create_user(email, password):
    user = auth.create_user_with_email_and_password(email, password)
    print("this is the user: \n" , user)
    auth.send_email_verification(user['idToken'])

def login(email, password):
    user = auth.sign_in_with_email_and_password(email, password)
    print("user has signed in ")


urlpatterns = [
    url(r'^admin/', admin.site.urls),
]

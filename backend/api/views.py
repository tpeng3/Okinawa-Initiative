from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from django.core import serializers
from django.conf import settings
import json
from . import firebase

# Create your views here.
@api_view(["POST"])
def Login(request):
    try:
        # Decode UTF-8 bytes to Unicode, and convert single quotes 
        # to double quotes to make it valid JSON
        my_json = request.body.decode('utf8').replace("'", '"')
        data = json.loads(my_json)
        email = data.get("email")
        password = data.get("password")

        # Try to login the user
        user = firebase.login(email, password)
        if user == None:
            return Response(ValueError.args[0],status.HTTP_400_BAD_REQUEST)
        return JsonResponse(user['idToken'],safe=False)
    except ValueError as e:
        return Response(e.args[0],status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def SignUp(request):
    try:
        # Decode UTF-8 bytes to Unicode, and convert single quotes 
        # to double quotes to make it valid JSON
        my_json = request.body.decode('utf8').replace("'", '"')
        data = json.loads(my_json)
        email = data.get("email")
        password = data.get("password")

        # Try to create the user 
        user = firebase.create_user(email, password)
        if user == None:
            return Response(ValueError.args[0],status.HTTP_400_BAD_REQUEST)
        return JsonResponse(user['idToken'],safe=False)
            
    except ValueError as e:
        return Response(e.args[0],status.HTTP_400_BAD_REQUEST)


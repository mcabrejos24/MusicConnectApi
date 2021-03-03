from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view

# Create your views here.

@api_view()
def health_check(request): 
    return Response({"message": "Up and running!"}, status=status.HTTP_200_OK)


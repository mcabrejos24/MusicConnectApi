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


class Pairing(APIView):

    def post(self, request, format=None):
        spotify_obj = request.data['attributes']['spotifyObject']
        apple_obj = request.data['attributes']['appleObject']
        self.get_songs(spotify_obj, apple_obj)
        return Response(request.data)

    def get_songs(self, spotify_obj,apple_obj):
        print(spotify_obj)
        print(apple_obj)


# One greater function pairs that recieves all the parameters we need (2 objects: Spotify and Apple)

# One function, get_songs, that get songs for either Spotify or Apple Playlists: Will call
# apple and spotify apis and return a list of songs within each playlist. Return into lists that
# also have their type (spotify or apple) associated with them. 
# 
# One function, merge_playlist, can check for duplicates
# and push the correct songs into each playlist
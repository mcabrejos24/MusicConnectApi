from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
import ast 
import requests
import json

# Create your views here.

@api_view()
def health_check(request): 
    return Response({"message": "Up and running!"}, status=status.HTTP_200_OK)


class Pairing(APIView):
    apple_url = "https://api.music.apple.com/v1/me/library/playlists"
    payload={}

    #the post endpoint 'api/pairing'
    def post(self, request, format=None):
        spotify_obj = ast.literal_eval(request.data['attributes']['spotifyObject'])
        apple_obj = ast.literal_eval(request.data['attributes']['appleObject'])
        self.get_songs(spotify_obj, apple_obj)
        return Response(request.data)

    # Gets the apple and spotify lists of songs for merging (not complete)
    def get_songs(self, spotify_obj,apple_obj):
        headers = {
            'music-user-token': apple_obj['auth'],
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjI4TURDWTcyVFAifQ.eyJpc3MiOiI0Q1JDNEdGUVpXIiwiZXhwIjoxNjIxMDg5NTM2LCJpYXQiOjE2MTYyNTExMzZ9.YuRqACMwkbHUdi1KPdFlzBFWP03DYj027Wvxwb9LvqwpRPVMLZIUEP-y7wenzpmW-vjwtucJgB9VNzk7l5kQDg'
        }
        apple_response = requests.request("GET", self.apple_url, headers=headers, data=self.payload)
        apple_response = apple_response.json()
        apple_target_playlist = self.apple_search(apple_obj['playlist'], apple_response)
        # 
        print(apple_target_playlist)

    # Gets apple playlist from user's library
    def apple_search(self, playlist_name, apple_response):
        for i in range(len(apple_response['data'])):
            print((apple_response['data'][i]['attributes']['name']).lower())
            if playlist_name == (apple_response['data'][i]['attributes']['name']).lower():
                return apple_response['data'][i]['id']
        
    


# One greater function pairs that recieves all the parameters we need (2 objects: Spotify and Apple)

# One function, get_songs, that get songs for either Spotify or Apple Playlists: Will call
# apple and spotify apis and return a list of songs within each playlist. Return into lists that
# also have their type (spotify or apple) associated with them. 
# 
# One function, merge_playlist, can check for duplicates
# and push the correct songs into each playlist
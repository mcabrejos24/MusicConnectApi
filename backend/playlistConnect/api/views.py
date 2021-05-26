from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
import ast 
import requests
import json
import re
# Create your views here.

@api_view()
def health_check(request): 
    return Response({"message": "Up and running!"}, status=status.HTTP_200_OK)


class Pairing(APIView):
    apple_playlist_url = f'https://api.music.apple.com/v1/me/library/playlists'
    payload={}

    #the post endpoint 'api/pairing'
    def post(self, request, format=None):
        spotify_obj = ast.literal_eval(request.data['attributes']['spotifyObject'])
        apple_obj = ast.literal_eval(request.data['attributes']['appleObject'])
        self.get_songs(spotify_obj, apple_obj)
        return Response(request.data)

    # Gets the apple and spotify lists of songs for merging (not complete)
    def get_songs(self, spotify_obj,apple_obj):
        # print(apple_obj['auth'])
        apple_headers = {
            'music-user-token': apple_obj['auth'],
            'Authorization': f'Bearer {REACT_}'
        }
        print(spotify_obj['auth'])
        apple_response = requests.request("GET", self.apple_playlist_url, headers=apple_headers, data=self.payload).json()['data']
        print(apple_response)
        apple_target_playlist = self.apple_search(apple_obj['playlist'], apple_response)
        print(apple_target_playlist)
        apple_songs_response = requests.request("GET", self.apple_playlist_url + f'/{apple_target_playlist}/tracks', headers=apple_headers, data=self.payload).json()['data']
        apple_songs = []

        for i in range(len(apple_songs_response)):
            apple_songs.append({'name': apple_songs_response[i]['attributes']['name'], 
            'artistName': apple_songs_response[i]['attributes']['artistName'], 'albumName': apple_songs_response[i]['attributes']['albumName']})

        spotify_target_playlist = self.spotify_search(spotify_obj)
        # print(spotify_target_playlist)
        spotify_headers = {
            'Authorization': 'Bearer BQC9_rCMNnef7RymuKHeGeviWdrYOHcLn7zaESMZwnR3wpxnm5b5NkokdWVxqae1jYJQlqqdJyDE4LTrmM_4E1aYBxXaevSOTmlv-gkjGKXG-LlzSIdrtWFSLYmbFxqkENXiUKoLsMva4bTZeMipiIh7Za2CFY0cN8WBGfgjm2s'
        }
        spotify_songs_response = requests.request("GET", f'https://api.spotify.com/v1/playlists/{spotify_target_playlist}/tracks', headers=spotify_headers, data=self.payload).json()
        spotify_songs = []
        for i in range(len(spotify_songs_response['items'])):
            spotify_songs.append({'name': spotify_songs_response['items'][i]['track']['name'], 'artistName': spotify_songs_response['items'][i]['track']['artists'][0]['name'], 'albumName': spotify_songs_response['items'][i]['track']['album']['name']})

        add_apple = self.find_unique(spotify_songs, apple_songs)
        add_spotify = self.find_unique(apple_songs, spotify_songs)
        print(len(add_spotify))
        
        # print(add_apple)

        # add_apple = self.get_song_ids(apple_headers, 'apple', add_apple)
        add_spotify = self.get_song_ids(spotify_headers, 'spotify', add_spotify)
        print(len(add_spotify))
        self.add_to_playlist(spotify_target_playlist, add_spotify, spotify_headers)
        # print(self.spotify_search(spotify_obj))

    # Gets apple playlist from user's library
    def apple_search(self, playlist_name, apple_response):
        for i in range(len(apple_response)):
            if playlist_name == (apple_response[i]['attributes']['name']).lower():
                return apple_response[i]['id']
        
    # Gets spotify playlist from user's library

    def spotify_search(self, spotify_obj):
        headers = {
            'Authorization': 'Bearer '+ spotify_obj['auth']
        }
        response = requests.request("GET", 'https://api.spotify.com/v1/me/playlists', headers=headers, data=self.payload).json()
        for i in range(len(response['items'])):
            if spotify_obj['playlist'] == (response['items'][i]['name']).lower():
                return response['items'][i]['id']

    def find_unique(self, arr1, arr2):
        add_array = []
        for i in range(len(arr1)):
            if arr2.count(arr1[i]) == 0:
                add_array.append(arr1[i])
        
        return add_array

    def get_song_ids(self, headers, service, songs):
        list_of_ids = []
        if (service == 'apple'):
            for i in range(len(songs)):
                name = songs[i]['name'].replace('&', '')
                artist = songs[i]['artistName'].replace('&', '')
                album = songs[i]['albumName'].replace('&', '')
                # print(album)

                response = requests.request("GET", f'https://api.music.apple.com/v1/catalog/us/search?term={name}+{artist}&types=songs', headers=headers, data=self.payload).json()
                if response['results'].get('songs') is None:
                    continue
                else:
                    list_of_ids.append(response['results'].get('songs').get('data')[0].get('id'))
                # print(list_of_ids[i])
                # break
        else:
            for i in range(len(songs)):
                name = songs[i]['name'].replace('&', '')
                artist = songs[i]['artistName'].replace('&', '')
                album = songs[i]['albumName'].replace('&', '')

                response = requests.request("GET", f"https://api.spotify.com/v1/search?q=track:{name}%20artist:{artist}%20album:{album}&type=track", headers=headers, data=self.payload).json()
                if (len(response['tracks']['items']) > 0):
                    list_of_ids.append(response['tracks']['items'][0]['id'])
                else:
                    continue
                # break
            # print('huh')

        return list_of_ids


    def add_to_playlist(self, playlist_id, add_spotify, headers):
        for i in range(len(add_spotify)):
            song = add_spotify[i]
            requests.request("POST", f"https://api.spotify.com/v1/playlists/{playlist_id}/tracks?uris=spotify%3Atrack%3A{song}", headers=headers, data=self.payload)

# One greater function pairs that recieves all the parameters we need (2 objects: Spotify and Apple)

# One function, get_songs, that get songs for either Spotify or Apple Playlists: Will call
# apple and spotify apis and return a list of songs within each playlist. Return into lists that
# also have their type (spotify or apple) associated with them. 
# 
# One function, merge_playlist, can check for duplicates
# and push the correct songs into each playlist
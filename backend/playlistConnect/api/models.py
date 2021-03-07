from django.db import models
import string 
import random

# Create your models here.

def generate_unique_id():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Pairing.objects.filter(code=code).count() == 0:
            break

    return code

class Pairing(models.Model):
    unique_id = models.CharField(
        max_length=6, default=generate_unique_id, unique=True)
    apple_music_token = models.CharField(max_length=128)
    spotify_music_token = models.CharField(max_length=128)


    
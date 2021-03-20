from django.urls import path 
from .views import health_check, Pairing

urlpatterns = [
    path('health-check', health_check),
    path('pairing', Pairing.as_view())
]

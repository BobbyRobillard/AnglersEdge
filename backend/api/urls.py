### urls.py
# This file maps URL paths to views.
from django.urls import path
from .views import FishListView, HomePageView

urlpatterns = [
    path("fish/", FishListView.as_view(), name="fish-list"),  # Endpoint for listing all fish
]

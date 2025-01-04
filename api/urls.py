from django.urls import path
from .views import FishListView

urlpatterns = [
    path("fish/", FishListView.as_view(), name="fish-list"),
]

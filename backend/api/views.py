### views.py
# This file defines the API views for interacting with the data.
from django.views.generic.base import TemplateView
from rest_framework import generics
from .models import Fish
from .serializers import FishSerializer

# View for listing all fish data.
class FishListView(generics.ListAPIView):
    queryset = Fish.objects.all()  # Fetches all fish records.
    serializer_class = FishSerializer  # Uses the FishSerializer to format the data.

class HomePageView(TemplateView):
    template_name = "index.html"

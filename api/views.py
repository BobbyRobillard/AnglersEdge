from rest_framework import generics
from .models import Fish
from .serializers import FishSerializer

class FishListView(generics.ListAPIView):
    queryset = Fish.objects.all()
    serializer_class = FishSerializer

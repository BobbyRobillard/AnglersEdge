from rest_framework import viewsets
from .models import Fish, Food, Bait, Structure, Location
from .serializers import FishSerializer, FoodSerializer, BaitSerializer, StructureSerializer, LocationSerializer

class FoodViewSet(viewsets.ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer

class BaitViewSet(viewsets.ModelViewSet):
    queryset = Bait.objects.all()
    serializer_class = BaitSerializer

class StructureViewSet(viewsets.ModelViewSet):
    queryset = Structure.objects.all()
    serializer_class = StructureSerializer

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class FishViewSet(viewsets.ModelViewSet):
    queryset = Fish.objects.all()
    serializer_class = FishSerializer

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FishViewSet, FoodViewSet, BaitViewSet, StructureViewSet, LocationViewSet

# Define the router
router = DefaultRouter()
router.register(r'fish', FishViewSet)
router.register(r'food', FoodViewSet)
router.register(r'bait', BaitViewSet)
router.register(r'structure', StructureViewSet)
router.register(r'location', LocationViewSet)

# App-level URL patterns
urlpatterns = [
    path('', include(router.urls)),  # API endpoints from the router
]

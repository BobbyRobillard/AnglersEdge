from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FishViewSet, FoodViewSet, BaitViewSet, StructureViewSet, LocationViewSet

router = DefaultRouter()
router.register(r'fish', FishViewSet)
router.register(r'food', FoodViewSet)
router.register(r'bait', BaitViewSet)
router.register(r'structure', StructureViewSet)
router.register(r'location', LocationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

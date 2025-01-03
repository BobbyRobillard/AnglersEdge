from rest_framework import serializers
from .models import Fish, Food, Bait, Structure, Location

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'

class BaitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bait
        fields = '__all__'

class StructureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Structure
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class FishSerializer(serializers.ModelSerializer):
    bait = BaitSerializer(many=True, read_only=True)
    food = FoodSerializer(many=True, read_only=True)
    structure = StructureSerializer(many=True, read_only=True)
    locations = LocationSerializer(many=True, read_only=True)

    class Meta:
        model = Fish
        fields = '__all__'

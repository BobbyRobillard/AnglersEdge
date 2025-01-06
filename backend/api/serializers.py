### serializers.py
# This file defines how models are converted to JSON format and vice versa.
from rest_framework import serializers
from .models import Fish, Bait, Food, Structure, Trend, Technique

# A base serializer for related fields with custom text parsing logic.
class NestedSerializer(serializers.ModelSerializer):
    properties = serializers.SerializerMethodField()  # Splits properties into a list.
    notes = serializers.SerializerMethodField()  # Splits notes into a list.

    class Meta:
        fields = ["id", "name", "properties", "notes"]

    def get_properties(self, obj):
        return obj.properties.split("\n") if obj.properties else []

    def get_notes(self, obj):
        return obj.notes.split("\n") if obj.notes else []

# Serializers for Bait, Food, and Structure, inheriting from NestedSerializer.
class BaitSerializer(NestedSerializer):
    class Meta(NestedSerializer.Meta):
        model = Bait

class FoodSerializer(NestedSerializer):
    class Meta(NestedSerializer.Meta):
        model = Food

class StructureSerializer(NestedSerializer):
    class Meta(NestedSerializer.Meta):
        model = Structure

# Serializer for Fish, including nested serializers for related models.
class FishSerializer(serializers.ModelSerializer):
    bait = BaitSerializer(many=True)  # Nested bait serializer.
    food = FoodSerializer(many=True)  # Nested food serializer.
    structure = StructureSerializer(many=True)  # Nested structure serializer.
    trends = serializers.SlugRelatedField(
        many=True, slug_field="description", queryset=Trend.objects.all()
    )  # Trends are represented by their descriptions.
    techniques = serializers.SlugRelatedField(
        many=True, slug_field="description", queryset=Technique.objects.all()
    )  # Techniques are represented by their descriptions.

    class Meta:
        model = Fish
        fields = [
            "id",
            "species",
            "bait",
            "food",
            "structure",
            "trends",
            "techniques",
            "tutorial_video",
        ]
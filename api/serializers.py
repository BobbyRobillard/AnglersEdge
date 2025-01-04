from rest_framework import serializers
from .models import Fish, Bait, Food, Structure, Trend, Technique


class NestedSerializer(serializers.ModelSerializer):
    properties = serializers.SerializerMethodField()
    notes = serializers.SerializerMethodField()

    class Meta:
        fields = ["id", "name", "properties", "notes"]

    def get_properties(self, obj):
        return obj.properties.split("\n") if obj.properties else []

    def get_notes(self, obj):
        return obj.notes.split("\n") if obj.notes else []


class BaitSerializer(NestedSerializer):
    class Meta(NestedSerializer.Meta):
        model = Bait


class FoodSerializer(NestedSerializer):
    class Meta(NestedSerializer.Meta):
        model = Food


class StructureSerializer(NestedSerializer):
    class Meta(NestedSerializer.Meta):
        model = Structure


class FishSerializer(serializers.ModelSerializer):
    bait = BaitSerializer(many=True)
    food = FoodSerializer(many=True)
    structure = StructureSerializer(many=True)
    trends = serializers.SlugRelatedField(
        many=True, slug_field="description", queryset=Trend.objects.all()
    )
    techniques = serializers.SlugRelatedField(
        many=True, slug_field="description", queryset=Technique.objects.all()
    )

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

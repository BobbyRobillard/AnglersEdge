from django.test import TestCase
from api.models import Fish, Bait, Food, Trend, Technique
from api.serializers import FishSerializer


class FishSerializerTest(TestCase):
    def setUp(self):
        # Create related objects
        self.bait = Bait.objects.create(
            name="Fiddler Crab",
            properties="Small, Crustacean",
            notes="Good for inshore fishing.",
        )
        self.food = Food.objects.create(
            name="Pilchard",
            properties="Small, oily fish",
            notes="Often found in schools near mangroves.",
        )
        self.trend = Trend.objects.create(description="Move into inlets during winter.")
        self.technique = Technique.objects.create(
            description="Use live bait near structure."
        )

        # Create the Fish object
        self.fish = Fish.objects.create(
            species="Snook", tutorial_video="https://example.com/snook-tutorial"
        )

        # Add ManyToMany relationships
        self.fish.bait.set([self.bait])
        self.fish.food.set([self.food])
        self.fish.trends.set([self.trend])
        self.fish.techniques.set([self.technique])

    def test_serializer_output(self):
        serializer = FishSerializer(self.fish)
        data = serializer.data

        self.assertEqual(data["species"], "Snook")
        self.assertIn("Fiddler Crab", [b["name"] for b in data["bait"]])
        self.assertIn("Pilchard", [f["name"] for f in data["food"]])
        self.assertIn(
            "Move into inlets during winter.", data["trends"]
        )  # Trends as strings
        self.assertIn(
            "Use live bait near structure.", data["techniques"]
        )  # Techniques as strings
        self.assertEqual(data["tutorial_video"], "https://example.com/snook-tutorial")

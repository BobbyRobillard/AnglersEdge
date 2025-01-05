from rest_framework.test import APITestCase
from rest_framework import status
from api.models import Fish, Bait, Food, Trend, Technique

class FishAPITestCase(APITestCase):
    def setUp(self):
        # Create related objects
        self.bait = Bait.objects.create(
            name="Fiddler Crab",
            properties="Small, Crustacean",
            notes="Good for inshore fishing."
        )
        self.food = Food.objects.create(
            name="Pilchard",
            properties="Small, oily fish",
            notes="Often found in schools near mangroves."
        )
        self.trend = Trend.objects.create(description="Move into inlets during winter.")
        self.technique = Technique.objects.create(description="Use live bait near structure.")

        # Create the Fish object
        self.fish = Fish.objects.create(
            species="Snook",
            tutorial_video="https://example.com/snook-tutorial"
        )

        # Add ManyToMany relationships
        self.fish.bait.set([self.bait])
        self.fish.food.set([self.food])
        self.fish.trends.set([self.trend])
        self.fish.techniques.set([self.technique])

    def test_get_fish_list(self):
        response = self.client.get('/api/fish/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['species'], "Snook")
        self.assertIn("Fiddler Crab", [b['name'] for b in response.data[0]['bait']])
        self.assertIn("Pilchard", [f['name'] for f in response.data[0]['food']])
        self.assertIn("Move into inlets during winter.", response.data[0]['trends'])
        self.assertIn("Use live bait near structure.", response.data[0]['techniques'])

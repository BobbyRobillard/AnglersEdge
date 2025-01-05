from rest_framework.test import APITestCase
from api.models import Fish, Bait, Food, Trend, Technique

class FishIntegrationTest(APITestCase):
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
        self.technique = Technique.objects.create(description="Use live bait on a splitshot.")

        # Create the Fish object
        self.fish = Fish.objects.create(
            species="Snook",
            tutorial_video="https://example.com/snook-tutorial"
        )
        self.fish.bait.set([self.bait])
        self.fish.food.set([self.food])
        self.fish.trends.set([self.trend])
        self.fish.techniques.set([self.technique])

    def test_full_fish_workflow(self):
        # Fail to Create a new Fish for unauthenticated user
        response = self.client.post('/api/fish/', {
            "species": "Redfish",
            "trends": ["Shallow water during tide changes."],  # List of strings for trends
            "techniques": ["Use live or dead bait."],         # List of strings for techniques
            "tutorial_video": "https://example.com/redfish-tutorial",
            "bait": [{"name": "Shrimp", "properties": "Small, Crustacean", "notes": "Attracts Redfish"}],
            "food": [{"name": "Crustaceans", "properties": "Various small species", "notes": "Common food for Redfish"}]
        }, format='json')
        self.assertEqual(response.status_code, 403)

        # Fetch fish list
        response = self.client.get('/api/fish/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)

    def test_get_fish_list(self):
        # Fetch fish list
        response = self.client.get('/api/fish/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)

        # Verify fish data
        fish_data = response.data[0]
        self.assertEqual(fish_data["species"], "Snook")
        self.assertIn("Fiddler Crab", [b["name"] for b in fish_data["bait"]])
        self.assertIn("Pilchard", [f["name"] for f in fish_data["food"]])
        self.assertIn("Move into inlets during winter.", fish_data["trends"])
        self.assertIn("Use live bait on a splitshot.", fish_data["techniques"])
        self.assertEqual(fish_data["tutorial_video"], "https://example.com/snook-tutorial")

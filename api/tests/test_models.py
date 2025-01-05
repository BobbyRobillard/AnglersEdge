from django.test import TestCase
from api.models import Fish, Bait, Food, Structure, Trend, Technique


class FishModelTest(TestCase):
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
        self.structure = Structure.objects.create(
            name="Mangrove",
            properties="Wood, varying water depths",
            notes="Home to many juvenile fish.",
        )
        self.trend = Trend.objects.create(description="Moves inshore during summer.")
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
        self.fish.structure.set([self.structure])
        self.fish.trends.set([self.trend])
        self.fish.techniques.set([self.technique])

    def test_fish_str_method(self):
        self.assertEqual(str(self.fish), "Snook")

    def test_fish_bait_relationship(self):
        self.assertIn(self.bait, self.fish.bait.all())

    def test_fish_food_relationship(self):
        self.assertIn(self.food, self.fish.food.all())

    def test_fish_structure_relationship(self):
        self.assertIn(self.structure, self.fish.structure.all())

    def test_fish_trends_relationship(self):
        self.assertIn(self.trend, self.fish.trends.all())

    def test_fish_techniques_relationship(self):
        self.assertIn(self.technique, self.fish.techniques.all())

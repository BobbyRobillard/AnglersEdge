### models.py
# This file defines the database schema for the application using Django ORM.
from django.db import models

# Represents fishing trends with unique descriptions.
class Trend(models.Model):
    description = models.TextField(unique=True)

    def __str__(self):
        return self.description[:50]  # Returns the first 50 characters for readability.

# Represents fishing techniques with unique descriptions.
class Technique(models.Model):
    description = models.TextField(unique=True)

    def __str__(self):
        return self.description[:50]

# Represents different types of bait with additional properties and notes.
class Bait(models.Model):
    name = models.CharField(max_length=100, unique=True)  # Unique bait name.
    properties = models.TextField()  # Detailed properties of the bait.
    notes = models.TextField()  # Additional notes about the bait.

    def __str__(self):
        return self.name

# Represents food types for fish with additional properties and notes.
class Food(models.Model):
    name = models.CharField(max_length=100, unique=True)  # Unique food name.
    properties = models.TextField()  # Detailed properties of the food.
    notes = models.TextField()  # Additional notes about the food.

    def __str__(self):
        return self.name

# Represents physical structures relevant to fish habitats.
class Structure(models.Model):
    name = models.CharField(max_length=100, unique=True)  # Unique structure name.
    properties = models.TextField()  # Characteristics of the structure.
    notes = models.TextField()  # Additional information about the structure.

    def __str__(self):
        return self.name

# Represents fish species and their relationships to other models.
class Fish(models.Model):
    species = models.CharField(max_length=100, unique=True)  # Unique fish species name.
    bait = models.ManyToManyField(Bait, related_name="fish")  # Relationship to bait.
    food = models.ManyToManyField(Food, related_name="fish")  # Relationship to food.
    structure = models.ManyToManyField(Structure, related_name="fish")  # Relationship to structures.
    trends = models.ManyToManyField(Trend, related_name="fish")  # Relationship to trends.
    techniques = models.ManyToManyField(Technique, related_name="fish")  # Relationship to techniques.
    tutorial_video = models.URLField(blank=True, null=True)  # Optional tutorial video URL.

    def __str__(self):
        return self.species
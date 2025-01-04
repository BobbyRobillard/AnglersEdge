from django.db import models

class Trend(models.Model):
    description = models.TextField(unique=True)

    def __str__(self):
        return self.description[:50]


class Technique(models.Model):
    description = models.TextField(unique=True)

    def __str__(self):
        return self.description[:50]


class Bait(models.Model):
    name = models.CharField(max_length=100, unique=True)
    properties = models.TextField()
    notes = models.TextField()

    def __str__(self):
        return self.name


class Food(models.Model):
    name = models.CharField(max_length=100, unique=True)
    properties = models.TextField()
    notes = models.TextField()

    def __str__(self):
        return self.name


class Structure(models.Model):
    name = models.CharField(max_length=100, unique=True)
    properties = models.TextField()
    notes = models.TextField()

    def __str__(self):
        return self.name


class Fish(models.Model):
    species = models.CharField(max_length=100, unique=True)
    bait = models.ManyToManyField(Bait, related_name='fish')
    food = models.ManyToManyField(Food, related_name='fish')
    structure = models.ManyToManyField(Structure, related_name='fish')
    trends = models.ManyToManyField(Trend, related_name='fish')
    techniques = models.ManyToManyField(Technique, related_name='fish')
    tutorial_video = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.species

from django.db import models
import json


class Fish(models.Model):
    species = models.CharField(max_length=100, unique=True)
    bait = models.ManyToManyField('Bait', related_name='fish')
    food = models.ManyToManyField('Food', related_name='fish')
    trends = models.TextField(blank=True, help_text="JSON-encoded list of trends")
    techniques = models.TextField(blank=True, help_text="JSON-encoded list of techniques")
    structure = models.ManyToManyField('Structure', related_name='fish')
    tutorial_video = models.URLField(max_length=200, blank=True)
    locations = models.ManyToManyField('Location', related_name='fish')

    def save(self, *args, **kwargs):
        # Ensure trends and techniques are JSON-encoded
        self.trends = json.dumps(self.trends) if isinstance(self.trends, list) else self.trends
        self.techniques = json.dumps(self.techniques) if isinstance(self.techniques, list) else self.techniques
        super().save(*args, **kwargs)

    def get_trends(self):
        return json.loads(self.trends) if self.trends else []

    def get_techniques(self):
        return json.loads(self.techniques) if self.techniques else []

    def __str__(self):
        return self.species


class Food(models.Model):
    name = models.CharField(max_length=100, unique=True)
    properties = models.TextField(blank=True, help_text="JSON-encoded list of properties")
    notes = models.TextField(blank=True, help_text="JSON-encoded list of notes")

    def save(self, *args, **kwargs):
        self.properties = json.dumps(self.properties) if isinstance(self.properties, list) else self.properties
        self.notes = json.dumps(self.notes) if isinstance(self.notes, list) else self.notes
        super().save(*args, **kwargs)

    def get_properties(self):
        return json.loads(self.properties) if self.properties else []

    def get_notes(self):
        return json.loads(self.notes) if self.notes else []

    def __str__(self):
        return self.name


class Bait(models.Model):
    name = models.CharField(max_length=100, unique=True)
    properties = models.TextField(blank=True, help_text="JSON-encoded list of properties")
    notes = models.TextField(blank=True, help_text="JSON-encoded list of notes")

    def save(self, *args, **kwargs):
        self.properties = json.dumps(self.properties) if isinstance(self.properties, list) else self.properties
        self.notes = json.dumps(self.notes) if isinstance(self.notes, list) else self.notes
        super().save(*args, **kwargs)

    def get_properties(self):
        return json.loads(self.properties) if self.properties else []

    def get_notes(self):
        return json.loads(self.notes) if self.notes else []

    def __str__(self):
        return self.name


class Structure(models.Model):
    name = models.CharField(max_length=100, unique=True)
    properties = models.TextField(blank=True, help_text="JSON-encoded list of properties")
    notes = models.TextField(blank=True, help_text="JSON-encoded list of notes")

    def save(self, *args, **kwargs):
        self.properties = json.dumps(self.properties) if isinstance(self.properties, list) else self.properties
        self.notes = json.dumps(self.notes) if isinstance(self.notes, list) else self.notes
        super().save(*args, **kwargs)

    def get_properties(self):
        return json.loads(self.properties) if self.properties else []

    def get_notes(self):
        return json.loads(self.notes) if self.notes else []

    def __str__(self):
        return self.name


class Location(models.Model):
    name = models.CharField(max_length=100, unique=True)
    properties = models.TextField(blank=True, help_text="JSON-encoded list of properties")
    notes = models.TextField(blank=True, help_text="JSON-encoded list of notes")

    def save(self, *args, **kwargs):
        self.properties = json.dumps(self.properties) if isinstance(self.properties, list) else self.properties
        self.notes = json.dumps(self.notes) if isinstance(self.notes, list) else self.notes
        super().save(*args, **kwargs)

    def get_properties(self):
        return json.loads(self.properties) if self.properties else []

    def get_notes(self):
        return json.loads(self.notes) if self.notes else []

    def __str__(self):
        return self.name

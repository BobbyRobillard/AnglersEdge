from django.contrib import admin

from .models import Fish, Food, Bait, Structure, Location

admin.site.register(Fish)
admin.site.register(Food)
admin.site.register(Bait)
admin.site.register(Structure)
admin.site.register(Location)

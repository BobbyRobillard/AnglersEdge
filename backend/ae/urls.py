from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),  # Admin panel
    path("api/", include("api.urls")),  # Include app-level URLs for the API
    path("api-auth/", include("rest_framework.urls")),  # DRF login/logout
]

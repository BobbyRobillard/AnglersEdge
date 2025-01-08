from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic.base import TemplateView

from api.views import HomePageView

urlpatterns = [
    # Other routes (e.g., API, admin, React)
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),

    # Catch-all route for React
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html'), name='react'),
]

from django.urls import path
from .views import featured_course


urlpatterns = [path("featured_course/", featured_course, name="featured-course")]

from django.urls import path
from . import views

urlpatterns = [
    path("overview/", views.student_overview, name="student-overview"),
    path("student-analytics/", views.student_analytics_data, name="student-analytics"),
    path(
        "student-profile-data/", views.student_profile_data, name="student-profile-data"
    ),
]

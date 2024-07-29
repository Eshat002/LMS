from django.urls import path
from . import views

urlpatterns = [path("overview/", views.student_overview, name="student-overview")]

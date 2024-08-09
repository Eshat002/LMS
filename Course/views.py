from django.shortcuts import render
from django.http import JsonResponse
from .models import Course

def featured_course(request):
    courses = Course.objects.filter(featured=True)
    data = []
    for course in courses:
        course_data = {
            "name":course.name,
            "start":course.start_date,
            "rating":course.rating,
            "type":course.type,
            "bookmark":course.bookmark,
        }
        data.append(course_data)
    return JsonResponse({"data": data})
from django.shortcuts import render
from django.http import JsonResponse
from .models import Course
from django.utils.formats import date_format


def featured_course(request):
    courses = Course.objects.filter(featured=True)
    data = []
    for course in courses:
        course_data = {
            "name":course.name,
            "start":date_format(course.start_date,'M j'),
            "rating":course.rating,
            "type":course.type,
            "bookmark":course.bookmark,
            "creator":course.creator,
        }
        data.append(course_data)
    return JsonResponse({"data": data})
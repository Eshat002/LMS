from django.shortcuts import render
from Student.models import Student
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required


def student_overview(request):
    return render(request, "student_overview.html", {})

def student_analytics_data(request):
    if not request.user.is_authenticated:
        return JsonResponse({"login":False})

    student = request.user.student
    datas = []
    student_data = {
            "name": student.user.username,
            "progress": student.progress,
            "better_than": student.better_than,
            "score": student.score,
            "type": student.type,
            "score_image": "/media/images/risk_calculation_panel.png"
        }
    datas.append(student_data)
    return JsonResponse({"data": datas})

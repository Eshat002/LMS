from django.shortcuts import render


def student_overview(request):
    return render(request, "student_overview.html", {})

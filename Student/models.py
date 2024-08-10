from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator
from django.utils.dateformat import format

student_types = [
    ("avarage", "Avarage"),
    ("good", "Good"),
    ("best", "Best"),
]

student_roles = [
    ("web developer", "Web Developer"),
    ("ux/ui designer", "UX/UI developer"),
    ("hacker", "hacker"),
]


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    progress = models.PositiveIntegerField(validators=[MaxValueValidator(100)])
    score = models.DecimalField(max_digits=3, decimal_places=2, default=10.0)
    better_than = models.PositiveIntegerField(
        validators=[MaxValueValidator(100)], default=0
    )
    type = models.CharField(choices=student_types, max_length=20, default="good")
    profile_pic = models.ImageField(upload_to="profile_pic", null=True, blank=True)
    role = models.CharField(
        choices=student_roles, max_length=20, default="web developer"
    )

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.user.username


class Reminder(models.Model):
    title = models.CharField(max_length=100)
    time = models.DateTimeField(auto_now_add=False)
    student = models.ForeignKey(
        Student, blank=True, null=True, on_delete=models.SET_NULL
    )

    @property
    def formatted_time(self):
        return format(self.time, "j F g a")

    def __str__(self):
        return self.title

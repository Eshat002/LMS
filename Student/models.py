from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator

student_types = [
    ("avarage", "Avarage"),
    ("good", "Good"),
    ("best", "Best"),
]


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    progress = models.PositiveIntegerField(validators=[MaxValueValidator(100)])
    score = models.DecimalField(max_digits=3, decimal_places=2, default=10.0)
    better_than = models.PositiveIntegerField(
        validators=[MaxValueValidator(100)], default=0
    )
    type = models.CharField(choices=student_types, max_length=20, default="good")

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

    def __str__(self):
        return self.title

from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    progress = models.PositiveIntegerField(validators=[MaxValueValidator(100)])

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

from django.db import models

Course_types = [
    ("ux design", "UX DESIGN"),
    ("video editing", "VIDEO EDITING"),
    ("web dev", "WEB DEV"),
]


class Course(models.Model):
    name = models.CharField(max_length=200)
    creator = models.CharField(max_length=200)
    type = models.CharField(choices=Course_types, max_length=20, default="web dev")
    start_date = models.DateTimeField(auto_now_add=False)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    bookmark = models.BooleanField(default=False)
    video = models.FileField(null=True, blank=True)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.name[:40]

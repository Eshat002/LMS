# Generated by Django 5.0.7 on 2024-08-09 18:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Course", "0002_course_video"),
    ]

    operations = [
        migrations.AddField(
            model_name="course",
            name="featured",
            field=models.BooleanField(default=False),
        ),
    ]

# Generated by Django 5.0.7 on 2024-08-01 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Course", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="course",
            name="video",
            field=models.FileField(blank=True, null=True, upload_to=""),
        ),
    ]
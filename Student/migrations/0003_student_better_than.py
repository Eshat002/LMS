# Generated by Django 5.0.7 on 2024-08-01 19:22

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Student", "0002_alter_student_score"),
    ]

    operations = [
        migrations.AddField(
            model_name="student",
            name="better_than",
            field=models.PositiveIntegerField(
                default=0, validators=[django.core.validators.MaxValueValidator(100)]
            ),
        ),
    ]

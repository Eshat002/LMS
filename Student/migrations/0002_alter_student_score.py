# Generated by Django 5.0.7 on 2024-08-01 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Student", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="student",
            name="score",
            field=models.DecimalField(decimal_places=2, default=10.0, max_digits=3),
        ),
    ]
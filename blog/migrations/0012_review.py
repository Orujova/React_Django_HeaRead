# Generated by Django 3.2 on 2023-07-31 21:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0011_delete_review'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('rating', models.CharField(max_length=100)),
            ],
        ),
    ]

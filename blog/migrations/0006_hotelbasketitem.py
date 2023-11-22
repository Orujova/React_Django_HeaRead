# Generated by Django 3.2 on 2023-07-31 13:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_basketitem'),
    ]

    operations = [
        migrations.CreateModel(
            name='HotelBasketItem',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('quantity', models.PositiveIntegerField(default=1)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.hotel')),
            ],
        ),
    ]

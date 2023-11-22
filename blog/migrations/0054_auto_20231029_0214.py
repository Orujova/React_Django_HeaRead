# Generated by Django 3.2 on 2023-10-28 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0053_remove_user_profile_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='AudioRecording',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('audio_file', models.FileField(upload_to='audio_recordings/')),
                ('transcription', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='basketitem',
            name='product',
        ),
        migrations.DeleteModel(
            name='Blog',
        ),
        migrations.RemoveField(
            model_name='favorititem',
            name='product',
        ),
        migrations.RemoveField(
            model_name='hotelbasketitem',
            name='product',
        ),
        migrations.RemoveField(
            model_name='hotelfavorititem',
            name='product',
        ),
        migrations.DeleteModel(
            name='BasketItem',
        ),
        migrations.DeleteModel(
            name='FavoritItem',
        ),
        migrations.DeleteModel(
            name='Hotel',
        ),
        migrations.DeleteModel(
            name='HotelBasketItem',
        ),
        migrations.DeleteModel(
            name='HotelFavoritItem',
        ),
        migrations.DeleteModel(
            name='Product',
        ),
    ]
# my_blog_project/blog/admin.py
from django.contrib import admin
from .models import Contact,User,AdminUser
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message')
    

class CustomUserAdmin(BaseUserAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_verified')
    
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(User, CustomUserAdmin)
admin.site.register(AdminUser)

from .models import Transcript

class TranscriptAdmin(admin.ModelAdmin):
    list_display = ('text', 'created_at',)
    list_filter = ('created_at',)
    search_fields = ('text',)
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)

admin.site.register(Transcript, TranscriptAdmin)
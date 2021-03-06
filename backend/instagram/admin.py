from django.contrib import admin
from .models import Post, Comment, Tag
from django.utils.safestring import mark_safe


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['photo_tag', 'caption']
    list_display_links = ['caption']

    @mark_safe
    def photo_tag(self, post):
        return f"<img src='{post.photo.url}' style='width: 100px;' />"


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    pass


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass

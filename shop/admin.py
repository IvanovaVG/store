from django.contrib import admin
from .models import Category, Product, Cart, Size, CartItem

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Size)
admin.site.register(CartItem)
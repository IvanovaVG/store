from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    #path('category/<slug:category_slug>', views.home, name='products_by_category'),
    path('category/<slug:category_slug>/<slug:product_slug>', views.product, name='product_detail'),
    path('cart', views.cart_detail, name='cart_detail'),
    path('cart/add/<int:product_id><int:size_id><int:user_id>', views.add_cart, name='add_cart'),
    path('cart/remove/<int:product_id>', views.cart_remove, name='cart_remove'),
    path('cart/delete/<int:product_id>', views.cart_delete, name='cart_delete'),
    path('account/create/', views.signUpView, name='signup'),
    path('account/login/', views.loginView, name='login'),
    path('account/logout/', views.signoutView, name='signout'),
    path('orders_detail/<int:user_id>', views.orders_detail, name='orders_detail'),
    path('create_order/<int:user_id>', views.create_order, name='create_order'),
    path('category/<slug:category_slug>', views.products_by_category, name='products_by_category'),
]
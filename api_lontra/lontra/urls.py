from django.conf.urls import url
from . import views

urlpatterns = [
    # url('tokens/', views.CustomAuthToken.as_view(), name='login'),
    url('usuarios/', views.UsuarioList.as_view(), name='usuarios'),
    url('receitas/', views.ReceitaList.as_view(), name='receitas'),
]
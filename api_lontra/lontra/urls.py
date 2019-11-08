from django.conf.urls import url
from . import views

urlpatterns = [
    # url('tokens/', views.CustomAuthToken.as_view(), name='tokens'),
    url('usuarios/', views.UsuarioList.as_view(), name='usuarios'),
    url('historico/', views.HistoricoList.as_view(), name='historico'),
    url('receitas/', views.ReceitaList.as_view(), name='receitas'),
]
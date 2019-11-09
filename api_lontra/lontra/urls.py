from django.conf.urls import url
from . import views
from . import models
from .models import *

urlpatterns = [
    # url('tokens/', views.CustomAuthToken.as_view(), name='tokens'),
    url('usuarios/', views.UsuarioList.as_view(), name='usuarios'),
    #url('historico/', views.HistoricoList.as_view(), name='historico'),
    url('receitas/', views.ReceitaList.as_view(), name='receitas'),
    # url('historico_update/', views.HistoricoUpdate.as_view(), name="historico_update")
    url('altera_user/(?P<pk>[0-9]+)', views.AlteraUsuario.as_view(), name='altera_user')
]
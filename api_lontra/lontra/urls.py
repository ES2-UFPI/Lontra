from django.conf.urls import url
from . import views

urlpatterns = [
    # url('tokens/', views.CustomAuthToken.as_view(), name='tokens'),
    url('usuarios/', views.UsuarioList.as_view(), name='usuarios'),
    url('historico/', views.HistoricoList.as_view(), name='historico'),
    url('receitas/', views.ReceitaList.as_view(), name='receitas'),
    url('avaliacoes/', views.AvaliacaoList.as_view(),name='avaliacoes'),
    url('categorias/', views.CategoriaList.as_view(),name='categoria')
    # url('historico_update/', views.HistoricoUpdate.as_view(), name="historico_update")
]
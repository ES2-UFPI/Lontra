from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^receitas/$', views.ReceitaList.as_view(), name='receita-list'),

]
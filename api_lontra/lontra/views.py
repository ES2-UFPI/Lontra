from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import generics, viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from .models import Receita, Usuario
from .serializers import ReceitaSerializer, UsuarioSerializer, HistoricoListSerializer

class UsuarioList(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class HistoricoList(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = HistoricoListSerializer

class ReceitaList(generics.ListCreateAPIView):
    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer
    
    def get_queryset(self):        
        receitas = []
        ingredientes_buscados = self.request.GET['ingredientes'].split(';')

        for receita in Receita.objects.all():
            ingredientes_receita = receita.ingredientes.split(';')
            flag = False

            for ingrediente in ingredientes_buscados:
                for i in ingredientes_receita:
                    if ingrediente in i:
                        flag = True
            
            if flag == True:
                receitas.append(receita)
        
        return receitas
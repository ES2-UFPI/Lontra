from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import generics, viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from .models import *
from .serializers import *

class UsuarioList(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class HistoricoList(generics.ListCreateAPIView):
    queryset = Historico.objects.all()
    serializer_class = HistoricoListSerializer

class ReceitaList(generics.ListCreateAPIView):
    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer
    # filter_backends = [filters.SearchFilter]
    # search_fields = ['nome', 'ingredientes']
    
    def get_queryset(self):        
        receitas = []
        ingredientes_buscados = self.request.GET['ingredientes'].split(';')

        print(len(ingredientes_buscados))

        if ingredientes_buscados[0] == "":
            print('oi')
            return Receita.objects.all()
        else:
            
            for receita in Receita.objects.all():
                ingredientes_receita = receita.ingredientes.split(';')
                aux = len(ingredientes_buscados)
                cont = 0
                for ingrediente in ingredientes_buscados:
                    if ingrediente in ingredientes_receita:
                        cont = cont + 1
                if cont == aux:
                    receitas.append(receita)
            
            return receitas
from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import generics, viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from .models import *
from .serializers import *

import math

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
        fator = self.request.GET['fator']
        print(fator)

        if ingredientes_buscados[0] == "":
            return Receita.objects.all()
        else:
            if int(fator) == 100:
                for receita in Receita.objects.all():
                    ingredientes_receita = receita.ingredientes.split(';')
                    if len(ingredientes_buscados) == len(ingredientes_receita):
                        flag = 0
                        for ingrediente in ingredientes_buscados:
                            if ingrediente not in ingredientes_receita:
                                flag = 1
                        if flag == 0:
                            receitas.append(receita)

            if int(fator) < 100 and int(fator) >= 90:
                aux = len(ingredientes_buscados)
                for receita in Receita.objects.all():
                    ingredientes_receita = receita.ingredientes.split(';')
                    cont = 0
                    for ingrediente in ingredientes_buscados:
                        if ingrediente in ingredientes_receita:
                            cont = cont + 1
                    if cont == aux and len(ingredientes_receita) - aux <= 1:
                        receitas.append(receita)

            if int(fator) < 90 and int(fator) >= 80:
                aux = len(ingredientes_buscados)
                for receita in Receita.objects.all():
                    ingredientes_receita = receita.ingredientes.split(';')
                    cont = 0
                    for ingrediente in ingredientes_buscados:
                        if ingrediente in ingredientes_receita:
                            cont = cont + 1
                    if cont == aux and len(ingredientes_receita) - aux <= 2:
                        receitas.append(receita)
                        
            if int(fator) < 80 and int(fator) > 60:
                aux = len(ingredientes_buscados)
                for receita in Receita.objects.all():
                    ingredientes_receita = receita.ingredientes.split(';')
                    cont = 0
                    for ingrediente in ingredientes_buscados:
                        if ingrediente in ingredientes_receita:
                            cont = cont + 1
                    if cont == aux and len(ingredientes_receita) - aux <= 3:
                        receitas.append(receita)

            if int(fator) <= 60 and int(fator) >= 40:
                aux = len(ingredientes_buscados)
                for receita in Receita.objects.all():
                    ingredientes_receita = receita.ingredientes.split(';')
                    cont = 0
                    for ingrediente in ingredientes_buscados:
                        if ingrediente in ingredientes_receita:
                            cont = cont + 1
                    if cont == aux:
                        receitas.append(receita)
            if int(fator) <= 10:
                for receita in Receita.objects.all():
                    ingredientes_receita = receita.ingredientes.split(';')

                    for ingrediente in ingredientes_buscados:
                        if ingrediente in ingredientes_receita:
                            receitas.append(receita)
                            break

            if int(fator) < 40 and int(fator) > 10:
                aux = len(ingredientes_buscados)

                for receita in Receita.objects.all():
                    ingredientes_receita = receita.ingredientes.split(';')
                    flag = 0

                    for ingrediente in ingredientes_buscados:
                        if ingrediente in ingredientes_receita:
                            flag = flag + 1
                    if aux - flag <= aux/2:
                        receitas.append(receita)
            
            return receitas



class TempoDePreparoList(generics.ListCreateAPIView):
    query = Receita.objects.all()
    serializer_class = ReceitaSerializer

    def get_queryset(self):
        receitas = []

        if(self.request.GET['tempo'] == ""):
            print('Nada')
        else:
            tempo_recebido = int(self.request.GET['tempo'])
            print(tempo_recebido)

            for i in Receita.objects.all():
                if int(i.tempo) <= tempo_recebido:
                    receitas.append(i)
            
        return receitas


class MelhoresReceitasList(generics.ListCreateAPIView):
    query = Receita.objects.all()
    serializer_class = ReceitaSerializer

    def get_queryset(self):
        nota = self.request.GET['nota']
        receitas = []

        for i in Receita.objects.all():
            if i.nota == int(nota):
                receitas.append(i)

        return receitas
from django.shortcuts import render
from .models import Receita
from django.contrib.auth.models import User
from .serializers import ReceitaSerializer, UsuarioSerializer
from rest_framework import generics

class ReceitaList(generics.ListCreateAPIView):

    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer
    
class UsuarioList(generics.ListCreateAPIView):
    
    queryset = User.objects.all()
    serializer_class = UsuarioSerializer

# Create your views here.

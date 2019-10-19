from django.shortcuts import render
from .models import Receita
from .serializers import ReceitaSerializer
from rest_framework import generics

class ReceitaList(generics.ListCreateAPIView):

    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer

# Create your views here.

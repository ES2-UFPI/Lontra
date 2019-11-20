from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'
        
class ImagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imagem
        fields = '__all__'

class HistoricoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['historico']

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class ReceitaSerializer(serializers.ModelSerializer):
    # imagens = ImagemSerializer(read_only=False, many=True)
    # categorias = CategoriaSerializer(read_only=False, many=True)

    class Meta:
        model = Receita
        fields = '__all__'
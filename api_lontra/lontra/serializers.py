from rest_framework import serializers
from .models import Receita
from django.contrib.auth.models import User

class ReceitaSerializer(serializers.ModelSerializer):

    class Meta:

        model = Receita
        fields = '__all__'
        
class UsuarioSerializer(serializers.ModelSerializer):
    # snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())

    class Meta:
        
        model = User
        fields = ['id','first_name','last_name','username','email','password']
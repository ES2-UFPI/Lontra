from django.test import TestCase, Client
from .models import Receita, Usuario
from .serializers import UsuarioSerializer, ImagemSerializer, HistoricoListSerializer, CategoriaSerializer, ReceitaSerializer
import json
from rest_framework import status
from django.urls import reverse

client = Client()

class ReceitasTest(TestCase):
    def preparacao(self):
        Receita.objects.create(
            nome = 'Pudim de Leite', 
            tempo = '110', 
            nota = '5', 
            url = 'https://img.itdg.com.br/tdg/images/recipes/000/024/104/263980/263980_original.jpg?mode=crop&width=710&height=400', 
            ingredientes = 'açúcar;leite condensado;leite;ovos', 
            preparo = 'Calda; Em uma panela de fundo largo, derreta o açúcar até ficar dourado; Junte 1/2 xícara (chá) de água quente e mexa com uma colher; Deixe ferver até dissolver os torrões de açúcar e a calda engrossar; Forre com a calda uma forma com furo central (19 cm de diâmetro) e reserve; Pudim: Bata todos os ingredientes do pudim no liquidificador e despeje na forma reservada; Asse em banho-maria, em forno médio (180º C), por cerca de 1 hora e 30 minutos; Depois de frio, leve para gelar por cerca de 6 horas; Desenforme e sirva a seguir'
        )
        Receita.objects.create(
            nome = 'FEIJÃO TROPEIRO', 
            tempo = '60', 
            nota = '5', 
            url = 'https://img.itdg.com.br/tdg/images/recipes/000/000/961/327806/327806_original.jpg?mode=crop&width=710&height=400', 
            ingredientes = '500g de feijão carioquinha cozido;200g de toucinho;1 concha de óleo;1 cebola média picada;4 dentes de alho;5 ovos;1 colher de sopa de sal com alho;Cheiro verde a gosto;200g de farinha de mandioca', 
            preparo = 'Coloque o óleo em uma panela e doure a cebola, acrescente o bacon e frite bem.;Adicione o alho, sal e os ovos, misturando com cuidado para que não se despedacem muito.;Refogue o feijão, baixe o fogo, misture a farinha aos poucos e o cheiro verde.'
        )
        
    def todas_as_receitas(self):
        response = client.get(reverse('receitas'))
        receitas = Receita.objects.all()
        serializer = ReceitaSerializer(receitas, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
    def buscar_receitas(self):
        response = client.get(reverse('receitas/busca/?ingredientes=leite'))
        receitas = Receita.objects.filter(ingredientes__contains='leite')
        serializer = BuscaReceitaList(receitas, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
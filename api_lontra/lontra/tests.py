from rest_framework.test import APITestCase, APIClient
from .models import *
from rest_framework import status
from django.urls import reverse, resolve
import json
from django.test import Client


class AvaliacaoTests(APITestCase):

    def setUp(self):
        self.client = APIClient()

    def test_verifica_endpoint(self):
        response = self.client.get(reverse('avaliacoes'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_adicionar_usuario(self):
        usuario = {
            "token": "fdfaskdfjklajsdfsdf6as65d4f"
        }

        response = self.client.post(
            reverse('usuarios'), usuario, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_adicionar_categoria(self):
        categoria = {
            "nome": "massas e bolos"
        }

        response = self.client.post(
            reverse('categoria'), categoria, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_adicionar_receita(self):
        categoria = {
            "nome": "massas e bolos"
        }

        self.client.post(
            reverse('categoria'), categoria, format="json")

        receita = {
            "nome": "BOLO FRITO",
            "tempo": "25",
            "nota": 4,
            "url": "https://img.itdg.com.br/tdg/images/recipes/000/133/773/155774/155774_original.jpg?mode=crop&width=710&height=400",
            "ingredientes": "3/4 xícara de chá de leite;2 xícaras de chá de tapioca;1 ovo;3 colheres de sopa de margarina;1 colher de sopa de erva-doce (ou 2 colheres de sopa de queijo parmesão ralado);Sal a gosto;2 xícaras de chá de óleo aproximadamente, para a fritura",
            "preparo": "Numa bacia coloque a tapioca e o ovo.;Misture-os com as mãos.;Leve ao fogo o leite, a margarina, a erva-doce e o sal a gosto.;Quando o leite levantar fervura retire-o do fogo.;Junte o leite quente a massa.;Sove bem a massa, até que ela comece a fazer um barulhinho.;Depois de bem sovada faça tirinhas com a massa.;Enrole as tirinhas como uma trança de duas pernas.;Coloque numa panela óleo o suficiente para que os bolos fiquem boiando.;Deixe o óleo esquentar bem e coloque os bolinhos para fritar.;Tampe a panela.;Vire-os de vez em quando.;Atenção: não deixe crianças perto e tome cuidado pois eles podem estourar.;Sirva morno com café.",
            "categorias": [1]
        }

        response = self.client.post(
            reverse('receitas'), receita, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_salva_avaliacao(self):
        usuario = {
            "token": "fdfaskdfjklajsdfsdf6as65d4f"
        }

        self.client.post(
            reverse('usuarios'), usuario, format="json")
        categoria = {
            "nome": "massas e bolos"
        }

        self.client.post(
            reverse('categoria'), categoria, format="json")

        receita = {
            "nome": "BOLO FRITO",
            "tempo": "25",
            "nota": 4,
            "url": "https://img.itdg.com.br/tdg/images/recipes/000/133/773/155774/155774_original.jpg?mode=crop&width=710&height=400",
            "ingredientes": "3/4 xícara de chá de leite;2 xícaras de chá de tapioca;1 ovo;3 colheres de sopa de margarina;1 colher de sopa de erva-doce (ou 2 colheres de sopa de queijo parmesão ralado);Sal a gosto;2 xícaras de chá de óleo aproximadamente, para a fritura",
            "preparo": "Numa bacia coloque a tapioca e o ovo.;Misture-os com as mãos.;Leve ao fogo o leite, a margarina, a erva-doce e o sal a gosto.;Quando o leite levantar fervura retire-o do fogo.;Junte o leite quente a massa.;Sove bem a massa, até que ela comece a fazer um barulhinho.;Depois de bem sovada faça tirinhas com a massa.;Enrole as tirinhas como uma trança de duas pernas.;Coloque numa panela óleo o suficiente para que os bolos fiquem boiando.;Deixe o óleo esquentar bem e coloque os bolinhos para fritar.;Tampe a panela.;Vire-os de vez em quando.;Atenção: não deixe crianças perto e tome cuidado pois eles podem estourar.;Sirva morno com café.",
            "categorias": [1]
        }

        self.client.post(
            reverse('receitas'), receita, format="json")

        avalia = {
            "usuario": [1],
            "receita": [1],
            "comentario": "Tudo gostoso",
            "nota": 5,
        }
        response = self.client.post(
            reverse('avaliacoes'), avalia, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

class ReceitasTests(APITestCase):

    def setUp(self):
        self.client = APIClient()

        Receita.objects.create(
            nome = "BOLO FRITO",
            tempo = "25",
            nota = 4,
            url = "https://img.itdg.com.br/tdg/images/recipes/000/133/773/155774/155774_original.jpg?mode=crop&width=710&height=400",
            ingredientes = "3/4 xícara de chá de leite;2 xícaras de chá de tapioca;1 ovo;3 colheres de sopa de margarina;1 colher de sopa de erva-doce (ou 2 colheres de sopa de queijo parmesão ralado);Sal a gosto;2 xícaras de chá de óleo aproximadamente, para a fritura",
            preparo = "Numa bacia coloque a tapioca e o ovo.;Misture-os com as mãos.;Leve ao fogo o leite, a margarina, a erva-doce e o sal a gosto.;Quando o leite levantar fervura retire-o do fogo.;Junte o leite quente a massa.;Sove bem a massa, até que ela comece a fazer um barulhinho.;Depois de bem sovada faça tirinhas com a massa.;Enrole as tirinhas como uma trança de duas pernas.;Coloque numa panela óleo o suficiente para que os bolos fiquem boiando.;Deixe o óleo esquentar bem e coloque os bolinhos para fritar.;Tampe a panela.;Vire-os de vez em quando.;Atenção: não deixe crianças perto e tome cuidado pois eles podem estourar.;Sirva morno com café.",
        )

    def test_todas_as_receitas(self):
        response = self.client.get(reverse('receitas'))

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_receitas_por_ingredientes(self):
        response = self.client.get('receitas/busca/?ingredientes=leite')
        print(Receita.objects.count())

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_busca_vazia(self):
        response = self.client.get('receitas/busca/?ingredientes=tatu')

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_cadastrar_receita(self):
        receita = {
            "nome": "BOLO FRITO",
            "tempo": "25",
            "nota": 4,
            "url": "https://img.itdg.com.br/tdg/images/recipes/000/133/773/155774/155774_original.jpg?mode=crop&width=710&height=400",
            "ingredientes": "3/4 xícara de chá de leite;2 xícaras de chá de tapioca;1 ovo;3 colheres de sopa de margarina;1 colher de sopa de erva-doce (ou 2 colheres de sopa de queijo parmesão ralado);Sal a gosto;2 xícaras de chá de óleo aproximadamente, para a fritura",
            "preparo": "Numa bacia coloque a tapioca e o ovo.;Misture-os com as mãos.;Leve ao fogo o leite, a margarina, a erva-doce e o sal a gosto.;Quando o leite levantar fervura retire-o do fogo.;Junte o leite quente a massa.;Sove bem a massa, até que ela comece a fazer um barulhinho.;Depois de bem sovada faça tirinhas com a massa.;Enrole as tirinhas como uma trança de duas pernas.;Coloque numa panela óleo o suficiente para que os bolos fiquem boiando.;Deixe o óleo esquentar bem e coloque os bolinhos para fritar.;Tampe a panela.;Vire-os de vez em quando.;Atenção: não deixe crianças perto e tome cuidado pois eles podem estourar.;Sirva morno com café.",
            "categorias": [4]
        }

        response = self.client.post(reverse('receitas'), receita, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_cadastrar_receita_invalida(self):
        receita = {
            "nome": "BOLO FRITO",
            "tempo": "25",
            "nota": 4,
            "url": "https://img.itdg.com.br/tdg/images/recipes/000/133/773/155774/155774_original.jpg?mode=crop&width=710&height=400",
            "ingredientes": "3/4 xícara de chá de leite;2 xícaras de chá de tapioca;1 ovo;3 colheres de sopa de margarina;1 colher de sopa de erva-doce (ou 2 colheres de sopa de queijo parmesão ralado);Sal a gosto;2 xícaras de chá de óleo aproximadamente, para a fritura",
            "preparo": "Numa bacia coloque a tapioca e o ovo.;Misture-os com as mãos.;Leve ao fogo o leite, a margarina, a erva-doce e o sal a gosto.;Quando o leite levantar fervura retire-o do fogo.;Junte o leite quente a massa.;Sove bem a massa, até que ela comece a fazer um barulhinho.;Depois de bem sovada faça tirinhas com a massa.;Enrole as tirinhas como uma trança de duas pernas.;Coloque numa panela óleo o suficiente para que os bolos fiquem boiando.;Deixe o óleo esquentar bem e coloque os bolinhos para fritar.;Tampe a panela.;Vire-os de vez em quando.;Atenção: não deixe crianças perto e tome cuidado pois eles podem estourar.;Sirva morno com café.",
            "categorias": "BOLOS E TORTAS SALGADAS"
        }

        response = self.client.post(reverse('receitas'), receita, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
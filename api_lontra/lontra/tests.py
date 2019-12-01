from rest_framework.test import APITestCase, APIClient
from .models import Receita, Avaliacao
from rest_framework import status
from django.urls import reverse
import json
from django.test import Client


class AvaliacaoTests(APITestCase):

    def setUp(self):
        self.client = APIClient()

    def test_verifica_endpoint(self):
        response = self.client.get(reverse('avaliacao'))
        self.assertEqual(response.status_code,status.HTTP_200_OK)

    def test_salva_avaliacao(self):
        client = Client()
        avalia = {
            "comentario": "Tudo gostoso",
            "nota": 5,
            "usuario": [1],
            "receita": [1]
        }

        response = client.post(reverse('avaliacao'), data=json.dumps(avalia), content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

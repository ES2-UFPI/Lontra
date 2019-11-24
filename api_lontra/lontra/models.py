from django.db import models

class Imagem(models.Model):
    url = models.CharField(max_length=1023)

    def __str__(self):
        return self.url

class Categoria(models.Model):
    nome = models.CharField(max_length=255)

    def __str__(self):
        return self.nome

class Usuario(models.Model):
    token = models.CharField(max_length=255)
    criado_em = models.DateTimeField(auto_now_add=True)
    historico = models.ManyToManyField(Categoria)
    
    def __str__(self):
        return self.token

class Receita(models.Model):
    nome = models.CharField(max_length=255)
    # imagens = models.ManyToManyField(Imagem)
    tempo = models.IntegerField()
    nota = models.IntegerField(default=5)
    url = models.CharField(max_length=1023)
    ingredientes = models.TextField(default="")
    preparo = models.TextField(default="")
    categorias = models.ManyToManyField(Categoria)
    criado_em = models.DateTimeField(auto_now_add=True)
    atualizado_em = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nome
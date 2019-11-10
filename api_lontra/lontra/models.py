from django.db import models

# Adicionando um comentário para ver se o git percebe a modificação

class Receita(models.Model):

    class Meta:
        db_table = 'receita'

    title = models.CharField(max_length=200)
    seconds = models.IntegerField()
    nota = models.IntegerField(default=5)
    url = models.CharField(max_length=1000,default="")
    ingredientes = models.TextField(default="")
    preparo = models.TextField(default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

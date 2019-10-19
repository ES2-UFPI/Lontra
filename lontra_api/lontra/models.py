from django.db import models
from django.conf import settings
from django.utils import timezone


class Receita(models.Model):
    
    class Meta:
        db_table = 'receita'
    
    title = models.CharField(max_length=200)
    seconds = models.IntegerField()
    
    
    def __str__(self):
        return self.title

# Create your models here.

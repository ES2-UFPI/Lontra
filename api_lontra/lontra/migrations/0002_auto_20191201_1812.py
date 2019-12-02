# Generated by Django 2.2.7 on 2019-12-01 21:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lontra', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuario',
            name='categoria',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='historico',
        ),
        migrations.CreateModel(
            name='Avaliacao',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nota', models.IntegerField(default='5')),
                ('receita', models.ManyToManyField(to='lontra.Receita')),
                ('usuario', models.ManyToManyField(to='lontra.Usuario')),
            ],
        ),
    ]
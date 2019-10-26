import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Recomendados from './src/Recomendados';
//import stackNavigation from './src/PesquisarReceitas';
import { createStackNavigator } from 'react-navigation-stack';

import Receita from './src/Receita';
import ReceitasBuscadas from './src/ReceitasBuscadas';
import telaInicial from './src/telaInicial';
import Pesquisa from './src/Pesquisa';

const stackNavigation = createStackNavigator(
	{
		Pesquisa: {
			screen: Pesquisa,
			title: 'Pesquisa'
		},
		ReceitasBuscadas:{
			screen: ReceitasBuscadas,
			title: 'ReceitasBuscadas'
		},
		telaInicial: {
			screen: telaInicial,
			title: 'Lontra'
		},
		Receita: {
			screen: Receita,
			title: 'Receita'
		},
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: 'orange',
			},
			headerTintColor: '#fff',
		}
	}
);







const TabNavigator = createBottomTabNavigator({
  Recomendados: Recomendados,
  PesquisarReceitas: stackNavigation,
});

export default createAppContainer(TabNavigator);
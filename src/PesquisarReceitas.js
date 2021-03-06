import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Receita from './Receita';
import ReceitasBuscadas from './ReceitasBuscadas';
import telaInicial from './telaInicial';
import Pesquisa from './Pesquisa';

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


export default stackNavigation

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	container_central:{
		backgroundColor: 'blue',
		width: 120,
		height: 70,
		alignItems: "center",
		justifyContent:  'center',
		borderRadius: 10
	},
	texto:{
		color: 'white',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
	}
});
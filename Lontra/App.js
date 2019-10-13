import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Receita from './src/Receita';
import ReceitasBuscadas from './src/ReceitasBuscadas';
import telaInicial from './src/telaInicial';
import Pesquisa from './src/Pesquisa';

const stackNavigation = createStackNavigator(
	{
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
		Pesquisa: {
			screen: Pesquisa,
			title: 'Pesquisa'
		},
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: 'blue',
			},
			headerTintColor: '#fff',
		}
	}
);

const Navegacao = createAppContainer(stackNavigation);

export default function App() {
	return (
		<Navegacao/>
	);
}

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
import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Api from './src/sevicos/Api';

import Recomendados from './src/Recomendados';
import Receita from './src/Receita';
import ReceitasBuscadas from './src/ReceitasBuscadas';
import telaInicial from './src/telaInicial';
import Pesquisa from './src/Pesquisa';
import AvaliarReceita from './src/AvaliarReceita';
import PesquisaPorIngredientes from './src/PesquisaPorIngredientes';
import PesquisaPorTempo from './src/PesquisaPorTempo';
import ReceitasRetornadas from './src/ReceitasRetornadas';
import ReceitasBemAvaliadas from './src/ReceitasBemAvaliadas';

const stackNavigation = createStackNavigator(
	{
		Pesquisa: {
			screen: Pesquisa,
			title: 'Pesquisa'
		},
		PesquisaPorIngredientes:{
			screen: PesquisaPorIngredientes,
			title: 'PesquisaPorIngredientes'
		},
		PesquisaPorTempo:{
			screen: PesquisaPorTempo,
			title: 'PesquisaPorTempo'
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
		ReceitasRetornadas:{
			screen: ReceitasRetornadas,
			title: 'Receitas Retornadas'
		},
		AvaliarReceita:{
			screen: AvaliarReceita,
			title: 'Avaliar Receita'
		},
		ReceitasBemAvaliadas:{
			screen: ReceitasBemAvaliadas,
			title: 'ReceitasBemAvaliadas'
		}
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


const stackNavigation2 = createStackNavigator(
	{
		Recomendados:{
			screen: Recomendados,
			title: 'Recomendados'
		},
		ReceitasBuscadas:{
			screen: ReceitasBuscadas,
			title: 'ReceitasBuscadas'
		},
		Receita: {
			screen: Receita,
			title: 'Receita'
		},
		AvaliarReceita:{
			screen: AvaliarReceita,
			title: 'Avaliar Receita'
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
	Pesquisar: stackNavigation,
  	Recomendados: stackNavigation2
},{
	tabBarOptions:{
		activeTintColor: "#ff4500",      
		inactiveTintColor: "#858585",  
		style: {               
		 paddingVertical: 10,        
		 backgroundColor: "#fff",
		 border: '#ffffff'  
		},      
		labelStyle: {        
		 fontSize: 14,        
		 lineHeight: 16,     
		},
	}
});

const Navegacao = createAppContainer(TabNavigator);

export default class App extends Component {
	async registerForPushNotificationsAsync() {
		const { status: existingStatus } = await Permissions.getAsync(
			Permissions.NOTIFICATIONS
		);

		let finalStatus = existingStatus;

		if (existingStatus !== 'granted') {
			const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
			finalStatus = status;
		}

		if (finalStatus !== 'granted') {
			return;
		}

		// Esse token era para ser o Token de Notificação
		let token = "10"
		//var json = "{\"token\": \"" + token + "\"}";
		await AsyncStorage.setItem('token', token);
		await Api.enviarToken(token).catch(error => console.log(error));
	}

	async componentWillMount() {
		await this.registerForPushNotificationsAsync();
	}

	render() {
		return (
			<Navegacao/>
		);
	}
}


//<Navegacao/>
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

		console.log("iheihihr")
		let token = "10"
		await AsyncStorage.setItem('tokenNotificacao', token);
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
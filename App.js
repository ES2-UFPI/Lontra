import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import axios from 'axios';
import Api from './src/sevicos/Api';

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

const Navegacao = createAppContainer(stackNavigation);

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
		let token = "13"//await Notifications.getExpoPushTokenAsync();
		//await AsyncStorage.setItem('tokenNotificacao', token);
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

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Button, Icon, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
console.disableYellowBox = true;

export default class AvaliarReceita extends Component {
  static navigationOptions = {
    title: 'Avaliar Receita'
  };

  constructor(props) {
    super(props);

    this.state = {
    };

  }
  
 
  render() {

    const params = this.props.navigation.state.params;
    return (
     <View style={{alignItems: 'center', justifyContent: 'center'}}>
         <Text>Receita: {params.item.title}</Text>
         <Ionicons name="ios-add-circle-downcircleo" size={40} />
     </View>
    );
  }
}

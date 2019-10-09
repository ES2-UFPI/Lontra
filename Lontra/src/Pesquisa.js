import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class telaInicial extends Component {
    static navigationOptions = {
        title: 'Pesquisa'
    };

    constructor(props){
        super(props);
  
        this.state = {
  
        };
       
      }

  render(){
    return (
      <View style={styles.tela}>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tela:{
    alignItems: 'center',
    justifyContent: 'center'
  }
});
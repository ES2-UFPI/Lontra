import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class telaInicial extends Component {
    static navigationOptions = {
        title: 'Pesquisa'
    };

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
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_central:{
    backgroundColor: 'blue',
    width: 140,
    height: 90,
    alignItems: "center",
    justifyContent:  'center',
    borderRadius: 10
  },
  texto:{
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  }
});
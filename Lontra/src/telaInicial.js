import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';


export default class telaInicial extends Component {
    static navigationOptions = {
        title: 'Lontra',
    };

    constructor(props){
      super(props);

      this.state = {

      };

      //this.mudaPagina = this.mudaPagina.bind(this)
     
    }

    mudaPagina(){
      this.props.navigation.navigate('Pesquisa');
    }

  render(){
    return (
      <View style={styles.tela}>
        <TouchableOpacity style={styles.botao} onPress={() => this.props.navigation.navigate('Pesquisa')}>
          <View style={styles.container}>
            <View style={styles.container_central}>
              <Text style={styles.texto}>Pesquisar Receitas</Text>
            </View>
          </View>
        </TouchableOpacity>
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
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';


export default class Recomendados extends Component {

  static navigationOptions = {
    title: 'Recomendados para Você'
  };


    constructor(props){
      super(props);

      this.state = {

      };

      //this.mudaPagina = this.mudaPagina.bind(this)
     
    }

  render(){
    return (
      <View>
        <View>
          <Text style={styles.texto}>Você também pode gostar dessas receitas aqui:</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  texto:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
    fontSize: 18
  }
});

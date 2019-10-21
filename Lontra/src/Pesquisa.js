import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Button, Icon, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
console.disableYellowBox = true;

export default class telaInicial extends Component {
  static navigationOptions = {
    title: 'Pesquisa'
  };

  constructor(props) {
    super(props);

    this.state = {
      ingredientes: ['', '', '', ''],
    };

    this.alerta = this.alerta.bind(this)
    this.pegaDado = this.pegaDado.bind(this)

  }
  
  pegaDado(valor){
    
    let lista = this.state.ingredientes;
    lista[item.index] = TextInputValue
    this.setState(lista);
  }

  alerta(){

    let aux = this.state.ingredientes;
    var lista = []
    for(var i=0; i < aux.length; i++){
      if(aux[i] != ''){
        lista.push(aux[i])
      }
    }
    this.setState({ ingredientes: lista })

    /*

    axios.post('user/',{
      Ingredientes: lista
    })
    .then( (response) => {
      this.props.navigation.navigate('ReceitasBuscadas');
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    });

    */

    alert(lista)
    this.props.navigation.navigate('ReceitasBuscadas');

  }
  render() {
    return (
      <View style={{ marginBottom: 53, paddingLeft: 10, paddingRight: 10 }}>
        <ScrollView>
          <View style={styles.tela}>
            <View style={styles.areaTexto}>
              <Text style={styles.texto}>Digite os Ingredientes:</Text>
            </View>
            <FlatList 
              data={this.state.ingredientes} 
              renderItem={({ item, index }) => (
                <View style={styles.areaInput} key={index.toString()}>
                  <TextInput placeholder='Ingrediente' underlineColorAndroid='#ff4500' value={item} style={styles.input} key={index.toString()}
                    onChangeText={TextInputValue => {
                      let lista = this.state.ingredientes;
                      lista[index] = TextInputValue;
                      this.setState({ingredientes: lista});
                    }} />
                {/* Add o btn de menos aqui */}
                  
                </View>
              )}
            keyExtrator={(item, index )=> index.toString()}/>
          </View>

        </ScrollView>
        <View>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => {
              this.adicionaTextInput
              let ingredientes = this.state.ingredientes;
              ingredientes.push('')
              this.setState({ ingredientes: ingredientes })
            }}>
              <Ionicons name="ios-add-circle-outline" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress= {this.alerta}>
              <View style={styles.container}>
                <View style={styles.container_central}>
                  <Text style={styles.textoBotao}>Salvar Ingredientes</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tela: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaInput: {
    justifyContent: 'center',
    height: 60,
    width: 300,
    //marginTop: 50,
    //padding: 20,

  },
  texto: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
    fontSize: 18
  },
  areaTexto: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    paddingLeft: 6
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container_central: {
    backgroundColor: '#ff4500',
    width: 150,
    height: 50,
    padding: 5,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 10
  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  }
});
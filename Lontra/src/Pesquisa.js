import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Button, Icon, TextInput} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default class telaInicial extends Component {
    static navigationOptions = {
        title: 'Pesquisa'
    };

    constructor(props){
        super(props);
  
        this.state = {
            ingredientes: ['', '', '', ''],
        };
       
      }
  render(){
    return (
      <View style={{marginBottom: 53, paddingLeft: 10, paddingRight: 10}}>
      <ScrollView>
        <View style={styles.tela}>
          <View style={styles.areaTexto}>
            <Text style={styles.texto}>Digite os Ingredientes:</Text>
          </View>
          <FlatList data={ this.state.ingredientes } renderItem={({ item }) => (
              <View style={styles.areaInput}>
              <TextInput placeholder= 'Ingrediente' underlineColorAndroid='blue' style={styles.input}
                onChangeText={TextInputValue =>{
                  let lista = this.state.ingredientes;
                  lista[item.index] = TextInputValue
                  this.setState({ ingredientes : lista });
                }}/>
                {/* Add o btn de menos aqui */}
            </View>
          )}/>
        </View>
          
      </ScrollView>
        <View>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => {
              let ingredientes = this.state.ingredientes;
              ingredientes.push('')
              this.setState({  ingredientes: ingredientes  })
            }}>
              <Ionicons name="ios-add-circle-outline" size={40}/>
            </TouchableOpacity>
              <TouchableOpacity style={styles.botao} onPress={() => {}}>
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
  tela:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaInput:{
    justifyContent: 'center',
    height: 60,
    width: 300,
    //marginTop: 50,
    //padding: 20,

  },
  texto:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
    fontSize: 18
  },
  areaTexto:{
      alignItems: 'center',
      justifyContent: 'center',
  },
  input:{
      height: 40,
      paddingLeft: 6
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container_central:{
    backgroundColor: 'blue',
    width: 150,
    height: 50,
    padding: 5,
    alignItems: "center",
    justifyContent:  'center',
    borderRadius: 10
  },
  textoBotao:{
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  }
});
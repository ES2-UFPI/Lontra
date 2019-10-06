import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container_central}>
        <Text style={styles.texto}>Lontra</Text>
      </View>
      <Text style={styles.pesquisa}>Pesquisa de Receitas</Text>
      <TextInput style = {styles.input} placeholder="Digite o ingrediente" 
    underlineColorAndroid={'transparent'} />
      <TouchableOpacity style={styles.button}>
      <Text style={styles.btntext}>Pesquisar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_central:{
    backgroundColor: 'blue',
    width: 120,
    height: 70,
    alignItems: "center",
    justifyContent:  'center',
    borderRadius: 10
  },
  texto:{
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pesquisa:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    marginTop: 25,
  },
  input: {
    marginBottom: 25,
    color: '#fff',
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    fontSize: 15,
  },
  button:{
    backgroundColor: '#7FFF00',
    alignItems: "center",
    justifyContent:  'center',
    borderRadius: 10
  },
  btntext:{
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  }
});
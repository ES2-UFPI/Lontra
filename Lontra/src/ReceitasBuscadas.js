import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button, Icon, Image } from 'react-native';


export default class ReceitasBuscadas extends Component {
  static navigationOptions = {
    title: 'Resultados'
  };

  constructor(props) {
    super(props);

    this.state = {
        resultado:[
            {key: '1', img: 'https://img.itdg.com.br/tdg/images/recipes/000/010/254/294238/294238_original.jpg?mode=crop&width=160&height=160', titulo: 'Fricassê de Frango', autor: 'Kenia'},
            {key: '2', img: 'https://img.itdg.com.br/tdg/images/recipes/000/001/282/317634/317634_original.jpg?mode=crop&amp;width=160&amp;height=160', titulo: 'Fricassê de Frango', autor: 'Kenia'},
            {key: '3', img: 'https://img.itdg.com.br/tdg/images/recipes/000/000/072/38758/38758_original.jpg?mode=crop&amp;width=160&amp;height=160', titulo: 'Fricassê de Frango', autor: 'Kenia'},
            {key: '4', img: 'https://img.itdg.com.br/tdg/images/recipes/000/010/254/294238/294238_original.jpg?mode=crop&width=160&height=160', titulo: 'Fricassê de Frango', autor: 'Kenia'},
            {key: '5', img: 'https://img.itdg.com.br/tdg/images/recipes/000/001/282/317634/317634_original.jpg?mode=crop&amp;width=160&amp;height=160', titulo: 'Fricassê de Frango', autor: 'Kenia'},
        ]
      
    };

    this.renderizarReceita = this.renderizarReceita.bind(this)

    fetch('url da API')
    .then((r) => r.json())
    .then((json) => {
      let aux = this.state;
      aux.resultado = json;
      this.setState(aux);
    });

  }

  renderizarReceita(item){
      return(
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Receita')}>
                <View style={styles.telaPost}>
                    <Image source={{uri: item.img}} style={styles.imagem}/>
                    <View style={styles.areaTexto}>
                        <Text style={styles.texto}>{item.titulo}</Text>
                        <Text> Feita por: {item.autor}</Text>
                    </View>
                </View>
                <View style={{borderTopWidth: 1}}></View>
            </TouchableOpacity>
          </View>
      );
  }
  
  
  render() {
    return (
      <View style={{ paddingTop: 25, paddingLeft: 20, paddingRight: 15}}>
          <FlatList data={this.state.resultado} renderItem={({item}) => this.renderizarReceita(item)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texto: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
    fontSize: 18
  },
  areaPost:{
    shadowColor: '#000000',
    backgroundColor: '#FFFFFF',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 4,
    borderRadius: 6,
    elevation: 4
  },
  imagem:{
      width: 120,
      height: 100,
      borderRadius: 10
  },
  telaPost:{
      flexDirection: 'row',
      paddingTop: 7,
      paddingBottom: 7,
  },
  areaTexto:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: 10,
      textAlign: 'center'

  }
});
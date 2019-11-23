import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
console.disableYellowBox = true;

export default class Pesquisa extends Component {
  static navigationOptions = {
    title: 'Pesquisar por:'
  };

  constructor(props) {
    super(props);

    this.state = {
      opcao_de_pesquisa: [{ nome: '      Ingredientes', img: 'https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/bdm/field/image/ingredientes-bolo-perfeito.jpg' },
      { nome: 'Por Menor Tempo de Preparo', img: 'data:image/jpeg;base64,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' },
      { nome: 'Pelas Receitas Mais Bem Avaliadas', img: 'data:image/jpeg;base64,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' }],


    };

    this.renderizarMenu = this.renderizarMenu.bind(this)
    this.mudaPagina = this.mudaPagina.bind(this)

  }

  mudaPagina(id) {

    if(id == 0){
      this.props.navigation.navigate('PesquisaPorIngredientes')
    }else{
      if(id == 1){
        this.props.navigation.navigate('PesquisaPorTempo')

      }else{

      }
    }

  }

  renderizarMenu(item, index) {

    return (
      <View>
        <TouchableOpacity onPress={() => this.mudaPagina(index)}>
          <View style={styles.telaPost}>
            <Image source={{ uri: item.img }} style={styles.imagem} />
            <View style={styles.areaTexto}>
              <Text style={styles.texto}>{item.nome}</Text>
            </View>
          </View>
          <View style={{ borderTopWidth: 1 }}></View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={{ paddingTop: 25, paddingLeft: 20, paddingRight: 15 }}>
        <FlatList data={this.state.opcao_de_pesquisa} renderItem={({ item, index }) => this.renderizarMenu(item, index)} keyExtrator={(index) => index.toString()} />
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
  imagem: {
    width: 120,
    height: 100,
    borderRadius: 10
  },
  telaPost: {
    flexDirection: 'row',
    paddingTop: 7,
    paddingBottom: 7,
  },
  areaTexto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    textAlign: 'center'

  }
});
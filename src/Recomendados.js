import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image} from 'react-native';

export default class Recomendados extends Component {

  static navigationOptions = {
    title: 'Recomendados'
  };

  constructor(props) {
    super(props);

    this.state = {
        resultado:[],
        carregado: false
      
    };

    this.renderizarReceita = this.renderizarReceita.bind(this)
    this.mudaPagina = this.mudaPagina.bind(this)


    fetch('http://10.0.0.106:8000/receitas/?ingredientes')
    .then((r) => r.json())
    .then((json) => {
      this.setState({carregado: true})
      this.setState({resultado: json});
    });
  }

  mudaPagina(nome){
    this.props.navigation.navigate('Receita', {item: nome})
  }

  renderizarReceita(item){

     return(
      <View>
        <TouchableOpacity onPress={() => this.mudaPagina(item)}>
            <View style={styles.telaPost}>
                <Image source={{uri: item.url}} style={styles.imagem}/>
                <View style={styles.areaTexto}>
                    <Text style={styles.texto}>{item.title}</Text>
                    <Text> Avaliação: {item.nota}</Text>
                </View>
            </View>
            <View style={{borderTopWidth: 1}}></View>
        </TouchableOpacity>
    </View>
     );
  }


  render(){
    return (
      <View>
      <View style={styles.telaCompleta}>
        <View style={styles.areaTexto1}>
          <Text style={styles.texto1}>Você também pode gostar dessas receitas:</Text>
        </View>
        </View>
        <View style={{ paddingTop: 80, paddingLeft: 20, paddingRight: 15}}>
            <FlatList data={this.state.resultado} renderItem={({item}) => this.renderizarReceita(item)} keyExtrator={(index)=> index.toString()}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  telaCompleta:{
    flex: 1,
    alignItems: "center",
    paddingTop: 10
  },
  texto1:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
    fontSize: 18
  },
  areaTexto1:{
    height: 70,
    width: 300,
    borderRadius: 5,
    shadowColor: '#000000',
    backgroundColor: '#FFFFFF',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 4,
    borderRadius: 6,
    elevation: 4
  },
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

  },
  telaCarregando:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
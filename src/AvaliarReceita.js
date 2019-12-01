import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios';
console.disableYellowBox = true;

export default class AvaliarReceita extends Component {
  static navigationOptions = {
    title: 'Avaliar Receita'
  };

  constructor(props) {
    super(props);

    this.state = {
        estrela1: 'ios-star-outline',
        estrela2: 'ios-star-outline',
        estrela3: 'ios-star-outline',
        estrela4: 'ios-star-outline',
        estrela5: 'ios-star-outline',
        nota: ''
    };

    this.altera = this.altera.bind(this);
    this.enviarAvaliacao = this.enviarAvaliacao.bind(this);

  }

  enviarAvaliacao(){

      if(this.state.nota == ''){
          alert('Faça a Avaliação Primeiro')
      }else{


      }
  }

  altera(numero){
      if(numero == 5){
          this.setState({estrela1: 'ios-star'})
          this.setState({estrela2: 'ios-star'})
          this.setState({estrela3: 'ios-star'})
          this.setState({estrela4: 'ios-star'})
          this.setState({estrela5: 'ios-star'})
          this.setState({nota: '5'})
      }
      if(numero == 4){
        this.setState({estrela1: 'ios-star'})
        this.setState({estrela2: 'ios-star'})
        this.setState({estrela3: 'ios-star'})
        this.setState({estrela4: 'ios-star'})
        this.setState({estrela5: 'ios-star-outline'})
        this.setState({nota: '4'})
      }
      if(numero == 3){
        this.setState({estrela1: 'ios-star'})
        this.setState({estrela2: 'ios-star'})
        this.setState({estrela3: 'ios-star'})
        this.setState({estrela4: 'ios-star-outline'})
        this.setState({estrela5: 'ios-star-outline'})
        this.setState({nota: '3'})
      }
      if(numero == 2){
        this.setState({estrela1: 'ios-star'})
        this.setState({estrela2: 'ios-star'})
        this.setState({estrela3: 'ios-star-outline'})
        this.setState({estrela4: 'ios-star-outline'})
        this.setState({estrela5: 'ios-star-outline'})
        this.setState({nota: '2'})
      }
      if(numero == 1){
        this.setState({estrela1: 'ios-star'})
        this.setState({estrela2: 'ios-star-outline'})
        this.setState({estrela3: 'ios-star-outline'})
        this.setState({estrela4: 'ios-star-outline'})
        this.setState({estrela5: 'ios-star-outline'})
        this.setState({nota: '1'})
      }
}
  
 
  render() {

    const params = this.props.navigation.state.params;
    return (
     <View style={{alignItems: 'center', justifyContent: 'center'}}>
         <Text style={styles.texto}>Receita: {params.item.title}</Text>
         <View style={styles.areaAvaliacao}>
             <View>
                 <TouchableOpacity onPress={() => this.altera(1)}>
                 <Icon
                    reverse
                    name= {this.state.estrela1}
                    type='ionicon'
                    color='#517fa4'
                    />                 
                 </TouchableOpacity>
             </View>
             <View>
                <TouchableOpacity onPress={() => this.altera(2)}>
                <Icon
                    reverse
                    name={this.state.estrela2}
                    type='ionicon'
                    color='#517fa4'
                    />                
                        
                </TouchableOpacity>
             </View>
             <View>
             <TouchableOpacity onPress={() => this.altera(3)}>
             <Icon
                    reverse
                    name={this.state.estrela3}
                    type='ionicon'
                    color='#517fa4'
              />                
                     </TouchableOpacity>
             </View>
             <View>
             <TouchableOpacity onPress={() => this.altera(4)}>
             <Icon
                    reverse
                    name={this.state.estrela4}
                    type='ionicon'
                    color='#517fa4'
              />                
                     
             </TouchableOpacity>
             </View>
             <View>
             <TouchableOpacity onPress={() => this.altera(5)}>
                <Icon
                    reverse
                    name={this.state.estrela5}
                    type='ionicon'
                    color='#517fa4'
                    />                
             </TouchableOpacity>
             </View>
         </View>
         <Text style={styles.texto}>Sua nota: {this.state.nota}</Text>
         <View style={{paddingTop: 17}}>
            <TouchableOpacity onPress= {this.enviarAvaliacao}>
                <View style={styles.container}>
                    <View style={styles.container_central}>
                    <Text style={styles.textoBotao}>Enviar Avaliação</Text>
                    </View>
                </View>
            </TouchableOpacity>
         </View>
         <View style={{paddingTop: 17}}>
            <View style={styles.areaTexto1}>
            <Text style={styles.texto1}>Avaliação média dos usuários:</Text>
            <Text style={styles.texto2}>{params.item.nota} Estrelas</Text>
            </View>
        </View>

     </View>
    );
  }
}

const styles = StyleSheet.create({
    areaAvaliacao:{
        flexDirection: 'row'
    },
    texto: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop: 5,
        fontSize: 18
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
      container_central: {
        backgroundColor: '#517fa4',
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
      },
      texto1:{
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop: 5,
        fontSize: 18
      },
      areaTexto1:{
        width: 300,
        borderRadius: 5,
        shadowColor: '#000000',
        backgroundColor: '#FFFFFF',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 4,
        borderRadius: 6,
        elevation: 4,
      },
      texto2:{
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold'
      }
});
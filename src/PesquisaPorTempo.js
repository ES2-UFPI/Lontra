import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Slider } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
console.disableYellowBox = true;
import Api from './sevicos/Api';

export default class PesquisaPorTempo extends Component {
    static navigationOptions = {
        title: 'Pesquisa:'
    };

    constructor(props) {
        super(props);

        this.state = {
            tempoSelecionado: 15
        };

        this.pesuisar = this.pesuisar.bind(this)

    }

    pesuisar(){
        this.props.navigation.navigate('ReceitasRetornadas', {tempo: this.state.tempoSelecionado.toFixed(0)})
    }

    render() {
        return (
            <View style={{ marginBottom: 53, paddingLeft: 10, paddingRight: 10, flex: 1, paddingTop: 15 }}>

                <View style={styles.tela}>
                    <View style={styles.areaTexto}>
                        <Text style={styles.texto}>Selecione o Tempo de Preparo:</Text>

                    </View>
                </View>

                <Slider minimumValue={15} maximumValue={180} onValueChange={(valor) => this.setState({ tempoSelecionado: valor })}
                    value={this.tempoSelecionado} />

                {this.state.tempoSelecionado < 180 ? <Text style={styles.texto}> Até {this.state.tempoSelecionado.toFixed(0)} minutos</Text> :
                    <Text style={styles.texto}> Mais de {this.state.tempoSelecionado.toFixed(0)} minutos</Text>}

                <View style={{ paddingTop: 15 }}>
                    <View style={{ justifyContent: 'center' }}>

                        <TouchableOpacity style={styles.botao} onPress={() => this.pesuisar()}>
                            <View style={styles.container}>
                                <View style={styles.container_central}>
                                    <Text style={styles.textoBotao}>Pesquisar Receitas</Text>
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
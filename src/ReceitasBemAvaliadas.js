import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
console.disableYellowBox = true;
import Api from './sevicos/Api';


export default class ReceitasBemAvaliadas extends Component {
    static navigationOptions = {
        title: 'Melhores Receitas'
    };

    constructor(props) {
        super(props);

        this.state = {
            resultado: [],
            carregado: false,

        };

        this.renderizarReceita = this.renderizarReceita.bind(this)
        this.mudaPagina = this.mudaPagina.bind(this)

    }

    mudaPagina(nome) {
        this.props.navigation.navigate('Receita', { item: nome })
    }

    renderizarReceita(item) {

        return (
            <View>
                <TouchableOpacity onPress={() => this.mudaPagina(item)}>
                    <View style={styles.telaPost}>
                        <Image source={{ uri: item.url }} style={styles.imagem} />
                        <View style={styles.areaTexto}>
                            <Text style={styles.texto}>{item.nome}</Text>
                            <Text> Avaliação: {item.nota}</Text>
                        </View>
                    </View>
                    <View style={{ borderTopWidth: 1 }}></View>
                </TouchableOpacity>
            </View>
        );
    }

    async pegarAsReceitasAsync() {
 
        const receitas = await Api.receberReceitasBemAvaliadas().catch(error => console.log(error));
        this.setState({ resultado: receitas.data})
        this.setState({ carregado: true })

    }

    async componentWillMount() {
        await this.pegarAsReceitasAsync();
    }




    render() {
        if (this.state.carregado == false) {
            return (
                <View style={styles.telaCarregando}>
                    <Text>Carregando ...</Text>
                </View>
            );
        } else {
            return (
                <View style={{ paddingTop: 25, paddingLeft: 20, paddingRight: 15 }}>
                    <FlatList data={this.state.resultado} renderItem={({ item }) => this.renderizarReceita(item)} keyExtrator={(index) => index.toString()} />
                </View>
            );
        }
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
    areaPost: {
        shadowColor: '#000000',
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
        borderRadius: 6,
        elevation: 4
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

    },
    telaCarregando: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
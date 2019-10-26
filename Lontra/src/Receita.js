import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';


export default class Receita extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Receita'
    });

    constructor(props) {
        super(props);

        this.state = { receita: {nome: 'SALADA DE FRUTAS MARAVILHOSA', nota: 4, imagens: ['https://img.itdg.com.br/tdg/images/recipes/000/001/470/76954/76954_original.jpg?mode=crop&width=710&height=400', 'https://img.itdg.com.br/tdg/images/recipes/000/001/470/131194/131194_original.jpg?mode=crop&width=710&height=400'], tempoPreparo: '15 minutos', rendimento: '8 porções', ingredientes: ['ingrediente 1', 'ingrediente 2', 'ingrediente 3'], modoPreparo: ['Passos ...']}    
        

        
    };

    this.mudaPagina = this.mudaPagina.bind(this)

    }

    mudaPagina(nome){
        this.props.navigation.navigate('AvaliarReceita', {item: nome})
    }

    renderItem(item, index) {
        return (
            <View style={ styles.item } key={ item }>
                <Text>{ index + 1 + '. ' }</Text>
                <Text>{ item }</Text>
            </View>
        );
    }

    render() {

        const params = this.props.navigation.state.params;

        return (
            <ScrollView>
                <View style={ styles.container }>
                    <Image style={ styles.imagem } source={{ uri: params.item.url }}/>
                    
                    <Text style={ styles.titulo }>{ params.item.title }</Text>
                    
                    <View style={ styles.detalhes }>
                        <View style={ styles.detalhe }>
                            <Text style={ styles.descricao }>Nota:</Text>
                            <Text style={ styles.descricao }>{ params.item.nota }</Text>
                        </View>
                        <View style={ styles.separador }/>
                        <View style={ styles.detalhe }>
                            <Text style={ styles.descricao }>Tempo de Preparo:</Text>
                            <Text style={ styles.descricao }>{ params.item.seconds } s</Text>
                        </View>
                        <View style={ styles.separador }/>
                        <View style={ styles.detalhe }>
                            <Text style={ styles.descricao }>Rendimento:</Text>
                            <Text style={ styles.descricao }>{ this.state.receita.rendimento }</Text>
                        </View>
                    </View>
                    
                    <Text style={[ styles.detalhes, {marginTop: 8} ]}>Ingredientes:</Text>
                    { 
                        
                        this.state.receita.ingredientes.map((ingrediente, index) => {
                        return this.renderItem(ingrediente, index);
                    }) }

                    <Text style={[ styles.detalhes, {marginTop: 8} ]}>Modo de Preparo:</Text>
                    { this.state.receita.modoPreparo.map((modo, index) => {
                        return this.renderItem(modo, index);
                    }) }

                    <View>
                        <TouchableOpacity onPress={() => this.mudaPagina(params.item)}>
                            <Text style={[ styles.detalhes, {marginTop: 8} ]}>Avalie essa Receita Aqui</Text>
                        </TouchableOpacity>
                    </View>
    
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 8
    },
    imagem: {
        height: 203,
        resizeMode: 'contain'
    },
    titulo: {
        fontSize: 20,
        color: 'orange', 
        marginVertical: 8,
        fontWeight: 'bold'
    },
    detalhes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'orange',
        padding: 8,
        borderRadius: 8,
        fontSize: 18,
        color: '#ffffff'
    },
    detalhe: {
        alignItems: 'center'
    },
    separador: {
        borderRightWidth: 1,
        borderRightColor: '#ffffff'
    },
    descricao: {
        fontSize: 18,
        color: '#ffffff'
    },
    item: {
        flexDirection: 'row',
    }
});
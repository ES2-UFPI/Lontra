import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';

export default class Receita extends Component {
    static navigationOptions = {
        title: 'Receita',
    };

    constructor(props) {
        super(props);

        this.state = { receita: {nome: 'SALADA DE FRUTAS MARAVILHOSA', nota: 4, imagens: ['https://img.itdg.com.br/tdg/images/recipes/000/001/470/76954/76954_original.jpg?mode=crop&width=710&height=400', 'https://img.itdg.com.br/tdg/images/recipes/000/001/470/131194/131194_original.jpg?mode=crop&width=710&height=400'], tempoPreparo: '15 minutos', rendimento: '8 porções', ingredientes: ['bananas', 'maçãs', 'mamão médio', 'laranjas', 'melão', 'outras frutas a gosto', 'leite condensado'], modoPreparo: ['Picar todas as frutas, acrescentar meio copo de água mineral, e a lata de leite condensado. Fica uma sobremesa maravilhosa e super fácil de fazer, ideal para ser servida após o churrasco.']} };
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
        return (
            <ScrollView>
                <View style={ styles.container }>
                    <Image style={ styles.imagem } source={{ uri: this.state.receita.imagens[0] }}/>
                    
                    <Text style={ styles.titulo }>{ this.state.receita.nome }</Text>
                    
                    <View style={ styles.detalhes }>
                        <View style={ styles.detalhe }>
                            <Text style={ styles.descricao }>Nota:</Text>
                            <Text style={ styles.descricao }>{ this.state.receita.nota }</Text>
                        </View>
                        <View style={ styles.separador }/>
                        <View style={ styles.detalhe }>
                            <Text style={ styles.descricao }>Tempo de Preparo:</Text>
                            <Text style={ styles.descricao }>{ this.state.receita.tempoPreparo }</Text>
                        </View>
                        <View style={ styles.separador }/>
                        <View style={ styles.detalhe }>
                            <Text style={ styles.descricao }>Rendimento:</Text>
                            <Text style={ styles.descricao }>{ this.state.receita.rendimento }</Text>
                        </View>
                    </View>
                    
                    <Text style={[ styles.detalhes, {marginTop: 8} ]}>Ingredientes:</Text>
                    { this.state.receita.ingredientes.map((ingrediente, index) => {
                        return this.renderItem(ingrediente, index);
                    }) }

                    <Text style={[ styles.detalhes, {marginTop: 8} ]}>Modo de Preparo:</Text>
                    { this.state.receita.modoPreparo.map((modo, index) => {
                        return this.renderItem(modo, index);
                    }) }
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
        resizeMode: 'contain',
        borderRadius: 6
    },
    titulo: {
        fontSize: 20,
        color: '#ff6347', 
        marginVertical: 8,
        fontWeight: 'bold'
    },
    detalhes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ff6347',
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
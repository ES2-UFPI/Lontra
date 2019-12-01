import axios from 'axios';

const api = axios.create({ 
    baseURL: 'http://botufpi.herokuapp.com' 
});

api.enviarToken = async (token) => {
    await api.post(
        '/usuarios/',
        {
            'token': '10'
        }
    );
}

api.receitas = async (token) => {
    api.get(
        '/receitas',
        {
            headers: {
                'token': token 
            },
        }
    );
}

api.buscarReceitas = async (token, parametros) => {
    console.log(api.baseURL + `/receitas/?ingredientes=${parametros}`)
    api.get(
        `/receitas/?ingredientes=${parametros}`,
        {
            headers: {
                'token': token 
            },
        }
    );
}

api.buscarReceitasPorIngredientes = async (parametros) => {
    //console.log(parametros)
    return await api.get('/receitas/?ingredientes=' + parametros);
}

api.receberReceitasPeloTempo = async (tempo_especificado) => {
    return await api.get('/tempo/?tempo=' + tempo_especificado);
}

api.buscarReceitasPorIngredientesComFator = async (parametros, fator) => {
    return await api.get('/receitas/?ingredientes=' + parametros + '&fator=' + fator);
}

api.receberReceitasBemAvaliadas = async () => {
    console.log('/melhores/?nota=5')
    return await api.get('/melhores/?nota=5');
}

export default api;
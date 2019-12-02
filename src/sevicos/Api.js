import axios from 'axios';

const api = axios.create({ 
    baseURL: 'http://10.13.65.85:8000/' 
});

api.enviarToken = async (token) => {
    await api.post(
        '/usuarios/',
        {
            'token': token
        }
    );
}

api.enviarTokenAPI = async (json) => {
    return await api.post('/usuarios/', json);
}

api.enviarAvaliacao = async (token, id, nota) => {
    await api.post(
        '/avaliacoes',
        {
            'nota': nota,
            'usuario': token,
            'receita': id
        }
    );

}

api.enviarAvaliacaoAPI = async (json) => {
    return await api.post('/avaliacoes', json);
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
    return await api.get('/melhores/?nota=5');
}

export default api;
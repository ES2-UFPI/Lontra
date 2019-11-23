import axios from 'axios';

const api = axios.create({ 
    baseURL: 'http://10.0.0.106:8000' 
});

api.enviarToken = async (token) => {
    await api.post(
        '/usuarios/',
        {
            'token': '10',
            'historico': 11
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

api.receberReceitasPeloTempo = async (tempo_especificado) => {
    return await api.get('/tempo/?tempo=' + tempo_especificado);
}

export default api;
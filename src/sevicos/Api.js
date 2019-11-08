import axios from 'axios';

const api = axios.create({ 
    baseURL: 'http://10.13.66.119:8000' 
});

api.enviarToken = async (token) => {
    await api.post(
        '/usuarios/',
        {
            'token': "13",
            'historico': 2
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
    api.get(
        `/receitas/?ingredientes=${parametros}`,
        {
            headers: {
                'token': token 
            },
        }
    );
}

export default api;
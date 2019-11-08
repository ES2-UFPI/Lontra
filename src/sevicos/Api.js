import axios from 'axios';

const api = axios.create({ 
    baseURL: 'http://10.13.59.23:8000' 
});

api.enviarToken = async (token) => {
    api.post(
        '/usuarios',
        {
            'token': token,
            'historico': 1
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
import axios from 'axios';

const api = axios.create({ 
    baseURL: 'http://10.0.0.106:8000' 
});

api.enviarToken = async (token) => {
    alert(token)
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
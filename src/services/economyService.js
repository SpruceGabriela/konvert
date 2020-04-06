import api from './api';

export default {
    getCurrency: async function(currency){
        const response = await api.get(`/${currency}`);

        return response.data;
    }
}
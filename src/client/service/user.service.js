import axios from 'axios';
const baseURL = '/api/user';

const login = async (username, password) => {
    try {
        console.log('-----');
        const response = await axios.post(`${baseURL}/login`, {
            username,
            password,
        });
        console.log(response.data, '----------');
        if (response.status !== 200) {
            throw response.data;
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    login,
};

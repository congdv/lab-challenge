import axios from 'axios';
const baseURL = '/api/user';

const login = async (username, password) => {
    try {
        const response = await axios.post(`${baseURL}/login`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const register = async (username, name, password) => {
    try {
        const response = await axios.post(`${baseURL}/register`, {
            username,
            name,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    login,
    register,
};

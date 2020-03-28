import axios from 'axios';
const baseURL = '/api/labs';
import { authHelper } from '../utils';
const getAll = async () => {
    const config = {
        headers: authHelper(),
    };
    try {
        const response = await axios.get(`${baseURL}`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const labService = {
    getAll,
};

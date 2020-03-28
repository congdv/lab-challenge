import axios from 'axios';
const baseURL = '/api/labs';

const getAll = async () => {
    try {
        const response = await axios.get(`${baseURL}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const labService = {
    getAll,
};

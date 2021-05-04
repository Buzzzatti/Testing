import axios from 'axios';

const requests = {
    getPhotos: async (_start, _limit, data) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
            params: { _start, _limit, ...data }
        });
        return response?.data;
    },
    getUsers: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response?.data
    },
};

export default requests;
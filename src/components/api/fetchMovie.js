import axios from 'axios';

const URL = 'http://www.omdbapi.com/';
const API_KEY = 'b4ff107b';

export const fetchMovie = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            apikey: API_KEY,
            s: query,
            plot: 'full'
        }
    });
    return data;
}
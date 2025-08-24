import axios from "axios";

const API_KEY = '51936128-dd4753b80012efeea137add36';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };
    return axios.get(BASE_URL, { params }).then(response => response.data,);
};
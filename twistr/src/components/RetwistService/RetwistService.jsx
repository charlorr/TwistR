import axios from 'axios';
const API_URL = 'https://twistr-backend.herokuapp.com';

export default class RetwistService{

    getRetwists() {
        const url = `${API_URL}/api/retwists/`;
        return axios.get(url).then(response => response.data);
    }

    getRetwistsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    
    getRetwist(pk) {
        const url = `${API_URL}/api/retwists/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    getRetwistbyPost(postPk){
        const url = `${API_URL}/api/postretwist/${postPk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteRetwist(retwist){
        const url = `${API_URL}/api/retwists/${retwist.pk}`;
        return axios.delete(url);
    }
    createRetwist(retwist){
        const url = `${API_URL}/api/retwists/`;
        return axios.post(url,retwist);
    }
    updateRetwist(retwist){
        const url = `${API_URL}/api/retwists/${retwist.pk}`;
        return axios.put(url,retwist);
    }
}
import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class LikeService{

    getLikes() {
        const url = `${API_URL}/api/likes/`;
        return axios.get(url).then(response => response.data);
    }
    getLikesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getLikebyUser(userPK, postPK){
        const url = `${API_URL}/api/likes/?user=${userPK}&post=${postPK}`;
        return axios.get(url).then(response => response.data);
    }
    deleteLike(like){
        const url = `${API_URL}/api/likes/${like.pk}`;
        return axios.delete(url);
    }
    deleteLikebyUser(userPK, postPK){
        const url = `${API_URL}/api/likes/?user=${userPK}&post=${postPK}`;
        console.log(url);
        return axios.delete(url).then(response =>response.data);
    }
    createLike(like){
        const url = `${API_URL}/api/likes/`;
        return axios.post(url,like);
    }

}
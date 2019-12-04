import axios from 'axios';

const API_URL = 'http://localhost:8000';


export default class FollowUserService{
    getFollowUsers(userPK,authorPK) {
        const url = `${API_URL}/api/twists/?user=${userPK}&author=${authorPK}`;
        return axios.get(url).then(response => response.data);
    }  
    getFollowUsersByURL(link){
        const url = `${API_URL}${link}`;
        
        return axios.get(url).then(response => response.data);
    }
    getFollowUser(pk) {
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/twists/${pk}`;
        return axios.get(url, auth_config).then(response => response.data);
    }
    deleteFollowUser(userPK, authorPK){
        //need to have auth_config, copy this line and put it in any request that  requires authorization
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/unfollow/?user=${userPK}&author=${authorPK}`;
        //note you put auth_config as last argument in the actual request
        return axios.delete(url, auth_config);
    }
    createFollowUser(twist){
        const url = `${API_URL}/api/twists/`;
        return axios.post(url, twist);
    }
    
    
    
}
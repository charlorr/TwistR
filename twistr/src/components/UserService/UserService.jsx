import axios from 'axios';
import { resolve, reject } from 'q';
import { BrowserRouter} from 'react-router-dom';
const API_URL = 'http://localhost:8000';



export default class UserService{
    getUsers() {
        const url = `${API_URL}/api/users/`;
        return axios.get(url).then(response => response.data);
    }  
    getUsersByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getUser(pk) {
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/users/${pk}`;
        return axios.get(url, auth_config).then(response => response.data);
    }
    deleteUser(pk){
        if (localStorage.getItem('auth_token') === null) {
            alert('Deletion failed!');
        }
        //need to have auth_config, copy this line and put it in any request that  requires authorization
        var auth_config = {headers : {
                                'Authorization' : "token " + localStorage.getItem('auth_token'),
                                //'Access-Control-Allow-Origin': '*'
                            }};
        const url = `${API_URL}/api/users/delete/${localStorage.getItem('pk')}`;
        //note you put auth_config as last argument in the actual request
        return axios.delete(url, auth_config);
    }
    createUser(user){
        const url = `${API_URL}/api/users/register/`;
        return axios.post(url, user)
    }
    addPassword() {
        const url = `${API_URL}/api/password/`;
        return axios.get(url)
    }
    updateUser(user){
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/users/${user.pk}`;
        return axios.put(url,user,auth_config);
    }
    loginUser(user) {

        const url = `${API_URL}/api/users/login/`;

        return axios.post(url,user)
        .then(function (response) {
            localStorage.setItem('pk', response.data.user_pk);
            localStorage.setItem('auth_token', response.data.token);
            return response.data;
        })
        .catch(function(error){
            return error;
        });
        
    }
    check_auth() {
        const url = `${API_URL}/api/auth_check/`;
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        return axios.get(url, auth_config)
    }
}
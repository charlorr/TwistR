import axios from 'axios';
import { resolveModuleName } from 'typescript';
import { resolve } from 'path';
import { reject } from 'q';
const API_URL = 'http://localhost:8000';


export default class UserService{
    getUsers() {
        const url = `${API_URL}/api/users/`;
        return axios.get(url).then(response => response.data);
    }  
    getUsersByURL(link){
        //var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}${link}`;
        console.log(url);
        return axios.get(url).then(response => response.data);
    }
    getUser(pk) {
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/users/${pk}`;
        return axios.get(url, auth_config).then(response => response.data);
    }
    deleteUser(pk){
        //need to have auth_config, copy this line and put it in any request that  requires authorization
        var auth_config = {headers : {
                                'Authorization' : "token " + localStorage.getItem('auth_token'),
                                //'Access-Control-Allow-Origin': '*'
                            }};
        alert(localStorage.getItem('pk'))
        const url = `${API_URL}/api/users/delete/${localStorage.getItem('pk')}`;
        //note you put auth_config as last argument in the actual request
        alert(url)
        return axios.delete(url, auth_config);
    }
    createUser(user){
        const url = `${API_URL}/api/users/register/`;
        return axios.post(url, user)
    }
    addPassword() {
        alert("hello sir");
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
            console.log(localStorage.getItem('auth_token'));
            console.log(localStorage.getItem('pk'));
            return localStorage.getItem('pk');
        })
        .catch(function(error){
            console.log(error);
        });
        
    }
    
}
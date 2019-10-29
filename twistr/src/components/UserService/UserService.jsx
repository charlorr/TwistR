import axios from 'axios';
const API_URL = 'http://localhost:8000';
var auth_token = " "
var user_pk = " "


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
        var auth_config = {headers : {'Authorization' : "token " + auth_token}};
        const url = `${API_URL}/api/users/${user_pk}`;
        return axios.get(url, auth_config).then(response => response.data);
    }
    deleteUser(user){
        //need to have auth_config, copy this line and put it in any request that requires authorization
        var auth_config = {headers : {'Authorization' : "token " + auth_token}};
        const url = `${API_URL}/api/users/delete/${user.pk}`;
        //note you put auth_config as last argument in the actual request
        return axios.delete(url, auth_config);
    }
    createUser(user){
        const url = `${API_URL}/api/users/register/`;
        return axios.post(url, user);
    }
    updateUser(user){
        var auth_config = {headers : {'Authorization' : "token " + auth_token}};
        const url = `${API_URL}/api/users/${user.pk}`;
        return axios.put(url,user,auth_config);
    }
    loginUser(user) {

        const url = `${API_URL}/api/users/login/`;

        axios.post(url,user)
        .then(function (response) {
            auth_token = response.data.token
            user_pk = response.data.user_pk
        })
        .catch(function(error){
            console.log(error);
        });
        return
    }
}
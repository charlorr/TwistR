import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class TagService{

    getTwists() {
        const url = `${API_URL}/api/twists/`;
        return axios.get(url).then(response => response.data);
    }  
    getTwistsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    
    getTwistbyAuthor(authorPK){
        const url = `${API_URL}/api/twists/?author=${authorPK}`;
        return axios.get(url).then(response => response.data);
    }

    getTwistbyUser(userPK){
        const url = `${API_URL}/api/twists/?user=${userPK}`;
        return axios.get(url).then(response => response.data);
    }

    getTwistbyUserAuthor(userPK,authorPK){
        const url = `${API_URL}/api/twists/?user=${userPK}&author=${authorPK}`;
        return axios.get(url).then(response => response.data);
    }

    getTwistExists(userPK, authorPK, tag){
        const url = `${API_URL}/api/twists/?user=${userPK}&author=${authorPK}&tag=${tag}`;
        return axios.get(url).then(response => response.data);
    }
    
    getTwist(pk) {
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/twists/${pk}`;
        return axios.get(url, auth_config).then(response => response.data);
    }

    deleteTwist(twist){
        if (localStorage.getItem('auth_token') === null) {
            alert('Deletion failed!');
        }
        //need to have auth_config, copy this line and put it in any request that  requires authorization
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/twists/${twist.pk}`;
        return axios.delete(url,auth_config);
    }
    deleteTwistbyPk(pk){
        if (localStorage.getItem('auth_token') === null) {
            alert('Deletion failed!');
        }
        //need to have auth_config, copy this line and put it in any request that  requires authorization
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/twists/${pk}`;
        return axios.delete(url,auth_config);
    }
    createTwist(twist){
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/twists/`;
        return axios.post(url,twist, auth_config);
    }
    updateTwist(twist){
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/twists/${twist.pk}`;
        return axios.put(url,twist,auth_config);
    }

    getTagByAuthor(pk){
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/usertags/${pk}`;
        return axios.get(url, auth_config).then(response  => response.data);
    }

    createTag(tag){
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/tags/`;
        return axios.post(url,tag, auth_config);
    }

    deleteTag(tag){
        if (localStorage.getItem('auth_token') === null) {
            alert('Deletion failed!');
        }
        //need to have auth_config, copy this line and put it in any request that  requires authorization
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/tags/${tag.pk}`;
        return axios.delete(url,auth_config);
    }
}
import axios from 'axios';
const API_URL = 'https://twistr-backend.herokuapp.com';

export default class TagService{

    getTags() {
        const url = `${API_URL}/api/tags/`;
        return axios.get(url).then(response => response.data);
    }  
    getTagsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    
    getTagByAuthor(pk){
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/usertags/${pk}`;
        return axios.get(url, auth_config).then(response  => response.data);
    }
    
    getTagsByPost(postPk){
        const url = `${API_URL}/api/posttags/${postPk}`;
        return axios.get(url).then(response => response.data);
    }
    getTag(pk) {
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/tags/${pk}`;
        return axios.get(url, auth_config).then(response => response.data);
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
    createTag(tag){
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/tags/`;
        return axios.post(url,tag, auth_config);
    }
    updateTag(tag){
        var auth_config = {headers : {'Authorization' : "token " + localStorage.getItem('auth_token')}};
        const url = `${API_URL}/api/tags/${tag.pk}`;
        return axios.put(url,tag,auth_config);
    }
}
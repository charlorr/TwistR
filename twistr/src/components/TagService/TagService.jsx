import axios from 'axios';
const API_URL = 'http://localhost:8000';

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
        const url = `${API_URL}/api/userline/${pk}`;
        return axios.get(url).then(response  => response.data);
    }
    getTag(pk) {
        const url = `${API_URL}/api/tags/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteTag(tag){
        const url = `${API_URL}/api/tags/${tag.pk}`;
        return axios.delete(url);
    }
    createTag(tag){
        const url = `${API_URL}/api/tags/`;
        return axios.post(url,tag);
    }
    updateTag(tag){
        const url = `${API_URL}/api/tags/${tag.pk}`;
        return axios.put(url,tag);
    }
}
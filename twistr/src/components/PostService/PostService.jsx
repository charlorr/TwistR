import axios from 'axios';
const API_URL = 'https://twistr-backend.herokuapp.com';

export default class PostService{

    getPosts() {
        const url = `${API_URL}/api/posts/`;
        return axios.get(url).then(response => response.data);
    }  
    getPostsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    
    getPostByAuthor(pk){
        const url = `${API_URL}/api/userline/${pk}`;
        return axios.get(url).then(response  => response.data);
    }
    getPost(pk) {
        const url = `${API_URL}/api/posts/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deletePost(post){
        const url = `${API_URL}/api/posts/${post.pk}`;
        return axios.delete(url);
    }
    createPost(post){
        const url = `${API_URL}/api/posts/`;
        return axios.post(url,post);
    }
    updatePost(post){
        const url = `${API_URL}/api/posts/${post.pk}`;
        return axios.put(url,post);
    }
}
import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class PostService{

    getPosts() {
        const url = `${API_URL}/api/posts/`;
        return axios.get(url).then(response => response.data);
    }
    getPostTags(pk) {
        const url = `${API_URL}/api/posttags/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    getTimelinePosts() {
        const url = `${API_URL}/api/timeline/${localStorage.getItem('pk')}`;
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

    addPostTags(posts){
        var promises = [];
    for (var i = 0; i < posts.length; i++) {
      promises.push(this.addTags(posts[i]));
    }
    return Promise.all(promises).then(() => {
      return posts;
    })
    }

    addTags(post) {
        return this.getTags(post.pk).then(function (tags) {
            post.tag1=tags[0];
            post.tag2=tags[1];
            post.tag3=tags[2];
            return post;
        }).catch(function (error) {
            console.log(error);
            return error;
        });
    }

    getTags(pk) {
        return this.getPostTags(pk).then(function (result){
            var tags = [];
            for(var i = 0; i < result.data.length; i++) {
            tags.push(result.data[i].name.toString());
            }
            return tags;
        }).catch(function (error) {
            console.log(error);
            return error;
        });
    }
}
import React from "react";
import CreatePost from "components/CreatePost/CreatePost.jsx";
import PostRoster from "components/PostRoster/PostRoster.jsx";
import PostService from "components/PostService/PostService.jsx";
import  UserService  from  'components/UserService/UserService.jsx';
import {Redirect} from 'react-router-dom';

import TwistService from "components/TwistService/TwistService.jsx";
// reactstrap components
import {
  Row,
} from "reactstrap";

const postService = new PostService();
const userService = new UserService();

const twistService = new TwistService();
class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      posts: [],
      redirect_text: [],
    };
    this.getTimelinePosts = this.getTimelinePosts.bind(this);
    this.filterSeen = this.filterSeen.bind(this);
  }

  componentDidMount(){
    this.getTimelinePosts();
  }

  getTimelinePosts() {
    this.check_auth();
    var self = this;
    postService.getTimelinePosts().then(function (result){
      
      postService.addPostTags(result.data).then(function (result){
        self.filterSeen(result);
      })
    });
  }

  check_auth() {
    var that = this;
    if (localStorage.getItem('auth_token') === null) {
      that.setState({redirect_text: <Redirect to="/admin/welcome"/>})
    }
    else {
      userService.check_auth()
      .catch(function (error) {
        //if the token has expired then clear local storage and return to login page
        localStorage.clear();
        that.setState({redirect_text: <Redirect to="/admin/welcome"/>})
        window.location.reload();
      })
    }
  }
  filterSeen(posts) {
    
    var self = this;
    var promises = [];
    for (var i = 0; i < posts.length; i++) {
      promises.push(self.nullifyUnfollowed(posts[i]));
    }
    
    return Promise.all(promises).then(function (values){
     
      self.setState({posts: values});
    })
  }

  nullifyUnfollowed(post){
    return twistService.getTwistExists(localStorage.getItem('pk'),post.author, post.tag1)
    .then(function (result){
      
      if (result.data.length === 0){ //unseen
        return post;
      }
      else if (result.data[0].followed === true){ //seen and followed
        return post;
      }
      else if (post.tag2 === null || post.tag2 === undefined){
        post = null;
        return post;
      }
      else {
        return twistService.getTwistExists(localStorage.getItem('pk'),post.author, post.tag2)
        .then(function (result){
          if (result.data.length === 0){
            return post;
          }
          else if (result.data[0].followed === true){ 
            return post;
          }
          else if (post.tag3 === null || post.tag3 === undefined){
            post = null;
            return post;
          }
          else {
            return twistService.getTwistExists(localStorage.getItem('pk'),post.author, post.tag3)
            .then(function (result){
              if (result.data.length === 0){
                return post;
              }
              else if (result.data[0].followed === true){ 
                return post;
              }
              else {
                post = null;
                return post;
              }
            })
          }
        })
      }
    }).catch(function (error){
      console.log(error);
    })
  }

  render() {
    return (
      <>
      <div className="content">
      {this.state.redirect_text}
        <Row>
          <CreatePost />
        </Row>
        <Row>
          {/* <Col lg="12" md="12" sm="12">
            <SortableTagTable tags_all = {TAGS_ALL}/>
          </Col> */}
        </Row>
        <Row>
          <PostRoster parent = "timeline" posts_all={this.state.posts} />
        </Row>
      </div>
      </>
    );
  }
}

export default Timeline;

import React from 'react';
import CreateRetwist from "components/CreateRetwist/CreateRetwist.jsx";
import RetwistService from "components/RetwistService/RetwistService.jsx";
import PostService from "components/PostService/PostService.jsx";
import LikeService from "components/LikeService/LikeService.jsx";
//import NotificationAlert from "react-notification-alert";

import {
  Button,
  Card,
  CardBody,
  Col,
  Row
} from "reactstrap";
import { thisTypeAnnotation } from '@babel/types';

const postService = new PostService();
const likeService = new LikeService();
const retwistService = new RetwistService();

class ReactCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      CreateRetwist: false,
      count: 0,
      currentPost: [],
      currentLike: false,
      liked: false,
      //flag:false
    };
    this.getPost = this.getPost.bind(this);
    this.likePost = this.likePost.bind(this);
    this.unlikePost = this.unlikePost.bind(this);
    this.getLike = this.getLike.bind(this);
    this.createLike = this.createLike.bind(this);
    this.deleteLike = this.deleteLike.bind(this);
    this.createRetwist = this.createRetwist.bind(this);
  }
  
  showRetwist(){
    this.setState({CreateRetwist : true})
  }

  increment = () => {
    let newCount = this.state.count + 1
    this.setState({
      count : newCount
    })
  }

  componentDidMount() {
    this.getPost();
    this.getLike();
  }
  
  getPost(){
    var self = this;
    postService.getPost(this.props.post.pk)
    .then(function(response) {
   //   console.log(response);
   //   console.log(response.author);
      self.setState({currentPost : response})
      self.getLike(response.author)
      self.setState({flag: true})
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getLike(currentPost){
  //  console.log(currentPost);
   // console.log(this.props.post.pk);
    var self = this;
    likeService.getLikebyUser(currentPost,this.props.post.pk)
    .then(function(response) {
      if(response.data.length !== 0){
        console.log("checkone");
        self.setState({currentLike : true});
      }else {
        console.log("checktwo");
        self.setState({currentLike : false});
      }
    })
  }

  createLike(){
    likeService.createLike(
      {
        "user": this.state.currentPost.author,
        "post": this.state.currentPost.pk
      }
    ).then((response) =>{
      //alert("like create!");
    }).catch(function(error) {
      alert("There was an error with the like table!");
      console.log(error);
    })
  }

  deleteLike(like){
    console.log(this.state.currentPost.author);
    console.log(this.props.post.pk);
    likeService.deleteLikebyUser(this.state.currentPost.author,this.props.post.pk)
    .then(function(response) {
      //alert("like deleted");
    })
    .catch(function(error) {
      alert("there was an error deleting");
      console.log(error);
    })
  }

  likePost(){
    var currentPost = {...this.state.currentPost}
    currentPost.like_count = this.state.currentPost.like_count + 1
    this.setState({currentPost})

    postService.updatePost(currentPost).then((result) => {
      if(result.data.post==="something went wrong"){
        alert("there was an error")
    }
    else{
        //alert("Post liked!")
    }
    window.location.reload();
    }).catch(()=>{
        alert('There was an error liking the post!');
    });

   this.createLike();
  }

  unlikePost(){
    this.setState({currentPost: postService.getPost(this.props.post.pk)})
    var currentPost = {...this.state.currentPost}
    currentPost.like_count = this.state.currentPost.like_count - 1
    this.setState({currentPost})

    postService.updatePost(currentPost).then((result) => {
      if(result.data.post==="something went wrong"){
        alert("there was an error")
    }
    else{
        //alert("Post unliked!")
    }
    window.location.reload();
    }).catch(()=>{
        alert('There was an error unliking the post!');
    });

    this.deleteLike(this.state.currentLike);
  }

  createRetwist(){
    this.showRetwist();
  }

  render() {
    let likeButton; //determines whether button is like or unlike
    //this.checkLike();
    let retwistButton;
    //console.log(this.state.currentLike);
    
    if(this.state.currentLike === false) { likeButton = 
        <Button 
        className="icon-big text-center reactedHeart icon-warning react-button"
        size="sm"
        onClick={this.likePost}>
        <i className="fa-2x far fa-heart outline-heart"></i>
        <i className = "fa-2x fas fa-heart filled-heart"></i>
        </Button>
    }
    else { likeButton = 
        <Button 
        className="icon-big text-center reactedHeart icon-warning react-button"
        size="sm"
        onClick={this.unlikePost}>
        <i className="fa-2x fas fa-heart outline-heart"></i>
        <i className = "fa-2x far fa-heart filled-heart"></i> 
        </Button>
    }

    retwistButton =
    <Button 
    className="icon-big text-center reactedShare icon-warning react-button"
    size="sm"
    onClick={this.createRetwist}>
    <i className="fa-2x far fa-share-square outline-share"></i>
    <i className = "fa-2x fas fa-share-square filled-share"></i>
    </Button>

    return (
      <>
        <Col>
        <Row>
          { this.state.CreateRetwist ? <CreateRetwist post={this.props.post}/> : null}
        </Row>
        <Row>
          <Card className="theme-card-bg">
            <CardBody>
              <Row>
                <Col lg="6" md="6" sm="6">
                  {likeButton}
                </Col>
                <Col lg="6" md="6" sm="6">
                  {retwistButton}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Row>
      </Col>
      </>
    );
  }
}

export default ReactCard;

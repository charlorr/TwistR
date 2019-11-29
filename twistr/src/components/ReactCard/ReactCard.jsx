import React from 'react';
import PostService from "components/PostService/PostService.jsx";
//import NotificationAlert from "react-notification-alert";

import {
  Button,
  Card,
  CardBody,
  Col,
  Row
} from "reactstrap";

const postService = new PostService();

class ReactCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      currentPost: [],
      liked: false,
      flag:false
    };
    this.getPost = this.getPost.bind(this);
    this.likePost = this.likePost.bind(this);
    this.unlikePost = this.unlikePost.bind(this);
  }
  

  increment = () => {
    let newCount = this.state.count + 1
    this.setState({
      count : newCount
    })
  }

  componentDidMount() {
    this.getPost();
  }
  
  getPost(){
    var self = this;
    postService.getPost(this.props.post.pk)
    .then(function(response) {
      self.setState({currentPost : response})
      self.setState({flag: true})
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  setTrue(){
    if(this.state.liked === false){
      this.setState(prevState => ({
        liked: !prevState.liked
      }));
    }
  }

  setFalse(){
    if(this.state.liked === true){
      this.setState(prevState => ({
        liked: !prevState.liked
      }));
    }
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
        alert("Post liked!")
    }
    }).catch(()=>{
        alert('There was an error liking the post!');
    });

    this.setTrue();
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
        alert("Post unliked!")
    }
    }).catch(()=>{
        alert('There was an error unliking the post!');
    });

    this.setFalse();
  }

  render() {
    //console.log(this.state.liked);

    let but; //determines whether button is like or unlike

    if(this.state.liked === false) { but = 
        <Button 
        className="icon-big text-center reactedHeart icon-warning"
        color="success"
        size="sm"
        onClick={this.likePost}>
        <i className="far fa-heart outline-heart"></i>
        <i className = "fas fa-heart text-primary filled-heart"></i>
        </Button>
    }
    else { but = 
        <Button 
        className="icon-big text-center reactedHeart icon-warning"
        color="success"
        size="sm"
        onClick={this.unlikePost}>
        <i className="fas fa-heart outline-heart"></i>
        <i className = "far fa-heart text-primary filled-heart"></i> 
        </Button>
    }
    return (
      <>
      <Card className="theme-card-bg">
        <CardBody>
          <Row>
            <Col lg="6" md="6" sm="6">
              {but}
            </Col>
            <Col lg="6" md="6" sm="6">
              <Button 
              size="sm"
              className="icon-big text-center reactedHeart icon-warning">
              <i className="fas fa-share colored-share"></i>
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
      </>
    );
  }
}

export default ReactCard;

import React from 'react';
import TwistService from "components/TwistService/TwistService.jsx";
import PostService from 'components/PostService/PostService';
import UserService from 'components/UserService/UserService';
import TagButton from "components/TagButton/TagButton.jsx";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";


const twistService = new TwistService();
const postService = new PostService();
const userService = new UserService();

class PostCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentPost: [],
      username: null
    };
    this.deletePost = this.deletePost.bind(this);
  }
//figure out who the parent is so that href of name can be properly assigned

  componentDidMount(){
    this.getAuthorUsername(this.props.post.author);
  }

  getAuthorUsername(pk){
    var self = this;
    userService.getUser(pk).then(function (result){
      self.setState({username: result.username});
    }).catch(function (error){
      console.log(error);
    })
  }


  displayButton(tag){
    if (tag !== undefined) {
      return(
        <Button
          className="btn-round"
          color="danger"
          >
          {tag}
        </Button>
      )
    }
  }

  deletePost(post){
    console.log(post);
    console.log("to delete");
    //var currentPost = {...this.state.currentPost}
    //this.setState({currentPost});
   // postService.deletePost(currentPost)
   postService.deletePost(post)
    .then(function(response){
      alert("Post deleted!")
    })
    .catch(function(error) {
      console.log(error);
    })

  }

  twistStatus(tag) {
    //var self = this;
    const user = localStorage.getItem('pk');
    const author = this.props.post.author;
    //console.log(user + " " + author + " " + tag);
    return twistService.getTwistExists(user,author,tag).then(function (result){
      return result.data.length !== 0 ? "success" : "danger";
    }).catch(function (error){
      console.log(error);
      return "";
    });
  }

  getTimeFormat(posted_date){
    var str = posted_date.toString().substring(0,16);
    str = str.substring(11,16) + " on " + str.substring(0,10);
    return str;
  }

  render() {
    const parent = this.props.parent;
    //this.setState({currentPost : this.props.post});
    //console.log(this.props.post);
    let redirectA;
    if(parent === "dashboard"){
      redirectA = <a className = "blackHref" href = "../admin/dashboard"> {this.props.post.author} </a>
    }
    if(parent === "userline"){
      redirectA = <a className = "blackHref" href = "../userline/1"> {this.props.post.author} </a>
    }
    if (parent === "timeline"|| parent === "explore"){
      redirectA = <a className ="blackHref" href = "userline/2"> {this.props.post.author} </a>
    }
    return (
    <>
    <Card className="theme-card-bg">
        <CardTitle tag="h5">   {redirectA} </CardTitle>
      <CardHeader>
        <TagButton user = {localStorage.getItem('pk')} author = {this.props.post.author} tag = {this.props.post.tag1}/>
        <TagButton user = {localStorage.getItem('pk')} author = {this.props.post.author} tag = {this.props.post.tag2}/>
        <TagButton user = {localStorage.getItem('pk')} author = {this.props.post.author} tag = {this.props.post.tag3}/>
        {/*<p className="card-category">{this.props.post.tags}</p>*/}
      </CardHeader>
      <CardBody>
        <h3>{this.props.post.text_body}</h3>
      </CardBody>
      <CardFooter>
        <hr />
        <Row>
          <Col lg="8" md="8">
          <div className="stats">
              <i className="fa fa-history"/> 
              <a href = {"../admin/userline/"+this.props.post.author} >
                <font color="#000000"><b>{this.state.username}</b></font>
              </a>
          {" "}posted at {this.getTimeFormat(this.props.post.posted_date)}
          </div>
          </Col>
          <Col lg="3" md="3">
          <div className="ml-auto">
              <i className="likes float-right"/> Likes: {this.props.post.like_count}
          </div>
          </Col>
          <Col lg="1" md="1">
            <Button
            className="fas fa-trash" 
            size="sm"
            type="submit" 
            onClick={() => { this.deletePost(this.props.post) }}>
            </Button>
          </Col>
        </Row>
      </CardFooter>
    </Card>
    </>
    );
  }
}

export default PostCard;

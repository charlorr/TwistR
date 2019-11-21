import React from 'react';
import TwistService from "components/TwistService/TwistService.jsx";
import PostService from 'components/PostService/PostService';
import TagButton from "components/TagButton/TagButton.jsx";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap";


const twistService = new TwistService();
const postService = new PostService();

class PostCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentPost: [],
      flag:false
    };
    this.deletePost = this.deletePost.bind(this);
  }
//figure out who the parent is so that href of name can be properly assigned


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
    var self = this;
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
    <Card>
      <CardHeader>
        
        <CardTitle tag="h5">   {redirectA} </CardTitle>
        <TagButton user = {localStorage.getItem('pk')} author = {this.props.post.author} tag = {this.props.post.tag1}/>
        <TagButton user = {localStorage.getItem('pk')} author = {this.props.post.author} tag = {this.props.post.tag2}/>
        <TagButton user = {localStorage.getItem('pk')} author = {this.props.post.author} tag = {this.props.post.tag3}/>
        {/*<p className="card-category">{this.props.post.tags}</p>*/}
      </CardHeader>
      <CardBody>
        <h1>{this.props.post.text_body}</h1>
        <Button
        className="fas fa-trash" 
        size="sm"
        type="submit" 
        onClick={() => { this.deletePost(this.props.post) }}>
        </Button>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
            <i className="fa fa-history" /> User {this.props.post.author}  Posted at {this.getTimeFormat(this.props.post.posted_date)}
        </div>
        <div class="ml-auto">
            <i className="likes float-right"/> Likes: {this.props.post.like_count}
        </div>
      </CardFooter>
    </Card>
    </>
    );
  }
}

export default PostCard;

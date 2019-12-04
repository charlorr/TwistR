import React from 'react';
//import UserCard from "components/UserCard/UserCard.jsx";
import PostCard from "components/PostCard/PostCard.jsx";
import ReactCard from "components/ReactCard/ReactCard.jsx";
import Retwist from "components/Retwist/Retwist.jsx";
import RetwistService from "components/RetwistService/RetwistService.jsx";
import RetwistCard from "components/RetwistCard/RetwistCard.jsx";
import PostService from "components/PostService/PostService.jsx";

import {
  Col,
  Card,
  CardBody,
  Row
} from "reactstrap";

const retwistService = new RetwistService();
const postService = new PostService();

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postPk: null,
      retwistPk: null,
      currentPost: [],
      currentRetwist: [],
      hasRetwist: false
    };
    this.getRetwist = this.getRetwist.bind(this);
  }

  componentDidMount(){
    this.getRetwist(this.props.post);
    //this.getRetwistPost();
    //this.getOGPost();
  }

  getRetwist(post){
    var self = this;
    retwistService.getRetwistbyPost(post.pk)
    .then(function(response) {
      self.getRetwistPost(response.post);
      self.getOGPost(response.original_post);
      self.setState({hasRetwist: true});
    })
    .catch(function(error){
      self.setState({hasRetwist: false});
    })
  }

  getOGPost(postPk){
    var self = this;
    postService.getPost(postPk)
    .then(function(response) {
      self.setState({currentPost : response})
      self.setState({flag: true})
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getRetwistPost(postPk){
   // console.log(postPk);
    var self = this;
    postService.getPost(postPk)
    .then(function(response) {
      self.setState({currentRetwist : response})
      self.setState({flag: true})
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    //console.log(this.state.hasRetwist);
    var dashboard = false;
    if(this.props.dashboard){
      dashboard = true;
    }
    if(this.props.show_react_card) {
      if(this.state.hasRetwist === true){
        if(this.state.currentRetwist.text_body){
          console.log(this.state.currentPost);
         // dashboard = false;

        return (
          <>
          <Col lg="12" md="11" sm="10">
            <Row>
            <Col lg="2" md="2" sm="1">
              <hr />
              <hr />
              <hr />
              <hr />
              <ReactCard parent = {this.props.parent} post={this.props.post} />
              <hr />
              <hr />
              <hr />
              <hr />
            </Col>
              <Col lg="10" md="9" sm="9">
                <Card className="theme-card-bg">
                <CardBody>
                Retwist
                <PostCard parent = {this.props.parent} post={this.state.currentRetwist} dashboard={dashboard}/>
                Original Post  
                <RetwistCard parent = {this.props.parent} post={this.state.currentPost} />
                </CardBody>
                </Card>
              </Col>   
            </Row>
          </Col>
          </>
        );
      }
    }
      //console.log("not on explore");
      return (
        <>
        <Col lg="12" md="11" sm="10">
          <Row>
            <Col lg="2" md="2" sm="1">
              <hr />
              <hr />
              <hr />
              <hr />
              <ReactCard parent = {this.props.parent} post={this.props.post} />
              <hr />
              <hr />
              <hr />
              <hr />
            </Col>
            <Col lg="10" md="9" sm="9">
              <PostCard parent = {this.props.parent} post={this.props.post} dashboard={dashboard}/>
            </Col>
          </Row>
        </Col>
        </>
      );
    }
    else {
      //console.log("on explore page");
      return (
        <>
        <Col lg="12" md="11" sm="10">
          <Row>
            <Col lg="10" md="9" sm="9">
              <PostCard parent = {this.props.parent} post={this.props.post} dashboard={dashboard}/>
            </Col>
          </Row>
        </Col>
        </>
      );
    }
    
  }
}

export default Post;

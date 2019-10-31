import React from "react";
import  UserService  from  'components/UserService/UserService.jsx';
import FollowUserService from "../components/FollowUserService/FollowUserService.jsx";
import PostService from "components/PostService/PostService.jsx";
import UserlineFollowCard from "../components/UserlineFollowCard/UserlineFollowCard.jsx";
import BioCard from "components/BioCard/BioCard.jsx";
import PostRoster from "components/PostRoster/PostRoster.jsx";
import {SortableTagTable} from "components/NewTagRoster/NewTagRoster.jsx";
import { Redirect } from 'react-router-dom';

import {
  Row,
  Col,
  Button
} from "reactstrap";
//import FollowerCard from "components/FollowerCard/ProfileFollowerCard.jsx";
const userService = new UserService();
const followUserService = new FollowUserService();
const postService = new PostService();

//hardcoded posts for now, until we have connection to database
var POSTS_ALL=[{
  author: "Cookie Monster",
  tags: ["cookies ", "trashcan ", ""],
  content: "I just ate 49 cookies. I had some chocolate chip, triple chocolate, and peanut butter",
  timestamp: 30,
  picture: require("assets/img/CookieMonster.jpg"),
}, {
  author: "Cookie Monster",
  tags: ["ouch ", "regrets "],
  content: "Update: I have a stomach ache.",
  timestamp: 10,
  picture: require("assets/img/CookieMonster.jpg"),
}]
var TAGS_ALL=[{
  author: "Cookie Monster",
  content: "ouch",
  timestamp: 10
}, {
  author: "Cookie Monster",
  content: "regrets",
  timestamp: 15
}]

class Userline extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
      users: [],
      currentUserline: [],
      currentUser: [],
      followExists: false,
      posts_all: []
    };
  }

  componentDidMount() {
    var self = this;
    const { match: { params } } =  this.props;
    if (params && params.pk) {
      
      userService.getUser(params.pk).then(function(result) {
        self.setState({currentUserline: result});
       
      })

      //gets the twists to determine if user already follows the userline they are viewing
      followUserService.getFollowUsers(localStorage.getItem('pk'),params.pk).then((result)=>{
        if(Object.keys(result.data).length === 0)
        self.setState({followExists: false})
        else{
          self.setState({followExists: true})
        }

    })
    this.getPosts();
    }
   
    userService.getUser(localStorage.getItem('pk')).then(function (result) {
        self.setState({currentUser: result});
    })

  }
  getPosts(){
    var self = this;
    //postService.getPostByAuthor(this.state.currentUserline)
    postService.getPostByAuthor(2) //this is hardcoded! will always show userline posts of the second user in the database!
    .then(function(response) {
      console.log(response);
      self.setState({posts_all : response.data})
      self.setState({flag: true})
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  redirect() {
    if (localStorage.getItem('pk') === null) {
      return <Redirect to="/admin/welcome"/>;
    }
  }
  render() {
    if (this.state.posts_all.length === 0) {
   //   console.log("no post data")
      return <div />
    }else{
   //   console.log("yes post data")
   //   console.log(this.state.posts_all)
        console.log(this.state.currentUserline)
    return (
      <>
      <div className="content">
      {this.redirect()}
        <Row>
        <Col lg="12" md="11" sm="10">
          <BioCard currentUserline = {this.state.currentUserline} />
          <Col>
          
          <UserlineFollowCard followExists = {this.state.followExists} currentUser= {this.state.currentUser} currentUserline = {this.state.currentUserline}/>
          </Col>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12">
            <SortableTagTable tags_all = {TAGS_ALL}/>
          </Col>
        </Row>
        <Row>
          <PostRoster posts_all={this.state.posts_all} />
        </Row>
      </div>
      </>
    );
  }
}
}
export default Userline;

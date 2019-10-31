import React from "react";
import  UserService  from  'components/UserService/UserService.jsx';
import FollowUserService from "../components/FollowUserService/FollowUserService.jsx";
import UserlineFollowCard from "../components/UserlineFollowCard/UserlineFollowCard.jsx";
import BioCard from "components/BioCard/BioCard.jsx";
import {SortablePostTable} from "components/PostRoster/PostRoster.jsx";
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
      followExists: false
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
    }
   
    userService.getUser(localStorage.getItem('pk')).then(function (result) {
        self.setState({currentUser: result});
    })

  }

  redirect() {
    if (localStorage.getItem('pk') === null) {
      return <Redirect to="/admin/welcome"/>;
    }
  }
  render() {
    return (
      <>
      <div className="content">
      {this.redirect()}
      <Col lg="12" md="11" sm="10">
        <Row>
          
          <BioCard currentUserline = {this.state.currentUserline} />
          <Col>
          
          <UserlineFollowCard followExists = {this.state.followExists} currentUser= {this.state.currentUser} currentUserline = {this.state.currentUserline}/>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12">
            <SortableTagTable tags_all = {TAGS_ALL}/>
          </Col>
        </Row>
        <Row>
          <SortablePostTable parent = "userline" posts_all={POSTS_ALL} />
        </Row>
      </Col>
      </div>
      </>
    );
  }
}

export default Userline;

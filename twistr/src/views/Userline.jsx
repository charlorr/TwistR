import React from "react";
import  UserService  from  'components/UserService/UserService.jsx';
import BioCard from "components/BioCard/BioCard.jsx";
import {SortablePostTable} from "components/PostRoster/PostRoster.jsx";
import {SortableTagTable} from "components/NewTagRoster/NewTagRoster.jsx";
import {
  Row,
  Col,
  Button
} from "reactstrap";
const userService = new UserService();

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
      currentUser: []
    };
  }

  componentDidMount() {
    const { match: { params } } =  this.props;
    if (params && params.pk) {
      var self = this;
      userService.getUser(params.pk).then(function(result) {
        self.setState({currentUser: result});
      })
    }
  }

  followUser(){

  }

  unfollowUser(){

  }

  render() {
    return (
      <>
      <div className="content">
      <Col lg="12" md="11" sm="10">
        <Row>
          
          <BioCard currentUser = {this.state.currentUser} />
          <Col>
          <Button 
          className="btn-round"
          color="primary"
          onClick={this.followUser}>
          Follow User </Button>

          <Button 
          className="btn-round"
          color="primary"
          onClick={this.unfollowUser}>
          Unfollow User </Button>
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

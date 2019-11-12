import React from 'react';
import TagService  from  'components/TagService/TagService.jsx';
import TwistService  from  'components/TwistService/TwistService.jsx';
import UserlineTagRoster from "components/UserlineTagRoster/UserlineTagRoster.jsx";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
} from "reactstrap";
const  tagService  =  new  TagService();
const twistService = new TwistService();
class TagUserlineCard extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
      users: [],
      currentUserPk: null,
      currentUser: [],
      followed_tags_all: [],
      tags_all: []
    };
    this.getTags.bind(this);
    this.getFollowedTags.bind(this);
  }

  componentDidMount(){
    this.getTags();
    this.getFollowedTags();
  }

  getTags(){
    var self = this;
    tagService.getTagByAuthor(this.props.currentUserline.pk)
    .then(function(response) {
      console.log("these are all of the tags of the userline's user");
      console.log(response.data);
      self.setState({tags_all : response.data});
      console.log("this is the state");
      console.log(self.state.tags_all);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getFollowedTags(){
    var self = this;
    twistService.getTwistbyUserAuthor(localStorage.getItem('pk'), this.props.currentUserline.pk)
    .then(function(response) {
      console.log("these are the tags of the userline's user that logged in user follows");
      console.log(response.data);
      self.setState({followed_tags_all : response.data});
      console.log("this is the state");
      console.log(self.state.followed_tags_all);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <>
      <Col lg="9" md="6" sm="6">
        <Card className="card-stats">
          <CardHeader>
            <CardTitle tag="h5">{this.props.currentUserline.first_name}'s Tags</CardTitle>
            
             <hr/>
          </CardHeader>
            <CardBody>
            <UserlineTagRoster tags_all = {this.state.tags_all} followed_tags_all = {this.state.followed_tags_all}/> 
            </CardBody>
        
        </Card>
      </Col>
      </>
    );
  }
}

export default TagUserlineCard;

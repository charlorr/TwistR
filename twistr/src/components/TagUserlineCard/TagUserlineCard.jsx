import React from 'react';
//import TagService  from  'components/TagService/TagService.jsx';
import TwistService  from  'components/TwistService/TwistService.jsx';
import UserlineTagRoster from "components/UserlineTagRoster/UserlineTagRoster.jsx";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Col,
  Row,
  Button
} from "reactstrap";
const twistService = new TwistService();
class TagUserlineCard extends React.Component {
  //this.props.currentUserline.pk gives pk of the userline you are currently viewing

  constructor(props) {
    super(props);
    this.state  = {
      followed_twists_all: [], //all the tags that the user followed of the author who's userline you're viewing
      tags_all: [], //all the tags for the author who's userline you're viewing
      unfollowed_tags_all :[], //all the tags for the author who's userline you're viewing that you don't follow
      unfollowed_twists: []
    };
    this.handleFollowAllTags = this.handleFollowAllTags.bind(this);
    this.handleUnfollowAllTags = this.handleUnfollowAllTags.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.saveReload = this.saveReload.bind(this);
  }

  componentDidMount(){
    this.getTags();
    this.getStatus();
  }

  getStatus(){
    var self = this;
    var followed_twists_all = [];
    var unfollowed_twists_all = [];
   
    twistService.getTwistbyUserAuthor(localStorage.getItem('pk'), this.props.currentUserline.pk).then(function(response) {
      response.data.forEach(function(twist){
        if(twist.followed){
          followed_twists_all.push(twist);
        }
        else{
          unfollowed_twists_all.push(twist);
        }

      });
      self.setState({unfollowed_twists: unfollowed_twists_all});
      self.setState({followed_twists_all: followed_twists_all});

      

    });
  }

  getTags(){
    var self = this;
    twistService.getTagByAuthor(this.props.currentUserline.pk)
    .then(function(response) {
      self.setState({tags_all : response.data});
      self.getUnfollowedTags();
    })
    .catch(function(error) {
      console.log(error);
    });
  }


  getUnfollowedTags(){
    var self =this;
    var unfollowed_tags_all = [];

    self.state.tags_all.forEach(function (tag){
      if(self.state.followed_twists_all.findIndex(ftag => ftag.tag === tag.name)<0){
          unfollowed_tags_all.push(tag);
      }
    });
   
      self.setState({unfollowed_tags_all: unfollowed_tags_all});
      unfollowed_tags_all.forEach(function (tag){
        if(self.state.unfollowed_twists.findIndex(ftag => ftag.tag === tag.name)<0){ //if the tag did not have an unfollowed twist (if that tag hasn't been seen before)
          twistService.createTwist(
          {
            "user": localStorage.getItem('pk'),
            "author": self.props.currentUserline.pk,
            "tag": tag.name,
            "followed": false
          }
        )
        }
      });
  }

  handleFollowAllTags(){
    var self = this;
    self.state.unfollowed_tags_all.forEach(function(tag) {
    twistService.getTwistExists(localStorage.getItem('pk'), self.props.currentUserline.pk, tag.name)
    .then(function (result){
      if(result.data.length !== 0){
        var current = result.data;
        twistService.updateTwist(
          {
            "pk": current[0].pk,
            "user": localStorage.getItem('pk'),
            "author": self.props.currentUserline.pk,
            "tag": tag.name,
            "followed": true
          }
        )
      }
     
  });
});
  }

  handleUnfollowAllTags(){
    var self = this;
    self.state.followed_twists_all.forEach(function(twist){
      twistService.updateTwist({
        "pk": twist.pk,
        "user": twist.user,
          "author": twist.author,
          "tag": twist.tag,
          "followed": false
      
    })
  });
    
  }

  saveReload(){
    window.location.reload();
  }


  render() {
    return (
      <>
      <Col lg="12" md="12" sm="12">
        <Card className="card-stats theme-card-bg">
          <CardHeader>
            <Row>
              <Col lg="6" md="4" sm="4">
                <CardTitle tag="h5">{this.props.currentUserline.first_name}'s Tags
                </CardTitle>
              </Col>
              <Col lg="3" md="2" sm="2">
                <Button 
                  className="btn-round clicks"
                  color = "success"
                  size = "md"
                  onClick = {this.handleFollowAllTags}>
                  Follow All Tags
                </Button>
              </Col>
              <Col lg="3" md="2" sm="2">
                <Button
                  className="btn-round clicks"
                  color = "danger"
                  size = "md"
                  onClick = {this.handleUnfollowAllTags}>
                  Unfollow All Tags
                </Button>
              </Col>
            </Row>
            <p><i>Green tags are tags you follow, red tags are tags you do not follow!</i></p>
            <hr/>
          </CardHeader>
          <CardBody>
            <UserlineTagRoster currentUserline = {this.props.currentUserline} followed_twists_all = {this.state.followed_twists_all} unfollowed_tags_all = {this.state.unfollowed_tags_all}/>
          </CardBody>
          <CardFooter>
            <hr/>
            <Button
            className = "btn-round"
              onClick = {() => this.saveReload()}
            > Save
            </Button>
          </CardFooter>
        </Card>
      </Col>
      </>
    );
  }
}

export default TagUserlineCard;

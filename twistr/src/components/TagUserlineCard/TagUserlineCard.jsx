import React from 'react';
//import TagService  from  'components/TagService/TagService.jsx';
import TwistService  from  'components/TwistService/TwistService.jsx';
import UserlineTagRoster from "components/UserlineTagRoster/UserlineTagRoster.jsx";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Button
} from "reactstrap";
const twistService = new TwistService();
class TagUserlineCard extends React.Component {
  //this.props.currentUserline.pk gives pk of the userline you are currently viewing

  constructor(props) {
    super(props);
    this.state  = {
      followed_tags_all: [], //all the tags that the user followed of the author who's userline you're viewing
      tags_all: [], //all the tags for the author who's userline you're viewing
      unfollowed_tags_all :[] //all the tags for the author who's userline you're viewing that you don't follow
    };
    this.getTags.bind(this);
    this.getFollowedTags.bind(this);
    this.getUnfollowedTags = this.getUnfollowedTags.bind(this);
    this.handleFollowAllTags = this.handleFollowAllTags.bind(this);
    this.handleUnfollowAllTags = this.handleUnfollowAllTags.bind(this);
  }

  componentDidMount(){
    this.getTags();
  }

  getTags(){
    var self = this;
    twistService.getTagByAuthor(this.props.currentUserline.pk)
    .then(function(response) {
      self.setState({tags_all : response.data});
      self.getFollowedTags();
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getFollowedTags(){
    var self = this;
    twistService.getTwistbyUserAuthor(localStorage.getItem('pk'), this.props.currentUserline.pk)
    .then(function(response) {
      self.setState({followed_tags_all : response.data});
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
      if(self.state.followed_tags_all.findIndex(ftag => ftag.tag === tag.name)<0){
          unfollowed_tags_all.push(tag);
      }
    });
   
      self.setState({unfollowed_tags_all: unfollowed_tags_all});
  }

  handleFollowAllTags(){
    var self = this;
    self.state.unfollowed_tags_all.forEach(function(tag) {
      twistService.createTwist(
        {
          "user": localStorage.getItem('pk'),
          "author": self.props.currentUserline.pk,
          "tag": tag.name
        }
      )
    });
     //window.location.reload();
  }

  handleUnfollowAllTags(){
    var self = this;
    self.state.followed_tags_all.forEach(function(twist){
      twistService.deleteTwist(twist)
    });
    //window.location.reload();
  }

  render() {
    return (
      <>
      <Col lg="9" md="6" sm="6">
        <Card className="card-stats">
          <CardHeader>
            <CardTitle tag="h5">{this.props.currentUserline.first_name}'s Tags
            {/* <Button className = "btn-round btn-icon" color="danger" size="sm" onClick= {()=>this.hideTags()}>
            <i className = "fas fa-times"> </i>
            </Button> */}
            </CardTitle>
             <hr/>
          </CardHeader>
            <CardBody>
              <Button className="btn-round"
                      color = "primary"
                      onClick = {this.handleFollowAllTags}> Follow All Tags </Button>
              <Button color = "secondary"
                      className="btn-round"
                      onClick = {this.handleUnfollowAllTags}> Unfollow All Tags</Button>

             <UserlineTagRoster currentUserline = {this.props.currentUserline} followed_tags_all = {this.state.followed_tags_all} unfollowed_tags_all = {this.state.unfollowed_tags_all}/>
            </CardBody>
        
        </Card>
      </Col>
      </>
    );
  }
}

export default TagUserlineCard;

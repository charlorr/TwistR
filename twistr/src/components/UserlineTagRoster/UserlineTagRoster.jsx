import React from "react";
import TwistService  from  'components/TwistService/TwistService.jsx';

import {
  Col,
  Row,
  Button
} from "reactstrap";

const twistService = new TwistService();
class UserlineTagRoster extends React.Component {
  
  constructor(props) {
    super(props);    
    this.state = {}
    this.handleFollowTag = this.handleFollowTag.bind(this);
    this.handleUnfollowTag = this.handleUnfollowTag.bind(this);
  }

  handleFollowTag(clickedTag){
    var self = this;
    twistService.createTwist(
      {
        "user": localStorage.getItem('pk'),
        "author": self.props.currentUserline.pk,
        "tag": clickedTag.name
      }
    )
  }

  handleUnfollowTag(twist){
    twistService.deleteTwist(twist);
  }
  render() {
    var self = this;
    var cards = [];
    this.props.followed_tags_all.forEach(function(twist) { //currently displaying all tags regardless of follow or not
        cards.push(
          <Col lg="3" md="3" sm="3">
            <Button
            className="btn-round" 
            size="lg" 
            color="success"
            onClick = {() => self.handleUnfollowTag(twist)}
            >
                {twist.tag} 
            </Button>
          </Col>
        );
    });
    
    this.props.unfollowed_tags_all.forEach(function(tag){
      cards.push(
        <Col lg="3" md="3" sm="3">
          <Button
          className="btn-round" 
          size="lg" 
          color="danger"
          value = {tag}
          onClick = {() => self.handleFollowTag(tag)}
          >
              {tag.name}
          </Button>
        </Col>
      );
  });
  return (
    <>
    <Row>{cards}</Row>
    </>
    );
  }
}

export default UserlineTagRoster;
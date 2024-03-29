import React from "react";
import TwistService  from  'components/TwistService/TwistService.jsx';

import {
  Col,
  Row,
  Button
} from "reactstrap";
import TagButton from "components/TagButton/TagButton";

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
    twistService.getTwistExists(localStorage.getItem('pk'), self.props.currentUserline.pk, clickedTag.name)
    .then(function (result){
      if(result.data.length !== 0){
        var current = result.data;
        twistService.updateTwist(
          {
            "pk": current[0].pk,
            "user": localStorage.getItem('pk'),
            "author": self.props.currentUserline.pk,
            "tag": clickedTag.name,
            "followed": true
          }
        )
      }
      else{
        twistService.createTwist({
          "user": localStorage.getItem('pk'),
          "author": self.props.currentUserline.pk,
          "tag": clickedTag.name,
          "followed": true
        }
        )
      }
    });
    
    
  }

  handleUnfollowTag(twist){
    twistService.updateTwist(
      {
      "pk": twist.pk,
      "user": twist.user,
      "author": twist.author,
      "tag": twist.tag,
      "followed": false
      })
  }
  render() {
    var self = this;
    var cards = [];
    this.props.followed_twists_all.forEach(function(twist) {
        cards.push(
          <Col lg="3" md="3" sm="3">
            <TagButton parent = "TagRoster" user = {localStorage.getItem('pk')} author = {self.props.currentUserline.pk} tag = {twist.tag}/>
          </Col>
        );
    });
    
    this.props.unfollowed_tags_all.forEach(function(tag){
      cards.push(
        <Col lg="3" md="3" sm="3">
          <TagButton parent = "TagRoster" user = {localStorage.getItem('pk')} author = {self.props.currentUserline.pk} tag = {tag.name}/>
            
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
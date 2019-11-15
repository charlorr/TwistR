import React from "react";
//import Post from "components/Post/Post.jsx";

import {
  Row,
  Col,
  Button
} from "reactstrap";

class UserlineTagRoster extends React.Component {
  render() {
    console.log(this.props.tags_all);
    console.log(this.props.followed_tags_all);
    console.log(this.props.unfollowed_tags_all);
    var cards = [];
    this.props.followed_tags_all.forEach(function(tag) { //currently displaying all tags regardless of follow or not
        cards.push(
          <Col lg="3" md="3" sm="3">
            <Button
            className="btn-round" 
            size="lg" 
            color="primary">
                {tag.tag}
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
          color="secondary">
              {tag.name}
          </Button>
        </Col>
      );
  });
    return (cards);
  }
}

export default UserlineTagRoster;
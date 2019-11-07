import React from "react";
//import Post from "components/Post/Post.jsx";

import {
  Row,
  Col,
  Button
} from "reactstrap";

class UserlineTagRoster extends React.Component {
  render() {
    // Create tags
    var cards = [];
    this.props.tags.forEach(function(tag) { 
        cards.push(
          <Col lg="3" md="3" sm="3">
            <Button>
                {tag.name}
            </Button>
          </Col>
        );
    });
    return (cards);
  }
}

export default UserlineTagRoster;
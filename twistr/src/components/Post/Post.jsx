import React from 'react';
//import UserCard from "components/UserCard/UserCard.jsx";
import PostCard from "components/PostCard/PostCard.jsx";
import ReactCard from "components/ReactCard/ReactCard.jsx";

import {
  Col,
  Row
} from "reactstrap";

class Post extends React.Component {

  render() {
    return (
      <>
      <Col lg="12" md="12" xs="12">
        <Row>
          <Col lg="2" md="2" xs="3">
            {/*<UserCard picture={this.props.post.picture/>
            <ReactCard />*/}
            <hr />
            <hr />
            <hr />
            <hr />
            <ReactCard parent = {this.props.parent} post={this.props.post} />
            <hr />
            <hr />
            <hr />
            <hr />
          </Col>
          <Col lg="10" md="10" xs="9">
            <PostCard parent = {this.props.parent} post={this.props.post} />
          </Col>
        </Row>
      </Col>
      </>
    );
  }
}

export default Post;

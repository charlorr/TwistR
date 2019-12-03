import React from 'react';
import PostCard from "components/PostCard/PostCard.jsx";
import RetwistCard from "components/RetwistCard/RetwistCard.jsx";
import ReactCard from "components/ReactCard/ReactCard.jsx";

import {
  Col,
  Row
} from "reactstrap";


class Retwist extends React.Component {


  render() {
    console.log(this.props.retwist);
    return (
      <>
      <Col lg="12" md="11" sm="10">
        <Row>
          <Col lg="2" md="2" sm="1">
            <ReactCard parent = {this.props.parent} post={this.props.retwist} />
            <hr />
          </Col>
          <Col lg="10" md="9" sm="9">
            Retwist
            <RetwistCard parent = {this.props.parent} post={this.props.retwist} />
            Original Post
          </Col>
        </Row>
      </Col>
      </>
    );
  }
}

export default Retwist;

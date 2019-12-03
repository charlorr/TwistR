import React from 'react';
//import UserCard from "components/UserCard/UserCard.jsx";
import PostCard from "components/PostCard/PostCard.jsx";
import ReactCard from "components/ReactCard/ReactCard.jsx";

import {
  Col,
  Row
} from "reactstrap";


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //show_react_card: false,
    };
  }

  render() {
    var dashboard = false;
    if(this.props.dashboard){
      dashboard = true;
    }
    if(this.props.show_react_card) {
      //console.log("not on explore");
      return (
        <>
        <Col lg="12" md="11" sm="10">
          <Row>
            <Col lg="2" md="2" sm="1">
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
            <Col lg="10" md="9" sm="9">
              <PostCard parent = {this.props.parent} post={this.props.post} dashboard={dashboard}/>
            </Col>
          </Row>
        </Col>
        </>
      );
    }
    else {
      //console.log("on explore page");
      return (
        <>
        <Col lg="12" md="11" sm="10">
          <Row>
            <Col lg="10" md="9" sm="9">
              <PostCard parent = {this.props.parent} post={this.props.post} dashboard={dashboard}/>
            </Col>
          </Row>
        </Col>
        </>
      );
    }
    
  }
}

export default Post;

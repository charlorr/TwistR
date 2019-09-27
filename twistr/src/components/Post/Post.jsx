import React, { Component } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col
} from "reactstrap";

class Post extends React.Component {


  render() {
    return (
      <>
      <Col md="9">
        <Card>
          <CardHeader>
            <CardTitle tag="h5">This can be a friend's post</CardTitle>
            <p className="card-category">Tags could go here</p>
          </CardHeader>
          <CardBody>
            <h1>The actual post can go here</h1>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="fa fa-history" /> Updated 3 minutes ago
            </div>
          </CardFooter>
        </Card>
      </Col>
      </>
    );
  }
}

export default Post;

import React from 'react';
import UserCard from "components/UserCard/UserCard.jsx";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Row
} from "reactstrap";

class Post extends React.Component {
  render() {
    return (
      <>
      <Col lg="12" md="11" sm="10">
        <Row>
          <UserCard userPic={this.props.post.picture}/>
          <Col lg="10" md="9" sm="9">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">{this.props.post.author}</CardTitle>
                <p className="card-category">{this.props.post.tags}</p>
              </CardHeader>
              <CardBody>
                <h1>{this.props.post.content}</h1>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated {this.props.post.timestamp} minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Col>
      </>
    );
  }
}

export default Post;

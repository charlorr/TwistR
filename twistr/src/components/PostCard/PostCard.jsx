import React from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class PostCard extends React.Component {

  render() {
    return (
    <>
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
    </>
    );
  }
}

export default PostCard;

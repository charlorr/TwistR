import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Input,
  FormGroup
} from "reactstrap";

class CreatePost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      author: "Ania Szesko",
      tags: [
        "IE", "salad", "Purdue"
      ],
      content: "I like salad",
      history: "8",
    };
  }

  render() {
    return (
      <>
      <Col md="8" xs="7">
            <div className="numbers">
            <p className="card-category">Create Post
                <FormGroup>
                    <label>Max length is 280 characters</label>
                    <Input
                        type="textarea"
                        defaultValue="Type here"
                        maxLength="280"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        placeholder="Email" 
                        type="email"
                    />
                </FormGroup>
            </p>
            <CardTitle tag="p">Write a new post here.</CardTitle>
            <CardTitle tag="p">select tags</CardTitle>
            <p />
            </div>
        </Col>
      </>
    );
  }
}

export default CreatePost;

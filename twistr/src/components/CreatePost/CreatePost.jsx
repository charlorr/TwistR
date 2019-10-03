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
      chars_left: 280, max_chars: 280,
    };
  }

  handleWordCount = event => {
    const charCount = event.target.value.length;
    const maxChar = this.state.max_chars;
    const charLength = maxChar - charCount;
    this.setState({chars_left: charLength});
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
                        onChange={this.handleWordCount}
                    />
                    <div>{this.state.chars_left}</div>
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

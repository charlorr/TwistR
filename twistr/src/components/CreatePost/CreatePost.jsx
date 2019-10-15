import React from 'react';
import UserCard from "components/UserCard/UserCard.jsx";

import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Input,
  FormGroup,
  Row
} from "reactstrap";

class CreatePost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
      <Col lg="9" md="6" sm="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col lg="8" md="8">
                <CardTitle tag="h5">Write a new post here.</CardTitle>
                <FormGroup>
                    <label>Be creative! Remember to use at least one tag.</label>
                    <Input
                        type="textarea"
                        maxLength="280"
                        required
                        onChange={this.handleWordCount}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        placeholder="Add tags (separated by commas)" 
                        type="textarea"
                    />
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="fas fa-sync-alt" /> {this.state.chars_left} / 280 characters left
            </div>
          </CardFooter>
        </Card>
      </Col>
      <UserCard userPic={require("assets/img/PurduePete.jpg")}/>
      </>
    );
  }
}

export default CreatePost;

import React from 'react';
import UserCard from "components/UserCard/UserCard.jsx";

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

class CreatePost extends React.Component {

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
                        defaultValue="Type here"
                        maxLength="280"
                        required
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
              <i className="fas fa-sync-alt" /> XX / 280 characters left
            </div>
          </CardFooter>
        </Card>
      </Col>
      <UserCard/>
    </>
    );
  }
}

export default CreatePost;

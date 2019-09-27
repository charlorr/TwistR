import React from "react";

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

class SignIn extends React.Component {
  render() {
    return (
      <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Log In</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                        <FormGroup>
                          <label><b>Username</b></label>
                          <input placeholder="Enter Username" type="text"/>
                        </FormGroup>
                        <FormGroup>
                          <label><b>Password</b></label>
                          <input placeholder="Enter Password"  type="password" />
                        </FormGroup>
                      <div className="update ml-auto mr-auto">
                        <Button className="btn-round" color="primary" type="submit"> Log In </Button>
                      </div>
                  </Form>
                </CardBody>
              </Card>
    );
  }
}

export default SignIn;

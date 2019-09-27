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
      <div className="content" >
        <Card className="card-user">
                  <CardHeader className ="update ml-auto mr-auto">
                    <CardTitle tag="h5">Log In</CardTitle>
                  </CardHeader>
                  <CardBody className ="update ml-auto mr-auto">
                    <Form>
                      <Row>
                        <FormGroup>
                            <label><b>Username</b></label>
                            <Input name = "username" placeholder="Enter Username" type="text"/>
                          </FormGroup>
                          </Row>
                          <Row>
                          <FormGroup>
                            <label><b>Password</b></label>
                            <Input name = "password" placeholder="Enter Password"  type="password" />
                          </FormGroup>
                          </Row>
                          <Row>
                            <div className="update ml-auto mr-auto">
                              <Button className="btn-round" size = "lg" color="primary" type="submit"> Log In </Button>
                              </div>
                         </Row>
                    </Form>
                  </CardBody>
          </Card>

          <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Register</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label><b>Username</b></label>
                          <Input name ="username" placeholder="Enter Username" type="text" required />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label> <b>Email Address</b> </label>
                          <Input name = "email" placeholder="Email" type="email" pattern = "/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/" required/>
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="3">
                        <FormGroup>
                          <label><b>Phone Number</b></label>
                          <Input type="tel" name="phone" placeholder ="Enter Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label><b>First Name</b></label>
                          <Input placeholder="Enter First Name" type="text" required />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label><b>Last Name</b></label>
                          <Input placeholder="Enter Last Name" type="text" required />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button className="btn-round" size="lg" color="primary" type="submit"> Register </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
        </div>
    );
  }
}

export default SignIn;

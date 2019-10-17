import React from "react";
import PasswordForm from "components/PasswordForm/PasswordForm.jsx";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class SignIn extends React.Component {
  checkMatch(){
    if(document.getElementById("password_confirm").value !== document.getElementById("password_reg").value) {
      document.getElementById("password_confirm").setCustomValidity("Passwords must match");
    }
    else {
      document.getElementById("password_confirm").setCustomValidity("");
    }
  }
  render() {
    return (
      <div className="content" >
        <Card className="card-user">
                  <CardHeader className ="update ml-auto mr-auto">
                    <CardTitle tag="h5">Log In</CardTitle>
                  </CardHeader>
                  <CardBody className ="update ml-auto mr-auto">
                    <Form >
                      <Row>
                        <FormGroup>
                            <label><b>Username/Email</b></label>
                            <Input name = "username" placeholder="Enter Username/Email" type="text"/>
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
                  <p><font color="red">*</font>Required</p>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label><b>Username<font color="red">*</font></b></label>
                          <Input name ="username" placeholder="Enter Username" type="text" required />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label> <b>Email Address<font color="red">*</font></b> </label>
                          <Input name = "email" placeholder="Email" type="example@twistr.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,63}$" required/>
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="3">
                        <FormGroup>
                          <label><b>Phone Number<font color="red">*</font></b></label>
                          <Input type="tel" name="phone" placeholder ="Enter Phone Number" pattern="[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}"/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label><b>First Name<font color="red">*</font></b></label>
                          <Input placeholder="Enter First Name" type="text" required />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label><b>Last Name<font color="red">*</font></b></label>
                          <Input placeholder="Enter Last Name" type="text" required />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label><b>Password<font color="red">*</font></b></label>
                          <Input id="password_reg" placeholder="Password" type="password" onChange={() => this.checkMatch()} required />
                        
                        </FormGroup>
                      </Col>
                      <Col className ="pl-1" md="6">
                        <FormGroup>
                        <div id="reg-PasswordForm">
                        <PasswordForm ></PasswordForm>
                        </div>
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label><b>Confirm Password<font color="red">*</font></b></label>
                          <Input id="password_confirm" placeholder="Password" type="password" onChange={() => this.checkMatch()} required />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button 
                          className="btn-round" 
                          size="lg" 
                          color="primary" 
                          type="submit"> 
                          
                          Register </Button>
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

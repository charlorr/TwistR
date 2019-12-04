import React from "react";
import  UserService  from  '../UserService/UserService.jsx';


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
} from "reactstrap";

class ForgotPassword extends React.Component {

  handleSubmit() {
    UserService.addPassword();
  }

  render() {
    return (
      <>
      <div className="content" >
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Forgot Password</CardTitle>
          </CardHeader>
          <CardBody className ="update ml-auto mr-auto">
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <FormGroup>
                  <label><b>Email</b></label>
                  <Input name = "email" placeholder="Enter Email" type="text"/>
                </FormGroup>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto">
                  <Button Forgot Password
                    className="btn-round" 
                    size="lg" 
                    color="primary"
                    type="submit">
                    Send Recovery Email
                  </Button>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
      </>
    );
  }
}

export default ForgotPassword;

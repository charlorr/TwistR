import React from "react";
import logo from '../twistr.png';
import Register from "components/Register/Register.jsx";
import LogIn from "components/LogIn/LogIn.jsx";
import ForgotPassword from "components/ForgotPassword/ForgotPassword.jsx";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
} from "reactstrap";

class Welcome extends React.Component {


  render() {
    return (
      <>
      <div className="content" >
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">
              <b><font color="#54BFEC">Welcome to Twist</font>
              <font color="#FF0005">Я</font></b>
            </CardTitle>
          </CardHeader>
          <CardBody className ="update ml-auto mr-auto">
            <Row>
              <img src={logo} className="App-logo" alt="logo" />
            </Row>
            <hr />
            <Row>
              <div className="update ml-auto mr-auto">
                <Button 
                  className="btn-round" 
                  size="lg" 
                  color="secondary"
                  type="submit">
                  Register
                </Button>
              </div>
              <div className="update ml-auto mr-auto">
                <Button 
                  className="btn-round" 
                  size="lg" 
                  color="secondary"
                  type="submit">
                  Log In
                </Button>
              </div>
              <div className="update ml-auto mr-auto">
                <Button 
                  className="btn-round" 
                  size="lg" 
                  color="secondary"
                  type="submit">
                  Forgot Password
                </Button>
              </div>
            </Row>
          </CardBody>
        </Card>
        <Register />
        <LogIn />
        <ForgotPassword />
      </div>
      </>
    );
  }
}

export default Welcome;

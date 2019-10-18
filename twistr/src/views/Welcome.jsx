import React from "react";
import logo from '../twistr.png';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  NavLink,
  Form,
  Input,
  Row,
  Col
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
                <Button className="btn-round" size = "lg" color="secondary" type="submit">
                  <NavLink href="register">
                    Register
                  </NavLink>
                </Button>
              </div>
              <div className="update ml-auto mr-auto">
                <Button className="btn-round" size = "lg" color="secondary" type="submit">
                  <NavLink href="login">
                    Log In
                  </NavLink>
                </Button>
              </div>
              <div className="update ml-auto mr-auto">
                <Button className="btn-round" size = "lg" color="secondary" type="submit">
                  <NavLink href="forgot">
                    Forgot Password
                  </NavLink>
                </Button>
              </div>
            </Row>
          </CardBody>
        </Card>
      </div>
      </>
    );
  }
}

export default Welcome;

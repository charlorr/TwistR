import React from "react";
import logo from '../Welcome_to_TwistR.png';
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

  constructor(props) {
    super(props);

    this.state = {
      LogIn: false,
      Register: false,
      ForgotPass: false,
    }
  }

  showLogin() {
    this.setState({
      LogIn: true,
      Register: false,
      ForgotPass: false,
    })
  }

  showReg() {
    this.setState({
      LogIn: false,
      Register: true,
      ForgotPass: false,
    })
  }

  showForgotPass() {
    this.setState({
      LogIn: false,
      Register: false,
      ForgotPass: true,
    })
  }

  render() {
    return (
      <>
      <div className="content" >
        <Card className="card-user">
          <CardBody className ="update ml-auto mr-auto">
            <Row>
              <img src={logo} className="App-logo welcomeLogo" alt="logo" />
            </Row>
            <hr />
            <Row>
              <div className="update ml-auto mr-auto">
                <Button 
                  className="btn-round" 
                  size="lg" 
                  color="secondary"
                  type="submit"
                  onClick={() => this.showReg()}>
                  Register
                </Button>
              </div>
              <div className="update ml-auto mr-auto">
                <Button 
                  className="btn-round" 
                  size="lg" 
                  color="secondary"
                  type="submit"
                  onClick={() => this.showLogin()}>
                  Log In
                </Button>
              </div>
              <div className="update ml-auto mr-auto">
                <Button 
                  className="btn-round" 
                  size="lg" 
                  color="secondary"
                  type="submit"
                  onClick={() => this.showForgotPass()}>
                  Forgot Password
                </Button>
              </div>
            </Row>
          </CardBody>
        </Card>
        { this.state.Register ? <Register /> : null}
        { this.state.LogIn ? <LogIn /> : null}
        { this.state.ForgotPass ? <ForgotPassword /> : null}
      </div>
      </>
    );
  }
}

export default Welcome;

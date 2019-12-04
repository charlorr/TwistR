import React from "react";
import logo from '../Welcome_to_TwistR.png';
import Register from "components/Register/Register.jsx";
import LogIn from "components/LogIn/LogIn.jsx";
import { Redirect } from 'react-router-dom';

import {
  Button,
  Card,
  CardBody,
  Row,
} from "reactstrap";

class Welcome extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      LogIn: false,
      Register: false,

    }
  }

  redirect() {
    if (localStorage.getItem('auth_token') !== null) {
      return <Redirect to="/admin/profile/user"/>;
    }
  }

  showLogin() {
    this.setState({
      LogIn: true,
      Register: false,
    })
  }

  showReg() {
    this.setState({
      LogIn: false,
      Register: true,
    })
  }

  render() {
    return (
      <>
      <div className="content" >
        {this.redirect()}
        <Card className="card-user">
          <CardBody className ="update ml-auto mr-auto">
            <Row>
              <img src={logo} className="App-logo welcomeLogo" alt="logo" />
            </Row>
            <hr />
            <Row>
              <div className="update ml-auto mr-auto">
                <Button
                  aria-label="Log In"
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
                  aria-label="Register"
                  className="btn-round" 
                  size="lg" 
                  color="secondary"
                  type="submit"
                  onClick={() => this.showReg()}>
                  Register
                </Button>
              </div>
            </Row>
          </CardBody>
        </Card>
        { this.state.Register ? <Register /> : null}
        { this.state.LogIn ? <LogIn /> : null}
        {/* <UserList /> remove before presenting */}
      </div>
      </>
    );
  }
}

export default Welcome;

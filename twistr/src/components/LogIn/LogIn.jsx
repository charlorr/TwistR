import React from "react";
import  UserService  from  '../UserService/UserService.jsx';
import NotificationAlert from "react-notification-alert";

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

const userService = new UserService();
class LogIn extends React.Component {

  constructor(props) {
    super(props);
    //show =false means the req box isn't shown
    //statusX = true means the color is red
    this.state = {
      sendToProfile: false
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }
  notificationAlert = React.createRef();

	handleSubmit(event) {
		event.preventDefault();
    this.handleLogIn();
  }
  
  handleLogIn() {
    userService.loginUser(
      {
          "username": document.getElementById("username").value,
          "password": document.getElementById("password").value,
      }
      ).then((result) => {
        if (result.toString().includes("401")){
          var options = {};
          options = {
            place: "tr",
            message: (
              <div>
                <div>
                Username/Password not correct!
                </div>
              </div>
            ),
            type: "danger",
            icon: "nc-icon nc-bell-55",
            autoDismiss: 7
          };
          this.notificationAlert.current.notificationAlert(options);
        }
        else {
         
          window.location.reload();
        }});
  }

  render() {
    return (
      <>
      <div className="content" >
      <NotificationAlert ref={this.notificationAlert} />
      <Card className="card-user">
        
          <CardHeader>
            <CardTitle tag="h5">Log In</CardTitle>
          </CardHeader>
          <CardBody className ="update ml-auto mr-auto">
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <FormGroup>
                  <label><b>Username/Email</b></label>
                  <Input name = "username" id="username" placeholder="Enter Username/Email" type="text"/>
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <label><b>Password</b></label>
                  <Input name = "password" id="password" placeholder="Enter Password"  type="password" />
                </FormGroup>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto">
                  <Button
                    aria-label="Log In"
                    className="btn-round" 
                    size="lg" 
                    color="primary"
                    type="submit">
                    Log In
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

export default LogIn;

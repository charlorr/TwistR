import React from "react";
import NotificationAlert from "react-notification-alert";
import UserService from "../components/UserService/UserService.jsx";
// reactstrap components
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


const userService = new UserService();
class Profile extends React.Component {
  bio="Boiler Up, Hammer Down!";
  state = {
    visible: true
  };
  notificationAlert = React.createRef();
  updateProfile() {
    if (document.getElementById("username").reportValidity() &&
        document.getElementById("email").reportValidity() &&
        document.getElementById("tel").reportValidity() &&
        document.getElementById("first").reportValidity() &&
        document.getElementById("last").reportValidity() &&
        document.getElementById("bio").reportValidity()) {
      document.getElementById("displayBio").innerHTML = document.getElementById("bio").value;
      document.getElementById("fullName").innerHTML = document.getElementById("first").value + " " + document.getElementById("last").value;
      var options = {};
      options = {
        place: "tr",
        message: (
          <div>
            <div>
              Profile successfully updated!
            </div>
          </div>
        ),
        type: "warning",
        icon: "nc-icon nc-bell-55",
        autoDismiss: 7
      };
      this.notificationAlert.current.notificationAlert(options);
    }
    // else {
    //   alert(document.getElementById("email").validationMessage);
    // }
  }
  render() {
    return (
      <>
      <div className="content">
        <NotificationAlert ref={this.notificationAlert} />
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/BoilermakerSpecial.jpg")}
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/PurduePete.jpg")}
                    />
                    <h5 className="title" id="fullName">Purdue Pete</h5>
                  </a>
                  <p className="description">@therealscrummaster</p>
                </div>
                <p className="description text-center"
                  id = "displayBio">
                  {this.bio}
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="4" md="6" xs="6">
                      <h5>
                        2000 <br />
                        <small>Following</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <h5>
                        3 <br />
                        <small>Followers</small>
                      </h5>
                    </Col>
                    <Col className="mr-auto" lg="4" md="6" xs="6">
                      <h5>
                        666 <br />
                        <small>Tags</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Who You Follow</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/Train.png")}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        DJ Khaled <br />
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                      <Button className = "follow-icons btn-round btn-icon"
                              color = "success"
                              size="sm">
                              <i className = "fa fa-check follow-check"></i>
                              <i className = "fa fa-times follow-uncheck"></i>
                          </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/BoilermakerSpecial.jpg")}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        Ashwin Gokhale <br />
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                          <Button className = "follow-icons btn-round btn-icon"
                              color = "success"
                              size="sm">
                              <i className = "fa fa-check follow-check"></i>
                              <i className = "fa fa-times follow-uncheck"></i>
                          </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/Fountain.jpg")}
                          />
                        </div>
                      </Col>
                      <Col className="col-ms-7" xs="7">
                        Professor Samanta <br />
                        
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                      <Button className = "follow-icons btn-round btn-icon"
                              color = "success"
                              size="sm">
                              <i className = "fa fa-check follow-check"></i>
                              <i className = "fa fa-times follow-uncheck"></i>
                          </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
                <p><font color="red">*</font>Required</p>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Username<font color="red">*</font> (disabled)</label>
                        <Input
                          id="username"
                          defaultValue="therealscrummaster"
                          disabled
                          placeholder="Username"
                          type="text"
                          maxLength="30"
                          required/>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address<font color="red">*</font>
                        </label>
                        <Input 
                          id="email"
                          placeholder="example@twistr.com" 
                          type="email"
                          maxLength="40"
                          required/>
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Phone number<font color="red">*</font></label>
                        <Input
                          id="tel"
                          placeholder="XXX-XXX-XXXX"
                          type="text"
                          pattern="[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}"
                          maxLength="12"
                          required/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name<font color="red">*</font></label>
                        <Input
                          id="first"
                          defaultValue="Purdue"
                          placeholder="First Name"
                          type="text"
                          maxLength="30"
                          required/>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name<font color="red">*</font></label>
                        <Input
                          id="last"
                          defaultValue="Pete"
                          placeholder="Last Name"
                          type="text"
                          maxLength="30"
                          required/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Bio<font color="red">*</font></label>
                        <Input
                          id="bio"
                          type="textarea"
                          defaultValue={this.bio}
                          maxLength="200"
                          required/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="button"
                        onClick={() => this.updateProfile()}
                      >
                        Update Profile
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      </>
    );
  }
}

export default Profile;

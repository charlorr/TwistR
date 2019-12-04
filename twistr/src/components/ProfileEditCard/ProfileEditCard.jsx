import  React, { Component } from  'react';
import  UserService  from  'components/UserService/UserService.jsx';
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
    Col
  } from "reactstrap";
  const  userService  =  new  UserService();
  
class  ProfileEditCard  extends  Component {
  
  constructor(props) {
    super(props);
    this.state  = {
      users: [],
      currentUser: [],
    };
    this.handleSubmit  =  this.handleSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
  }

    notificationAlert = React.createRef();
    
    deleteProfile() {
      userService.deleteUser(this.props.currentUser.pk);
      //alert('Account has been deleted!');
      this.logOut();
    }

    logOut(){
      localStorage.clear();
      window.location.reload();
    }
    
    handleSubmit(event) {
      this.updateProfile(this.props.currentUser.pk)
      event.preventDefault();
    }
    
    updateProfile(pk) {
      var username = document.getElementById("username").value;
      var first_name = document.getElementById("first_name").value;
      var last_name = document.getElementById("last_name").value;
      var email = document.getElementById("email").value;
      var phone_number = document.getElementById("phone_number").value;
      var bio = document.getElementById("bio").value;
      
      userService.updateUser({
        "pk": pk,
        "username": username,
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "phone_number": phone_number,
        "bio": bio
      })
      .then((result) => {
        
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
      })
      .catch(()=>{
        alert('There was an error! Please re-check your form.');
      });
    }

    render() { 
        return (
          <div >
            {/* <p>this is the {this.props.currentUser} </p> */}
            {/* <p> this is the username: {this.props.currentUser.username}</p> */}
            {/*this.redirect()*/}
          <Card className="card-user theme-card-bg">
              <NotificationAlert ref={this.notificationAlert} />
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
                <p><font color="red">*</font>Required</p>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <div>
                  <Row>
                    <Col className="pr-1" lg="3" md="3" sm="12" xs="12">
                      <FormGroup>
                        <label>Username<font color="red">*</font> (disabled)</label>
                        <Input
                          id="username"
                          ref="username"
                          defaultValue={this.props.currentUser.username}
                          disabled
                          placeholder="Username"
                          type="text"
                          maxLength="30"
                          required/>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" lg="4" md="4" sm="12" xs="12">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address<font color="red">*</font>
                        </label>
                        <Input 
                          id="email"
                          placeholder="example@twistr.com" 
                          ref = "email"
                          type="email"
                          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,63}$"
                          maxLength="40"
                          defaultValue = {this.props.currentUser.email}
                          required/>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" lg="3" md="3" sm="12" xs="12">
                      <FormGroup>
                        <label>Phone number<font color="red">*</font></label>
                        <Input
                          id="phone_number"
                          placeholder="XXX-XXX-XXXX"
                          type="text"
                          pattern="[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}"
                          maxLength="12"
                          defaultValue = {this.props.currentUser.phone_number}
                          ref = "phone_number"
                          required/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" lg="6" md="6" sm="6" xs="6">
                      <FormGroup>
                        <label>First Name<font color="red">*</font></label>
                        <Input
                          id="first_name"
                          ref = "first_name"
                          placeholder="First Name"
                          type="text"
                          maxLength="30"
                          defaultValue = {this.props.currentUser.first_name}
                          required/>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" lg="6" md="6" sm="6" xs="6">
                      <FormGroup>
                        <label>Last Name<font color="red">*</font></label>
                        <Input
                          id="last_name"
                          ref = "last_name"
                          placeholder="Last Name"
                          type="text"
                          maxLength="30"
                          defaultValue = {this.props.currentUser.last_name}
                          required/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Col className="pl-1" lg="12" md="12" sm="12" xs="12">
                      <FormGroup>
                        <label>Bio<font color="red">*</font></label>
                        <Input
                          id="bio"
                          ref = "bio"
                          defaultValue={this.props.currentUser.bio}
                          type="text"
                          maxLength="200"
                          required/>
                      </FormGroup>
                    </Col>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto ">
                      <Button
                        className="btn-round clicks"
                        color="secondary"
                        type="submit"
                      >
                        Update Profile
                      </Button>
                      </div>
                      <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round clicks"
                        color="secondary"
                        onClick={this.deleteProfile}
                      >
                        Delete Profile
                      </Button>
                      </div>
                      <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round clicks"
                        color="secondary"
                        onClick={this.logOut}
                      >
                        Log out
                      </Button>
                    </div>
                  </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
            </div>
        );
    }
} 
      
export  default  ProfileEditCard;

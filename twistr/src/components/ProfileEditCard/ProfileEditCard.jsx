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
        // var current = props.currentUser;
        // const output = Object.fromEntries(current);
        // console.log(output);
        this.state  = {
            users: [],
            currentUserPk: null, //Profile sends ProfileEditCard a prop of currentUserPK
            currentUser: []
        };
      this.handleSubmit  =  this.handleSubmit.bind(this);
      const current = userService.getUser(this.props.currentUser);
      console.log(current);
    }

    // componentWillReceiveProps(props){
    //   this.setState({currentUser: props.currentUser})
    //   console.log("will receive props: "+ this.state.currentUser.pk)
    // }

    // componentDidMount() { //this function calls the backend to grab the user with currentUserPK and loads that user into the state
    //   var  self  =  this;
    //   userService.getUser(self.state.currentUserPk).then(function(result){
    //     console.log(result);
    //     self.setState({currentUser: result})
    //   })
    // }

    notificationAlert = React.createRef();
    handleSubmit(event){
      
      this.updateProfile(this.props.currentUser.pk)
      event.preventDefault();
    }
    
    updateProfile(pk){
      
      var username = document.getElementById("username").value;
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var email = document.getElementById("email").value;
      var phoneNumber = document.getElementById("phoneNumber").value;
      var bio = document.getElementById("bio").value;
      
      userService.updateUser(
              {
              "pk":  pk,
              "username": username,
              "firstName":  firstName,
              "lastName":  lastName,
              "email":  email,
              "phoneNumber":phoneNumber,
              "bio":  bio
              }
              ).then((result)=>{
                
                  console.log(result);
                  
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
              }).catch(()=>{
                  alert('There was an error! Please re-check your form.');
              });
    }

    render() { 
        return (
          <div >
            {/* <p>this is the {this.props.currentUser} </p> */}
            {/* <p> this is the username: {this.props.currentUser.username}</p> */}
          <Card className="card-user">
              <NotificationAlert ref={this.notificationAlert} />
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
                <p><font color="red">*</font>Required</p>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                    {
                  }<div>
                  <Row>
                    <Col className="pr-1" md="5">
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
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address<font color="red">*</font>
                        </label>
                        <Input 
                          id="email"
                          placeholder="example@twistr.com" 
                          ref = "email"
                          type="email"
                          maxLength="40"
                          defaultValue = {this.props.currentUser.email}
                          required/>
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Phone number<font color="red">*</font></label>
                        <Input
                          id="phoneNumber"
                          placeholder="XXX-XXX-XXXX"
                          type="text"
                          pattern="[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}"
                          maxLength="12"
                          defaultValue = {this.props.currentUser.phoneNumber}
                          ref = "phoneNumber"
                          required/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name<font color="red">*</font></label>
                        <Input
                          id="firstName"
                          ref = "firstName"
                          placeholder="First Name"
                          type="text"
                          maxLength="30"
                          defaultValue = {this.props.currentUser.firstName}
                          required/>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name<font color="red">*</font></label>
                        <Input
                          id="lastName"
                          ref = "lastName"
                          placeholder="Last Name"
                          type="text"
                          maxLength="30"
                          defaultValue = {this.props.currentUser.lastName}
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
                          ref = "bio"
                          defaultValue={this.props.currentUser.bio}
                          type="text"
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
                        type="submit"
                      >
                        Update Profile
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
import React from "react";
//import PasswordForm from "components/PasswordForm/PasswordForm.jsx";
import PasswordFormReqs from "components/PasswordFormReqs/PasswordFormReqs.jsx";
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
  Col
} from "reactstrap";

const userService = new UserService();
class Register extends React.Component {

  constructor(props) {
    super(props);
    //show =false means the req box isn't shown
    //statusX = true means the color is red
    this.state = {
      value: '',
      show: false,
      status1: true,
      status2: true,
      status3: true,
      status4: true,
      status5: true
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var  self  =  this;
    userService.getUsers().then(function (result) {
        console.log(result);
        self.setState({ users:  result.data, nextPageURL:  result.nextlink})
    });
  }//Didn't follow the tutorial on this one, used the one from UserList

  handleCreate() {
      userService.createUser(
        {
            "firstName": document.getElementById("firstName").value,
            "lastName": document.getElementById("lastName").value,
            "email": document.getElementById("email").value,
            "phoneNumber": document.getElementById("phoneNumber").value,
            "username": document.getElementById("username").value,
            "password": document.getElementById("password_reg").value
        }
        ).then((result)=>{
          alert("Customer created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
  } //TODO: check that username and email are unique

  // handleUpdate(){
  //     var first = document.getElementById("firstName").value;
  //     var last = document.getElementById("lastName").value;
  //     var email = document.getElementById("email").value;
  //     var phoneNumber = document.getElementById("phoneNumber").value;
  //     var username = document.getElementById("username").value;
  //     var password = document.getElementById("password_reg").value;
  //   userService.updateUser(
  //       {
  //       "pk":  1,
  //       "firstName":  first,
  //       "lastName": last,
  //       "email": email,
  //       "phone":  phoneNumber,
  //       "username":  username,
  //       "password":  password
  //       }
  //       ).then((result)=>{
  //           alert("Customer updated!");
  //       }).catch(()=>{
  //           alert('There was an error! Please re-check your form.');
  //       });
  //   }
  // ^^Not needed, use for reference, then delete.

  handleSubmit(event) {
    event.preventDefault();
		this.setState({
			value: document.getElementById("password_reg").value,
			show: true
		});
    this.handleCreate();
    event.preventDefault();
  }

  handleChange() {
		this.setState({
			value: document.getElementById("password_reg").value,
			show: true
    });
    
    if(document.getElementById("password_confirm").value !== document.getElementById("password_reg").value) {
      document.getElementById("password_confirm").setCustomValidity("Passwords must match");
    }
    else {
      document.getElementById("password_confirm").setCustomValidity("");
    }

		const value1  = document.getElementById("password_reg").value;
		const valid_lowercase = /(?=.*[a-z])/.test(value1);
		const valid_uppercase = /(?=.*[A-Z])/.test(value1);
		const valid_8char = /(?=.{8,})/.test(value1);
		const valid_specialchar = /(?=.*[!@#\\$%\\^&\\*])/.test(value1);
		const valid_number = /(?=.*[0-9])/.test(value1);
		
		this.setState({
			status1: !valid_lowercase, 
			status2: !valid_uppercase,
			status3: !valid_8char,
			status4: !valid_number,
			status5: !valid_specialchar
    })

    const regex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.{8,})(?=.*[!@#\\$%\\^&\\*])(?=.*[0-9])");
		const isValid = regex.test(document.getElementById("password_reg").value);
    
    if(!isValid){
      
      document.getElementById("password_reg").setCustomValidity("Invalid password");
    }
		else {
		  document.getElementById("password_reg").setCustomValidity("");
    }  
	}

  render() {
    return (
      <>
      <div className="content" >
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Register</CardTitle>
            <label><font color="red">* </font>Required</label>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col className="pr-1" md="5">
                  <FormGroup>
                    <label><b>Username<font color="red"> *</font></b></label>
                    <Input name ="username" id="username" placeholder="Enter Username" type="text" required />
                  </FormGroup>
                </Col>
                <Col className="pl-1" md="4">
                  <FormGroup>
                    <label> <b>Email Address<font color="red"> *</font></b> </label>
                    <Input name = "email" id="email" placeholder="example@twistr.com" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,63}$" required/>
                  </FormGroup>
                </Col>
                <Col className="pl-1" md="3">
                  <FormGroup>
                    <label><b>Phone Number<font color="red"> *</font></b></label>
                    <Input type="tel" name="phone" id="phoneNumber" placeholder ="XXX-XXX-XXXX" pattern="[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}"/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="6">
                  <FormGroup>
                    <label><b>First Name<font color="red"> *</font></b></label>
                    <Input id="firstName" placeholder="Enter First Name" type="text" required />
                  </FormGroup>
                </Col>
                <Col className="pl-1" md="6">
                  <FormGroup>
                    <label><b>Last Name<font color="red"> *</font></b></label>
                    <Input id="lastName" placeholder="Enter Last Name" type="text" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="6">
                  <FormGroup>
                    <label><b>Password<font color="red"> *</font></b></label>
                    <Input id="password_reg" placeholder="Enter Password" value={this.state.value} type="password" onChange={() => this.handleChange()} required />
                  </FormGroup>
                </Col>
                  <Col className="pl-1" md="6">
                  <FormGroup>
                    <label><b>Confirm Password<font color="red"> *</font></b></label>
                    <Input id="password_confirm" placeholder="Enter Password Again" type="password" onChange={() => this.handleChange()} required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                {/*this is how the password requirements box pops up when creating password*/}
                <Col className="pl-1" md="6">
                  {this.state.show && <PasswordFormReqs color1= {this.state.status1}  color2 ={this.state.status2} color3 ={this.state.status3} color4 ={this.state.status4} color5 ={this.state.status5}/>}
                </Col>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto">
                  <Button 
                    className="btn-round" 
                    size="lg" 
                    color="primary"
                    type="submit"
                    onClick={() => this.handleSubmit()}>
                    Register
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

export default Register;
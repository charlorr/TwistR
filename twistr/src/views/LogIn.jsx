import React from "react";
//import PasswordForm from "components/PasswordForm/PasswordForm.jsx";
import PasswordFormReqs from "components/PasswordFormReqs/PasswordFormReqs.jsx";
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
  Col,
  NavLink
} from "reactstrap";

class LogIn extends React.Component {

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

    /*const regex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.{8,})(?=.*[!@#\\$%\\^&\\*])(?=.*[0-9])");
		const isValid = regex.test(document.getElementById("password_reg").value);
    
    if(!isValid){
      
      document.getElementById("password_reg").setCustomValidity("Invalid password");
    }
		else {
		  document.getElementById("password_reg").setCustomValidity("");
    }  */  
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			value: document.getElementById("password_reg").value,
			show: true
		});
		    
	}

  render() {
    return (
      <>
      <div className="content" >
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Log In</CardTitle>
          </CardHeader>
          <CardBody className ="update ml-auto mr-auto">
            <Form >
              <Row>
                <FormGroup>
                  <label><b>Username/Email</b></label>
                  <Input name = "username" placeholder="Enter Username/Email" type="text"/>
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <label><b>Password</b></label>
                  <Input name = "password" placeholder="Enter Password"  type="password" />
                </FormGroup>
              </Row>
              <Row>
                <div className="update ml-auto mr-auto">
                  <Button 
                    className="btn-round" 
                    size="lg" 
                    color="secondary"
                    type="submit">
                    <NavLink>
                      Log In
                    </NavLink>
                  </Button>
                  <Button 
                    className="btn-round" 
                    size="lg" 
                    color="secondary"
                    type="submit">
                    <NavLink href="forgot">
                      Forgot Password
                    </NavLink>
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

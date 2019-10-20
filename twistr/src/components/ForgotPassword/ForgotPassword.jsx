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
} from "reactstrap";

class ForgotPassword extends React.Component {

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
            <CardTitle tag="h5">Forgot Password</CardTitle>
            <label><font color="red">* </font>Required</label>
          </CardHeader>
          <CardBody>
            <Form onSubmit = {this.handleSubmit}>
              <Row>
                <Col className="pr-1" md="6">
                  <FormGroup>
                    <label><b>Password<font color="red"> *</font></b></label>
                    <Input id="password_reg" placeholder="Enter Password" value={this.state.value} type="text" onChange={() => this.handleChange()} required />
                  </FormGroup>
                </Col>
                  <Col className="pl-1" md="6">
                  <FormGroup>
                    <label><b>Confirm Password<font color="red"> *</font></b></label>
                    <Input id="password_confirm" placeholder="Enter Password Again" type="text" onChange={() => this.handleChange()} required />
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
                    type="submit">
                    Submit
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

export default ForgotPassword;

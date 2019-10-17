import React from "react";
import {
	Form,
	Input,
	FormGroup
  } from "reactstrap";
class PasswordForm extends React.Component {

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

	//test each regex requirement individually to update each color individually
	handleChange() {
		this.setState({
			value: document.getElementById("reg-pass-input").value,
			show: true
		});

		const  value1  = document.getElementById("reg-pass-input").value;
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
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			value: document.getElementById("reg-pass-input").value,
			show: true
		});
		
		const regex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.{8,})(?=.*[!@#\\$%\\^&\\*])(?=.*[0-9])");
		const isValid = regex.test(document.getElementById("reg-pass-input").value);
		
		if(!isValid){
			document.getElementById("reg-pass-input").setCustomValidity("Invalid password");
		}
		else {
		  document.getElementById("reg-pass-input").setCustomValidity("");
		}
	}

	 render() {
		 return (
			 <Form onSubmit={this.handleSubmit} >
				 <FormGroup>
				<label><b>Password<font color="red">*</font></b></label>
				<Input id = "reg-pass-input" type = "password" value={this.state.value} onChange={()=> this.handleChange()} />
				</FormGroup>
				<Input type="submit" value="Submit"/>
				{this.state.show && <PasswordFormReqs color1= {this.state.status1}  color2 ={this.state.status2} color3 ={this.state.status3} color4 ={this.state.status4} color5 ={this.state.status5}/>}
			</Form>
			
		);
	}
}

class PasswordFormReqs extends React.Component{

	render(){
		let color_status1 = this.props.color1 ? "reg-status-red" : "reg-status-green";
		let color_status2 = this.props.color2 ? "reg-status-red" : "reg-status-green";
		let color_status3 = this.props.color3 ? "reg-status-red" : "reg-status-green";
		let color_status4 = this.props.color4 ? "reg-status-red" : "reg-status-green";
		let color_status5 = this.props.color5 ? "reg-status-red" : "reg-status-green";
		return(
			<div id="reg-invalid-pass">
					<p className = {color_status1}>Minimum 1 lowercase letter</p>
					<p className = {color_status2}>Minimum 1 uppercase letter</p>
					<p className = {color_status3}>Minimum 8 characters</p>
					<p className = {color_status4}>Minimum 1 number</p>
					<p className = {color_status5}>Minimum 1 special character</p>
			</div>
		)
	}
}

export default PasswordForm;
export{PasswordFormReqs};
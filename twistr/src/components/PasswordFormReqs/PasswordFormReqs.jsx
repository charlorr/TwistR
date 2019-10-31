import React from "react";


class PasswordFormReqs extends React.Component{

	render(){
		let color_status1 = this.props.color1 ? "reg-status-red" : "reg-status-green";
		let color_status2 = this.props.color2 ? "reg-status-red" : "reg-status-green";
		let color_status3 = this.props.color3 ? "reg-status-red" : "reg-status-green";
		let color_status4 = this.props.color4 ? "reg-status-red" : "reg-status-green";
		let color_status5 = this.props.color5 ? "reg-status-red" : "reg-status-green";
		return(
			<div id="passwordFormReqs">
                <label><b>Password must contain:</b></label>
					<p className = {color_status1}>Minimum 1 lowercase letter</p>
					<p className = {color_status2}>Minimum 1 uppercase letter</p>
					<p className = {color_status4}>Minimum 1 number</p>
					<p className = {color_status5}>Minimum 1 special: !@#$%^&*</p>
                    <p className = {color_status3}>Minimum 8 characters</p>
			</div>
		)
	}
}

export default PasswordFormReqs;
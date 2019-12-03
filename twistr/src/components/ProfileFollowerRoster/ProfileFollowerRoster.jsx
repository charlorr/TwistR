import React from "react";
//import UserService  from  'components/UserService/UserService.jsx';

import {
    Row,
    Col,
    Button
} from "reactstrap";

//const userService = new UserService();
class ProfileFollowerRoster extends React.Component {
  
  constructor(props) {
    super(props);    
    this.state = {
        followees: []
    }
    
  }


  
  render() {
      //console.log(this.props.users);
    var self = this;
    var cards = [];
    self.props.users.forEach(function(user) { //currently displaying all tags regardless of follow or not
        cards.push(
            
          <Row>
            <Col md="3" xs="3">
              <Button className = "btn-round btn-icon" color = "success" size = "sm">
              <i className = "fa fa-check"></i>
              </Button>
           
            </Col>
            <Col md="9" xs="9">
              <a className = "blackHref" href = {"../userline/"+user.pk} > <br /> {user.first_name} {user.last_name}</a>
            </Col>
          </Row>
          
            
        );
    });
    
    return (
      cards
      );
  }
}

export default ProfileFollowerRoster;
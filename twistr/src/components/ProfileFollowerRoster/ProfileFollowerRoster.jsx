import React from "react";

import {
    Row,
    Col,
    Button
} from "reactstrap";

class ProfileFollowerRoster extends React.Component {
  
  constructor(props) {
    super(props);    
    this.state = {
        followees: []
    }
    
  }


  
  render() {
    var self = this;
    var cards = [];
    self.props.users.forEach(function(user) {
        cards.push(
            
          <Row>
            <Col md="3" xs="3">
              <Button Follow className = "btn-round btn-icon" color = "success" size = "sm">
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
import React from "react";
import UserService from "../components/UserService/UserService.jsx";
import ProfileEditCard from "../components/ProfileEditCard/ProfileEditCard.jsx";
import ProfileFollowerCard from "../components/ProfileFollowerCard/ProfileFollowerCard.jsx";
import ThemeCard from "../components/ThemeCard/ThemeCard.jsx";

import {
  Row,
  Col
} from "reactstrap";
import { Redirect } from 'react-router-dom';
const userService = new UserService();

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
      users: [],
      currentUser: [],
      redirect_text: [],
    };
  }

  componentDidMount() {
    this.check_auth()
    //console.log(localStorage.getItem('pk'));
    var self = this;
    userService.getUser(localStorage.getItem('pk')).then(function (result) {
        self.setState({currentUser: result});
    })
  }

  check_auth() {
    var that = this;
    if (localStorage.getItem('auth_token') === null) {
      that.setState({redirect_text: <Redirect to="/admin/welcome"/>})
    }
    else {
      userService.check_auth()
      .catch(function (error) {
        //if the token has expired then clear local storage and return to login page
        localStorage.clear();
        that.setState({redirect_text: <Redirect to="/admin/welcome"/>})
        window.location.reload();
      })
    }
  }
  
  render() {
    return (
      <>
      <div className="content">
        
        {this.state.redirect_text}
        <Row>
          <Col lg="4" md="4" sm="4">
            <ProfileFollowerCard currentUser = {this.state.currentUser}/>
          </Col>
          <Col lg="8" md="8" sm="8">
            <ProfileEditCard currentUser = {this.state.currentUser} />
            <ThemeCard currentUser = {this.state.currentUser} />
          </Col>
        </Row>
      </div>
      </>
    );
  }
}

export default Profile;

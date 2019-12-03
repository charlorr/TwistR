import  React, { Component } from  'react';
import  UserService  from  'components/UserService/UserService.jsx';

import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    Row,
  } from "reactstrap";

const  userService  =  new  UserService();
let themeChoice;
let root = document.documentElement;
  
class  ThemeCard  extends  Component {
  
  constructor(props) {
    super(props);
    this.state  = {
      users: [],
      currentUser: [],
      themeChoice: this.props.currentUser.theme,
    };
  }

  themeDefault() {
    themeChoice = "default";
    this.updateProfile(this.props.currentUser.pk);
  }

  themeDark() {
    themeChoice = "dark";
    this.updateProfile(this.props.currentUser.pk);
  }

  themeLight() {
    themeChoice = "light";
    this.updateProfile(this.props.currentUser.pk);
  }
  
  updateProfile(pk) {
    var username = this.props.currentUser.username;
    var first_name = this.props.currentUser.first_name;
    var last_name = this.props.currentUser.last_name;
    var email = this.props.currentUser.email;
    var phone_number = this.props.currentUser.phone_number;
    var bio = this.props.currentUser.bio;
    var theme = themeChoice;
    
    userService.updateUser({
      "pk": pk,
      "username": username,
      "first_name": first_name,
      "last_name": last_name,
      "email": email,
      "phone_number": phone_number,
      "bio": bio,
      "theme": theme,
    });

    this.chooseTheme();
    //console.log(this.props.currentUser);
  }

  chooseTheme() {
    if (themeChoice === "default") {
      this.setThemeDefault();
    } else if (themeChoice === "dark") {
      this.setThemeDark();
    } else if (themeChoice === "light") {
      this.setThemeLight();
    } else {
      this.themeDefault();
    }
  }

  setThemeDefault() {
    root.style.setProperty('--background-color', '#add6f9');
    root.style.setProperty('--color', 'black');
    root.style.setProperty('--label-color', '#9A9A9A');
    root.style.setProperty('--follow-color', '#40806A');
    root.style.setProperty('--button-color', '#66615B');
  }

  setThemeDark() {
    root.style.setProperty('--background-color', 'gray');
    root.style.setProperty('--color', '#FFFFFF');
    root.style.setProperty('--label-color', 'white');
    root.style.setProperty('--follow-color', 'white');
    root.style.setProperty('--button-color', 'black');
  }

  setThemeLight() {
    root.style.setProperty('--background-color', 'white');
    root.style.setProperty('--color', 'black');
    root.style.setProperty('--label-color', 'black');
    root.style.setProperty('--follow-color', 'black');
    root.style.setProperty('--button-color', '#add6f9');
  }

  componentWillMount() {
    this.chooseTheme();
  }

  render() { 
    return (
      <div>
        <Card className="card-user theme-card-bg">
          <CardHeader>
            <CardTitle tag="h5">Change Your Theme</CardTitle>
          </CardHeader>
          <Row>
            <div className="update ml-auto mr-auto">
              <Button 
                className="btn-round clicks" 
                size="md" 
                color="secondary"
                onClick={() => this.themeDefault()}>
                Default Mode
              </Button>
            </div>
            <div className="update ml-auto mr-auto">
              <Button 
                className="btn-round clicks" 
                size="md" 
                color="secondary"
                onClick={() => this.themeDark()}>
                Dark Mode
              </Button>
            </div>
            <div className="update ml-auto mr-auto">
              <Button 
                className="btn-round clicks" 
                size="md" 
                color="secondary"
                onClick={() => this.themeLight()}>
                Light Mode
              </Button>
            </div>
          </Row>
        </Card>
      </div>
    );
  }
} 
      
export  default  ThemeCard;

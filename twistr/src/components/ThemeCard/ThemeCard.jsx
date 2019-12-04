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
let root = document.documentElement;
  
class  ThemeCard  extends  Component {
  
  constructor(props) {
    super(props);
    this.state  = {
      users: [],
      currentUser: [],
    };
  }

  themeDefault() {
    this.updateProfile(this.props.currentUser.pk, "default");
  }

  themeDark() {
    this.updateProfile(this.props.currentUser.pk, "dark");
  }

  themeLight() {
    this.updateProfile(this.props.currentUser.pk, "light");
  }
  
  updateProfile(pk,themeChoice) {
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
    }).then(function (result){
    });

    this.chooseTheme(theme);
  }

  chooseTheme(themeChoice) {
    if (themeChoice === "default") {
      this.setThemeDefault();
    } else if (themeChoice === "dark") {
      this.setThemeDark();
    } else if (themeChoice === "light") {
      this.setThemeLight();
    } else {
      this.setThemeDefault();
    }
  }

  setThemeDefault() {
    root.style.setProperty('--background-color', '#add6f9');
    root.style.setProperty('--color', 'black');
    root.style.setProperty('--label-color', '#9A9A9A');
    root.style.setProperty('--follow-color', 'black');
    root.style.setProperty('--button-color', '#66615B');
    root.style.setProperty('--react-color', 'white');
  }

  setThemeDark() {
    root.style.setProperty('--background-color', 'gray');
    root.style.setProperty('--color', '#FFFFFF');
    root.style.setProperty('--label-color', 'white');
    root.style.setProperty('--follow-color', 'white');
    root.style.setProperty('--button-color', 'black');
    root.style.setProperty('--react-color', 'white');
  }

  setThemeLight() {
    root.style.setProperty('--background-color', 'white');
    root.style.setProperty('--color', 'black');
    root.style.setProperty('--label-color', 'black');
    root.style.setProperty('--follow-color', 'black');
    root.style.setProperty('--button-color', '#add6f9');
    root.style.setProperty('--react-color', 'black');
  }

  componentDidMount() {
    var self = this;
    userService.getUser(localStorage.getItem("pk")).then(function (result){
      self.chooseTheme(result.theme);
    })
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
              <Button Default
                className="btn-round clicks" 
                size="md" 
                color="secondary"
                onClick={() => this.themeDefault()}>
                Default Mode
              </Button>
            </div>
            <div className="update ml-auto mr-auto">
              <Button Dark
                className="btn-round clicks" 
                size="md" 
                color="secondary"
                onClick={() => this.themeDark()}>
                Dark Mode
              </Button>
            </div>
            <div className="update ml-auto mr-auto">
              <Button Light
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

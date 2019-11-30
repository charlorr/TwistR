import  React, { Component } from  'react';

//import  UserService  from  'components/UserService/UserService.jsx';

import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    Row,
  } from "reactstrap";
  //const  userService  =  new  UserService();
let root = document.documentElement;
  
class  ThemeCard  extends  Component {
  
  constructor(props) {
    super(props);
    this.state  = {
      users: [],
      currentUser: [],
      themeDefault: true,
      themeDark: false,
      themeLight: false,
    };
  }

  themeDefault() {
    this.setState({
      themeDefault: true,
      themeDark: false,
      themeLight: false,
    });
    root.addEventListener("click", e => {
      root.style.setProperty('--background-color', '#add6f9');
      root.style.setProperty('--color', '#40806A');
      root.style.setProperty('--label-color', '#9A9A9A');
      root.style.setProperty('--follow-color', '#40806A');
      root.style.setProperty('--button-color', '#66615B');
    });
  }

  themeDark() {
    this.setState({
      themeDefault: false,
      themeDark: true,
      themeLight: false,
    });
    root.addEventListener("click", e => {
      root.style.setProperty('--background-color', 'gray');
      root.style.setProperty('--color', '#FFFFFF');
      root.style.setProperty('--label-color', 'white');
      root.style.setProperty('--follow-color', 'white');
      root.style.setProperty('--button-color', 'black');
    });
  }

  themeLight() {
    this.setState({
      themeDefault: false,
      themeDark: false,
      themeLight: true,
    });
    root.addEventListener("click", e => {
      root.style.setProperty('--background-color', 'white');
      root.style.setProperty('--color', 'black');
      root.style.setProperty('--label-color', 'black');
      root.style.setProperty('--follow-color', 'black');
      root.style.setProperty('--button-color', '#add6f9');
    });
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
                type="submit"
                onClick={() => this.themeDefault()}>
                Default Mode
              </Button>
            </div>
            <div className="update ml-auto mr-auto">
              <Button 
                className="btn-round clicks" 
                size="md" 
                color="secondary"
                type="submit"
                onClick={() => this.themeDark()}>
                Dark Mode
              </Button>
            </div>
            <div className="update ml-auto mr-auto">
              <Button 
                className="btn-round clicks" 
                size="md" 
                color="secondary"
                type="submit"
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

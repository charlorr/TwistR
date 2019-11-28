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
    })
  }

  themeDark() {
    this.setState({
      themeDefault: false,
      themeDark: true,
      themeLight: false,     
    })
  }

  themeLight() {
    this.setState({
      themeDefault: false,
      themeDark: false,
      themeLight: true,      
    })
  }

  render() { 
    return (
      <div >
        <Card className="card-user theme-card-bg">
          <CardHeader>
            <CardTitle tag="h5">Change Your Theme</CardTitle>
          </CardHeader>
          <Row>
            <div className="update ml-auto mr-auto">
              <Button 
                className="btn-round" 
                size="md" 
                color="secondary"
                type="submit"
                onClick={() => this.themeDefault()}>
                Default Mode
              </Button>
            </div>
            <div className="update ml-auto mr-auto">
              <Button 
                className="btn-round" 
                size="md" 
                color="secondary"
                type="submit"
                onClick={() => this.themeDark()}>
                Dark Mode
              </Button>
            </div>
            <div className="update ml-auto mr-auto">
              <Button 
                className="btn-round" 
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

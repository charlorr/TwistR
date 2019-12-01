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
      isDefault: true,
      isDark: false,
      isLight: false,
    };
  }

  themeDefault() {
    this.setState({
      isDefault: true,
      isDark: false,
      isLight: false,
    });
    root.style.setProperty('--background-color', '#add6f9');
    root.style.setProperty('--color', 'black');
    root.style.setProperty('--label-color', '#9A9A9A');
    root.style.setProperty('--follow-color', '#40806A');
    root.style.setProperty('--button-color', '#66615B');
  }

  themeDark() {
    this.setState({
      isDefault: false,
      isDark: true,
      isLight: false,
    });
    root.style.setProperty('--background-color', 'gray');
    root.style.setProperty('--color', '#FFFFFF');
    root.style.setProperty('--label-color', 'white');
    root.style.setProperty('--follow-color', 'white');
    root.style.setProperty('--button-color', 'black');
  }

  themeLight() {
    this.setState({
      isDefault: false,
      isthemeDark: false,
      isLight: true,
    });
    root.style.setProperty('--background-color', 'white');
    root.style.setProperty('--color', 'black');
    root.style.setProperty('--label-color', 'black');
    root.style.setProperty('--follow-color', 'black');
    root.style.setProperty('--button-color', '#add6f9');
  }

  /*componentWillMount() {
    if (this.state.isDefault) {
      this.themeDefault();
    } else if (this.state.isDark) {
      this.themeDark();
    } else if (this.state.isLight) {
      this.themeLight();
    }
  }*/

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

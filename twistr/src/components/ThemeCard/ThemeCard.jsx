import  React, { Component } from  'react';
import  UserService  from  'components/UserService/UserService.jsx';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col
  } from "reactstrap";
  const  userService  =  new  UserService();
  
class  ThemeCard  extends  Component {
  
  constructor(props) {
    super(props);
    this.state  = {
      users: [],
      currentUser: [],
    };
  }

  themeDark() {
    this.setState({
      
    })
  }

  render() { 
    return (
      <div >
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Change Your Theme</CardTitle>
          </CardHeader>
          <Row>
            <div className="update ml-auto mr-auto">
              <Button 
                className="btn-round" 
                size="lg" 
                color="secondary"
                type="submit"
                onClick={() => this.themeDefault()}>
                Default
              </Button>
            </div>
            <div className="update ml-auto mr-auto">
              <Button 
                className="btn-round" 
                size="lg" 
                color="secondary"
                type="submit"
                onClick={() => this.themeDark()}>
                Dark Mode
              </Button>
            </div>
            <div className="update ml-auto mr-auto">
              <Button 
                className="btn-round" 
                size="lg" 
                color="secondary"
                type="submit"
                onClick={() => this.themeInverted()}>
                Inverted
              </Button>
            </div>
          </Row>
        </Card>
      </div>
    );
  }
} 
      
export  default  ThemeCard;

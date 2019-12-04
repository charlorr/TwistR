import React , { Component }from "react";
import TwistService  from  'components/TwistService/TwistService.jsx';
import ProfileFollowerRoster from 'components/ProfileFollowerRoster/ProfileFollowerRoster.jsx';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,

} from "reactstrap";
import UserService from "components/UserService/UserService";

const twistService = new TwistService();
const userService = new UserService();
class  ProfileFollowerCard  extends  Component {
    
  constructor(props) {
    super(props);
    this.state  = {
      users_all: []
      };
    this.getTwists.bind(this);
    this.getUsers.bind(this);
    }

  componentDidMount(){
    this.getTwists();
  }

  getTwists(){
    var self = this;
    var followeePKs = [];
    twistService.getTwistbyUser(localStorage.getItem('pk'))
    .then(function(response) {
      response.data.forEach(function (twist){
        if(followeePKs.findIndex(f1 => f1 === twist.author) <0 && twist.followed){
            followeePKs.push(twist.author);
        }
      });
      self.getUsers(followeePKs);

    })
    .catch(function(error) {
      console.log(error);
    });
  }

  
  getUsers(followeePKs){
    var self = this;
    var users = [];

      followeePKs.forEach(function(userPK){
        userService.getUser(userPK).then(function(response) {
            users.push(response);
            
            self.setState({users_all: users});
          })
          .catch(function(error) {
            console.log(error);
          });
      })
  }

  render() {

        return (
          <Card className="theme-card-bg">
            <CardHeader>
              <CardTitle tag="h4">Who You Follow</CardTitle>
            </CardHeader>
            <CardBody>
                <ProfileFollowerRoster followeePKs = {this.state.followeePKs_all } users = {this.state.users_all}/>
            </CardBody>
          </Card> 
        );
    }
}
        
      
export  default  ProfileFollowerCard;

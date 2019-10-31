import React , { Component }from "react";

// reactstrap components

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import FollowUserService from "components/FollowUserService/FollowUserService";

const followUserService = new FollowUserService();
class  UserlineFollowCard  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
          users: [],
          currentUserline: [],
          currentUser: [],
          followed:false
        };
        this.followUser  =  this.followUser.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
        }

      followUser(){
        followUserService.createFollowUser({
            "user": this.props.currentUser.pk,
            "author":this.props.currentUserline.pk
        }).then((result)=>{
            if(result.data.user==="something went wrong"){
                alert("there was an error")
            }
            else{
                alert("User Followed!")
            }
            }).catch(()=>{
                alert('There was an error here!');

            });
        }

      unfollowUser(){
        followUserService.deleteFollowUser(this.props.currentUser.pk, this.props.currentUserline.pk).then((result)=>{
            if(result.data.user==="something went wrong"){
                alert("there was an error")
            }
            else{
                alert("User unfollowed!")
            }
            }).catch(()=>{
                alert('There was an error here!');

            });

      }


    render() {
        return(
            <Card>
                <Button 
                className="btn-round"
                color="primary"
                onClick={this.followUser}>
                Follow User </Button>

                <Button 
                className="btn-round"
                color="primary"
                onClick={this.unfollowUser}>
                Unfollow User </Button>
                </Card>
            
            )
            };
}

       
      
export  default  UserlineFollowCard;

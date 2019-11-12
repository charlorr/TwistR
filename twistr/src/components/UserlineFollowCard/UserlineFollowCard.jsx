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

        // test(){
        //     console.log("current User:" + this.props.currentUser.pk +"current userline:" + this.props.currentUserline.pk)
        //     followUserService.getFollowUsers(this.props.currentUser.pk, this.props.currentUserline.pk).then((result)=>{
        //         console.log("this is did mount: "+result.data);
        //         console.log("length: "+ Object.keys(result.data).length);
        //     })
        //     this.setState({followed: true})
        // }
        
        
        followUser(){
        followUserService.createFollowUser({
            "user": this.props.currentUser.pk,
            "author":this.props.currentUserline.pk,
            "tag":37 //TODO: not hard code
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
            window.location.reload();
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
            window.location.reload();

      }
    render() {
        let but; //determines whether button is follow or unfollow

        if(this.props.followExists){
            but=  <Button 
            className="btn-round"
            color="primary"
            onClick={this.unfollowUser}>
            Unfollow User </Button>
            
        }
        else{but = <Button 
            className="btn-round"
            color="primary"
            onClick={this.followUser}>
            Follow User </Button>
        }
        
        return(
            <Card>
                {but}
            </Card>
            )
            };
}

       
      
export  default  UserlineFollowCard;

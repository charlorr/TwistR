import React , { Component }from "react";

// reactstrap components

import {
  Button,
  Card,
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
        
        followUser(){ //this doesn't work anymore because twists have been redefined in the database
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

      unfollowUser(){ //this doesn't work right now because twists have redefined in the database
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

        if(this.props.followExists) { but = 
            <Button 
            className="btn-round"
            color="primary"
            onClick={this.unfollowUser}>
            Unfollow User 
            </Button>
        }
        else { but = 
            <Button 
            className="btn-round"
            color="primary"
            onClick={this.followUser}>
            Follow User 
            </Button>
        }
        return (
          <>
          <Col lg="12" md="6" sm="6">
            <Card className="card-stats">
              <div className="ml-auto mr-auto">
                <Col lg="12" md="12" sm="12">
                  {but}
                </Col>
              </div>
            </Card>
          </Col>
          </>
        );
    }
}      
      
export  default  UserlineFollowCard;

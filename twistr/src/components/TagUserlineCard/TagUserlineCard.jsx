import React from 'react';
//import TagService  from  'components/TagService/TagService.jsx';
import TwistService  from  'components/TwistService/TwistService.jsx';
import UserlineTagRoster from "components/UserlineTagRoster/UserlineTagRoster.jsx";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Button
} from "reactstrap";
const twistService = new TwistService();
class TagUserlineCard extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
      users: [],
      currentUserPk: null,
      currentUser: [],
      followed_tags_all: [],
      tags_all: [], //all the tags for the user who's userline it is
      unfollowed_tags_all :[]
    };
    //this.getTags.bind(this);
    //this.getFollowedTags.bind(this);
    //this.getUnfollowedTags.bind(this);
    this.handleFollowAllTags = this.handleFollowAllTags.bind(this);
    this.handleUnfollowAllTags = this.handleUnfollowAllTags.bind(this);
  }

  componentDidMount(){
    //this.getTags();
    //this.getFollowedTags();
    this.getUnfollowedTags();
  }

  // getTags(){
  //   var self = this;
  //   twistService.getTagByAuthor(this.props.currentUserline.pk)
  //   .then(function(response) {
  //     console.log("these are all of the tags of the userline's user");
  //     console.log(response.data);
  //     self.setState({tags_all : response.data});
  //     self.getFollowedTags();
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
  // }

  // getFollowedTags(){
  //   var self = this;
  //   twistService.getTwistbyUserAuthor(localStorage.getItem('pk'), this.props.currentUserline.pk)
  //   .then(function(response) {
  //     console.log("these are the tags of the userline's user that logged in user follows");
  //     console.log(response.data);
  //     self.setState({followed_tags_all : response.data});
  //     self.getUnfollowedTags();
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });

  // }

  //doesn't work yet, needs backend fixes to work
  getUnfollowedTags(){
    var self =this;
    var unfollowed_tags_all = [];
    var test_tags_all = [
      {
        "pk":1,
        "name": "test1",
        "post": "post1"
      },
      {
        "pk":2,
      "name": "test2",
      "post": "post1"
      },
      {
        "pk":3,
        "name": "test3",
        "post": "post2"
      },
      {
        "pk":4,
      "name": "test4",
      "post": "post3"
      }
    ]

    var test_followed_tags_all = [
      {
        "pk":10,
        "user": 1,
        "author": 3,
        "tag" : "test3"
      },
      {
        "pk":12,
        "user": 1,
        "author": 3,
        "tag" : "test2"
      }
      ,
      {"pk":14,
        "user": 1,
        "author":3,
        "tag": "test5"
      }
    ]
    // self.state.tags_all.forEach(function(tag){
    //   console.log(tag);
    //   unfollowed_tags_all = self.state.tags_all.filter(ftag => tag.pk !== ftag.pk) 
    // });
    // self.setState({unfollowed_tags_all: unfollowed_tags_all});
    // console.log(self.state.unfollowed_tags_all);
    self.setState({tags_all: test_tags_all});
    self.setState({followed_tags_all: test_followed_tags_all});
    // console.log(test_followed_tags_all);
    // console.log(self.state.followed_tags_all);
  
    // test_followed_tags_all.forEach(function(ftag){
    //   test_tags_all.forEach(function(tag){
    //     console.log("this is the ftag: " + ftag.tag);
    //     console.log("this is the tag: " + tag.name);
        
    //     if(ftag.tag !== tag.name){
    //       console.log(unfollowed_tags_all.indexOf(tag));
    //       if(unfollowed_tags_all.indexOf(tag) <0){
    //         unfollowed_tags_all.push(tag);
    //         console.log(unfollowed_tags_all.indexOf(tag));
    //         //console.log(unfollowed_tags_all);
    //       }
    //     }
    //     else{
    //       console.log(tag);
    //       console.log(unfollowed_tags_all.indexOf(tag));
    //       if(unfollowed_tags_all.indexOf(tag)>=0){
            
    //         console.log("got it here");
    //         unfollowed_tags_all.splice(unfollowed_tags_all.indexOf(tag),1);
    //       }
    //     }
    //   }); //end of first forEach function
        
    //     //unfollowed_tags_all.push(test_tags_all.filter(ftag => ftag.name !== tag.tag))
    //     //consider appending instead of overwriting each time!!
    //   });

    test_tags_all.forEach(function (tag){
      if(test_followed_tags_all.findIndex(ftag => ftag.tag === tag.name)<0){
          unfollowed_tags_all.push(tag);
      }
    });
      self.setState({unfollowed_tags_all: unfollowed_tags_all});

  }

  handleFollowAllTags(){
    this.state.tags_all.forEach(function(tag) {
      twistService.createTwist(
        {
          "user": localStorage.getItem('pk'),
          "author": this.props.currentUserline.pk,
          "tag": tag.name
        }
      )
    });

   // window.location.reload();
  }

  handleUnfollowAllTags(){
    this.state.followed_tags_all.forEach(function(twist){
      twistService.deleteTwist(twist)
    });

  }

  render() {
    return (
      <>
      <Col lg="9" md="6" sm="6">
        <Card className="card-stats">
          <CardHeader>
            <CardTitle tag="h5">{this.props.currentUserline.first_name}'s Tags</CardTitle>
            
             <hr/>
          </CardHeader>
            <CardBody>
            
              <Button className="btn-round"
                      color = "primary"
                      onClick = {this.handleFollowAllTags}> Follow All Tags </Button>
              <Button color = "secondary"
                      className="btn-round"
                      onClick = {this.handleUnfollowAllTags}> Unfollow All Tags</Button>

            {/* <UserlineTagRoster tags_all = {this.state.tags_all} followed_tags_all = {this.state.followed_tags_all} unfollowed_tags_all = {this.state.unfollowed_tags_all}/>  */}
            <UserlineTagRoster tags_all = {this.state.tags_all} followed_tags_all = {this.state.followed_tags_all} unfollowed_tags_all = {this.state.unfollowed_tags_all}/>
            </CardBody>
        
        </Card>
      </Col>
      </>
    );
  }
}

export default TagUserlineCard;

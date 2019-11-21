import React from "react";
import  UserService  from  'components/UserService/UserService.jsx';
import FollowUserService from "../components/FollowUserService/FollowUserService.jsx";
import PostService from "components/PostService/PostService.jsx";
import UserlineFollowCard from "../components/UserlineFollowCard/UserlineFollowCard.jsx";
import UserlineViewTagsCard from "../components/UserlineViewTagsCard/UserlineViewTagsCard.jsx";
import BioCard from "components/BioCard/BioCard.jsx";
import PostRoster from "components/PostRoster/PostRoster.jsx";
//import {SortableTagTable} from "components/NewTagRoster/NewTagRoster.jsx";
import { Redirect } from 'react-router-dom';
import TagUserlineCard from "components/TagUserlineCard/TagUserlineCard.jsx";
import {
  Row,
  Col
} from "reactstrap";

const userService = new UserService();
const followUserService = new FollowUserService();
const postService = new PostService();

class Userline extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
      users: [],
      currentUserline: [],
      currentUser: [],
      followExists: false,
      posts_all: [],
    };

    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    var self = this;
    const { match: { params } } =  this.props;
    if (params && params.pk) {
      
      userService.getUser(params.pk).then(function(result) {
        self.setState({currentUserline: result});
        self.getPosts();
      })

      //gets the twists to determine if user already follows the userline they are viewing
      followUserService.getFollowUsers(localStorage.getItem('pk'),params.pk).then((result)=>{
        if(Object.keys(result.data).length === 0)
        self.setState({followExists: false})
        else{
          self.setState({followExists: true})
        }
    })
    }
   
    userService.getUser(localStorage.getItem('pk')).then(function (result) {
        self.setState({currentUser: result});
    })

  }
  getPosts(){
    var self = this;
    //postService.getPostByAuthor(this.state.currentUserline)
    postService.getPostByAuthor(this.state.currentUserline.pk)
    .then(function(response) {
      //console.log(response);
      postService.addPostTags(response.data).then(function (result){
        self.setState({posts_all : result})
        self.setState({flag: true})
      })
      
    })
    .catch(function(error) {
      console.log(error);
    });
  }


  redirect() {
    if (localStorage.getItem('pk') === null) {
      return <Redirect to="/admin/welcome"/>;
    }
  }
  render() {
    if (this.state.posts_all.length === 0) {
   //   console.log("no post data")
      return (
        <>
        <div className="content">
        {this.redirect()}
          <Row>
            <Col lg="12" md="11" sm="10">
              <Row>
              <BioCard currentUserline = {this.state.currentUserline} />
              <Col lg="3" md="3" sm="3">
                <UserlineFollowCard followExists = {this.state.followExists} currentUser= {this.state.currentUser} currentUserline = {this.state.currentUserline}/>
                <UserlineViewTagsCard />
              </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </>
      );
    }else{
   //   console.log("yes post data")
   //   console.log(this.state.posts_all)
        console.log(this.state.currentUserline)
    return (
      <>
      <div className="content">
      {this.redirect()}
        <Row>
          <Col lg="12" md="11" sm="10">
            <Row>
              <BioCard currentUserline = {this.state.currentUserline} />
              <Col lg="3" md="3" sm="3">
                <UserlineFollowCard followExists = {this.state.followExists} currentUser= {this.state.currentUser} currentUserline = {this.state.currentUserline}/>
                <UserlineViewTagsCard />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <TagUserlineCard currentUserline = {this.state.currentUserline}/>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12">
            {/* <SortableTagTable tags_all = {TAGS_ALL}/> */}
          </Col>
        </Row>
        <Row>
          <PostRoster posts_all={this.state.posts_all} />
        </Row>
      </div>
      </>
    );
  }
}
}
export default Userline;

import React from "react";
import  UserService  from  'components/UserService/UserService.jsx';
//import FollowUserService from "../components/FollowUserService/FollowUserService.jsx";
import PostService from "components/PostService/PostService.jsx";
//import UserlineFollowCard from "../components/UserlineFollowCard/UserlineFollowCard.jsx";
import BioCard from "components/BioCard/BioCard.jsx";
import PostRoster from "components/PostRoster/PostRoster.jsx";
//import {SortableTagTable} from "components/NewTagRoster/NewTagRoster.jsx";
import { Redirect } from 'react-router-dom';
import TagUserlineCard from "components/TagUserlineCard/TagUserlineCard.jsx";
import {
  Row,
  Col,
  Card,
  Button
} from "reactstrap";

const userService = new UserService();
const postService = new PostService();

class Userline extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
      users: [],
      currentUserline: [],
      currentUser: [],
      posts_all: [],
      showTags: false,
      viewTag: "View Tags",
      closeTag: "Hide Tags",
      redirect_text: [],
    };

    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.check_auth();
    var self = this;
    const { match: { params } } =  this.props;
    if (params && params.pk) {
      
      userService.getUser(params.pk).then(function(result) {
        self.setState({currentUserline: result});
        self.getPosts();
      })

    }
   
    userService.getUser(localStorage.getItem('pk')).then(function (result) {
        self.setState({currentUser: result});
    })

  }

  getPosts(){
    var self = this;
  
    postService.getPostByAuthor(this.state.currentUserline.pk)
    .then(function(response) {
    
      postService.addPostTags(response.data).then(function (result){
        self.setState({posts_all : result})
        self.setState({flag: true})
      })
      
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  showTags(){
    var self = this;
    self.setState({showTags: !this.state.showTags})
  }

  check_auth() {
    var that = this;
    if (localStorage.getItem('auth_token') === null) {
      that.setState({redirect_text: <Redirect to="/admin/welcome"/>})
    }
    else {
      userService.check_auth()
      .catch(function (error) {
        //if the token has expired then clear local storage and return to login page
        localStorage.clear();
        that.setState({redirect_text: <Redirect to="/admin/welcome"/>})
        window.location.reload();
      })
    }
  }

  render() {
    if (this.state.posts_all.length === 0) {

      return (
        <>
        <div className="content">
        {this.state.redirect_text}
          <Row>
            <Col lg="12" md="11" sm="10">
              <Row>
              <BioCard currentUserline = {this.state.currentUserline} />
              <Col lg="3" md="3" sm="3">
                 <Col lg="12" md="6" sm="6">
                  <Card className="theme-card-bg">
                    <div className="ml-auto mr-auto">
                      <Col lg="12" md="12" sm="12">
                        <Button 
                          className="btn-round"
                          color="secondary"
                          onClick={() => this.showTags()}
                          >
                          { this.state.showTags ? this.state.closeTag : this.state.viewTag}
                        </Button>
                      </Col>
                    </div>
                  </Card>
                </Col>
              </Col>
              { this.state.showTags ? <TagUserlineCard currentUserline = {this.state.currentUserline}/> : null}
              </Row>
            </Col>
          </Row>
        </div>
      </>
      );
    }else{
    return (
      <>
      <div className="content">
      {this.state.redirect_text}
        <Row>
          <Col lg="12" md="11" sm="10">
            <Row>
              <BioCard currentUserline = {this.state.currentUserline} />
              <Col lg="3" md="3" sm="3">
                
                <Col lg="12" md="6" sm="6">
                  <Card className="theme-card-bg">
                    <div className="ml-auto mr-auto">
                      <Col lg="12" md="12" sm="12">
                        <Button 
                          className="btn-round"
                          color="secondary"
                          onClick={() =>this.showTags()}
                          >
                           { this.state.showTags ? this.state.closeTag : this.state.viewTag}
                        </Button>
                      </Col>
                    </div>
                  </Card>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
        { this.state.showTags ? <TagUserlineCard currentUserline = {this.state.currentUserline}/> : null}
         
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

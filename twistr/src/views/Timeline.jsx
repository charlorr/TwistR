import React from "react";
import CreatePost from "components/CreatePost/CreatePost.jsx";
import PostRoster from "components/PostRoster/PostRoster.jsx";
import PostService from "components/PostService/PostService.jsx";
import  UserService  from  'components/UserService/UserService.jsx';
import {Redirect} from 'react-router-dom';

// reactstrap components
import {
  Row,
} from "reactstrap";

const postService = new PostService();
const userService = new UserService();

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      posts: [],
      redirect_text: [],
    };
    this.getTimelinePosts = this.getTimelinePosts.bind(this);
  }

  componentDidMount(){
    this.getTimelinePosts();
  }

  getTimelinePosts() {
    this.check_auth();
    var self = this;
    postService.getTimelinePosts().then(function (result){
      postService.addPostTags(result.data).then(function (result){
        self.setState({posts: result});
      })
    });
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
    return (
      <>
      <div className="content">
      {this.state.redirect_text}
        <Row>
          <CreatePost />
        </Row>
        <Row>
          {/* <Col lg="12" md="12" sm="12">
            <SortableTagTable tags_all = {TAGS_ALL}/>
          </Col> */}
        </Row>
        <Row>
          <PostRoster parent = "timeline" posts_all={this.state.posts} />
        </Row>
      </div>
      </>
    );
  }
}

export default Timeline;

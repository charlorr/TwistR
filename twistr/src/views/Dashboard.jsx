import React from "react";
import CreatePost from "components/CreatePost/CreatePost.jsx";
import PostRoster from "components/PostRoster/PostRoster.jsx";
import PostService from "components/PostService/PostService.jsx"
import UserService from "components/UserService/UserService.jsx"
import {Redirect} from 'react-router-dom';

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

const postService = new PostService();
const userService = new UserService();
let root = document.documentElement;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts_all: [],
      flag: false,
      post_length: 0,
      redirect_text: [],
    };
    this.getPosts.bind(this);
  }

componentDidMount() {
  this.check_auth();
  this.getPosts();

  // This is for themes
  var self = this;
  userService.getUser(localStorage.getItem("pk")).then(function (result){
    self.chooseTheme(result.theme);
  })
}

getPosts(){
  var self = this;
  postService.getPostByAuthor(localStorage.getItem('pk'))
  .then(function(response) {
    
    postService.addPostTags(response.data).then(function (response){
      self.setState({posts_all : response})
      self.setState({post_length : response.length});
      self.setState({flag: true})
    })
    
  })
  .catch(function(error) {
    console.log(error);
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

chooseTheme(themeChoice) {
  if (themeChoice === "default") {
    this.setThemeDefault();
  } else if (themeChoice === "dark") {
    this.setThemeDark();
  } else if (themeChoice === "light") {
    this.setThemeLight();
  } else {
    this.setThemeDefault();
  }
}

setThemeDefault() {
  root.style.setProperty('--background-color', '#add6f9');
  root.style.setProperty('--color', 'black');
  root.style.setProperty('--label-color', '#9A9A9A');
  root.style.setProperty('--follow-color', '#40806A');
  root.style.setProperty('--button-color', '#66615B');
  root.style.setProperty('--react-color', 'white');
}

setThemeDark() {
  root.style.setProperty('--background-color', 'gray');
  root.style.setProperty('--color', '#FFFFFF');
  root.style.setProperty('--label-color', 'white');
  root.style.setProperty('--follow-color', 'white');
  root.style.setProperty('--button-color', 'black');
  root.style.setProperty('--react-color', 'white');
}

setThemeLight() {
  root.style.setProperty('--background-color', 'white');
  root.style.setProperty('--color', 'black');
  root.style.setProperty('--label-color', 'black');
  root.style.setProperty('--follow-color', 'black');
  root.style.setProperty('--button-color', '#add6f9');
  root.style.setProperty('--react-color', 'black');
}

  render() {
    var dashboard = true;
    if (this.state.posts_all.length === 0) {
     return (
      <>
      <div className="content">
      {this.state.redirect_text}
        <Row>
          <CreatePost/>
        </Row>
      </div>
      </>
    );
    }
    else{
      return (
        <>
        <div className="content">
        {this.state.redirect_text}
          <Row>
            <CreatePost/>
          </Row>
          <Row>
            <Col lg="12" md="12" sm="12">
            </Col>
          </Row>
          <Row>
              <PostRoster posts_all = {this.state.posts_all} dashboard={dashboard}/>
          </Row>
        </div>
        </>
      );
    }
    }
    
}

export default Dashboard;

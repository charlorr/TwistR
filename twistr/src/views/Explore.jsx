import React from "react";
import  UserService  from  'components/UserService/UserService.jsx';

// reactstrap components
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import PostService from "components/PostService/PostService";
import PostRoster from "components/PostRoster/PostRoster";
import LegendCard from 'components/LegendCard/LegendCard';

const postService = new PostService();
const  userService  =  new  UserService();
let root = document.documentElement;

class Tables extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
      posts: [],
    };

    this.getAllPosts = this.getAllPosts.bind(this);
  }

  componentDidMount() {
    this.getAllPosts();

    // This is for themes
    var self = this;
    userService.getUser(localStorage.getItem("pk")).then(function (result){
      self.chooseTheme(result.theme);
    })
  }

  getAllPosts() {
    var self = this;
    postService.getPosts().then(function (result){
      postService.addPostTags(result.data).then(function (result){
        self.setState({posts: result})
      })
    })
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
    var explore = true;
    return (
      <>
      <div className="content">
        <Row>
          <Col lg="8" md="8" sm="8">
            <Card align="center" className="theme-card-bg">
              <CardHeader>
                <CardTitle tag="h2">
                  <h2>
                    <b><font color="#000000">EXPLO</font>
                    <font color="#FF0005">Я</font>
                    <font color="#000000">E</font></b>
                  </h2>
                </CardTitle>
                <h4><i>See posts from all over the world!</i></h4>
              </CardHeader>
            </Card>
          </Col>
          <Col lg="4" md="4" sm="4">
            <LegendCard />
          </Col>
        </Row>
        <Row>
          <PostRoster parent="explore" posts_all={this.state.posts} explore={explore} />
        </Row>
      </div>
      </>
    );
  }
}

export default Tables;

import React from "react";
import CreatePost from "components/CreatePost/CreatePost.jsx";
import PostRoster from "components/PostRoster/PostRoster.jsx";
import {SortableTagTable} from "components/NewTagRoster/NewTagRoster.jsx";
import PostService from "components/PostService/PostService.jsx"
import {Redirect} from 'react-router-dom';
// reactstrap components
import {
  Row,
  Col, 
  CardBody
} from "reactstrap";
import { SortablePostTable } from "components/PostRoster/PostRoster";

const postService = new PostService();

//hardcoded posts for now, until we have connection to database
var POSTS_ALL=[{
  author: "Purdue Pete",
  tags: ["boiler ", "maker ", ""],
  content: "I love TwistR",
  timestamp: 8,
  picture: require("assets/img/PurduePete.jpg"),
}, {
  author: "Purdue Pete",
  tags: ["choo ", "choochoo "],
  content: "Update: I have a stomach ache.",
  timestamp: 15,
  picture: require("assets/img/PurduePete.jpg"),
}, {
  author: "Purdue Pete",
  tags: ["black ", "gold ", "cs307 "],
  content: "First Post! Woooo!",
  timestamp: 400,
  picture: require("assets/img/PurduePete.jpg"),
}]


var TAGS_ALL=[{
  author: "Cookie Monster",
  content: "ouch",
  timestamp: 15
}, {
  author: "Cookie Monster",
  content: "regrets",
  timestamp: 15
}, {
  author: "Elmo",
  content: "tickle me",
  timestamp: 40
}]

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts_all: []
    };
    this.getPosts.bind(this);
  }

/*componentDidMount() {
  postService.getPostByAuthor(localStorage.getItem('pk'))
  .then((response) => {
    return response.json();
  })
  .then(data => {
    this.setState({
      posts_all : data.results.map(({text_body}) => text_body)
    })
});
}*/

getPosts(){
  var self = this;
  postService.getPostByAuthor(localStorage.getItem('pk'))
  .then(function(response) {
    console.log(response);
    self.setState({posts_all : response.data})
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
    this.getPosts();
    console.log(this.state.posts_all)
    return (
      <>
      <div className="content">
        {this.redirect()}
        <Row>
          <CreatePost/>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12">
            <SortableTagTable tags_all = {TAGS_ALL}/>
          </Col>
        </Row>
        <Row>
          {/*<PostRoster post_all = {this.posts_all}/>*/}
          <SortablePostTable posts_all={POSTS_ALL} />
        </Row>
      </div>
      </>
    );
  }
}

export default Dashboard;

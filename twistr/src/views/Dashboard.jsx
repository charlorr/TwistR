import React from "react";
import CreatePost from "components/CreatePost/CreatePost.jsx";
import PostRoster from "components/PostRoster/PostRoster.jsx";
import {SortableTagTable} from "components/NewTagRoster/NewTagRoster.jsx";
import { SortablePostTable } from "components/PostRoster/PostRoster";
import PostService from "components/PostService/PostService.jsx"
import {Redirect} from 'react-router-dom';

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

const postService = new PostService();

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts_all: [],
      flag: false
    };
    this.getPosts.bind(this);
  }

componentDidMount() {
  this.getPosts();
}

getPosts(){
  var self = this;
  postService.getPostByAuthor(localStorage.getItem('pk'))
  .then(function(response) {
    console.log(response);
    self.setState({posts_all : response.data})
    self.setState({flag: true})
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
     return (
      <>
      <div className="content">
        {this.redirect()}
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
          {this.redirect()}
          <Row>
            <CreatePost/>
          </Row>
          <Row>
            <Col lg="12" md="12" sm="12">
              {/*<SortableTagTable tags_all = {TAGS_ALL}/>*/}
            </Col>
          </Row>
          <Row>
              <PostRoster posts_all = {this.state.posts_all}/>
          </Row>
        </div>
        </>
      );
    }
    }
    
}

export default Dashboard;

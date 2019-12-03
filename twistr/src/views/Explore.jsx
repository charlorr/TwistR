import React from "react";

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

const postService = new PostService();

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
  }

  getAllPosts() {
    var self = this;
    postService.getPosts().then(function (result){
      postService.addPostTags(result.data).then(function (result){
        self.setState({posts: result})
      })
    })
  }

  render() {
    var explore = true;
    return (
      <>
      <div className="content">
        <Row>
          <Col lg="12" md="12" sm="12">
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

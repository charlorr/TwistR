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
    return (
      <>
      <div className="content">
        <Row>
          <Col lg="12" md="12" sm="12">
            <Card align="center">
              <CardHeader>
                <CardTitle tag="h5">
                  <h1>
                    <b><font color="#54BFEC">Explo</font>
                    <font color="#FF0005">Я</font>
                    <font color="#54BFEC">e</font></b>
                  </h1>
                  <p><i>See posts from users all over the world!</i></p>
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>
        </Row>
        <Row>
          <PostRoster parent = "explore" posts_all={this.state.posts} />
        </Row>
      </div>
      </>
    );
  }
}

export default Tables;

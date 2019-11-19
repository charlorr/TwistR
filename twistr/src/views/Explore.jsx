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
    this.addTestTags = this.addTestTags.bind(this);
    this.addTags = this.addTags.bind(this);
  }

  componentDidMount() {
    this.getAllPosts();
  }

  getAllPosts() {
    var self = this;
    postService.getPosts().then(function (result){
      //console.log(result.data);
      self.addTestTags(result.data);
    })
  }

  addTestTags(posts) {
    var promises = [];
    for (var i = 0; i < posts.length; i++) {
      promises.push(this.addTags(posts[i]));
    }
    return Promise.all(promises).then(() => {
      //console.log(posts);
      this.setState({posts: posts});
    })
  }

  addTags(post) {
    return this.getTags(post.pk).then(function (tags) {
      post.tag1=tags[0];
      post.tag2=tags[1];
      post.tag3=tags[2];
      return post;
    }).catch(function (error) {
      console.log(error);
      return error;
    });
  }

  getTags(pk) {
    return postService.getPostTags(pk).then(function (result){
      var tags = [];
      for(var i = 0; i < result.data.length; i++) {
        tags.push(result.data[i].name.toString());
      }
      return tags;
    }).catch(function (error) {
      console.log(error);
      return error;
    });
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

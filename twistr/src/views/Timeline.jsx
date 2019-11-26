import React from "react";
import CreatePost from "components/CreatePost/CreatePost.jsx";
import PostRoster from "components/PostRoster/PostRoster.jsx";
import PostService from "components/PostService/PostService.jsx";
// reactstrap components
import {
  Row,
} from "reactstrap";

const postService = new PostService();
class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      posts: []
    };
    this.getTimelinePosts = this.getTimelinePosts.bind(this);
  }

  componentDidMount(){
    this.getTimelinePosts();
  }

  getTimelinePosts() {
    var self = this;
    postService.getTimelinePosts().then(function (result){
      console.log(result);
      postService.addPostTags(result.data).then(function (result){
        
        self.setState({posts: result});
      })
    });
  }

  render() {
    return (
      <>
      <div className="content">
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

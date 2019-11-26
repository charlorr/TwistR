import React from "react";
import CreatePost from "components/CreatePost/CreatePost.jsx";
import PostRoster from "components/PostRoster/PostRoster.jsx";
import PostService from "components/PostService/PostService.jsx";
import TwistService from "components/TwistService/TwistService.jsx";
// reactstrap components
import {
  Row,
} from "reactstrap";

const postService = new PostService();
const twistService = new TwistService();
class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      posts: []
    };
    this.getTimelinePosts = this.getTimelinePosts.bind(this);
    this.filterSeen = this.filterSeen.bind(this);
  }

  componentDidMount(){
    this.getTimelinePosts();
  }

  getTimelinePosts() {
    var self = this;
    postService.getTimelinePosts().then(function (result){
      console.log(result);
      postService.addPostTags(result.data).then(function (result){
        self.filterSeen(result);
      })
    });
  }

  filterSeen(posts) {
    console.log(posts);
    var self = this;
    var promises = [];
    for (var i = 0; i < posts.length; i++) {
      promises.push(self.nullifyUnfollowed(posts[i]));
    }
    console.log(promises);
    return Promise.all(promises).then(function (values){
      console.log(values);
      self.setState({posts: values});
    })
  }

  nullifyUnfollowed(post){
    return twistService.getTwistExists(localStorage.getItem('pk'),post.author, post.tag1)
    .then(function (result){
      console.log(result);
      if (result.data.length === 0){ //unseen
        return post;
      }
      else if (result.data[0].followed === true){ //seen and followed
        return post;
      }
      else if (post.tag2 === null || post.tag2 === undefined){
        post = null;
        return post;
      }
      else {
        return twistService.getTwistExists(localStorage.getItem('pk'),post.author, post.tag2)
        .then(function (result){
          if (result.data.length === 0){
            return post;
          }
          else if (result.data[0].followed === true){ 
            return post;
          }
          else if (post.tag3 === null || post.tag3 === undefined){
            post = null;
            return post;
          }
          else {
            return twistService.getTwistExists(localStorage.getItem('pk'),post.author, post.tag3)
            .then(function (result){
              if (result.data.length === 0){
                return post;
              }
              else if (result.data[0].followed === true){ 
                return post;
              }
              else {
                post = null;
                return post;
              }
            })
          }
        })
      }
    }).catch(function (error){
      console.log(error);
    })
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

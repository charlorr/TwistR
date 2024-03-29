import React from "react";
import UserCard from "components/UserCard/UserCard.jsx";
import PostService from "components/PostService/PostService.jsx";
import RetwistService from "components/RetwistService/RetwistService.jsx";
import TagService from "components/TagService/TagService.jsx";
import NotificationAlert from "react-notification-alert";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Col,
  Input,
  FormGroup,
  Row
} from "reactstrap";
import { Redirect } from "react-router-dom";

const postService = new PostService();
const retwistService = new RetwistService();
const tagService = new TagService();

class CreateRetwist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPostPk: null,
      currentPost: [],
      currentUser: [],
      chars_left: 280,
      max_chars: 280,
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  redirect() {
    if (localStorage.getItem("pk") === null) {
      return <Redirect to="/admin/welcome" />;
    }
  }
  handleCreate(){
    if(this.state.text){
      postService.createPost(
        {
          "text_body": this.state.text,
          "author": localStorage.getItem('pk')
        }
      ).then((result) =>{
        this.setState({currentPostPk : result.data.pk});
        this.handleRetwistCreate(result.data.pk);
      }).catch(()=>{
        alert("There was an error! Please re-check your post.")
      });
    }
    else{
      postService.createPost(
        {
          "text_body": "I retwisted a post!",
          "author": localStorage.getItem('pk')
        }
      ).then((result) =>{
        this.setState({currentPostPk : result.data.pk});
        this.handleRetwistCreate(result.data.pk);
      }).catch(()=>{
        alert("There was an error! Please re-check your post.")
      });
    }
  }

  handleTagCreate(pk){
    var self = this;
    tagService.getTagsByPost(pk).then(function(response){
      var promises = [];
      for(var i=0; i <response.data.length; i++){
        promises.push(  tagService.createTag(
          {
            "post": self.state.currentPostPk,
            "name": response.data[i].name.toUpperCase()
          }
        ))
    }
    Promise.all(promises).then(() =>{
      window.location.reload();
    })
  })
}

  handleRetwistCreate(newPostPk) {
    retwistService
      .createRetwist({
        original_post: this.props.post.pk,
        post: newPostPk
      })
      .then(result => {
        this.handleTagCreate(this.props.post.pk);
      })
      .catch(() => {
        var options = {};
        options = {
          place: "tr",
          message: (
            <div>
              <div>
                Error creating retwist!
              </div>
            </div>
          ),
          type: "warning",
          icon: "nc-icon nc-bell-55",
          autoDismiss: 7
        };
        this.notificationAlert.current.notificationAlert(options);
      });
  }

  handleSubmit = async function(event) {
    event.preventDefault();
    this.handleCreate();
    event.preventDefault();
  };

  notificationAlert = React.createRef();

  handleWordCount = event => {
    const charCount = event.target.value.length;
    const maxChar = this.state.max_chars;
    const charLength = maxChar - charCount;
    this.setState({ chars_left: charLength });
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <>
        {this.redirect()}
        <Col lg="12" md="12" sm="12">
          <Row>
              <Card className="theme-card-bg">
                <NotificationAlert ref={this.notificationAlert} />
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                      <Col lg="12" md="12" sm="12">
                        <CardTitle tag="p">Write retwist here.</CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12" md="12" sm="12">
                        <FormGroup>
                          <Input
                            name="text_body"
                            id="text_body"
                            placeholder="Write here!"
                            type="text"
                            maxLength="280"
                            onChange={this.handleWordCount}
                            author={this.state.currentUser}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          aria-label="Create Retwist"
                          className="btn-round clicks"
                          color="primary"
                          type="submit"
                        >
                          Create Retwist
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> {this.state.chars_left}
                    /280
                  </div>
                </CardFooter>
              </Card>
          </Row>
        </Col>
      </>
    );
  }
}

export default CreateRetwist;

import React from 'react';
import UserCard from "components/UserCard/UserCard.jsx";
import NameCard from "components/NameCard/NameCard.jsx";
import PostService from "components/PostService/PostService.jsx";
import NotificationAlert from "react-notification-alert";
import InputTag from "components/InputTag/InputTag.jsx";

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

const postService = new PostService();

class CreatePost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPostPk: null,
      currentPost: [],
      chars_left: 280, max_chars: 280,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var self = this;
    postService.getPosts().then(function (result) {
      console.log(result);
      self.setState({ posts: result.data, nextPageURL: result.nextLink})
    });
  }

  handleCreate(){
    postService.createPost(
      {
        "text_body": document.getElementById("text_body").value,
        "author": 1
      }
    ).then((result) =>{
      alert("Customer created!");
    }).catch(()=>{
      alert("There was an error! Please re-check your form.")
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleCreate();
    event.preventDefault();
  }

  notificationAlert = React.createRef();

  handleWordCount = event => {
    const charCount = event.target.value.length;
    const maxChar = this.state.max_chars;
    const charLength = maxChar - charCount;
    this.setState({chars_left: charLength});
  }

  render() {
    return (
      <>
      <div className="content" >
      <Col lg="12" md="12" sm="12">
        <Row>
          <Col lg="9" md="6" sm="6">
            <Card className="card-stats">
              <NotificationAlert ref ={this.notificationAlert} />
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                  <Col lg="12" md="12" sm="12">
                    <CardTitle tag="h5">Write a new post here.</CardTitle>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <label>Be creative! Remember to use at least one tag.</label>
                      <Input
                          name="text_body"
                          id="text_body"
                          placeholder="Write your post here!"
                          type="text"
                          maxLength="280"
                          required
                          onChange={this.handleWordCount}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <InputTag />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button
                    className="btn-round"
                    color="primary"
                    type="submit"
                    >
                      Create Post
                    </Button>
                  </div>
                </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> {this.state.chars_left} / 280 characters left
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="2" md="2" sm="1">
            <UserCard picture={require("assets/img/PurduePete.jpg")} />
            <NameCard />
          </Col>
        </Row>
        </Col>
      </div>
      </>
    );
  }
}

export default CreatePost;

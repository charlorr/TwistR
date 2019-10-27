import React from 'react';
import UserCard from "components/UserCard/UserCard.jsx";
import NameCard from "components/NameCard/NameCard.jsx";
import PostService from "components/PostService/PostService.jsx";
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
    const current = postService.getPost(this.props.currentPost);
    console.log(current);
  }

  notificationAlert = React.createRef();
  handleSubmit(event) {
    this.updatePost(this.props.currentPost.pk)
    event.preventDefault();
  }

  updatePost(pk) {
    var author = document.getElementById("author").value;
    var text = document.getElementById("text").value;

    postService.updatePost({
      "pk": pk,
      "author": author,
      "text": text
    })
    .then((result) => {
      console.log(result);
      var options = {};
      options = {
        place: "tr",
        message: (
          <div>
            <div>
              Post successfully updated!
            </div>
          </div>
        ),
        type: "warning",
        icon: "nc-icon nc-bell-55",
        autoDismiss: 7
      };
      this.notificationAlert.current.notificationAlert(options);
    })
    .catch(()=>{
      alert('There was an error! Please re-check your form.');
    });
  }

  handleWordCount = event => {
    const charCount = event.target.value.length;
    const maxChar = this.state.max_chars;
    const charLength = maxChar - charCount;
    this.setState({chars_left: charLength});
  }

  render() {
    return (
      <>
      <Col lg="9" md="6" sm="6">
        <Card className="card-stats">
          <NotificationAlert ref ={this.notificationAlert} />
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              {
            }<div>
            <Row>
              <Col lg="8" md="8">
                <CardTitle tag="h5">Write a new post here.</CardTitle>
                <FormGroup>
                    <label>Be creative! Remember to use at least one tag.</label>
                    <Input
                        id="text"
                        placeholder="Write your post here!"
                        type="textarea"
                        maxLength="280"
                        required
                        onChange={this.handleWordCount}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        placeholder="Add tags (separated by commas)" 
                        type="textarea"
                    />
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
                  Update Post
                </Button>
              </div>
            </Row>
            </div>
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
      </>
    );
  }
}

export default CreatePost;

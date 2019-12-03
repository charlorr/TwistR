import React from 'react';
import UserCard from "components/UserCard/UserCard.jsx";
import PostService from "components/PostService/PostService.jsx";
import RetwistService from "components/RetwistService/RetwistService.jsx";
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
import { Redirect } from 'react-router-dom';

const postService = new PostService();
const retwistService = new RetwistService();

class CreateRetwist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPostPk: null,
      currentPost: [],
      currentUser: [],
      chars_left: 280, max_chars: 280,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  redirect() {
    if (localStorage.getItem('pk') === null) {
      return <Redirect to="/admin/welcome"/>;
    }
  }
  handleCreate(){
    if(document.getElementById("text_body").value){
      postService.createPost(
        {
          "text_body": document.getElementById("text_body").value,
          "author": localStorage.getItem('pk')
        }
      ).then((result) =>{
        alert("Post created!");
        //console.log(result.data.pk);
        this.setState({currentPostPk : result.data.pk});
        //console.log(this.state.currentPostPk);
        this.handleRetwistCreate(result.data.pk);
      }).catch(()=>{
        alert("There was an error! Please re-check your form.")
      });
    }
    else{
      postService.createPost(
        {
          "text_body": "I retwisted a post!",
          "author": localStorage.getItem('pk')
        }
      ).then((result) =>{
        alert("Post created!");
        this.setState({currentPostPk : result.data.pk});
        this.handleRetwistCreate(result.data.pk);
      }).catch(()=>{
        alert("There was an error! Please re-check your form.")
      });
    }
    
  }
  

  handleRetwistCreate(newPostPk){
      //console.log(this.props.post.pk);
      //console.log(newPostPk);
      retwistService.createRetwist(
          {
              "original_post": this.props.post.pk,
              "post": newPostPk
          }
      ).then((result) =>{
          alert("retwist created!");
      }).catch(()=>{
          alert("error submitting retwist")
      });
  }

  handleSubmit = async function (event){
    console.log(this.props.post.text_body);
    console.log(document.getElementById("text_body").value);
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
        {this.redirect()}
      <Col lg="12" md="12" sm="12">
        <Row>
          <Col lg="9" md="6" sm="6">
            <Card className="card-stats">
              <NotificationAlert ref ={this.notificationAlert} />
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                  <Col lg="12" md="12" sm="12">
                    <CardTitle tag="h5">Write the retwist here.</CardTitle>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <label>Be creative!</label>
                      <Input
                          name="text_body"
                          id="text_body"
                          placeholder="Write your retwist here!"
                          type="text"
                          maxLength="280"
                          //required
                          onChange={this.handleWordCount}
                          author={this.state.currentUser}
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
                      Create Retwist
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
        </Row>
      </Col>
      </div>
      </>
    );
  }
}

export default CreateRetwist;

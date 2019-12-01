import React from 'react';
import UserCard from "components/UserCard/UserCard.jsx";
import PostService from "components/PostService/PostService.jsx";
import NotificationAlert from "react-notification-alert";
import TagService from "components/TagService/TagService.jsx";

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
const tagService = new TagService();

class CreatePost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPostPk: null,
      currentPost: [],
      currentUser: [],
      tags: [],
      tagsInputValue:'',
      tags_correct:true,
      chars_left: 280, max_chars: 280,
      tag_chars_left:20, max_tag_chars: 20,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  redirect() {
    if (localStorage.getItem('pk') === null) {
      return <Redirect to="/admin/welcome"/>;
    }
  }

  callBack = (tags) => {
    this.setState({tags : tags})
  }

  handleCreate(){
    postService.createPost(
      {
        "text_body": document.getElementById("text_body").value,
        "author": localStorage.getItem('pk')
      }
    ).then((result) =>{
      alert("Post created!");
      console.log(result.data.pk);
      this.setState({currentPostPk : result.data.pk});
      console.log(this.state.currentPostPk);
      this.handleTagCreate();
    }).catch(()=>{
 // alert("There was an error! Please re-check your form.")
    });
  }

  handleTagCreate(){
      for(var i=0; i <this.state.tags.length; i++){
          tagService.createTag(
            {
              "post": this.state.currentPostPk,
              "name": this.state.tags[i]
            }
          ).then((result) =>{
            //alert("Tag created!");
          }).catch(()=>{
            //alert("There was an error! Please re-check your tags.")
          });
      } 
  }

  addTag = (tag) => {
    tag = tag.trim();
    if(!(this.state.tags.indexOf(tag) >-1)) {
      let tags = this.state.tags.concat([tag]);
      this.updateTags(tags);
    }
    this.updateTagValue('');
  }

  updateTagValue = (value) => {
    if(value === ','){
      return;
    }
    this.setState({
      tagsInputValue: value
    })
  }

  removeTag = (removeTag) => {
    let tags = this.state.tags.filter((tag) => tag !== removeTag);
    this.updateTags(tags);
  }

  updateTags = (tags) => {
    this.setState({
      tags
    })
  }

  setFalse(){
    if(this.state.tags_correct === true){
      this.setState(prevState => ({
        tags_correct: !prevState.tags_correct
      }));
    }
  }

  setTrue(){
    if(this.state.tags_correct === false){
      this.setState(prevState => ({
        tags_correct: !prevState.tags_correct
      }));
    }
  }

  checkTagValidity(){
    if(this.state.tags.length > 3){
      this.setFalse();
      alert("too many tags!");
    }
    else if(this.state.tags.length < 1){
      this.setFalse();
      alert("too few tags!");
    }
    else{
      console.log(this.state.tags_correct);
      for(var i=0; i <this.state.tags.length; i++){
        if(this.state.tags[i].length > 20){
          alert("too many characters in a tag!");
          this.setFalse();
        }
      }
    }  
  }

  handleSubmit = async function (event){
    event.preventDefault();
    await this.checkTagValidity();
    console.log(this.state.tags_correct);
    if(this.state.tags_correct === true){
      this.handleCreate();
    }else {
      this.setTrue();
      alert("Please fix your tags and then resubmit!");
    }
    event.preventDefault();
  }

  notificationAlert = React.createRef();

  handleWordCount = event => {
    const charCount = event.target.value.length;
    const maxChar = this.state.max_chars;
    const charLength = maxChar - charCount;
    this.setState({chars_left: charLength});
  }

  handleTagChange = async function(event) {
    await this.updateTagValue(event.target.value);
    await this.setState({tags : this.state.tagsInputValue.split(",")});
    console.log(this.state.tags);
  }
 
  render() {
    const {tagsInputValue} = this.state;
    console.log(this.state.tagsInputValue)
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
                          author={this.state.currentUser}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                    <div className="input-tag">
                        <Input value={tagsInputValue} onChange={(e) => {this.handleTagChange(e)}}
                          type="text" 
                          placeholder="Up to three tags seperated by commas" />
                   </div>   
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
            {/*<NameCard />*/}
          </Col>
        </Row>
      </Col>
      </div>
      </>
    );
  }
}

export default CreatePost;

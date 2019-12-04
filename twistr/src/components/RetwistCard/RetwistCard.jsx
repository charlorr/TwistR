import React from 'react';
import TwistService from "components/TwistService/TwistService.jsx";
import PostService from 'components/PostService/PostService';
import UserService from 'components/UserService/UserService.jsx';
import TagButton from "components/TagButton/TagButton.jsx";


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

const userService = new UserService();
const twistService = new TwistService();
const postService = new PostService();


class RetwistCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentPost: [],
      flag:false,
      username: null,
    };
  }

  componentDidMount(){
    this.getAuthorUsername(this.props.post.author);
  }

  getAuthorUsername(pk){
    var self = this;
    userService.getUser(pk).then(function (result){
      self.setState({username: result.username});
    }).catch(function (error){
      console.log(error);
    })
  }
 
  render() {

    return (
    <>
    <Card className= "theme-card-bg">
      <CardTitle tag="h5" > </CardTitle>
      <CardBody>
        <h3>{this.props.post.text_body}</h3>
      </CardBody>
      <CardFooter>
        <hr />
        <Row>
          <Col lg="8" md="8">
          <div className="stats">
              <i className="fa fa-history"/> 
              <a href = {"../admin/userline/"+this.props.post.author} >
                <font color="#000000"><b>{this.state.username}</b></font>
              </a>
          </div>
          </Col>
        </Row>
      </CardFooter>
    </Card>
    </>
    );
    }
  }

export default RetwistCard;

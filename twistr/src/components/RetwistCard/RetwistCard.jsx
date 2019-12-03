import React from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap";


class RetwistCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentPost: [],
      delete_author:false,
      flag:false
    };
    this.deletePost = this.deletePost.bind(this);
  }

 
  render() {
    console.log("parent");
    console.log(this.props.parent);

    return (
    <>
    <Card>
      <CardBody>
        <h1>{this.props.post.text_body}</h1>
      </CardBody>
    </Card>
    </>
    );
  }
}

export default RetwistCard;

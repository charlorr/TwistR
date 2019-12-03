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
      flag:false
    };
  }

 
  render() {
    //console.log(this.props.post);

    return (
    <>
    <Card className= "theme-card-bg">
      <CardTitle tag="h5" > </CardTitle>
      <CardBody>
        <h3>{this.props.post.text_body}</h3>
      </CardBody>
    </Card>
    </>
    );
  }
}

export default RetwistCard;

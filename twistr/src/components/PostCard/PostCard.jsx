import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap";

class PostCard extends React.Component {
//figure out who the parent is so that href of name can be properly assigned

  render() {
    const parent = this.props.parent;
    let redirectA;
    if(parent === "dashboard"){
      redirectA = <a className = "blackHref" href = "../admin/dashboard"> {this.props.post.author} </a>
    }
    if(parent === "userline"){
      redirectA = <a className = "blackHref" href = "../userline/1"> {this.props.post.author} </a>
    }
    if (parent === "timeline"|| parent === "explore"){
      redirectA = <a className ="blackHref" href = "userline/2"> {this.props.post.author} </a>
    }
    return (
    <>
    <Card>
      <CardHeader>
        
        <CardTitle tag="h5">   {redirectA} </CardTitle>
        
        <p className="card-category">{this.props.post.tags}</p>
      </CardHeader>
      <CardBody>
        <h1>{this.props.post.content}</h1>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
            <i className="fa fa-history" /> Updated {this.props.post.timestamp} minutes ago
        </div>
      </CardFooter>
    </Card>
    </>
    );
  }
}

export default PostCard;

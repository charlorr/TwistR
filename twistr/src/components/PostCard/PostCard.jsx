import React from 'react';
import TagButton from "components/TagButton/TagButton.jsx";


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap";

class PostCard extends React.Component {
//figure out who the parent is so that href of name can be properly assigned


  componentDidMount(){
  }


  displayButton(tag){
    if (tag !== undefined) {
      return(
        <Button
          className="btn-round"
          color="danger"
          >
          {tag}
        </Button>
      )
    }
  }

  getTimeFormat(posted_date){
    var str = posted_date.toString().substring(0,16);
    str = str.substring(11,16) + " on " + str.substring(0,10);
    return str;
  }

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
        <TagButton user = {localStorage.getItem('pk')} author = {this.props.post.author} tag = {this.props.post.tag1}/>
        <TagButton user = {localStorage.getItem('pk')} author = {this.props.post.author} tag = {this.props.post.tag2}/>
        <TagButton user = {localStorage.getItem('pk')} author = {this.props.post.author} tag = {this.props.post.tag3}/>
        {/*<p className="card-category">{this.props.post.tags}</p>*/}
      </CardHeader>
      <CardBody>
        <h1>{this.props.post.text_body}</h1>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
            <i className="fa fa-history" /> User {this.props.post.author} Posted at {this.getTimeFormat(this.props.post.posted_date)}
        </div>
      </CardFooter>
    </Card>
    </>
    );
  }
}

export default PostCard;

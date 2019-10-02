import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col
} from "reactstrap";

/*var POSTS_ALL=[{
  author: "Ania",
  tags: ["A", "B", "C"],
  content: "hi",
  timestamp: 10,
}, {
  author: "Colin",
  tags: ["A2", "B2", "C2"],
  content: "hihi",
  timestamp: 15,
}]*/
class Post extends React.Component {
  render() {
    return (
      <>
      <Col md="9">
        <Card>
          <CardHeader>
            <CardTitle tag="h5">{this.props.post.author}</CardTitle>
            <p className="card-category">{this.props.post.tags}</p>
          </CardHeader>
          <CardBody>
            <h1>{this.props.content}</h1>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="fa fa-history" /> Updated {this.props.post.timestamp} minutes ago
            </div>
          </CardFooter>
        </Card>
      </Col>
      </>
    );
  }
}

class PostRoster extends React.Component {
  render() {
    // Create posts from sorted, dynamic JSON collection
    var cards = [];
    this.props.posts_all.forEach(function(post) { 
        cards.push(<Post post={post} />); //have to actually define posts within here...?
    });
    
    return (<div>{cards}</div>);
  }
}
        
class Sort extends React.Component {
  sortRoster(field){
    this.props.sortRosterStateBy(field, this.props.posts_all, this.props.direction);
  }
  render() {
    return (
      <div className="sort-section">
        <h1>Sort<br></br>by</h1>
        <div className="pill" onClick={this.sortRoster.bind(this,'timestamp')} >Timestamp</div>
      </div>
    )
  }
}

class SortablePostTable extends React.Component {
  state = {
   'posts_all': this.props.posts_all, // default state
   'direction': -1                               
  };     
  sortRoster(field){
    this.props.sortRosterStateBy(field, this.props.posts_all, this.props.direction);
  }
  sortRosterStateBy = (field, posts_all, direction) => {
    // Sorting ...TODO: needs to be editted
    posts_all.sort( (a, b) => { if (a[field] > b[field]) { return -direction; } if (a[field] < b[field]) { return direction; } return 0; })
    // Change state
    this.setState({'posts_all': posts_all, 'direction': direction});
  };
  render() {
    // Return page with stats data and Roster
    return (
      <div>
        {this.sortRoster.bind(this,'timestamp')}
        {/*this.sortRosterStateBy */}
        {<Sort direction={this.state.direction} posts_all={this.props.posts_all} sortRosterStateBy={this.sortRosterStateBy}/>}
        <PostRoster posts_all={this.state.posts_all}/>
      </div>
    );
  }
}


export default PostRoster;
export {SortablePostTable};
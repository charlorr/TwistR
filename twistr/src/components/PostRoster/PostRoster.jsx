import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col
} from "reactstrap";

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
            <h1>{this.props.post.content}</h1>
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
        cards.push(<Post post={post} />);
    });
    return (cards);
  }
}
        

class SortablePostTable extends React.Component { //called from Dashboard to organize posts chronologically
  state = {
   'posts_all': this.props.posts_all, 
   'direction': -1                               
  };     
  
  sortRosterStateBy = (field, posts_all, direction) => {
    // Sorting ...
    posts_all.sort( (a, b) => { if (a[field] > b[field]) { return -direction; } if (a[field] < b[field]) { return direction; } return 0; })
  };
  render() {
    
    return (
      <div>
        {this.sortRosterStateBy('timestamp',this.props.posts_all, this.state.direction ) //calls its own function to actually sort
        }<PostRoster posts_all={this.state.posts_all //creates roster of all the posts to be displayed
        }/>
      </div>
    );
  }
}

export default PostRoster;
export {SortablePostTable};
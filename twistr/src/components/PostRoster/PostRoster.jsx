import React from "react";
import Post from "components/Post/Post.jsx";

class PostRoster extends React.Component {
  render() {
    // Create posts from sorted, dynamic JSON collection
    var cards = [];
    var parent = this.props.parent;
    this.props.posts_all.forEach(function(post) { 
        cards.push(<Post parent = {parent} post={post} />);
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
        }<PostRoster parent = {this.props.parent} posts_all={this.state.posts_all //creates roster of all the posts to be displayed
        }/>
      </div>
    );
  }
}

export default PostRoster;
export {SortablePostTable};
import React from "react";
import Post from "components/Post/Post.jsx";
import PostRoster from "components/PostRoster/PostRoster.jsx";

class SortablePostTable extends React.Component {
    state = {
     'posts': this.props.posts, // default state
     'direction': 1                               
    };                     
    sortRosterStateBy = (timeStamp, posts, direction) => {
      // Sorting ...
      posts.sort( (a, b) => { if (a[timeStamp] > b[timeStamp]) { return -direction; } if (a[timeStamp] < b[timeStamp]) { return direction; } return 0; })
      // Change state
      this.setState({'posts': posts, 'direction': -direction});
    };
    render() {
      var postsAll = []; //equivalent to basketball var ages12[]
      this.props.posts.forEach(function(post) {
          postsAll.push(post.timeStamp);
        });
    
      // Return page with posts
      return (
        <div>
          <PostRoster posts={this.state.posts} />
        </div>
      );
    }
  }
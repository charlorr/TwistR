import React from "react";
import Post from "components/Post/post.jsx";



class Roster extends React.Component {
    render() {
      // Create roster of all posts from sorted, dynamic JSON collection
      var cards = [];
      this.props.posts.forEach(function(post) {
          cards.push(<Post post={post} />);
      });
      
      return (<div>{cards}</div>);
    }
  }
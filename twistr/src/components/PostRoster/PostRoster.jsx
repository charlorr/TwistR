import React from "react";
import Post from "components/Post/Post.jsx";
import Retwist from "components/Retwist/Retwist.jsx";
import RetwistService from "components/RetwistService/RetwistService.jsx";
import PostService from "components/PostService/PostService.jsx";
import UserService from "../../components/UserService/UserService.jsx";

const retwistService = new RetwistService();
const postService = new PostService();
const userService = new UserService();

class PostRoster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postPk: null,
      retwistPk: null,
      currentPost: [],
      currentRetwist: [],
      show_react_card: false,
      retwistExists: [],
      hasRetwist: false
    };
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }

  componentWillMount() {
    this.check_auth();
  }

  check_auth() {
    var that = this;
    if (localStorage.getItem('auth_token') === null) {
      console.log("No token");
      that.setState({show_react_card: false})
    }
    else {
      userService.check_auth()
      .then(function(response){
        console.log("token");
        that.setState({show_react_card: true});
      })
      .catch(function (error) {
        console.log("BAD token");
        that.setState({show_react_card: false});
      })
    }
  }

  rerenderParentCallback() {
    console.log("Updated?");
    this.forceUpdate();
  }

  

  render() {
    var self = this;
    // Create posts from sorted, dynamic JSON collection
    var cards = [];
    var posts_all = this.props.posts_all;
    var explore = false;
    var dashboard = false;
    var show_react_card = this.state.show_react_card;
    if(this.props.explore){
      explore = true;
    }
    if(this.props.dashboard){
      dashboard = true;
    }
    this.props.posts_all.forEach(function(post) {
        if (post !== undefined && post !== null) { 
          //console.log(post);

          cards.push(<Post parent = {posts_all} post={post} show_react_card={show_react_card} dashboard={dashboard}/>);
        }
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
        {this.sortRosterStateBy('posted_date',this.props.posts_all, this.state.direction ) //calls its own function to actually sort
        }<PostRoster parent = {this.props.parent} posts_all={this.state.posts_all //creates roster of all the posts to be displayed
        }/>
      </div>
    );
  }
}

export default PostRoster;
export {SortablePostTable};
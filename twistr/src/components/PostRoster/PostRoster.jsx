import React from "react";
import Post from "components/Post/Post.jsx";
import Retwist from "components/Retwist/Retwist.jsx";
import RetwistService from "components/RetwistService/RetwistService.jsx";
import PostService from "components/PostService/PostService.jsx";

const retwistService = new RetwistService();
const postService = new PostService();

class PostRoster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postPk: null,
      retwistPk: null,
      currentPost: [],
      currentRetwist: [],
      cards: [],
      hasRetwist: false
    };
    this.getRetwist = this.getRetwist.bind(this);
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }

  rerenderParentCallback() {
    console.log("Updated?");
    this.forceUpdate();
  }

  componentDidMount() {
    this.getAllPosts();
  }

  getRetwist(post){
    var self = this;
   // console.log(post);
    retwistService.getRetwistbyPost(post.pk)
    .then(function(response) {
      //console.log(response);
      //console.log(response.post);
      self.setState({postPk: response.original_post})
      self.setState({retwistPk: response.post})
      self.setState({hasRetwist: true});
    })
    .catch(function(error){
      self.setState({hasRetwist: false});
    })
  }

  getOGPost(){
    var self = this;
    postService.getPost(this.state.postPk)
    .then(function(response) {
      self.setState({currentPost : response})
      self.setState({flag: true})
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getAllPosts(){
    var explore = false;
    var dashboard = false;
    if(this.props.explore){
      explore = true;
    }
    if(this.props.dashboard){
      dashboard = true;
    }

    var self = this;
    var temp_cards = [];
    var posts_all = this.props.posts_all;
    this.props.posts_all.forEach(function(post) {
      if (post !== undefined && post !== null) { 
        //console.log(post);
        self.getRetwist(post);
        if(self.state.hasRetwist === true){
          console.log("please get here");
          temp_cards.push(<Retwist parent = {posts_all} retwist={post} post={self.state.currentPost}/>);
        }
        else {
          temp_cards.push(<Post parent = {posts_all} post={post} explore={explore} dashboard={dashboard}/>);
        }
      }
    });

   this.setState({cards: temp_cards});

  }

  render() {
    // Create posts from sorted, dynamic JSON collection
    console.log(this.state.cards);  
    return (this.state.cards);
  }
}
        

class SortablePostTable extends React.Component { //called from Dashboard to organize posts chronologically
  state = {
   'posts_all': this.props.posts_all, 
   'direction': -1                            
  };     

  sortRosterStateBy = (field, posts_all, direction) => {
    console.log(this.props.posts_all)
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
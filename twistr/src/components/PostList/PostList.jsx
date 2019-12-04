import  React, { Component } from  'react';
import  PostService  from  'components/PostService/PostService.jsx';

const  postService  =  new  PostService();

class  PostList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        posts: [],
        nextPageURL:  ''
    };
    this.nextPage  =  this.nextPage.bind(this);
    this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
    var  self  =  this;
    postService.getPosts().then(function (result) {
        self.setState({ posts:  result.data, nextPageURL:  result.nextlink})
    });
}
handleDelete(e,pk){
    var  self  =  this;
    postService.deletePost({pk :  pk}).then(()=>{
        var  newArr  =  self.state.posts.filter(function(obj) {
            return  obj.pk  !==  pk;
        });

        self.setState({posts:  newArr})
    });
}

nextPage(){
    var  self  =  this;      
    postService.getPostsByURL(this.state.nextPageURL).then((result) => {
        self.setState({ posts:  result.data, nextPageURL:  result.nextlink})
    });
}
render() {

    return (
        <div  className="posts--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Author</th>
                <th>Text</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {this.state.users.map( c  =>
                <tr  key={c.pk}>
                <td>{c.pk}  </td>
                <td>{c.author}</td>
                <td>{c.text}</td>
                
                <td>
                <button  aria-label="Delete" onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
                <a  href={"post/" + c.pk}> Update</a>
                </td>
            </tr>)}
            </tbody>
            </table>
            <button  aria-label="Next" className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
        </div>
        );
  }
}
export  default  PostList;
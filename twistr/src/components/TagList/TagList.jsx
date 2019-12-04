import  React, { Component } from  'react';
import  TagService  from  'components/TagService/TagService.jsx';

const  tagService  =  new  TagService();

class  TagList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        tags: [],
        nextPageURL:  ''
    };
    this.nextPage  =  this.nextPage.bind(this);
    this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
    var  self  =  this;
    tagService.getTags().then(function (result) {
        self.setState({ tags:  result.data, nextPageURL:  result.nextlink})
    });
}
handleDelete(e,pk){
    var  self  =  this;
    tagService.deleteTag({pk :  pk}).then(()=>{
        var  newArr  =  self.state.tags.filter(function(obj) {
            return  obj.pk  !==  pk;
        });

        self.setState({tags:  newArr})
    });
}

nextPage(){
    var  self  =  this;      
    tagService.getTagsByURL(this.state.nextPageURL).then((result) => {
        self.setState({ tags:  result.data, nextPageURL:  result.nextlink})
    });
}
render() {

    return (
        <div  className="tags--list">
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
                <button  onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
                <a  href={"tag/" + c.pk}> Update</a>
                </td>
            </tr>)}
            </tbody>
            </table>
            <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
        </div>
        );
  }
}
export  default  TagList;
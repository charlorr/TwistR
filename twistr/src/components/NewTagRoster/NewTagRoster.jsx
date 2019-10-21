import React from "react";
//import Post from "components/Post/Post.jsx";
import NewTag from "components/NewTag/NewTag.jsx"

class NewTagRoster extends React.Component {
  render() {
    // Create tags
    var cards = [];
    this.props.tags_all.forEach(function(newTag) { 
        cards.push(<NewTag newTag={newTag} />);
    });
    return (cards);
  }
}

class SortableTagTable extends React.Component { //called from Timeline to organize new tags chronologically
  state = {
   'tags_all': this.props.tags_all, 
   'direction': -1                               
  };     
  
  sortRosterStateBy = (field, tags_all, direction) => {
    // Sorting ...
    tags_all.sort( (a, b) => { if (a[field] > b[field]) { return -direction; } if (a[field] < b[field]) { return direction; } return 0; })
  };
  render() {
    
    return (
      <div>
        {this.sortRosterStateBy('timestamp',this.props.tags_all, this.state.direction ) //calls its own function to actually sort
        }<NewTagRoster tags_all={this.state.tags_all //creates roster of all the tags to be displayed
        }/>
      </div>
    );
  }
}

export default NewTagRoster;
export {SortableTagTable};
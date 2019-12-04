import React from "react";
import NewTag from "components/NewTag/NewTag.jsx"

import {
  Row,
  Col
} from "reactstrap";

class NewTagRoster extends React.Component {
  render() {
    // Create tags
    var cards = [];
    this.props.tags_all.forEach(function(newTag) { 
        cards.push(
          <Col lg="3" md="3" sm="3">
            <NewTag newTag={newTag} />
          </Col>
        );
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
        <Row>
          {this.sortRosterStateBy('timestamp',this.props.tags_all, this.state.direction )}
          <NewTagRoster tags_all={this.state.tags_all}/>
        </Row>
      </div>
    );
  }
}

export default NewTagRoster;
export {SortableTagTable};
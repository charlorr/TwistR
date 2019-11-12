import React from "react";
//import Post from "components/Post/Post.jsx";

import {
  Row,
  Col,
  Button
} from "reactstrap";

class UserlineTagRoster extends React.Component {

  //conditionally render whether tag is within list of followed tags. if yes, render button as primary color.
  //else render it as secondary button color
  render() {
    // Create tags

    // let tagButton;
    // if (){
    //   tagButton = <Button className = "btn-round" size="lg" color="primary"/>
    // }
    // else{
    //   tagButton = <Button className ="btn-round" size="lg" color="secondary"/>
    // }
		
    var cards = [];
    this.props.tags_all.forEach(function(tag) { //currently displaying all tags regardless of follow or not
        cards.push(
          <Col lg="3" md="3" sm="3">
            <Button
            className="btn-round" 
            size="lg" 
            color="primary">
                {tag.pk}
            </Button>
          </Col>
        );
    });
    return (cards);
  }
}

export default UserlineTagRoster;
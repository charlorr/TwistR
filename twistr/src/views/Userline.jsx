import React from "react";
import BioCard from "components/BioCard/BioCard.jsx";
import {SortablePostTable} from "components/PostRoster/PostRoster.jsx";
import {SortableTagTable} from "components/NewTagRoster/NewTagRoster.jsx";
// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

//hardcoded posts for now, until we have connection to database
var POSTS_ALL=[{
  author: "Cookie Monster",
  tags: ["cookies ", "trashcan ", ""],
  content: "I just ate 49 cookies. I had some chocolate chip, triple chocolate, and peanut butter",
  timestamp: 30,
  picture: require("assets/img/CookieMonster.jpg"),
}, {
  author: "Cookie Monster",
  tags: ["ouch ", "regrets "],
  content: "Update: I have a stomach ache.",
  timestamp: 15,
  picture: require("assets/img/CookieMonster.jpg"),
}]

var TAGS_ALL=[{
  author: "Cookie Monster",
  content: "ouch",
  timestamp: 15
}, {
  author: "Cookie Monster",
  content: "regrets",
  timestamp: 15
}]

class Userline extends React.Component {
  render() {
    return (
      <>
      <div className="content">
        <Row>
          <BioCard />
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12">
            <SortableTagTable tags_all = {TAGS_ALL}/>
          </Col>
        </Row>
        <Row>
          <SortablePostTable posts_all={POSTS_ALL} />
        </Row>
      </div>
      </>
    );
  }
}

export default Userline;

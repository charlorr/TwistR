import React from "react";
import CreatePost from "components/CreatePost/CreatePost.jsx";
import {SortablePostTable} from "components/PostRoster/PostRoster.jsx";
import {SortableTagTable} from "components/NewTagRoster/NewTagRoster.jsx";
// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

//hardcoded posts for now, until we have connection to database
var POSTS_ALL=[{
  author: "Purdue Pete",
  tags: ["boiler ", "maker ", ""],
  content: "I love TwistR",
  timestamp: 8,
  picture: require("assets/img/PurduePete.jpg"),
}, {
  author: "Purdue Pete",
  tags: ["choo ", "choochoo "],
  content: "Update: I have a stomach ache.",
  timestamp: 15,
  picture: require("assets/img/PurduePete.jpg"),
}, {
  author: "Purdue Pete",
  tags: ["black ", "gold ", "cs307 "],
  content: "First Post! Woooo!",
  timestamp: 400,
  picture: require("assets/img/PurduePete.jpg"),
}]


var TAGS_ALL=[{
  author: "Cookie Monster",
  content: "ouch",
  timestamp: 15
}, {
  author: "Cookie Monster",
  content: "regrets",
  timestamp: 15
}, {
  author: "Elmo",
  content: "tickle me",
  timestamp: 40
}]

class Dashboard extends React.Component {
  render() {
    return (
      <>
      <div className="content">
        <Row>
          <CreatePost/>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12">
            <SortableTagTable tags_all = {TAGS_ALL}/>
          </Col>
        </Row>
        <Row>
          <SortablePostTable parent = "dashboard" posts_all={POSTS_ALL} />
        </Row>
      </div>
      </>
    );
  }
}

export default Dashboard;

import React from "react";
import CreatePost from "components/CreatePost/CreatePost.jsx";
import NewTag from "components/NewTag/NewTag.jsx";
import {SortablePostTable} from "components/PostRoster/PostRoster.jsx";
// reactstrap components
import {
  Row
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

class Dashboard extends React.Component {
  render() {
    return (
      <>
      <div className="content">
        <Row>
          <CreatePost/>
        </Row>
        <Row>
          {/* These NewTag components will be populated in a NewTagRoster component in a later sprint*/}
          <NewTag/>
          <NewTag/>
          <NewTag/>
          <NewTag/>
        </Row>
        <Row>
          <SortablePostTable posts_all={POSTS_ALL} />
        </Row>
      </div>
      </>
    );
  }
}

export default Dashboard;

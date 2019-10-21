import React from "react";
import CreatePost from "components/CreatePost/CreatePost.jsx";
import NewTag from "components/NewTag/NewTag.jsx";
import Post from "components/Post/Post.jsx";
import {SortableTagTable} from "components/NewTagRoster/NewTagRoster.jsx";
import {SortablePostTable} from "components/PostRoster/PostRoster.jsx";
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
}, {
  author: "Elmo",
  tags: ["red ", "tickle me ", "seseame street"],
  content: "First Post! #like4like",
  timestamp: 40,
  picture: require("assets/img/Elmo.jpg"),
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
}, {
  author: "Ania delete this example tag once you see this",
  content: "this is an example of what happens when you make the tag too long, the box is still responsive and contains it, but we need to obviously only allow a certain size input for new tags",
  timestamp: 420
}]

class Timeline extends React.Component {
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
          <SortablePostTable posts_all={POSTS_ALL} />
        </Row>
      </div>
      </>
    );
  }
}

export default Timeline;

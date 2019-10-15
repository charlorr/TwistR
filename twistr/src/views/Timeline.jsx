import React from "react";
import CreatePost from "components/CreatePost/CreatePost.jsx";
import NewTag from "components/NewTag/NewTag.jsx";
import {SortablePostTable} from "components/PostRoster/PostRoster.jsx";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
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
  tags: ["yellow ", "feathers "],
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

class Timeline extends React.Component {
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

export default Timeline;

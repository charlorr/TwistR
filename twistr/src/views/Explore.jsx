import React from "react";
import {SortablePostTable} from "components/PostRoster/PostRoster.jsx";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
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
}, {
  author: "Big Bird",
  tags: ["yellow ", "birds ", "food "],
  content: "I wonder if Cookie Monster will share his cookies with me...",
  timestamp: 16,
  picture: require("assets/img/BigBird.jpg"),
}, {
  author: "Bird",
  tags: ["help ", "elmo ", "friends"],
  content: "I wish Elmo would be friends with me. :(",
  timestamp: 35,
  picture: require("assets/img/BigBird.jpg"),
}]

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="12" md="12" sm="12">
              <Card align="center">
                <CardHeader>
                  <CardTitle tag="h5">
                    <h1>
                      <b><font color="#54BFEC">Explo</font>
                      <font color="#FF0005">Я</font>
                      <font color="#54BFEC">e</font></b>
                    </h1>
                    <p><i>See posts from users all over the world!</i></p>
                  </CardTitle>
                </CardHeader>
              </Card>
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

export default Tables;

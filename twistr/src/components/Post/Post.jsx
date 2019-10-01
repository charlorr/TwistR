import React from 'reaxct';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col
} from "reactstrap";

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      author: "Ania Szesko",
      tags: [
        "IE", "salad", "Purdue"
      ],
      content: "I like salad",
      history: "8",
    };
  }

  render() {
    return (
      <>
      <Col md="9">
        <Card>
          <CardHeader>
            <CardTitle tag="h5">{this.state.author}</CardTitle>
            <p className="card-category">{this.state.tags}</p>
          </CardHeader>
          <CardBody>
            <h1>{this.state.content}</h1>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="fa fa-history" /> Updated {this.state.history} minutes ago
            </div>
          </CardFooter>
        </Card>
      </Col>
      </>
    );
  }
}

export default Post;

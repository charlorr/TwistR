import React from "react";

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

import Post from "components/Post/Post.jsx";

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
            <Post/>
          </Row>
          <Row>
            <Post/>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;

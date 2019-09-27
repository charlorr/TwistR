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

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
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
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Random user here</CardTitle>
                  <p className="card-category">Tag1 | Tag2 | Tag3</p>
                </CardHeader>
                <CardBody>
                  <h1>Recent Post here</h1>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Posted 4 seconds ago
                  </div>
                </CardFooter>
              </Card> 
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Another random user here</CardTitle>
                  <p className="card-category">Tag1 | Tag2 | Tag3</p>
                </CardHeader>
                <CardBody>
                  <h1>Recent Post here</h1>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Posted 45 seconds ago
                  </div>
                </CardFooter>
              </Card> 
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Anea Shuckzo</CardTitle>
                  <p className="card-category">Tag1 | Tag2 | Tag3</p>
                </CardHeader>
                <CardBody>
                  <h1>Recent Post here</h1>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Posted 1 minute ago
                  </div>
                </CardFooter>
              </Card> 
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;

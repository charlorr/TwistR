import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class NewTagCard extends React.Component {

  render() {
    return (
    <>
    <Card>
      <CardBody>
        <Row>
          <Col lg="12" md="12" sm="12">
            <CardTitle tag="h5" className="card-category">
              {this.props.newTag.author}
            </CardTitle>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="numbers text-center">
              <p>#{this.props.newTag.content}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12">
          <div className="icon-big text-center icon-warning">
            Follow this Twist? <i class="fas fa-plus" />
          </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
    </>
    );
  }
}

export default NewTagCard;


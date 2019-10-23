import React from 'react';

import {
  Card,
  CardBody,
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
            <div className="numbers">
              <p>#{this.props.newTag.content}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12">
            
          <div className="icon-big icon-warning heartedTag">
          Follow this Twist? <i className="fas fa-heart text-primary filled-heart" />
            <i className = "far fa-heart text-primary outline-heart"/>
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


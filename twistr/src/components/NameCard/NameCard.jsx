import React from 'react';

import {
  Card,
  CardBody,
  Col,
  Row
} from "reactstrap";

class NameCard extends React.Component {

  render() {
    return (
      <>
      <Card>
        <CardBody>
          <Row>
            <Col lg="12" md="12" sm="12">
              <div className="text-center">
                Hello, <b>Purdue Pete</b>.
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
      </>
    );
  }
}

export default NameCard;

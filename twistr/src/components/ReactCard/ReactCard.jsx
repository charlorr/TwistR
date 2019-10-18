import React from 'react';

import {
  Card,
  CardBody,
  Col,
  Row
} from "reactstrap";

class ReactCard extends React.Component {

  render() {
    return (
      <>
      <Card>
        <CardBody>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="icon-big text-center icon-warning">
                <i class="far fa-heart"  />
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="icon-big text-center icon-warning">
                <i class="fas fa-share"  />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
      </>
    );
  }
}

export default ReactCard;

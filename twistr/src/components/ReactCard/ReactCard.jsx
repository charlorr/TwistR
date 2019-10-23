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
              <div className="icon-big text-center reactedHeart icon-warning">
                <i className="far fa-heart outline-heart"  />
                <i className = "fas fa-heart text-primary filled-heart"/>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="icon-big text-center reactedShare icon-warning">
                <i className="fas fa-share colored-share"  />
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

import React from 'react';

import {
  Button,
  Card,
  CardBody,
  Col,
} from "reactstrap";

class LegendCard extends React.Component {

  render() {
    return (
      <>
      <Col lg="12" md="12" sm="12">
        <Card className="card-stats transparent-card text-center">
          <CardBody>
            <Button
              aria-label="Gray Tags"
              className="btn-round"
              size="sm"
              color="secondary"
              disabled="true">
                Gray tags are unseen tags
            </Button>
            <Button
              aria-label="Red Tags"
              className="btn-round"
              size="sm"
              color="danger"
              disabled="true">
                Red tags are unfollowed
            </Button>
            <Button
              aria-label="Green Tags"
              className="btn-round"
              size="sm"
              color="success"
              disabled="true">
                Green tags are followed
            </Button>
            <Button
              aria-label="Yellow Tags"
              className="btn-round"
              size="sm"
              color="warning"
              disabled="true">
                Yellow tags are self-tags
            </Button>
          </CardBody>
        </Card>
      </Col>
      </>
    );
  }
}

export default LegendCard;

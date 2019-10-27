import React from 'react';
import UserCard from "components/UserCard/UserCard.jsx";
import NameCard from "components/NameCard/NameCard.jsx";

import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Input,
  FormGroup,
  Row
} from "reactstrap";

class BioCard extends React.Component {

  render() {
    return (
      <>
      <Col lg="9" md="6" sm="6">
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col lg="8" md="8">
                <CardTitle tag="h5">Bio</CardTitle>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      </>
    );
  }
}

export default BioCard;

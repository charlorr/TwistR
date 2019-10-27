import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Row
} from "reactstrap";

class BioCard extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
      users: [],
      currentUserPk: null,
      currentUser: []
    };
  }

  render() {
    return (
      <>
      <Col lg="9" md="6" sm="6">
        <Card className="card-stats">
          <CardHeader>
            <CardTitle tag="h5">Bio</CardTitle>
          </CardHeader>
          <CardBody>
            <h3>{this.props.currentUser.bio}</h3>
          </CardBody>
        </Card>
      </Col>
      </>
    );
  }
}

export default BioCard;

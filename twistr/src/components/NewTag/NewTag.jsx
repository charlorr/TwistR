import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Input,
  FormGroup,
  Row
} from "reactstrap";

class NewTag extends React.Component {

  render() {
    return (
      <>
        <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
            <CardBody>
                <Row>
                <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-favourite-28 text-primary" />
                    </div>
                </Col>
                <Col md="8" xs="7">
                    <div className="numbers">
                    <p className="card-category">New Tags</p>
                    <CardTitle tag="p">#clickhere</CardTitle>
                    <p />
                    </div>
                </Col>
                </Row>
            </CardBody>
            <CardFooter>
                <hr />
                <div className="stats">
                <i className="fas fa-sync-alt" /> Update now
                </div>
            </CardFooter>
            </Card>
        </Col>
      </>
    );
  }
}

export default NewTag;

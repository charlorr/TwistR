import React from 'react';
import NewTagCard from "components/NewTagCard/NewTagCard.jsx";

import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
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
                    <div className="icon-big text-center icon-warning heartedTag">
                      <i className="far fa-heart text-primary outline-heart" />
                      <i className = "fas fa-heart text-primary filled-heart"/>
                    </div>
                </Col>
                <Col md="8" xs="7">
                  <NewTagCard newTag={this.props.newTag} />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default NewTag;

import React , { Component }from "react";
import NotificationAlert from "react-notification-alert";

// reactstrap components

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class  FollowerCard  extends  Component {
    render() {

        return (
            <Card>
            <CardHeader>
              <CardTitle tag="h4">Who You Follow</CardTitle>
            </CardHeader>
            <CardBody>
              <ul className="list-unstyled team-members">
                <li>
                  <Row>
                    <Col md="2" xs="2">
                      <div className="avatar">
                        <img
                          alt="..."
                          className="img-circle img-no-padding img-responsive"
                          src={require("assets/img/Train.png")}
                        />
                      </div>
                    </Col>
                    <Col md="7" xs="7">
                      DJ Khaled <br />
                    </Col>
                    <Col className="text-right" md="3" xs="3">
                    <Button className = "follow-icons btn-round btn-icon"
                            color = "success"
                            size="sm">
                            <i className = "fa fa-check follow-check"></i>
                            <i className = "fa fa-times follow-uncheck"></i>
                        </Button>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col md="2" xs="2">
                      <div className="avatar">
                        <img
                          alt="..."
                          className="img-circle img-no-padding img-responsive"
                          src={require("assets/img/BoilermakerSpecial.jpg")}
                        />
                      </div>
                    </Col>
                    <Col md="7" xs="7">
                      Ashwin Gokhale <br />
                    </Col>
                    <Col className="text-right" md="3" xs="3">
                        <Button className = "follow-icons btn-round btn-icon"
                            color = "success"
                            size="sm">
                            <i className = "fa fa-check follow-check"></i>
                            <i className = "fa fa-times follow-uncheck"></i>
                        </Button>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col md="2" xs="2">
                      <div className="avatar">
                        <img
                          alt="..."
                          className="img-circle img-no-padding img-responsive"
                          src={require("assets/img/Fountain.jpg")}
                        />
                      </div>
                    </Col>
                    <Col className="col-ms-7" xs="7">
                      Professor Samanta <br />
                      
                    </Col>
                    <Col className="text-right" md="3" xs="3">
                    <Button className = "follow-icons btn-round btn-icon"
                            color = "success"
                            size="sm">
                            <i className = "fa fa-check follow-check"></i>
                            <i className = "fa fa-times follow-uncheck"></i>
                        </Button>
                    </Col>
                  </Row>
                </li>
              </ul>
            </CardBody>
          </Card> 
        );
    }
}
        
      
export  default  FollowerCard;

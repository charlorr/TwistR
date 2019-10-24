import React, { Component } from "react";

// reactstrap components

import {
  Card,
  CardBody,
  CardFooter,
  Row,
  Col
} from "reactstrap";

class  ProfileSummaryCard  extends  Component {
    render() {

        return (
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/BoilermakerSpecial.jpg")}
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/PurduePete.jpg")}
                    />
                    <h5 className="title" id="fullName">Purdue Pete</h5>
                  </a>
                  <p className="description">@therealscrummaster</p>
                </div>
                <p className="description text-center"
                  id = "displayBio">
                  {this.bio}
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="4" md="6" xs="6">
                      <h5>
                        2000 <br />
                        <small>Following</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <h5>
                        3 <br />
                        <small>Followers</small>
                      </h5>
                    </Col>
                    <Col className="mr-auto" lg="4" md="6" xs="6">
                      <h5>
                        666 <br />
                        <small>Tags</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
        );
    }
}
        
      
export  default  ProfileSummaryCard;

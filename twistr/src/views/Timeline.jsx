import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import Post from "components/Post/Post.jsx";
import CreatePost from "components/CreatePost/CreatePost.jsx";

class Timeline extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="9" md="12" sm="12">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <img
                          alt="..."
                          className="avatar border-gray"
                          src={require("assets/img/default-avatar.png")}
                        />
                      </div>
                    </Col>
                    <CreatePost/>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Character Count
                  </div>
                </CardFooter>
              </Card>
            </Col>
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
          </Row>
          <Row>
            <Post/>
          </Row>
          <Row>
            <Post/>
          </Row>
        </div>
      </>
    );
  }
}

export default Timeline;

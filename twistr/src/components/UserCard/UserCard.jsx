import React from 'react';

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

class UserCard extends React.Component {

  render() {
    return (
    <>
      <Col lg="2" md="2" sm="1">
        <Card>
          <CardBody>
            <img
              alt="..."
              className="border-gray"
              src={require("assets/img/PurduePete.jpg")}
            />
          </CardBody>
        </Card>
      </Col>
    </>
    );
  }
}

export default UserCard;

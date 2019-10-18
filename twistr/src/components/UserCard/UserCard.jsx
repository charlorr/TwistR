import React from 'react';

import {
  Card,
  CardBody,
} from "reactstrap";

class UserCard extends React.Component {

  render() {
    return (
    <>
    <Card>
      <CardBody>
        <img
          alt="..."
          className="border-gray"
          src={this.props.picture}
        />
      </CardBody>
    </Card>
    </>
    );
  }
}

export default UserCard;

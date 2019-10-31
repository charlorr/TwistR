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
          width="500px"
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

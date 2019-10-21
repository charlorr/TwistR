import React from 'react';
import NewTagCard from "components/NewTagCard/NewTagCard.jsx";

import {
  Col,
  Row
} from "reactstrap";

class NewTag extends React.Component {

  render() {
    return (
      <>
        <NewTagCard newTag={this.props.newTag} />
      </>
    );
  }
}

export default NewTag;

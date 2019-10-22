import React from 'react';
import NewTagCard from "components/NewTagCard/NewTagCard.jsx";

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

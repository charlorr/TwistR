import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap";

class NewTagCard extends React.Component {

  render() {
    return (
    <>
    <Card>
      <CardBody>
      <div className="numbers">
         <p className="card-category">{this.props.newTag.author}</p>
         <CardTitle tag="p"> #{this.props.newTag.content} </CardTitle>        
         <p />
       </div>
        
        </CardBody>
    </Card>
    </>
    );
  }
}

export default NewTagCard;


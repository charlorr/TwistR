import React , { Component }from "react";

// reactstrap components

import {
  Button,
  Card,
  Col
} from "reactstrap";

class  UserlineViewTagsCard  extends  Component {

    constructor(props) {
      super(props);
      this.state  = {
        users: [],
        currentUserline: [],
        currentUser: [],
      };
    }y

    render() {
        return (
          <>
          <Col lg="12" md="6" sm="6">
            <Card className="card-stats">
              <div className="ml-auto mr-auto">
                <Col lg="12" md="12" sm="12">
                  <Button 
                    className="btn-round"
                    color="primary"
                    /*onClick={this.followUser}*/
                    >
                    View Tags 
                  </Button>
                </Col>
              </div>
            </Card>
          </Col>
          </>
        );
    }
}      
      
export  default  UserlineViewTagsCard;

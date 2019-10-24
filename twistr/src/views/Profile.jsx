import React from "react";
import UserService from "../components/UserService/UserService.jsx";
import ProfileEditCard from "../components/ProfileEditCard/ProfileEditCard.jsx";
import FollowerCard from "../components/FollowerCard/FollowerCard.jsx";
import ProfileSummaryCard from "../components/ProfileSummaryCard/ProfileSummaryCard.jsx";

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";


const userService = new UserService();
class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
        users: [],
        currentUser: []
    };
  }

  componentDidMount() {
    const { match: { params } } =  this.props;
    if(params  &&  params.pk)
    {      var  self  =  this;
      userService.getUser(params.pk).then(function(result){
      console.log(result);
      self.setState({currentUser: result});
      console.log("this is the currentUser after setting state:" +self.state.currentUser)
      })
    }
  }
  
  render() {
    return (
      <>
      <div className="content">
        <Row>
          <Col md="4">
            <ProfileSummaryCard />
            <FollowerCard />
          </Col>
          <Col md="8">
            <ProfileEditCard currentUser = {this.state.currentUser} />
          </Col>
        </Row>

      </div>
      </>
    );
  }
}

export default Profile;

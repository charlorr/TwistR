import React from 'react';
import TwistService from "components/TwistService/TwistService.jsx";
import {Button} from "reactstrap";

const twistService = new TwistService();

class TagButton extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
          status: "warning",
          twistPk: [],
          selfTag: false
        };
        this.setStatus = this.setStatus.bind(this);
    }

    componentDidMount(){
        this.setStatus(this.props.user.toString(), this.props.author.toString());
    }

    setStatus(user, author){
        if (this.props.tag !== undefined & user !== author) {
            var self = this;
            twistService.getTwistExists(this.props.user,this.props.author,this.props.tag).then(function (result){
                if (result.data.length !== 0) {
                    self.setState({status: "success"});
                    self.setState({twistPk: result.data[0].pk});
                }
                else {
                    self.setState({status: "danger"})
                }
            }).catch(function (error){
                console.log(error);
                self.setState({status: ""})
            });
        }
        else {
            this.setState({selfTag: true});
        }
    }

    clickTag(){
        if (!this.state.selfTag) {
            var self = this;
            if (self.state.status === "danger") {
                //create twist
                twistService.createTwist({
                    "user": this.props.user,
                    "author": this.props.author,
                    "tag": this.props.tag
                }).then(function (result) {
                    self.setState({status: "success"});
                    self.setState({twistPk: result.data.pk})
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else if (this.state.status === "success") {
                //delete twist
                alert("Here!");
                twistService.deleteTwistbyPk(self.state.twistPk).then(function (result){
                    self.setState({status: "danger"});
                }).catch(function (error){
                    console.log(error);
                });
            }
        }
    }

    render() {
        if (this.props.tag !== undefined) {
            return(
              <Button
                className="btn-round"
                color={this.state.status}
                type="button"
                onClick={() => this.clickTag()}
                >
                {this.props.tag}
              </Button>
            )
        }
        else {
            return null;
        }
    }
}

export default TagButton;
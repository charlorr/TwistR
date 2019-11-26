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
        if (this.props.user === null) {
            this.setState({status: "info"});
            this.setState({selfTag: true});
        }
        else {
            this.setStatus(this.props.user.toString(), this.props.author.toString(), this.props.tag);
            this.setState({selfTag: this.props.user.toString() === this.props.author.toString()});
        }
    }

    setStatus(user, author, tag){
        if (tag !== undefined & user !== author) {
            var self = this;
            twistService.getTwistExists(user, author, tag).then(function (result){
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
                twistService.createTwist({
                    "user": this.props.user,
                    "author": this.props.author,
                    "tag": this.props.tag,
                    "followed": true
                }).then(function (result) {
                    self.setState({status: "success"});
                    self.setState({twistPk: result.data.pk})
                    window.location.reload();
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else if (this.state.status === "success") {
                twistService.deleteTwistbyPk(self.state.twistPk).then(function (result){
                    self.setState({status: "danger"});
                    window.location.reload();
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
                disabled={this.state.selfTag}
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
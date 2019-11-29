import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import UserService from "components/UserService/UserService.jsx"


import logo from "TwistR_logo.png";
const userService = new UserService();

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
    this.check_auth = this.check_auth.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
    this.check_auth();
  }
  check_auth() {
    var that = this;
    if (localStorage.getItem('auth_token') === null) {
      that.setState({auth: false});
    }
    else {
      userService.check_auth().then(function (result){
        that.setState({auth: true});
      })
      .catch(function (error) {
        localStorage.clear();
        that.setState({auth: false});
      })
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </div>
        <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
            {this.props.routes.map((prop, key) => {
              if ((prop.auth === this.state.auth || prop.name === "Explore") && prop.name !== "Userline") {
                return (
                  <li
                    className={
                      this.activeRoute(prop.path) +
                      (prop.pro ? " active-pro" : "")
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );}
              else {
                return null;
              }
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;

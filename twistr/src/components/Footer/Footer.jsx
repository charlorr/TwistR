import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a 
                    href="https://www.cs.purdue.edu/academic-programs/courses/canonical/cs307.html" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    Purdue CS 307 Project
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/charlorr/TwistR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                </li>
                <li>
                  Aeson, Ania, Charlene, Chiranth, Colin, & Kaitlyn
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <div className="copyright">
                a CS 307 Project, by Team 12 &copy; {1900 + new Date().getYear()}
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;

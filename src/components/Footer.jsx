import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/logo.png";
import twitter from "../assets/twitter-logo-silhouette.svg";
import fb from "../assets/facebook-logo.svg";
import google from "../assets/google-plus.svg";

const Footer = () => {
  return (
    <Container className="footer padders">
      <Row>
        <Col>
          <img src={logo} alt="" />
        </Col>
        <Col lg={6}>
          <p> products</p>
          <p> about</p>
          <p> Community</p>
          <p> contact us</p>
        </Col>

        <Col className="logos">
          <a href="https://twitter.com">
            <img src={twitter} alt="" />
          </a>
          <a href="https://facebook.com">
            <img src={fb} alt="" />
          </a>
          <a href="https://google.com">
            <img src={google} alt="" />
          </a>
        </Col>
      </Row>

      <Row>
        <h6>
          COPYRIGHT © {new Date().getFullYear()} FULLSTACKHQ INC. ALL RIGHTS
          RESERVED
        </h6>
      </Row>
    </Container>
  );
};

export default Footer;

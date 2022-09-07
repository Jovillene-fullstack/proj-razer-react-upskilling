import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "../assets/logo.png";
import twitter from "../assets/twitter-logo-silhouette.svg";
import fb from "../assets/facebook-logo.svg";
import google from "../assets/google-plus.svg";

const Footer = () => {
  return (
    <Container id="footer">
      <Row>
        <Col>
          <img src={logo} alt="" />
        </Col>
        <Col lg={6}>
          <a href="#"> products</a>
          <a href="#"> about</a>
          <a href="#"> Community</a>
          <a href="#"> contact us</a>
        </Col>

        <Col className="logos">
          <a href="https://twitter.com" target="_blank">
            <img src={twitter} alt="" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img src={fb} alt="" />
          </a>
          <a href="https://google.com" target="_blank">
            <img src={google} alt="" />
          </a>
        </Col>
      </Row>
      <Row>
        <h6>COPYRIGHT © 2022 FULLSTACKHQ INC. ALL RIGHTS RESERVED</h6>
      </Row>
    </Container>
  );
};

export default Footer;

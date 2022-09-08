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
          <p>
            <img src={twitter} alt="" />
          </p>
          <p>
            <img src={fb} alt="" />
          </p>
          <p>
            <img src={google} alt="" />
          </p>
        </Col>
      </Row>

      <Row>
        <h6>COPYRIGHT © 2022 FULLSTACKHQ INC. ALL RIGHTS RESERVED</h6>
      </Row>
    </Container>
  );
};

export default Footer;

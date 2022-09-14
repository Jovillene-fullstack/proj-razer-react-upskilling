import { Container, Row, Col } from "react-bootstrap";
import { logo, twitter, fb, google } from "../assets/index.js";

const Footer = () => {
  return (
    <Container className="footer padders">
      <Row>
        <Col>
          <img src={logo} alt="" />
        </Col>
        <Col lg={6}>
          <a href="#/"> products</a>
          <a href="#/"> about</a>
          <a href="#/"> Community</a>
          <a href="#/"> contact us</a>
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

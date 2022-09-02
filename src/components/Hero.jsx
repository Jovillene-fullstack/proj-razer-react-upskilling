import thx from "../assets/razer-nari-thx-logo.png";
import chroma from "../assets/razer-nari-chroma-logo.png";
import razer from "../assets/razer-nari-logo.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hero = () => {
  return (
    <div id="hero">
      <Container>
        <Row>
          <Col className="info">
            <h1>SUPREME WIRELESS IMMERSION</h1>
            <p>
              When it comes to gaming immersion, sound plays a critical role. It
              engages your sense of hearing to determine the atmosphere and
              mood, creating a lifelike experience that lets you truly embody
              your game character. Standing by this philosophy, we’ve built a
              headset with THX Spatial Audio to bring you 360° positional sound,
              giving you greater spatial awareness. We’ve also added ergonomic
              design features to make this one of the most comfortable daily
              drivers for gaming. This is the Razer Nari.
            </p>

            <img className="logo" src={thx} alt="thx" />
            <img className="logo" src={chroma} alt="thx" />
          </Col>
          <Col>
            <img className="razer-svg" src={razer} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

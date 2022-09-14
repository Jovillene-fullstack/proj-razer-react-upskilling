//Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import "aos/dist/aos.css";
import { thxLogo } from "../assets/index";

const thx = () => {
  return (
    <div className="thx padders">
      <Container>
        <Row>
          <Col className="info" data-aos="fade-up-right">
            <div className="content">
              <h4>THX SPATIAL AUDIO</h4>
              <p>
                THX Spatial Audio goes beyond traditional surround sound by
                simulating sound in a 360° sphere around you. With the Nari
                Ultimate, you can now react to any in-game movement, even if
                it’s coming from above or beneath you, giving you heightened
                senses during your game. Unleash your predatory instincts with
                sound as a weapon.
              </p>
              <img className="logo" src={thxLogo} alt="thx" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default thx;

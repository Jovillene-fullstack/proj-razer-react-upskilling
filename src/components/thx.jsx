//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/razer-nari-thx-logo.png";

const thx = () => {
  return (
    <div id="thx">
      <Container>
        <Row>
          <Col lg={5} sm={12} className="info" data-aos="fade-up-right">
            <div>
              <h4>THX SPATIAL AUDIO</h4>
              <p>
                THX Spatial Audio goes beyond traditional surround sound by
                simulating sound in a 360° sphere around you. With the Nari
                Ultimate, you can now react to any in-game movement, even if
                it’s coming from above or beneath you, giving you heightened
                senses during your game. Unleash your predatory instincts with
                sound as a weapon.
              </p>
            </div>

            <img className="logo" src={Logo} alt="thx" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default thx;

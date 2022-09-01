import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { items } from "./items.js";

function features() {
  return (
    <Container id="features">
      <div className="header">
        <h4>COMPLEMENTED BY COMFORT</h4>
        <p>
          The Razer Nari is designed so that its immersive technology is
          complemented by comfortable features, letting you escape into game
          worlds for hours without strain.
        </p>
      </div>

      <Row>
        {items.map((item) => {
          return (
            <Col className="items" xs={12} md={6} lg={4}>
              <img src={item.src} alt="" />
              <h6>{item.title}</h6>
              <p>{item.desc}</p>
            </Col>
          );
        })}
      </Row>

      <div className="hori"></div>
    </Container>
  );
}

export default features;

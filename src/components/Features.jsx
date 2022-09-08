import { Container, Row, Col } from "react-bootstrap";
import { items } from "./items.js";

const features = () => {
  return (
    <Container className="perfect features padders">
      <div className="header">
        <h4>COMPLEMENTED BY COMFORT</h4>
        <p>
          The Razer Nari is designed so that its immersive technology is
          complemented by comfortable features, letting you escape into game
          worlds for hours without strain.
        </p>
      </div>

      <Row className="main-wrap">
        {items.map((item) => {
          return (
            <Col key={item.id} className="items" xs={12} md={6} lg={4}>
              <img src={item.src} alt="" />

              <h6>{item.title}</h6>
              <p>{item.desc}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default features;

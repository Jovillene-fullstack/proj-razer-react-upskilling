import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { otherProd } from "./others.js";

function others() {
  return (
    <Container id="others">
      <div className="header">
        <h4>EXPLORE OTHER PRODUCTS</h4>
      </div>
      <Row>
        {otherProd.map((prod) => {
          return (
            <Col className="other-cards" xs={12} md={6} lg={3}>
              <div className="gadgets">
                <img src={prod.img} alt="" />
                <img className="logo" src={prod.icon} alt="" />
              </div>
              <div className="desc">
                <h6>{prod.title}</h6>
                <p>{prod.desc}</p>
                <a href="#">learn more</a>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default others;

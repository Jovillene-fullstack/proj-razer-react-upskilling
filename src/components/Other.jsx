import { Container, Row, Col } from "react-bootstrap";
import { otherProd } from "./others.js";
import React, { useState, useEffect } from "react";

const Others = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
  });
  const [isProduct, setIsProduct] = useState(false);
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
    });
  };
  const showAll = () => {
    setIsProduct(true);
  };

  useEffect(() => {
    if (windowDimenion.winWidth >= 768) {
      setIsProduct(false);
    }
  }, [windowDimenion.winWidth]);

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  return (
    <Container className="others padders">
      <div className="header">
        <h4>EXPLORE OTHER PRODUCTS</h4>
      </div>
      <Row>
        {otherProd
          .slice(0, isProduct ? 4 : windowDimenion.winWidth <= 768 ? 2 : 4)
          .map((prod) => {
            return (
              <Col key={prod.id} className="other-cards" xs={12} md={6} lg={3}>
                <div className="gadgets">
                  <img className="g-items" src={prod.img} alt="" />
                  <img className="logo" src={prod.icon} alt="" />
                </div>
                <div className="desc">
                  <h6>{prod.title}</h6>
                  <p>{prod.desc}</p>
                  <p className="learn">learn more</p>
                </div>
              </Col>
            );
          })}
      </Row>
      <button onClick={showAll} className="g-btn">
        view all
      </button>
    </Container>
  );
};

export default Others;

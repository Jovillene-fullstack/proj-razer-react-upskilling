import { Container, Row, Col } from "react-bootstrap";
import { otherProd } from "./others.js";
import React, { useState, useEffect } from "react";

const Others = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
  });
  const [isProduct, setIsProduct] = useState(false);

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

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
    });
  };

  const showAll = () => {
    setIsProduct(true);
  };

  return (
    <Container className="others padders">
      <div className="header">
        <h4>EXPLORE OTHER PRODUCTS</h4>
      </div>
      <Row>
        {otherProd
          .slice(
            0,
            isProduct
              ? otherProd.length
              : windowDimenion.winWidth <= 768
              ? 2
              : otherProd.length
          )
          .map((prod) => {
            return (
              <Col key={prod.id} className="other-cards" xs={12} md={6} xl={3}>
                <div className="gadgets">
                  <img className="g-items" src={prod.img} alt="" />
                  <img className="logo" src={prod.icon} alt="" />
                </div>
                <div className="desc">
                  <h6>{prod.title}</h6>
                  <p>{prod.desc}</p>
                  <a href="#/" className="learn">
                    learn more
                  </a>
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

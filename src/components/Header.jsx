import { useState } from "react";
import { logo } from "./index";
import {
  Container,
  Navbar,
  Nav,
  Col,
  Dropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";

const NavHead = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(true);
  };

  const hideDropdown = (e) => {
    setShow(false);
  };

  const [show2, setShow2] = useState(false);
  const showDropdown2 = (e) => {
    setShow2(true);
  };

  const hideDropdown2 = (e) => {
    setShow2(false);
  };

  /* Open when someone clicks on the span element */
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  function openNav2() {
    document.getElementById("myNav2").style.width = "100%";
  }
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav2() {
    document.getElementById("myNav2").style.width = "0%";
  }
  function openNav3() {
    document.getElementById("myNav3").style.width = "100%";
  }
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav3() {
    document.getElementById("myNav3").style.width = "0%";
  }

  return (
    <Container className="perfect navi-bar">
      <Navbar expand="lg">
        <Col lg={5}>
          <Navbar.Brand href="#">
            <img src={logo} alt="" />
          </Navbar.Brand>
        </Col>
        <Col className="menus">
          <Dropdown as={NavItem}>
            <Dropdown.Toggle
              as={NavLink}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              Products <i className="fa-solid fa-chevron-down"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu
              onMouseEnter={showDropdown}
              show={show}
              onMouseLeave={hideDropdown}
            >
              <Dropdown.Item href="#">laptops</Dropdown.Item>
              <Dropdown.Item href="#">mobiles</Dropdown.Item>
              <Dropdown.Item href="#">mouse & mats</Dropdown.Item>
              <Dropdown.Item href="#">keyboards</Dropdown.Item>

              <Dropdown className="dropdown-item" as={NavItem}>
                <Dropdown.Toggle
                  as={NavLink}
                  onMouseEnter={showDropdown2}
                  onMouseLeave={hideDropdown2}
                >
                  Headset & audio <i className="fa-solid fa-chevron-right"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="sub-menu2"
                  onMouseEnter={showDropdown2}
                  onMouseLeave={hideDropdown2}
                  show={show2}
                >
                  <Dropdown.Item>wired</Dropdown.Item>
                  <Dropdown.Item>wireless</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown.Item href="#">console</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link href="#">about</Nav.Link>
          <Nav.Link href="#">community</Nav.Link>
          <Nav.Link href="#">contact us</Nav.Link>

          <button className="g-btn"> buy now</button>
        </Col>

        <Col className="sub-navi">
          <div id="myNav" className="overlay">
            <p className="closebtn" onClick={closeNav}>
              &times;
            </p>

            <div className="overlay-content">
              <a href="#/" onClick={openNav2}>
                product <i className="fa-solid fa-chevron-right"></i>
              </a>
              <a href="#/">about</a>
              <a href="#/">Community</a>
              <a href="#/">contact us</a>
              <button className="g-btn btn"> buy now</button>
            </div>
          </div>

          <span onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </span>

          <div id="myNav2" className="overlay">
            <div className="first-nav">
              <a href="#/" className="btn-mobile closebtn" onClick={closeNav2}>
                &times;
              </a>
            </div>

            <div className="overlay-content">
              <a href="#/">laptops </a>
              <a href="#/">mobiles</a>
              <a href="#/">mouses & mats</a>
              <a href="#/">keyboards</a>
              <a href="#/" onClick={openNav3}>
                headset & audio <i className="fa-solid fa-chevron-right"></i>
              </a>
              <a href="#/">console</a>
            </div>
          </div>

          <div id="myNav3" className="overlay">
            <div className="first-nav">
              <a href="#/" className="btn-mobile closebtn" onClick={closeNav3}>
                &times;
              </a>
            </div>
            <div className="overlay-content">
              <a href="#/">wired </a>
              <a href="#/">wireless</a>
            </div>
          </div>
        </Col>
      </Navbar>
    </Container>
  );
};

export default NavHead;

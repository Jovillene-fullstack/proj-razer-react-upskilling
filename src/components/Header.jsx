// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo.png";

// function Header() {
//   return (
//     <>
//       {["xxl"].map((expand) => (
//         <Navbar key={expand} expand={expand} className="mb-3 nvbar">
//           <Container>
//             <Navbar.Brand href="#">
//               <img src={logo} alt="" />
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Offcanvas
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <NavDropdown
//                     className="no-show"
//                     title="Product"
//                     id={`offcanvasNavbarDropdown-expand-${expand}`}
//                   >
//                     <NavDropdown.Item href="#action1">laptops</NavDropdown.Item>
//                     <NavDropdown.Item href="#action2">mobiles</NavDropdown.Item>
//                     <NavDropdown.Item href="#action2">
//                       mouse & mats
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="#action2">
//                       keyboards
//                     </NavDropdown.Item>

//                     <NavDropdown
//                       title="Headset & audio"
//                       id={`offcanvasNavbarDropdown-expand-${expand}`}
//                     >
//                       <div className="sub2">
//                         <NavDropdown.Item href="#action1">
//                           wireless
//                         </NavDropdown.Item>
//                         <NavDropdown.Item href="#action2">
//                           wired
//                         </NavDropdown.Item>
//                       </div>
//                     </NavDropdown>

//                     {/* <DropdownButton
//                       as={ButtonGroup}
//                       id={`dropdown-button-drop-right`}
//                       // drop={direction}
//                       variant="secondary"
//                       title={` Drop end `}
//                     >
//                       <Dropdown.Item eventKey="1">Action</Dropdown.Item>
//                       <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
//                       <Dropdown.Item eventKey="3">
//                         Something else here
//                       </Dropdown.Item>
//                       <Dropdown.Divider />
//                       <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
//                     </DropdownButton> */}
//                     <NavDropdown.Item href="#action2">console</NavDropdown.Item>

//                     <NavDropdown.Item href="#action3">
//                       Something else here
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                   <Nav.Link href="#action4">about</Nav.Link>
//                   <Nav.Link href="#action5">community</Nav.Link>
//                   <Nav.Link href="#action6">contact us</Nav.Link>
//                 </Nav>

//                 <Button className="g-btn">buy now</Button>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default Header;

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

function NavHead() {
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
    <Container id="navi-bar" className="">
      <Navbar expand="lg">
        <Container>
          <Col>
            <Navbar.Brand href="#">
              <img src={logo} alt="" />
            </Navbar.Brand>
          </Col>
          <Col className="menus">
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink}>Product</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">laptops</Dropdown.Item>
                <Dropdown.Item href="#">mobiles</Dropdown.Item>
                <Dropdown.Item href="#">mouse & mats</Dropdown.Item>
                <Dropdown.Item href="#">keyboards</Dropdown.Item>

                <Dropdown className="dropdown-item" as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>
                    Headset & audio
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="sub-menu2">
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
            <div id="myNav" class="overlay">
              <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
                &times;
              </a>

              <div class="overlay-content">
                <a href="#" onClick={openNav2}>
                  product
                </a>
                <a href="#">about</a>
                <a href="#">Community</a>
                <a href="#">contact us</a>
                <button className="g-btn btn"> buy now</button>
              </div>
            </div>

            <span onClick={openNav}>
              <i class="fa-solid fa-bars"></i>
            </span>

            <div id="myNav2" class="overlay">
              <div class="first-nav">
                <div class="nav-label">
                  <h2>products</h2>
                </div>
                <a
                  href="javascript:void(0)"
                  class="btn-mobile closebtn"
                  onClick={closeNav2}
                >
                  &times;
                </a>
              </div>

              <div class="overlay-content">
                <a href="#">laptops </a>
                <a href="#">mobiles</a>
                <a href="#">mouses & mats</a>
                <a href="#">keyboards</a>
                <a href="#" onClick={openNav3}>
                  headset & audio
                </a>
                <a href="#">console</a>
              </div>
            </div>

            <div id="myNav3" class="overlay">
              <div class="first-nav">
                <div class="nav-label">
                  <h2>headset & audio</h2>
                </div>
                <a
                  href="javascript:void(0)"
                  class="btn-mobile closebtn"
                  onClick={closeNav3}
                >
                  &times;
                </a>
              </div>
              <div class="overlay-content">
                <a href="#">wired </a>
                <a href="#">wireless</a>
              </div>
            </div>
          </Col>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavHead;

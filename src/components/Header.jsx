import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand href="#">
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Product"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action1">laptops</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">mobiles</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">
                      mouse & mats
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action2">
                      keyboards
                    </NavDropdown.Item>

                    <NavDropdown
                      title="Headset & audio"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <div className="sub2">
                        <NavDropdown.Item href="#action1">
                          wireless
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action2">
                          wired
                        </NavDropdown.Item>
                      </div>
                    </NavDropdown>

                    {/* <DropdownButton
                      as={ButtonGroup}
                      id={`dropdown-button-drop-right`}
                      // drop={direction}
                      variant="secondary"
                      title={` Drop end `}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton> */}
                    <NavDropdown.Item href="#action2">console</NavDropdown.Item>

                    <NavDropdown.Item href="#action3">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action4">about</Nav.Link>
                  <Nav.Link href="#action5">community</Nav.Link>
                  <Nav.Link href="#action6">contact us</Nav.Link>
                </Nav>

                <Button className="g-btn">buy now</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;

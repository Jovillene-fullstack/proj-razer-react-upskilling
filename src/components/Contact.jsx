import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import validator from "validator";

function Contact() {
  return (
    <div id="contact">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={5}>
            <div className="con-header">
              <h4>ask a question</h4>

              <form>
                <input type="text" id="name" placeholder="Name" />
                <input type="text" id="phone" placeholder="Phone Number" />
                <input type="text" id="email" placeholder="Email Address" />
                <input type="text" id="add" placeholder="Permanent Address" />
                <input type="text" id="msg" placeholder="Message" />

                <button className="g-btn">Send</button>
              </form>
            </div>
          </Col>
          <Col lg={5}>
            <div className="con-header">
              <h4>information</h4>
            </div>
            <div className="con-info">
              <div className="info">
                <h6>address</h6>
                <p>
                  123 East 123th St. <br /> Floor 123 <br /> New York, NY, 10003
                </p>
              </div>
              <div className="info">
                <h6>PHONE</h6>
                <p>+1 234 567-8910</p>
              </div>
              <div className="info">
                <h6>EMAIL</h6>
                <p>hello@fullstack.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  function validate(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;

    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var add = document.getElementById("add").value;
    var msg = document.getElementById("msg").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 5) {
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if (add.length < 10) {
      text = "Please Enter Correct Address";
      error_message.innerHTML = text;
      return false;
    }
    if (isNaN(phone) || phone.length !== 11) {
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if (email.indexOf("@") === -1 || email.length < 6) {
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if (msg.length <= 5) {
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
  return (
    <div className="contact padders">
      <Container>
        <Row>
          <Col md={7}>
            <div className="con-header">
              <h4>ask a question</h4>

              <div id="error_message"></div>

              <form id="myform" onSubmit={validate}>
                <div className="name_ph">
                  <input type="text" id="name" placeholder="Name" />
                  <input type="text" id="phone" placeholder="Phone Number" />
                </div>

                <input type="text" id="email" placeholder="Email Address" />
                <input type="text" id="add" placeholder="Permanent Address" />
                <textarea type="text" id="msg" placeholder="Message" />

                <button className="g-btn">Send</button>
              </form>
            </div>
          </Col>
          <Col md={5} className="contact-info">
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
                <p className="click">+1 234 567-8910</p>
              </div>
              <div className="info">
                <h6>EMAIL</h6>
                <p className="click">hello@fullstack.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

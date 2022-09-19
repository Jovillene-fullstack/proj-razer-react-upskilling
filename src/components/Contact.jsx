import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    add: "",
    msg: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    validate();
  };

  function validate() {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var text;
    if (form.fullName.length < 5) {
      text = "Please Enter valid Name";
      setErrorMessage(text);
    } else if (form.add.length < 10) {
      text = "Please Enter Correct Address";
      setErrorMessage(text);
    } else if (phoneno.test(form.phone) || form.phone.length !== 11) {
      text = "Please Enter valid Phone Number";
      setErrorMessage(text);
    } else if (form.email.indexOf("@") === -1 || form.email.length < 6) {
      text = "Please Enter valid Email";
      setErrorMessage(text);
    } else if (form.msg.length <= 140) {
      text = "Please Enter More Than 140 Characters";
      setErrorMessage(text);
    } else {
      alert("Form Submitted Successfully!");
    }
  }

  return (
    <div className="contact padders">
      <Container>
        <Row>
          <Col md={7}>
            <div className="con-header">
              <h4>ask a question</h4>

              <p className="valid">{errorMessage}</p>

              <form id="myform" onSubmit={onSubmitForm}>
                <div className="name_ph">
                  <input
                    name="fullName"
                    type="text"
                    id="name"
                    className="name"
                    placeholder="Name"
                    onChange={onUpdateField}
                  />
                  <input
                    name="phone"
                    pattern="[0-9]{11}"
                    type="tel"
                    id="phone"
                    className="phone"
                    placeholder="Phone Number"
                    onChange={onUpdateField}
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  onChange={onUpdateField}
                />
                <input
                  name="add"
                  type="text"
                  id="add"
                  placeholder="Permanent Address"
                  onChange={onUpdateField}
                />
                <textarea
                  name="msg"
                  rows="4"
                  type="text"
                  id="msg"
                  placeholder="Message"
                  onChange={onUpdateField}
                />
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
                <p>123 East 123th St. Floor 123 New York, NY, 10003</p>
              </div>
              <div className="info">
                <h6>PHONE</h6>
                <a href="tel:+12345678910" className="click">
                  +1 234 567-8910
                </a>
              </div>
              <div className="info">
                <h6>EMAIL</h6>
                <a href="mailto:hello@fullstack.com" className="click">
                  hello@fullstack.com
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

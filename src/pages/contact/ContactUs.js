import React, { useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MdPermPhoneMsg, MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import BackToTop from "../home/BackToTop";
import Footer from "../courses/Footer";
import NavigationBar from "../navbar/NavigationBar";
import { WebContext } from "../../App";
import "./contact.css";


const ContactUs = () => {
  const data = useContext(WebContext);
  console.log(data);

  return (
    <>
      <BackToTop />
      <NavigationBar />
      <section className="pt-xl-8 aboutSection">
        <Container>
          <Row className="g-4 g-xxl-5">
            <Col xl={9} className="mx-auto">
              {data?.contact?.map((val, index) => (
                <img
                  key={index}
                  src={val.img}
                  className="rounded img-fluid contact-img"
                  alt="contact-bg"
                />
              ))}
              <Row className="contact_row">
                <Col lg={9} className="mx-auto">
                  <div className="card shadow card-shadow">
                    <div className="card-header border-bottom">
                      <h1 className="contact-title">Contact us</h1>
                      {/* <p className="mb-0">You can reach us anytime via <a href="mailto:example@gmail.com">example@gmail.com</a></p> */}
                    </div>

                    <Form className="card-body">
                      <div className="form-floating mb-4">
                        <Form.Control
                          type="text"
                          className="bg-transparent"
                          id="floatingName"
                          placeholder="Your name"
                        />
                        <Form.Label htmlFor="floatingName">
                          Your name
                        </Form.Label>
                      </div>

                      <div className="form-floating mb-4">
                        <Form.Control
                          type="email"
                          className="bg-transparent"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <Form.Label htmlFor="floatingInput">
                          Email address
                        </Form.Label>
                      </div>

                      <div className="form-floating mb-4">
                        <Form.Control
                          type="text"
                          className="bg-transparent"
                          id="floatingNumber"
                          placeholder="Phone number"
                        />
                        <Form.Label htmlFor="floatingNumber">
                          Phone number
                        </Form.Label>
                      </div>

                      <div className="form-floating mb-4">
                        <Form.Control
                          as="textarea"
                          className="bg-transparent"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style={{ height: "100px" }}
                        />
                        <Form.Label htmlFor="floatingTextarea2">
                          Message
                        </Form.Label>
                      </div>

                      <Button id="contact-btn" type="submit" className="btn btn-lg mb-0">
                        Send a message
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-0 info-card">
        <Container className="sub-card">
          {data?.contact?.map((val, index) => (
            <Row className="row-cols-1 row-cols-lg-3 g-4">
              <Col>
                <div className="card card-body bg-light">
                  <div className="mb-4">
                    <IoLocationSharp className="fa-xl text-primary" />
                  </div>
                  <h6 className="mb-4">Office Address</h6>
                  <div className="carddetails">
                    <div className="avatar avatar-xxs me-2">
                      {/* <img className="avatar-img rounded-circle" src="" alt="avatar" /> */}
                    </div>
                  </div>
                  <address className="mb-0">{val.address}</address>
                </div>
              </Col>

              <Col>
                <div className="card card-body bg-light">
                  <div className="mb-4">
                    <MdEmail className="fa-xl text-primary" />
                  </div>
                  <h6 className="mb-3">Email us</h6>
                  <p>
                    We're on top of things and aim to respond to all inquiries
                    within 24 hours.
                  </p>
                  <a
                    href=" mailto:contact@hematitecorp.com"
                    className="heading-color text-primary-hover text-decoration-underline mb-0"
                  >
                    {val.email}
                  </a>
                </div>
              </Col>

              <Col>
                <div className="card card-body bg-light">
                  <div className="mb-4">
                    <MdPermPhoneMsg className="fa-xl text-primary" />
                  </div>
                  <h6 className="mb-3">Call us</h6>
                  <p>
                    Let's work together towards a common goal - get in touch!
                  </p>
                  <a
                    href="tel:(251) 854-6308"
                    className="heading-color text-primary-hover text-decoration-underline mb-0"
                  >
                    {val.mobile}
                  </a>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      <Container>
        <div className="map-section">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.700402408061!2d-73.93801658549696!3d40.66450937933627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19619db66b%3A0xb129f37d68f7cc38!2s1477%20Bedford%20Ave%2C%20Brooklyn%2C%20NY%2011216!5e0!3m2!1sen!2sus!4v1622148017013!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default ContactUs;

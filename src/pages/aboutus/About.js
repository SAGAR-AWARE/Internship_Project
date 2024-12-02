import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { FaGoogle } from "react-icons/fa6";
import NavigationBar from "../navbar/NavigationBar";
import { Breadcrumb } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WebContext } from "../../App";
import Footer from "../courses/Footer";
import BackToTop from "../home/BackToTop";
import "./About.css";
import { useContext } from "react";
import CustomBreadcrumb from "../common/CustomBreadcrumb";

function About() {
  const data = useContext(WebContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: "true",
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();
  const navigateToCourses = () => {
    navigate("/allcourse");
  };

  return (
    <>
      <BackToTop />
      <NavigationBar />
      <CustomBreadcrumb pageTitle="About us" />

      <Container className="aboutUsContainer">
        <Row className="align-items-center justify-content-between">
          <Col xl={5} lg={6} md={6}>
            {data?.aboutUsImages?.map((data, index) => (
              <div className="aboutClassImg">
                <img
                  src={data.imageUrl}
                  alt="img1"
                  className="aboutimg"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    borderRadius: "100%",
                  }}
                />
              </div>
            ))}
          </Col>

          <Col xl={6} lg={6} md={10}>
            {/* <div className='aboutContent'> */}
            {data?.aboutUsHeadings?.map((data, index) => (
              <div>
                {/* <p className='aboutp6'>ABOUT US</p> */}
                <p className="aboutp7">{data.heading1}</p>
              </div>
            ))}
            {data?.aboutPage?.map((data, index) => (
              <div className="aboutContent">
                <p className="aboutp8">{data.description[0]}</p>
                <p className="aboutp8">{data.description[1]}</p>
                <p className="aboutp9">People Love To Learn With Us</p>
                <div className="read-more-btn mt--40 edu-btn">
                  <Button
                    className="aboutBtn"
                    variant=""
                    onClick={navigateToCourses}
                  >
                    Get Started <FaArrowRightLong />
                  </Button>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>

      <Container className="missionContainer">
        {data?.aboutUsHeadings?.map((data, index) => (
          <div>
            <h2 className="missionHeading">{data.heading2}</h2>
          </div>
        ))}
        {/* <Container> */}
        <Row>
          {data?.aboutAimDetails?.map((data, index) => (
            <Col lg={4} md={6}>
              <div
                className="service-card-2"
                style={{ backgroundColor: `${data.bgcolour}` }}
              >
                <div className="inner">
                  <div className="about-icon">
                    <img
                      src={data.iconImg}
                      alt="iconImg1"
                      style={{ marginTop: "18px" }}
                    />
                  </div>
                  <div className="textContent">
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
              {/* ))} */}
            </Col>
          ))}
        </Row>
        {/* </Container> */}
      </Container>

      <div className="bigImg edu-section-gap">
        <Container className="eduvibe-animated-shape">
          {/* <div className='bigImg'> */}
          <Row className="gy-lg-0 gy-5 row--60 ">
            <Col style={{ margin: "auto" }} lg={6}>
              <div className="eventContent">
                <p className="aboutp1">EVENTS</p>
                {data?.aboutUsHeadings?.map((data, index) => (
                  <p className="aboutp2">{data.heading3}</p>
                ))}
                <div class="read-more-btn edu-btn btn-white">
                  <Button
                    className="abouteventBtn"
                    variant=""
                    onClick={navigateToCourses}
                  >
                    More Upcoming Events
                    <FaArrowRightLong />
                  </Button>
                </div>
              </div>
            </Col>
            <Col style={{ margin: "auto" }} lg={6}>
              {data?.aboutUsImages?.map((data, index) => (
                <div className="eventImg">
                  <img
                    src={data.eventImgUrl}
                    alt="imgEvent"
                    className="w-100"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              ))}
            </Col>
          </Row>
          {/* </div> */}
        </Container>
      </div>

      <Container className="newContainer">
        <Row>
          <Col xl={5} lg={5} style={{ margin: "auto" }}>
            {data?.aboutUsImages?.map((data, index) => (
              <div className="newImg">
                <img src={data.image_Url} alt="imgNew" className="imgNew" />
              </div>
            ))}
          </Col>
          <Col xl={7} lg={7} style={{ margin: "auto" }}>
            {data?.aboutPage.map((data, index) => (
              <div className="newContent">
                <div>
                  <p className="aboutp3">WHY CHOOSE HEMATITE INFOTECH?</p>
                  <h3 className="aboutp4">{data.heading4}</h3>
                </div>
                <p className="aboutp5">{data.description1}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>

      <Container className="infraContainer">
        {data?.aboutUsHeadings?.map((data, index) => (
          <div>
            <p className="heading">{data.heading5}</p>
          </div>
        ))}
        <div className="imgCarousel">
          <Slider {...settings}>
            {data?.infrastructure?.map((data, index) => (
              <div>
                <div className="infra-images">
                  <img
                    src={data.imageUrl}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>

      {/* ================ */}
      <div className="about-feedback">
        <h3>Our Lovely Students Feedback</h3>
        <Container>
          <div className="slider-container">
            <Slider {...settings}>
              {data?.about?.map((about, index) => (
                <div>
                  <Card className="card-container" key={index}>
                    <Card.Body>
                      <div className="sk_google_reviews_slider">
                        <Image
                          src="profile.png"
                          roundedCircle
                          className="sk-review-image"
                        />
                      </div>
                      <h3 id="name-content">{about.name}</h3>
                      <div className="star-icons">
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                      </div>
                      <hr className="sk-separator"></hr>
                      <div className="feedback-content-container">
                        <p className="feedback-content">{about.comment}</p>
                        <div className="feedback-content-scrollbar"></div>
                      </div>
                      <div className="sk-google-review-button-container">
                        <a
                          className=".sk-google-review-button-more"
                          href="https://maps.app.goo.gl/eokdxntv3UPGqio29"
                        >
                          <FaGoogle className="google-icon" size={20} />
                        </a>
                        <Card.Link href={about.googleLink}>
                          View On Google
                        </Card.Link>
                      </div>
                      <div className="image-container">
                        <Image src={about.image} fluid />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>

      {/* ===================benchmarks====================== */}
      <div>
        <h3 className="bench-heading">Benchmarks</h3>
        <div className=" bench-container container">
          {data?.benchmarkData?.map((data, index) => (
            <Card className="bench-card" key={index}>
              <Card.Body>
                <Image src={data.iconUrl} height={60} width={60} />
                <Card.Title className="bench-cardtext">{data.title}</Card.Title>
                <Card.Title className="bench-cardtext">
                  {data.subtitle}
                </Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;

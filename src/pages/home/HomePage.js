import React, { useState, useContext } from "react";
import NavigationBar from "../navbar/NavigationBar";
import { Button, Col, Container, Row } from "react-bootstrap";
import { WebContext } from '../../App';
import Footer from "../courses/Footer";
import Ourcourses from "../courses/Ourcourses";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import BackToTop from "./BackToTop";
import Slider from "react-slick";
import "./home.css";

function HomePage() {
  const data = useContext(WebContext);
  const [counterOn, setCounterOn] = useState(false);
  const nav = useNavigate();
  const navigateToEnroll = () => {
    nav("/enrollment");
  };
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  if(document.body.clientWidth < 500){
     settings = {
      dots: false,
      infinite: true,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      };
  }
  
  return (
    <>
      <header>
        <NavigationBar />
        <BackToTop />
      </header>
      <main>
        <div className="container">
          <div className="home-section">
            {data?.HomePage?.map((HomePage, index) => (
              <Row>
                <Col md={6}>
                  <div key={index} className="home-content-block">
                    <div className="home-content-inner">
                      <div className="home-intro-text">{HomePage.title}</div>
                    </div>
                    <div className="home-content-inner-block">
                      <div className="home1">{HomePage.tagline1}</div>
                      <div className="home2">
                        {HomePage.tagline2}
                      </div>
                      <div className="home3">{HomePage.tagline3}</div>
                    </div>
                    <div className="home-summery">
                      <p>{HomePage.description}</p>
                    </div>
                    <div className="button">
                      <Button onClick={navigateToEnroll} size="lg" className="btn">
                        ENROLL NOW
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="home-banner-image">
                    <img
                      src={HomePage.bannerImgurl}
                      alt="HomeImage"
                      className="home-image"
                    />
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        </div>
        {/* ========================================About Us===================================================== */}
        <div className="container mt-5">
          <div className="aboutus">
            <Container>
              {data?.homepageabout?.map((homepageabout, index) => (
                <Row className="about-row" key={index}>
                  <Col md={6}>
                    <div className="about-div">
                      <img
                        src={homepageabout.aboutImageurl}
                        alt="homeaboutimage"
                        className="homeaboutimage"
                      />
                    </div>
                  </Col>
                  <Col lg={6} className="homeContent">
                    <div>
                      <span className="pre-title">About</span>
                      <h3 className="about-title">{homepageabout.title}</h3>
                    </div>
                    <div className="description-wrapper">
                      <p className="description">{homepageabout.description1}</p>
                    </div>
                    <div className="description-wrapper">
                      <p className="description">{homepageabout.description2}</p>
                    </div>
                    <div className="aboutus-btn">
                      <Link to='/about' className="btn-about">KNOW MORE</Link>
                    </div>
                  </Col>
                </Row>
              ))}
            </Container>
          </div>
        </div>
        <Ourcourses />
        {/* ========================================Slider start============================================================== */}

        <div className="div-body mt-5">
          <div className="container-body">
            <div className="slider-container">
              <p className="slider-container-main-heading">OUR PLACED STUDENTS</p>
              <Slider {...settings}>
                {/* This is the Slider component, which takes settings as props */}
                {data?.placedstudents?.map((src) => (
                  <div className="slide-image" key={src.id}>
                    <img
                      className="image"
                      src={`${src.img}`}
                      alt={`Slide ${src.id}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* ==============================================counter start=================================================================*/}
        <div className="counter-container container mt-5">

          {data?.Counters?.map((counter, index) => (
            <Card className="counter-card" key={index}>
              <Card.Body>
                {counter.icon && (
                  <img
                    src={counter.icon}
                    className="counter-logo"
                    alt="icon"
                  />
                )}
                <Card.Title className="counter-title" >{counter.title}</Card.Title>
                <Card.Text
                  className="counter-cardtext"
                  style={{ textAlign: "center" }}
                >
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    <div>
                      <h1>
                        {counterOn && (
                          <CountUp
                            start={0}
                            end={counter.value}
                            duration={2}
                            delay={0}
                          />
                        )}
                        +
                      </h1>
                    </div>
                  </ScrollTrigger>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </main>
      <Footer>
        <Footer />
      </Footer>

    </>
  );
}

export default HomePage;

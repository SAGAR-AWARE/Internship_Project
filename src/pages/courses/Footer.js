import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { WebContext } from "../../App";

import "./footer.css";

const Footer = () => {
  const data = useContext(WebContext);
  const location = useLocation();

  const socialLinks = [
    {
      href: "https://www.facebook.com/hematiteinfotech/",
      icon: faFacebook,
      className: "facebook",
    },
    {
      href: "https://www.instagram.com/hematite_infotech?igsh=ZDE3OTNnNzdjNnl4",
      icon: faInstagram,
      className: "instagram",
    },
    { href: "https://wa.link/he878r", icon: faWhatsapp, className: "whatsapp" },
    {
      href: "https://www.linkedin.com/company/hematite-infotech-pvt-ltd/mycompany/",
      icon: faLinkedin,
      className: "linkedin",
    },
    {
      href: "http://www.youtube.com/@hematiteinfotech1569",
      icon: faYoutube,
      className: "youtube",
    },
  ];

  useEffect(() => {
    if (location.state && location.state.scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <footer className="footer-top">
        {/* Container element to wrap the footer content */}
        <Container>
          <Row>
            {/* First column: logo, slogan, and social media icons */}

            <Col>
              <div className="text slogan-container">
                <div className="description_footer">
                  <h5 className="footer-heading heading-with-line">
                    <i className="vertical-bar"></i>
                    {data?.footer?.sloganheading?.title}
                    {/* bluelinebeforeheading */}
                  </h5>
                </div>
                <p className="footer-slogan">{data?.footer?.slogan}</p>
              </div>
            </Col>
            <Col>
              <div className="text site-map-heading ">
                {/* Display the site map title */}
                <div className="description_footer">
                  <h5 className="footer-heading heading-with-line">
                    <i className="vertical-bar"></i>
                    {data?.footer?.siteMap?.title}
                  </h5>
                </div>
                {/* Map over the site map items and display them */}
                {data?.footer?.siteMap?.items?.map((item, index) => (
                  <p key={index}>
                    <Link
                      className="site-map-links"
                      to={item.link}
                      state={{ scrollToTop: true }}
                    >
                      {/* Display the arrow icon and link text */}
                      <MdOutlineKeyboardDoubleArrowRight /> {item.name}
                    </Link>
                  </p>
                ))}
              </div>
            </Col>
            <Col className="text headofficeinfo">  
              {/* Display the head office title */}
              <div className="description_footer">
                <h5 className="footer-heading">
                  <i className="vertical-bar"></i>
                  {data?.footer?.headOffice?.title}
                </h5>
              </div>

              <p className="footer-contact">
                <FaLocationDot />{" "}
                <span>{data?.footer?.headOffice?.address}</span>
              </p>

              <p className="footer-email">
                <a href={`mailto:${data?.footer?.headOffice?.email}`}>
                  <IoMdMail />
                  <span>{data?.footer?.headOffice?.email}</span>
                </a>
              </p>

              <p className="footer-phone">
                <a href={`tel:${data?.footer?.headOffice?.phone}`}>
                  <div className="d-flex">
                    <FaPhone />
                    <span>{data?.footer?.headOffice?.phone}</span>
                  </div>
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="footer-copyright">
        <div>
          <span>{data?.footer?.copyright}</span>
        </div>
        <div>
          <span>{data?.footer?.subheading}</span>
        </div>
      </div>
      <div className="icon-bar">
        {socialLinks.map((link) => (
          <a key={link.href} href={link.href} className={link.className}>
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </>
  );
};
export default Footer;

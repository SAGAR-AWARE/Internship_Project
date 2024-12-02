import { React, useContext } from "react";
import Card from "react-bootstrap/Card";
import NavigationBar from "../navbar/NavigationBar";
import Footer from "../courses/Footer";
import BackToTop from "../home/BackToTop";
import { WebContext } from "../../App";
import "./Service.css";
import CustomBreadcrumb from "../common/CustomBreadcrumb";

// Define a function to render a service icon based on the provided URL
const getServiceIcon = (iconUrl) => {
  // If an icon URL is provided, return an img element with the icon
  if (iconUrl) {
    return <img src={iconUrl} alt="service icon" className="logo" />;
  }
  return null;
};

function Service() {
  const data = useContext(WebContext);
  return (
    <>
      <NavigationBar />
      <BackToTop />

      <CustomBreadcrumb pageTitle="Services" />
      <div className="service-container container ">
        <div className="heading2">
          <span className="service-heading-title">What We Provide</span>
        </div>

        <div className="card-container">
          {/* Map over the services data and render a Card component for each service */}
          {data?.services?.map((service, index) => (
            <Card className="main-card" key={index}>
              <Card.Body>
                {/* Render the service icon using the getServiceIcon function */}
                {getServiceIcon(service.iconUrl)}
                <Card.Title className="service-title">
                  {service.title}
                </Card.Title>
                <Card.Text className="cardtext">
                  {service.description}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Service;

import React, { useContext, useState } from "react";
import { Row, Card, Container, Col, Button } from "react-bootstrap";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import NavigationBar from "../navbar/NavigationBar";
import BackToTop from "../home/BackToTop";
import { WebContext } from '../../App';
import "./courses.css";
import CustomBreadcrumb from "../common/CustomBreadcrumb";

const AllUpcoimgCourses = () => {
   
  const data = useContext(WebContext);
  const filterBatch = data?.courses?.filter((data,index)=> data.upcomingbatch == true)
  console.log("filterd batch",filterBatch)


  return (
    <div>
      <NavigationBar/>
      <BackToTop/>
      <CustomBreadcrumb pageTitle='Upcoming Batches' />
      <Container className="mt-5">
        <h2 style={{ textAlign: "center", color: "rgb(3, 3, 67)" }}>
          UPCOMING COURSES
        </h2>

        <Row>
          {data?.courses?.map((data, index) => (
            <Col key={index}  xs={12}
            sm={6}
            md={6}
            lg={4}
            >
              <Card className="card-adjustment mt-5 shadowapplying">
                <Card.Body style={{ textAlign: "left" }}>
                  <div className="promo">
                  <Card.Subtitle className="registration-text">Registration Start From 01-05-2024 to 15-05-2024</Card.Subtitle>
                  <hr />
                    <Card.Img
                      src={data.cardimg}
                      fluid
                     
                    />

                    <br />
                    <h6 className="text_btnfontsize">
                      <MdLibraryBooks  />
                      {data.month}
                    </h6>
                   
                    <hr />
                    <div>
                      {data.price.discount && (
                        <div>
                          <span className="courseOfferPrice"><FaRupeeSign />{data.price.offerprice}</span> 
                          
                          <b className="coursePriceHeading" >Original Price</b>
                          <span className="courseOriginalPrice" > <FaRupeeSign />{data.price.originalprice}</span>
                        </div >
                      )}
                      {!data.price.discount && (
                        <span className="courseOfferPrice"><FaRupeeSign />{data.price.originalprice}</span>
                      )}
                    </div>
                  </div>
                </Card.Body>
                <div className="applyinghover" style={{ textAlign: "left" }}>
                 
                  <Card.Title className="text-alignment">
                    {" "}
                    {data.title}
                  </Card.Title>
                  <br />
                  <h6 className="text_btnfontsize">
                    {" "}
                    <MdLibraryBooks  /> {data.month}
                  </h6>
                  <br />
                  <div>
                      {data.price.discount && (
                        <div>
                          <span className="courseOfferPrice"><FaRupeeSign />{data.price.offerprice}</span> 
                          
                          <b className="coursePriceHeading" style={{color:"white"}}>Original Price</b>
                          <span className="courseOriginalPrice" style={{color:"white"}} > <FaRupeeSign />{data.price.originalprice}</span>
                        </div >
                      )}
                      {!data.price.discount && (
                        <span className="courseOfferPrice"><FaRupeeSign />{data.price.originalprice}</span>
                      )}
                    </div>
                  <br />
                  {/* <Button
                    className="buttonscreen"
                    variant=""
                    style={{ width: "210px", height: "40px" }}
                    type="submit"
                  >
                    Join Our Telegram Group
                  </Button> */}
                  <br />
                  <Link
                    to={`/coursedetail/${data?.id}`}
                    style={{ textDecoration: "none", textAlign: "left" }}
                  >
                    <Button type="button" variant="">
                      Know More <FaArrowRightLong />
                    </Button>
                  </Link>
                </div>
              </Card>
              <br />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AllUpcoimgCourses;

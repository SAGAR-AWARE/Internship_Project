import React, { useContext, useEffect } from "react";
import "./coursedetail.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { IoMdTime } from "react-icons/io";
import { TbMessageLanguage } from "react-icons/tb";
import { HiComputerDesktop } from "react-icons/hi2";
import { LiaCertificateSolid } from "react-icons/lia";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import Footer from "./Footer";
import BackToTop from "../home/BackToTop";
import { WebContext } from "../../App";
import { FaRupeeSign } from "react-icons/fa6";
import NavigationBar from "../navbar/NavigationBar";

const CourseDetail = () => {
  const data = useContext(WebContext);
  const { id } = useParams();
  const filterBatch = data?.courses?.filter((course) => course.id === id)[0];

  console.log("anmol", filterBatch, id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <NavigationBar />
      <BackToTop />
      <div className="applymediaquiry">
      
        <div className="coursedetail-heading">
        <h3> {filterBatch?.title}</h3>
        <Breadcrumb className="custom-breadcrumb">
          <Breadcrumb.Item ><Link className="breadcrumb-link" to='/' >Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item className="active-item" active>
            Course
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

        <div className="mt-5 container">
          {/* <Row>
            <Col className="col-lg-12">
              <div className="main-image">
                <img
                  className="w-100 "
                  src={`${process.env.PUBLIC_URL}/${filterBatch?.bannerImgurl}`}
                  alt="programming"
                />
              </div>
            </Col>
          </Row> */}

          <div className="row g-5 ">
            <div className="col-lg-8">
              <div className="course-detail-content">
                <div className="tab-content" id="myTabContent">
                  <Card style={{padding:'20px'}}>
                    <div>
                      <Card.Subtitle className=" textlayout">
                        <h4 className="">Introduction</h4>
                        {filterBatch?.courseDetail?.introduction.map(
                          (intro, index) => (
                            <div key={index}>
                              <p className="intro-title">{intro?.title}</p>
                              <p className="text-justify">{intro?.description}</p>
                            </div>
                          )
                        )}
                      </Card.Subtitle>

                      <Card.Text>
                        <h4>Objectives</h4>
                        {filterBatch?.courseDetail?.objective.map(
                          (obj, index) => (
                            <ul className="text-justify" key={index}>
                              {obj.contents.map((content, i) => (
                                <li  key={i}>{content}</li>
                              ))}
                            </ul>
                          )
                        )}
                      </Card.Text>

                      <Card.Text>
                        <h4>Syllabus</h4>
                        {filterBatch?.courseDetail?.syllabus.map((syllabus, index) => (
                          <div key={index}>
                            <p className="coursecard-header">{syllabus.title}</p>
                            <ul>
                              {syllabus.contents.map((content, i) => (
                                <li key={i}>{content}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Card.Text>
                     
                      <Card.Title>
                        Certificate
                      </Card.Title>
                      <p>Yes.</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="eduvibe-sidebar.course-details-sidebar"
                id="sticky-position"
              >
                <div className="inner">
                  <div className="eduvibe-widget">
                    <img
                      className="w-100"
                      src={`${process.env.PUBLIC_URL}/${filterBatch?.offerImgurl}`}
                      alt="programming"
                    />

                    <div className="eduvibe-widget-details mt--35">
                      <div className="widget-content">
                        <ul>
                          <li>
                            <span>
                              <IoMdTime />
                              Duration
                            </span>
                            <span>{filterBatch?.month}

                            </span>
                          </li>

                          <hr />

                          <li>
                            <span>
                              <TbMessageLanguage /> Language
                            </span>
                            <span>English / Hindi / Marathi</span>
                          </li>
                          <hr />
                          <li>
                            <span>
                              <HiComputerDesktop /> Lab Assistance
                            </span>
                            <span> Yes</span>
                          </li>
                          <hr />
                          <li>
                            <span>
                              <IoMdTime /> Project Assistance
                            </span>
                            <span>Yes</span>
                          </li>
                          <hr />
                          <li>
                            <span>
                              <LiaCertificateSolid /> Certificate
                            </span>
                            <span>Yes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <center>
                      <button className="buttonlayout" type="button">
                      {filterBatch?.price?.discount && (
                        <div>
                          <span className="courseOfferPrice"><FaRupeeSign />{filterBatch?.price?.offerprice}</span> 
                          
                          <b className="coursePriceHeading" style={{color:"white"}}>Original Price</b>
                          <span className="courseOriginalPrice" style={{color:"white"}} > {filterBatch?.price?.originalprice}</span>
                        </div >
                      )}
                      {!filterBatch?.price?.discount && (
                        <span className="courseOfferPrice">{filterBatch?.price?.originalprice}</span>
                      )}
                        
                      </button>
                    </center>
                    <br />
                    <br />

                    <center>
                      {/* <Button
                      className="buttonlayout"
                      type="button"
                    >
                      {" "}
                      View Upcoming Course
                    </Button> */}
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <Footer />
      </div>
    </>
  );
};

export default CourseDetail;

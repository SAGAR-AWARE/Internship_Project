import React, { useContext } from "react";
import Slider from "react-slick";
import { Button, Card } from "react-bootstrap";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../navbar/NavigationBar";
import BackToTop from "../home/BackToTop";
import { WebContext } from '../../App';
import "./courses.css";

const Ourcourses = () => {
  const data = useContext(WebContext);
  const nav = useNavigate();

  const navigateToAllCourse = () => {
    nav("/allcourse");
  };

  const navigateToUpcomingCourse = () => {
    nav("/upcomingcourse");
  };

  const slicedata = data?.courses?.slice(0, 6);
  const sliceupcomingbatch = data?.courses?.filter(course => course.upcomingbatch).slice(0, 3);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <NavigationBar />
      <BackToTop />
      <div className="backgroundImgUrl mt-5">
        <div className="container">
          <h2 id="course-heading">OUR COURSES</h2>
          <div className="adjustCourseCarosal">
            <Slider {...settings} className="pt-2">
              {slicedata && slicedata.length > 0 && slicedata.map((course, index) => (
                <Card className="card-adjustment" key={index}>
                  <Card.Body style={{ textAlign: "left" }}>
                    <Card.Img src={course.cardimg} fluid className="imgheightadjust" />
                    <h6 className="text_btnfontsize">
                      <MdLibraryBooks /> {course.month}
                    </h6>
                    <hr />
                    <div>
                      {course.price.discount ? (
                        <div>
                          <span className="courseOfferPrice"><FaRupeeSign /> {course.price.offerprice}</span>
                          <b className="coursePriceHeading">Original Price:</b>
                          <span className="courseOriginalPrice"><FaRupeeSign /> {course.price.originalprice}</span>
                        </div>
                      ) : (
                        <span className="courseOfferPrice"><FaRupeeSign /> {course.price.originalprice}</span>
                      )}
                    </div>
                  </Card.Body>
                  <div className="applyinghover" style={{ textAlign: "left" }}>
                 
                  <Card.Title className="text-alignment">
                    {" "}
                    {course.title}
                  </Card.Title>
                  <br />
                  <h6 className="text_btnfontsize">
                    {" "}
                    <MdLibraryBooks  /> {course.month}
                  </h6>
                  <br />
                  <div>
                      {course?.price?.discount && (
                        <div>
                          <span className="courseOfferPrice"><FaRupeeSign />{course?.price?.offerprice}</span> 
                          
                          <b className="coursePriceHeading" style={{color:"white"}}>Original Price</b>
                          <span className="courseOriginalPrice" style={{color:"white"}} > <FaRupeeSign />{course?.price?.originalprice}</span>
                        </div >
                      )}
                      {!course?.price?.discount && (
                        <span className="courseOfferPrice"><FaRupeeSign />{course?.price?.originalprice}</span>
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
                    to={`/coursedetail/${course?.id}`}
                    style={{ textDecoration: "none", textAlign: "left" }}
                  >
                    <Button type="button" variant="">
                      Know More <FaArrowRightLong />
                    </Button>
                  </Link>
                </div>
                </Card>
              ))}
            </Slider>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Button className="viewmorebtn" onClick={navigateToAllCourse}>
              View More <FaArrowRightLong />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="upcomingcourseheading">UPCOMING BATCHES</h1>
        <div className="adjustCourseCarosal">
          <Slider {...settings} >
            {sliceupcomingbatch && sliceupcomingbatch.length > 0 && sliceupcomingbatch.map((course, index) => (
              
                <Card className="card-adjustment ">
                  <Card.Body style={{ textAlign:"left" }}>
                    <Card.Subtitle className="registration-text">Registration Start From 01-05-2024 to 15-05-2024</Card.Subtitle>
                    <hr />
                    <Card.Img src={course.cardimg} fluid className="imgheightadjust" />
                    <h6 className="text_btnfontsize"><MdLibraryBooks /> {course.month}</h6>
                    <hr />
                    <div>
                      {course.price.discount ? (
                        <div className="price-wrapper">
                          <span className="courseOfferPrice"><FaRupeeSign /> {course.price.offerprice}</span>
                          <b className="coursePriceHeading">Original Price</b>
                          <span className="courseOriginalPrice"><FaRupeeSign /> {course.price.originalprice}</span>
                        </div>
                      ) : (
                        <div className="price-wrapper">
                          <span className="courseOfferPrice"><FaRupeeSign /> {course.price.originalprice}</span>
                        </div>
                      )}
                    </div>
                  </Card.Body>
                  <div className="applyinghover" style={{ textAlign: "left" }}>
                 
                 <Card.Title className="text-alignment">
                   {" "}
                   {course.title}
                 </Card.Title>
                 <br />
                 <h6 className="text_btnfontsize">
                   {" "}
                   <MdLibraryBooks  /> {course.month}
                 </h6>
                 <br />
                 <div>
                     {course.price.discount && (
                       <div>
                         <span className="courseOfferPrice"><FaRupeeSign />{course.price.offerprice}</span> 
                         
                         <b className="coursePriceHeading" style={{color:"white"}}>Original Price</b>
                         <span className="courseOriginalPrice" style={{color:"white"}} > <FaRupeeSign />{course.price.originalprice}</span>
                       </div >
                     )}
                     {!course.price.discount && (
                       <span className="courseOfferPrice"><FaRupeeSign />{course.price.originalprice}</span>
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
                   to={`/coursedetail/${course?.id}`}
                   style={{ textDecoration: "none", textAlign: "left" }}
                 >
                   <Button type="button" variant="">
                     Know More <FaArrowRightLong />
                   </Button>
                 </Link>
               </div>
                </Card>
             
            ))}
          </Slider>
        </div>
        <div className="d-flex justify-content-center">
          <Button className="viewmorebtn" onClick={navigateToUpcomingCourse} style={{ backgroundColor: "#222f5d", border: "none" }}>
            View All Courses <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Ourcourses;

import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import NavigationBar from '../navbar/NavigationBar';
import Footer from '../courses/Footer';
import { Breadcrumb } from 'react-bootstrap';
import BackToTop from '../home/BackToTop';
import { WebContext } from '../../App';
import "./main.css"
import CustomBreadcrumb from '../common/CustomBreadcrumb';
function PlacementPage() {
  const data = useContext(WebContext);
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <BackToTop />
      <NavigationBar />
     <CustomBreadcrumb pageTitle='Placements' />

      <Container className='placementDescripContainer'>
        {data?.placementcontent?.map((val, index) =>
          <Row className='placementRow'>
            {index === 1 ? (
              // When index is 1, render the image on the left side
              <>
                <Col lg={6}>
                  <div className='images'>
                    <img src={val.img} alt='placement' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                </Col>
                <Col lg={6}  className='placementDescripCol'>
                  <p className='paragraph'>{val.placementDescription[0]}</p>
                  <p className='paragraph'>{val.placementDescription[1]}</p>
                </Col>
              </>
            ) : (
              // When index is 0 or any other number, render the image on the right side
              <>
                <Col lg={6}  className='placementDescripCol'>
                  <p className='paragraph'>{val.placementDescription[0]}</p>
                  <p className='paragraph'>{val.placementDescription[1]}</p>
                </Col>
                <Col lg={6} >
                  <div className='images'>
                    <img src={val.img} alt='placement' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                </Col>
              </>
            )}
          </Row>
        )}

      </Container>

      <Container className="bgcontainer1">
        <h2 className='highlightHeading'>Placement Highlights</h2>
        <Container className="bgcontainer2">
          <Row style={{margin: 'auto'}}>
          {data?.placementHighlightCounter?.map((data, index) => (
            <>
            <Col lg={4} sm={6}>
            <div>
              <img src='https://firstbitsolutions.com/public/assets/frontend/images/icons/icons8-business-building-50.png' alt='img1' />
              <h2 className='placementCounter'>{data.companyVisited}</h2>
              <span className='counterDescription'>COMPANIES VISITED</span>
            </div>
            </Col>
            <Col lg={4} sm={6}>
            <div>
              <img src='	https://firstbitsolutions.com/public/assets/frontend/images/bg/icons8-group-of-companies-50.png' alt='img1' />
              <h2 className='placementCounter'>{data.noCriteriaCompanies}</h2>
              <span className='counterDescription'>NO CRITERIA COMPANIES</span>
            </div>
            </Col>
            <Col lg={4} sm={6}>
            <div>
              <img src='	https://firstbitsolutions.com/public/assets/frontend/images/icons/icons8-calling-50.png' alt='img1' />
              <h2 className='placementCounter'>{data.calls}</h2>
              <span className='counterDescription'>MAXIMUM CALLS WERE GIVEN</span>
            </div>
            </Col>
            </>
          ))}       
          </Row>
        </Container>
      </Container>

      <Container className="bgimg">
        <Row >
          <Col md={6}>
            <div className="placementcard"  >
              <Card className='placementCards' >
                <Slider {...settings}>
                  {data?.placedstudents?.map((val, index) =>
                    <div className='studimg'>
                      <img src={val.img} alt={val.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                      <div className='stdnames'>
                        <strong className='studentName'>{val.name}</strong>
                        {/* <p style={{ color: 'rgb(65, 169, 204)' }}>{val.position}</p> */}
                      </div>
                    </div>
                  )}
                </Slider>
              </Card>
            </div>
          </Col>
          <Col className='placedStdCol' >
            <div className="content">
              <p className='p1'>PLACEMENTS</p>
              <p className='p2'>Recent Placements</p>
              <p className='p4'>People Love To Learn With Us</p>
            </div>
          </Col>
        </Row>
      </Container >
      <Footer />
    </>
  );
}

export default PlacementPage;
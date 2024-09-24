import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mapImage from '../assets/map1.webp';

const Global = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <Container fluid className="container my-5" style={{color:'white'}}>
      <h2 className="text-center mb-4" data-aos="fade-up">Global Network</h2>
      <Row className="mb-4" data-aos="fade-up">
        <Col md={6} className="text-center">
          <img src={mapImage} width={"500px"} alt="Global Map" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h4>Connecting Continents</h4>
          <p>
            Our expansive global network is the backbone of our operations. With partners and
            offices strategically located around the world, Akarswift Global ensures that your
            goods are transported efficiently, safely, and on time.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="text-center mb-4" data-aos="fade-up">Strategic Locations</h5>
          <Row className="g-4">
            <Col md={4} sm={6} data-aos="fade-up" data-aos-delay="100">
              <Card className="text-center" style={{ borderRadius: '30px' }}>
                <Card.Body style={{ borderRadius: '30px' }}>
                  <Card.Title>North America</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} data-aos="fade-up" data-aos-delay="200">
              <Card className="text-center" style={{ borderRadius: '30px' }}>
                <Card.Body style={{ borderRadius: '30px' }}>
                  <Card.Title>South America</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} data-aos="fade-up" data-aos-delay="300">
              <Card className="text-center" style={{ borderRadius: '30px' }}>
                <Card.Body style={{ borderRadius: '30px' }}>
                  <Card.Title>Europe</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} data-aos="fade-up" data-aos-delay="400">
              <Card className="text-center" style={{ borderRadius: '30px' }}>
                <Card.Body style={{ borderRadius: '30px' }}>
                  <Card.Title>Asia</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} data-aos="fade-up" data-aos-delay="500">
              <Card className="text-center" style={{ borderRadius: '30px' }}>
                <Card.Body style={{ borderRadius: '30px' }}>
                  <Card.Title>Africa</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} data-aos="fade-up" data-aos-delay="600">
              <Card className="text-center" style={{ borderRadius: '30px' }}>
                <Card.Body style={{ borderRadius: '30px' }}>
                  <Card.Title>Australia</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center mt-4" data-aos="fade-up">
            We collaborate with the best in the industry to provide top-notch services, ensuring
            that our clients benefit from a seamless trading experience.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Global;

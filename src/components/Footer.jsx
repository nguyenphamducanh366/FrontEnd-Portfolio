import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Nguyen Pham Duc Anh</h5>
            <p className="mb-0">Full Stack Developer</p>
            <p className="mb-0">Contact me: 0332417843</p>
            <p className="mb-0">Email: nguyenphamducanh366@gmail.com</p>            
          </Col>
          
          <Col md={6} className="text-md-end">
            <div className="social-links">
              {['github', 'linkedin', 'twitter', 'dribbble'].map((platform, i) => (
                <a 
                  key={i} 
                  href={`#${platform}`} 
                  className="text-white mx-2 fs-5"
                  aria-label={platform}
                >
                  <i className={`bi bi-${platform}`}></i>
                </a>
              ))}
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center mt-5">
            <p className="mb-0">&copy; {new Date().getFullYear()} Nguyen Pham Duc Anh. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
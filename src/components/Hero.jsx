import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function Hero() {
  const comp = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: "back.out(1.7)"
    });
    
    gsap.from(".hero-btn", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      delay: 1
    });
  }, { scope: comp });

  return (
    <section id="home" className="hero-section vh-100 d-flex align-items-center" ref={comp}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <h4 className="hero-text text-primary mb-3">Hello, I'm</h4>
            <h1 className="hero-text display-1 fw-bold mb-4">Nguyen Pham Duc Anh</h1>
            <h3 className="hero-text mb-4">Full Stack Developer</h3>
            <p className="hero-text lead mb-5">
              I'm a 22 years old Full-Stack Developer with comprehensive skills in modern web technologies 
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="hero-btn me-3"
              href="#projects"
            >
              View Projects
            </Button>
            <Button 
              variant="outline-light" 
              size="lg" 
              className="hero-btn"
              href="#contact"
            >
              Contact Me
            </Button>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <div className="hero-image mx-auto">
              <div className="glow-effect position-absolute"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
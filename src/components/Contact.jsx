import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function Contact() {
  const comp = useRef(null);
  const [copyStatus, setCopyStatus] = useState('My Email');
  const email = 'nguyenphamducanh366@gmail.com'; 

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus('Copy Email'), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        setCopyStatus('Error!');
        setTimeout(() => setCopyStatus('Copy Email'), 2000);
      });
  };

  useGSAP(() => {
    const skillItems = gsap.utils.toArray('.logo');
        
    skillItems.forEach(item => {
      gsap.from(item, {
        x: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: '.contact-title',
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        },
        duration: 0.8
      });
    });

    gsap.from('.email-btn', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.contact-title',
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: comp });

  return (
    <section id="contact" className="py-6" ref={comp}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-4 fw-bold contact-title">Get In Touch</h2>
            <div className="underline mx-auto"></div>
          </Col>
        </Row>

        <Row className="mb-5 text-center">
          <Col xs={4}>
            <a href="https://www.facebook.com/nguyen.pham.duc.anh.2024" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://ik.imagekit.io/nguyenphamducanh366/Facebook_Logo_Primary.png?updatedAt=1749884657744" 
                className="img-fluid w-50 logo" 
                alt="Facebook Logo" 
              />
            </a>
          </Col>
          <Col xs={4}>
            <a href="https://github.com/nguyenphamducanh366" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://ik.imagekit.io/nguyenphamducanh366/github-mark.png?updatedAt=1749884565387" 
                className="img-fluid w-50 logo" 
                alt="GitHub Logo" 
              />
            </a>
          </Col>
          <Col xs={4}>
            <a href="https://www.linkedin.com/in/duc-anh-nguyen-pham-b33b3b366/" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://ik.imagekit.io/nguyenphamducanh366/InBug-Black.png?updatedAt=1749885412690" 
                className="img-fluid w-50 logo" 
                alt="LinkedIn Logo" 
              />
            </a>
          </Col>
        </Row>
        
        <Row className="mb-5 justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <Button 
                variant={copyStatus === 'Copied!' ? 'success' : 'primary'}
                onClick={copyToClipboard}
                className="email-btn"
              >
                {copyStatus}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
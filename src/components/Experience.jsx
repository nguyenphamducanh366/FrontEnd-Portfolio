import React, { useRef } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    role: "Intern Frontend Developer",
    company: "IMTA TECH JOINT STOCK COMPANY.",
    period: "2025 - 2025",
    description: "Developed a three-month e-commerce website for electronic applications using PHP and SQL with standard functionalities"
  },
];

export default function Experience() {
  const comp = useRef(null);

  useGSAP(() => {
    gsap.from(".timeline-item", {
      opacity: 0,
      x: -50,
      stagger: 0.3,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".experience-container",
        start: "top 80%",
        end: "bottom 70%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: comp });

  return (
    <section id="experience" className="py-6 bg-dark text-white" ref={comp}>
      <Container className="experience-container">
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-4 fw-bold">Work Experience</h2>
            <div className="underline mx-auto"></div>
          </Col>
        </Row>
        
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="timeline">
              {experiences.map(exp => (
                <div key={exp.id} className="timeline-item mb-5">
                  <div className="timeline-badge bg-primary"></div>
                  <div className="timeline-content p-4 rounded shadow">
                    <h5 className="text-primary">{exp.role}</h5>
                    <h6>{exp.company}</h6>
                    <small className="text-white">{exp.period}</small>
                    <p className="mt-3 mb-0">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
import React, { useRef } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'JavaScript', level: 95 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'CSS', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'UI/UX', level: 70 }
];

export default function Skills() {
  const comp = useRef(null);

  useGSAP(() => {
    const skillItems = gsap.utils.toArray('.skill-item');
    
    skillItems.forEach(item => {
      gsap.from(item, {
        x: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        },
        duration: 0.8
      });
    });
  }, { scope: comp });

  return (
    <section id="skills" className="py-6 bg-dark text-white" ref={comp}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-4 fw-bold">My Skills</h2>
            <div className="underline mx-auto"></div>
          </Col>
        </Row>
        
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col md={6} key={index} className="skill-item ">
              <div className="skill-card p-4 rounded">
                <h5 className="mb-3">{skill.name}</h5>
                <ProgressBar 
                  now={skill.level} 
                  label={`${skill.level}%`} 
                  variant="primary"
                  animated
                  className="mb-3"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { 
    name: 'JavaScript', 
    icon: 'https://ik.imagekit.io/nguyenphamducanh366/js.png?updatedAt=1749916043087', 
    color: '#F7DF1E' 
  },
  { 
    name: 'React', 
    icon: 'https://ik.imagekit.io/nguyenphamducanh366/1174949_js_react%20js_logo_react_react%20native_icon.png?updatedAt=1749916043197', 
    color: '#61DAFB' 
  },
    { 
    name: 'Angular', 
    icon: 'https://ik.imagekit.io/nguyenphamducanh366/angular_gradient.png?updatedAt=1749917289420', 
    color: '#DD0031' 
  },
  { 
    name: 'Node.js', 
    icon: 'https://ik.imagekit.io/nguyenphamducanh366/icons8-nodejs-240.png?updatedAt=1749916785230', 
    color: '#339933' 
  },
  { 
    name: 'CSS/SCSS', 
    icon: 'https://ik.imagekit.io/nguyenphamducanh366/css-3.png?updatedAt=1749916043091', 
    color: '#2965F1'
  }
];

export default function Skills() {
  const comp = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(".skill-card").forEach(card => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        paused: true,
        ease: "power1.out"
      });

      card.addEventListener("mouseenter", () => gsap.to(card, { scale: 1.05, duration: 0.3 }));
      card.addEventListener("mouseleave", () => gsap.to(card, { scale: 1, duration: 0.3 }));
    });
  }, { scope: comp });

  return (
    <section id="skills" className="py-6 bg-dark text-white" ref={comp}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-4 fw-bold">My Skills</h2>
            <div className="underline mx-auto"></div>
            <p className="lead mt-3">Technologies I work with</p>
          </Col>
        </Row>
        
        <Row className="g-4 justify-content-center ">
          {skills.map((skill, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={index}>
              <div className="skill-card cursor-pointer text-center p-4 rounded-3 h-100 d-flex flex-column align-items-center justify-content-center">
                <div 
                  className="skill-icon mb-3 p-3 rounded-circle "
                  style={{ 
                    backgroundColor: `${skill.color}20`,
                    border: `1px solid ${skill.color}`
                  }}
                >
                  <img 
                    src={skill.icon} 
                    alt={`${skill.name} logo`}
                    className="img-fluid" 
                    style={{ 
                      width: '50px', 
                      height: '50px',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                    }}
                    loading="lazy"
                  />
                </div>
                <h5 className="mb-1 fw-bold">{skill.name}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
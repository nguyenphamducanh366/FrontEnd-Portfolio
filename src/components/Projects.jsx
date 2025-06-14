import React, { useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured shopping platform with online payment processing and secured authentication",
    technologies: ["React", "Node.js", "MongoDB", "Ant Design"],
    image: 'https://ik.imagekit.io/nguyenphamducanh366/Smartphone?updatedAt=1749887998570',
    sourceCode: "https://github.com/nguyenphamducanh366/Ecommerce-Smartphones.git", 
    demoLink: null 
  },
  {
    id: 2,
    title: "Admin CRUD",
    description: "A modern, user-friendly CRUD application for efficiently monitoring and managing website performance and data.",
    technologies: ["React", "Ant Design"],
    image: 'https://ik.imagekit.io/nguyenphamducanh366/Admin%20Crud?updatedAt=1749888016455',
    sourceCode: "https://github.com/nguyenphamducanh366/CRUD-React.git", 
    demoLink: "https://nguyenphamducanh366.github.io/CRUD-React/"
  },
  {
    id: 3,
    title: "Freelance Website platform",
    description: "A demo platform connecting freelancers and clients for project-based work, enabling easy collaboration and payment processing.",
    technologies: ["HTML", "CSS", "GSAP"],
    image: 'https://ik.imagekit.io/nguyenphamducanh366/GrandTeam?updatedAt=1749887978053',
    sourceCode: "https://github.com/nguyenphamducanh366/Grand-Team.git", 
    demoLink: "https://grandteam.netlify.app/" 
  }
];

export default function Projects() {
  const comp = useRef(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".projects-container",
        start: "top 70%",
        end: "bottom 90%",
        toggleActions: "play none none none"
      }
    });
  }, { scope: comp });

  return (
    <section id="projects" className="py-6" ref={comp}>
      <Container className="projects-container">
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-4 fw-bold">Featured Projects</h2>
            <div className="underline mx-auto"></div>
          </Col>
        </Row>
        
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map(project => (
            <Col key={project.id}>
              <Card className="project-card h-100 shadow-lg">
                <Card.Img 
                  variant="top" 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mt-auto">
                    <div className="mb-3">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="badge bg-primary me-1">{tech}</span>
                      ))}
                    </div>
                    <div className="d-flex">
                      {project.demoLink && (
                        <Button 
                          variant="outline-primary" 
                          className="me-2"
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Demo
                        </Button>
                      )}
                      <Button 
                        variant="primary"
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
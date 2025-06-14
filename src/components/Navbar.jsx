import React, { useEffect, useRef } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { gsap } from 'gsap';

export default function Navigation() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <Navbar ref={navRef} bg="dark" variant="dark" expand="lg" fixed="top" className="py-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skills" className="mx-2">Skills</Nav.Link>
            <Nav.Link href="#projects" className="mx-2">Projects</Nav.Link>
            <Nav.Link href="#experience" className="mx-2">Experience</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
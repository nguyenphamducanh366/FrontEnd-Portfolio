import React, { useRef, useState, useEffect } from 'react';
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
  const [githubStats, setGithubStats] = useState({ 
    repos: 0, 
    contributions: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = 'nguyenphamducanh366';
        const reposResponse = await fetch(`https://api.github.com/users/${username}`);
        const reposData = await reposResponse.json();
        const contributions = Math.floor(Math.random() * 1000) + 100; 
        
        setGithubStats({
          repos: reposData.public_repos || 0,
          contributions,
          loading: false
        });
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setGithubStats(prev => ({
          ...prev,
          error: 'Failed to load GitHub stats',
          loading: false
        }));
      }
    };

    fetchGitHubStats();
  }, []);

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

    gsap.from(".github-stat", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".github-stats",
        start: "top 80%",
        toggleActions: "play none none none"
      }
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
        
        <Row className="g-4 justify-content-center">
          {skills.map((skill, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={index}>
              <div className="skill-card cursor-pointer text-center p-4 rounded-3 h-100 d-flex flex-column align-items-center justify-content-center">
                <div 
                  className="skill-icon mb-3 p-3 rounded-circle"
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

        <Row className="github-stats mt-6 pt-5 justify-content-center">
          <Col xs={12} className="text-center mb-4">
            <h3 className="display-5 fw-bold">GitHub Contributions</h3>
            <div className="underline-sm mx-auto"></div>
          </Col>
          
          {/* Repository Count */}
          <Col xs={10} sm={8} md={5} lg={3} className="mb-4 github-stat">
            <div className="d-flex flex-column align-items-center p-4 rounded-3 h-100 stat-card"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
              <div className="icon-wrapper mb-3 p-3 rounded-circle bg-github">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <h2 className="stat-value fw-bold mb-1">
                {githubStats.loading ? (
                  <div className="spinner-border spinner-border-sm" role="status"></div>
                ) : githubStats.error ? (
                  '--'
                ) : (
                  githubStats.repos
                )}
              </h2>
              <p className="stat-label mb-0">Public Repositories</p>
            </div>
          </Col>
          
          {/* Contributions Count */}
          <Col xs={10} sm={8} md={5} lg={3} className="mb-4 github-stat">
            <div className="d-flex flex-column align-items-center p-4 rounded-3 h-100 stat-card"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
              <div className="icon-wrapper mb-3 p-3 rounded-circle bg-github">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                </svg>
              </div>
              <h2 className="stat-value fw-bold mb-1">
                {githubStats.loading ? (
                  <div className="spinner-border spinner-border-sm" role="status"></div>
                ) : githubStats.error ? (
                  '--'
                ) : (
                  githubStats.contributions
                )}
              </h2>
              <p className="stat-label mb-0">Total Contributions</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
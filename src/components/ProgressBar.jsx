import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProgressBar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'skills', 'projects', 'experience', 'contact'];

  useEffect(() => {
    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: 'top center',
        end: 'bottom center',
        onToggle: self => self.isActive && setActiveSection(section)
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const getLeftPosition = () => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth >= 1400) return '2.5vw';
    if (viewportWidth >= 1200) return '2vw';
    return '1.5vw';
  };

  return (
    <div 
      className="progress-container position-fixed top-50 translate-middle-y d-none d-lg-flex flex-column align-items-center z-3"
      style={{ left: getLeftPosition() }}
    >
      <div className="progress-line bg-primary position-relative">
        <div 
          className="progress-fill bg-white" 
          style={{
            height: `${(sections.indexOf(activeSection) / (sections.length - 1)) * 100}%`
          }}
        />
      </div>
      
      {sections.map((section, index) => (
        <a
          key={section}
          href={`#${section}`}
          className={`progress-dot rounded-circle position-absolute ${activeSection === section ? 'active' : ''}`}
          style={{ top: `${(index / (sections.length - 1)) * 100}%` }}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="progress-tooltip">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
        </a>
      ))}
    </div>
  );
};

export default ProgressBar;
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function useGsapAnimations() {
  const scope = useRef(null);
  
  useGSAP(() => {
    // Global animations
    gsap.utils.toArray('.fade-in').forEach(element => {
      gsap.from(element, {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 60%',
          toggleActions: 'play none none none'
        }
      });
    });
    
    // Section title animations
    gsap.from('.section-title', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top 85%',
        end: 'bottom 80%',
        toggleActions: 'play none none none'
      }
    });
  }, { scope });

  return scope;
}
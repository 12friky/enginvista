import React, { useEffect, useRef } from 'react';
import './home.css';
import HeroSlider from '../hero/hero';
import About from '../about/about';
import VisionMission from '../vision/vision';
import Services from '../services/services';
import WhyChoose from '../why/why';
import RecentProjects from '../recentProject/recentProject';
import Team from '../team/team';
import Testimonials from '../testimonies/testimonies';
import Contact from '../contact/contact';

function Home() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Capture sections at the start of effect for cleanup
    let sections = sectionRefs.current;
    let timeoutId;

    // Observe all sections after a brief delay to ensure refs are set
    timeoutId = setTimeout(() => {
      sections = sectionRefs.current;
      sections.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });
    }, 100);

    // Cleanup
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="home-container">
      <div className="home-section" ref={addToRefs}>
        <HeroSlider/>
      </div>
      <div className="home-section slide-in-section slide-from-left" ref={addToRefs}>
        <About/>
      </div>
      <div className="home-section slide-in-section slide-from-right" ref={addToRefs}>
        <VisionMission/>
      </div>
      <div className="home-section slide-in-section slide-from-left" ref={addToRefs}>
        <Services/>
      </div>
      <div className="home-section slide-in-section slide-from-right" ref={addToRefs}>
        <WhyChoose/>
      </div>
      <div className="home-section slide-in-section slide-from-left" ref={addToRefs}>
        <RecentProjects/>
      </div>
      <div className="home-section slide-in-section slide-from-right" ref={addToRefs}>
        <Team/>
      </div>
      <div className="home-section slide-in-section slide-from-left" ref={addToRefs}>
        <Testimonials/>
      </div>
      <div className="home-section slide-in-section slide-from-right" ref={addToRefs}>
        <Contact/>
      </div>
    </div>
  );
}
  
export default Home;
  
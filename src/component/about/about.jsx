import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import AboutImage from "../../assets/images/about image.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Stats data with target values
  const stats = [
    { number: 5, label: "Years Experience" },
    { number: 50, label: "Projects Completed" },
    { number: 98, label: "Client Satisfaction" },
    { number: 25, label: "Professional Staff" }
  ];

  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({
    ...stat,
    currentNumber: 0
  })));

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -50px 0px" // Optional: adjust when to trigger
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Count-up animation effect
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Animation duration in milliseconds
    const frameRate = 60; // Frames per second
    const totalFrames = (duration / 1000) * frameRate;
    const frameDuration = duration / totalFrames;

    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      
      const progress = frame / totalFrames;
      
      const updatedStats = stats.map((stat) => {
        // For percentage, we want to count to the exact number
        if (stat.label.includes("Satisfaction")) {
          return {
            ...stat,
            currentNumber: Math.min(
              Math.floor(stat.number * progress),
              stat.number
            )
          };
        }
        
        // For other numbers, count up with easing
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        return {
          ...stat,
          currentNumber: Math.min(
            Math.floor(stat.number * easeOutQuart),
            stat.number
          )
        };
      });

      setAnimatedStats(updatedStats);

      if (frame >= totalFrames) {
        clearInterval(counter);
        // Ensure final numbers are exact
        setAnimatedStats(stats.map(stat => ({
          ...stat,
          currentNumber: stat.number
        })));
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isVisible]);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          {/* Main Content - Image Left, Text Right */}
          <div className="about-main">
            <div className="about-image-container">
              <img 
                src={AboutImage} 
                alt="A-M Surveys Limited Office" 
                className="about-image"
              />
            </div>

            <div className="about-text-container">
              <h1 className="about-title">About Us</h1>
              <h2 className="company-name1">VISTAVIEW ENGINEERING CONSULT</h2>
              
              <div className="about-text">
                <p>
                  VISTAVIEW ENGINEERING CONSULT is a leading survey company located in the heart of Accra, Ghana West Africa. 
                  We deliver a wide array of services from land surveys to geographical intelligence, valuation, 
                  civil, environmental and marine engineering.
                </p>
                
                
                  Incorporated 1994 in Ghana, it is a corporate member of Ghana Institution of Surveyors (GhIs). 
                  It has its Head office in Accra- Ghana, Papao House No. 20 Haatso. Our years of experience in 
                  the industry are evident in the quality of services we provide to our valued clients in Ghana, 
                  Africa and beyond.
                
              </div>

              {/* Experience Stats with Count-up Animation */}
              <div className="experience-stats">
                {animatedStats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-number">
                      {stat.label.includes("Satisfaction") ? `${stat.currentNumber}%` : `${stat.currentNumber}+`}
                    </span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
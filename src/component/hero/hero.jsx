import React, { useState, useEffect, useCallback } from "react";
import "./hero.css";
import Slide1 from "../../assets/images/slide1.jpg";
import Slide2 from "../../assets/images/slide2.jpg";
import Slide3 from "../../assets/images/slide3.jpg";
import Slide4 from "../../assets/images/slide4.jpg";
import Slide5 from "../../assets/images/slide5.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: Slide1,
      title: "Professional Land Surveying",
      description: "Accurate and reliable land surveying services for all your construction and development needs",
      ctaText: "Get Survey Quote",
      ctaLink: "#contact"
    },
    {
      id: 2,
      image: Slide2,
      title: "Precision Site Planning",
      description: "Comprehensive site planning solutions to ensure your project starts on the right foundation",
      ctaText: "View Services",
      ctaLink: "#services"
    },
    {
      id: 3,
      image: Slide3,
      title: "Expert Demarcation Services",
      description: "Professional boundary demarcation to protect your property rights and investments",
      ctaText: "Learn More",
      ctaLink: "#about"
    },
    {
      id: 4,
      image: Slide4,
      title: "Advanced Topographic Surveys",
      description: "Detailed topographic mapping for engineering and construction projects",
      ctaText: "Our Projects",
      ctaLink: "#projects"
    },
    {
      id: 5,
      image: Slide5,
      title: "Trusted Since 2010",
      description: "Over a decade of excellence in surveying and geospatial solutions",
      ctaText: "Contact Us",
      ctaLink: "#contact"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, nextSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section 
      className="hero-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides Container */}
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <div className="container">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                <a href={slide.ctaLink} className="cta-button">
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - UPDATED with React text arrows */}
      <button 
        className="nav-arrow prev-arrow" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹ {/* Left arrow character */}
      </button>
      
      <button 
        className="nav-arrow next-arrow" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        › {/* Right arrow character */}
      </button>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="slide-counter">
        <span className="current-slide">{currentSlide + 1}</span>
        <span className="divider">/</span>
        <span className="total-slides">{slides.length}</span>
      </div>
    </section>
  );
};

export default HeroSlider;
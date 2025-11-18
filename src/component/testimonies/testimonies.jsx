import React from "react";
import "./testimonies.css";

// Import profile images - replace with your actual images
import Client1 from "../../assets/images/testifive.jpeg";
import Client2 from "../../assets/images/testifour.jpeg";
import Client3 from "../../assets/images/testithree.jpeg";
import Client4 from "../../assets/images/testitwo.jpeg";
import Client5 from "../../assets/images/testione.jpeg";
import Client6 from "../../assets/images/testisix.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "We've worked with VistaView Engineering Consult on multiple land registration projects and they consistently deliver excellent results. Their understanding of the Lands Commission processes has saved us countless hours of back-and-forth. Truly professionals in their field.",
      author: "Adwoa Mensah",
      position: "Real Estate Developer",
      image: Client1
    },
    {
      id: 2,
      text: "The spatial analysis provided by VistaView helped us make critical decisions about our agricultural land use. Their reports were comprehensive yet easy to understand with clear visualizations that made presenting to stakeholders simple.",
      author: "Kofi Ansah",
      position: "Farm Manager, AgriGrowth Ltd",
      image: Client2
    },
    {
      id: 3,
      text: "As a private homeowner, I was impressed by how VistaView handled my boundary dispute. They were thorough, professional, and explained everything in terms I could understand. The resolution was faster than I expected thanks to their expertise.",
      author: "Akosua Boateng",
      position: "Homeowner, East Legon",
      image: Client3
    },
    {
      id: 4,
      text: "The marine engineering survey conducted by VistaView was exceptional. Their attention to detail and comprehensive reporting helped us navigate complex coastal regulations with ease. Highly recommended for any marine project.",
      author: "Nana Kwame",
      position: "Port Development Manager",
      image: Client4
    },
    {
      id: 5,
      text: "VistaView's geographical intelligence services transformed how we approach urban planning. Their data-driven insights and innovative mapping solutions have become invaluable to our municipal development projects.",
      author: "Esi Coleman",
      position: "Urban Planning Director",
      image: Client5
    },
    {
      id: 6,
      text: "Working with VistaView on our environmental impact assessment was seamless. Their team demonstrated deep expertise in environmental surveying and provided us with actionable recommendations that exceeded our expectations.",
      author: "David Osei",
      position: "Environmental Consultant",
      image: Client6
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <h1 className="testimonials-title">Client Testimonials</h1>
          <p className="testimonials-subtitle">
            Hear what our clients say about our services and professionalism.
          </p>
          
          <div className="testimonials-scroll-container">
            <div className="testimonials-horizontal-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="client-photo-container">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="client-photo"
                    />
                  </div>
                  <div className="testimonial-text">
                    <p>"{testimonial.text}"</p>
                  </div>
                  <div className="testimonial-author">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.position}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="scroll-indicator">
            <span>Scroll horizontally to view more testimonials →</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle hash navigation for home page sections
  const handleHashNavigation = (hash) => {
    if (location.pathname === "/") {
      // Already on home page, just scroll
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 100; // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      // Navigate to home page with hash, then scroll
      navigate(`/#${hash}`);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 300);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Footer Grid */}
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="company-info">
                <div className="logo-placeholder">
                  {/* Add your logo here */}
                  <span className="logo-text">VistaView Engineering Consult </span>
                </div>
                <p className="company-description">
                  Home of Quality Engineering Services. Providing professional surveying, architectural, and land administration solutions across Ghana since 2021. www.wbaconsultgh.com
                </p>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleHashNavigation("about");
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <Link to="/services" className="footer-link">Services</Link>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleHashNavigation("projects");
                    }}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#team" 
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleHashNavigation("team");
                    }}
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleHashNavigation("testimonials");
                    }}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleHashNavigation("contact");
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="footer-section">
              <h3 className="footer-heading">Our Services</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/services#cadastral-survey" className="footer-link">
                    Cadastral Survey
                  </Link>
                </li>
                <li>
                  <Link to="/services#boundary-location" className="footer-link">
                    Site/Boundary Location
                  </Link>
                </li>
                <li>
                  <Link to="/services#architectural-design" className="footer-link">
                    Architectural Design
                  </Link>
                </li>
                <li>
                  <Link to="/services#mine-survey" className="footer-link">
                    Mine Survey
                  </Link>
                </li>
                <li>
                  <Link to="/services#gis-mapping" className="footer-link">
                    GIS and Mapping
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer-link">All Services</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-heading">Contact Info</h3>
              <div className="contact-info">
                <p className="contact-item">0246406528</p>
                <p className="contact-item">0509581314</p>
                {/* <p className="contact-item">0209 507 138</p> */}
                <p className="contact-item">abdulai.alh8989@gmail.com</p>
                <p className="contact-item">Tarkwa Ghana</p>
                <p className="contact-item">Mon-Fri: 8AM-5PM</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2025 VistaView Engineering consult. All Rights Reserved.
              </p>
              <p className="developer-credit">
                Website designed and developed by Isko Teck
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect, useRef } from "react";
import "./nav.css";
import Logo from "../../assets/images/newLogo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
        setActiveDropdown(null);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeMenu = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  // Handle smooth scroll to section on home page
  const handleHashNavigation = (hash) => {
    closeMenu();
    
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
          const offset = 100; // Account for fixed navbar
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

  // Handle hash navigation after route change
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const hash = location.hash.replace("#", "");
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
  }, [location]);

  // Navigation items - About and Contact use hash navigation
  const navItems = [
    { label: "HOME", href: "/", isHash: false },
    { label: "ABOUT", href: "about", isHash: true },
    {
      label: "SERVICES",
      href: "/services",
      isHash: false,
      dropdown: [
        { label: "Land Surveying", href: "/services#land-surveying" },
        { label: "Cadastral Survey", href: "/services#cadastral-survey" },
        { label: "Engineering Survey", href: "/services#engineering-survey" },
        { label: "Drone Survey", href: "/services#drone-survey" },
        { label: "Mine Survey", href: "/services#mine-survey" },
        { label: "Architectural Design", href: "/services#architectural-design" },
        { label: "GIS and Mapping", href: "/services#gis-mapping" },
        { label: "Site/Boundary Location", href: "/services#boundary-location" },
        { label: "Consultation Works More", href: "/services#consultation" },
      ],
    },
    { label: "CONTACT", href: "contact", isHash: true },
    { label: "BLOG", href: "/blog", isHash: false },
  ];

  return (
    <>
      {/* TOP CONTACT BAR */}
      <div className="top-contact-bar">
        <div className="container">
          <div className="contact-info">
            <span className="phone">
              <span className="contact-icon">📞</span>
              +233 (0)246406528 | +233 509581314 
            </span>
            <span className="email">
              <span className="contact-icon">✉️</span>
              info@abdulai.alh8989@gmail.com
            </span>
          </div>

          <div className="social-links">
            <span className="social-text">Follow us:</span>
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">💼</a>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav
        ref={navRef}
        className={`nav ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}
      >
        <div className="container">
          <div className="nav-left">
            <Link to="/" className="logo-link" onClick={closeMenu}>
              <img src={Logo} className="logo" alt="VistaView Consult" />
              <span className="company-name2">VISTAVIEW CONSULT</span>
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </button>

          <div className="nav-overlay" onClick={closeMenu}></div>

          <ul className={`nav-links ${open ? "show" : ""}`}>
            {navItems.map((item, index) => (
              <li key={index}>
                {item.dropdown ? (
                  <div className={`dropdown ${activeDropdown === item.label ? "active" : ""}`}>
                    
                    <div className="dropdown-header">
                      <Link
                        to={item.href}
                        className="dropdown-main-link"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>

                      <button
                        className="dropdown-toggle"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        ▼
                      </button>
                    </div>

                    <ul className="dropdown-menu">
                      {item.dropdown.map((subItem, i) => (
                        <li key={i}>
                          <Link
                            to={subItem.href}
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : item.isHash ? (
                  <a
                    href={`#${item.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleHashNavigation(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.href} onClick={closeMenu}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
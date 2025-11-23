import React from "react";
import { Link } from "react-router-dom";
import "./services.css";

import Image1 from "../../assets/images/dronSurvery.jpg";
import Image2 from "../../assets/images/enginsurvey.jpeg";
import Image3 from "../../assets/images/cadastary.jpg";
import Image4 from "../../assets/images/design2.jpeg";
import Image5 from "../../assets/images/mindsurvey.jpg";
import Image6 from "../../assets/images/gisAndMapping.jpg";
import Image7 from "../../assets/images/site-plan.png";
import Image8 from "../../assets/images/consultant.jpeg";




export default function Services() {
  return (
    <section className="services-section">

      {/* TITLE */}
      <div className="services-header">
        <h2>Our Professional Services</h2>
        <p className="miniheading">
          We provide a complete range of surveying, engineering, and design solutions
          to support land, construction, and development projects.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">

        {/* Cadastral Survey */}
        <div className="service-card">
          <img 
            src={Image3} 
            alt="Cadastral Survey" 
            loading="lazy"
            decoding="async"
          />
          <h3>Cadastral Survey</h3>
          <p>
            We deliver accurate boundary surveys for land ownership, documentation,
            and registration. Our cadastral surveys comply with all GIS and Lands
            Commission standards in Ghana.
          </p>
          <Link to="/services#cadastral-survey" className="read-more-btns">
            Read More
          </Link>
        </div>

        {/* Engineering Survey */}
        <div className="service-card">
          <img 
            src={Image2} 
            alt="Engineering Survey" 
            loading="lazy"
            decoding="async"
          />
          <h3>Engineering Survey</h3>
          <p>
            High-precision surveying for construction projects, road works,
            building layouts, setting out, and structural alignment to ensure
            engineering accuracy from start to finish.
          </p>
          <Link to="/services#engineering-survey" className="read-more-btns">
            Read More
          </Link>
        </div>

        {/* Drone Survey */}
        <div className="service-card">
          <img 
            src={Image1} 
            alt="Drone Survey" 
            loading="lazy"
            decoding="async"
          />
          <h3>Drone Survey</h3>
          <p>
            We utilize drone technology to capture aerial maps, 3D models, and
            elevation data, providing fast and reliable insights for large land
            areas and development planning.
          </p>
          <Link to="/services#drone-survey" className="read-more-btns">
            Read More
          </Link>
        </div>

        {/* Mine Survey */}
        <div className="service-card">
          <img 
            src={Image5} 
            alt="Mine Survey" 
            loading="lazy"
            decoding="async"
          />
          <h3>Mine Survey</h3>
          <p>
            Professional mine surveying for exploration, excavation monitoring,
            volume measurement, and safety compliance within mining operations.
          </p>
          <Link to="/services#mine-survey" className="read-more-btns">
            Read More
          </Link>
        </div>

        {/* Architectural Design */}
        <div className="service-card">
          <img 
            src={Image4} 
            alt="Architectural Design" 
            loading="lazy"
            decoding="async"
          />
          <h3>Architectural Design</h3>
          <p>
            Creative and functional building design services including floor plans,
            3D visualizations, and structural layouts tailored to client needs.
          </p>
          <Link to="/services#architectural-design" className="read-more-btns">
            Read More
          </Link>
        </div>

        {/* GIS and Mapping */}
        <div className="service-card">
          <img 
            src={Image6} 
            alt="GIS and Mapping" 
            loading="lazy"
            decoding="async"
          />
          <h3>GIS and Mapping</h3>
          <p>
            Advanced mapping services using GIS technology for spatial analysis,
            map creation, land use planning, and data visualization.
          </p>
          <Link to="/services#gis-mapping" className="read-more-btns">
            Read More
          </Link>
        </div>

        {/* Site/Boundary Location */}
        <div className="service-card">
          <img 
            src={Image7} 
            alt="Boundary Location" 
            loading="lazy"
            decoding="async"
          />
          <h3>Site / Boundary Location</h3>
          <p>
            Accurate physical demarcation of land boundaries using GPS and
            traditional surveying methods to prevent disputes and support land
            development.
          </p>
          <Link to="/services#boundary-location" className="read-more-btns">
            Read More
          </Link>
        </div>

        {/* Consultation Works */}
        <div className="service-card">
          <img 
            src={Image8} 
            alt="Consultation Works" 
            loading="lazy"
            decoding="async"
          />
          <h3>Consultation Works</h3>
          <p>
            Expert advisory services on land issues, engineering projects,
            documentation processes, project planning, and professional guidance
            for both individuals and companies.
          </p>
          <Link to="/services#consultation" className="read-more-btns">
            Read More
          </Link>
        </div>

      </div>

    </section>
  );
}

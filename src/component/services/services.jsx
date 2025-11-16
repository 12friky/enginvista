import React from "react";
import "./services.css";

import Image1 from "../../assets/images/indenture.avif";
import Image2 from "../../assets/images/layout.jpeg";
import Image3 from "../../assets/images/mindsurvey.jpg";
import Image4 from "../../assets/images/boundary.avif";

export default function Services() {
  return (
    <section className="services-section">

      {/* TITLE */}
      <div className="services-header">
        <h2>Our Professional Services</h2>
        <p className="miniheading">
          We offer a comprehensive range of engineering and surveying services to meet all your <br />
          project needs.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">

        <div className="service-card">
          <img src={Image3} alt="Cadastral Survey" />
          <h3>Cadastral Survey</h3>
          <p>
            Professional land surveying to establish precise property boundaries with legal accuracy.
            Our surveys are recognized by all land registration authorities in Ghana.
          </p>
          {/* <button className="service-btn">✉ Request Service</button> */}
        </div>

        <div className="service-card">
          <img src={Image2} alt="Land Registration" />
          <h3>Land Registration</h3>
          <p>
            Assistance with land title registration, documentation processing, and navigating legal
            requirements for property ownership in Ghana.
          </p>
          {/* <button className="service-btn">✉ Request Service</button> */}
        </div>

        <div className="service-card">
          <img src={Image1} alt="Indenture" />
          <h3>Indenture</h3>
          <p>
            Preparation and processing of legally binding documents for property transfers, leases,
            and other real estate transactions.
          </p>
          {/* <button className="service-btn">✉ Request Service</button> */}
        </div>

        <div className="service-card">
          <img src={Image4} alt="Boundary Location" />
          <h3>Site/Boundary Location</h3>
          <p>
            Accurate marking and documentation of property boundaries using GPS and traditional
            surveying methods to prevent disputes.
          </p>
          {/* <button className="service-btn">✉ Request Service</button> */}
        </div>

        <div className="service-card">
          <img src={Image4} alt="Boundary Location" />
          <h3>Site/Boundary Location</h3>
          <p>
            Accurate marking and documentation of property boundaries using GPS and traditional
            surveying methods to prevent disputes.
          </p>
          {/* <button className="service-btn">✉ Request Service</button> */}
        </div>

        <div className="service-card">
          <img src={Image4} alt="Boundary Location" />
          <h3>Site/Boundary Location</h3>
          <p>
            Accurate marking and documentation of property boundaries using GPS and traditional
            surveying methods to prevent disputes.
          </p>
          {/* <button className="service-btn">✉ Request Service</button> */}
        </div>

        <div className="service-card">
          <img src={Image4} alt="Boundary Location" />
          <h3>Site/Boundary Location</h3>
          <p>
            Accurate marking and documentation of property boundaries using GPS and traditional
            surveying methods to prevent disputes.
          </p>
          {/* <button className="service-btn">✉ Request Service</button> */}
        </div>

        <div className="service-card">
          <img src={Image4} alt="Boundary Location" />
          <h3>Site/Boundary Location</h3>
          <p>
            Accurate marking and documentation of property boundaries using GPS and traditional
            surveying methods to prevent disputes.
          </p>
          {/* <button className="service-btn">✉ Request Service</button> */}
        </div>

      </div>

    </section>
  );
}

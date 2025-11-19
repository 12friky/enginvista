import React from "react";
import "./team.css";

// Import local team member images
import AsomaniWilliams from "../../assets/images/image2.jpg";
import JosephCharway from "../../assets/images/beatrice affunu.jpg";
import ChristabelBoohemaa from "../../assets/images/enginlady.jpeg";

const Team = () => {
  const teamMembers = [
    {
      name: "Alhassan Abdulai",
      position: "Principal Surveyor & Founder",
      experience: "With years of experience in cadastral surveying",
      image: AsomaniWilliams,
      social: {
        linkedin: "https://www.linkedin.com/company/vistaview-engineering-consult/",
        twitter: "https://x.com/vistavieweng?t=WtiIIUGa8FPkhwLt4cUvcw&s=09",
        email: "vistaviewengineering@gmail.com",
        facebook: "https://www.facebook.com/profile.php?id=61583598580572"
      }
    },
    {
      name: "Beatrice Affum Konadu",
      position: "Marketing Manager",
      experience: "Spatial planning and GIS specialist, sustainability advocate, surveyor, drone pilot",
      image: JosephCharway,
      social: {
        linkedin: "https://www.linkedin.com/in/beatrice-affum-konadu-3aa049336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        twitter: "#",
        email: "#",
        facebook: "#"
      }
    },
    {
      name: "Christabel Boohemaa",
      position: "Chief Architect & PRO",
      experience: "Geomatic engineer specializing in sustainable building design",
      image: ChristabelBoohemaa,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
        facebook: "#"
      }
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="team-content">
          <div className="team-header">
            <h1 className="team-main-title">Meet Our Team</h1>
            <div className="title-underline"></div>
          </div>
          <p className="team-description">
            Our team of certified professionals brings together decades of combined experience.
          </p>

          <div className="team-cards-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-photo-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="member-photo"
                  />
                </div>

                <div className="member-details">
                  <h3 className="member-fullname">{member.name}</h3>
                  <p className="member-role">{member.position}</p>
                  <p className="member-expertise">{member.experience}</p>

                  <div className="member-social-links">
                    <a href={member.social.linkedin} className="team-social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="team-social-icon">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="team-social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="team-social-icon">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href={member.social.email} className="team-social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="team-social-icon">
                        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                      </svg>
                    </a>
                    <a href={member.social.facebook} className="team-social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="team-social-icon">
                        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.117C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;


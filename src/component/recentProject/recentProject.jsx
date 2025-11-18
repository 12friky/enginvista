import React from "react";
import "./recentProject.css";

// Import your project images - replace these with your actual images
import Project1 from "../../assets/images/recent1.jpeg";
import Project2 from "../../assets/images/gisAndMapping.jpg";
import Project3 from "../../assets/images/landSurvey.jpg";
import Project4 from "../../assets/images/recent2.avif";
import Project5 from "../../assets/images/ingineeringSurvey.jpg";
import Project6 from "../../assets/images/recent3.jpeg";

const RecentProjects = () => {
  const projects = [
    { id: 1, image: Project1, title: "Project 1" },
    { id: 2, image: Project2, title: "Project 2" },
    { id: 3, image: Project3, title: "Project 3" },
    { id: 4, image: Project4, title: "Project 4" },
    { id: 5, image: Project5, title: "Project 5" },
    { id: 6, image: Project6, title: "Project 6" },
  ];

  return (
    <section id="projects" className="recent-projects-section">
      <div className="container">
        <div className="recent-projects-content">
          <h2 className="projects-title">Our Recent Projects</h2>
          <p className="projects-subtitle">
            Explore some of our successfully completed projects across Ghana.
          </p>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-item">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
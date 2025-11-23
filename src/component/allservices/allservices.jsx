import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './allservices.css';

import CadastralSurveyImg from '../../assets/images/cadastary.jpg';
import EngineeringSurveyImg from '../../assets/images/ingineeringSurvey.jpg';
import DroneSurveyImg from '../../assets/images/dronSurvery.jpg';
import MineSurveyImg from '../../assets/images/mindsurvey.jpg';
import ArchitecturalDesignImg from '../../assets/images/indenture.avif';
import GISMappingImg from '../../assets/images/gisAndMapping.jpg';
import BoundaryLocationImg from '../../assets/images/boundary.jpeg';
import ConsultationImg from '../../assets/images/construction.png';

const ServicesPage = () => {
  const servicesRef = useRef({});

  const services = [
    {
      id: "cadastral-survey",
      title: "Cadastral Survey",
      image: CadastralSurveyImg,
      description: "Our cadastral survey services provide precise boundary determinations and land parcel mapping for property ownership, legal disputes, and land registration purposes. We employ state-of-the-art GPS technology and traditional surveying methods to ensure accuracy in all boundary demarcations.",
      detailed: "Our comprehensive cadastral surveying process begins with thorough research of historical records and existing documentation. We conduct field surveys using advanced equipment including total stations, GPS receivers, and digital mapping software. Our team works closely with government agencies, legal professionals, and private clients to deliver boundary solutions that stand up to legal scrutiny.",
      benefits: [
        "Clear property boundary identification",
        "Legal documentation for land disputes",
        "Accurate land parcel mapping",
        "Compliance with local regulations"
      ],
      additional: "We handle everything from initial boundary identification to final documentation, ensuring smooth property transactions and legal compliance. Our certified surveyors provide expert testimony in court proceedings when required."
    },
    {
      id: "engineering-survey",
      title: "Engineering Survey", 
      image: BoundaryLocationImg ,
      description: "Engineering surveys form the foundation of successful construction and infrastructure projects. We provide detailed topographical surveys, setting out services, and deformation monitoring for various engineering applications.",
      detailed: "Our engineering survey team specializes in providing precise spatial data for construction projects of all scales. From initial site analysis to final as-built surveys, we ensure that engineering designs are accurately translated into physical structures. We monitor construction progress and verify that all elements are built according to design specifications.",
      benefits: [
        "Precise construction layout",
        "Accurate volume calculations",
        "Deformation monitoring",
        "Quality control assurance"
      ],
      additional: "Using advanced equipment including robotic total stations, 3D laser scanners, and sophisticated software, we deliver precise data that enables engineers to design and construct with confidence and accuracy throughout the project lifecycle."
    },
    {
      id: "drone-survey",
      title: "Drone Survey",
      image: DroneSurveyImg,
      description: "Leveraging cutting-edge drone technology, we offer rapid and comprehensive aerial surveying services. Our drone surveys provide high-resolution imagery, 3D modeling, and volumetric calculations for large areas.",
      detailed: "Our UAV (Unmanned Aerial Vehicle) surveying services revolutionize data collection for large-scale projects. Using advanced photogrammetry and LiDAR technology, we capture detailed aerial data that would be time-consuming and costly through traditional methods. We process this data to create accurate orthomosaics, digital elevation models, and 3D point clouds.",
      benefits: [
        "Rapid data collection over large areas",
        "High-resolution imagery and mapping",
        "Safe access to difficult terrain",
        "Cost-effective surveying solution"
      ],
      additional: "With our certified drone pilots and advanced processing software, we deliver detailed aerial data that enhances project planning, monitoring, and decision-making across various industries including construction, mining, and agriculture."
    },
    {
      id: "mine-survey",
      title: "Mine Survey",
      image: MineSurveyImg,
      description: "Specialized mine surveying services ensure safe and efficient mining operations. We provide precise volume calculations, pit monitoring, stockpile management, and compliance surveying.",
      detailed: "Our mine surveying team specializes in the unique challenges of mining operations. We provide regular surveys to monitor pit progress, calculate ore volumes, and ensure compliance with mining plans. Using advanced monitoring systems, we track slope stability and provide early warning of potential geotechnical issues.",
      benefits: [
        "Accurate ore volume calculations",
        "Slope stability monitoring",
        "Regulatory compliance assurance",
        "Optimized extraction planning"
      ],
      additional: "Regular monitoring and accurate data collection help minimize risks and maximize operational efficiency in mining environments. Our services contribute to safer operations and improved resource management."
    },
    {
      id: "architectural-design", 
      title: "Architectural Design",
      image: ArchitecturalDesignImg,
      description: "Our architectural design services bridge the gap between survey data and building construction. We transform survey information into practical architectural plans and detailed construction drawings.",
      detailed: "We combine surveying expertise with architectural design to create functional and aesthetically pleasing structures. Our design process begins with understanding client requirements and site constraints, then progresses through conceptual design, detailed development, and construction documentation. We ensure all designs comply with building codes and regulations while meeting client objectives.",
      benefits: [
        "Integrated survey-to-design workflow",
        "Building regulation compliance",
        "Practical and aesthetic solutions",
        "Detailed construction documentation"
      ],
      additional: "We work collaboratively with clients to create spaces that are both beautiful and practical, meeting specific needs and budget constraints while ensuring constructability and regulatory compliance."
    },
    {
      id: "gis-mapping",
      title: "GIS and Mapping",
      image: GISMappingImg,
      description: "Geographic Information Systems (GIS) and digital mapping services provide powerful tools for spatial analysis and decision support across various applications.",
      detailed: "Our GIS services transform raw spatial data into actionable intelligence. We develop customized GIS solutions that integrate multiple data sources, creating comprehensive spatial databases for analysis and decision-making. Our mapping services include creating interactive web maps, mobile mapping applications, and traditional cartographic products.",
      benefits: [
        "Comprehensive spatial data management",
        "Interactive mapping solutions",
        "Data analysis and visualization",
        "Customized GIS applications"
      ],
      additional: "Our GIS services help clients visualize, analyze, and interpret spatial data to identify patterns, relationships, and trends, supporting informed decision-making in urban planning, resource management, and infrastructure development."
    },
    {
      id: "boundary-location",
      title: "Site/Boundary Location", 
      image: BoundaryLocationImg,
      description: "Accurate site and boundary location services are essential for property development, construction projects, and legal purposes.",
      detailed: "We provide comprehensive site analysis and boundary location services that form the foundation for any development project. Our services include identifying property corners, mapping existing site features, and documenting easements and rights-of-way. We use the latest surveying technology to ensure millimeter-level accuracy in all our boundary determinations.",
      benefits: [
        "Precise boundary identification",
        "Comprehensive site documentation",
        "Legal boundary certification",
        "Development feasibility assessment"
      ],
      additional: "Our detailed site plans and boundary reports help prevent disputes and ensure projects proceed within designated property limits, providing the certainty needed for successful project execution."
    },
    {
      id: "consultation",
      title: "Consultation Works",
      image: ConsultationImg,
      description: "We offer expert consultation services for all aspects of land surveying, spatial data management, and project planning.",
      detailed: "Our consultation services leverage decades of combined experience in surveying and spatial data management. We provide technical advice on project feasibility, methodology selection, and regulatory compliance. Our consultants serve as expert witnesses in legal proceedings and provide independent reviews of surveying work conducted by others.",
      benefits: [
        "Expert technical advice",
        "Project feasibility assessment",
        "Regulatory compliance guidance",
        "Independent review and verification"
      ],
      additional: "Whether you're planning a small residential project or a large-scale development, our consultation services provide the guidance needed for success, helping you navigate complex technical and regulatory challenges with confidence."
    }
  ];

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && servicesRef.current[hash]) {
        setTimeout(() => {
          servicesRef.current[hash].scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 500);
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <div className="services-page">
      <div className="breadcrumb">
        <Link to="/">home</Link> / <span>services</span>
      </div>
      
      <div className="services-header">
        <h1>Our Professional Services</h1>
        <p>Comprehensive surveying, mapping, and spatial solutions tailored to meet your specific project requirements</p>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <section 
            key={index} 
            className="service-item"
            ref={el => servicesRef.current[service.id] = el}
            id={service.id}
          >
            <div className="service-content-wrapper">
              <div className="service-text">
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <p className="service-detailed">{service.detailed}</p>
                
                <div className="service-benefits">
                  <h3>Key Benefits:</h3>
                  <ul>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <p className="service-additional">{service.additional}</p>
              </div>
              
              <div className="service-image">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
import React from "react";
import "./why.css";

// React Icons (no download needed)
import { FaBullseye, FaAward, FaFileContract, FaHeadphones } from "react-icons/fa";
import { MdPrecisionManufacturing, MdGroups } from "react-icons/md";
import { GiCutDiamond } from "react-icons/gi";

export default function WhyChoose() {
  const features = [
    {
      icon: <FaBullseye />,
      title: "Precision & Accuracy",
      text: "We use state-of-the-art surveying equipment and software to deliver results with millimeter-level accuracy.",
    },
    {
      icon: <FaAward />,
      title: "Decades of Experience",
      text: "Our team brings over 10 years of combined experience in surveying, engineering, and land administration.",
    },
    {
      icon: <FaFileContract />,
      title: "Regulatory Expertise",
      text: "Deep understanding of Ghana’s land administration systems ensures full compliance with regulations.",
    },
    {
      icon: <GiCutDiamond />,
      title: "Cutting-Edge Technology",
      text: "We invest in modern surveying instruments, CAD, and GIS systems to deliver faster and accurate results.",
    },
    {
      icon: <MdGroups />,
      title: "Dedicated Team",
      text: "Our professionals are committed to understanding and fulfilling your specific project needs.",
    },
    {
      icon: <FaHeadphones />,
      title: "Ongoing Support",
      text: "We provide continuous support from initial survey to final documentation and beyond.",
    },
  ];

  return (
    <section className="why-section">
      <div className="why-header">
        <h2>Why Choose Vistaview Consult engineering</h2>
        <div className="underline"></div>
        <p>
          We stand out from the competition with our commitment to quality,
          precision, and client satisfaction.
        </p>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card slide-left" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

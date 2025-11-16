import React from "react";
import "./contact.css";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const whatsappLink = "https://wa.me/233599422525";
    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-overlay">
        <div className="container">
          <div className="contact-content">
            <h1 className="contact-title">Contact Our Team</h1>
            <p className="contact-subtitle">
              Get in touch with us for inquiries or to request our services.
            </p>

            <div className="contact-grid">
              {/* LEFT SIDE */}
              <div className="contact-info">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-description">
                  Have questions about our services or need to start your project? Reach out to us through any of the channels below. Our team typically responds within 24 hours.
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <h3 className="detail-title">Phone</h3>
                    <p className="detail-content">0208 888 489</p>
                    <p className="detail-content">0857 800 447</p>
                    <p className="detail-content">9209 937 138</p>
                  </div>

                  <div className="contact-item">
                    <h3 className="detail-title">Email</h3>
                    <p className="detail-content">williamtshightose@gmail.com</p>
                  </div>

                  <div className="contact-item">
                    <h3 className="detail-title">Office</h3>
                    <p className="detail-content">Wantedx Junction, Asamantese</p>
                    <p className="detail-content">Twile Prosa</p>
                    <p className="detail-content">Central Region</p>
                  </div>

                  <div className="contact-item">
                    <h3 className="detail-title">Working Hours</h3>
                    <p className="detail-content">Monday - Friday 8:00 AM - 5:00 PM</p>
                    <p className="detail-content">Saturday 8:00 AM - 10:00 PM</p>
                  </div>

                  <div className="contact-item">
                    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
                      Chat Now on WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="contact-right">
                <div className="form-card">
                  <h2 className="section-title">Send Us a Message</h2>
                  <div className="divider"></div>
                  <iframe
                    title="Contact Form"
                    src="https://form.jotform.com/253185293865064"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: "none", marginBottom: "20px" }}
                  ></iframe>
                </div>

                <div className="form-card" style={{ marginTop: "30px" }}>
                  <h2 className="section-title">Our Location</h2>
                  <div className="divider"></div>
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.8286339545783!2d-1.756248984324617!3d5.550055095517662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b8f16c06dfd%3A0x4e6d7e2eea1c7d0!2sCentral%20Region%2C%20Ghana!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

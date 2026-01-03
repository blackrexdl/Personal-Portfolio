import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">
        Contact <span className="underline"></span>
      </h2>

      <div className="contact-grid">
        <div className="contact-card">
          <FaEnvelope />
          <h4>Email</h4>
          <p>shubu.dev@gmail.com</p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt />
          <h4>Phone</h4>
          <p>+91 9XXXXXXXXX</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt />
          <h4>Location</h4>
          <p>Chandigarh, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">
        Contact <span className="underline"></span>
      </h2>

      {/* INFO CARDS */}
      <div className="contact-cards">
        <div className="contact-card">
          <FaEnvelope />
          <h4>Email</h4>
          <a href="mailto:shuvam2065@gmail.com">shuvam2065@gmail.com</a>
        </div>

        <div className="contact-card">
          <FaPhoneAlt />
          <h4>Phone</h4>
          <a href="tel:+917889000521">+91 7889000521</a>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt />
          <h4>Location</h4>
          <p>Barnala, India</p>
        </div>
      </div>

      {/* FORM */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
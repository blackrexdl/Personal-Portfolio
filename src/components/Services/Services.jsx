import "./Services.css";
import {
  FaPaintBrush,
  FaCode,
  FaMobileAlt,
  FaVideo
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">
        What I'm Doing <span className="underline"></span>
      </h2>

      <div className="services-grid">
        <div className="service-card">
          <FaPaintBrush className="service-icon" />
          <h3>Web Design</h3>
          <p>
            I design visually appealing websites that are both functional and
            user-friendly.
          </p>
        </div>

        <div className="service-card">
          <FaCode className="service-icon" />
          <h3>Web Development</h3>
          <p>
            High-quality development of sites at the professional level.
          </p>
        </div>

        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <h3>Mobile Apps</h3>
          <p>
            iOS app development with focus on performance and clean UI. Currently
            learning and building projects.
          </p>
        </div>

        <div className="service-card">
          <FaVideo className="service-icon" />
          <h3>Video Editing</h3>
          <p>
            Creating high-quality reels and posting engaging content on Instagram.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
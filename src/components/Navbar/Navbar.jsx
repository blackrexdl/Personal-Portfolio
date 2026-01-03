import "./Navbar.css";
import avatar from "../../assets/avatar.png"; // add your image here
import {
  FaEnvelope,
  FaPhoneAlt,
  FaBirthdayCake,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="sidebar-container">
      {/* Profile */}
      <div className="profile-card">
        <img src={avatar} alt="profile" className="avatar" />
        <h2>Shubham Sharma</h2>
        <span className="role">Full Stack Developer</span>
      </div>

      {/* Info */}
      <div className="info-list">
        <div className="info-item">
          <FaEnvelope />
          <div>
            <small>Email</small>
            <p>shuvam2065@gmail.com</p>
          </div>
        </div>

        <div className="info-item">
          <FaPhoneAlt />
          <div>
            <small>Phone</small>
            <p>+91 7889000521</p>
          </div>
        </div>

        <div className="info-item">
          <FaBirthdayCake />
          <div>
            <small>Birthday</small>
            <p>7 May, 2004</p>
          </div>
        </div>

        <div className="info-item">
          <FaMapMarkerAlt />
          <div>
            <small>Location</small>
            <p>Barnala, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
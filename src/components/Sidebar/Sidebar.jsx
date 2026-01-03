import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Profile Section */}
      <div className="profile">
        <img
          src="https://i.pravatar.cc/150"
          alt="Profile"
          className="avatar"
        />
        <h2 className="name">Shubham Sharma</h2>
        <p className="role">Full Stack Developer</p>
      </div>

      <div className="divider"></div>

      {/* Info Section */}
      <div className="info">
        <div className="info-item">
          <span className="label">EMAIL</span>
          <span className="value">shuvam2065@gmail.com</span>
        </div>

        <div className="info-item">
          <span className="label">PHONE</span>
          <span className="value">+91 7889000521</span>
        </div>

        <div className="info-item">
          <span className="label">BIRTHDAY</span>
          <span className="value">7 May, 2004</span>
        </div>

        <div className="info-item">
          <span className="label">LOCATION</span>
          <span className="value">Barnala, India</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
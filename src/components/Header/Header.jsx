import "./Header.css";

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = ["About", "Resume", "Portfolio", "Contact"];

  return (
    <div className="header">
      <ul className="nav-tabs">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
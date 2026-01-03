import { useRef } from "react";
import "./Header.css";

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = ["About", "Resume", "Portfolio", "Contact"];
  const tabWidth = 110;
  const tabsRef = useRef(null);

  const handleDragEnd = (e) => {
    const rect = tabsRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const index = Math.min(
      tabs.length - 1,
      Math.max(0, Math.floor(x / tabWidth))
    );

    setActiveTab(tabs[index]);
  };

  return (
    <div className="header">
      <ul className="nav-tabs" ref={tabsRef}>

        {/* Glass draggable pill */}
        <div
          className="glass-indicator draggable"
          draggable
          onDragEnd={handleDragEnd}
          style={{
            transform: `translateX(${tabs.indexOf(activeTab) * tabWidth}px)`
          }}
        />

        {/* Navigation tabs */}
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
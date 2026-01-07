import { useEffect, useRef, useState } from "react";
import "./Header.css";

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = ["About", "Resume", "Portfolio", "Contact"];
  const tabWidth = 110;
  const tabsRef = useRef(null);

  const [isScrolling, setIsScrolling] = useState(false);

  /* 🔹 Disable drag while scrolling */
  useEffect(() => {
    let timer;
    const onScroll = () => {
      setIsScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsScrolling(false), 120);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 🔹 Magnetic snap on drag drop */
  const handleDragEnd = (e) => {
    if (isScrolling) return;

    const rect = tabsRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const index = Math.round(x / tabWidth); // magnetic snap
    const safeIndex = Math.max(0, Math.min(tabs.length - 1, index));

    setActiveTab(tabs[safeIndex]);
  };

  /* 🔹 Keyboard navigation */
  useEffect(() => {
    const onKey = (e) => {
      const currentIndex = tabs.indexOf(activeTab);

      if (e.key === "ArrowRight" && currentIndex < tabs.length - 1) {
        setActiveTab(tabs[currentIndex + 1]);
      }

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        setActiveTab(tabs[currentIndex - 1]);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeTab]);

  return (
    <div className="header">
      <ul className="nav-tabs" ref={tabsRef}>

        {/* 🧊 Glass draggable pill */}
        <div
          className={`glass-indicator ${isScrolling ? "disabled" : ""}`}
          draggable={!isScrolling}
          onDragEnd={handleDragEnd}
          style={{
            transform: `translateX(${tabs.indexOf(activeTab) * tabWidth}px)`
          }}
        />

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
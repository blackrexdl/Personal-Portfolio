import { useState, useEffect } from "react";
import "./App.css";
import useMagnetic from "./hooks/useMagnetic";
import GlassCursor from "./components/GlassCursor/GlassCursor";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";

function App() {
  useMagnetic();
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "About";
  });

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className="app-wrapper">
      <GlassCursor />
      <aside className="sidebar">
        <Navbar />
      </aside>

      <main className="content">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "About" && (
          <>
            <About />
            <Services />
            <Testimonials />
          </>
        )}
        {activeTab === "Resume" && <Resume />}
        {activeTab === "Portfolio" && <Portfolio />}
        {activeTab === "Contact" && <Contact />}
        {/* Resume & Portfolio will be added next */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
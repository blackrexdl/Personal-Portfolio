import "./Resume.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="resume-section">
      <h2 className="section-title">
        Resume <span className="underline"></span>
      </h2>

      <div className="resume-grid">
        {/* EDUCATION */}
        <div className="resume-block">
          <h3>
            <FaGraduationCap /> Education
          </h3>

          <div className="timeline">
            <div className="timeline-item">
              <span>2023 – Present</span>
              <h4>B.Tech in Computer Science</h4>
              <p>CGC Landran, Punjab</p>
            </div>

            <div className="timeline-item">
              <span>2021 – 2023</span>
              <h4>Senior Secondary (12th)</h4>
              <p>CBSE Board</p>
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="resume-block">
          <h3>
            <FaBriefcase /> Experience
          </h3>

          <div className="timeline">
            <div className="timeline-item">
              <span>2024</span>
              <h4>Frontend Developer</h4>
              <p>Built multiple UI-focused web projects using React.</p>
            </div>

            <div className="timeline-item">
              <span>2023</span>
              <h4>Project-Based Learning</h4>
              <p>Worked on real-world academic and personal projects.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="skills-section">
        <h3>Skills</h3>

        <div className="skill">
          <span>HTML / CSS</span>
          <div className="bar">
            <div style={{ width: "90%" }}></div>
          </div>
        </div>

        <div className="skill">
          <span>JavaScript / React</span>
          <div className="bar">
            <div style={{ width: "85%" }}></div>
          </div>
        </div>

        <div className="skill">
          <span>Python</span>
          <div className="bar">
            <div style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
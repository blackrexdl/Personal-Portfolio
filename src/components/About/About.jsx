import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">
        About Me <span className="underline"></span>
      </h2>

      <p className="about-text">
        I have a strong background in web development, working with HTML, CSS,
        TailwindCSS, ReactJS, and NodeJS. Recently, I completed a fully functional
        website within 20 days, demonstrating efficiency and high-quality results.
      </p>

      <p className="about-text">
        I also have a basic understanding of Firebase for backend integration.
        With four years of personal experience in video editing, I focus on
        creating engaging content, especially short-form videos for Instagram
        Reels, with a particular emphasis on automotive-themed content.
        <br />
        <strong>Instagram:</strong> @caption_driller
      </p>
    </section>
  );
};

export default About;
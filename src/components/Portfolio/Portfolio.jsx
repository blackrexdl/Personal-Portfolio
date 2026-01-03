import "./Portfolio.css";

const projects = [
  {
    title: "Movie Recommendation System",
    tech: "Python · Streamlit · ML",
    image: "/projects/movie.png",
  },
  {
    title: "Library Management System",
    tech: "HTML · CSS · JavaScript",
    image: "/projects/library.png",
  },
  {
    title: "Event Management Website",
    tech: "HTML · CSS · JavaScript",
    image: "/projects/event.png",
  },
  {
    title: "Flash Card Quiz App",
    tech: "Python · Tkinter",
    image: "/projects/flash.png",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2 className="section-title">
        Portfolio <span className="underline"></span>
      </h2>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <div className="portfolio-card" key={i}>
            <div className="portfolio-image">
              <img src={p.image} alt={p.title} />
            </div>

            <div className="portfolio-content">
              <h3>{p.title}</h3>
              <p>{p.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
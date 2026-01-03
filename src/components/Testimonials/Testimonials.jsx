import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">
        Testimonials <span className="underline"></span>
      </h2>

      <div className="testimonial-wrapper">
        <div className="testimonial-card">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="client"
            className="testimonial-img"
          />
          <h3>Anshul Sharma</h3>
          <span>Team Member</span>
          <p>
            Working with Shubu was smooth and efficient. Strong frontend skills
            and great attention to UI details.
          </p>
        </div>

        <div className="testimonial-card">
          <img
            src="https://i.pravatar.cc/100?img=32"
            alt="client"
            className="testimonial-img"
          />
          <h3>Rohit Verma</h3>
          <span>Project Partner</span>
          <p>
            Very professional approach and clean code. Always delivers on time
            with quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
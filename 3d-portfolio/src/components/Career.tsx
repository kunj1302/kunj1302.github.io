import "./styles/Career.css";
import { experiences } from "../data/portfolio";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&amp;</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experiences.map((exp) => (
            <div className="career-info-box" key={exp.id}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.title}</h4>
                  <h5>
                    {exp.company} · {exp.location}
                  </h5>
                </div>
                <h3>{exp.period}</h3>
              </div>
              <div className="career-info-text">
                <p>{exp.summary}</p>
                {exp.bullets.length > 0 && (
                  <ul>
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;

import "./styles/Publications.css";
import { publications } from "../data/portfolio";
import { MdArrowOutward } from "react-icons/md";

const Publications = () => {
  return (
    <div className="publications-section section-container" id="publications">
      <h2>
        Research <span>&amp; Publications</span>
      </h2>
      <p className="publications-lead">
        Selected papers from earlier mechanical / materials work; current focus is
        robotics and perception.
      </p>
      <ul className="publications-list">
        {publications.map((pub) => (
          <li key={pub.id} className="publications-card">
            <div className="publications-card-thumb">
              <img src={pub.image} alt="" width={120} height={120} loading="lazy" />
            </div>
            <div className="publications-card-body">
              <h3>{pub.title}</h3>
              <p className="publications-venue">
                {pub.venue} · {pub.year}
              </p>
              <p className="publications-desc">{pub.description}</p>
              <ul className="publications-bullets">
                {pub.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="publications-tags">
                {pub.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                href={pub.paperLink}
                target="_blank"
                rel="noreferrer"
                className="publications-link"
                data-cursor="disable"
              >
                Read paper <MdArrowOutward />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;

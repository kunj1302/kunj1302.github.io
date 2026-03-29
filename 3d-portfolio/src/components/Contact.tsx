import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { RESUME_URL, social } from "../data/portfolio";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Location</h4>
            <p>College Park, Maryland, USA</p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+12408102577" data-cursor="disable">
                +1 240 810 2577
              </a>
            </p>
            <h4>Email</h4>
            <p>
              <a
                href="mailto:kunjgolwala13@gmail.com"
                data-cursor="disable"
              >
                kunjgolwala13@gmail.com
              </a>
            </p>
            <h4>Resume</h4>
            <p>
              <a href={RESUME_URL} target="_blank" rel="noreferrer" data-cursor="disable">
                View on Google Drive
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={social.portfolio}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio site <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Kunj Golwala</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

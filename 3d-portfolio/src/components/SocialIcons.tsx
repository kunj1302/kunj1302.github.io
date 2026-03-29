import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes, TbWorld } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { RESUME_URL, social } from "../data/portfolio";

const SocialIcons = () => {
  useEffect(() => {
    const socialEl = document.getElementById("social") as HTMLElement;
    if (!socialEl) return;

    socialEl.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href={social.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href={social.portfolio} target="_blank" rel="noreferrer">
            <TbWorld />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href={RESUME_URL}
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;

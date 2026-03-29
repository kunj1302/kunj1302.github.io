import "./styles/About.css";
import { RESUME_URL_ABOUT } from "../data/portfolio";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a graduate robotics student focused on intelligent robotic systems.
          I am pursuing my M.S. in Robotics Engineering at the University of
          Maryland, College Park, with depth in autonomous systems, computer vision,
          and AI.
        </p>
        <p className="para">
          My background is a B.Tech in Mechanical Engineering with a minor in
          Robotics from IIT Jodhpur — projects there included LiDAR object
          detection, RL for gait control, and human-following robots.
        </p>
        <p className="para">
          Industry experience includes perception software at Symbotic (warehouse
          AMRs) and a MITACS research internship at the University of Alberta on
          multi-agent RL for autonomous vehicles.
        </p>
        <p className="para">
          I care about robot design (SolidWorks), solid software in Python and C++,
          ROS 2, TensorFlow, and OpenCV — from perception and planning to
          deployment on real hardware.
        </p>
        <p className="para about-resume">
          <a
            href={RESUME_URL_ABOUT}
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            View resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;

/** Site copy and structured content migrated from the main Next.js portfolio */

export const RESUME_URL =
  "https://drive.google.com/file/d/1pKoxulILLXF02eLkqGYmPNamO3LlZnEH/view?usp=sharing";

export const RESUME_URL_ABOUT =
  "https://drive.google.com/file/d/16Z_HCsU7W7FJGrFFjumbf2hjwfRPXSlT/view?usp=sharing";

export const social = {
  github: "https://github.com/kunj13",
  linkedin: "https://www.linkedin.com/in/kunj-golwala/",
  portfolio: "https://kunj13.github.io/kunj.github.io/",
};

export type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Research Assistant",
    company: "GAMMA Lab",
    location: "College Park, Maryland",
    period: "Aug 2025 — Present",
    summary: "Traffic navigation for curbside robots.",
    bullets: [
      "Developed perception (3D tracking and detection) using cameras and LiDAR for scene understanding.",
      "Combined fine-tuned YOLO, Canny edge detection, and Hough transforms for crosswalk detection with 3D position and yaw.",
      "Built behavior trees for navigation and trajectory planning with MPPI and SLAM, for safe interaction at crosswalks and stop signs (ROS 2, C++, Python).",
    ],
  },
  {
    id: 2,
    title: "Perception Software Engineer",
    company: "Symbotic LLC (NASDAQ: SYM)",
    location: "Boston, Massachusetts",
    period: "May 2025 — Aug 2025",
    summary:
      "Perception — Case Estimation: computer vision for autonomous mobile robots in warehouse environments.",
    bullets: [
      "Transformer-based vision model for case re-identification from onboard stereo cameras, scaling to ~20k SKUs in varied, occluded poses.",
      "Containerized case-ID node with ROS 2 and Docker on NVIDIA Jetson Xavier; TensorRT deployment.",
      "Cut inference latency ~70% with multi-threading and embedding-vector caching.",
      "Automated data collection and temporal sync from IMU and eight RGB cameras.",
    ],
  },
  {
    id: 3,
    title: "Computer Vision Graduate Research Assistant",
    company: "Bio-Imaging and Machine Vision (BMV) Lab",
    location: "College Park, Maryland",
    period: "Aug 2024 — Apr 2024",
    summary:
      "Crab detection robotics — vision and manipulation for automated detection and handling.",
    bullets: [
      "Real-time ROS + OpenCV pipeline; large reduction in manual intervention.",
      "Dual-backbone networks (Masked CNN + ViT) for segmentation and keypoints.",
      "Hybrid depth from dual-laser scanning and monocular depth for 3D mapping.",
      "Imitation learning with adaptive compliance and multi-modal fusion for arm precision.",
      "Modular architecture for perception, planning, and control.",
    ],
  },
  {
    id: 4,
    title: "MITACS Globalink Research Intern",
    company: "University of Alberta",
    location: "Edmonton, Canada",
    period: "May 2023 — Aug 2023",
    summary:
      "Multi-agent reinforcement learning for autonomous vehicles in dense traffic.",
    bullets: [
      "MARL for high-density merging; improved response times in dynamic traffic.",
      "Priority-based safety supervisor; lower collision rates during training.",
      "Curriculum learning for faster convergence.",
      "Custom OpenAI Gym environments in Python with TensorFlow.",
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
  video?: string;
  video2?: string;
};

export const projects: Project[] = [
  {
    title: "Deep RL for Autonomous Parking",
    category: "CARLA · DDPG · PPO",
    tools: "CARLA, RL, Python, DDPG, PPO, CNN, VAE",
    image: "/code.jpg",
    link: "https://github.com/shreyak-05/Carla_PPO_DDPG",
    video: "/ddpg_parking_cropped.mp4",
  },
  {
    title: "Safe & Optimal Path Planning — F1 Track",
    category: "LQR · CBF · RRT*",
    tools: "Python, Gazebo, LQR, CBF, RRT*, Turtlebot",
    image: "/parked_pose.jpg",
    link: "https://github.com/kunj1302/LQR_RRT_F1_Map",
    video: "/f1_rrt.mp4",
  },
  {
    title: "TMI — OpenVLA Fine-Tuning",
    category: "VLA · Manipulation · LIBERO",
    tools: "MuJoCo, OpenVLA, LoRA, LIBERO, behavior cloning, Python",
    image: "/code.jpg",
    link: "https://github.com/kunj1302/tmi_openvla",
    video: "/Video%20Project%202.mp4",
    video2: "/Video%20Project%201.mp4",
  },
  {
    title: "Vision-Based AMR Navigation",
    category: "ROS · ArUco · YOLO · Optical Flow",
    tools: "ROS, OpenCV, TurtleBot4, computer vision, Python",
    image: "/track%202.png",
    link: "https://github.com/kunj1302/Autonomous_Navigation_AMR",
    video: "/autonomous_turtle_real.mp4",
    video2: "/autonomous_turtle_sim.mp4",
  },
  {
    title: "Frenet Trajectory Planner for ADAS",
    category: "CARLA · Planning",
    tools: "ROS, Python, CARLA, Frenet planning, jerk-optimal trajectories",
    image: "/code.jpg",
    link: "https://github.com/kunj1302/frenet_trajectory_planner_ADAS",
    video: "/frenet_trim.mp4",
  },
  {
    title: "AI-Powered Human-Following Robot",
    category: "ROS 2 · SLAM · PCL",
    tools: "ROS 2, ORB SLAM, C++, PCL, ICP, Python",
    image: "/human_following.png",
    link: "https://github.com/kunj13/human-following-robot",
  },
  {
    title: "JLR Autonomous EV Charging Manipulator",
    category: "MATLAB · Vision · Manipulation",
    tools: "MATLAB, inverse kinematics, Jacobian control, OpenCV, EfficientDet",
    image: "/laptop.jpg",
    link: "https://github.com/kunj13/Inter-IIT-Tech-Meet-11.-0--Automatic-EV-Charging-station",
    video: "/robot_animation.mp4",
  },
  {
    title: "Teleoperation of Robot Swarms",
    category: "ROS 2 · Distributed Control",
    tools: "Python, Gazebo, URDF, RViz, ROS 2, PCL, ICP",
    image: "/symbot.jpeg",
    link: "https://github.com/kunj13/Teleoperation-of-Robot-Swarms",
    video: "/teleop.mp4",
  },
];

export type Publication = {
  id: number;
  title: string;
  venue: string;
  year: string;
  description: string;
  bullets: string[];
  tags: string[];
  paperLink: string;
  image: string;
};

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Alleviation of Viscoelastic Creep in Electrostatically Driven Soft Dielectric Elastomer Actuators Using Input Shaping Scheme",
    venue:
      "20th IEEE/ASME International Conference on Mechatronic and Embedded Systems and Applications (MESA)",
    year: "2024",
    description:
      "Research on reducing viscoelastic creep in dielectric elastomer actuators using input shaping, presented at IEEE/ASME MESA in Genova, Italy.",
    bullets: [
      "Input shaping to reduce viscoelastic creep in dielectric elastomer actuators.",
      "Improved actuator performance and reliability through control techniques.",
    ],
    tags: [
      "Soft robotics",
      "Dielectric elastomer actuators",
      "Input shaping",
      "Control",
    ],
    paperLink: "https://ieeexplore.ieee.org/abstract/document/10704839",
    image: "/IEEE.jpg",
  },
  {
    id: 2,
    title:
      "A polyester-stainless steel based smart wristband sensor for skin temperature monitoring",
    venue: "The Journal of The Textile Institute",
    year: "2024",
    description:
      "Smart wristband sensor using polyester–stainless steel materials for continuous skin temperature monitoring.",
    bullets: [
      "Fabricated a wristband sensor from polyester–stainless steel composites.",
      "Continuous skin temperature monitoring for wearable applications.",
    ],
    tags: [
      "Wearables",
      "Smart textiles",
      "Temperature sensing",
    ],
    paperLink: "https://www.tandfonline.com/doi/abs/10.1080/00405000.2024.2392905",
    image: "/textile.jpg",
  },
  {
    id: 3,
    title:
      "Towards High Efficiency and Rapid Production of Room-Temperature Liquid Metal Wires Compatible with Electronic Prototyping Connectors",
    venue: "Micromachines",
    year: "2023",
    description:
      "Methods for producing room-temperature liquid metal wires compatible with standard prototyping connectors.",
    bullets: [
      "Rapid production of liquid metal wires at room temperature.",
      "Compatibility with electronic prototyping connectors.",
    ],
    tags: [
      "Liquid metal",
      "Manufacturing",
      "Electronics prototyping",
    ],
    paperLink: "https://www.mdpi.com/2072-666X/14/12/2227",
    image: "/micro.png",
  },
];

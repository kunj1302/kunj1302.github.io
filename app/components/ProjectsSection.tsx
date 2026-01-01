'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ImageModal from './ImageModal';

const projects = [
	{
		id: 1,
		title: 'Deep Reinforcement Learning for Autonomous Parking',
		description: [
			'Simulated autonomous car parking in CARLA Simulator using DDPG and PPO algorithms with 90% success rate.',
			'Leveraged CNN-based Variational Autoencoder (VAE) for feature extraction and designed optimized reward functions with unique penalty terms.'
		],
		technologies: ['CARLA', 'RL', 'Python', 'DDPG', 'PPO', 'CNN', 'VAE'],
		image: '/code.jpg',
		video: '/ddpg_parking_cropped.mp4',
		githubLink: 'https://github.com/shreyak-05/Carla_PPO_DDPG'
	},
	{
		id: 2,
		title: 'Safe and Optimal Path Planning for F1 Track',
		description: [
			'Implemented LQR, CBF and RRT* for generating dynamically feasible and collision-free paths for an F1 track.',
			'Performed grid search optimization and simulated on Turtlebot in Gazebo environment.'
		],
		technologies: ['Python', 'Gazebo', 'LQR', 'CBF', 'RRT*', 'Turtlebot'],
		image: '/f1_path_planning.jpg',
		video: '/f1_rrt.mp4',
		githubLink: 'https://github.com/kunj1302/LQR_RRT_F1_Map'
	},
	{
		id: 3,
		title: 'TMI (Too Much Info) - OpenVLA Fine tuning',
		description: [
			'Generated action tokens with behavior cloning using camera data as observation and input prompt as conditioning.',
			'Developed an automated pipeline for OpenVLA on LIBERO Mujoco simulator, demonstrating the impact of NLP perturbations.',
			'Engineered a hybrid framework using LoRA fine-tuning and LLM filtering, improving manipulation task and action success rates by 35% on noisy instruction sets for 4 DOF robotic arm.'
		],
		technologies: ['Mujoco', 'VLA', 'LLMs', 'OpenVLA', 'LoRA', 'LIBERO', 'Behavior Cloning', 'Python'],
		image: '/code.jpg',
		video: '/Video Project 2.mp4',
		video2: '/.mp4',
		githubLink: 'https://github.com/kunj1302/tmi_openvla'
	},
	{
		id: 4,
		title: 'Vision Based Intelligence - Real Time Autonomous Navigation for AMR',
		description: [
			'Engineered computer vision system for TurtleBot4 autonomous navigation achieving 95% accuracy.',
			'Implemented ArUco marker navigation with real-time camera calibration.',
			'Developed projective geometry algorithms using Canny edge detection and RANSAC for horizon computation.',
			'Built YOLO-based stop sign detector with 98% accuracy.',
			'Engineered optical flow obstacle detection using Lucas-Kanade tracking.'
		],
		technologies: ['ROS', 'OpenCV', 'Python', 'TurtleBot4', 'ArUco Marker', 'Projective Geometry', 'Optical Flow', 'Computer Vision'],
		image: '/amr.png',
		video: '/autonomous_turtle_real.mp4',
		video2: '/autonomous_turtle_sim.mp4',
		githubLink: 'https://github.com/kunj1302/Autonomous_Navigation_AMR'
	},
	{
		id: 5,
		title: 'Frenet Optimal Trajectory Planner for ADAS',
		description: [
			'Implemented a Frenet based optimal trajectory planner integrated with a behavioral planner, generating smooth and collision free trajectories for lane keeping, lane changes, and vehicle following in CARLA Simulator.',
			'Implemented Frenet coordinate trajectory planning, generating smooth collision-free trajectories using quintic and quartic polynomials with jerk minimization.',
			'Designed and optimized cost function for trajectory selection incorporating jerk cost, time cost, lateral deviation, and speed deviation metrics to select optimal trajectories.'
		],
		technologies: ['ROS', 'Python', 'CARLA'],
		image: '/code.jpg',
		video: '/output_upscaled.mp4',
		githubLink: 'https://github.com/kunj1302/frenet_trajectory_planner_ADAS'
	},
	{
		id: 6,
		title: 'AI-Powered Human-Following Robot',
		description: [
			'Deployed camera tracking with ROS 2 on industrial AMR, with 80% accuracy by fine-tuning for human detection.',
			'Integrated ORB SLAM for Lidar navigation and potential field controller for obstacle avoidance using C++.',
			'Implemented point to plane ICP using PCL for scan matching, combined with optimizations of PCA, Kd tree.'
		],
		technologies: ['ROS2', 'ORB SLAM', 'C++', 'PCL', 'ICP', 'Computer Vision', 'Python'],
		image: '/human_following.png',
		githubLink: 'https://github.com/kunj13/human-following-robot'
	},
	{
		id: 7,
		title: 'JLR Autonomous EV Charging Robotic Manipulator',
		description: [
			'Led a team of 8 to design and develop an autonomous EV charging station using a custom-designed robotic arm.',
			'Simulated robotic arm movements using inverse kinematics and Jacobian Control in MATLAB.'
		],
		technologies: ['MATLAB', 'Inverse Kinematics', 'Jacobian Control', 'OpenCV', 'EfficientDet', 'Computer Vision', 'Robotic Manipulation'],
		image: '/ev_charging.jpg',
		video: '/robot_animation.mp4',
		githubLink: 'https://github.com/kunj13/Inter-IIT-Tech-Meet-11.-0--Automatic-EV-Charging-station'
	},
	{
		id: 8,
		title: 'Teleoperation of Robot Swarms',
		description: [
			'Developed a ROS2 pipeline in Python for the teleoperation of robot swarms for flocking problem.',
			'Implemented Iterative Closest Point (ICP) using PCL Library in Python for structural depth estimation.',
			'Implemented a single integrator, distributed control model with undirected interaction topology.'
		],
		technologies: ['Python', 'Gazebo', 'URDF', 'RViz', 'SLAM', 'Mobile Robotics', 'ROS2', 'PCL', 'ICP', 'Distributed Control'],
		image: '/robot_swarms.jpg',
		video: '/teleop.mp4',
		githubLink: 'https://github.com/kunj13/Teleoperation-of-Robot-Swarms'
	},
];

export default function ProjectsSection() {
	const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

	return (
		<section id="projects" className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Featured Projects
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl overflow-hidden border border-white/10"
					>
												{/* Video/Image Section */}
						{project.video2 ? (
							// Dual video layout for autonomous navigation project
							<div className="relative aspect-video bg-black/20">
								<div className="grid grid-cols-2 gap-2 h-full">
									<div 
										className="cursor-pointer hover:bg-black/30 transition-colors"
										onClick={() => setModalImage({ src: project.video, alt: `${project.title} video 1` })}
									>
										<video
											src={project.video}
											className="w-full h-full object-fill"
											autoPlay
											loop
											muted
											playsInline
										/>
									</div>
									<div 
										className="cursor-pointer hover:bg-black/30 transition-colors"
										onClick={() => setModalImage({ src: project.video2, alt: `${project.title} video 2` })}
									>
										<video
											src={project.video2}
											className="w-full h-full object-fill"
											autoPlay
											loop
											muted
											playsInline
										/>
									</div>
								</div>
							</div>
						) : (
							// Single video/image layout for other projects
							<div 
								className="relative aspect-video bg-black/20 cursor-pointer hover:bg-black/30 transition-colors"
								onClick={() => {
									if (project.video) {
										setModalImage({ src: project.video, alt: `${project.title} video` });
									} else {
										setModalImage({ src: project.image, alt: `${project.title} image` });
									}
								}}
							>
								{project.video ? (
									<video
										src={project.video}
										className="w-full h-full object-fill"
										autoPlay
										loop
										muted
										playsInline
									/>
								) : (
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
									/>
								)}
							</div>
						)}
						
						{/* Content Section */}
						<div className="p-6">
							<h3 className="text-xl font-bold mb-3">{project.title}</h3>
							<ul className="text-gray-300 mb-4 text-sm leading-relaxed list-disc list-inside space-y-1">
								{project.description.map((point, index) => (
									<li key={index}>{point}</li>
								))}
							</ul>
							
							{/* Technologies */}
							<div className="flex flex-wrap gap-1 mb-4">
								{project.technologies.map((tech, index) => (
									<span
										key={index}
										className="px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-xs transition-colors"
									>
										{tech}
									</span>
								))}
							</div>
							
							<div className="flex gap-3">
								<Link 
									href={project.githubLink} 
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors flex items-center gap-2"
								>
									<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
									GitHub
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>
			
			{/* Image/Video Modal */}
			<ImageModal
				isOpen={modalImage !== null}
				imageSrc={modalImage?.src || ''}
				imageAlt={modalImage?.alt || ''}
				onClose={() => setModalImage(null)}
			/>
		</section>
	);
}

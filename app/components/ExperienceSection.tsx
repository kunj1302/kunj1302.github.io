'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ImageModal from './ImageModal';

const experiences = [
	{
		id: 1,
		title: 'Research Assistant',
		company: 'GAMMA Lab',
		location: 'College Park, Maryland',
		period: 'Aug 2025 - Present',
		description: 'Traffic Navigation for Curbside Robots',
		achievements: [
			'Developed perception system (3D tracking and detection) using cameras, Lidar for scene understanding.',
			'Engineered a novel approach by combining fine tuned YOLO, cany edge detector and hough line transform for crosswalk detection with correct 3D position and yaw orientation',
			'Curated a behavior tree for navigation and trajectory planning using MPPI Planner and SLAM, enabling safe interaction with vehicles and pedestrians at crosswalks and stop signs with ROS 2, C++ and Python.'
		],
		technologies: ['ROS 2', 'C++', 'Python', 'SLAM', 'MPPI Planner', 'Behavior Tree', 'Perception', 'Lidar', 'Computer Vision'],
		image: '/gamma_logo.png',
		projectImage: '/track 2.png'
	},
	{
		id: 2,
		title: 'Perception Software Engineer',
		company: 'Symbotic LLC (NASDAQ: SYM)',
		location: 'Boston, Massachusetts',
		period: 'May 2025 - Aug 2025',
		description: 'I was part of the Perception - Case Estimation team, working on developing advanced computer vision solutions for autonomous mobile robots in large-scale warehouse environments.',
		achievements: [
			'Developed a Transformer based vision model for Case Re-identification using onboard stereo camera on AMRs, capable of detecting different 20,000 unique SKUs in varied and partially occluded poses in large scale warehouse.',
			'Containerized Case ID detection node using ROS 2 and Docker for deployment on the AMR edge computer - NVIDIA Jetson Xavier by converting to TensorRT model.',
			'Reduced inference time and latency between nodes by 70% using multi-threading and embedding vector caching.',
			'Automated data collection pipeline and syncing temporal data from onboard IMU and 8 RGB cameras.'
		],
		technologies: ['ROS 2', 'Docker', 'Vision Transformer', 'Perception', 'Computer Vision', 'Multi-threading', 'Python', 'Pytorch', 'Embedded Systems'],
		image: '/symbotic_logo.png',
		projectImage: '/symbot.jpeg'
	},
	{
		id: 3,
		title: 'Computer Vision Graduate Research Assistant',
		company: 'Bio-Imaging and Machine Vision (BMV) Lab',
		location: 'College Park, Maryland',
		period: 'Aug 2024 - Apr 2024',
		description: 'Crab Detection Robotics System - Worked on developing computer vision and robotics solutions for automated detection and manipulation systems.',
		achievements: [
			'Engineered real-time computer vision pipeline using ROS and OpenCV, achieving 75% reduction in manual intervention.',
			'Developed dual-backbone neural networks (Masked CNN + Vision Transformer) for segmentation and keypoint detection, improving accuracy by 40%.',
			'Developed hybrid depth estimation system combining single beam dual laser scanning and monocular depth estimation, achieving 87% accuracy for 3D environment mapping',
			'Implemented imitation learning with Adaptive Compliance Policy using multi-modal sensor fusion, achieving 30% improvement in robotic arm precision.',
			'Designed modular software architecture enabling seamless integration of perception, planning, and control modules.'
		],
		technologies: ['ROS', 'OpenCV', 'CNN', 'Vision Transformer', 'Imitation Learning', 'Python', 'C++', 'Object-Oriented Programming'],
		image: '/bmv.png',
		projectImage: '/crabs.png',
		projectLink: 'https://github.com/kunj13/Crab-Detection-and-Cutting-Automation-System'
	},
	{
		id: 4,
		title: 'MITACS Globalink Research Intern',
		company: 'University of Alberta',
		location: 'Edmonton, Canada',
		period: 'May 2023 - Aug 2023',
		description: 'Multi-Agent Reinforcement Learning for Autonomous Vehicle - Conducted research on autonomous vehicle systems using advanced reinforcement learning techniques.',
		achievements: [
			'Implemented Multi-Agent Reinforcement Learning (MARL) for high-density vehicle merging scenarios, improving response times by 30% in dynamic traffic.',
			'Developed a priority-based safety supervisor, achieving a 40% reduction in collision rates during training.',
			'Applied curriculum learning, boosting convergence speed by 25% by gradually increasing task complexity.',
			'Simulated the RL model with custom made OpenAI gym environment in Python using TensorFlow.'
		],
		technologies: ['Reinforcement Learning', 'Multi-Agent Systems', 'OpenAI Gym', 'TensorFlow', 'Python', 'Curriculum Learning', 'Autonomous Vehicles'],
		image: '/uoa.png',
		projectImage: '/marl.png'
	},
];

export default function ExperienceSection() {
	const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

	return (
		<section id="experience" className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Experience
			</motion.h2>

			<div className="space-y-8">
				{experiences.map((experience) => (
					<motion.div
						key={experience.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: experience.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
					>
						<div className="flex flex-col lg:flex-row gap-6">
							{/* Company Logo */}
							<div className="flex-shrink-0">
								<div
									className="w-32 h-28 md:w-40 md:h-36 rounded-xl bg-white/10 flex items-center justify-center p-1 cursor-pointer hover:bg-white/20 transition-colors"
									onClick={() => experience.image && setModalImage({ src: experience.image, alt: `${experience.company} logo` })}
								>
									{experience.image ? (
										<Image
											src={experience.image}
											alt={`${experience.company} logo`}
											width={160}
											height={144}
											className="object-contain w-full h-full"
										/>
									) : (
										<div className="text-2xl font-bold text-gray-400">
											{experience.company.charAt(0)}
										</div>
									)}
								</div>
							</div>

							{/* Experience Content */}
							<div className="flex-1">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
									<div>
										<h3 className="text-xl md:text-2xl font-bold mb-2">{experience.title}</h3>
										<p className="text-blue-400 font-medium">{experience.company}</p>
										<p className="text-gray-400 text-sm">{experience.location}</p>
									</div>
									<span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">{experience.period}</span>
								</div>

								<p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

								{experience.achievements && experience.achievements.length > 0 && (
									<div className="mb-4">
										<ul className="space-y-1">
											{experience.achievements.map((achievement, index) => (
												<li key={index} className="text-sm text-gray-400 flex items-start">
													<span className="text-blue-400 mr-2">•</span>
													{achievement}
												</li>
											))}
										</ul>
									</div>
								)}

								<div className="flex flex-wrap gap-2">
									{experience.technologies.map((tech, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Project Image */}
							{experience.projectImage && (
								<div className="flex-shrink-0 lg:ml-4">
									<div className="space-y-3">
										<div
											className="w-full lg:w-48 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 cursor-pointer hover:border-white/30 transition-colors"
											onClick={() => setModalImage({ src: experience.projectImage, alt: `${experience.title} project` })}
										>
											<Image
												src={experience.projectImage}
												alt={`${experience.title} project`}
												width={192}
												height={128}
												className="object-fill w-full h-full hover:scale-105 transition-transform duration-300"
											/>
										</div>
										{experience.projectLink && (
											<a
												href={experience.projectLink}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center justify-center gap-2 w-full lg:w-48 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
											>
												<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
												</svg>
												View on GitHub
											</a>
										)}
									</div>
								</div>
							)}
						</div>
					</motion.div>
				))}
			</div>

			{/* Image Modal */}
			<ImageModal
				isOpen={modalImage !== null}
				imageSrc={modalImage?.src || ''}
				imageAlt={modalImage?.alt || ''}
				onClose={() => setModalImage(null)}
			/>
		</section>
	);
} 
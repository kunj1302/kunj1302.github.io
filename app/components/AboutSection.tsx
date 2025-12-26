'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
	return (
		<section id="about" className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				About Me
			</motion.h2>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="space-y-6"
				>
					<p className="text-lg text-gray-300 leading-relaxed text-justify">
						I am a graduate robotics student passionate about building intelligent robotic systems. Currently, I am pursuing my Master&apos;s in Robotics Engineering at the University of Maryland, College Park, where I am developing expertise in autonomous systems, computer vision, and AI.
					</p>
					<p className="text-lg text-gray-300 leading-relaxed text-justify">
						My academic foundation includes a Bachelor&apos;s degree in Mechanical Engineering with a minor in Robotics from IIT Jodhpur. During my time there, I worked on several challenging projects, including object detection using LiDAR, reinforcement learning for robotic gait control, and human-following robots.
					</p>
					<p className="text-lg text-gray-300 leading-relaxed text-justify">
						I have gained valuable industry experience through internships at Symbotic LLC as a Perception Software Engineer, working on autonomous mobile robots for warehouse automation, and as a MITACS Globalink Research Intern at the University of Alberta, focusing on multi-agent reinforcement learning for autonomous vehicles.
					</p>
					<p className="text-lg text-gray-300 leading-relaxed text-justify">
						Beyond software, I am also passionate about robot design and have a strong proficiency in SolidWorks. My technical skills span Python, C++, ROS 2, TensorFlow, and OpenCV. I am particularly interested in designing robotic systems, building software for robots, exploring advanced computer vision techniques, and path planning.
					</p>
					<div className="pt-4">
						<a
							href="https://drive.google.com/file/d/16Z_HCsU7W7FJGrFFjumbf2hjwfRPXSlT/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
								<path d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8z" />
								<path d="M8 7a1 1 0 100 2h4a1 1 0 100-2H8z" />
							</svg>
							View Resume
						</a>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-white/10"
				>
					<h3 className="text-2xl font-bold mb-6 text-center">Key Focus Areas</h3>
					<div className="space-y-4">
						<div className="flex items-center space-x-4">
							<div className="w-3 h-3 bg-blue-400 rounded-full"></div>
							<span className="text-gray-300">Autonomous Robotics & Navigation</span>
						</div>
						<div className="flex items-center space-x-4">
							<div className="w-3 h-3 bg-purple-400 rounded-full"></div>
							<span className="text-gray-300">Computer Vision & Object Detection</span>
						</div>
						<div className="flex items-center space-x-4">
							<div className="w-3 h-3 bg-blue-400 rounded-full"></div>
							<span className="text-gray-300">Machine Learning & Deep Learning</span>
						</div>
						<div className="flex items-center space-x-4">
							<div className="w-3 h-3 bg-purple-400 rounded-full"></div>
							<span className="text-gray-300">ROS & Robotic Systems</span>
						</div>
						<div className="flex items-center space-x-4">
							<div className="w-3 h-3 bg-blue-400 rounded-full"></div>
							<span className="text-gray-300">AI/ML Model Deployment</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
} 
'use client';

import { motion } from 'framer-motion';

const skillCategories = [
	{
		title: 'Programming Languages',
		skills: ['Python', 'C++', 'MATLAB', 'R', 'TypeScript'],
		color: 'from-blue-500 to-blue-600'
	},
	{
		title: 'Machine Learning & Robotics',
		skills: ['Reinforcement Learning', 'Imitation Learning', 'Deep Neural Networks'],
		color: 'from-purple-500 to-purple-600'
	},
	{
		title: 'Robotics Frameworks & Tools',
		skills: ['ROS', 'OpenAI Gym', 'Gazebo', 'PyBullet', 'MuJoCo', 'OpenCV', 'TensorFlow', 'PyTorch'],
		color: 'from-green-500 to-green-600'
	},
	{
		title: 'Software Development',
		skills: ['Object-Oriented Programming', 'Git', 'React', 'CI/CD - Travis', 'Docker', 'Jenkins', 'Kubernetes'],
		color: 'from-red-500 to-red-600'
	}
];

export default function SkillsSection() {
	return (
		<section id="skills" className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
				>
					Skills & Technologies
				</motion.h2>

				<div className="space-y-12">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
							className="space-y-6"
						>
							<motion.h3
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.2 }}
								className={`text-2xl font-bold text-center bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
							>
								{category.title}
							</motion.h3>
							
							<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
										whileHover={{ scale: 1.05 }}
										className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
									>
										<h4 className="text-sm md:text-base font-medium text-gray-300">{skill}</h4>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}

					{/* Coursework Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="space-y-6"
					>
						<motion.h3
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.7 }}
							className="text-2xl font-bold text-center bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent"
						>
							Coursework
						</motion.h3>
						
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{/* Robotics Courses */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.8 }}
								className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
							>
								<h4 className="text-lg font-bold text-center mb-4 text-blue-400">Robotics Courses</h4>
								<ul className="space-y-2">
									{[
										'Robot Modeling',
										'Control of Robotics Systems',
										'Perception of Autonomous Systems',
										'Planning for Autonomous Systems',
										'Mobile Robots',
										'Autonomous Systems',
										'Robot Learning',
									
									].map((course, index) => (
										<motion.li
											key={course}
											initial={{ opacity: 0, x: -10 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
											className="text-sm text-gray-300 flex items-center"
										>
											<span className="text-blue-400 mr-2">•</span>
											{course}
										</motion.li>
									))}
								</ul>
							</motion.div>

							{/* Computer Science Courses */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.9 }}
								className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
							>
								<h4 className="text-lg font-bold text-center mb-4 text-purple-400">Computer Science Courses</h4>
								<ul className="space-y-2">
									{[
										'Robot Programming',
										'Introduction to Computer Science',
										'Introduction to Machine Learning',
										'Data Structures and Algorithms',
										'Scientific Computations',
										'Computer Vision',
										'Deep Learning'
									].map((course, index) => (
										<motion.li
											key={course}
											initial={{ opacity: 0, x: -10 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.4, delay: 1.0 + index * 0.05 }}
											className="text-sm text-gray-300 flex items-center"
										>
											<span className="text-purple-400 mr-2">•</span>
											{course}
										</motion.li>
									))}
								</ul>
							</motion.div>

							{/* MOOCs */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 1.0 }}
								className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
							>
								<h4 className="text-lg font-bold text-center mb-4 text-green-400">MOOCs</h4>
								<ul className="space-y-2">
									{[
										'Machine Learning (Stanford University)',
										'ROS: Localization, Navigation and SLAM (Anis Koubaa)',
										'Aerial Robotics (University of Pennsylvania)',
										'A Hands-On Introduction to Engineering Simulations (Cornell)'
									].map((course, index) => (
										<motion.li
											key={course}
											initial={{ opacity: 0, x: -10 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.4, delay: 1.1 + index * 0.05 }}
											className="text-sm text-gray-300 flex items-center"
										>
											<span className="text-green-400 mr-2">•</span>
											{course}
										</motion.li>
									))}
								</ul>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

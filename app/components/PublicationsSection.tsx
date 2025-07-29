'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ImageModal from './ImageModal';

const publications = [
	{
		id: 1,
		title: 'Alleviation of Viscoelastic Creep in Electrostatically Driven Soft Dielectric Elastomer Actuators Using Input Shaping Scheme',
		journal: '20th IEEE/ASME International Conference on Mechatronic and Embedded Systems and Applications (MESA)',
		period: '2024',
		description: 'Presented research on alleviating viscoelastic creep in electrostatically driven soft dielectric elastomer actuators using input shaping scheme at the IEEE/ASME MESA conference in Genova, Italy.',
		achievements: [
			'Developed input shaping scheme to reduce viscoelastic creep in dielectric elastomer actuators.',
			'Presented research at prestigious IEEE/ASME MESA conference in Genova, Italy.',
			'Improved actuator performance and reliability through innovative control techniques.'
		],
		technologies: ['Dielectric Elastomer Actuators', 'Input Shaping', 'Viscoelastic Creep Control', 'Soft Robotics', 'Control Systems'],
		paperLink: 'https://ieeexplore.ieee.org/abstract/document/10704839',
		image: '/IEEE.jpg'
	},
	{
		id: 2,
		title: 'A polyester-stainless steel based smart wristband sensor for skin temperature monitoring',
		journal: 'The Journal of The Textile Institute',
		period: '2024',
		description: 'Developed a smart wristband sensor using polyester-stainless steel materials for continuous skin temperature monitoring with enhanced comfort and accuracy.',
		achievements: [
			'Designed and fabricated a novel smart wristband sensor using polyester-stainless steel composite materials.',
			'Implemented continuous skin temperature monitoring with improved comfort and accuracy for wearable applications.'
		],
		technologies: ['Smart Textiles', 'Temperature Sensing', 'Wearable Technology', 'Polyester-Stainless Steel Composite', 'Biomedical Sensors'],
		paperLink: 'https://www.tandfonline.com/doi/abs/10.1080/00405000.2024.2392905',
		image: '/textile.jpg'
	},
	{
		id: 3,
		title: 'Towards High Efficiency and Rapid Production of Room-Temperature Liquid Metal Wires Compatible with Electronic Prototyping Connectors',
		journal: 'Micromachines Journal',
		period: '2023',
		description: 'Contributed to research on developing high-efficiency methods for producing room-temperature liquid metal wires that are compatible with standard electronic prototyping connectors.',
		achievements: [
			'Collaborated on developing rapid production methods for room-temperature liquid metal wires.',
			'Ensured compatibility with standard electronic prototyping connectors for practical applications.'
		],
		technologies: ['Liquid Metal Technology', 'Electronic Prototyping', 'Wire Manufacturing', 'Room-Temperature Processing', 'Connector Compatibility'],
		paperLink: 'https://www.mdpi.com/2072-666X/14/12/2227',
		image: '/micro.png'
	}
];

export default function PublicationsSection() {
	const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

	return (
		<section id="publications" className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Research & Publications
			</motion.h2>

			<div className="space-y-8">
				{publications.map((publication) => (
					<motion.div
						key={publication.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: publication.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
					>
						<div className="flex flex-col lg:flex-row gap-6">
							{/* Journal Logo */}
							<div className="flex-shrink-0">
								<div 
									className="w-32 h-28 md:w-40 md:h-36 rounded-xl bg-white/10 flex items-center justify-center p-1 cursor-pointer hover:bg-white/20 transition-colors"
									onClick={() => publication.image && setModalImage({ src: publication.image, alt: `${publication.journal} logo` })}
								>
									{publication.image ? (
										<Image 
											src={publication.image} 
											alt={`${publication.journal} logo`}
											width={160}
											height={144}
											className="object-contain w-full h-full"
										/>
									) : (
										<div className="text-2xl font-bold text-gray-400">
											{publication.journal.charAt(0)}
										</div>
									)}
								</div>
							</div>

							{/* Publication Content */}
							<div className="flex-1">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
									<div>
										<h3 className="text-xl md:text-2xl font-bold mb-2">{publication.title}</h3>
										<p className="text-blue-400 font-medium">{publication.journal}</p>
									</div>
									<span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">{publication.period}</span>
								</div>
								
								<p className="text-gray-300 mb-4 leading-relaxed">{publication.description}</p>
								
								{publication.achievements && publication.achievements.length > 0 && (
									<div className="mb-4">
										<ul className="space-y-1">
											{publication.achievements.map((achievement, index) => (
												<li key={index} className="text-sm text-gray-400 flex items-start">
													<span className="text-blue-400 mr-2">•</span>
													{achievement}
												</li>
											))}
										</ul>
									</div>
								)}
								
								<div className="flex flex-wrap gap-2 mb-4">
									{publication.technologies.map((tech, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-3">
									<Link 
										href={publication.paperLink} 
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
									>
										<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
											<path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
											<path d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8z" />
											<path d="M8 7a1 1 0 100 2h4a1 1 0 100-2H8z" />
										</svg>
										Read Paper
									</Link>
								</div>
							</div>
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
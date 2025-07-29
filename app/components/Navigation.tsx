'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Experience', href: '#experience' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Publications', href: '#publications' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Contact', href: '#contact' },
];

export default function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-black/80 backdrop-blur-md border-b border-white/10'
					: 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
					>
						KG
					</motion.div>

					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<motion.button
								key={item.name}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => scrollToSection(item.href)}
								className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
							>
								{item.name}
							</motion.button>
						))}
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<motion.button
							whileTap={{ scale: 0.95 }}
							className="text-gray-300 hover:text-white transition-colors"
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</motion.button>
					</div>
				</div>
			</div>
		</motion.nav>
	);
} 
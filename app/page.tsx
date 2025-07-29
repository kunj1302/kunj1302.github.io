'use client';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import PublicationsSection from './components/PublicationsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Navigation />
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			<ProjectsSection />
			<PublicationsSection />
			<SkillsSection />
			<ContactSection />
		</div>
	);
}

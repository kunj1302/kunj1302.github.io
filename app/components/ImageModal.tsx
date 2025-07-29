'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ImageModalProps {
	isOpen: boolean;
	imageSrc: string;
	imageAlt: string;
	onClose: () => void;
}

export default function ImageModal({ isOpen, imageSrc, imageAlt, onClose }: ImageModalProps) {
	// Check if the source is a video file
	const isVideo = imageSrc.toLowerCase().endsWith('.mp4') || 
					imageSrc.toLowerCase().endsWith('.webm') || 
					imageSrc.toLowerCase().endsWith('.mov') ||
					imageSrc.toLowerCase().endsWith('.avi');

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
					onClick={onClose}
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						className="relative max-w-4xl max-h-[90vh] mx-4"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={onClose}
							className="absolute -top-4 -right-4 z-10 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
						>
							<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						
						<div className="relative rounded-lg overflow-hidden bg-white/10 border border-white/20">
							{isVideo ? (
								<video
									src={imageSrc}
									className="w-full h-auto max-h-[80vh] object-contain"
									controls
									autoPlay
									loop
									muted
									playsInline
								/>
							) : (
								<Image
									src={imageSrc}
									alt={imageAlt}
									width={800}
									height={600}
									className="w-full h-auto max-h-[80vh] object-contain"
								/>
							)}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
} 
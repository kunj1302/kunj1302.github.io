import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Kunj Golwala - Robotics Engineer & Software Developer',
	description:
		'Welcome to my portfolio! I am a passionate robotics engineer and software developer with expertise in autonomous systems, computer vision, and machine learning.',
	keywords: [
		'Robotics Engineer',
		'Software Developer',
		'Autonomous Systems',
		'Computer Vision',
		'Machine Learning',
		'ROS',
		'Python',
		'C++',
		'MATLAB',
		'Next.js',
		'React',
		'TypeScript',
		'Portfolio',
		'Kunj Golwala',
	],
	authors: [{ name: 'Kunj Golwala' }],
	creator: 'Kunj Golwala',
	openGraph: {
		title: 'Kunj Golwala - Robotics Engineer & Software Developer',
		description: 'Passionate robotics engineer and software developer creating innovative autonomous systems and computer vision solutions.',
		url: 'https://kunj1302.github.io',
		siteName: 'Kunj Golwala - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Kunj Golwala - Robotics Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kunj Golwala - Robotics Engineer & Software Developer',
		description: 'Passionate robotics engineer and software developer creating innovative autonomous systems and computer vision solutions.',
		creator: '@kunj1302',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">
			<head>
				<meta name="darkreader-lock" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function meta(): Array<{
	title?: string;
	name?: string;
	content?: string;
	property?: string;
}> {
	return [
		{ title: "Ngwenya - Malawi Tech Blog" },
		{
			name: "description",
			content:
				"A modern blog platform dedicated to Malawi's tech ecosystem and innovation. Discover the latest technology news, insights, and developments from Malawi.",
		},
		{
			name: "keywords",
			content:
				"Malawi, technology, tech blog, innovation, startups, digital transformation, Africa tech",
		},
		{ property: "og:title", content: "Ngwenya - Malawi Tech Blog" },
		{
			property: "og:description",
			content:
				"A modern blog platform dedicated to Malawi's tech ecosystem and innovation",
		},
		{ property: "og:type", content: "website" },
	];
}

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
			{/* Header */}
			<Header />

			{/* Hero Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
						Malawi's Tech <span className="text-blue-600">Innovation</span> Hub
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
						Discover the latest technology news, insights, and developments from
						Malawi. Join our community of tech enthusiasts shaping the future of
						innovation in Africa.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
							Explore Articles
						</button>
						<button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
							Become a Contributor
						</button>
					</div>
				</div>
			</section>

			{/* Featured Categories */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
						Explore Tech Categories
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{categories.map((category) => (
							<div
								key={category.title}
								className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
							>
								<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
									{category.icon}
								</div>
								<h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
									{category.title}
								</h4>
								<p className="text-gray-600 dark:text-gray-300 mb-4">
									{category.description}
								</p>
								<a
									href="#"
									className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
								>
									Read Articles →
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Community Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
				<div className="max-w-4xl mx-auto text-center">
					<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
						Join the Community
					</h3>
					<p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
						Connect with fellow tech enthusiasts, share your expertise, and stay
						updated with the latest developments in Malawi's tech ecosystem.
					</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center">
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
								<span className="text-green-600 dark:text-green-400 font-bold text-sm">
									✓
								</span>
							</div>
							<span className="text-gray-700 dark:text-gray-300">
								Weekly Tech Updates
							</span>
						</div>
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
								<span className="text-green-600 dark:text-green-400 font-bold text-sm">
									✓
								</span>
							</div>
							<span className="text-gray-700 dark:text-gray-300">
								Expert Insights
							</span>
						</div>
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
								<span className="text-green-600 dark:text-green-400 font-bold text-sm">
									✓
								</span>
							</div>
							<span className="text-gray-700 dark:text-gray-300">
								Community Discussion
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}

const categories = [
	{
		title: "Startup News",
		description:
			"Updates from Malawian tech startups and entrepreneurs driving innovation.",
		icon: (
			<svg
				className="w-6 h-6 text-blue-600 dark:text-blue-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		),
	},
	{
		title: "Government Tech",
		description:
			"Digital transformation initiatives and e-governance developments.",
		icon: (
			<svg
				className="w-6 h-6 text-blue-600 dark:text-blue-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
				/>
			</svg>
		),
	},
	{
		title: "Mobile Technology",
		description: "Mobile apps, USSD services, and mobile money innovations.",
		icon: (
			<svg
				className="w-6 h-6 text-blue-600 dark:text-blue-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
				/>
			</svg>
		),
	},
	{
		title: "Education Technology",
		description: "EdTech developments and digital learning innovations.",
		icon: (
			<svg
				className="w-6 h-6 text-blue-600 dark:text-blue-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
				/>
			</svg>
		),
	},
	{
		title: "Infrastructure",
		description: "Internet connectivity, data centers, and telecommunications.",
		icon: (
			<svg
				className="w-6 h-6 text-blue-600 dark:text-blue-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
				/>
			</svg>
		),
	},
	{
		title: "Innovation Hubs",
		description: "Tech hubs, incubators, and innovation centers across Malawi.",
		icon: (
			<svg
				className="w-6 h-6 text-blue-600 dark:text-blue-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
				/>
			</svg>
		),
	},
];

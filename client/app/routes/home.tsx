import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

// Mock data for featured articles
const featuredArticles = [
	{
		slug: "future-of-fintech-malawi",
		title: "The Future of Fintech in Malawi: Digital Banking Revolution",
		excerpt: "Exploring how mobile money and digital banking are transforming financial inclusion in Malawi, with insights from industry leaders and emerging trends.",
		author: "Sarah Banda",
		date: "Dec 15, 2024",
		category: "Fintech"
	},
	{
		slug: "ai-agriculture-solutions",
		title: "AI-Powered Solutions for Smallholder Farmers",
		excerpt: "How artificial intelligence and machine learning are helping Malawian farmers increase crop yields and improve food security through innovative agricultural technologies.",
		author: "James Mwale",
		date: "Dec 12, 2024",
		category: "AgriTech"
	},
	{
		slug: "blockchain-supply-chain",
		title: "Blockchain Technology in Malawi's Supply Chain",
		excerpt: "Investigating the potential of blockchain technology to improve transparency and efficiency in Malawi's agricultural and manufacturing supply chains.",
		author: "Grace Phiri",
		date: "Dec 10, 2024",
		category: "Blockchain"
	}
];

// Mock data for trending startups
const trendingStartups = [
	{
		slug: "agritech-solutions",
		name: "AgriTech Solutions",
		description: "Providing smart farming solutions to increase crop yields and reduce food waste through IoT sensors and data analytics.",
		industry: "AgriTech",
		founded: "2023"
	},
	{
		slug: "mobile-health-mw",
		name: "MobileHealth MW",
		description: "Telemedicine platform connecting rural communities with healthcare professionals through mobile technology.",
		industry: "HealthTech",
		founded: "2022"
	},
	{
		slug: "edutech-malawi",
		name: "EduTech Malawi",
		description: "Digital learning platform providing quality education content and resources for students across Malawi.",
		industry: "EdTech",
		founded: "2023"
	},
	{
		slug: "fintech-innovations",
		name: "FinTech Innovations",
		description: "Developing financial inclusion solutions for unbanked populations through mobile money and microfinance platforms.",
		industry: "FinTech",
		founded: "2021"
	}
];

// Mock data for platform statistics
const platformStats = [
	{
		label: "Articles Published",
		value: "150+",
		growth: "+25% this month"
	},
	{
		label: "Startups Featured",
		value: "45",
		growth: "+8 this quarter"
	},
	{
		label: "Contributors",
		value: "30",
		growth: "+5 this month"
	},
	{
		label: "Monthly Readers",
		value: "5.2K",
		growth: "+15% growth"
	}
];

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
						<Link
							to="/articles"
							className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
						>
							Explore Articles
						</Link>
						<Link
							to="/contributors"
							className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
						>
							Become a Contributor
						</Link>
					</div>
				</div>
			</section>

			{/* Featured Articles */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
							Latest Insights
						</h3>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							Stay updated with the latest developments in Malawi's tech ecosystem
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{featuredArticles.map((article) => (
							<Link
								key={article.id}
								to={`/articles/${article.slug}`}
								className="group"
							>
								<article className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
									<div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 relative">
										<div className="absolute inset-0 bg-black/20"></div>
										<div className="absolute bottom-4 left-4">
											<span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
												{article.category}
											</span>
										</div>
									</div>
									<div className="p-6">
										<h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
											{article.title}
										</h4>
										<p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
											{article.excerpt}
										</p>
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-2">
												<div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
													<span className="text-blue-600 dark:text-blue-400 font-bold text-xs">
														{article.author.charAt(0)}
													</span>
												</div>
												<div>
													<p className="text-sm font-medium text-gray-900 dark:text-white">
														{article.author}
													</p>
													<p className="text-xs text-gray-500 dark:text-gray-400">
														{article.date}
													</p>
												</div>
											</div>
											<span className="text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:underline">
												Read more →
											</span>
										</div>
									</div>
								</article>
							</Link>
						))}
					</div>
					<div className="text-center mt-12">
						<Link
							to="/articles"
							className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
						>
							View All Articles
						</Link>
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
								<Link
									to="/categories"
									className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
								>
									Read Articles →
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Trending Startups */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
							Rising Startups
						</h3>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							Discover innovative startups driving Malawi's digital transformation
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{trendingStartups.map((startup) => (
							<Link
								key={startup.id}
								to={`/startup-directory/${startup.slug}`}
								className="group"
							>
								<div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center">
									<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
										<span className="text-white text-xl font-bold">
											{startup.name.charAt(0)}
										</span>
									</div>
									<h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
										{startup.name}
									</h4>
									<p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
										{startup.industry}
									</p>
									<p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
										{startup.description}
									</p>
									<div className="flex items-center justify-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
										<span className="flex items-center">
											<svg
												className="w-3 h-3 mr-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											{startup.location}
										</span>
										<span className="flex items-center">
											<svg
												className="w-3 h-3 mr-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v1a1 1 0 01-1 1h-1v11a1 1 0 01-1 1H7a1 1 0 01-1-1V10H5a1 1 0 01-1-1V8a1 1 0 011-1h3z"
												/>
											</svg>
											{startup.stage}
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
					<div className="text-center mt-12">
						<Link
							to="/startup-directory"
							className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
						>
							Explore All Startups
						</Link>
					</div>
				</div>
			</section>

			{/* Platform Stats */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
							Growing Together
						</h3>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							Building Malawi's largest tech community, one story at a time
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{platformStats.map((stat) => (
							<div key={stat.label} className="text-center">
								<div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
									{stat.icon}
								</div>
								<div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
									{stat.value}
								</div>
								<div className="text-gray-600 dark:text-gray-300 font-medium">
									{stat.label}
								</div>
								<div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
									{stat.subtitle}
								</div>
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

			{/* Featured Articles Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-between items-center mb-12">
						<h3 className="text-3xl font-bold text-gray-900 dark:text-white">
							Featured Articles
						</h3>
						<Link
							to="/articles"
							className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
						>
							View All Articles →
						</Link>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{featuredArticles.map((article) => (
							<Link
								key={article.slug}
								to={`/articles/${article.slug}`}
								className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
							>
								<div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
									<div className="absolute inset-0 bg-black/20"></div>
									<div className="absolute bottom-4 left-4 right-4">
										<span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
											{article.category}
										</span>
									</div>
								</div>
								<div className="p-6">
									<h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
										{article.title}
									</h4>
									<p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
										{article.excerpt}
									</p>
									<div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
										<span>{article.author}</span>
										<span>{article.date}</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Trending Startups Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-between items-center mb-12">
						<h3 className="text-3xl font-bold text-gray-900 dark:text-white">
							Trending Startups
						</h3>
						<Link
							to="/startup-directory"
							className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
						>
							View All Startups →
						</Link>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{trendingStartups.map((startup) => (
							<Link
								key={startup.slug}
								to={`/startup-directory/${startup.slug}`}
								className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
							>
								<div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
									<span className="text-white font-bold text-xl">{startup.name.charAt(0)}</span>
								</div>
								<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
									{startup.name}
								</h4>
								<p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
									{startup.description}
								</p>
								<div className="flex items-center justify-between">
									<span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
										{startup.industry}
									</span>
									<span className="text-xs text-gray-500 dark:text-gray-400">
										{startup.founded}
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Platform Statistics */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
						Platform Impact
					</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{platformStats.map((stat) => (
							<div
								key={stat.label}
								className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
							>
								<div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
									{stat.value}
								</div>
								<div className="text-gray-600 dark:text-gray-300 font-medium">
									{stat.label}
								</div>
								<div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
									{stat.growth}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call-to-Action Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="max-w-4xl mx-auto text-center">
					<h3 className="text-3xl font-bold text-white mb-6">
						Be Part of Malawi's Tech Revolution
					</h3>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						Whether you're a developer, entrepreneur, or tech enthusiast, join our growing community and help shape the future of technology in Malawi.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/contributors/apply"
							className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
						>
							Become a Contributor
						</Link>
						<Link
							to="/startup-directory/submit"
							className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
						>
							Submit Your Startup
						</Link>
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
				aria-hidden="true"
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
				aria-hidden="true"
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
				aria-hidden="true"
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
				aria-hidden="true"
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

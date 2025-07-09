import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function meta() {
    return [
        { title: "Contributors - Ngwenya Tech Blog" },
        { name: "description", content: "Meet the tech experts, entrepreneurs, and thought leaders contributing to Malawi's tech community." },
        { name: "keywords", content: "tech writers, Malawi tech experts, contributors, thought leaders, tech community" },
    ];
}

export default function Contributors() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Our Contributors
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Meet the passionate individuals sharing their expertise and insights to drive Malawi's tech ecosystem forward
                    </p>
                </div>

                <div className="mb-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Share Your Expertise</h2>
                        <p className="text-xl mb-6 max-w-2xl mx-auto">
                            Join our community of tech leaders and help shape the narrative of Malawi's digital transformation
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                type="button"
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Become a Contributor
                            </button>
                            <button
                                type="button"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                Contributor Guidelines
                            </button>
                        </div>
                    </div>
                </div>

                {/* Featured Contributors */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Featured Contributors
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredContributors.map((contributor) => (
                            <div key={contributor.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">
                                        {contributor.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {contributor.name}
                                </h3>
                                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                                    {contributor.title}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    {contributor.bio}
                                </p>
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {contributor.expertise.map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    {contributor.articles} articles • {contributor.followers} followers
                                </div>
                                <button
                                    type="button"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                                >
                                    View Profile
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* All Contributors */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        All Contributors
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {allContributors.map((contributor) => (
                            <div key={contributor.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-lg font-bold">
                                            {contributor.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                            {contributor.name}
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                                            {contributor.title}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {contributor.company}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {contributor.articles} articles
                                        </p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500">
                                            Joined {contributor.joinDate}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                        {contributor.recentArticle}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {contributor.topics.slice(0, 3).map((topic) => (
                                            <span
                                                key={topic}
                                                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                    <button
                        type="button"
                        className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        Load More Contributors
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}

const featuredContributors = [
    {
        id: 1,
        name: "Grace Phiri",
        title: "AgriTech Specialist",
        bio: "Expert in agricultural technology and digital farming solutions. Passionate about empowering smallholder farmers through innovation.",
        expertise: ["AgriTech", "IoT", "Data Analytics"],
        articles: 15,
        followers: 284,
    },
    {
        id: 2,
        name: "Michael Tembo",
        title: "Startup Ecosystem Analyst",
        bio: "Serial entrepreneur and startup mentor with deep insights into Malawi's emerging tech landscape.",
        expertise: ["Startups", "Investment", "Business Strategy"],
        articles: 22,
        followers: 451,
    },
    {
        id: 3,
        name: "Sarah Mwale",
        title: "Digital Government Expert",
        bio: "Policy researcher focused on digital transformation in government services and e-governance initiatives.",
        expertise: ["E-Government", "Policy", "Digital Transformation"],
        articles: 18,
        followers: 367,
    },
];

const allContributors = [
    {
        id: 4,
        name: "David Kanyama",
        title: "EdTech Developer",
        company: "EduTech Solutions",
        articles: 12,
        joinDate: "Jan 2024",
        recentArticle: "Building Offline-First Educational Apps for Rural Areas",
        topics: ["EdTech", "Mobile Development", "Education"],
    },
    {
        id: 5,
        name: "Mercy Chikwawa",
        title: "HealthTech Researcher",
        company: "Digital Health Initiative",
        articles: 9,
        joinDate: "Mar 2024",
        recentArticle: "Telemedicine Adoption in Malawi's Rural Communities",
        topics: ["HealthTech", "Research", "Rural Healthcare"],
    },
    {
        id: 6,
        name: "James Munthali",
        title: "Fintech Engineer",
        company: "MalaPayments",
        articles: 14,
        joinDate: "Nov 2023",
        recentArticle: "Building Secure Mobile Money APIs",
        topics: ["Fintech", "Security", "API Development"],
    },
    {
        id: 7,
        name: "Esther Banda",
        title: "Women in Tech Advocate",
        company: "Tech Sisters Malawi",
        articles: 16,
        joinDate: "Aug 2023",
        recentArticle: "Breaking Gender Barriers in STEM Education",
        topics: ["Diversity", "Leadership", "Mentorship"],
    },
    {
        id: 8,
        name: "Peter Chidziwitsano",
        title: "Infrastructure Specialist",
        company: "ConnectMW",
        articles: 8,
        joinDate: "May 2024",
        recentArticle: "5G Network Deployment Challenges in Malawi",
        topics: ["Infrastructure", "Telecommunications", "5G"],
    },
];

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function meta() {
    return [
        { title: "Categories - Ngwenya Tech Blog" },
        { name: "description", content: "Browse technology articles by category. Find content about startups, government tech, education, and more." },
        { name: "keywords", content: "tech categories, Malawi technology topics, startup news, government tech, education technology" },
    ];
}

export default function Categories() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Article Categories
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Explore technology topics that matter to Malawi's digital transformation
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <div key={category.id} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                                {category.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {category.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                {category.description}
                            </p>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {category.articleCount} articles
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Updated {category.lastUpdated}
                                </span>
                            </div>
                            <button
                                type="button"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                                View Articles
                            </button>
                        </div>
                    ))}
                </div>

                {/* Popular Topics */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Popular Topics
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {popularTopics.map((topic) => (
                            <span
                                key={topic}
                                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors cursor-pointer"
                            >
                                #{topic}
                            </span>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

const categories = [
    {
        id: 1,
        name: "Startup News",
        description: "Updates from Malawian tech startups and entrepreneurs driving innovation.",
        articleCount: 24,
        lastUpdated: "2 days ago",
        icon: (
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 2,
        name: "Government Tech",
        description: "Digital transformation initiatives and e-governance developments.",
        articleCount: 18,
        lastUpdated: "1 week ago",
        icon: (
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        id: 3,
        name: "Mobile Technology",
        description: "Mobile apps, USSD services, and mobile money innovations.",
        articleCount: 32,
        lastUpdated: "3 days ago",
        icon: (
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
            </svg>
        ),
    },
    {
        id: 4,
        name: "Education Technology",
        description: "EdTech developments and digital learning innovations.",
        articleCount: 15,
        lastUpdated: "5 days ago",
        icon: (
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        id: 5,
        name: "Infrastructure",
        description: "Internet connectivity, data centers, and telecommunications.",
        articleCount: 12,
        lastUpdated: "1 week ago",
        icon: (
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
    },
    {
        id: 6,
        name: "Innovation Hubs",
        description: "Tech hubs, incubators, and innovation centers across Malawi.",
        articleCount: 9,
        lastUpdated: "2 weeks ago",
        icon: (
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
];

const popularTopics = [
    "Fintech",
    "AgriTech",
    "HealthTech",
    "E-commerce",
    "Blockchain",
    "AI & ML",
    "Cybersecurity",
    "5G Technology",
    "IoT",
    "Digital Banking",
    "Remote Work",
    "Smart Cities",
];

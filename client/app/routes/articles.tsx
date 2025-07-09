import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function meta() {
    return [
        { title: "Articles - Ngwenya Tech Blog" },
        { name: "description", content: "Read the latest technology articles and insights from Malawi's tech community." },
        { name: "keywords", content: "Malawi tech articles, technology news, innovation stories, startup updates" },
    ];
}

export default function Articles() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Latest Articles
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover insights, stories, and developments from Malawi's vibrant tech ecosystem
                    </p>
                </div>

                {/* Featured Article */}
                <div className="mb-16">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                            </div>
                            <div className="md:w-1/2 p-8">
                                <div className="flex items-center mb-4">
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                                        Featured
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    The Rise of Fintech in Malawi: A Digital Revolution
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    Exploring how mobile money and digital financial services are transforming
                                    Malawi's economy and creating new opportunities for innovation.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">John Banda</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Dec 15, 2024</p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockArticles.map((article) => (
                        <article key={article.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                                        {article.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-900 dark:text-white">{article.author}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{article.date}</p>
                                        </div>
                                    </div>
                                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                                        Read →
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                    <button
                        type="button"
                        className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        Load More Articles
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}

const mockArticles = [
    {
        id: 1,
        title: "Digital Agriculture: Smart Farming in Rural Malawi",
        excerpt: "How IoT sensors and mobile apps are helping smallholder farmers increase crop yields and optimize resource usage.",
        category: "Agriculture Tech",
        author: "Grace Phiri",
        date: "Dec 12, 2024",
    },
    {
        id: 2,
        title: "Malawi's First Tech Unicorn: A Vision for 2030",
        excerpt: "Analyzing the potential for Malawi to produce its first billion-dollar tech company and what it would take.",
        category: "Startup News",
        author: "Michael Tembo",
        date: "Dec 10, 2024",
    },
    {
        id: 3,
        title: "E-Government Success: Digital ID Rollout",
        excerpt: "The successful implementation of Malawi's digital identity system and its impact on service delivery.",
        category: "Government Tech",
        author: "Sarah Mwale",
        date: "Dec 8, 2024",
    },
    {
        id: 4,
        title: "EdTech Revolution: Online Learning Platforms",
        excerpt: "How local EdTech startups are bridging the digital divide in Malawi's education sector.",
        category: "Education",
        author: "David Kanyama",
        date: "Dec 5, 2024",
    },
    {
        id: 5,
        title: "Mobile Health Solutions Saving Lives",
        excerpt: "Innovative mobile health applications providing healthcare access to remote communities.",
        category: "HealthTech",
        author: "Mercy Chikwawa",
        date: "Dec 3, 2024",
    },
    {
        id: 6,
        title: "Women in Tech: Breaking Barriers",
        excerpt: "Celebrating female tech leaders and entrepreneurs who are driving change in Malawi's tech scene.",
        category: "Diversity",
        author: "Esther Banda",
        date: "Dec 1, 2024",
    },
];

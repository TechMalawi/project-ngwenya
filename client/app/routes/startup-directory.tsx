import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function meta() {
    return [
        { title: "Startup Directory - Ngwenya Tech Blog" },
        { name: "description", content: "Discover innovative tech startups and companies driving digital transformation in Malawi." },
        { name: "keywords", content: "Malawi startups, tech companies, startup directory, innovation, entrepreneurs" },
    ];
}

export default function StartupDirectory() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Malawi Startup Directory
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Discover the innovative companies and entrepreneurs building the future of technology in Malawi
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Search startups..."
                            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        />
                        <select className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                            <option value="">All Industries</option>
                            <option value="fintech">Fintech</option>
                            <option value="agritech">AgriTech</option>
                            <option value="healthtech">HealthTech</option>
                            <option value="edtech">EdTech</option>
                            <option value="ecommerce">E-commerce</option>
                        </select>
                        <select className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                            <option value="">All Stages</option>
                            <option value="idea">Idea Stage</option>
                            <option value="startup">Early Stage</option>
                            <option value="growth">Growth Stage</option>
                            <option value="mature">Mature</option>
                        </select>
                    </div>
                </div>

                {/* Featured Startup */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Startup</h2>
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center mb-4">
                                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-4">
                                        <span className="text-2xl font-bold text-blue-600">MP</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">MalaPay</h3>
                                        <p className="text-blue-100">Digital Payment Platform</p>
                                    </div>
                                </div>
                                <p className="text-lg mb-6">
                                    Revolutionary mobile payment solution connecting rural communities to the digital economy
                                    through USSD and mobile app technology.
                                </p>
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Fintech</span>
                                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Mobile Money</span>
                                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Financial Inclusion</span>
                                </div>
                                <button
                                    type="button"
                                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Learn More
                                </button>
                            </div>
                            <div className="hidden lg:block">
                                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                                    <h4 className="font-semibold mb-4">Company Stats</h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-blue-100">Founded</p>
                                            <p className="font-semibold">2022</p>
                                        </div>
                                        <div>
                                            <p className="text-blue-100">Team Size</p>
                                            <p className="font-semibold">15-20</p>
                                        </div>
                                        <div>
                                            <p className="text-blue-100">Funding</p>
                                            <p className="font-semibold">Seed Stage</p>
                                        </div>
                                        <div>
                                            <p className="text-blue-100">Location</p>
                                            <p className="font-semibold">Lilongwe</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Startup Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {startups.map((startup) => (
                        <div key={startup.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        {startup.name.substring(0, 2).toUpperCase()}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{startup.name}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{startup.industry}</p>
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                                {startup.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {startup.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                                <div>
                                    <p>Founded: {startup.founded}</p>
                                    <p>Stage: {startup.stage}</p>
                                </div>
                                <div>
                                    <p>Team: {startup.teamSize}</p>
                                    <p>Location: {startup.location}</p>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                            >
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>

                {/* Submit Startup CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Add Your Startup
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            Are you building the next big thing in Malawi's tech scene? Join our directory and
                            connect with the community, investors, and potential partners.
                        </p>
                        <button
                            type="button"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Submit Your Startup
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

const startups = [
    {
        id: 1,
        name: "AgriConnect",
        industry: "AgriTech",
        description: "Connecting smallholder farmers with markets through a digital platform for crop sales and agricultural insights.",
        tags: ["Agriculture", "Mobile App", "Market Access"],
        founded: "2023",
        stage: "Early Stage",
        teamSize: "5-10",
        location: "Blantyre",
    },
    {
        id: 2,
        name: "EduLearn",
        industry: "EdTech",
        description: "Interactive online learning platform providing quality education content in local languages.",
        tags: ["Education", "Online Learning", "Local Content"],
        founded: "2022",
        stage: "Growth Stage",
        teamSize: "10-15",
        location: "Lilongwe",
    },
    {
        id: 3,
        name: "HealthLink",
        industry: "HealthTech",
        description: "Telemedicine platform connecting rural patients with healthcare providers via mobile technology.",
        tags: ["Healthcare", "Telemedicine", "Rural Access"],
        founded: "2023",
        stage: "Early Stage",
        teamSize: "8-12",
        location: "Mzuzu",
    },
    {
        id: 4,
        name: "LogiFlow",
        industry: "Logistics",
        description: "Smart logistics and delivery management system for small and medium businesses.",
        tags: ["Logistics", "Delivery", "SME Solutions"],
        founded: "2022",
        stage: "Growth Stage",
        teamSize: "12-18",
        location: "Lilongwe",
    },
    {
        id: 5,
        name: "GreenEnergy Solutions",
        industry: "CleanTech",
        description: "Solar energy management and monitoring systems for residential and commercial use.",
        tags: ["Solar", "Clean Energy", "IoT"],
        founded: "2021",
        stage: "Mature",
        teamSize: "20-25",
        location: "Blantyre",
    },
    {
        id: 6,
        name: "DataInsights MW",
        industry: "Analytics",
        description: "Business intelligence and data analytics platform for African businesses.",
        tags: ["Data Analytics", "Business Intelligence", "SaaS"],
        founded: "2023",
        stage: "Early Stage",
        teamSize: "6-10",
        location: "Lilongwe",
    },
];

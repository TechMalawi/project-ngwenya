import { useParams, Link } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function meta() {
    return [
        { title: "Article - Ngwenya Tech Blog" },
        { name: "description", content: "Read the full article on Malawi's tech ecosystem and innovation." },
        { name: "keywords", content: "Malawi tech article, technology insights, innovation story" },
    ];
}

// Mock article data - in a real app, this would come from an API or CMS
const mockArticle = {
    id: "1",
    title: "The Rise of Fintech in Malawi: A Digital Revolution",
    slug: "rise-of-fintech-malawi",
    author: {
        name: "Sarah Baker",
        email: "sarahbaker@strapi.io",
        avatar: "/uploads/sarahbaker@strapi.io.jpg",
        bio: "Fintech journalist and digital innovation expert based in Lilongwe"
    },
    publishedAt: "2024-12-15",
    category: "Fintech",
    tags: ["fintech", "mobile money", "digital banking", "innovation"],
    readTime: "8 min read",
    featuredImage: "/uploads/coffee-beans.jpg"
};

export default function Article() {
    const { slug } = useParams();

    // In a real app, you would fetch the article based on the slug
    // const article = await fetchArticle(slug);
    console.log("Article slug:", slug);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Article Header */}
                <div className="mb-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                            {mockArticle.category}
                        </span>
                        <span>•</span>
                        <span>{mockArticle.readTime}</span>
                        <span>•</span>
                        <span>{new Date(mockArticle.publishedAt).toLocaleDateString()}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {mockArticle.title}
                    </h1>

                    <div className="flex items-center space-x-4 mb-8">
                        <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                            <img
                                src={mockArticle.author.avatar}
                                alt={mockArticle.author.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <div className="w-full h-full bg-gray-300 dark:bg-gray-600 hidden items-center justify-center">
                                <span className="text-gray-600 dark:text-gray-400 font-medium">
                                    {mockArticle.author.name.charAt(0)}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                {mockArticle.author.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {mockArticle.author.bio}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="mb-8">
                    <div className="w-full h-64 md:h-96 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl overflow-hidden">
                        <img
                            src={mockArticle.featuredImage}
                            alt={mockArticle.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none dark:prose-invert">
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
                        <p>
                            Malawi's financial technology sector is experiencing unprecedented growth, transforming how citizens access and manage financial services. From mobile money platforms to digital lending solutions, fintech innovations are bridging the gap between traditional banking and the unbanked population.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Mobile Money Leading the Charge</h2>
                        <p>
                            Mobile money services have become the backbone of Malawi's digital financial ecosystem. Platforms like Airtel Money and TNM Mpamba have revolutionized how people send money, pay bills, and access basic financial services, especially in rural areas where traditional banking infrastructure is limited.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Digital Lending Solutions</h2>
                        <p>
                            The emergence of digital lending platforms has provided alternative credit solutions for individuals and small businesses previously excluded from traditional banking. These platforms use innovative credit scoring methods, including mobile money transaction history and social network analysis.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Regulatory Support</h2>
                        <p>
                            The Reserve Bank of Malawi has been instrumental in creating a supportive regulatory environment for fintech innovation. The introduction of regulatory sandboxes has allowed startups to test their solutions in a controlled environment before full market deployment.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Challenges and Opportunities</h2>
                        <p>
                            While the growth is impressive, challenges remain. Digital literacy, infrastructure limitations, and regulatory compliance continue to pose hurdles. However, these challenges also present opportunities for innovative solutions and partnerships between traditional financial institutions and fintech startups.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Looking Forward</h2>
                        <p>
                            The future of fintech in Malawi looks promising. With increasing smartphone penetration, improving internet connectivity, and a growing young population comfortable with digital services, the sector is poised for continued expansion. The key will be ensuring that this growth is inclusive and reaches all segments of society.
                        </p>
                    </div>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                        {mockArticle.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Related Articles Section */}
                <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mock related articles */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="h-32 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mb-4"></div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Digital Banking Adoption in Rural Malawi
                            </h5>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                How digital banking services are reaching underserved communities...
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                <span>5 min read</span>
                                <span>Dec 10, 2024</span>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mb-4"></div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Regulatory Sandboxes: Fostering Innovation
                            </h5>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                How regulatory frameworks are adapting to support fintech growth...
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                <span>6 min read</span>
                                <span>Dec 8, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-12 flex justify-between items-center">
                    <Link
                        to="/articles"
                        className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Articles</span>
                    </Link>

                    <div className="flex space-x-4">
                        <button
                            type="button"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Share Article
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

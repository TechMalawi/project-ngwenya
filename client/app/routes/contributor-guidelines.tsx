import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function meta() {
    return [
        { title: "Contributor Guidelines - Ngwenya Tech Blog" },
        { name: "description", content: "Guidelines and best practices for contributing content to Malawi's leading tech blog." },
        { name: "keywords", content: "contributor guidelines, writing guidelines, tech blog, content creation, Malawi tech" },
    ];
}

export default function ContributorGuidelines() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Contributor Guidelines
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Everything you need to know about creating high-quality content for Ngwenya
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Content Standards */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Content Standards</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quality & Accuracy</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>All content must be original and well-researched</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Fact-check all technical information and statistics</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Provide credible sources and references where applicable</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Articles should be 800-2500 words in length</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Writing Style</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Write in clear, accessible language</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Avoid excessive jargon; explain technical terms when necessary</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Use active voice and engaging storytelling techniques</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Include relevant examples from the Malawian context</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Content Categories */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Preferred Content Categories</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {contentCategories.map((category) => (
                                <div key={category.title} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{category.description}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {category.examples.map((example) => (
                                            <span key={example} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                                                {example}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Submission Process */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Submission Process</h2>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pitch Your Idea</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Submit a brief outline (200-300 words) with your article idea, key points, and target audience.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Approval & Assignment</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Our editorial team will review and approve your pitch within 3-5 business days.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Write & Submit</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Complete your article and submit via our content management system or email.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                    4
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Review & Edit</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Our editors will review, provide feedback, and work with you on any necessary revisions.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                    5
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Publication</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Once approved, your article will be scheduled for publication and promoted across our channels.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technical Guidelines */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Guidelines</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Article Format</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Compelling headline (under 60 characters)</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Engaging introduction (100-150 words)</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Clear subheadings for easy scanning</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Actionable conclusion</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Author bio (50-100 words)</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Images & Media</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>High-quality featured image (1200x600px)</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Supporting images with proper attribution</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Screenshots and diagrams where helpful</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Alt text for all images</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Royalty-free or original images only</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Editorial Standards */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Editorial Standards</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What We Don't Accept</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-red-500 mt-1">✗</span>
                                        <span>Plagiarized or duplicate content</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-red-500 mt-1">✗</span>
                                        <span>Overly promotional or sales-focused content</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-red-500 mt-1">✗</span>
                                        <span>Content that discriminates or promotes hate speech</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-red-500 mt-1">✗</span>
                                        <span>Unsubstantiated claims or misinformation</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-red-500 mt-1">✗</span>
                                        <span>Content that violates intellectual property rights</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Attribution & Citations</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Link to original sources and research</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Quote other experts with proper attribution</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Include data sources and methodology</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Disclose any conflicts of interest</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Compensation & Rights */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Compensation & Rights</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contributor Benefits</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Byline credit and author bio</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Social media promotion</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Portfolio piece for your work</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Networking opportunities</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Early access to tech events</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Content Rights</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Ngwenya receives first publication rights</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Authors retain copyright ownership</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Content can be republished elsewhere after 30 days</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                        <span>Must include canonical link to original</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 text-center">Ready to Get Started?</h2>
                        <div className="text-center space-y-4">
                            <p className="text-xl">
                                Have questions about our guidelines or ready to submit your first article?
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contributors/apply"
                                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                                >
                                    Apply Now
                                </Link>
                                <a
                                    href="mailto:contributors@ngwenya.tech"
                                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                                >
                                    Contact Editorial Team
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Back Navigation */}
                <div className="mt-12 text-center">
                    <Link
                        to="/contributors"
                        className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Contributors</span>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}

const contentCategories = [
    {
        title: "Startup Ecosystem",
        description: "Stories about Malawian startups, entrepreneurs, and the innovation landscape",
        examples: ["Founder interviews", "Startup spotlights", "Funding news", "Success stories"]
    },
    {
        title: "Technology Trends",
        description: "Analysis of emerging technologies and their impact on Malawi",
        examples: ["AI adoption", "Mobile technology", "Digital transformation", "Future predictions"]
    },
    {
        title: "Government & Policy",
        description: "Coverage of digital government initiatives and tech policy developments",
        examples: ["E-government", "Digital ID", "Tech regulations", "Public-private partnerships"]
    },
    {
        title: "Industry Deep Dives",
        description: "Comprehensive analysis of specific technology sectors",
        examples: ["AgriTech", "FinTech", "HealthTech", "EdTech", "CleanTech"]
    },
    {
        title: "Skills & Education",
        description: "Content focused on tech education, skills development, and career advice",
        examples: ["Coding tutorials", "Career guides", "Training programs", "Skill development"]
    },
    {
        title: "Infrastructure & Connectivity",
        description: "Coverage of Malawi's digital infrastructure and connectivity developments",
        examples: ["Internet expansion", "5G rollout", "Data centers", "Telecommunications"]
    }
];

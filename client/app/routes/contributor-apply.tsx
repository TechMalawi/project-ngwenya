import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function meta() {
    return [
        { title: "Become a Contributor - Ngwenya Tech Blog" },
        { name: "description", content: "Apply to become a contributor and share your expertise with Malawi's tech community." },
        { name: "keywords", content: "contributor application, tech writer, Malawi tech community, expert contributor" },
    ];
}

export default function ContributorApply() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Become a Contributor
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Join our community of tech experts and help shape the narrative of Malawi's digital transformation
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 text-center">Why Contribute to Ngwenya?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">Amplify Your Voice</h3>
                            <p className="text-sm opacity-90">Reach thousands of tech enthusiasts across Malawi and beyond</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">Build Your Network</h3>
                            <p className="text-sm opacity-90">Connect with fellow tech leaders and innovators</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">Drive Innovation</h3>
                            <p className="text-sm opacity-90">Influence the direction of Malawi's tech ecosystem</p>
                        </div>
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Application Form</h2>
                    <form className="space-y-6">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="+265 xxx xxx xxx"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="City, Country"
                                />
                            </div>
                        </div>

                        {/* Professional Information */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Professional Title *
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                placeholder="e.g., Software Engineer, Product Manager, Tech Entrepreneur"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Company/Organization
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                placeholder="Your current workplace"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Areas of Expertise *
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {expertiseAreas.map((area) => (
                                    <label key={area} className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded text-blue-600" />
                                        <span className="text-sm text-gray-700 dark:text-gray-300">{area}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Bio/Professional Summary *
                            </label>
                            <textarea
                                required
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                placeholder="Tell us about your background, experience, and what makes you passionate about technology..."
                            />
                        </div>

                        {/* Writing Experience */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Writing Experience
                            </label>
                            <textarea
                                rows={3}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                placeholder="Describe your previous writing experience, published articles, blogs, or any content creation work..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Article Topic Ideas *
                            </label>
                            <textarea
                                required
                                rows={3}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                placeholder="What topics would you like to write about? Share 2-3 specific article ideas..."
                            />
                        </div>

                        {/* Social Links */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                LinkedIn Profile
                            </label>
                            <input
                                type="url"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                placeholder="https://linkedin.com/in/your-profile"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Twitter/X Handle
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="@yourusername"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Personal Website/Portfolio
                                </label>
                                <input
                                    type="url"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="https://yourwebsite.com"
                                />
                            </div>
                        </div>

                        {/* Commitment */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Contribution Commitment
                            </label>
                            <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                                <option value="">Select your preferred frequency</option>
                                <option value="weekly">1 article per week</option>
                                <option value="biweekly">1 article every 2 weeks</option>
                                <option value="monthly">1 article per month</option>
                                <option value="quarterly">1 article per quarter</option>
                                <option value="flexible">Flexible schedule</option>
                            </select>
                        </div>

                        {/* Agreement */}
                        <div className="flex items-start space-x-3">
                            <input type="checkbox" required className="mt-1 rounded text-blue-600" />
                            <label className="text-sm text-gray-700 dark:text-gray-300">
                                I agree to the{" "}
                                <Link to="/contributors/guidelines" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    Contributor Guidelines
                                </Link>{" "}
                                and understand that all content will be reviewed before publication. *
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>

                {/* Next Steps */}
                <div className="mt-12 bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">What Happens Next?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                1
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Review</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Our team will review your application within 3-5 business days
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                2
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Interview</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                If selected, we'll schedule a brief video call to discuss your ideas
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                3
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Onboarding</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Welcome to the team! We'll provide resources and support to get you started
                            </p>
                        </div>
                    </div>
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

const expertiseAreas = [
    "AgriTech",
    "FinTech",
    "EdTech",
    "HealthTech",
    "E-Government",
    "Mobile Development",
    "Web Development",
    "Data Science",
    "Artificial Intelligence",
    "Cybersecurity",
    "Cloud Computing",
    "IoT",
    "Blockchain",
    "UI/UX Design",
    "DevOps",
    "Entrepreneurship",
    "Product Management",
    "Digital Marketing",
    "Telecommunications",
    "Infrastructure"
];

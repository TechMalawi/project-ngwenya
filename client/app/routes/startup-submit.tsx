import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function meta() {
    return [
        { title: "Submit Your Startup - Ngwenya Tech Blog" },
        { name: "description", content: "Add your Malawian tech startup to our directory and connect with the tech community." },
        { name: "keywords", content: "startup submission, Malawi startups, tech directory, startup listing, entrepreneur" },
    ];
}

export default function StartupSubmit() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Submit Your Startup
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Join Malawi's premier tech startup directory and connect with investors, customers, and the tech community
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 text-center">Why List Your Startup?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">Increase Visibility</h3>
                            <p className="text-sm opacity-90">Get discovered by potential customers, partners, and investors</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">Network & Connect</h3>
                            <p className="text-sm opacity-90">Join Malawi's growing tech startup community</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold mb-2">Build Credibility</h3>
                            <p className="text-sm opacity-90">Establish your startup as part of the official tech ecosystem</p>
                        </div>
                    </div>
                </div>

                {/* Submission Form */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Startup Information</h2>
                    <form className="space-y-6">
                        {/* Basic Information */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                                Basic Information
                            </h3>

                            <div>
                                <label htmlFor="startup-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Startup Name *
                                </label>
                                <input
                                    id="startup-name"
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Enter your startup name"
                                />
                            </div>

                            <div>
                                <label htmlFor="tagline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Tagline *
                                </label>
                                <input
                                    id="tagline"
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="A brief, compelling description of what you do"
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Detailed Description *
                                </label>
                                <textarea
                                    id="description"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Provide a comprehensive description of your startup, its mission, and value proposition..."
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Industry/Sector *
                                    </label>
                                    <select
                                        id="industry"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    >
                                        <option value="">Select your industry</option>
                                        {industries.map((industry) => (
                                            <option key={industry} value={industry}>{industry}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="stage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Current Stage *
                                    </label>
                                    <select
                                        id="stage"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    >
                                        <option value="">Select current stage</option>
                                        <option value="Idea">Idea Stage</option>
                                        <option value="MVP">MVP/Prototype</option>
                                        <option value="Early Stage">Early Stage</option>
                                        <option value="Growth Stage">Growth Stage</option>
                                        <option value="Mature">Mature</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label htmlFor="founded" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Founded Year *
                                    </label>
                                    <input
                                        id="founded"
                                        type="number"
                                        required
                                        min="2000"
                                        max={new Date().getFullYear()}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="2024"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="team-size" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Team Size *
                                    </label>
                                    <select
                                        id="team-size"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    >
                                        <option value="">Select team size</option>
                                        <option value="1">Solo founder</option>
                                        <option value="2-5">2-5 people</option>
                                        <option value="6-10">6-10 people</option>
                                        <option value="11-25">11-25 people</option>
                                        <option value="26-50">26-50 people</option>
                                        <option value="50+">50+ people</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Location *
                                    </label>
                                    <input
                                        id="location"
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="City, Malawi"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                                Contact Information
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Website URL
                                    </label>
                                    <input
                                        id="website"
                                        type="url"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="https://yourstartup.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Contact Email *
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="hello@yourstartup.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        LinkedIn
                                    </label>
                                    <input
                                        id="linkedin"
                                        type="url"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="https://linkedin.com/company/..."
                                    />
                                </div>
                                <div>
                                    <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Twitter/X
                                    </label>
                                    <input
                                        id="twitter"
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="@yourstartup"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="+265 xxx xxx xxx"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Founders Information */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                                Founder Information
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="founder-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Primary Founder Name *
                                    </label>
                                    <input
                                        id="founder-name"
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="Full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="founder-title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Title/Role *
                                    </label>
                                    <input
                                        id="founder-title"
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="CEO, Founder, Co-founder"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="founder-bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Founder Bio *
                                </label>
                                <textarea
                                    id="founder-bio"
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Brief background and experience of the primary founder..."
                                />
                            </div>
                        </div>

                        {/* Products/Services */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                                Products & Services
                            </h3>

                            <div>
                                <label htmlFor="products" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Main Products/Services *
                                </label>
                                <textarea
                                    id="products"
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="List and describe your main products or services..."
                                />
                            </div>

                            <div>
                                <label htmlFor="achievements" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Key Achievements & Milestones
                                </label>
                                <textarea
                                    id="achievements"
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Notable achievements, awards, funding rounds, partnerships, user milestones..."
                                />
                            </div>

                            <div>
                                <label htmlFor="target-market" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Target Market
                                </label>
                                <textarea
                                    id="target-market"
                                    rows={2}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="Who are your customers? What problem do you solve for them?"
                                />
                            </div>
                        </div>

                        {/* Media & Assets */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                                Media & Assets
                            </h3>

                            <div>
                                <label htmlFor="logo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Logo (Upload or URL)
                                </label>
                                <input
                                    id="logo"
                                    type="url"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="https://yoursite.com/logo.png"
                                />
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    Recommended: Square format (500x500px minimum), PNG with transparent background
                                </p>
                            </div>

                            <div>
                                <label htmlFor="cover-image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Cover Image (Optional)
                                </label>
                                <input
                                    id="cover-image"
                                    type="url"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="https://yoursite.com/cover.jpg"
                                />
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    Recommended: 1200x600px, showcasing your product or team
                                </p>
                            </div>
                        </div>

                        {/* Agreement */}
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <input
                                    id="terms-agreement"
                                    type="checkbox"
                                    required
                                    className="mt-1 rounded text-blue-600"
                                />
                                <label htmlFor="terms-agreement" className="text-sm text-gray-700 dark:text-gray-300">
                                    I confirm that the information provided is accurate and that I have the authority to submit this startup for listing. I understand that Ngwenya reserves the right to review and approve submissions. *
                                </label>
                            </div>

                            <div className="flex items-start space-x-3">
                                <input
                                    id="contact-permission"
                                    type="checkbox"
                                    className="mt-1 rounded text-blue-600"
                                />
                                <label htmlFor="contact-permission" className="text-sm text-gray-700 dark:text-gray-300">
                                    I agree to be contacted by Ngwenya for potential feature articles, interviews, or collaboration opportunities.
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Submit Startup for Review
                            </button>
                        </div>
                    </form>
                </div>

                {/* What Happens Next */}
                <div className="mt-12 bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Review Process</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                1
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Review</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Our team reviews your submission within 5-7 business days
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                2
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Approval</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                If approved, your startup will be added to our directory
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                3
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Promotion</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                We'll promote your listing across our social channels
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back Navigation */}
                <div className="mt-12 text-center">
                    <Link
                        to="/startup-directory"
                        className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Startup Directory</span>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}

const industries = [
    "AgriTech",
    "FinTech",
    "EdTech",
    "HealthTech",
    "E-Commerce",
    "CleanTech",
    "Logistics & Transport",
    "Food & Beverage",
    "Entertainment & Media",
    "Real Estate",
    "Manufacturing",
    "Retail",
    "Tourism & Hospitality",
    "Professional Services",
    "B2B Software",
    "Consumer Apps",
    "Hardware & IoT",
    "Data & Analytics",
    "Cybersecurity",
    "Other"
];

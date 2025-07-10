import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function meta() {
    return [
        { title: "About - Ngwenya Tech Blog" },
        { name: "description", content: "Learn about Ngwenya, Malawi's premier tech blog platform dedicated to showcasing innovation and technology developments." },
        { name: "keywords", content: "about Ngwenya, Malawi tech blog, mission, vision, technology platform" },
        { property: "og:title", content: "About - Ngwenya Tech Blog" },
        { property: "og:description", content: "Learn about Ngwenya, Malawi's premier tech blog platform" },
        { property: "og:type", content: "website" },
    ];
}

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        About <span className="text-blue-600">Ngwenya</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Ngwenya is Malawi's premier technology blog platform, dedicated to showcasing the innovation,
                        entrepreneurship, and technological advancement happening across the country.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            To amplify Malawi's tech voices, share innovative stories, and connect the local tech ecosystem
                            with global opportunities. We believe in the power of technology to transform communities and
                            drive economic growth.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            To be the leading platform that showcases Malawi as a emerging tech hub in Africa,
                            fostering innovation, collaboration, and knowledge sharing across the continent
                            and beyond.
                        </p>
                    </div>
                </div>

                {/* What We Do */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        What We Do
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tech News & Insights</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We cover the latest technology developments, startup news, and innovation stories
                                from across Malawi's tech landscape.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Community Building</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We connect tech professionals, entrepreneurs, and enthusiasts to foster
                                collaboration and knowledge sharing.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Innovation Showcase</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We highlight groundbreaking projects, successful startups, and technological
                                solutions that are making a difference in Malawi.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Story */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Our Story
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                        <p className="mb-6">
                            Founded in 2024, Ngwenya emerged from a simple observation: Malawi's tech scene was
                            bursting with innovation, but these stories weren't being told on a platform that
                            truly represented the local ecosystem.
                        </p>
                        <p className="mb-6">
                            Named after the Chichewa word for "crocodile" - a symbol of resilience and adaptability -
                            Ngwenya represents the tenacious spirit of Malawian technologists who are building
                            solutions that matter, often with limited resources but unlimited creativity.
                        </p>
                        <p>
                            Today, we serve as a bridge between Malawi's tech community and the world, showcasing
                            the remarkable work being done by local developers, entrepreneurs, and innovators who
                            are shaping the future of technology in Africa.
                        </p>
                    </div>
                </div>

                {/* Team & Values */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Values</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Authenticity</h4>
                                    <p className="text-gray-600 dark:text-gray-300">We tell genuine stories from real people making real impact.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-3 h-3 bg-green-600 dark:bg-green-400 rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Inclusion</h4>
                                    <p className="text-gray-600 dark:text-gray-300">We believe every voice in tech deserves to be heard and celebrated.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
                                    <p className="text-gray-600 dark:text-gray-300">We champion creative solutions and forward-thinking approaches.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-3 h-3 bg-orange-600 dark:bg-orange-400 rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Excellence</h4>
                                    <p className="text-gray-600 dark:text-gray-300">We strive for quality in everything we publish and create.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get Involved</h2>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                            <p className="text-gray-700 dark:text-gray-200 mb-6">
                                Ngwenya is more than a blog - it's a community. Whether you're a developer, entrepreneur,
                                student, or tech enthusiast, there are many ways to get involved.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700 dark:text-gray-200">Write for us and share your expertise</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700 dark:text-gray-200">Submit your startup to our directory</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700 dark:text-gray-200">Join our contributor network</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700 dark:text-gray-200">Share news and events with us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-12 text-white">
                    <h2 className="text-3xl font-bold mb-4">Let's Build Together</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Have a story to share? Want to collaborate? We'd love to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            type="button"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get In Touch
                        </button>
                        <button
                            type="button"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Become a Contributor
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

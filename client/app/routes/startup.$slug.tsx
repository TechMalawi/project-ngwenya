import { useParams, Link } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function meta() {
    return [
        { title: "Startup Profile - Ngwenya Tech Blog" },
        { name: "description", content: "Discover innovative Malawian startups driving technological change and economic growth." },
        { name: "keywords", content: "Malawi startup, tech company, innovation, entrepreneurship" },
    ];
}

// Mock startup data - in a real app, this would come from an API or CMS
const mockStartup = {
    id: "1",
    name: "MobiPay Solutions",
    slug: "mobipay-solutions",
    description: "Revolutionizing digital payments for small businesses across Malawi with innovative mobile payment solutions.",
    longDescription: "MobiPay Solutions is a fintech startup that specializes in providing comprehensive digital payment infrastructure for small and medium enterprises (SMEs) in Malawi. Our platform enables businesses to accept digital payments, manage transactions, and access financial insights through a user-friendly dashboard.",
    founded: "2022",
    employees: "15-25",
    stage: "Series A",
    industry: "Fintech",
    location: "Lilongwe, Malawi",
    website: "https://mobipay.mw",
    email: "hello@mobipay.mw",
    phone: "+265 888 123 456",
    logo: "/uploads/default-image.png",
    coverImage: "/uploads/coffee-art.jpg",
    founders: [
        {
            name: "Chisomo Banda",
            role: "CEO & Co-founder",
            bio: "Former banking executive with 10+ years experience in financial services",
            avatar: "/uploads/daviddoe@strapi.io.jpg"
        },
        {
            name: "James Mwale",
            role: "CTO & Co-founder",
            bio: "Software engineer specializing in payment systems and mobile applications",
            avatar: "/uploads/sarahbaker@strapi.io.jpg"
        }
    ],
    services: [
        "Mobile Payment Processing",
        "Point of Sale Systems",
        "Financial Analytics Dashboard",
        "API Integration Services",
        "Merchant Support"
    ],
    achievements: [
        "Processed over K2 billion in transactions",
        "Serving 500+ merchants across Malawi",
        "Winner of Malawi Innovation Awards 2023",
        "Featured in African Fintech Report 2024"
    ],
    socialMedia: {
        twitter: "https://twitter.com/mobipay_mw",
        linkedin: "https://linkedin.com/company/mobipay-solutions",
        facebook: "https://facebook.com/mobipaymalawi"
    }
};

export default function Startup() {
    const { slug } = useParams();

    // In a real app, you would fetch the startup based on the slug
    // const startup = await fetchStartup(slug);
    console.log("Startup slug:", slug);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12">
                    <div className="h-48 md:h-64 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
                        <img
                            src={mockStartup.coverImage}
                            alt={mockStartup.name}
                            className="w-full h-full object-cover opacity-20"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-700/80"></div>
                    </div>

                    <div className="relative px-6 md:px-8 pb-8">
                        <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 relative z-10">
                            <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg mb-6 md:mb-0 md:mr-8">
                                <img
                                    src={mockStartup.logo}
                                    alt={`${mockStartup.name} logo`}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="hidden w-full h-full bg-gray-100 dark:bg-gray-700 rounded-lg items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                                        {mockStartup.name.charAt(0)}
                                    </span>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    {mockStartup.name}
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                    {mockStartup.description}
                                </p>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {mockStartup.location}
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v1a1 1 0 01-1 1h-1v11a1 1 0 01-1 1H7a1 1 0 01-1-1V10H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                                        </svg>
                                        Founded {mockStartup.founded}
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        {mockStartup.employees} employees
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* About Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About {mockStartup.name}</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                {mockStartup.longDescription}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Services & Products</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {mockStartup.services.map((service) => (
                                    <div key={service} className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Founders Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Meet the Founders</h2>
                            <div className="space-y-6">
                                {mockStartup.founders.map((founder) => (
                                    <div key={founder.name} className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden flex-shrink-0">
                                            <img
                                                src={founder.avatar}
                                                alt={founder.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                }}
                                            />
                                            <div className="hidden w-full h-full bg-gray-300 dark:bg-gray-600 items-center justify-center">
                                                <span className="text-gray-600 dark:text-gray-400 font-bold">
                                                    {founder.name.charAt(0)}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{founder.name}</h3>
                                            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">{founder.role}</p>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">{founder.bio}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Achievements Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Achievements</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {mockStartup.achievements.map((achievement) => (
                                    <div key={achievement} className="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Company Info */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 block">Industry</span>
                                    <span className="text-gray-900 dark:text-white font-medium">{mockStartup.industry}</span>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 block">Stage</span>
                                    <span className="text-gray-900 dark:text-white font-medium">{mockStartup.stage}</span>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 block">Team Size</span>
                                    <span className="text-gray-900 dark:text-white font-medium">{mockStartup.employees}</span>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 block">Founded</span>
                                    <span className="text-gray-900 dark:text-white font-medium">{mockStartup.founded}</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <a
                                    href={mockStartup.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-5 0-9-4-9-9m9 9c5 0 9-4 9-9m-9 9H3m0 0a9 9 0 019-9m-9 9a9 9 0 00 9-9m-9 9v-9" />
                                    </svg>
                                    <span>Visit Website</span>
                                </a>
                                <a
                                    href={`mailto:${mockStartup.email}`}
                                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>Send Email</span>
                                </a>
                                <a
                                    href={`tel:${mockStartup.phone}`}
                                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>Call Now</span>
                                </a>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a
                                    href={mockStartup.socialMedia.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                                    aria-label="Follow on Twitter"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a
                                    href={mockStartup.socialMedia.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                                    aria-label="Follow on LinkedIn"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href={mockStartup.socialMedia.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                                    aria-label="Follow on Facebook"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <Link
                        to="/startup-directory"
                        className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Startup Directory</span>
                    </Link>

                    <div className="flex space-x-4">
                        <button
                            type="button"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Share Profile
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

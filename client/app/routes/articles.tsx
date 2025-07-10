import { Link, useLoaderData } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { api, formatDate, getStrapiImageUrl } from "../lib/api";

// --- Minimal Strapi types for population helpers ---
type StrapiEntity<T> = T | { data?: T | null } | null | undefined;

type Author = {
    id: number;
    name: string;
    avatar?: StrapiEntity<Cover>;
};
type Cover = {
    url: string;
    alternativeText?: string;
};
type Category = {
    id: number;
    name: string;
};

// --- Strapi population helpers ---
// Handles both { field: {...} } and { field: { data: {...} } } formats
function getPopulated<T>(field: StrapiEntity<T>): T | null {
    if (!field) return null;
    if (typeof field === 'object' && 'data' in field) {
        // New Strapi format: { data: {...} }
        return field.data ?? null;
    }
    // Legacy/flat format
    return field as T;
}

function getAuthorAvatar(author: StrapiEntity<Author>): Cover | null {
    const a = getPopulated(author);
    if (!a) return null;
    // Avatar can be nested or flat
    return getPopulated(a.avatar);
}

function getCategoryName(category: StrapiEntity<Category>): string {
    const c = getPopulated(category);
    return c?.name || 'Uncategorized';
}

function getCoverImage(cover: StrapiEntity<Cover>): Cover | null {
    return getPopulated(cover);
}

export function meta() {
    return [
        { title: "Articles - Ngwenya Tech Blog" },
        { name: "description", content: "Read the latest technology articles and insights from Malawi's tech community." },
        { name: "keywords", content: "Malawi tech articles, technology news, innovation stories, startup updates" },
    ];
}

export async function loader() {
    try {
        console.log('🔄 Fetching articles from Strapi...');

        // Fetch articles and featured article
        const [articlesResponse, featuredResponse] = await Promise.all([
            api.getArticles({
                pageSize: 6,
                sort: ['publishedAt:desc'],
                populate: ['cover', 'author', 'category']
            }),
            api.getFeaturedArticles(1)
        ]);


        console.log(`🔄 Fetching completed. Processing data...${JSON.stringify(articlesResponse)}`);

        console.log('✅ Articles fetched successfully:', {
            articlesCount: articlesResponse.data.length,
            featuredArticle: featuredResponse.data[0]?.title || 'None'
        });

        return {
            articles: articlesResponse.data,
            featuredArticle: featuredResponse.data[0] || null,
            pagination: articlesResponse.meta.pagination
        };
    } catch (error) {
        console.error('❌ Failed to fetch articles:', error);
        // Return fallback data in case of API failure
        return {
            articles: [],
            featuredArticle: null,
            pagination: null,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

export default function Articles() {
    const { articles, featuredArticle, pagination, error } = useLoaderData<typeof loader>();

    // Show error state if there's a connection issue
    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <Header />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-red-600 mb-4">
                            Connection Error
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Unable to connect to the backend server.
                        </p>
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
                            <p className="text-red-800 dark:text-red-200">
                                <strong>Error:</strong> {error}
                            </p>
                            <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                                Make sure your Strapi server is running on port 1337
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Retry Connection
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

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
                {featuredArticle && (
                    <div className="mb-16">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2">
                                    {getCoverImage(featuredArticle.cover) ? (
                                        <img
                                            src={getStrapiImageUrl(getCoverImage(featuredArticle.cover), 'medium')}
                                            alt={getCoverImage(featuredArticle.cover)?.alternativeText || featuredArticle.title}
                                            className="h-64 md:h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                                    )}
                                </div>
                                <div className="md:w-1/2 p-8">
                                    <div className="flex items-center mb-4">
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                                            Featured
                                        </span>
                                        {getPopulated(featuredArticle.category) && (
                                            <>
                                                <span className="mx-2 text-gray-400">•</span>
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    {getCategoryName(featuredArticle.category)}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        {featuredArticle.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            {getAuthorAvatar(featuredArticle.author) ? (
                                                <img
                                                    src={getStrapiImageUrl(getAuthorAvatar(featuredArticle.author), 'thumbnail')}
                                                    alt={getPopulated(featuredArticle.author)?.name}
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                                        {getPopulated(featuredArticle.author)?.name?.charAt(0) || 'A'}
                                                    </span>
                                                </div>
                                            )}
                                            <div>
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {getPopulated(featuredArticle.author)?.name || 'Anonymous'}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    {formatDate(featuredArticle.publishedAt)}
                                                </p>
                                            </div>
                                        </div>
                                        <Link
                                            to={`/articles/${featuredArticle.slug}`}
                                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Articles Grid */}
                {articles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <article key={article.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                {getCoverImage(article.cover) ? (
                                    <img
                                        src={getStrapiImageUrl(getCoverImage(article.cover), 'small')}
                                        alt={getCoverImage(article.cover)?.alternativeText || article.title}
                                        className="h-48 w-full object-cover"
                                    />
                                ) : (
                                    <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                                )}
                                <div className="p-6">
                                    <div className="flex items-center mb-3">
                                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                                            {getCategoryName(article.category)}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                                        {article.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            {getAuthorAvatar(article.author) ? (
                                                <img
                                                    src={getStrapiImageUrl(getAuthorAvatar(article.author), 'thumbnail')}
                                                    alt={getPopulated(article.author)?.name}
                                                    className="w-6 h-6 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                                        {getPopulated(article.author)?.name?.charAt(0) || 'A'}
                                                    </span>
                                                </div>
                                            )}
                                            <div>
                                                <p className="text-xs font-medium text-gray-900 dark:text-white">
                                                    {getPopulated(article.author)?.name || 'Anonymous'}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    {formatDate(article.publishedAt)}
                                                </p>
                                            </div>
                                        </div>
                                        <Link
                                            to={`/articles/${article.slug}`}
                                            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                                        >
                                            Read →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            No articles available at the moment.
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                            Check back later for new content!
                        </p>
                    </div>
                )}

                {/* Load More */}
                {pagination && pagination.page < pagination.pageCount && (
                    <div className="text-center mt-12">
                        <button
                            type="button"
                            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                            Load More Articles ({pagination.total - (pagination.page * pagination.pageSize)} remaining)
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

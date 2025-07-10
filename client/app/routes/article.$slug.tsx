import { Link, useLoaderData } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { api, calculateReadTime, formatDate, getStrapiImageUrl, type StrapiArticle } from "../lib/api";

export function meta({ data }: { data: { article: StrapiArticle } | null }) {
    const article = data?.article;
    if (!article) {
        return [
            { title: "Article Not Found - Ngwenya Tech Blog" },
            { name: "description", content: "The requested article could not be found." },
        ];
    }

    return [
        { title: `${article.title} - Ngwenya Tech Blog` },
        { name: "description", content: article.description },
        { name: "keywords", content: `${article.category?.data?.name || ''}, Malawi tech, innovation` },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.description },
        { property: "og:image", content: article.cover?.data ? getStrapiImageUrl(article.cover.data, 'large') : '' },
    ];
}

export async function loader({ params }: { params: { slug: string } }) {
    try {
        const response = await api.getArticleBySlug(params.slug);
        const article = response.data[0] || null;

        if (!article) {
            throw new Response("Article Not Found", { status: 404 });
        }

        let relatedArticles: StrapiArticle[] = [];
        if (article.category?.data) {
            try {
                const relatedResponse = await api.getArticles({
                    pageSize: 2,
                    filters: {
                        category: article.category.data.id.toString()
                    },
                    populate: ['cover', 'author', 'category']
                });
                // Filter out current article on the client side
                relatedArticles = relatedResponse.data.filter(a => a.id !== article.id);
            } catch (error) {
                console.error('Failed to fetch related articles:', error);
            }
        }

        return {
            article,
            relatedArticles
        };
    } catch (error) {
        console.error('Failed to fetch article:', error);
        throw new Response("Article Not Found", { status: 404 });
    }
}

// --- Strapi population helper ---
type StrapiEntity<T> = T | { data?: T | null } | null | undefined;
function getPopulated<T>(field: StrapiEntity<T>): T | null {
    if (!field) return null;
    if (typeof field === 'object' && 'data' in field) {
        return field.data ?? null;
    }
    return field as T;
}

export default function Article() {
    const { article, relatedArticles } = useLoaderData<typeof loader>();

    if (!article) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <Header />
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Article Not Found
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            The article you're looking for doesn't exist or has been removed.
                        </p>
                        <Link
                            to="/articles"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Back to Articles
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Calculate read time from blocks content
    const contentText = article.blocks
        ?.filter((block): block is import("../lib/api").RichTextComponent => block.__component === 'shared.rich-text')
        .map(block => block.body.replace(/<[^>]*>/g, '')) // Strip HTML tags
        .join(' ') || '';

    const readTime = contentText ? calculateReadTime(contentText) : '5 min read';

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Article Header */}
                <div className="mb-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {getPopulated(article.category) && (
                            <>
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                                    {getPopulated(article.category)?.name}
                                </span>
                                <span>•</span>
                            </>
                        )}
                        <span>{readTime}</span>
                        <span>•</span>
                        <span>{formatDate(article.publishedAt)}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {article.title}
                    </h1>

                    {getPopulated(article.author) && (
                        <div className="flex items-center space-x-4 mb-8">
                            {getPopulated(getPopulated(article.author)?.avatar) ? (
                                <img
                                    src={getStrapiImageUrl(getPopulated(getPopulated(article.author)?.avatar), 'thumbnail')}
                                    alt={getPopulated(article.author)?.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            ) : (
                                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                                        {getPopulated(article.author)?.name?.charAt(0)}
                                    </span>
                                </div>
                            )}
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    {getPopulated(article.author)?.name}
                                </h3>
                                {getPopulated(article.author)?.email && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {getPopulated(article.author)?.email}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Featured Image */}
                {getPopulated(article.cover) && (
                    <div className="mb-8">
                        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden">
                            <img
                                src={getStrapiImageUrl(getPopulated(article.cover), 'large')}
                                alt={getPopulated(article.cover)?.alternativeText || article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                )}

                {/* Article Description */}
                {article.description && (
                    <div className="mb-8">
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                            {article.description}
                        </p>
                    </div>
                )}

                {/* Article Content from Dynamic Zone */}
                <div className="prose prose-lg max-w-none dark:prose-invert">
                    {article.blocks?.map((block) => {
                        const blockId = block.id || `${block.__component}-${Math.random().toString(36).substr(2, 9)}`;
                        if (block.__component === 'shared.rich-text') {
                            return (
                                <div
                                    key={blockId}
                                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                    // biome-ignore lint/security/noDangerouslySetInnerHtml: Content from trusted CMS
                                    dangerouslySetInnerHTML={{ __html: block.body }}
                                />
                            );
                        }
                        if (block.__component === 'shared.media') {
                            const media = getPopulated(block.file);
                            return media ? (
                                <div key={blockId} className="my-8">
                                    <img
                                        src={getStrapiImageUrl(media, 'large')}
                                        alt={media.alternativeText || ''}
                                        className="w-full rounded-lg"
                                    />
                                    {media.caption && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                                            {media.caption}
                                        </p>
                                    )}
                                </div>
                            ) : null;
                        }
                        if (block.__component === 'shared.quote') {
                            return (
                                <blockquote key={blockId} className="border-l-4 border-blue-500 pl-6 my-8">
                                    <p className="text-xl italic text-gray-800 dark:text-gray-200">
                                        "{block.body}"
                                    </p>
                                    {block.author && (
                                        <cite className="text-gray-600 dark:text-gray-400 mt-2 block">
                                            — {block.author}
                                        </cite>
                                    )}
                                </blockquote>
                            );
                        }
                        return null;
                    })}
                </div>

                {/* Related Articles Section */}
                {relatedArticles.length > 0 && (
                    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            {relatedArticles.slice(0, 2).map((relatedArticle) => (
                                <Link
                                    key={relatedArticle.id}
                                    to={`/articles/${relatedArticle.slug}`}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                                >
                                    {getPopulated(relatedArticle.cover) ? (
                                        <img
                                            src={getStrapiImageUrl(getPopulated(relatedArticle.cover), 'small')}
                                            alt={getPopulated(relatedArticle.cover)?.alternativeText || relatedArticle.title}
                                            className="h-32 w-full object-cover rounded-lg mb-4"
                                        />
                                    ) : (
                                        <div className="h-32 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mb-4"></div>
                                    )}
                                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                                        {relatedArticle.title}
                                    </h5>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        {relatedArticle.description}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <span>{getPopulated(relatedArticle.category)?.name || 'Uncategorized'}</span>
                                        <span>{formatDate(relatedArticle.publishedAt)}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

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
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({
                                        title: article.title,
                                        text: article.description,
                                        url: window.location.href,
                                    });
                                } else {
                                    navigator.clipboard.writeText(window.location.href);
                                    alert('Article URL copied to clipboard!');
                                }
                            }}
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

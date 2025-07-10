import { Link } from "react-router";

interface ErrorBoundaryProps {
    error?: Error;
    message?: string;
    showRetry?: boolean;
    onRetry?: () => void;
}

export function ErrorFallback({
    error,
    message = "Something went wrong",
    showRetry = false,
    onRetry
}: ErrorBoundaryProps) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                        <svg
                            className="w-8 h-8 text-red-600 dark:text-red-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                        </svg>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Oops! {message}
                </h1>

                {error && (
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                        {error.message}
                    </p>
                )}

                <div className="space-y-3">
                    {showRetry && onRetry && (
                        <button
                            type="button"
                            onClick={onRetry}
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Try Again
                        </button>
                    )}

                    <Link
                        to="/"
                        className="block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function ArticleNotFound() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                        <svg
                            className="w-8 h-8 text-yellow-600 dark:text-yellow-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Article Not Found
                </h1>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The article you're looking for doesn't exist or has been removed.
                </p>

                <div className="space-y-3">
                    <Link
                        to="/articles"
                        className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Browse Articles
                    </Link>

                    <Link
                        to="/"
                        className="block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

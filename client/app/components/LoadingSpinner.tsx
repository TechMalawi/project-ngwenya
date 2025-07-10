interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    return (
        <div className={`flex justify-center items-center ${className}`}>
            <div
                className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600`}
                role="status"
                aria-label="Loading"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export function PageLoader() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
            <div className="text-center">
                <LoadingSpinner size="lg" className="mb-4" />
                <p className="text-gray-600 dark:text-gray-300">Loading content...</p>
            </div>
        </div>
    );
}

export function ArticleCardSkeleton() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-300 dark:bg-gray-600"></div>
            <div className="p-6">
                <div className="flex items-center mb-3">
                    <div className="bg-gray-200 dark:bg-gray-700 h-6 w-20 rounded-full"></div>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 h-6 w-3/4 rounded mb-3"></div>
                <div className="space-y-2 mb-4">
                    <div className="bg-gray-200 dark:bg-gray-700 h-4 w-full rounded"></div>
                    <div className="bg-gray-200 dark:bg-gray-700 h-4 w-5/6 rounded"></div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        <div>
                            <div className="bg-gray-200 dark:bg-gray-700 h-3 w-16 rounded mb-1"></div>
                            <div className="bg-gray-200 dark:bg-gray-700 h-3 w-12 rounded"></div>
                        </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 h-4 w-12 rounded"></div>
                </div>
            </div>
        </div>
    );
}

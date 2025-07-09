export function Header() {
	return (
		<header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-6">
					<div className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-xl">N</span>
						</div>
						<div>
							<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
								Ngwenya
							</h1>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								Malawi Tech Blog
							</p>
						</div>
					</div>
					<nav className="hidden md:flex space-x-8">
						<a
							href="/articles"
							className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
						>
							Articles
						</a>
						<a
							href="/categories"
							className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
						>
							Categories
						</a>
						<a
							href="/contributors"
							className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
						>
							Contributors
						</a>
						<a
							href="/about"
							className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
						>
							About
						</a>
					</nav>
				</div>
			</div>
		</header>
	);
}

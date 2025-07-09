export function Footer() {
	return (
		<footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black">
			<div className="max-w-7xl mx-auto text-center">
				<div className="flex items-center justify-center space-x-3 mb-4">
					<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
						<span className="text-white font-bold">N</span>
					</div>
					<span className="text-white font-bold text-xl">Ngwenya</span>
				</div>
				<p className="text-gray-400 mb-6">
					Made with ❤️ for the Malawi tech community
				</p>
				<div className="flex justify-center space-x-6">
					<a
						href="https://twitter.com/NgwenyaTech"
						className="text-gray-400 hover:text-white"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>
					<a
						href="https://discord.gg/ngwenya"
						className="text-gray-400 hover:text-white"
						target="_blank"
						rel="noopener noreferrer"
					>
						Discord
					</a>
					<a
						href="mailto:hello@ngwenya.mw"
						className="text-gray-400 hover:text-white"
					>
						Email
					</a>
				</div>
			</div>
		</footer>
	);
}

# Project Ngwenya 🇲🇼

> A modern blog platform dedicated to Malawi's tech ecosystem and innovation

**Note**: The project name "Ngwenya" is subject to change during development.

Project Ngwenya is a collaborative blog site focused on sharing and promoting technology news, insights, and developments from Malawi. The platform serves as a hub for the Malawian tech community to share knowledge, showcase innovations, and connect with fellow tech enthusiasts.

## 🌟 Features

- **Tech News & Articles**: Latest technology news and developments from Malawi and beyond
- **Community Contributions**: Open platform for tech enthusiasts to share their insights
- **Contributor Management**: Easy process for requesting access and joining as a contributor
- **Modern Interface**: Clean, responsive design optimized for all devices
- **Content Categories**: Organized sections for different tech topics and industries
- **User Profiles**: Contributor profiles showcasing their expertise and contributions

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager
- Git
- PostgreSQL (for Strapi backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ngwenya.git
cd ngwenya
```

2. Install dependencies for the entire monorepo:
```bash
npm install
```

3. Set up the Strapi backend:
```bash
cd server
npm install
```

3. Configure the database:
```bash
# Create a PostgreSQL database
# Update the database configuration in config/database.ts
```

4. Start the Strapi backend:
```bash
npm run develop
```

5. Set up the React Router frontend:
```bash
cd ../client
npm install
```

6. Set up environment variables:
```bash
# In server directory
cd ../server
cp .env.example .env.local
# Add your Strapi backend URL and other configurations

# In client directory  
cd ../client
cp .env.example .env.local
```

7. Start the development servers:
```bash
# From the root directory - starts both client and server
npm run dev

# Or start them individually:
npm run dev:client  # React Router frontend
npm run dev:server  # Strapi backend
```

8. Open [http://localhost:5173](http://localhost:5173) for the frontend and [http://localhost:1337](http://localhost:1337) for Strapi admin

## 🧹 Code Quality

This project uses [Biome.js](https://biomejs.dev/) for linting, formatting, and code organization in a monorepo setup.

### Available Scripts

```bash
# Lint all files
npm run lint

# Lint and fix all files
npm run lint:fix

# Format all files
npm run format

# Format and write all files
npm run format:write

# Check and fix all issues (recommended)
npm run check:write

# Lint specific workspace
npm run lint:client
npm run lint:server

# Format specific workspace  
npm run format:client
npm run format:server
```

### Pre-commit Hooks

Consider setting up pre-commit hooks to automatically run Biome:

```bash
# Install husky for git hooks
npm install --save-dev husky

# Set up pre-commit hook
npx husky add .husky/pre-commit "npm run check:write"
```

## 🤝 Contributing

We welcome contributions from the Malawi tech community! Here's how you can get involved:

### Becoming a Contributor

1. **Request Access**: Submit a contributor request through the Strapi admin panel
2. **Review Process**: Our team will review your application and expertise
3. **Onboarding**: Once approved, you'll receive access to the contributor dashboard in Strapi
4. **Start Writing**: Begin creating content through the Strapi CMS interface!

### Contribution Guidelines

- **Content Quality**: Ensure articles are well-researched and provide value to readers
- **Originality**: All content must be original or properly attributed
- **Relevance**: Focus on technology topics relevant to Malawi and Africa
- **Professional Tone**: Maintain a professional and respectful tone
- **Proper Formatting**: Use markdown formatting for consistency

### Code Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Content Categories

- **Startup News**: Updates from Malawian tech startups and entrepreneurs
- **Government Tech**: Digital transformation initiatives and e-governance
- **Education Technology**: EdTech developments and digital learning
- **Mobile Technology**: Mobile apps, USSD services, and mobile money
- **Infrastructure**: Internet connectivity, data centers, and telecom
- **Innovation**: Tech hubs, incubators, and innovation centers
- **Career Development**: Tech jobs, skills development, and training opportunities

## 🛠️ Tech Stack

- **Frontend**: React Router v7 (SSR), React, TypeScript
- **Backend**: Strapi CMS
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **Authentication**: Strapi Authentication
- **Content Management**: Strapi Admin Panel
- **Media Management**: Strapi Media Library
- **Deployment**: 
  - Frontend: Vercel/Netlify
  - Backend: Railway/Heroku/DigitalOcean
- **Analytics**: Google Analytics

## 📊 Project Structure

```
ngwenya/
├── .vscode/            # VSCode configuration
├── client/             # React Router v7 SSR application
│   ├── app/           # App routes and components
│   ├── components/    # Reusable UI components
│   ├── styles/        # Global styles and Tailwind config
│   ├── lib/          # Utility functions and configurations
│   ├── types/        # TypeScript type definitions
│   ├── biome.json    # Client-specific Biome configuration
│   └── tests/        # Frontend test files
├── server/            # Strapi CMS backend
│   ├── api/          # API endpoints and controllers
│   ├── components/   # Reusable Strapi components
│   ├── config/       # Strapi configuration
│   ├── extensions/   # Strapi extensions
│   ├── middlewares/  # Custom middlewares
│   ├── policies/     # Access control policies
│   ├── biome.json    # Server-specific Biome configuration
│   └── public/       # Static assets for Strapi
├── docs/             # Project documentation
├── biome.json        # Root Biome configuration
├── .biomeignore      # Biome ignore patterns
└── package.json      # Root package.json (monorepo)
```

## 🌍 Community

- **Website**: [ngwenya.mw](https://ngwenya.mw)
- **Twitter**: [@NgwenyaTech](https://twitter.com/NgwenyaTech)
- **Email**: contributors@ngwenya.mw
- **Discord**: [Join our community](https://discord.gg/ngwenya)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Malawi tech community for their continuous support
- All contributors who share their knowledge and expertise
- Open source projects that make this platform possible

## 📞 Contact

For questions, suggestions, or partnership opportunities:

- **Email**: hello@ngwenya.mw
- **Phone**: +265 XXX XXX XXX
- **Address**: Lilongwe, Malawi

---

**Made with ❤️ for the Malawi tech community**

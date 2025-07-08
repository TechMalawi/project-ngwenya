# Project Ngwenya 🇲🇼

> A modern blog platform dedicated to Malawi's tech ecosystem and innovation

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
- Wrangler CLI (Cloudflare Workers CLI)
- Cloudflare account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ngwenya.git
cd ngwenya
```

2. Install Wrangler CLI globally:
```bash
npm install -g wrangler
```

3. Set up the Strapi backend:
```bash
cd backend
npm install
```

4. Configure Cloudflare Workers for Strapi:
```bash
# Login to Cloudflare
wrangler login

# Set up D1 database
wrangler d1 create ngwenya-db

# Update wrangler.toml with your database ID
```

5. Set up the React Router frontend:
```bash
cd ../frontend
npm install
```

6. Set up environment variables:
```bash
cp .env.example .env.local
# Add your Strapi backend URL and Cloudflare configurations
```

7. Start the development servers:
```bash
# Backend (in one terminal)
cd backend && npm run develop

# Frontend (in another terminal)
cd frontend && npm run dev
```

8. Deploy to Cloudflare Workers:
```bash
# Deploy backend
cd backend && wrangler deploy

# Deploy frontend
cd frontend && wrangler deploy
```

9. Open your deployed URLs for both frontend and backend

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
- **Deployment**: Cloudflare Workers
- **Database**: Cloudflare D1 (SQLite) or external PostgreSQL
- **Storage**: Cloudflare R2 (for media files)
- **Analytics**: Google Analytics

## 📊 Project Structure

```
ngwenya/
├── frontend/           # React Router v7 SSR application
│   ├── app/           # App routes and components
│   ├── components/    # Reusable UI components
│   ├── styles/        # Global styles and Tailwind config
│   ├── lib/          # Utility functions and configurations
│   ├── types/        # TypeScript type definitions
│   ├── wrangler.toml # Cloudflare Workers configuration
│   └── tests/        # Frontend test files
├── backend/           # Strapi CMS backend
│   ├── api/          # API endpoints and controllers
│   ├── components/   # Reusable Strapi components
│   ├── config/       # Strapi configuration
│   ├── extensions/   # Strapi extensions
│   ├── middlewares/  # Custom middlewares
│   ├── policies/     # Access control policies
│   ├── wrangler.toml # Cloudflare Workers configuration
│   └── public/       # Static assets for Strapi
└── docs/             # Project documentation
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

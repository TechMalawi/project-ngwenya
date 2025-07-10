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
- **Option 1 (Docker - Recommended)**: Docker and Docker Compose
- **Option 2 (Local)**: Node.js (v20 or higher), npm package manager, Git, PostgreSQL (for Strapi backend)

### Installation

#### Option 1: Docker Development (Recommended)

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ngwenya.git
cd ngwenya
```

2. Start the development environment:
```bash
# Start all services
make up

# Or start and watch logs
make dev
```

3. Access the applications:
   - **Frontend**: [http://localhost:1336](http://localhost:1336)
   - **Strapi Admin**: [http://localhost:1337/admin](http://localhost:1337/admin)

4. Available Docker commands:
```bash
make up          # Start all services
make down        # Stop all services
make logs        # View logs
make restart     # Restart services
make clean       # Clean restart
make help        # See all commands
```

#### Option 2: Local Development

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

4. Configure the database:
```bash
# Create a PostgreSQL database
# Update the database configuration in config/database.ts
```

5. Start the Strapi backend:
```bash
npm run develop
```

6. Set up the React Router frontend:
```bash
cd ../client
npm install
```

7. Set up environment variables:
```bash
# In server directory
cd ../server
cp .env.example .env.local
# Add your Strapi backend URL and other configurations

# In client directory  
cd ../client
cp .env.example .env.local
```

8. Start the development servers:
```bash
# From the root directory - starts both client and server
npm run dev

# Or start them individually:
npm run dev:client  # React Router frontend
npm run dev:server  # Strapi backend
```

9. Open [http://localhost:1336](http://localhost:1336) for the frontend and [http://localhost:1337](http://localhost:1337) for Strapi admin

## 🐳 Docker Development

This project includes a complete Docker development environment for easy setup and consistent development across different machines.

### Quick Start with Docker

```bash
# Clone and start
git clone https://github.com/yourusername/ngwenya.git
cd ngwenya
make up

# Start development with logs
make dev
```

### Docker Services

- **ngwenya_client**: React Router frontend on port 1336
- **ngwenya_server**: Strapi CMS backend on port 1337
- **Volumes**: Automatic file mounting for hot reloading
- **Network**: Isolated development network

### Available Make Commands

| Command | Description |
|---------|-------------|
| `make up` | Start all services in detached mode |
| `make down` | Stop all services |
| `make dev` | Start services and follow logs |
| `make restart` | Restart all services |
| `make logs` | Show logs for all services |
| `make logs-client` | Show client logs only |
| `make logs-server` | Show server logs only |
| `make status` | Show service status |
| `make clean` | Stop and remove volumes |
| `make fresh` | Clean restart |
| `make shell-client` | Open shell in client container |
| `make shell-server` | Open shell in server container |
| `make help` | Show all available commands |

### Development Workflow

```bash
# Start development environment
make up

# Make code changes (auto-reload enabled)
# View logs if needed
make logs

# Restart services if needed
make restart

# Clean restart when needed
make fresh

# Stop when done
make down
```

##  Contributing

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
├── docker-compose.yml # Docker development environment
├── Makefile          # Development commands
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

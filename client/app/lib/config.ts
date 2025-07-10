// Environment configuration for API endpoints
const config = {
  strapi: {
    url: import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337',
    apiUrl: `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}/api`,
  },
  app: {
    name: 'Ngwenya Tech Blog',
    description: "Malawi's premier technology blog and startup ecosystem platform",
    url: import.meta.env.VITE_APP_URL || 'http://localhost:3000',
  },
  features: {
    enableImageOptimization: true,
    enableSEO: true,
    enableAnalytics: false, // Set to true in production
  },
} as const

export default config

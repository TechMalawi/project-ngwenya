import { index, type RouteConfig, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('/articles', 'routes/articles.tsx'),
  route('/categories', 'routes/categories.tsx'),
  route('/contributors', 'routes/contributors.tsx'),
  route('/about', 'routes/about.tsx'),
  route('/startup-directory', 'routes/startup-directory.tsx'),
] satisfies RouteConfig

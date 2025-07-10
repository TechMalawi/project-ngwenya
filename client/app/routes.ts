import { index, type RouteConfig, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('/articles', 'routes/articles.tsx'),
  route('/articles/:slug', 'routes/article.$slug.tsx'),
  route('/categories', 'routes/categories.tsx'),
  route('/contributors', 'routes/contributors.tsx'),
  route('/contributors/apply', 'routes/contributor-apply.tsx'),
  route('/contributors/guidelines', 'routes/contributor-guidelines.tsx'),
  route('/about', 'routes/about.tsx'),
  route('/startup-directory', 'routes/startup-directory.tsx'),
  route('/startup-directory/:slug', 'routes/startup.$slug.tsx'),
  route('/startup-directory/submit', 'routes/startup-submit.tsx'),
] satisfies RouteConfig

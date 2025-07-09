# Cloudflare D1 Setup Guide for Project Ngwenya

This guide will help you set up Cloudflare D1 database for the blog backend.

## Prerequisites

1. Cloudflare account
2. Wrangler CLI installed globally
3. Project already created

## Setup Steps

### 1. Login to Cloudflare
```bash
wrangler login
```

### 2. Create D1 Database
```bash
# Create the database
wrangler d1 create ngwenya-db

# Note down the database ID from the output
```

### 3. Update Configuration Files

#### Update `wrangler.toml`
Replace the empty `database_id` in `wrangler.toml` with your actual D1 database ID:
```toml
[[d1_databases]]
binding = "DB"
database_name = "ngwenya-db"
database_id = "your-actual-database-id-here"
```

#### Update `.env`
Add your Cloudflare credentials to `.env`:
```env
CLOUDFLARE_DATABASE_ID=your-d1-database-id
CLOUDFLARE_ACCOUNT_ID=your-cloudflare-account-id
CLOUDFLARE_API_TOKEN=your-cloudflare-api-token
```

### 4. Create Database Schema
```bash
# Create and run initial migrations
wrangler d1 execute ngwenya-db --local --command "CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, name TEXT);"

# For production
wrangler d1 execute ngwenya-db --command "CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, name TEXT);"
```

### 5. Development vs Production

#### Local Development
- Uses local D1 database with `--local` flag
- Strapi will create tables automatically during development

#### Production Deployment
- Uses remote D1 database
- Deploy with: `wrangler deploy`

## Important Notes

1. **Schema Migrations**: Strapi will handle table creation, but you may need to run migrations manually for D1
2. **Local Development**: Use `wrangler dev` for local development with D1 bindings
3. **Backup**: D1 automatically handles backups, but consider export strategies for important data

## Troubleshooting

### Common Issues

1. **Database not found**: Ensure the database ID in `wrangler.toml` matches your created D1 database
2. **Permission errors**: Verify your Cloudflare API token has the correct permissions
3. **Local development**: Use `--local` flag with wrangler commands for local D1 instance

### Useful Commands

```bash
# List all D1 databases
wrangler d1 list

# Execute SQL commands
wrangler d1 execute ngwenya-db --command "SELECT * FROM users LIMIT 10;"

# Export database
wrangler d1 export ngwenya-db --output backup.sql

# Import database
wrangler d1 execute ngwenya-db --file backup.sql
```

## Migration from SQLite

If you have existing SQLite data:

1. Export your current SQLite database
2. Create equivalent tables in D1
3. Import data using `wrangler d1 execute` commands

## Performance Considerations

- D1 is optimized for read-heavy workloads
- Consider caching strategies for frequently accessed data
- Use batch operations for multiple inserts/updates

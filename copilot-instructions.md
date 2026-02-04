## Sudae 3D Builder - Shopify App Development

This workspace contains a complete Shopify app for 3D product customization with AR support.

### Project Overview
- **Type:** Shopify Remix App
- **Purpose:** 3D product customization with AR viewing capabilities
- **Tech Stack:** Remix, React, Prisma, SQLite, Shopify CLI

### Key Directories
- `app/` - Remix application (routes, services, database)
- `extensions/` - Shopify theme extension blocks
- `prisma/` - Database schema and migrations

### Setup Instructions

1. Install dependencies: `npm install`
2. Configure environment: Copy `.env.example` to `.env` and add credentials
3. Initialize database: `npx prisma migrate dev`
4. Start development: `npm run dev`

### Next Steps
- Update `shopify.app.toml` with your app credentials
- Configure `.env` with Shopify API keys
- Run database migrations
- Start the development server

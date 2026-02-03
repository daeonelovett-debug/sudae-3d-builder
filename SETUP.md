# Shopify App Setup Guide

Your Shopify 3D Builder app project has been created successfully! Follow these steps to get started:

## Prerequisites Installation

### 1. Install Node.js
Download and install Node.js (18+) from https://nodejs.org/
- Download the LTS version
- Run the installer and follow prompts
- Restart your terminal

Verify installation:
```powershell
node --version
npm --version
```

### 2. Install Shopify CLI
```powershell
npm install -g @shopify/cli
```

Verify:
```powershell
shopify version
```

## Project Setup

### 1. Install Dependencies
```powershell
cd "C:\Users\Administrator\shopify"
npm install
```

This will install:
- Remix framework
- React and React DOM
- Shopify CLI and Remix tools
- Prisma ORM
- TypeScript

### 2. Configure Environment

Copy the example environment file:
```powershell
cp .env.example .env
```

Edit `.env` with your Shopify credentials:
```
SHOPIFY_API_KEY=your_api_key_here
SHOPIFY_API_SECRET=your_api_secret_here
SHOPIFY_APP_URL=https://your-app-url.com
```

### 3. Set Up Database

Initialize Prisma and create the database:
```powershell
npx prisma migrate dev --name init
```

This creates:
- SQLite database (`dev.db`)
- `Design` and `Session` tables

### 4. Create Shopify App

Create a new Shopify app and get credentials:
```powershell
shopify app create
# OR link to existing:
shopify app link
```

Copy the credentials to `.env`:
- API Key → `SHOPIFY_API_KEY`
- API Secret → `SHOPIFY_API_SECRET`

### 5. Update App Configuration

Edit `shopify.app.toml`:
- Replace `client_id` with your API key
- Replace `dev_store_url` with your dev store URL
- Update `application_url` with your tunneling URL

### 6. Start Development Server

```powershell
npm run dev
```

This will:
- Start Remix dev server (http://localhost:3000)
- Create ngrok tunnel for webhooks
- Display your app tunnel URL

### 7. Add to Your Theme

The 3D viewer section can be added to your theme:
1. Go to Shopify Admin → Themes
2. Edit your theme code
3. Add the `sudae-3d-section` extension to your product pages
4. Configure with a GLB/GLTF model URL

## Project Structure

```
shopify/
├── app/
│   ├── routes/              # Page routes and API endpoints
│   │   ├── index.tsx        # Home page
│   │   └── apps.sudae.designs.tsx  # Design API routes
│   ├── services/
│   │   └── design.service.ts  # Business logic
│   ├── shopify.server.ts    # Shopify config
│   ├── db.server.ts         # Database client
│   └── root.tsx             # Root layout
├── extensions/
│   └── sudae-3d-section/    # Theme extension
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static files
├── shopify.app.toml         # App configuration
├── remix.config.js          # Remix config
├── tsconfig.json            # TypeScript config
├── package.json             # Dependencies
├── README.md                # Documentation
└── .env                     # Environment variables
```

## Available Commands

```powershell
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run generate   # Generate Shopify app code
```

## API Routes

### Save Design
```
POST /apps/sudae-proxy/designs
Content-Type: application/x-www-form-urlencoded

designData={"...json..."}&designName="My Design"
```

Response:
```json
{
  "success": true,
  "design": {
    "id": "...",
    "name": "My Design",
    "data": {...}
  }
}
```

### Load Designs
```
GET /apps/sudae-proxy/designs
```

Response:
```json
{
  "success": true,
  "designs": [...]
}
```

## Troubleshooting

**npm: command not found**
- Install Node.js from nodejs.org
- Restart terminal after installation

**Prisma errors**
- Run: `npx prisma generate`
- Ensure `dev.db` has write permissions

**App won't start**
- Check `.env` has all required variables
- Run: `npx prisma migrate dev`

**Database locked**
- Stop the dev server (Ctrl+C)
- Delete `dev.db`
- Run: `npx prisma migrate dev --name init`

## Next Steps

1. ✅ Set up Node.js and npm
2. ✅ Install project dependencies
3. ✅ Configure environment variables
4. ✅ Set up database
5. ✅ Start development server
6. Add custom features:
   - Implement color picker
   - Add design saving/loading UI
   - Implement admin dashboard
   - Add payment/cart integration

## Resources

- [Shopify Remix App Starter](https://github.com/Shopify/shopify-app-remix)
- [Remix Documentation](https://remix.run/docs)
- [Model Viewer Guide](https://modelviewer.dev/)
- [Shopify Admin API](https://shopify.dev/api/admin-rest)
- [Prisma ORM](https://www.prisma.io/docs/)

## Support

For issues:
1. Check Shopify CLI docs: `shopify help`
2. Check Remix docs: https://remix.run
3. Check Shopify community: https://community.shopify.com

---

Happy building! 🚀

# Sudae 3D Builder - Shopify App

A Shopify app for product customization with 3D model viewing and AR capabilities.
## Features

- 3D product visualization with model-viewer
- AR (Augmented Reality) support for multiple platforms (WebXR, Scene Viewer, Quick Look)
- Design customization with text input
- Add to cart with custom design properties
- Admin interface for design management
- Database integration for storing designs
## Project Structure

```
.
├── app/
│   ├── routes/              # Remix routes
│   ├── services/            # Business logic services
│   ├── shopify.server.ts    # Shopify configuration
│   ├── db.server.ts         # Database client
│   └── root.tsx             # Root component
├── extensions/
│   └── sudae-3d-section/    # Shopify theme extension
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
├── shopify.app.toml         # Shopify app configuration
└── README.md
```

## Prerequisites

- Node.js 18+
- npm or yarn
- Shopify CLI
- A Shopify development store

## Setup

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then fill in your Shopify credentials:
   - `SHOPIFY_API_KEY`
   - `SHOPIFY_API_SECRET`
   - `SHOPIFY_APP_URL`

3. **Set up the database:**
   ```bash
   npx prisma migrate dev
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## Configuration

### Shopify App Config
Edit `shopify.app.toml` to configure:
- App name and handle
- API scopes
- App proxy settings
- Development store URL

### Environment Variables
Key variables in `.env`:
- `SHOPIFY_API_KEY` - Your Shopify API key
- `SHOPIFY_API_SECRET` - Your Shopify API secret
- `DATABASE_URL` - SQLite database path (default: `./dev.db`)
- `SESSION_SECRET` - Secret for session encryption

## API Routes

### Design Management
- `POST /apps/sudae-proxy/designs` - Save a new design
- `GET /apps/sudae-proxy/designs` - Fetch user's designs

## Theme Extension

The app includes a Shopify theme extension block for the 3D viewer. Add the `sudae-3d-section` to your theme to:
- Display 3D models
- Enable AR viewing
- Capture custom text input
- Add products with custom designs to cart

## Database Schema

### Design Table
- `id` - Unique identifier
- `shop` - Store domain
- `name` - Design name
- `modelUrl` - 3D model URL
- `customText` - User's custom text
- `data` - JSON design data
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run generate` - Generate Shopify app code

### Debugging
Enable Remix logging by setting `NODE_ENV=development` in `.env`

## Deployment

1. Build the app:
   ```bash
   npm run build
   ```

2. Deploy to your hosting (Vercel, Heroku, etc.):
   ```bash
   npm start
   ```

3. Update `shopify.app.toml` with production URLs

## Troubleshooting

**Database errors:**
- Ensure Prisma is initialized: `npx prisma generate`
- Check SQLite file exists at `DATABASE_URL` path

**3D model not loading:**
- Verify model URL is publicly accessible
- Ensure model is in GLB or GLTF format
- Check CORS headers are properly set

**App proxy not working:**
- Confirm app proxy URL in `shopify.app.toml`
- Verify authentication is working
- Check Shopify CLI logs

## Resources

- [Shopify Remix App Starter](https://github.com/Shopify/shopify-app-remix)
- [Model Viewer Documentation](https://modelviewer.dev/)
- [Shopify Theme Extensions](https://shopify.dev/themes/extensions)
- [Prisma Documentation](https://www.prisma.io/docs/)

## License

MIT
<<<<<<< HEAD
# Sudae 3D Builder - Shopify App

A Shopify app for product customization with 3D model viewing and AR capabilities.

## Features

- 3D product visualization with model-viewer
- AR (Augmented Reality) support for multiple platforms (WebXR, Scene Viewer, Quick Look)
- Design customization with text input
- Add to cart with custom design properties
- Admin interface for design management
- Database integration for storing designs

## Project Structure

```
.
├── app/
│   ├── routes/              # Remix routes
│   ├── services/            # Business logic services
│   ├── shopify.server.ts    # Shopify configuration
│   ├── db.server.ts         # Database client
│   └── root.tsx             # Root component
├── extensions/
│   └── sudae-3d-section/    # Shopify theme extension
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
├── shopify.app.toml         # Shopify app configuration
└── README.md
```

## Prerequisites

- Node.js 18+
- npm or yarn
- Shopify CLI
- A Shopify development store

## Setup

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then fill in your Shopify credentials:
   - `SHOPIFY_API_KEY`
   - `SHOPIFY_API_SECRET`
   - `SHOPIFY_APP_URL`

3. **Set up the database:**
   ```bash
   npx prisma migrate dev
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## Configuration

### Shopify App Config
Edit `shopify.app.toml` to configure:
- App name and handle
- API scopes
- App proxy settings
- Development store URL

### Environment Variables
Key variables in `.env`:
- `SHOPIFY_API_KEY` - Your Shopify API key
- `SHOPIFY_API_SECRET` - Your Shopify API secret
- `DATABASE_URL` - SQLite database path (default: `./dev.db`)
- `SESSION_SECRET` - Secret for session encryption

## API Routes

### Design Management
- `POST /apps/sudae-proxy/designs` - Save a new design
- `GET /apps/sudae-proxy/designs` - Fetch user's designs

## Theme Extension

The app includes a Shopify theme extension block for the 3D viewer. Add the `sudae-3d-section` to your theme to:
- Display 3D models
- Enable AR viewing
- Capture custom text input
- Add products with custom designs to cart

## Database Schema

### Design Table
- `id` - Unique identifier
- `shop` - Store domain
- `name` - Design name
- `modelUrl` - 3D model URL
- `customText` - User's custom text
- `data` - JSON design data
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run generate` - Generate Shopify app code

### Debugging
Enable Remix logging by setting `NODE_ENV=development` in `.env`

## Deployment

1. Build the app:
   ```bash
   npm run build
   ```

2. Deploy to your hosting (Vercel, Heroku, etc.):
   ```bash
   npm start
   ```

3. Update `shopify.app.toml` with production URLs

## Troubleshooting

**Database errors:**
- Ensure Prisma is initialized: `npx prisma generate`
- Check SQLite file exists at `DATABASE_URL` path

**3D model not loading:**
- Verify model URL is publicly accessible
- Ensure model is in GLB or GLTF format
- Check CORS headers are properly set

**App proxy not working:**
- Confirm app proxy URL in `shopify.app.toml`
- Verify authentication is working
- Check Shopify CLI logs

## Resources

- [Shopify Remix App Starter](https://github.com/Shopify/shopify-app-remix)
- [Model Viewer Documentation](https://modelviewer.dev/)
- [Shopify Theme Extensions](https://shopify.dev/themes/extensions)
- [Prisma Documentation](https://www.prisma.io/docs/)

## License

MIT
=======
# @babel/types

> Babel Types is a Lodash-esque utility library for AST nodes

See our website [@babel/types](https://babeljs.io/docs/babel-types) for more information or the [issues](https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3A%22pkg%3A%20types%22+is%3Aopen) associated with this package.

## Install

Using npm:

```sh
npm install --save-dev @babel/types
```

or using yarn:

```sh
yarn add @babel/types --dev
```
>>>>>>> b5fd2864f1e33eb683055940581ca724360e508e

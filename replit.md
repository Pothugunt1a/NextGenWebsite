# RT NextGen AI - Full-Stack Web Application

## Overview
RT NextGen AI is a professional business website showcasing AI and IT consulting services. The application is built with a modern full-stack JavaScript/TypeScript architecture.

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** as the build tool and dev server
- **Wouter** for client-side routing
- **TailwindCSS** for styling
- **shadcn/ui** component library
- **TanStack Query** for data fetching and state management
- **Framer Motion** for animations

### Backend
- **Express.js** server with TypeScript
- **Drizzle ORM** for database operations
- **Neon PostgreSQL** database (optional)
- In-memory storage fallback when database is not configured
- Session management with express-session

### Development Tools
- **tsx** for running TypeScript files
- **esbuild** for production builds
- TypeScript strict mode enabled
- Hot module replacement in development

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   ├── lib/           # Utility functions and query client
│   │   └── App.tsx        # Main app component with routing
│   ├── public/            # Static assets
│   └── index.html         # HTML entry point
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route handlers
│   ├── vite.ts           # Vite dev server integration
│   ├── db.ts             # Database connection
│   └── storage.ts        # Storage interface (DB or memory)
├── shared/               # Shared types and schemas
│   └── schema.ts         # Drizzle schemas and Zod validation
└── dist/                 # Production build output
```

## Development

### Running Locally
The project uses a single server that serves both the API and frontend:

```bash
npm run dev
```

This starts:
- Express server on port 5000
- Vite dev server with HMR (Hot Module Replacement)
- Frontend accessible at http://localhost:5000

### Key Features
- **Single Port Setup**: Both frontend and backend run on port 5000
- **Vite Integration**: Custom Vite middleware serves the frontend in dev mode
- **Host Configuration**: Configured with `allowedHosts: true` for Replit proxy compatibility
- **Database Flexibility**: Automatically falls back to in-memory storage if no database is configured

## Production Build

### Build Process
```bash
npm run build
```

This creates:
1. Frontend production bundle in `dist/public/`
2. Backend compiled bundle in `dist/index.js`

### Starting Production Server
```bash
npm run start
```

## Database

The application supports both PostgreSQL (via Neon) and in-memory storage:

- **With Database**: Set `DATABASE_URL` environment variable
- **Without Database**: Automatically uses in-memory storage (MemoryStorage)

### Database Schema
- `users` table for authentication
- `contact_form_submissions` table for contact form data

To push schema changes:
```bash
npm run db:push
```

## Deployment Configuration

The project is configured for **autoscale** deployment on Replit:
- **Build**: `npm run build`
- **Run**: `npm run start`
- **Target**: Autoscale (suitable for stateless web applications)

## Environment Variables

- `NODE_ENV`: Set to "development" or "production"
- `DATABASE_URL`: PostgreSQL connection string (optional)

## Important Notes

1. **Port 5000**: The application MUST run on port 5000 (Replit requirement)
2. **Host Configuration**: Server binds to `0.0.0.0` to allow external connections
3. **Vite Allowed Hosts**: Configured to accept all hosts for Replit proxy
4. **Static Assets**: Located in `client/public/` and `attached_assets/`

## Pages and Routes

The application includes 40+ pages covering:
- AI Services (Consulting, Chatbot Development, ML, Generative AI)
- IT Services (Cloud, DevOps, Databases, Web/Mobile Development)
- Data Services (BI, Data Engineering, Warehousing, Analytics)
- Company Pages (Home, About, Careers, Contact)

All routes are defined in `client/src/App.tsx`.

## Recent Changes

- **2025-10-04**: Fresh GitHub Import Setup Completed ✅
  - Successfully installed all npm dependencies (506 packages, up to date)
  - Configured "Start application" workflow with webview output on port 5000
  - Verified Vite dev server is pre-configured with `allowedHosts: true` for Replit proxy compatibility
  - Confirmed development server running successfully with HMR (Hot Module Replacement)
  - Tested production build process - successfully generates:
    - Frontend bundle: `dist/public/` (147KB CSS, 1.97MB JS)
    - Backend bundle: `dist/index.js` (6.0KB)
  - Verified deployment configuration in `.replit`:
    - Target: autoscale (stateless web application)
    - Build: `npm run build`
    - Run: `npm run start`
  - Tested frontend routing - all pages load correctly:
    - Home page displays hero section with "WE ARE RT NEXTGEN AI" headline
    - Contact page working with Google Maps integration (Bridgewater Dr, Argyle, TX)
    - Navigation menu and dropdowns functioning properly
  - Confirmed database configuration:
    - Uses in-memory storage (MemoryStorage) when DATABASE_URL is not set
    - Ready to switch to Neon PostgreSQL when database is provisioned
  - Application is fully functional and ready for development/deployment on Replit

- **2025-10-02**: Added Comprehensive IT Services Pages
  - Created AI & Data Science Services landing page with comprehensive content about machine learning, AI models, NLP, and computer vision
  - Created Networking & Cyber Security landing page covering network infrastructure, cybersecurity solutions, and security audits
  - Created Enterprise ERP Solutions page with details on implementation, customization, and support services
  - Created System Integration Services page featuring API integration, third-party integrations, and legacy modernization
  - Updated navigation in constants.ts to include all new IT Services pages with proper subdropdown structure
  - Registered all new routes in App.tsx for proper routing
  - All pages follow existing UI patterns with hero sections, capabilities cards, industry use cases, tech stacks, FAQs, and CTAs
  - Added proper data-testid attributes for all interactive elements
  - Verified all pages load correctly with no errors and proper HMR functionality

- **2025-10-01**: GitHub Import Successfully Completed
  - Installed all npm dependencies (506 packages)
  - Configured "Start application" workflow with webview output on port 5000
  - Verified development server running properly with HMR
  - Tested production build process (successfully creates dist/public and dist/index.js)
  - Confirmed deployment configuration for autoscale deployment
  - Verified frontend routing and all pages load correctly
  - Tested Google Maps integration on contact page
  - Application fully functional on Replit environment

- **2025-09-30**: Initial Replit setup completed
  - Fixed TypeScript type error in Vite configuration
  - Added nanoid package dependency
  - Configured workflow for development server
  - Set up deployment configuration
  - Created .gitignore for Node.js project
  - Verified production build process

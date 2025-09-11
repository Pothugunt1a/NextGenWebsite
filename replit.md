# RTNextGenAI Marketing Website Project

## Overview

This project is a modern web application for an AI solutions company called RTNextGenAI. It features a marketing website with various sections including a hero banner, about section, solutions showcase, testimonials, and a contact form. The architecture follows a client-server approach with a React frontend and an Express.js backend.

The application uses the following key technologies:
- React with TypeScript for the frontend UI
- Express.js for the backend server
- Drizzle ORM for database interactions
- Tailwind CSS with shadcn/ui components for styling
- Framer Motion for animations

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built with:
- React 18+ with TypeScript
- Vite as the build tool
- wouter for routing (lightweight alternative to React Router)
- shadcn/ui component library based on Radix UI primitives
- Tailwind CSS for styling with a customized theme
- Framer Motion for animations
- React Hook Form with Zod for form validation
- TanStack Query (React Query) for data fetching

The frontend follows a component-based architecture with a clear separation of UI components, pages, and utilities. The UI is responsive and designed with a modern look and feel, featuring a color scheme of purple and orange as primary and secondary colors.

### Backend Architecture

The backend is built with:
- Express.js with TypeScript
- Drizzle ORM for database operations
- PostgreSQL as the database (configuration ready)
- RESTful API endpoints

The backend is minimalistic but extensible, currently providing an API endpoint for contact form submission and user management. The server is set up to handle both API requests and serve the static frontend files in production.

### Data Layer

- Drizzle ORM is used for database operations with PostgreSQL
- Database schema is defined in `shared/schema.ts`
- The schema includes tables for users and contact form submissions

## Key Components

### Frontend Components

1. **Layout Components**:
   - `Layout.tsx`: Main wrapper that includes Navbar and Footer
   - `Navbar.tsx`: Navigation bar with responsive mobile menu
   - `Footer.tsx`: Site footer with links and company info

2. **Page Sections**:
   - `Hero.tsx`: Hero banner with call-to-action
   - `About.tsx`: Company information section
   - `Solutions.tsx`: Cards showcasing AI solutions
   - `Testimonials.tsx`: Client testimonials
   - `Statistics.tsx`: Company statistics display
   - `CTA.tsx`: Call-to-action section
   - `Contact.tsx`: Contact form

3. **UI Components**:
   - Extensive collection of UI components from shadcn/ui
   - Form elements, buttons, cards, modals, etc.

### Backend Components

1. **Server Setup**:
   - `server/index.ts`: Main server file setting up Express
   - `server/routes.ts`: API route definitions
   - `server/vite.ts`: Vite integration for development mode
   - `server/storage.ts`: Data storage interface

2. **API Endpoints**:
   - `/api/contact`: POST endpoint for contact form submissions

### Shared Components

1. **Database Schema**:
   - `shared/schema.ts`: Drizzle ORM schema definitions for database tables
   - Validation schemas using Zod

## Recent Changes

**September 10, 2025:**
- Created comprehensive Database Migration & Modernization page following detailed user layout specification
- Implemented 14 sections including hero, core capabilities, migration approaches, supported platforms, and client success metrics
- Fixed Layout double-wrapping issue that was causing blank page rendering in DatabaseMigration component
- Added interactive Migration Approaches selector with 4 different approach options
- Implemented dual routing support (/database-migration primary, /it-services/databases/database-migration-modernization legacy)
- All sections feature professional styling, animations, and responsive design matching brand guidelines
- Added comprehensive data-testids for testing and verified all functionality through end-to-end testing
- Updated Database Migration page background to match AI Consulting page styling (bg-light class with full-screen hero)
- Fixed critical three-level dropdown navigation visibility issues in IT Services → Web Development submenu
- Resolved dropdown overflow clipping by changing from overflow-hidden to overflow-x-visible overflow-y-auto
- Corrected z-index conflicts between dropdown content and background images
- Fixed navigation conflict where IT Services was navigating instead of showing dropdown
- Added proper height constraints with scrolling for long dropdown lists

**July 17, 2025:**
- Fixed JSX closing tag error in GenerativeAIDevelopment.tsx that was preventing app startup
- Removed black background from dropdown images (IT-Services-dropdown.gif, AI-dropdown.png) using CSS blend modes
- Fixed black background patches in dropdown overlays for better mobile responsiveness
- Increased navbar logo size with responsive design (64px mobile, 80px tablet, 96px desktop)
- Added logo margin adjustments for desktop/iPad only while preserving mobile layout
- Created comprehensive cpanel deployment preparation script (cpanel-deployment-prep.sh)
- Enhanced deployment checklist with step-by-step verification process
- All images now have proper 644 permissions for web server compatibility

**July 16, 2025:**
- Fixed critical image permissions issue for cpanel deployment
- Enhanced fix-banner-permissions.sh script with better documentation
- All PNG, GIF, JPG, and SVG files now automatically set to 644 permissions
- Created comprehensive cpanel deployment checklist
- Verified both source and built assets have proper permissions for web server access

**July 5, 2025:**
- Enhanced footer with professional design matching website theme
- Fixed AI Consulting page banner to match careers and validation page structure
- Standardized CTA components across AI Consulting, AI Chatbot Development, and Generative AI Development pages
- Applied validation page's "Transform Your" component design with consistent styling, animations, and layout
- All pages now feature professional backdrop-blur cards with gradient backgrounds and benefit grids

**June 25, 2025:**
- Fixed critical cpanel deployment issue: Image files (.png, .gif, .jpg) not displaying
- Root cause: Build process created files with restrictive 600 permissions preventing web server access
- Solution: Updated fix-banner-permissions.sh script to automatically set proper 644 permissions
- Applied fix to both source and built assets, now ready for cpanel deployment
- All carousel components now use consistent Embla Carousel with proper spacing for shadow visibility

## Data Flow

1. **Contact Form Submission Flow**:
   - User fills out the contact form on the frontend
   - Form data is validated using React Hook Form with Zod schema
   - Validated data is sent to the `/api/contact` API endpoint
   - Server validates the data again using the shared schema
   - Data is stored in the database
   - Response is sent back to the client
   - User sees a success message or error message

2. **Static Content Flow**:
   - Pages and components are pre-rendered
   - Animation triggers as user scrolls through the page
   - Interactive elements like navigation work client-side

3. **Asset Serving Flow**:
   - Images served from `/assets/` path in production
   - All image files have 644 permissions for proper web server access
   - Automatic permission fixing via fix-banner-permissions.sh script

## External Dependencies

### Frontend Dependencies
- React and React DOM
- TanStack Query for data fetching
- wouter for routing
- Radix UI component primitives (accordion, dialog, etc.)
- class-variance-authority & clsx for styling utilities
- Framer Motion for animations
- React Hook Form with Zod for form validation
- date-fns for date handling
- Lucide React for icons

### Backend Dependencies
- Express.js for the server
- Drizzle ORM and Drizzle Zod for database operations
- Zod for validation

### Development Dependencies
- TypeScript
- Vite and related plugins
- Tailwind CSS
- PostCSS and plugins
- ESBuild

## Deployment Strategy

The application is configured to be deployed on Replit with:

1. **Development Mode**:
   - Run `npm run dev` to start the development server
   - This uses Vite's development server with HMR

2. **Production Build**:
   - Run `npm run build` to create the production build
   - This builds the frontend with Vite and bundles the server with esbuild
   - The frontend is built to the `dist/public` directory
   - The server is bundled to `dist/index.js`

3. **Production Server**:
   - Run `npm run start` to start the production server
   - This serves the static frontend files from `dist/public`
   - API requests are handled by the Express server

4. **Database Management**:
   - Run `npm run db:push` to apply schema changes to the database
   - This uses Drizzle Kit to update the database schema

The Replit configuration includes:
- Node.js 20
- Web module for frontend
- PostgreSQL 16 for database
- Auto-scaling deployment target
- Port configuration for HTTP access

## Potential Enhancements

1. **Authentication System**:
   - Implement JWT or session-based authentication
   - Add login/register functionality

2. **Admin Dashboard**:
   - Create protected routes for admin access
   - Add contact submission management
   - Add content management capabilities

3. **Blog Section**:
   - Add blog functionality with CMS capabilities
   - Implement category and tag filtering

4. **Analytics Integration**:
   - Add tracking for user interactions
   - Implement conversion tracking for contact form submissions

5. **SEO Optimization**:
   - Implement meta tags manager
   - Add sitemap generation
   - Add structured data for search engines
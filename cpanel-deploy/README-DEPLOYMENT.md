# RT NextGenAI - cPanel Deployment Guide

## Files Included
- `index.html` - Main application entry point
- `.htaccess` - Server configuration for React SPA routing
- `assets/` - All images, validation images, and static assets
- `generated-icon.png` - Site favicon

## Deployment Steps for cPanel

### 1. Upload Files
- Upload all files from this `cpanel-deploy` folder to your domain's public_html directory
- Ensure the `.htaccess` file is uploaded (it may be hidden by default)

### 2. File Structure on Server
```
public_html/
├── index.html
├── .htaccess
├── generated-icon.png
└── assets/
    ├── equipment-validation.jpeg
    ├── cleaning-validation.jpeg
    ├── computer-system-validation.jpeg
    ├── process-validation.jpeg
    ├── career-banner.png
    └── validation.jpg
```

### 3. Verify Asset Paths
All images use relative paths starting with `/assets/` which will work correctly on cPanel hosting.

### 4. Contact Form Setup
The contact form currently sends to a backend API. For cPanel deployment, you have these options:
- Create a PHP contact form handler (recommended for cPanel)
- Use a service like Formspree, Netlify Forms, or EmailJS
- Configure SMTP settings through your hosting provider

### 5. Domain Configuration
- Ensure your domain points to the correct directory
- The `.htaccess` file handles React routing automatically

## Features Included
- ✅ Responsive design for all devices
- ✅ Validation services with image galleries
- ✅ Careers page with application form
- ✅ Life science solutions showcase
- ✅ Contact information and forms
- ✅ SEO optimization with meta tags
- ✅ Performance optimization with caching headers

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement for older browsers

## Support
Contact RT NextGenAI for technical support or customizations.
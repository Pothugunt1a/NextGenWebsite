# cPanel Deployment Guide for RT NextGenAI Website

## Pre-deployment Checklist

### 1. Build the Application
```bash
npm run build
```

### 2. Files to Upload to cPanel
Upload all files from the `dist/public` directory to your cPanel public_html folder:
- index.html
- assets/ folder (contains all CSS, JS, and images)
- .htaccess file (for proper routing)
- _redirects file (backup routing configuration)

### 3. Required Files for Routing

#### .htaccess Configuration
The `.htaccess` file in `client/public/` contains:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

This ensures all routes (/, /about, /ai, /life-science, /validation, /careers, /contact) redirect to index.html for proper SPA routing.

### 4. Banner Images Configuration

All banner images are properly configured with correct paths:

#### Home Page
- AI Brain Banner: `/assets/ai-brain-banner.png`
- Carousel Images:
  - `/assets/ai-network-banner1.jpg`
  - `/assets/ai-network-banner2.png`
  - `/assets/ai-network-banner3.png`

#### AI Page
- Hero Banner: `/assets/ai-network-banner1.jpg`

#### Life Science Page
- Hero Banner: `/assets/Lifescience_banner.jpg`

#### Validation Page
- Hero Banner: `/assets/validation-banner.png`
- Service Images:
  - Equipment: `/assets/equipment-validation.jpeg`
  - Cleaning: `/assets/cleaning-validation.jpeg`
  - Computer System: `/assets/computer-system-validation.jpeg`
  - Process: `/assets/process-validation.jpeg`

#### Careers Page
- Hero Banner: `/assets/career-banner.png`

#### Contact Page
- Hero Banner: `/assets/contact-banner.png`

### 5. Navigation Routes

All navigation routes are properly configured:
- **Home**: `/` → Home.tsx
- **About**: `/about` → About.tsx
- **AI**: `/ai` → AI.tsx (with dropdown menu)
- **Life Science**: `/life-science` → LifeScience.tsx
- **Validation**: `/validation` → Validation.tsx
- **Careers**: `/careers` → Careers.tsx
- **Contact**: `/contact` → ContactInfo.tsx

### 6. Asset Path Configuration

All assets use relative paths starting with `/assets/` which will resolve correctly on cPanel:
```
/assets/ai-brain-banner.png
/assets/career-banner.png
/assets/validation-banner.png
etc.
```

### 7. Deployment Steps

1. **Build**: Run `npm run build` to create production files
2. **Upload**: Upload contents of `dist/public/` to cPanel public_html
3. **Verify**: Check that `.htaccess` file is uploaded and active
4. **Test**: Navigate to each route to ensure proper loading:
   - yourdomain.com/
   - yourdomain.com/about
   - yourdomain.com/ai
   - yourdomain.com/life-science
   - yourdomain.com/validation
   - yourdomain.com/careers
   - yourdomain.com/contact

### 8. Troubleshooting

#### If routes return 404:
- Ensure `.htaccess` file is uploaded to public_html
- Check cPanel File Manager that mod_rewrite is enabled
- Verify file permissions are correct (644 for files, 755 for directories)

#### If images don't load:
- Check that all files in `assets/` folder are uploaded
- Verify image file names match exactly (case-sensitive)
- Ensure proper file permissions

#### If navigation doesn't work:
- Clear browser cache
- Check browser console for JavaScript errors
- Verify all route components are properly loaded

### 9. Performance Optimization

The build includes:
- Minified CSS and JavaScript
- Optimized images
- Proper asset chunking
- Efficient routing configuration

### 10. Browser Compatibility

The application supports:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

All modern browsers with ES6+ support will work correctly with the deployed application.
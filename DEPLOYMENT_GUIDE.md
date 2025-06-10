# CPanel Deployment Guide for RT NextGen AI

## Quick Solution for Page Refresh Issues

Your React SPA needs server configuration to handle client-side routing. Here are three solutions in order of preference:

### Option 1: .htaccess (Most Common)
Upload the `.htaccess` file to your cpanel's `public_html` directory:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Option 2: web.config (For Windows/IIS servers)
If your cpanel uses Windows hosting, upload the `web.config` file instead.

### Option 3: _redirects (Netlify-style)
Some cpanel providers support Netlify-style redirects. Upload the `_redirects` file.

## Deployment Steps

1. **Build your project locally:**
   ```bash
   npm run build
   ```

2. **Upload files to cpanel:**
   - Upload contents of `dist/public/` to `public_html/`
   - Upload `index.html` to `public_html/`
   - Upload your chosen configuration file (`.htaccess`, `web.config`, or `_redirects`)

3. **Ensure assets folder structure:**
   ```
   public_html/
   ├── index.html
   ├── .htaccess (or web.config)
   ├── assets/
   │   ├── ai-network-banner1.jpg
   │   ├── career-banner.png
   │   ├── validation-banner.png
   │   └── ... (all your images)
   └── ... (CSS, JS files)
   ```

## Troubleshooting

- **Images not loading:** Ensure `assets/` folder is in `public_html/`
- **Pages 404 on refresh:** Upload the appropriate server configuration file
- **CSS/JS not loading:** Check file permissions (644 for files, 755 for directories)

## Alternative: Manual Page Creation

If server configuration doesn't work, create these physical files in cpanel:

- `public_html/validation/index.html` (copy of main index.html)
- `public_html/careers/index.html` (copy of main index.html)  
- `public_html/lifescience/index.html` (copy of main index.html)

This ensures each route has a physical file to serve.
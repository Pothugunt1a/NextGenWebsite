# cPanel Deployment Guide

## Quick Deployment Steps

1. **Build the project for cPanel:**
   ```bash
   node build-cpanel.js
   ```

2. **Upload to cPanel:**
   - Upload all contents from `dist/public/` to your cPanel `public_html` directory
   - Ensure the folder structure is preserved, especially the `assets/` folder

3. **Verify deployment:**
   - Check that all banner images load correctly
   - Test page navigation and routing
   - Confirm contact forms work properly

## File Structure After Upload

Your cPanel `public_html` should contain:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── 3dgifmaker34062.gif (navbar logo)
│   ├── ai-brain-banner.png (hero banner)
│   ├── validation-banner.png (validation page)
│   ├── Lifescience_banner.jpg (life science page)
│   ├── current-openings.jpg (careers page)
│   ├── contact-banner.png (contact section)
│   └── [all other image assets]
└── [other built files]
```

## Troubleshooting Image Issues

If banner images don't display:

1. **Check file paths:** Ensure images use `assets/filename.jpg` format
2. **Verify uploads:** Confirm all files from `assets/` folder are uploaded
3. **Check permissions:** Set folder permissions to 755 and file permissions to 644
4. **Clear cache:** Clear browser cache and try hard refresh (Ctrl+F5)

## Current Image Path Format

All images now use relative paths without `./` prefix:
- ✅ `src="assets/image.jpg"`
- ❌ `src="/assets/image.jpg"`
- ❌ `src="./assets/image.jpg"`

This format works best with cPanel subdirectory hosting.
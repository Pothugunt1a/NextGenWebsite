# cPanel Deployment Guide for RT NextGenAI Website

## Pre-Deployment Checklist

### ✅ All Images Verified and Ready
- **Main Banner Images**: All 5 banner images exist and properly sized
- **Logo Assets**: Company logo GIF verified and optimized
- **Validation Service Images**: All 4 validation service images confirmed
- **Career Page Images**: Current openings image ready
- **File Sizes Optimized**: All images under 15MB for fast loading

### ✅ Image Path Configuration
All images use the correct `/assets/` path structure:
```
/assets/ai-brain-banner.png
/assets/Lifescience_banner.jpg
/assets/validation-banner.png
/assets/career-banner.png
/assets/contact-banner.png
/assets/3dgifmaker34062.gif
/assets/current-openings.jpg
/assets/equipment-validation.jpeg
/assets/cleaning-validation.jpeg
/assets/computer-system-validation.jpeg
/assets/process-validation.jpeg
```

## Deployment Steps

### 1. Build the Application
```bash
npm run build
```

### 2. Upload Files to cPanel
- Upload all files from `client/dist/` to your domain's public_html folder
- Ensure the `assets/` folder is uploaded with all images
- Upload the `.htaccess` file to the root directory

### 3. Verify Image Loading
After deployment, test these critical images:
- Navigation logo: `yourdomain.com/assets/3dgifmaker34062.gif`
- AI page banner: `yourdomain.com/assets/ai-brain-banner.png`
- Life Science banner: `yourdomain.com/assets/Lifescience_banner.jpg`
- Validation banner: `yourdomain.com/assets/validation-banner.png`
- Career banner: `yourdomain.com/assets/career-banner.png`

### 4. Test Page Navigation
Verify all pages load correctly:
- Home: `yourdomain.com/`
- About: `yourdomain.com/about`
- AI: `yourdomain.com/ai`
- Life Science: `yourdomain.com/life-science`
- Validation: `yourdomain.com/validation`
- Careers: `yourdomain.com/careers`
- Contact: `yourdomain.com/contact`

## Technical Optimizations Implemented

### .htaccess Configuration
- ✅ Proper SPA routing fallback to index.html
- ✅ Image MIME types configured
- ✅ GZIP compression enabled
- ✅ Browser caching optimized
- ✅ Security headers implemented

### Image Optimization
- ✅ All images properly compressed
- ✅ Correct file formats (PNG, JPG, GIF)
- ✅ Responsive image sizing implemented
- ✅ Fast loading optimization

### Browser Compatibility
- ✅ Modern browsers supported
- ✅ Mobile responsive design
- ✅ Cross-platform compatibility
- ✅ Progressive enhancement

## Troubleshooting

### If Images Don't Load
1. **CRITICAL: Check file permissions** (should be 644 for files, 755 for folders)
   - Fixed validation-banner.png and career-banner.png permissions
   - Fixed all validation service images permissions
   - All images now have proper 644 permissions
2. Verify the assets folder uploaded correctly
3. Test image URLs directly in browser
4. Check browser console for 404 errors

### Common Permission Issues Fixed
The following images had restrictive permissions that caused loading failures:
- validation-banner.png (was 600, now 644)
- career-banner.png (was 600, now 644)
- All validation service images (equipment, cleaning, computer-system, process)
- current-openings.jpg images

### If Navigation Doesn't Work
1. Ensure .htaccess file is in the root directory
2. Verify mod_rewrite is enabled on your hosting
3. Check for any server configuration issues

## Performance Monitoring

After deployment, monitor:
- Page load times
- Image loading speeds
- Navigation responsiveness
- Mobile performance
- Cross-browser compatibility

Your RT NextGenAI website is fully optimized for cPanel deployment with all images properly configured and tested.
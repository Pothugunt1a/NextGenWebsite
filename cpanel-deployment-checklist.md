# CPanel Deployment Checklist

## Pre-Deployment Steps

### 1. Build the Project
```bash
npm run build
```

### 2. Fix Image Permissions (CRITICAL)
```bash
./fix-banner-permissions.sh
```

**Why this is essential:**
- Build process creates image files with 600 permissions
- Web servers need 644 permissions to serve images
- Without this fix, all PNG/GIF/JPG files will show 403 errors

### 3. Verify Image Permissions
Check that all images have proper permissions:
```bash
ls -la dist/public/assets/*.png | head -5
ls -la dist/public/assets/*.gif | head -5
```

All files should show `-rw-r--r--` (644 permissions)

### 4. Upload Files to CPanel
- Upload the entire `dist` directory to your cpanel public_html folder
- Ensure all files maintain their permissions during upload

### 5. Test Deployment
- Visit your website
- Check that all images display correctly
- Test all pages with image content

## Files Affected
- All PNG files in assets directory
- All GIF files in assets directory  
- All JPG/JPEG files in assets directory
- All SVG files in assets directory

## Common Issues
- **Images not displaying**: Run `./fix-banner-permissions.sh` and re-upload
- **403 errors on images**: Check file permissions are 644
- **Build fails**: Ensure Node.js version compatibility

## Quick Commands
```bash
# Complete deployment preparation
npm run build
./fix-banner-permissions.sh

# Verify permissions
ls -la dist/public/assets/*.{png,gif,jpg} 2>/dev/null | head -10
```
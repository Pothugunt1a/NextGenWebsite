# CPPanel Deployment Guide for RTNextGenAI Website

## Overview
This guide helps you deploy the RTNextGenAI website to CPPanel hosting with proper image asset handling.

## Pre-Deployment Steps

### 1. Build the Project
```bash
npm run build
```

### 2. Asset Path Configuration
All image paths have been updated to use relative paths (`./assets/`) for CPPanel compatibility:
- Banner images: `./assets/AI-Consulting.png`, `./assets/IT-Consulting-banner.png`, etc.
- Logo images: `./assets/3dgifmaker34062.gif`
- Company logos: `./assets/microsoft-seeklogo.png`, etc.

## CPPanel Upload Instructions

### 1. Upload Build Files
1. After running `npm run build`, locate the `dist/public` folder
2. Upload all contents of `dist/public` to your CPPanel's `public_html` directory

### 2. Upload Assets
1. Create an `assets` folder in your CPPanel's `public_html` directory
2. Upload all files from `client/public/assets/` to `public_html/assets/`

### 3. File Structure on CPPanel
Your CPPanel file structure should look like:
```
public_html/
├── assets/
│   ├── AI-Consulting.png
│   ├── IT-Consulting-banner.png
│   ├── Life-Science-banner.png
│   ├── Validation-banner.png
│   ├── career-banner.png
│   ├── About-Banner.png
│   ├── ai-network-banner1.jpg
│   ├── ai-network-banner2.png
│   ├── ai-network-banner3.png
│   ├── 3dgifmaker34062.gif
│   ├── microsoft-seeklogo.png
│   ├── infosys-limited-seeklogo.png
│   ├── ibm-logo.png
│   ├── google-2015-new-seeklogo.png
│   ├── envato-seeklogo.png
│   ├── deloitte-seeklogo.png
│   ├── IT-Services-dropdown.png
│   ├── AI-dropdown.png
│   ├── contact-banner.png
│   └── [other image files]
├── index.html
├── [other built files]
└── [CSS and JS files]
```

## Image Path Troubleshooting

If images still don't display after deployment:

### Option 1: Absolute Paths
Update image paths to use your domain:
```javascript
// Instead of: "./assets/image.png"
// Use: "https://yourdomain.com/assets/image.png"
```

### Option 2: Verify File Permissions (CRITICAL FOR VALIDATION & LIFE SCIENCE BANNERS)
Ensure all uploaded files have proper read permissions:
- Files: 644 permissions (readable by all)
- Directories: 755 permissions (executable/accessible by all)

**Special attention needed for:**
- `Validation-banner.png` 
- `Life-Science-banner.png`

These files may upload with incorrect permissions. In cpanel File Manager:
1. Right-click on the file
2. Select "Change Permissions"
3. Set permissions to 644 (Owner: Read+Write, Group: Read, World: Read)
4. Click "Change Permissions"

### Option 3: Check File Names
Verify that uploaded file names match exactly (case-sensitive) with the references in the code.

## Testing
1. Upload the files as described above
2. Visit your website URL
3. Check that all banner images load correctly on:
   - About page
   - Careers page  
   - IT Consulting page
   - Validation page
   - Life Science page
   - AI Consulting page
   - Home page (Hero section)
   - Logo carousel

## Common Issues and Solutions

### Images Not Loading
- Check file paths match exactly (case-sensitive)
- Verify assets folder exists in public_html
- Ensure file permissions are correct (644)
- **For Validation page**: Verify `Validation-banner.png` has 644 permissions
- **For Life Science page**: Verify `Life-Science-banner.png` has 644 permissions
- Test fallback images are also uploaded (`validation-banner.png`, `Lifescience_banner.jpg`)

### Logo Not Displaying
- Confirm `3dgifmaker34062.gif` is in the assets folder
- Check browser console for 404 errors

### Banner Images Missing
- Verify all banner image files are uploaded
- Check file extensions match (.png, .jpg, etc.)

## Quick Fix Script
**CRITICAL: Run this command after building to fix image permissions:**
```bash
./fix-banner-permissions.sh
```

**Complete deployment process:**
1. Build the project: `npm run build`
2. Fix image permissions: `./fix-banner-permissions.sh`
3. Upload the `dist/public/` contents to your cpanel public_html folder

**Note**: The script now also fixes permissions for images in the root directory and attached_assets folder, ensuring all PNG, JPG, GIF, and SVG files have proper 644 permissions for web server access.

**The script automatically fixes permissions for all .png, .gif, .jpg, .jpeg, and .svg files to 644 (readable by web server).**

## Validation Checklist
Before uploading to cpanel, verify:
- [ ] All banner files have 644 permissions
- [ ] `Validation-banner.png` exists and is readable
- [ ] `Life-Science-banner.png` exists and is readable
- [ ] Fallback images (`validation-banner.png`, `Lifescience_banner.jpg`) are uploaded
- [ ] Assets folder structure matches exactly as shown above

## Support
If images still don't display after following this guide, the issue may be:
1. File upload incomplete
2. File permission restrictions (most common for Validation/Life Science banners)
3. Case-sensitivity in file names
4. CPPanel-specific configuration requirements

**Most common fix**: Set file permissions to 644 for all banner images in cpanel File Manager.

Contact your hosting provider for CPPanel-specific asset serving configuration if needed.
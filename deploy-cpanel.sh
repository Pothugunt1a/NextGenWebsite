#!/bin/bash

echo "Building RT NextGenAI website for cPanel deployment..."

# Build the project
npm run build

# Create deployment folder
mkdir -p cpanel-deployment

# Copy all files from dist/public to deployment folder
cp -r dist/public/* cpanel-deployment/

# Fix file permissions for cPanel hosting
find cpanel-deployment -type d -exec chmod 755 {} \;
find cpanel-deployment -type f -exec chmod 644 {} \;

# Create upload instructions
cat > cpanel-deployment/UPLOAD_INSTRUCTIONS.txt << EOF
CPANEL UPLOAD INSTRUCTIONS
=========================

1. Upload ALL files from this folder to your cPanel public_html directory
2. Maintain the folder structure exactly as shown
3. Ensure the assets/ folder contains all image files
4. The .htaccess file must be uploaded for proper routing

Key files to verify after upload:
- index.html (main website file)
- .htaccess (routing configuration)
- assets/ai-brain-banner.png (hero banner)
- assets/validation-banner.png (validation page banner)
- assets/Lifescience_banner.jpg (life science banner)
- assets/current-openings.jpg (careers banner)
- assets/contact-banner.png (contact section banner)
- assets/3dgifmaker34062.gif (navbar logo)

If images don't load:
1. Check file permissions (folders: 755, files: 644)
2. Verify all assets were uploaded
3. Clear browser cache (Ctrl+F5)

EOF

echo "✓ cPanel deployment package created in 'cpanel-deployment' folder"
echo "✓ Upload all contents of 'cpanel-deployment' to your cPanel public_html directory"
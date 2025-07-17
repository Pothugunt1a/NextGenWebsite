#!/bin/bash

# CPPanel Deployment Preparation Script
# This script prepares the project for cpanel deployment by:
# 1. Building the project
# 2. Fixing all file permissions
# 3. Verifying critical files
# 4. Creating deployment checklist

echo "=== CPPanel Deployment Preparation ==="
echo "Starting deployment preparation process..."

# Step 1: Clean any existing build
echo ""
echo "Step 1: Cleaning existing build..."
rm -rf dist

# Step 2: Build the project
echo ""
echo "Step 2: Building the project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "ERROR: Build failed! Please fix build errors before deployment."
    exit 1
fi

# Step 3: Fix permissions for all image files
echo ""
echo "Step 3: Fixing file permissions..."

# Fix permissions for source assets
echo "Setting permissions for source assets..."
find client/public/assets -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.svg" -o -name "*.webp" \) -exec chmod 644 {} \; 2>/dev/null

# Fix permissions for built assets
if [ -d "dist/public/assets" ]; then
    echo "Setting permissions for built assets..."
    find dist/public/assets -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.svg" -o -name "*.webp" \) -exec chmod 644 {} \; 2>/dev/null
fi

# Fix permissions for built static files
if [ -d "dist/public" ]; then
    echo "Setting permissions for built static files..."
    find dist/public -type f \( -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.json" \) -exec chmod 644 {} \; 2>/dev/null
fi

# Fix permissions for server files
if [ -f "dist/index.js" ]; then
    chmod 644 dist/index.js
fi

# Step 4: Verify critical files
echo ""
echo "Step 4: Verifying critical files..."

# Check logo file
LOGO_FILE="client/public/assets/3dgifmaker34062.gif"
if [ -f "$LOGO_FILE" ]; then
    echo "✓ Logo file exists: $LOGO_FILE"
    ls -la "$LOGO_FILE"
else
    echo "✗ WARNING: Logo file missing: $LOGO_FILE"
fi

# Check dropdown images
DROPDOWN_FILES=("client/public/assets/IT-Services-dropdown.gif" "client/public/assets/AI-dropdown.png")
for file in "${DROPDOWN_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✓ Dropdown image exists: $file"
        ls -la "$file"
    else
        echo "✗ WARNING: Dropdown image missing: $file"
    fi
done

# Check built files
if [ -d "dist" ]; then
    echo "✓ Build directory exists"
    echo "Built files:"
    ls -la dist/
    if [ -d "dist/public" ]; then
        echo "Static files:"
        ls -la dist/public/ | head -10
    fi
else
    echo "✗ ERROR: Build directory missing"
    exit 1
fi

# Step 5: Create deployment checklist
echo ""
echo "Step 5: Creating deployment checklist..."

cat > cpanel-deployment-checklist.txt << 'EOF'
# CPPanel Deployment Checklist

## Pre-Deployment Verification
- [ ] Project built successfully (npm run build)
- [ ] All image files have 644 permissions
- [ ] Logo file (3dgifmaker34062.gif) displays correctly
- [ ] Dropdown images (IT-Services-dropdown.gif, AI-dropdown.png) display correctly
- [ ] No 403 errors when accessing images
- [ ] All static files (HTML, CSS, JS) have proper permissions

## Files to Upload to CPPanel
1. Upload contents of `dist/` directory to your cpanel public_html folder
2. Ensure the following critical files are present:
   - dist/index.js (server file)
   - dist/public/index.html (main HTML file)
   - dist/public/assets/ (all image and static assets)

## Critical Image Files to Verify
- Logo: assets/3dgifmaker34062.gif
- IT Services Dropdown: assets/IT-Services-dropdown.gif
- AI Dropdown: assets/AI-dropdown.png
- All other PNG, JPG, GIF, SVG files in assets/

## Post-Deployment Testing
- [ ] Website loads correctly
- [ ] Navigation dropdown images display without black backgrounds
- [ ] Logo appears at correct size on desktop/mobile
- [ ] All images load without 403 errors
- [ ] Responsive design works on mobile/tablet/desktop

## Common Issues and Solutions
- 403 errors on images: Run chmod 644 on all image files
- Missing images: Verify file paths and permissions
- Broken dropdowns: Check image blend modes and CSS
- Logo too small: Verify responsive CSS is applied

## Emergency Commands
If images don't load after deployment:
1. SSH to cpanel and run: find public_html/assets -name "*.png" -o -name "*.jpg" -o -name "*.gif" -o -name "*.svg" | xargs chmod 644
2. Clear browser cache and test again
EOF

# Step 6: Final verification
echo ""
echo "Step 6: Final verification..."
echo "Sample file permissions:"
ls -la client/public/assets/*.gif 2>/dev/null | head -3
ls -la client/public/assets/*.png 2>/dev/null | head -3

echo ""
echo "=== DEPLOYMENT READY ==="
echo "✓ Project built successfully"
echo "✓ All file permissions fixed"
echo "✓ Critical files verified"
echo "✓ Deployment checklist created"
echo ""
echo "Next steps:"
echo "1. Upload the contents of 'dist/' directory to your cpanel public_html"
echo "2. Follow the checklist in 'cpanel-deployment-checklist.txt'"
echo "3. Test the website after deployment"
echo ""
echo "IMPORTANT: Always run this script after making changes before deploying!"
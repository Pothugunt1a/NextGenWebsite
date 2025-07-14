#!/bin/bash

# Fix Image Permissions for CPPanel Deployment
# This script ensures all image assets have proper read permissions (644)

echo "Fixing image permissions for cpanel deployment..."

# Set proper permissions for all image files in source directory
echo "Setting permissions for source assets..."
find client/public/assets -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.svg" \) -exec chmod 644 {} \; 2>/dev/null

# Fix permissions for images in root directory
echo "Setting permissions for root directory images..."
find . -maxdepth 1 -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.svg" \) -exec chmod 644 {} \; 2>/dev/null

# Fix permissions for images in attached_assets directory
echo "Setting permissions for attached_assets directory..."
find attached_assets -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.svg" \) -exec chmod 644 {} \; 2>/dev/null

# Also fix permissions in dist directory if it exists
if [ -d "dist/public/assets" ]; then
    echo "Setting permissions for built assets..."
    find dist/public/assets -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.svg" \) -exec chmod 644 {} \; 2>/dev/null
fi

# Fix permissions for any images that might be in dist/public root
if [ -d "dist/public" ]; then
    echo "Setting permissions for built root images..."
    find dist/public -maxdepth 1 -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.svg" \) -exec chmod 644 {} \; 2>/dev/null
fi

echo "Image permissions fixed successfully!"
echo "All image files now have 644 permissions (readable by web server)"

# Verification
echo ""
echo "Verification - Sample image files with permissions:"
ls -la client/public/assets/*.png 2>/dev/null | head -5
ls -la client/public/assets/*.gif 2>/dev/null | head -3

echo ""
echo "Ready for cpanel deployment - all images should now display correctly."
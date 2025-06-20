#!/bin/bash

# Fix Banner Image Permissions for CPPanel Deployment
# This script ensures all banner images have proper read permissions (644)

echo "Fixing banner image permissions for cpanel deployment..."

# Set proper permissions for all banner images
chmod 644 client/public/assets/Validation-banner.png
chmod 644 client/public/assets/Life-Science-banner.png
chmod 644 client/public/assets/validation-banner.png
chmod 644 client/public/assets/Lifescience_banner.jpg
chmod 644 client/public/assets/About-Banner.png
chmod 644 client/public/assets/AI-Consulting.png
chmod 644 client/public/assets/IT-Consulting-banner.png
chmod 644 client/public/assets/career-banner.png
chmod 644 client/public/assets/contact-banner.png
chmod 644 client/public/assets/ai-network-banner1.jpg
chmod 644 client/public/assets/ai-network-banner2.png
chmod 644 client/public/assets/ai-network-banner3.png
chmod 644 client/public/assets/ai-brain-banner.png

# Set permissions for logo and company images
chmod 644 client/public/assets/3dgifmaker34062.gif
chmod 644 client/public/assets/microsoft-seeklogo.png
chmod 644 client/public/assets/infosys-limited-seeklogo.png
chmod 644 client/public/assets/ibm-logo.png
chmod 644 client/public/assets/google-2015-new-seeklogo.png
chmod 644 client/public/assets/envato-seeklogo.png
chmod 644 client/public/assets/deloitte-seeklogo.png

# Set permissions for dropdown images
chmod 644 client/public/assets/IT-Services-dropdown.png
chmod 644 client/public/assets/AI-dropdown.png

echo "Banner image permissions fixed!"
echo ""
echo "Verification of critical banner files:"
ls -la client/public/assets/Validation-banner.png
ls -la client/public/assets/Life-Science-banner.png
echo ""
echo "All banner images now have proper 644 permissions for cpanel hosting."
#!/usr/bin/env node
import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

console.log('Building for cPanel deployment...');

// Run the standard build
execSync('npm run build', { stdio: 'inherit' });

// Ensure .htaccess is in the dist/public folder
const htaccessSource = 'client/public/.htaccess';
const htaccessDest = 'dist/public/.htaccess';

if (existsSync(htaccessSource)) {
  copyFileSync(htaccessSource, htaccessDest);
  console.log('✓ .htaccess copied to dist/public');
}

console.log('✓ Build complete for cPanel deployment');
console.log('Upload the contents of dist/public/ to your cPanel public_html directory');
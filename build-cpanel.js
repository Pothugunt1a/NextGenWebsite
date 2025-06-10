#!/usr/bin/env node
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, copyFileSync, existsSync } from 'fs';
import { join } from 'path';

console.log('Building for cPanel deployment...');

// Run the standard build
execSync('npm run build', { stdio: 'inherit' });

// Fix asset paths in built HTML for cPanel deployment
const indexPath = 'dist/public/index.html';
if (existsSync(indexPath)) {
  let indexContent = readFileSync(indexPath, 'utf8');
  
  // Replace absolute asset paths with relative ones for cPanel
  indexContent = indexContent.replace(/src="\/assets\//g, 'src="assets/');
  indexContent = indexContent.replace(/href="\/assets\//g, 'href="assets/');
  
  writeFileSync(indexPath, indexContent);
  console.log('✓ Fixed asset paths in index.html for cPanel');
}

// Ensure .htaccess is in the dist/public folder
const htaccessSource = 'client/public/.htaccess';
const htaccessDest = 'dist/public/.htaccess';

if (existsSync(htaccessSource)) {
  copyFileSync(htaccessSource, htaccessDest);
  console.log('✓ .htaccess copied to dist/public');
}

console.log('✓ Build complete for cPanel deployment');
console.log('Upload the contents of dist/public/ to your cPanel public_html directory');
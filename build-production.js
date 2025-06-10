#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🚀 Starting production build process...');

// Clean and create dist directory
console.log('📁 Preparing directories...');
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true, force: true });
}
fs.mkdirSync('dist', { recursive: true });
fs.mkdirSync('dist/public', { recursive: true });

// Build client with optimized settings
console.log('⚛️ Building React application...');
try {
  execSync('cd client && npx vite build --outDir ../dist/public --emptyOutDir', {
    stdio: 'inherit',
    timeout: 300000 // 5 minutes
  });
} catch (error) {
  console.error('❌ Client build failed:', error.message);
  process.exit(1);
}

// Copy server files
console.log('🖥️ Preparing server files...');
const serverFiles = ['server', 'shared', 'package.json', 'package-lock.json'];

serverFiles.forEach(file => {
  const srcPath = path.join(__dirname, file);
  const destPath = path.join(__dirname, 'dist', file);
  
  if (fs.existsSync(srcPath)) {
    if (fs.statSync(srcPath).isDirectory()) {
      fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
    console.log(`✅ Copied ${file}`);
  }
});

// Create production package.json
console.log('📦 Creating production package.json...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const prodPackageJson = {
  name: packageJson.name,
  version: packageJson.version,
  type: "module",
  scripts: {
    start: "node server/index.js"
  },
  dependencies: packageJson.dependencies
};

fs.writeFileSync('dist/package.json', JSON.stringify(prodPackageJson, null, 2));

console.log('✨ Production build completed successfully!');
console.log('📂 Files are ready in the dist/ folder for cPanel upload');
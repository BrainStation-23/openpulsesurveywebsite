
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define source and destination paths
const srcPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const destPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');

// Make sure the destination directory exists
const destDir = path.dirname(destPath);
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy the file
try {
  fs.copyFileSync(srcPath, destPath);
  console.log('sitemap.xml successfully copied to dist folder');
} catch (err) {
  console.error('Error copying sitemap.xml:', err);
}

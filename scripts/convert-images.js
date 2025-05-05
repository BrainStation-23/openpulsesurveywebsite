import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Image extensions to convert
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif'];

// Directories to scan
const DIRS_TO_SCAN = [
  'public',
  'src/assets',
];

/**
 * Check if a file is an image that should be converted
 */
function isConvertibleImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

/**
 * Convert an image to WebP format
 */
async function convertToWebP(filePath) {
  try {
    const webpPath = filePath.substring(0, filePath.lastIndexOf('.')) + '.webp';
    
    // Skip if WebP already exists and is newer than the source image
    try {
      const [sourceStat, webpStat] = await Promise.all([
        fs.stat(filePath),
        fs.stat(webpPath)
      ]);
      
      if (webpStat.mtime > sourceStat.mtime) {
        console.log(`Skipping ${filePath} (WebP is up to date)`);
        return;
      }
    } catch (e) {
      // WebP doesn't exist yet, continue with conversion
    }
    
    console.log(`Converting ${filePath} to WebP...`);
    
    // Using cwebp command if available (requires installation of webp tools)
    try {
      await execPromise(`cwebp -q 80 "${filePath}" -o "${webpPath}"`);
      console.log(`Created ${webpPath}`);
    } catch (e) {
      console.error(`Error converting ${filePath}: ${e.message}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}: ${err.message}`);
  }
}

/**
 * Recursively scan directories for images
 */
async function scanDirectory(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await scanDirectory(fullPath);
      } else if (entry.isFile() && isConvertibleImage(fullPath)) {
        await convertToWebP(fullPath);
      }
    }
  } catch (err) {
    console.error(`Error scanning directory ${dir}: ${err.message}`);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('Starting image conversion to WebP...');
  
  for (const dir of DIRS_TO_SCAN) {
    const fullDir = path.join(rootDir, dir);
    try {
      await fs.access(fullDir);
      await scanDirectory(fullDir);
    } catch (err) {
      console.error(`Directory ${fullDir} does not exist or is not accessible`);
    }
  }
  
  console.log('Image conversion process completed');
}

// Run the conversion
main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
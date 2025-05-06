
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { createServer } from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8080;

// MIME type mapping for proper content types
const mimeTypes = {
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.html': 'text/html',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
};

// Security headers
app.use(helmet({
  contentSecurityPolicy: false, // Configure this properly for your needs
  crossOriginEmbedderPolicy: false, // May need adjustment based on your requirements
}));

// Enable gzip/brotli compression
app.use(compression());

// Custom middleware to set correct MIME types
app.use((req, res, next) => {
  const ext = path.extname(req.path).toLowerCase();
  if (mimeTypes[ext]) {
    res.type(mimeTypes[ext]);
  }
  next();
});

// Cache control for static assets - helps with "Serve static assets with an efficient cache policy"
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    
    if (ext === '.html') {
      // Don't cache HTML files
      res.setHeader('Cache-Control', 'no-cache');
    } else if (mimeTypes[ext]) {
      // Set the correct content type based on file extension
      res.setHeader('Content-Type', mimeTypes[ext]);
      
      // Long cache for assets that have hashed filenames from the build process
      if (filePath.match(/\.(js|css|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    }
  }
}));

// For root path, serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Handle sitemap.xml specifically with the correct MIME type
app.get('/sitemap.xml', (req, res) => {
  const sitemapPath = path.join(__dirname, 'dist', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    res.setHeader('Content-Type', 'application/xml');
    res.sendFile(sitemapPath);
  } else {
    res.status(404).send('Sitemap not found');
  }
});

// Handle all other routes for SPA
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Check if we have SSL certificates for HTTP/2 (for production)
if (fs.existsSync('./cert/key.pem') && fs.existsSync('./cert/cert.pem')) {
  // HTTPS server with HTTP/2
  const options = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem'),
    allowHTTP1: true,
  };

  createServer(options, app).listen(PORT, () => {
    console.log(`HTTPS server running on port ${PORT} with HTTP/2 support`);
  });
} else {
  // Fallback to HTTP
  app.listen(PORT, () => {
    console.log(`HTTP server running on port ${PORT}`);
    console.log('For HTTP/2 support, add SSL certificates in the ./cert folder');
  });
}

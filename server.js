
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

// Security headers
app.use(helmet({
  contentSecurityPolicy: false, // Configure this properly for your needs
  crossOriginEmbedderPolicy: false, // May need adjustment based on your requirements
}));

// Enable gzip/brotli compression
app.use(compression());

// Special handling for sitemap.xml - Must come BEFORE other static handlers
app.get('/sitemap.xml', (req, res) => {
  const sitemapPath = path.join(__dirname, 'dist', 'sitemap.xml');
  res.setHeader('Content-Type', 'application/xml');
  res.sendFile(sitemapPath);
});

// Check for prerendered pages first
app.use((req, res, next) => {
  const normalizedUrl = req.path === '/' ? '/index.html' : req.path;
  const prerenderedPath = path.join(__dirname, 'dist', normalizedUrl);
  
  // If this is a direct path to a prerendered HTML file, serve it
  if (normalizedUrl.endsWith('/') || normalizedUrl === '/index.html') {
    const htmlPath = normalizedUrl.endsWith('/') 
      ? path.join(__dirname, 'dist', normalizedUrl, 'index.html')
      : prerenderedPath;
    
    if (fs.existsSync(htmlPath)) {
      return res.sendFile(htmlPath);
    }
  }
  
  next();
});

// Cache control for static assets - helps with "Serve static assets with an efficient cache policy"
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      // Don't cache HTML files
      res.setHeader('Cache-Control', 'no-cache');
    } else if (filePath.match(/\.(js|css|png|jpg|jpeg|gif|webp|svg|ico)$/)) {
      // Long cache for assets that have hashed filenames from the build process
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// For the root route, serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Handle all other routes for SPA (except those already handled)
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

// Export the app for the prerender script
export default app;


import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define all routes that need to be prerendered
const routes = [
  '/',
  '/features',
  '/pricing',
  '/anti-saas',
  '/use-cases',
  '/technical',
  '/contact',
  '/about-us',
  '/privacy-policy',
  '/sitemap'
];

async function prerender() {
  console.log('Starting prerender process...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const outputDir = path.join(__dirname, 'dist');
  
  // Make sure the output directory exists
  await fs.mkdir(outputDir, { recursive: true });
  
  // Start the development server
  const serverProcess = await import('./server.js');
  
  try {
    // Allow server to start up
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Base URL for the local server
    const baseUrl = 'http://localhost:8080';
    
    // Process each route
    for (const route of routes) {
      console.log(`Prerendering: ${route}`);
      
      // Navigate to the route
      await page.goto(`${baseUrl}${route}`, {
        waitUntil: 'networkidle0',
      });
      
      // Get the HTML content
      const html = await page.content();
      
      // Create directory structure if needed
      if (route !== '/') {
        const dirPath = path.join(outputDir, route.substring(1));
        await fs.mkdir(dirPath, { recursive: true });
      }
      
      // Write HTML to file
      const filePath = route === '/' 
        ? path.join(outputDir, 'index.html') 
        : path.join(outputDir, `${route.substring(1)}/index.html`);
      
      await fs.writeFile(filePath, html);
      console.log(`Generated: ${filePath}`);
    }
  } catch (error) {
    console.error('Prerender error:', error);
    process.exit(1);
  } finally {
    // Close browser and server
    await browser.close();
    process.exit(0);
  }
}

prerender();

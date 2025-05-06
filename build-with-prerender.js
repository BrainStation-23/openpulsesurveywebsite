
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function buildWithPrerender() {
  try {
    // Run the regular Vite build
    console.log('Running Vite build...');
    await execAsync('npm run build:original');
    
    // Run the prerender script
    console.log('Running prerender...');
    await execAsync('node prerender.js');
    
    console.log('Build and prerender complete!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildWithPrerender();

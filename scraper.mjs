import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://www.techasoft.com';
const OUTPUT_DIR = './public';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const visited = new Set();
const queue = [BASE_URL];

// Let's scrape a bit more pages to get a good chunk of the site
const MAX_PAGES = 100;

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
            redirectUrl = BASE_URL + redirectUrl;
        }
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function scrape() {
  let pagesScraped = 0;
  
  while (queue.length > 0 && pagesScraped < MAX_PAGES) {
    const currentUrl = queue.shift();
    
    let urlObj;
    try {
      urlObj = new URL(currentUrl);
    } catch (e) {
      continue;
    }
    
    if (urlObj.hostname !== 'www.techasoft.com' && urlObj.hostname !== 'techasoft.com') {
      continue;
    }
    
    const cleanUrl = urlObj.origin + urlObj.pathname;
    
    if (visited.has(cleanUrl)) {
      continue;
    }
    visited.add(cleanUrl);
    
    console.log(`Scraping: ${cleanUrl}`);
    
    try {
      let buffer = await fetchUrl(cleanUrl);
      
      // Determine if text or binary based on URL extension
      const isHtml = !cleanUrl.match(/\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/i);
      const isCssJs = cleanUrl.match(/\.(css|js)$/i);
      
      let pathname = urlObj.pathname;
      if (pathname === '/') pathname = '/index.html';
      
      if (isHtml) {
        let html = buffer.toString('utf8');
        
        // Extract links to queue
        const linkRegex = /href=["'](https:\/\/(www\.)?techasoft\.com\/[^"']*)["']/g;
        let match;
        while ((match = linkRegex.exec(html)) !== null) {
          queue.push(match[1]);
        }
        const srcRegex = /src=["'](https:\/\/(www\.)?techasoft\.com\/[^"']*)["']/g;
        while ((match = srcRegex.exec(html)) !== null) {
          queue.push(match[1]);
        }
        
        const relativeLinkRegex = /href=["'](\/[^"']*)["']/g;
        while ((match = relativeLinkRegex.exec(html)) !== null) {
          queue.push(BASE_URL + match[1]);
        }
        const relativeSrcRegex = /src=["'](\/[^"']*)["']/g;
        while ((match = relativeSrcRegex.exec(html)) !== null) {
          queue.push(BASE_URL + match[1]);
        }
        
        // Convert absolute URLs to relative first
        html = html.replace(/https:\/\/(www\.)?techasoft\.com/g, '');
        
        // Replace text
        html = html.replace(/Techasoft/g, 'STO Digital');
        html = html.replace(/techasoft/g, 'sto-digital');
        html = html.replace(/TECHASOFT/g, 'STO DIGITAL');
        
        buffer = Buffer.from(html, 'utf8');
        
        if (!pathname.endsWith('.html') && !pathname.includes('.')) {
          pathname += '.html';
        }
      } else if (isCssJs) {
        let text = buffer.toString('utf8');
        text = text.replace(/https:\/\/(www\.)?techasoft\.com/g, '');
        buffer = Buffer.from(text, 'utf8');
      }
      
      const filepath = path.join(OUTPUT_DIR, pathname);
      const dirname = path.dirname(filepath);
      
      if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
      }
      
      fs.writeFileSync(filepath, buffer);
      console.log(`Saved to ${filepath}`);
      pagesScraped++;
      
    } catch (err) {
      console.error(`Failed to scrape ${cleanUrl}:`, err.message);
    }
  }
  
  console.log(`Finished scraping ${pagesScraped} pages!`);
}

scrape();

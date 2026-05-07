import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://www.techasoft.com';
const OUTPUT_DIR = './public';
const LOCAL_HTML_PATH = './public/index.html';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadBinary(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadBinary(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Status Code: ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function extractSection(html, startTag, endTag) {
  const startIndex = html.indexOf(startTag);
  if (startIndex === -1) {
    console.error(`Could not find section with start tag: ${startTag}`);
    return null;
  }
  
  let endIndex = html.indexOf(endTag, startIndex);
  if (endIndex === -1) {
    console.error(`Could not find end tag: ${endTag} for section starting with ${startTag}`);
    return null;
  }
  endIndex += endTag.length;
  
  return html.substring(startIndex, endIndex);
}

async function processContent(content) {
  if (!content) return null;

  // Clean up runtime classes
  content = content.replace(/aos-init|aos-animate/g, '');
  
  // Download images
  const imgRegex = /src=["']((?!http)[^"']*)["']/g;
  let match;
  const images = new Set();
  while ((match = imgRegex.exec(content)) !== null) {
    images.add(match[1]);
  }
  
  for (const imgPath of images) {
    if (!imgPath || imgPath === '#' || imgPath.startsWith('javascript:')) continue;
    const normalizedPath = imgPath.startsWith('/') ? imgPath : '/' + imgPath;
    const fullUrl = BASE_URL + normalizedPath;
    const localPath = path.join(OUTPUT_DIR, normalizedPath);
    const localDir = path.dirname(localPath);
    
    if (!fs.existsSync(localDir)) {
      fs.mkdirSync(localDir, { recursive: true });
    }
    
    if (!fs.existsSync(localPath)) {
      console.log(`Downloading image: ${fullUrl}`);
      try {
        const buffer = await downloadBinary(fullUrl);
        fs.writeFileSync(localPath, buffer);
        console.log(`Saved to ${localPath}`);
      } catch (e) {
        console.log(`Failed to download ${fullUrl}: ${e.message}`);
      }
    }
  }

  // Make all links relative
  content = content.replace(/https:\/\/(www\.)?techasoft\.com/g, '');

  // BRANDING: Replace Techasoft with H2O Digital
  content = content.replace(/Techasoft Pvt Ltd/gi, 'H2O Digital');
  content = content.replace(/Techasoft/gi, 'H2O Digital');

  // CUSTOM: Remove Nishant Kumar testimonial block
  // We look for the <div class="item"> that contains Nishant Kumar
  if (content.includes('Nishant Kumar')) {
    const items = content.split('<div class="item"');
    const filteredItems = items.filter(item => !item.includes('Nishant Kumar'));
    content = filteredItems.join('<div class="item"');
    console.log('Removed Nishant Kumar testimonial block cleanly');
  }
  
  return content;
}

async function extract() {
  console.log('Fetching Techasoft home page...');
  const html = await fetchUrl(BASE_URL + '/');
  
  // 1. Extract Blogs
  console.log('Processing Blogs section...');
  let blogsHtml = await extractSection(html, '<section class="blogs"', '</section>');
  blogsHtml = await processContent(blogsHtml);

  // 2. Extract Testimonials
  console.log('Processing Testimonials section...');
  let testimonialsHtml = await extractSection(html, '<section class="testimonials-new"', '</section>');
  testimonialsHtml = await processContent(testimonialsHtml);

  // 3. Update local index.html
  if (!fs.existsSync(LOCAL_HTML_PATH)) {
    console.error(`Local HTML not found at ${LOCAL_HTML_PATH}`);
    return;
  }

  let localHtml = fs.readFileSync(LOCAL_HTML_PATH, 'utf8');

  if (blogsHtml) {
    const startTag = '<section class="blogs"';
    const endTag = '</section>';
    const localStartIndex = localHtml.indexOf(startTag);
    if (localStartIndex !== -1) {
      const localEndIndex = localHtml.indexOf(endTag, localStartIndex) + endTag.length;
      localHtml = localHtml.substring(0, localStartIndex) + blogsHtml + localHtml.substring(localEndIndex);
      console.log('Updated Blogs section in local index.html');
    }
  }

  if (testimonialsHtml) {
    const startTag = '<section class="testimonials-new"';
    const endTag = '</section>';
    const localStartIndex = localHtml.indexOf(startTag);
    if (localStartIndex !== -1) {
      const localEndIndex = localHtml.indexOf(endTag, localStartIndex) + endTag.length;
      localHtml = localHtml.substring(0, localStartIndex) + testimonialsHtml + localHtml.substring(localEndIndex);
      console.log('Updated Testimonials section in local index.html');
    }
  }

  fs.writeFileSync(LOCAL_HTML_PATH, localHtml);
  console.log('Extraction complete! Run your site to see the results.');
}

extract().catch(console.error);

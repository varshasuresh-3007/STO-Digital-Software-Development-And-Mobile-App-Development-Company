import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://www.techasoft.com';
const OUTPUT_DIR = './public';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadBinary(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
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

async function extract() {
  console.log('Fetching techasoft.com for industries...');
  const html = await fetchUrl(BASE_URL + '/');
  
  // Find the industries section
  const startIndex = html.indexOf('<section class="industries"');
  if (startIndex === -1) {
    console.error('Could not find industries section in HTML');
    return;
  }
  
  let endIndex = html.indexOf('</section>', startIndex);
  if (endIndex === -1) {
    console.error('Could not find end of industries section');
    return;
  }
  endIndex += '</section>'.length;
  
  let industriesHtml = html.substring(startIndex, endIndex);
  console.log('Extracted industries HTML (' + industriesHtml.length + ' bytes)');
  
  // Find all images and download them
  const imgRegex = /src=["']((?!http)[^"']*)["']/g;
  let match;
  const images = new Set();
  while ((match = imgRegex.exec(industriesHtml)) !== null) {
    images.add(match[1]);
  }
  
  for (const imgPath of images) {
    const normalizedPath = imgPath.startsWith('/') ? imgPath : '/' + imgPath;
    const fullUrl = BASE_URL + normalizedPath;
    const localPath = path.join(OUTPUT_DIR, normalizedPath);
    const localDir = path.dirname(localPath);
    
    if (!fs.existsSync(localDir)) {
      fs.mkdirSync(localDir, { recursive: true });
    }
    
    console.log(`Downloading image: ${fullUrl}`);
    try {
      const buffer = await downloadBinary(fullUrl);
      fs.writeFileSync(localPath, buffer);
      console.log(`Saved to ${localPath}`);
    } catch (e) {
      console.log(`Failed to download ${fullUrl}: ${e.message}`);
    }
  }
  
  // Replace absolute URLs with relative ones
  industriesHtml = industriesHtml.replace(/https:\/\/(www\.)?techasoft\.com/g, '');
  
  // Insert into local index.html
  const localHtmlPath = './public/index.html';
  let localHtml = fs.readFileSync(localHtmlPath, 'utf8');
  
  const localStartIndex = localHtml.indexOf('<section class="industries"');
  const localEndIndex = localHtml.indexOf('</section>', localStartIndex) + '</section>'.length;
  
  if (localStartIndex !== -1 && localEndIndex !== -1) {
    localHtml = localHtml.substring(0, localStartIndex) + industriesHtml + localHtml.substring(localEndIndex);
    fs.writeFileSync(localHtmlPath, localHtml);
    console.log('Updated industries section in public/index.html');
  } else {
    // If not found, insert before technology section
    const insertTarget = '  <section class="technology">';
    if (localHtml.includes(insertTarget)) {
        localHtml = localHtml.replace(insertTarget, industriesHtml + '\n\n' + insertTarget);
        fs.writeFileSync(localHtmlPath, localHtml);
        console.log('Inserted industries section before technology in public/index.html');
    }
  }
}

extract().catch(console.error);

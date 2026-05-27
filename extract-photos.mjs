import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://www.techasoft.com';
const DIRS_TO_SCAN = ['.', './public'];

function fetchBinary(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
            redirectUrl = BASE_URL + redirectUrl;
        }
        return fetchBinary(redirectUrl, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      
      const dirname = path.dirname(filepath);
      if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
      }
      
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

function scanFiles(dir, fileList) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules') continue;
    
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      scanFiles(filePath, fileList);
    } else if (filePath.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

async function extractPhotos() {
  const htmlFiles = scanFiles('./public', []);
  htmlFiles.push('./index.html');
  
  const imagesToDownload = new Set();
  
  for (const file of htmlFiles) {
    if (!fs.existsSync(file)) continue;
    let html = fs.readFileSync(file, 'utf8');
    
    // Find all src="/..." or srcset="/..."
    const srcRegex = /src=["'](\/[^"']*\.(png|jpg|jpeg|gif|ico|svg|avif|webp))["']/gi;
    let match;
    while ((match = srcRegex.exec(html)) !== null) {
      imagesToDownload.add(match[1]);
    }
    
    const srcsetRegex = /srcset=["'](\/[^"']*\.(png|jpg|jpeg|gif|ico|svg|avif|webp))["']/gi;
    while ((match = srcsetRegex.exec(html)) !== null) {
      imagesToDownload.add(match[1]);
    }
    
    // As requested: "put https://www.techasoft.com/ logo okay"
    // The logo class is "sto-digital-logo", we should replace its src with the absolute techasoft URL
    // Actually, it's easier to just ensure the absolute URL is used for the logo or rename the class back.
    // The logo is TS-Logo-LArge-1.png
    html = html.replace(/src=["']\/debug\/img\/TS-Logo-LArge-1\.png["']/g, `src="${BASE_URL}/debug/img/TS-Logo-LArge-1.png"`);
    fs.writeFileSync(file, html, 'utf8');
  }
  
  console.log(`Found ${imagesToDownload.size} unique photos/images to extract.`);
  
  let count = 0;
  const promises = [];
  
  for (const imgPath of imagesToDownload) {
    if (imgPath === '/debug/img/TS-Logo-LArge-1.png') continue; // We made this absolute
    
    const url = BASE_URL + imgPath;
    const localPath = path.join('./public', imgPath);
    
    // Skip if already exists
    if (fs.existsSync(localPath) && fs.statSync(localPath).size > 0) {
      count++;
      continue;
    }
    
    console.log(`Extracting: ${url}`);
    promises.push(
      fetchBinary(url, localPath)
        .then(() => {
          count++;
          if (count % 10 === 0) console.log(`Downloaded ${count}/${imagesToDownload.size}`);
        })
        .catch(err => console.error(`Failed ${url}: ${err.message}`))
    );
    
    // Throttle slightly
    if (promises.length >= 10) {
      await Promise.all(promises);
      promises.length = 0;
    }
  }
  
  await Promise.all(promises);
  console.log('Finished extracting all photos!');
}

extractPhotos();

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const BASE_URL = 'https://www.techasoft.com';
const PUBLIC_DIR = './public';

// Helper to recursively scan directory for files with specific extensions
function scanFiles(dir, extensions, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file.startsWith('.')) continue;
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      scanFiles(filePath, extensions, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

// Download function that handles redirects, returns buffer
function downloadBinary(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { timeout: 10000 }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const originalUrl = new URL(url);
          redirectUrl = originalUrl.origin + (redirectUrl.startsWith('/') ? '' : '/') + redirectUrl;
        }
        return downloadBinary(redirectUrl).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP status ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject).on('timeout', () => {
      reject(new Error('Timeout'));
    });
  });
}

// Check if an extension is an image/asset we want to localize
function isImageAsset(urlPath) {
  const cleanPath = urlPath.split('?')[0].split('#')[0];
  const ext = path.extname(cleanPath).toLowerCase();
  return ['.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg', '.avif', '.webp', '.mp4', '.woff', '.woff2', '.ttf', '.eot'].includes(ext);
}

// Parse a srcset string into individual image paths
function parseSrcset(srcsetVal) {
  const paths = [];
  const parts = srcsetVal.split(',');
  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const urlPart = trimmed.split(/\s+/)[0];
    if (urlPart) paths.push(urlPart);
  }
  return paths;
}

async function start() {
  console.log('--- Starting Asset Scan and Localization ---');
  
  const files = scanFiles(PUBLIC_DIR, ['.html', '.css', '.js']);
  console.log(`Found ${files.length} HTML, CSS, and JS files to scan.`);

  // Set to store unique assets to download
  // Map key: original URL, value: { localPath, relativeUrl, domain, isAbsolute }
  const assetsToDownload = new Map();

  // Helper to register asset
  function registerAsset(referencingFile, originalUrl) {
    if (!originalUrl || originalUrl.startsWith('data:') || originalUrl.startsWith('javascript:') || originalUrl.startsWith('#') || originalUrl.startsWith('mailto:')) {
      return;
    }

    const cleanUrl = originalUrl.trim();
    if (!isImageAsset(cleanUrl)) return;

    let isAbsolute = false;
    let urlObj = null;
    try {
      if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://') || cleanUrl.startsWith('//')) {
        isAbsolute = true;
        let absoluteUrl = cleanUrl.startsWith('//') ? 'https:' + cleanUrl : cleanUrl;
        urlObj = new URL(absoluteUrl);
      }
    } catch (e) {
      // Not a valid absolute URL, treat as relative
    }

    let localPath = '';
    let relativeUrl = '';
    let downloadUrl = '';

    if (isAbsolute && urlObj) {
      if (urlObj.hostname.includes('techasoft.com') || urlObj.hostname.includes('sto-digital.com')) {
        // Techasoft asset
        const cleanPathname = decodeURIComponent(urlObj.pathname);
        localPath = path.join(PUBLIC_DIR, cleanPathname);
        relativeUrl = cleanPathname;
        downloadUrl = BASE_URL + cleanPathname;
      } else {
        // External asset from other domain (e.g. CDNs or other sites)
        // Let's store them under public/debug/img/external-[domain]-[filename]
        const domainClean = urlObj.hostname.replace(/[^a-z0-9]/gi, '_');
        const filenameClean = path.basename(decodeURIComponent(urlObj.pathname)).replace(/[^a-z0-9.]/gi, '_');
        const customFilename = `ext_${domainClean}_${filenameClean}`;
        
        localPath = path.join(PUBLIC_DIR, 'debug', 'img', customFilename);
        relativeUrl = `/debug/img/${customFilename}`;
        downloadUrl = urlObj.href;
      }
    } else {
      // Relative URL
      // Let's resolve it relative to the file it was found in, but map to public root
      let resolvedPath;
      if (cleanUrl.startsWith('/')) {
        resolvedPath = path.join(PUBLIC_DIR, decodeURIComponent(cleanUrl));
      } else {
        resolvedPath = path.resolve(path.dirname(referencingFile), decodeURIComponent(cleanUrl));
      }

      // Check if it resolves inside the public directory
      const relativeFromPublic = path.relative(PUBLIC_DIR, resolvedPath);
      if (relativeFromPublic.startsWith('..')) {
        // Outside public folder, skip or save in public/debug/img
        const baseName = path.basename(resolvedPath);
        localPath = path.join(PUBLIC_DIR, 'debug', 'img', baseName);
        relativeUrl = `/debug/img/${baseName}`;
        downloadUrl = BASE_URL + '/' + cleanUrl;
      } else {
        localPath = resolvedPath;
        relativeUrl = '/' + relativeFromPublic.replace(/\\/g, '/');
        downloadUrl = BASE_URL + relativeUrl;
      }
    }

    // Only register if we have a download URL and localPath
    if (localPath && relativeUrl && downloadUrl) {
      // Normalize localPath to use system separators
      const sysLocalPath = path.normalize(localPath);
      
      // If not already in map, add it
      if (!assetsToDownload.has(cleanUrl)) {
        assetsToDownload.set(cleanUrl, {
          originalUrl: cleanUrl,
          localPath: sysLocalPath,
          relativeUrl,
          downloadUrl
        });
      }
    }
  }

  // Phase 1: Scan all files to find image URLs
  console.log('Phase 1: Scanning files...');
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const content = fs.readFileSync(file, 'utf8');

    if (ext === '.html') {
      // Match src="..." or src='...'
      const srcRegex = /src=["']([^"']+)["']/gi;
      let match;
      while ((match = srcRegex.exec(content)) !== null) {
        registerAsset(file, match[1]);
      }

      // Match srcset="..." or srcset='...'
      const srcsetRegex = /srcset=["']([^"']+)["']/gi;
      while ((match = srcsetRegex.exec(content)) !== null) {
        const srcsetPaths = parseSrcset(match[1]);
        for (const p of srcsetPaths) {
          registerAsset(file, p);
        }
      }

      // Match inline background-image: url(...)
      const styleUrlRegex = /url\(['"]?([^'")]+)['"]?\)/gi;
      while ((match = styleUrlRegex.exec(content)) !== null) {
        registerAsset(file, match[1]);
      }

      // Match links containing images (like favicon or apple-touch-icon)
      const hrefRegex = /href=["']([^"']+\.(png|jpg|jpeg|gif|ico|svg|avif|webp))["']/gi;
      while ((match = hrefRegex.exec(content)) !== null) {
        registerAsset(file, match[1]);
      }
    } else if (ext === '.css') {
      // Match url(...) in CSS
      const cssUrlRegex = /url\(['"]?([^'")\s]+)['"]?\)/gi;
      let match;
      while ((match = cssUrlRegex.exec(content)) !== null) {
        registerAsset(file, match[1]);
      }
    } else if (ext === '.js') {
      // Match string literals ending with image extensions or containing techasoft.com
      const stringRegex = /["']([^"'\s]+\.(png|jpg|jpeg|gif|ico|svg|avif|webp|mp4))["']/gi;
      let match;
      while ((match = stringRegex.exec(content)) !== null) {
        registerAsset(file, match[1]);
      }
    }
  }

  console.log(`Scanning completed. Found ${assetsToDownload.size} unique image/asset candidates.`);

  // Phase 2: Filter out existing files and prepare download queue
  const downloadQueue = [];
  let existingCount = 0;

  for (const [originalUrl, info] of assetsToDownload.entries()) {
    const exists = fs.existsSync(info.localPath);
    if (exists && fs.statSync(info.localPath).size > 0) {
      existingCount++;
    } else {
      downloadQueue.push(info);
    }
  }

  console.log(`Summary of assets:`);
  console.log(`- Already exists locally: ${existingCount}`);
  console.log(`- Need to download: ${downloadQueue.length}`);

  // Phase 3: Download missing assets with a concurrency limit
  console.log('\nPhase 2: Downloading missing assets...');
  let downloadedCount = 0;
  let failedCount = 0;

  const CONCURRENCY_LIMIT = 5;
  const queue = [...downloadQueue];

  async function worker() {
    while (queue.length > 0) {
      const asset = queue.shift();
      if (!asset) continue;

      const dir = path.dirname(asset.localPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      console.log(`[Downloading] ${asset.downloadUrl} -> ${asset.localPath}`);
      try {
        const buffer = await downloadBinary(asset.downloadUrl);
        fs.writeFileSync(asset.localPath, buffer);
        downloadedCount++;
        console.log(`[Success] Saved ${asset.localPath} (${buffer.length} bytes)`);
      } catch (err) {
        failedCount++;
        console.error(`[Failed] ${asset.downloadUrl}: ${err.message}`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY_LIMIT }, worker);
  await Promise.all(workers);

  console.log(`\nDownload process completed.`);
  console.log(`- Successfully downloaded: ${downloadedCount}`);
  console.log(`- Failed downloads: ${failedCount}`);

  // Phase 4: Rewrite HTML/CSS/JS files to make all paths local/relative
  console.log('\nPhase 3: Rewriting file references...');
  let filesRewritten = 0;

  // Let's create a map of original absolute URLs or relative paths that need rewriting
  // We only rewrite if the original path contains an absolute URL or was updated
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    for (const [originalUrl, info] of assetsToDownload.entries()) {
      // If it's a techasoft absolute URL, we replace it with relative URL
      // If it's another domain absolute URL, we replace it with relative URL
      if (originalUrl.startsWith('http://') || originalUrl.startsWith('https://') || originalUrl.startsWith('//')) {
        // Direct replacement of absolute URL with relative path
        // Escaping regex characters in original URL
        const escapedUrl = originalUrl.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(escapedUrl, 'g');
        content = content.replace(regex, info.relativeUrl);
      }
    }

    // Additional generic replacements to ensure absolute techasoft URLs are eliminated
    const beforeChange = content;
    content = content.replace(/https:\/\/(www\.)?techasoft\.com\/debug\/img\/TS-Logo-LArge-1\.png/g, '/debug/img/TS-Logo-LArge-1.png');
    content = content.replace(/https:\/\/(www\.)?techasoft\.com\/uploads/g, '/uploads');
    content = content.replace(/https:\/\/(www\.)?techasoft\.com\/debug\/img/g, '/debug/img');
    content = content.replace(/https:\/\/(www\.)?techasoft\.com/g, '');

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      filesRewritten++;
      console.log(`[Rewritten] ${file}`);
    }
  }

  console.log(`\nRewrite completed.`);
  console.log(`- Files updated: ${filesRewritten}`);
  console.log('--- All processes finished! ---');
}

start().catch(err => {
  console.error('Fatal error during asset localization:', err);
});

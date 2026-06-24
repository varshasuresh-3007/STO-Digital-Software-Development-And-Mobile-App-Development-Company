import fs from 'fs';
import path from 'path';
import https from 'https';

const targetDir = path.resolve('public/debug/img');
const targetFile = path.join(targetDir, 'testm-back.png');
const downloadUrl = 'https://www.techasoft.com/debug/img/testm-back.png';
const localSrc = 'C:\\Users\\varsh\\.gemini\\antigravity-ide\\brain\\2645106b-8da9-44a7-8374-cdf2f15fefbc\\testm_back_1782300045675.png';

async function download() {
  if (fs.existsSync(targetFile) && fs.statSync(targetFile).size > 0) {
    return;
  }
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 1. Try copying from local generated path first
  if (fs.existsSync(localSrc)) {
    console.log(`Copying generated asset from ${localSrc}`);
    try {
      fs.copyFileSync(localSrc, targetFile);
      console.log('Successfully copied testm-back.png from generated asset');
      return;
    } catch (e) {
      console.error(`Failed to copy local asset: ${e.message}`);
    }
  }

  // 2. Try download
  console.log(`Downloading missing asset: ${downloadUrl}`);
  const success = await new Promise((resolve) => {
    const file = fs.createWriteStream(targetFile);
    https.get(downloadUrl, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Successfully saved testm-back.png');
          resolve(true);
        });
      } else {
        file.close();
        fs.unlink(targetFile, () => {});
        resolve(false);
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(targetFile, () => {});
      resolve(false);
    });
  });

  if (success) return;

  // 3. Fallback to generating a solid color PNG to avoid breaking build
  console.log('Download failed. Creating solid blue PNG fallback...');
  const base64Png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwAEhAFeK/7PzgAAAABJRU5ErkJggg=='; // 1x1 solid blue PNG
  fs.writeFileSync(targetFile, Buffer.from(base64Png, 'base64'));
  console.log('Successfully created fallback testm-back.png');
}

function scanFiles(dir, extensions, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
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

function verifyImages() {
  const SRC_DIR = path.resolve('src');
  const PUBLIC_DIR = path.resolve('public');
  const files = scanFiles(SRC_DIR, ['.jsx', '.js', '.css']);
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif', '.ico'];
  const references = [];

  const imagePathRegex = /(?:src|srcSet|href|url)\s*[:=]\s*["']([^"']+\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico))["']/gi;
  const genericPathRegex = /["'](\/(?:uploads|debug\/img)\/[^"']+)["']/gi;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    let match;

    imagePathRegex.lastIndex = 0;
    while ((match = imagePathRegex.exec(content)) !== null) {
      references.push({ file, path: match[1].split('?')[0].split('#')[0].trim() });
    }

    genericPathRegex.lastIndex = 0;
    while ((match = genericPathRegex.exec(content)) !== null) {
      const rawPath = match[1].split('?')[0].split('#')[0].trim();
      const ext = path.extname(rawPath).toLowerCase();
      if (imageExtensions.includes(ext)) {
        references.push({ file, path: rawPath });
      }
    }
  }

  const uniqueRefs = [];
  const seen = new Set();
  for (const ref of references) {
    const key = `${ref.path}::${ref.file}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueRefs.push(ref);
    }
  }

  const missing = [];
  for (const ref of uniqueRefs) {
    let resolvedPath = '';
    if (ref.path.startsWith('/')) {
      resolvedPath = path.join(PUBLIC_DIR, ref.path);
    } else if (ref.path.startsWith('http://') || ref.path.startsWith('https://') || ref.path.startsWith('data:')) {
      continue;
    } else {
      resolvedPath = path.resolve(path.dirname(ref.file), ref.path);
    }

    if (!fs.existsSync(resolvedPath)) {
      missing.push({
        referencedPath: ref.path,
        file: path.relative(process.cwd(), ref.file),
      });
    }
  }

  if (missing.length > 0) {
    console.warn(`\n[WARNING] Found ${missing.length} missing or case-mismatched images:`);
    missing.forEach((m, i) => {
      console.warn(`  ${i + 1}. File: ${m.file} -> Referenced: "${m.referencedPath}"`);
    });
    console.warn('');
  } else {
    console.log('All referenced images verified successfully.');
  }
}

async function run() {
  await download();
  verifyImages();
}

run();

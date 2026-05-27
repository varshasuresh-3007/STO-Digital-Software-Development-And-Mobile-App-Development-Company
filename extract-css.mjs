import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://www.techasoft.com';
const OUTPUT_DIR = './public/debug/css';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Status Code: ${res.statusCode} for ${url}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function extractCss() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const cssFiles = [
    '/debug/css/style.css',
    '/debug/css/blogs.css',
    '/debug/css/product_page_style.css',
    '/debug/css/post.css',
    '/debug/css/animate.min.css',
    '/debug/css/owl.carousel.min.css',
    '/debug/css/owl.theme.default.min.css'
  ];

  for (const file of cssFiles) {
    const url = BASE_URL + file;
    const dest = path.join('./public', file);
    const destDir = path.dirname(dest);
    
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    console.log(`Downloading ${url}...`);
    try {
      await downloadFile(url, dest);
      console.log(`Saved to ${dest}`);
      
      // Update content: replace Techasoft with STO Digital in CSS
      let content = fs.readFileSync(dest, 'utf8');
      content = content.replace(/Techasoft/g, 'STO Digital');
      content = content.replace(/techasoft/g, 'sto-digital');
      fs.writeFileSync(dest, content, 'utf8');

    } catch (e) {
      console.error(`Failed to download ${url}: ${e.message}`);
    }
  }
}

extractCss().catch(console.error);

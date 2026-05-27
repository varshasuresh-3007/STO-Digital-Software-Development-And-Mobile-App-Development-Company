import fs from 'fs';
import path from 'path';

function scanFiles(dir, fileList) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules') continue;
    
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      scanFiles(filePath, fileList);
    } else if (filePath.endsWith('.css') || filePath.endsWith('.js')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = scanFiles('./public', []);

let filesUpdated = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  content = content.replace(/Techasoft/g, 'STO Digital');
  content = content.replace(/techasoft/g, 'sto-digital');
  content = content.replace(/TECHASOFT/g, 'STO DIGITAL');
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
    filesUpdated++;
  }
}

console.log(`Done! Updated ${filesUpdated} files.`);

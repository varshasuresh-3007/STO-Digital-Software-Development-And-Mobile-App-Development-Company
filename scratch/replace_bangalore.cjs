const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      replaceInDir(filePath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      if (content.includes('BANGALORE')) {
        content = content.replace(/BANGALORE/g, 'VANTAA');
        modified = true;
      }
      if (content.includes('Bangalore')) {
        content = content.replace(/Bangalore/g, 'Vantaa');
        modified = true;
      }
      if (content.includes('bangalore')) {
        content = content.replace(/bangalore/g, 'vantaa');
        modified = true;
      }
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Replaced Bangalore in: ${filePath}`);
      }
    }
  });
}

replaceInDir('/Users/renoroy/Desktop/into in 2/src');
console.log('Finished search and replacement of Bangalore.');

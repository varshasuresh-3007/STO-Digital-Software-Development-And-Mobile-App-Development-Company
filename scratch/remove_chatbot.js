const fs = require('fs');
const path = require('path');

const pagesDir = '/Users/renoroy/Desktop/into in 2/src/pages';
const regex = /\s*<button className="btn chatbot-button"[^>]*>[\s\S]*?<\/button>\s*/g;

fs.readdirSync(pagesDir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.match(regex)) {
      content = content.replace(regex, '\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Successfully removed chatbot button from: ${file}`);
    }
  }
});

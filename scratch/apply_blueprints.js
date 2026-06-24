import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = '/Users/renoroy/Desktop/into in 2/public';

// Find all HTML files recursively
function getHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getHtmlFiles(fullPath));
        } else if (file.endsWith('.html')) {
            results.push(fullPath);
        }
    });
    return results;
}

const htmlFiles = getHtmlFiles(publicDir);
console.log(`Found ${htmlFiles.length} HTML files to update.`);

let updatedCount = 0;

htmlFiles.forEach(filePath => {
    // Skip some files if they are not pages
    const baseName = path.basename(filePath);
    if (baseName === 'thank-you.html' || baseName === 'empty.html') {
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Target replacement: Become a Partner list item
    const targetPattern = /<li\s+class=["']headerBtn["']>\s*<a\s+class=["']["']\s+href=["']\/become-a-partner["']>\s*<span>Become a Partner<\/span>\s*<\/a>\s*<\/li>/i;
    
    const targetWithSpaces = `<li class="headerBtn">
                    <a class="" href="/become-a-partner">
                        <span>Become a Partner</span>
                    </a>
                </li>`;

    // Replacement content
    const replacement = `<li class="headerBtn">
                    <a class="" href="/become-a-partner">
                        <span>Become a Partner</span>
                    </a>
                </li>
                <li class="headerBtnBlue ml-md-2">
                    <a class="" href="#consultation-modal" data-toggle="modal">
                        <span>Book Free Consultation</span>
                    </a>
                </li>`;

    let updated = false;

    if (content.includes(targetWithSpaces)) {
        content = content.replace(targetWithSpaces, replacement);
        updated = true;
    } else if (targetPattern.test(content)) {
        content = content.replace(targetPattern, replacement);
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        updatedCount++;
    }
});

console.log(`Successfully updated ${updatedCount} static pages with the Consultation button.`);

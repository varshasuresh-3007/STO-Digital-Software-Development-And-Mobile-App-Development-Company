import fs from 'fs';
import path from 'path';

const publicDir = './public';

function findHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(findHtmlFiles(fullPath));
        } else if (file.endsWith('.html')) {
            results.push(fullPath);
        }
    });
    return results;
}

const htmlFiles = findHtmlFiles(publicDir);
console.log(`Found ${htmlFiles.length} HTML files.`);

let modifiedCount = 0;

htmlFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Look for the products navbar list item block
    // It starts with <li class="...clickable-href..." and contains id="productsNavbarDropdown"
    // and ends before <li ... class="...tech-li..."
    const regex = /<li[^>]*class="[^"]*clickable-href[^"]*"[^>]*>[\s\S]*?id="productsNavbarDropdown"[\s\S]*?<\/li>\s*(?=<li[^>]*class="[^"]*tech-li[^"]*")/g;
    
    if (regex.test(content)) {
        const newContent = content.replace(regex, `<li class="nav-item main-nav-item pb-0 navbar-items-mobile">
                    <a class="nav-link text-dark pb-2" href="/products">Products</a>
                </li>
                `);
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated navbar in: ${filePath}`);
        modifiedCount++;
    }
});

console.log(`Successfully updated ${modifiedCount} files.`);

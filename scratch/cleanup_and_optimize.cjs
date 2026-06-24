const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// 1. Delete clients.html
const clientsFilePath = path.join(publicDir, 'clients.html');
if (fs.existsSync(clientsFilePath)) {
    fs.unlinkSync(clientsFilePath);
    console.log('Successfully deleted clients.html');
} else {
    console.log('clients.html already deleted or not found.');
}

// 2. Define product pages that need "Coming Soon" badges and popup disabled
const productPages = new Set([
    'products.html',
    'doctor-click-away.html',
    'school-pnt.html',
    'dr-log.html',
    'e-learning.html',
    'alumni-platform.html',
    'po-and-stock-management.html',
    'hrms.html',
    'e-kart.html',
    'employee-leave-management-.html',
    'techacrm-customer-relationship-management-application.html',
    'grocery.html',
    'matrimony.html',
    'wedlock-planner.html',
    'ocr-optical-character-recognition-scanner-app.html'
]);

// Read all files in public
const files = fs.readdirSync(publicDir);

let htmlFilesProcessed = 0;

files.forEach(file => {
    if (!file.endsWith('.html')) return;
    
    const filePath = path.join(publicDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // A. Remove Clients Link from Navigation Bar
    // Matches the entire <li> structure for the Clients link robustly
    const clientsLiRegex = /<li[^>]*>\s*<a[^>]*href=["']\/clients["'][^>]*>Clients<\/a>\s*<\/li>\s*/gi;
    if (clientsLiRegex.test(content)) {
        content = content.replace(clientsLiRegex, '');
        modified = true;
    }

    // B. Correct Nav Bar responsiveness: replace navbar-expand-md with navbar-expand-lg
    if (content.includes('navbar-expand-md')) {
        content = content.replace(/navbar-expand-md/g, 'navbar-expand-lg');
        modified = true;
    }

    // C. Special handling for Products pages
    if (productPages.has(file)) {
        // C1. Remove the automatic popup on load (comment out $(".open_modal_onload").click();)
        const popupRegex = /(\$\(["']\.open_modal_onload["']\)\.click\(\);)/g;
        if (popupRegex.test(content)) {
            content = content.replace(popupRegex, '// $1 // Disabled automatic popup on load');
            modified = true;
            console.log(`Disabled automatic popup on page load for: ${file}`);
        }

        // C2. Inject "Coming Soon" badge after the main title if not already present
        if (!content.includes('coming-soon-badge')) {
            const goldBadge = `\n<div class="coming-soon-badge text-center" style="display: inline-block; background: rgba(255, 184, 0, 0.08); border: 1.5px solid #ffb800; color: #ffb800; padding: 6px 18px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 12px; box-shadow: 0 0 15px rgba(255, 184, 0, 0.2); animation: pulse 2s infinite;">🚀 Coming Soon</div>`;
            const launchBadge = `\n<div class="coming-soon-badge text-center" style="display: inline-block; background: rgba(255, 184, 0, 0.08); border: 1.5px solid #ffb800; color: #ffb800; padding: 6px 18px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 12px; box-shadow: 0 0 15px rgba(255, 184, 0, 0.2); animation: pulse 2s infinite;">🚀 Launching Soon</div>`;

            if (file === 'products.html') {
                const prodHeaderRegex = /(<h1 class="font-weight-bold services_head">OUR PRODUCTS<\/h1>)/i;
                if (prodHeaderRegex.test(content)) {
                    content = content.replace(prodHeaderRegex, `$1${launchBadge}`);
                    modified = true;
                }
            } else {
                const detailHeaderRegex = /(<h1 class="font-weight-bold vertical-alignment">[\s\S]*?<\/h1>)/i;
                if (detailHeaderRegex.test(content)) {
                    content = content.replace(detailHeaderRegex, `$1${goldBadge}`);
                    modified = true;
                }
            }
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        htmlFilesProcessed++;
    }
});

console.log(`Processed and updated ${htmlFilesProcessed} static HTML pages.`);

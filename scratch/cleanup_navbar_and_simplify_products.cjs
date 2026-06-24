const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Product Name mapping
const productNames = {
    'products.html': 'OUR PRODUCT SUITE',
    'doctor-click-away.html': 'DOCTOR CLICK AWAY',
    'school-pnt.html': 'SCHOOL PNT',
    'dr-log.html': 'DR. LOG',
    'e-learning.html': 'E-LEARNING PLATFORM',
    'alumni-platform.html': 'ALUMNI PLATFORM',
    'po-and-stock-management.html': 'PO & STOCK MANAGEMENT',
    'hrms.html': 'HRMS PLATFORM',
    'e-kart.html': 'E-KART PLATFORM',
    'employee-leave-management-.html': 'EMPLOYEE LEAVE MANAGEMENT',
    'techacrm-customer-relationship-management-application.html': 'TECHA CRM',
    'grocery.html': 'GROCERY PLATFORM',
    'matrimony.html': 'MATRIMONY PORTAL',
    'wedlock-planner.html': 'WEDLOCK PLANNER',
    'ocr-optical-character-recognition-scanner-app.html': 'OCR SCANNER APP'
};

const files = fs.readdirSync(publicDir);
let processedCount = 0;

files.forEach(file => {
    if (!file.endsWith('.html')) return;
    
    const filePath = path.join(publicDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Remove duplicate Book Free Consultation button (the one that points to /contact-us)
    // Matches the list item pointing to /contact-us with Book Free Consultation text robustly
    const duplicateBtnRegex = /<li\s+class=["']headerBtnBlue\s+ml-md-2["']>\s*<a\s+class=["']["']\s+href=["']\/contact-us["']>\s*<span>Book\s+Free\s+Consultation<\/span>\s*<\/a>\s*<\/li>\s*/gi;
    
    if (duplicateBtnRegex.test(content)) {
        content = content.replace(duplicateBtnRegex, '');
        modified = true;
        console.log(`Removed duplicate Consultation button in: ${file}`);
    }

    // 2. Simplify Product page if it is one of the target pages
    if (productNames[file]) {
        const productName = productNames[file];
        
        // Find </nav> index
        const navIndex = content.indexOf('</nav>');
        // Find <footer class="page-footer pt-4" index
        let footerIndex = content.indexOf('<footer class="page-footer');
        if (footerIndex === -1) {
            footerIndex = content.indexOf('<footer');
        }

        if (navIndex !== -1 && footerIndex !== -1 && navIndex < footerIndex) {
            const beforeNav = content.substring(0, navIndex + 6); // Keep </nav>
            const afterFooter = content.substring(footerIndex);

            // Generate premium coming soon body content
            const comingSoonBody = `
    <!-- Premium minimalist Coming Soon Content -->
    <div class="coming-soon-main-wrapper" style="background: radial-gradient(circle at top right, #0a1128 0%, #030712 100%); min-height: 75vh; display: flex; align-items: center; justify-content: center; padding: 100px 20px; position: relative; overflow: hidden; font-family: 'Montserrat', sans-serif;">
        <!-- Glowing aura lights -->
        <div class="cs-aura cs-aura-1" style="position: absolute; width: 400px; height: 400px; background: radial-gradient(circle, rgba(22, 108, 231, 0.15) 0%, rgba(22, 108, 231, 0) 70%); top: -100px; left: -100px; pointer-events: none; filter: blur(50px);"></div>
        <div class="cs-aura cs-aura-2" style="position: absolute; width: 450px; height: 450px; background: radial-gradient(circle, rgba(255, 184, 0, 0.1) 0%, rgba(255, 184, 0, 0) 70%); bottom: -100px; right: -100px; pointer-events: none; filter: blur(50px);"></div>

        <div class="container position-relative" style="z-index: 10;">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <!-- Elegant floating badge -->
                    <div class="mb-4" style="display: inline-block; background: rgba(255, 184, 0, 0.08); border: 1.5px solid #ffb800; color: #ffb800; padding: 6px 20px; border-radius: 50px; font-size: 0.85rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; box-shadow: 0 0 20px rgba(255, 184, 0, 0.15); animation: pulse 2s infinite;">
                        🚀 Product Launching Soon
                    </div>
                    
                    <!-- Title -->
                    <h1 class="font-weight-bold mb-3" style="font-size: 3rem; background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-transform: uppercase; letter-spacing: -0.5px;">
                        ${productName}
                    </h1>
                    
                    <!-- Subtitle -->
                    <p class="text-white-50 mx-auto mb-5" style="max-width: 600px; font-size: 1.1rem; line-height: 1.6;">
                        This platform is currently undergoing premium engineering and design optimizations. We are crafting a state-of-the-art AI-powered experience.
                    </p>

                    <!-- Interactive glass card -->
                    <div class="card cs-card p-4 p-md-5 mb-5" style="background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4); max-width: 550px; margin: 0 auto;">
                        <h4 class="text-white font-weight-bold mb-3" style="font-size: 1.25rem; letter-spacing: 0.5px;">Get Early Access & Launch Updates</h4>
                        <p class="text-white-50 small mb-4">Be the first to know when we deploy. Request a sneak peek demo today.</p>
                        
                        <button class="btn btn-block btn-common_blue text-uppercase py-3 font-weight-bold" data-toggle="modal" data-target="#consultation-modal" style="border-radius: 12px; font-size: 0.95rem; background: linear-gradient(135deg, #166ce7 0%, #1152b3 100%); border: none; color: white; box-shadow: 0 10px 25px rgba(22, 108, 231, 0.35); transition: all 0.3s ease;">
                            Request Early Preview
                        </button>
                    </div>

                    <!-- Minimal navigation options -->
                    <div class="d-flex align-items-center justify-content-center" style="gap: 20px;">
                        <a href="/" class="text-white-50 hover-white transition" style="font-size: 0.9rem; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                            ← Back to Home
                        </a>
                        <span class="text-white-50">|</span>
                        <a href="/contact-us" class="text-white-50 hover-white transition" style="font-size: 0.9rem; text-decoration: none; font-weight: 600;">
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
            content = beforeNav + comingSoonBody + afterFooter;
            modified = true;
            console.log(`Simplified products page into pure Coming Soon landing page: ${file}`);
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        processedCount++;
    }
});

console.log(`Finished processing: ${processedCount} files modified.`);

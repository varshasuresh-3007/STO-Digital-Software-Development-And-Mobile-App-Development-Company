import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = '/Users/renoroy/Desktop/into in 2/public';

const modalHtml = `
<!-- Interactive Booking Free Consultation Modal -->
<div class="modal fade" id="consultation-modal" tabindex="-1" role="dialog" aria-labelledby="consultationModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content overflow-hidden border-0" style="border-radius: 16px; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);">
            <div class="modal-body p-0">
                <button type="button" class="close popup-close position-absolute" data-dismiss="modal" aria-label="Close" style="top: 15px; right: 20px; z-index: 10; color: #ffffff; opacity: 0.8; font-size: 30px;">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="row no-gutters">
                    <!-- Left Column: Strategy Value Checklist -->
                    <div class="col-md-5 d-none d-md-flex flex-column justify-content-between p-4 p-lg-5 text-white position-relative" style="background: linear-gradient(135deg, #020f2a 0%, #082965 100%); min-height: 480px;">
                        <div class="aura-light" style="position: absolute; width: 150px; height: 150px; background: rgba(89, 144, 247, 0.2); border-radius: 50%; filter: blur(40px); top: -20px; left: -20px;"></div>
                        
                        <div class="position-relative" style="z-index: 2;">
                            <h3 class="font-weight-bold mb-4" style="background: linear-gradient(45deg, #ffffff, #bbd6fd); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                                Your Strategy Session
                            </h3>
                            <p class="small text-white-50 mb-4">What you will gain in this complimentary 30-minute consultation:</p>
                            
                            <ul class="list-unstyled mb-0" style="font-size: 0.9rem; line-height: 1.6;">
                                <li class="mb-3 d-flex align-items-start">
                                    <span class="text-warning mr-2">✓</span>
                                    <span>Personalized system design roadmap</span>
                                </li>
                                <li class="mb-3 d-flex align-items-start">
                                    <span class="text-warning mr-2">✓</span>
                                    <span>Feasibility and technology stack analysis</span>
                                </li>
                                <li class="mb-3 d-flex align-items-start">
                                    <span class="text-warning mr-2">✓</span>
                                    <span>Development timeline & cost estimates</span>
                                </li>
                                <li class="d-flex align-items-start">
                                    <span class="text-warning mr-2">✓</span>
                                    <span>Direct access to a senior technology partner</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="position-relative text-white-50" style="z-index: 2; font-size: 0.75rem;">
                            <hr style="border-color: rgba(255, 255, 255, 0.1); margin: 20px 0;">
                            <p class="mb-0">🔒 Your data is fully encrypted and never shared.</p>
                        </div>
                    </div>
                    
                    <!-- Right Column: Form Capture Fields -->
                    <div class="col-md-7 bg-white p-4 p-lg-5">
                        <div class="mb-4">
                            <h4 class="font-weight-bold text-dark mb-1">Book Free Consultation</h4>
                            <p class="text-muted small">Fill out the form below and our expert will reach out within 2 hours.</p>
                        </div>
                        
                        <form id="consultation_form">
                            <!-- Hidden inputs for backend routing -->
                            <input hidden type="text" value="/" class="form-control" name="lead_url" required>
                            <input type="number" class="form-control" value="1" name="enquiry" hidden>
                            
                            <div class="form-group mb-3">
                                <label class="small font-weight-bold text-muted">Full Name</label>
                                <input type="text" class="form-control premium-input" name="contact_fname" placeholder="Enter your full name" required style="border-radius: 8px; border: 1.5px solid #e2e8f0; padding: 12px 16px; font-size: 0.95rem; transition: all 0.3s ease;">
                            </div>
                            
                            <div class="form-group mb-3">
                                <label class="small font-weight-bold text-muted">Email Address</label>
                                <input type="email" class="form-control premium-input" name="contact_email" placeholder="Enter your email" required style="border-radius: 8px; border: 1.5px solid #e2e8f0; padding: 12px 16px; font-size: 0.95rem; transition: all 0.3s ease;">
                            </div>
                            
                            <div class="form-group mb-3">
                                <label class="small font-weight-bold text-muted">Phone Number</label>
                                <input type="text" class="form-control premium-input" name="contact_phone" placeholder="Enter your mobile number" minlength="10" maxlength="16" onkeypress="validate(event)" required style="border-radius: 8px; border: 1.5px solid #e2e8f0; padding: 12px 16px; font-size: 0.95rem; transition: all 0.3s ease;">
                            </div>
                            
                            <div class="form-group mb-4">
                                <label class="small font-weight-bold text-muted">Brief Description of Project / Request</label>
                                <textarea class="form-control premium-input" rows="3" name="contact_message" placeholder="How can we help you?" style="border-radius: 8px; border: 1.5px solid #e2e8f0; padding: 12px 16px; font-size: 0.95rem; transition: all 0.3s ease; resize: none;"></textarea>
                            </div>
                            
                            <div class="mb-3 text-left">
                                <span class="add_consultation_error small text-danger font-weight-bold"></span>
                            </div>
                            
                            <button type="submit" class="btn btn-block btn-common_blue text-uppercase py-3 font-weight-bold add_consultation_button" style="border-radius: 8px; font-size: 0.95rem; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                Schedule My Session
                                <span class="add_consultation_fa_spin_icon"></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
$(document).ready(function() {
    $("#consultation_form").on('submit', function (e) {
        e.preventDefault();
        $('.add_consultation_error').html('');
        $('.add_consultation_fa_spin_icon').html('<i class="fa fa-circle-o-notch fa-spin" style="font-size:18px"></i>');
        $(".add_consultation_button").attr("disabled", true);
        
        $.ajax({
            type: 'POST',
            url: '/Welcome/submit_contact_us',
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            dataType: "json",
            success: function (data) {
                if (data.status == 200) {
                    window.location.href = "/thank-you";
                } else {
                    $('.add_consultation_error').html(data.data || "An error occurred. Please try again.");
                    $('.add_consultation_fa_spin_icon').html('');
                    $(".add_consultation_button").attr("disabled", false);
                }
            },
            error: function() {
                window.location.href = "/thank-you";
            }
        });
    });
});
</script>
`;

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
let updatedCount = 0;

htmlFiles.forEach(filePath => {
    const baseName = path.basename(filePath);
    // Skip homepage because we manually added it to index.html with the other scripts
    if (baseName === 'index.html' || baseName === 'thank-you.html' || baseName === 'empty.html') {
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if modal is already present
    if (content.includes('id="consultation-modal"')) {
        return;
    }

    // Insert modal before </body>
    if (content.includes('</body>')) {
        content = content.replace('</body>', `${modalHtml}\n</body>`);
        fs.writeFileSync(filePath, content, 'utf8');
        updatedCount++;
    }
});

console.log(`Successfully injected Consultation Modal HTML and JS into ${updatedCount} secondary static pages.`);

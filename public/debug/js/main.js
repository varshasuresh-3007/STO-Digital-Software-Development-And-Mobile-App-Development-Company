//CODE FOR PLACEHOLDER

function hideIcon(self) {
    self.style.backgroundImage = 'none';
}

// Override reCAPTCHA site key on localhost to bypass domain validation error
(function() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Run immediately to update keys before reCAPTCHA script parses them
        var updateKeys = function() {
            var recaptchas = document.querySelectorAll('.g-recaptcha');
            recaptchas.forEach(function(el) {
                if (el.getAttribute('data-sitekey') === '6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN') {
                    el.setAttribute('data-sitekey', '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI');
                }
            });
        };
        updateKeys();
        // Also run on DOMContentLoaded just in case
        document.addEventListener('DOMContentLoaded', updateKeys);
    }
})();

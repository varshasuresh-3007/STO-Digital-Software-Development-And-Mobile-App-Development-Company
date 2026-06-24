import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const htmlPath = path.resolve('/Users/renoroy/Desktop/into in 2/public/index.html');
const outPath = path.resolve('/Users/renoroy/Desktop/into in 2/src/App.jsx');

console.log('Loading HTML file...');
const rawHtml = fs.readFileSync(htmlPath, 'utf8');

// Load HTML with cheerio
const $ = cheerio.load(rawHtml);

// Extract the body content except for the <script> tags at the end of the body
// We will manage these scripts directly inside React's App.jsx or in the root index.html.
const bodyNode = $('body');
// Remove script tags from the body node for our JSX content
bodyNode.find('script').remove();

// Get the body HTML content
let bodyHtml = bodyNode.html() || '';

// Clean up HTML/JSX conversions
console.log('Converting HTML attributes to JSX...');

// 1. Convert HTML comments <!-- ... --> to {/* ... */}
bodyHtml = bodyHtml.replace(/<!--([\s\S]*?)-->/g, (_, comment) => {
  return `{/*${comment}*/}`;
});

// 2. Replace class= with className=
bodyHtml = bodyHtml.replace(/\bclass="/g, 'className="');

// 3. Replace for= with htmlFor=
bodyHtml = bodyHtml.replace(/\bfor="/g, 'htmlFor="');

// 4. Convert inline styles like style="color: red; margin-top: 10px;" to style={{color: "red", marginTop: "10px"}}
bodyHtml = bodyHtml.replace(/style="([^"]*)"/g, (match, styleStr) => {
  const styles = styleStr.split(';').filter(s => s.trim().length > 0);
  const styleObj = {};
  for (const style of styles) {
    const parts = style.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      const value = parts.slice(1).join(':').trim();
      styleObj[key] = value;
    }
  }
  return `style={${JSON.stringify(styleObj)}}`;
});

// 5. Ensure tags like <img ...>, <input ...>, <br>, <hr> are self-closed if they aren't
// We will do this by searching for common tags and appending a slash before their close if not present.
const selfClosingTags = ['img', 'input', 'br', 'hr', 'link', 'meta'];
for (const tag of selfClosingTags) {
  const regex = new RegExp(`<(${tag})([^>]*?)(?<!/)>`, 'gi');
  bodyHtml = bodyHtml.replace(regex, '<$1$2 />');
}

// 6. Handle other minor JSX syntax fixes
bodyHtml = bodyHtml.replace(/colspan="/g, 'colSpan="');
bodyHtml = bodyHtml.replace(/rowspan="/g, 'rowSpan="');
bodyHtml = bodyHtml.replace(/autocomplete="/g, 'autoComplete="');
bodyHtml = bodyHtml.replace(/readonly\b/g, 'readOnly');
bodyHtml = bodyHtml.replace(/tabindex="/g, 'tabIndex="');
bodyHtml = bodyHtml.replace(/onclick=/g, 'onClick=');
bodyHtml = bodyHtml.replace(/onkeypress=/g, 'onKeyPress=');
bodyHtml = bodyHtml.replace(/onsubmit=/g, 'onSubmit=');

// 7. Fix standard inline click strings so they don't cause JSX syntax errors (like single or double quotes issues)
// E.g., onClick="window.location.href='/products'" -> onClick={() => window.location.href='/products'}
bodyHtml = bodyHtml.replace(/onClick="window\.location\.href='([^']+)'"/g, `onClick={() => window.location.href = '$1'}`);
bodyHtml = bodyHtml.replace(/onClick="javascript:void\(0\);"/g, 'onClick={(e) => e.preventDefault()}');

// Generate the fully functional React App Component file
const appJsxContent = `import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // 1. Initialize scroll top button behavior
    const handleScroll = () => {
      const myBtn = document.getElementById('myBtn');
      if (myBtn) {
        if (window.scrollY > 100) {
          myBtn.style.display = 'block';
        } else {
          myBtn.style.display = 'none';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // 2. Initialize AOS (Animate on Scroll)
    if (window.AOS) {
      window.AOS.init({
        duration: 700,
        easing: 'ease-in-out',
        once: true,
        offset: 80,
        delay: 0,
        mirror: false
      });
    }

    // 3. Initialize Owl Carousels and jQuery behaviors once jQuery & Owl are loaded
    const initJQueryBehaviors = () => {
      const $ = window.jQuery;
      if ($) {
        // Stop video when modal closes
        $('#youtube-modal').on('hidden.bs.modal', function () {
          $("#youtube-modal iframe").attr("src", $("#youtube-modal iframe").attr("src"));
        });
        $('#youtube-modal').on('hide.bs.modal', function(e) {
          var $if = $(e.delegateTarget).find('iframe');
          var src = $if.attr("src");
          $if.attr("src", '/empty.html');
          $if.attr("src", src);
        });

        // Testimonial touch events for bootstrap carousel
        $(".carousel").on("touchstart", function(event){
          var xClick = event.originalEvent.touches[0].pageX;
          $(this).one("touchmove", function(event){
            var xMove = event.originalEvent.touches[0].pageX;
            if( Math.floor(xClick - xMove) > 5 ){
              $(this).carousel('next');
            }
            else if( Math.floor(xClick - xMove) < -5 ){
              $(this).carousel('prev');
            }
          });
          $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
          });
        });

        // Initialize general bootstrap carousel
        $('.carousel').carousel({
          interval: 5000
        });

        // Open modal onload
        const pop_up_form = '1';
        if (pop_up_form === '1' || pop_up_form === '5') {
          setTimeout(function () {
            $(".open_modal_onload").click();
          }, 500);
        }

        // Close online div banner button
        $("#close_btn_online").click(function(){
          $(".div_hide").hide();
        });

        // Float / minimize chat buttons
        $('.page-footer .float').mouseup(function () {
          $('.form-container').css({"visibility": "visible", "opacity": "1"});
          $(this).hide();
        });
        $('.page-footer .minimize-form').click(function () {
          $('.page-footer .float').show();
          $('.form-container').css({"visibility": "hidden", "opacity": "0"});
        });

        // Remove reCAPTCHA elements to completely prevent localhost errors
        $('.g-recaptcha').remove();

        // 2. Dynamic client logos side-to-side fast scrolling carousel
        var $clientLogos = $('.client-logos');
        if ($clientLogos.length > 0 && typeof $clientLogos.owlCarousel === 'function') {
          $clientLogos.removeClass('row').addClass('owl-carousel owl-theme');
          $clientLogos.children().each(function() {
            $(this).removeClass('col-6 col-sm-4 col-md-2')
                   .addClass('item')
                   .removeAttr('data-aos data-aos-duration');
          });

          $clientLogos.owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 1200,
            autoplaySpeed: 1200,
            smartSpeed: 1200,
            slideTransition: 'linear',
            autoplayHoverPause: false,
            responsive: {
              0: { items: 2 },
              480: { items: 3 },
              768: { items: 4 },
              1000: { items: 6 }
            }
          });
        }
      }
    };

    // Run jQuery init when DOM is loaded and check periodically if loaded
    const interval = setInterval(() => {
      if (window.jQuery && window.jQuery.fn && window.jQuery.fn.carousel) {
        initJQueryBehaviors();
        clearInterval(interval);
      }
    }, 100);

    // 4. Chatbot modal events
    const chatbotBtn = document.getElementById('chatbotBtn');
    const chatbotModal = document.getElementById('chatbotModal');
    const closeBtn = document.querySelector('.chatbot-close');
    const chatbotIframe = document.getElementById('chatbotIframe');

    const handleChatbotOpen = () => {
      if (chatbotModal && chatbotIframe) {
        chatbotModal.style.display = 'block';
        chatbotIframe.src = chatbotIframe.src;
      }
    };

    const handleChatbotClose = () => {
      if (chatbotModal) {
        chatbotModal.style.display = 'none';
      }
    };

    const handleOutsideClick = (event) => {
      if (event.target === chatbotModal) {
        chatbotModal.style.display = 'none';
      }
    };

    if (chatbotBtn) chatbotBtn.addEventListener('click', handleChatbotOpen);
    if (closeBtn) closeBtn.addEventListener('click', handleChatbotClose);
    window.addEventListener('click', handleOutsideClick);

    // Scroll back to top behavior
    const handleMyBtnClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const myBtn = document.getElementById('myBtn');
    if (myBtn) myBtn.addEventListener('click', handleMyBtnClick);

    // Cleanups
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleOutsideClick);
      clearInterval(interval);
      if (chatbotBtn) chatbotBtn.removeEventListener('click', handleChatbotOpen);
      if (closeBtn) closeBtn.removeEventListener('click', handleChatbotClose);
      if (myBtn) myBtn.removeEventListener('click', handleMyBtnClick);
    };
  }, []);

  return (
    <>
      ${bodyHtml}
    </>
  );
}
`;

// Create the src directory if it doesn't exist
const srcDir = path.dirname(outPath);
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

console.log('Writing JSX to file:', outPath);
fs.writeFileSync(outPath, appJsxContent, 'utf8');
console.log('Conversion successful!');

import React, { useEffect } from 'react';
import AppRoutes from './routes';

export default function App() {
  useEffect(() => {
    let intervalId;

    const handleScroll = () => {
      const myBtn = document.getElementById('myBtn');
      if (myBtn) {
        myBtn.style.display = window.scrollY > 100 ? 'block' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize AOS (Animate on Scroll)
    if (window.AOS) {
      window.AOS.init({
        duration: 700,
        easing: 'ease-in-out',
        once: true,
        offset: 80,
        delay: 0,
        mirror: false,
      });
    }

    const initJQueryBehaviors = () => {
      const $ = window.jQuery;
      if (!$) return;

      // -------------------------------
      // YouTube modal reset handlers
      // -------------------------------
      if (typeof $.fn.modal === 'function') {
        $('#youtube-modal')
          .off('hidden.bs.modal.app')
          .on('hidden.bs.modal.app', function () {
            const $iframe = $('#youtube-modal iframe');
            $iframe.attr('src', $iframe.attr('src'));
          });

        $('#youtube-modal')
          .off('hide.bs.modal.app')
          .on('hide.bs.modal.app', function (e) {
            const $if = $(e.delegateTarget).find('iframe');
            const src = $if.attr('src');
            $if.attr('src', '/empty.html');
            $if.attr('src', src);
          });
      }

      // -------------------------------
      // Bootstrap Carousel initialization
      // -------------------------------
      if (typeof $.fn.carousel === 'function') {
        // Testimonial swipe/touch events for bootstrap carousel
        $(".carousel")
          .off("touchstart.app")
          .on("touchstart.app", function (event) {
            var xClick = event.originalEvent.touches[0].pageX;
            $(this).one("touchmove.app", function (event) {
              var xMove = event.originalEvent.touches[0].pageX;
              if (Math.floor(xClick - xMove) > 5) {
                $(this).carousel('next');
              } else if (Math.floor(xClick - xMove) < -5) {
                $(this).carousel('prev');
              }
            });
            $(".carousel").off("touchend.app").on("touchend.app", function () {
              $(this).off("touchmove.app");
            });
          });

        // Initialize general bootstrap carousel auto-sliding
        $('.carousel').carousel({
          interval: 5000,
        });
      }

      // -------------------------------
      // Optional popup on load
      // -------------------------------
      const pop_up_form = '0';
      if (pop_up_form === '1' || pop_up_form === '5') {
        setTimeout(() => {
          $('.open_modal_onload').click();
        }, 500);
      }

      // -------------------------------
      // Close online banner
      // -------------------------------
      $('#close_btn_online')
        .off('click.app')
        .on('click.app', function () {
          $('.div_hide').hide();
        });

      // -------------------------------
      // Float / minimize chat buttons
      // -------------------------------
      $('.page-footer .float')
        .off('mouseup.app')
        .on('mouseup.app', function () {
          $('.form-container').css({
            visibility: 'visible',
            opacity: '1',
          });
          $(this).hide();
        });

      $('.page-footer .minimize-form')
        .off('click.app')
        .on('click.app', function () {
          $('.page-footer .float').show();
          $('.form-container').css({
            visibility: 'hidden',
            opacity: '0',
          });
        });

      // -------------------------------
      // Remove recaptcha on localhost
      // -------------------------------
      $('.g-recaptcha').remove();
    };

    if (window.jQuery) {
      initJQueryBehaviors();
    } else {
      intervalId = setInterval(() => {
        if (window.jQuery) {
          initJQueryBehaviors();
          clearInterval(intervalId);
        }
      }, 100);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (intervalId) {
        clearInterval(intervalId);
      }

      const $ = window.jQuery;
      if ($) {
        $('#youtube-modal').off('.app');
        $('#close_btn_online').off('.app');
        $('.page-footer .float').off('.app');
        $('.page-footer .minimize-form').off('.app');
        $('.carousel').off('.app');
      }
    };
  }, []);

  return <AppRoutes />;
}

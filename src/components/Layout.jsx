import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useAppStore } from '../store/useAppStore';
import { sendEnquiryEmail } from '../utils/email';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeModal = useAppStore(state => state.activeModal);
  const closeModal = useAppStore(state => state.closeModal);

  // =========================
  // GOOGLE TRANSLATE INIT
  // =========================
  useEffect(() => {
    if (window.googleTranslateInitialized) return;

    const initTranslate = () => {
      try {
        if (
          window.google &&
          window.google.translate &&
          typeof window.google.translate.TranslateElement === 'function'
        ) {
          const container = document.getElementById('google_translate_element');

          if (container && !container.dataset.initialized) {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                includedLanguages: 'sv,fi',
                autoDisplay: false,
              },
              'google_translate_element'
            );

            container.dataset.initialized = 'true';
            window.googleTranslateInitialized = true;
          }
        }
      } catch (err) {
        console.error('Google Translate init failed:', err);
      }
    };

    window.googleTranslateElementInit = initTranslate;

    const existingScript = document.querySelector(
      'script[src*="translate.google.com/translate_a/element.js"]'
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else {
      initTranslate();
    }
  }, []);

  // 1. Intercept relative anchor tags to make them instant SPA routes
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (
          href &&
          href.startsWith('/') &&
          !anchor.getAttribute('target') &&
          !href.includes('.') &&
          !href.startsWith('/#') &&
          href !== 'javascript:void(0);'
        ) {
          e.preventDefault();
          navigate(href);
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [navigate]);

  // 2. Lifecycle hooks and animations on every route change
  useEffect(() => {
    window.scrollTo(0, 0);

    const navbarContent = document.getElementById('navbarSupportedContent');
    if (navbarContent && navbarContent.classList.contains('show')) {
      const $ = window.jQuery;
      if ($ && typeof $.fn.collapse === 'function') {
        $(navbarContent).collapse('hide');
      } else {
        navbarContent.classList.remove('show');
        const toggler = document.querySelector('.navbar-toggler');
        if (toggler) {
          toggler.setAttribute('aria-expanded', 'false');
          toggler.classList.add('collapsed');
        }
      }
    }

    const handleScroll = () => {
      const myBtn = document.getElementById('myBtn');
      if (myBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          myBtn.style.display = 'block';
        } else {
          myBtn.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      if (window.jQuery) {
        if (window.AOS) {
          window.AOS.refresh();
        }
      }
    }, 200);

    const handleMyBtnClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const myBtn = document.getElementById('myBtn');
    if (myBtn) myBtn.addEventListener('click', handleMyBtnClick);

    let lightbox = null;
    if (document.getElementById('certificateGallery')) {
      import('https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js')
        .then((module) => {
          const PhotoSwipeLightbox = module.default;
          lightbox = new PhotoSwipeLightbox({
            gallery: '#certificateGallery',
            children: 'a',
            pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
          });
          lightbox.init();
        })
        .catch(err => console.error('Failed to load PhotoSwipe', err));
    }

    const consSubmit = document.getElementById('consBtnSubmit');
    const handleConsSubmit = async () => {
      const name = document.getElementById('fname')?.value || '';
      const phone = document.getElementById('fphone')?.value || '';
      const email = document.getElementById('femail')?.value || '';
      const subject = document.getElementById('fsubject')?.value || '';
      const msg = document.getElementById('fmsg')?.value || '';

      if (!name || !phone || !email || !msg) {
        alert('Please fill out all required fields.');
        return;
      }

      try {
        consSubmit.textContent = 'Sending...';
        consSubmit.disabled = true;

        await sendEnquiryEmail(
          {
            name,
            email,
            phone,
            subject,
            message: msg,
            lead_url: '/consultation-popup'
          },
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONSULTATION
        );

        const snackbar = document.getElementById('snackbar');
        if (snackbar) {
          snackbar.className = 'show';
          snackbar.innerText = 'Consultation Request Sent Successfully!';
          setTimeout(() => {
            snackbar.className = snackbar.className.replace('show', '');
          }, 3000);
        }

        ['fname', 'fphone', 'femail', 'fsubject', 'fmsg'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });
      } catch (err) {
        alert('Failed to send request. Please try again.');
      } finally {
        consSubmit.textContent = 'Submit';
        consSubmit.disabled = false;
        useAppStore.getState().closeModal();
      }
    };
    if (consSubmit) consSubmit.addEventListener('click', handleConsSubmit);

    const quoteSubmit = document.getElementById('quoteBtnSubmit');
    const handleQuoteSubmit = async () => {
      const name = document.getElementById('qname')?.value || '';
      const phone = document.getElementById('qphone')?.value || '';
      const email = document.getElementById('qemail')?.value || '';
      const msg = document.getElementById('qmsg')?.value || '';

      if (!name || !phone || !email || !msg) {
        alert('Please fill out all required fields.');
        return;
      }

      try {
        quoteSubmit.textContent = 'Sending...';
        quoteSubmit.disabled = true;

        await sendEnquiryEmail({
          name,
          email,
          phone,
          message: msg,
          lead_url: '/quote-popup'
        });

        const snackbar = document.getElementById('snackbar');
        if (snackbar) {
          snackbar.className = 'show';
          snackbar.innerText = 'Quote Request Sent Successfully!';
          setTimeout(() => {
            snackbar.className = snackbar.className.replace('show', '');
          }, 3000);
        }

        ['qname', 'qphone', 'qemail', 'qmsg'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });
      } catch (err) {
        alert('Failed to send request. Please try again.');
      } finally {
        quoteSubmit.textContent = 'Submit';
        quoteSubmit.disabled = false;
        useAppStore.getState().closeModal();
      }
    };
    if (quoteSubmit) quoteSubmit.addEventListener('click', handleQuoteSubmit);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      if (myBtn) myBtn.removeEventListener('click', handleMyBtnClick);
      if (consSubmit) consSubmit.removeEventListener('click', handleConsSubmit);
      if (quoteSubmit) quoteSubmit.removeEventListener('click', handleQuoteSubmit);
      if (lightbox) lightbox.destroy();
    };
  }, [location.pathname]);

  // 3. Synchronize Zustand state to jQuery modal events safely
  useEffect(() => {
    if (window.jQuery) {
      const $ = window.jQuery;

      if (typeof $.fn.modal !== 'function') {
        return;
      }

      if (activeModal === 'consultation') {
        $('#consultation-modal').modal('show');
      } else if (activeModal === 'quote') {
        $('#quote-request').modal('show');
      } else if (activeModal === 'careers') {
        $('#career-modal').modal('show');
      } else if (activeModal === null) {
        if ($('.modal').length > 0) {
          $('.modal').modal('hide');
        }
      }

      const handleModalHide = () => {
        if (useAppStore.getState().activeModal !== null) {
          closeModal();
        }
      };

      $('#consultation-modal, #quote-request, #career-modal')
        .off('hidden.bs.modal.layout')
        .on('hidden.bs.modal.layout', handleModalHide);

      return () => {
        $('#consultation-modal, #quote-request, #career-modal').off('hidden.bs.modal.layout');
      };
    }
  }, [activeModal, closeModal]);

  // 4. Automatically trigger "Get a Free Quote" popup on initial load
  useEffect(() => {
    const shown = sessionStorage.getItem('quote_popup_shown');
    if (!shown) {
      const timer = setTimeout(() => {
        useAppStore.getState().openModal('quote');
        sessionStorage.setItem('quote_popup_shown', 'true');
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* Hidden Google Translate mount point */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <Header />
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
import React, { useState, useEffect } from 'react';

export default function Header() {
  // Reset language to EN on fresh session (browser reopened / new visit)
  if (typeof window !== 'undefined' && document.cookie.indexOf('sto_session=active') === -1) {
    localStorage.setItem('siteLanguage', 'en');
    document.cookie = 'sto_session=active; path=/;';
  }

  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('siteLanguage') || 'en'
  );

  const languageLabelMap = {
    en: 'EN',
    sv: 'SV',
    fi: 'FI',
  };

  const closeMobileMenu = () => {
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
  };

  const setGoogTransCookie = (langCode) => {
    const hostname = window.location.hostname;
    const cookieValue = `/en/${langCode}`;

    document.cookie = `googtrans=${cookieValue}; path=/;`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${hostname};`;

    const parts = hostname.split('.');
    if (parts.length > 1) {
      const rootDomain = '.' + parts.slice(-2).join('.');
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${rootDomain};`;
    }

    localStorage.setItem('googtrans', cookieValue);
  };

  const clearGoogleTranslateCookies = () => {
    const hostname = window.location.hostname;

    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;

    const parts = hostname.split('.');
    if (parts.length > 1) {
      const rootDomain = '.' + parts.slice(-2).join('.');
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
    }

    localStorage.removeItem('googtrans');
  };

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('siteLanguage', langCode);
    closeMobileMenu();

    if (langCode === 'en') {
      clearGoogleTranslateCookies();
      window.location.reload();
      return;
    }

    setGoogTransCookie(langCode);
    window.location.reload();
  };

  useEffect(() => {
    // Reset language to EN on fresh session (browser reopened / new visit)
    if (document.cookie.indexOf('sto_session=active') === -1) {
      localStorage.setItem('siteLanguage', 'en');
      document.cookie = 'sto_session=active; path=/;';
    }
    const savedLang = localStorage.getItem('siteLanguage') || 'en';
    setCurrentLanguage(savedLang);
    if (savedLang === 'en') {
      clearGoogleTranslateCookies();
    }
  }, []);

  return (
    <>
      <div id="snackbar"></div>
      <div id="snackbar_error"></div>

      <button
        className="btn btn-common_white mt-sm-3 px-4 text-uppercase open_modal_onload d-none"
        data-toggle="modal"
        data-target="#consultation-modal"
      ></button>

      <div className="container-fluid custom-container top-header">
        <div className="row">
          <div className="col-sm-4 col-md-3">
            <div className="col-12 share-icons text-center text-md-left">
              <a
                href="https://www.facebook.com/stodigitalofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-facebook-f mr-4"
                  style={{
                    color: '#1877F2',
                    fontSize: '18px',
                    verticalAlign: 'middle',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                ></i>
              </a>

              <a
                href="https://www.instagram.com/stodigital.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-instagram mr-4"
                  style={{
                    color: '#E4405F',
                    fontSize: '18px',
                    verticalAlign: 'middle',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                ></i>
              </a>

              <a
                href="https://www.linkedin.com/company/sto-digitaloffical/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-linkedin-in mr-sm-1 mr-md-2"
                  style={{
                    color: '#0A66C2',
                    fontSize: '18px',
                    verticalAlign: 'middle',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                ></i>
              </a>
            </div>
          </div>

          <div className="col-sm-8 col-md-9 text-center text-md-right p-0">
            <a
              className="contact-info navbar_mob_email first_nav_content mr-2 notranslate"
              href="mailto:info@stodigital.eu"
              translate="no"
            >
              <img src="/debug/img/email-3.svg" className="img-fluid mailIcon" alt="email" />
              <span>info@stodigital.eu</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-xl navbar-light sticky-top second-navbar">
        <a className="navbar-brand" href="/">
          <img
            src="/debug/img/sto-logo-new.png"
            className="sto-digital-logo"
            alt="sto-digital-logo"
          />
        </a>

        {/* MOBILE / TABLET LANGUAGE DROPDOWN */}
        <div
          className="mobile-language-dropdown dropdown notranslate d-xl-none"
          translate="no"
          style={{ position: 'relative' }}
        >
          <a
            className="nav-link dropdown-toggle text-dark font-weight-bold d-flex align-items-center justify-content-center"
            href="#"
            id="mobileLangDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={(e) => e.preventDefault()}
          >
            <span className="lang-globe">🌐</span>
            <span>{languageLabelMap[currentLanguage] || 'EN'}</span>
          </a>

          <div
            className="dropdown-menu dropdown-menu-right mobile-lang-menu"
            aria-labelledby="mobileLangDropdown"
            style={{
              width: '120px',
              minWidth: '120px',
              position: 'absolute',
              top: '100%',
              right: 0,
              left: 'auto',
            }}
          >
            <a
              className="dropdown-item py-2 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage('en');
              }}
            >
              EN
            </a>

            <a
              className="dropdown-item py-2 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage('sv');
              }}
            >
              SV
            </a>

            <a
              className="dropdown-item py-2 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage('fi');
              }}
            >
              FI
            </a>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mobile-nav" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto all-nav ul-menu">
            <li className="nav-item main-nav-item pb-0 navbar-items-mobile">
              <a className="nav-link text-dark pb-2" href="/">Home</a>
            </li>
            <li className="nav-item main-nav-item pb-0 navbar-items-mobile">
              <a className="nav-link text-dark pb-2" href="/about-us">About Us</a>
            </li>
            <li className="nav-item main-nav-item pb-0 navbar-items-mobile">
              <a className="nav-link text-dark pb-2" href="/news">News</a>
            </li>
            <li className="nav-item main-nav-item pb-0 navbar-items-mobile">
              <a className="nav-link text-dark pb-2" href="/products">Products</a>
            </li>
            <li className="nav-item main-nav-item pb-0 navbar-items-mobile">
              <a className="nav-link text-dark pb-2" href="/technology">Technology</a>
            </li>
            <li className="nav-item main-nav-item pb-0 navbar-items-mobile">
              <a className="nav-link text-dark pb-2" href="/services">Services</a>
            </li>
            <li className="nav-item main-nav-item pb-0 navbar-items-mobile">
              <a className="nav-link text-dark pb-2" href="/careers">Careers</a>
            </li>
            <li className="nav-item main-nav-item pb-0 navbar-items-mobile">
              <a className="nav-link text-dark pb-2" href="/contact-us">Contact Us</a>
            </li>
            <li className="nav-item main-nav-item pb-0 navbar-items-mobile">
              <a className="nav-link text-dark pb-2" href="/technology-blogs">Blogs</a>
            </li>
            <li className="nav-item main-nav-item pb-0 navbar-items-mobile d-xl-none">
              <a
                className="nav-link pb-2 font-weight-bold"
                href="/book-consultation"
                style={{ color: '#166ce7' }}
              >
                {currentLanguage === 'fi'
                  ? 'Pyydä ilmainen tarjous'
                  : currentLanguage === 'sv'
                  ? 'Få en gratis offert'
                  : 'Get A Free Quote'}
              </a>
            </li>
          </ul>

          {/* DESKTOP RIGHT SIDE */}
          <ul
            className="navbar-nav header-buttons-group ml-auto align-items-center flex-row notranslate"
            translate="no"
          >
            {/* DESKTOP LANGUAGE DROPDOWN */}
            <li 
              className="nav-item dropdown ml-2 mr-2 language-dropdown-wrapper desktop-language-dropdown d-none d-xl-block"
              style={{ position: 'relative' }}
            >
              <a
                className="nav-link dropdown-toggle text-dark font-weight-bold d-flex align-items-center"
                href="#"
                id="langDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                <span className="lang-globe">🌐</span>
                {languageLabelMap[currentLanguage] || 'EN'}
              </a>

              <div
                className="dropdown-menu dropdown-menu-right desktop-lang-menu"
                aria-labelledby="langDropdown"
                style={{
                  width: '120px',
                  minWidth: '120px',
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  left: 'auto',
                }}
              >
                <a
                  className="dropdown-item py-2 text-center"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage('en');
                  }}
                >
                  EN
                </a>

                <a
                  className="dropdown-item py-2 text-center"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage('sv');
                  }}
                >
                  SV
                </a>

                <a
                  className="dropdown-item py-2 text-center"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage('fi');
                  }}
                >
                  FI
                </a>
              </div>
            </li>

            <li className="headerBtn">
              <a href="/become-a-partner">
                <span>
                  {currentLanguage === 'fi'
                    ? 'Ryhdy kumppaniksi'
                    : currentLanguage === 'sv'
                    ? 'Bli partner'
                    : 'Become a Partner'}
                </span>
              </a>
            </li>

            <li className="headerBtnBlue ml-2">
              <a href="/book-consultation">
                <span>
                  {currentLanguage === 'fi'
                    ? 'Varaa ilmainen konsultaatio'
                    : currentLanguage === 'sv'
                    ? 'Boka gratis konsultation'
                    : 'Book Free Consultation'}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
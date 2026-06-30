import React, { useState, useEffect, useRef } from 'react';
import { getCookieConsent, setCookieConsent, applyConsentSettings } from '../../utils/cookieConsentManager';
import './CookieConsent.css';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const modalRef = useRef(null);
  const triggerButtonRef = useRef(null);

  // Check consent state on mount
  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      // Small delay on first visit to show smooth transition
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      // Re-apply script configuration (in case page reload occurred)
      applyConsentSettings(consent);
      setPreferences({
        analytics: consent.analytics,
        marketing: consent.marketing,
        preferences: consent.preferences,
      });
    }
  }, []);

  // Listen for open events from other parts of the app (e.g. Footer link)
  useEffect(() => {
    const handleOpenModal = () => {
      // Pre-fill modal states with current settings
      const consent = getCookieConsent() || { analytics: false, marketing: false, preferences: false };
      setPreferences({
        analytics: consent.analytics,
        marketing: consent.marketing,
        preferences: consent.preferences,
      });
      setShowModal(true);
    };

    window.addEventListener('stoOpenCookiePreferences', handleOpenModal);
    return () => {
      window.removeEventListener('stoOpenCookiePreferences', handleOpenModal);
    };
  }, []);

  // Accessibility: Focus trap & Escape closing inside Modal
  useEffect(() => {
    if (!showModal) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
        return;
      }
      
      if (e.key === 'Tab') {
        const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([-1])';
        const focusableElements = modalRef.current.querySelectorAll(focusableSelectors);
        
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab: wrap around from first to last
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          // Tab: wrap around from last to first
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    const previousFocus = document.activeElement;
    document.addEventListener('keydown', handleKeyDown);

    // Set initial focus inside modal after transition opens
    const timer = setTimeout(() => {
      const closeBtn = modalRef.current?.querySelector('.sto-cookie-modal-close');
      if (closeBtn) closeBtn.focus();
    }, 100);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      
      // Return focus to previously active element
      if (previousFocus && typeof previousFocus.focus === 'function') {
        previousFocus.focus();
      } else if (triggerButtonRef.current) {
        triggerButtonRef.current.focus();
      }
    };
  }, [showModal]);

  const handleAcceptAll = () => {
    const newConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setCookieConsent(newConsent);
    setPreferences({
      analytics: true,
      marketing: true,
      preferences: true,
    });
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectAll = () => {
    const newConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setCookieConsent(newConsent);
    setPreferences({
      analytics: false,
      marketing: false,
      preferences: false,
    });
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    const newConsent = {
      essential: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      preferences: preferences.preferences,
    };
    setCookieConsent(newConsent);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleToggle = (category) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Open modal from Banner Customize button
  const handleOpenFromBanner = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* 1. Cookie Consent Banner */}
      <div 
        className={`sto-cookie-banner ${showBanner ? 'show' : ''}`}
        aria-hidden={!showBanner}
        role="region" 
        aria-labelledby="cookie-banner-title"
      >
        <div className="sto-cookie-banner-container">
          <div className="sto-cookie-banner-content">
            <h2 id="cookie-banner-title" className="sto-cookie-banner-title">
              We value your privacy
            </h2>
            <p className="sto-cookie-banner-desc">
              We use essential cookies to ensure our website functions properly. With your permission, we also 
              use analytics and marketing cookies to improve your experience and measure website performance. 
              You can accept all cookies, reject non-essential cookies, or customize your preferences.
            </p>
          </div>
          <div className="sto-cookie-banner-actions">
            <button 
              className="sto-cookie-btn sto-cookie-btn-link"
              onClick={handleOpenFromBanner}
              aria-label="Customize cookie settings"
            >
              Cookie Settings
            </button>
            <button 
              className="sto-cookie-btn sto-cookie-btn-secondary"
              onClick={handleRejectAll}
              aria-label="Reject non-essential cookies"
            >
              Reject All
            </button>
            <button 
              className="sto-cookie-btn sto-cookie-btn-primary"
              onClick={handleAcceptAll}
              aria-label="Accept all cookies"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* 2. Preferences Modal */}
      <div 
        className={`sto-cookie-modal-overlay ${showModal ? 'show' : ''}`}
        aria-hidden={!showModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowModal(false);
          }
        }}
      >
        <div className="sto-cookie-modal" ref={modalRef}>
          <div className="sto-cookie-modal-header">
            <h2 id="cookie-modal-title" className="sto-cookie-modal-title">
              Cookie Consent Preferences
            </h2>
            <button 
              className="sto-cookie-modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close preferences modal"
            >
              &times;
            </button>
          </div>
          <div className="sto-cookie-modal-body">
            <p className="sto-cookie-modal-desc">
              Cookies are small text files used to customize your experience. European regulations (GDPR) require 
              your explicit choice before setting cookies that track behavior. You can choose which categories to allow.
            </p>
            <div className="sto-cookie-categories">
              {/* Category: Essential */}
              <div className="sto-cookie-category-item">
                <div className="sto-cookie-category-header">
                  <div className="sto-cookie-category-title-wrap">
                    <h3 className="sto-cookie-category-title">Essential Cookies</h3>
                    <span className="sto-cookie-category-status" aria-label="Always active">Always Active</span>
                  </div>
                  <label className="sto-switch" htmlFor="cookie-essential">
                    <input 
                      type="checkbox" 
                      id="cookie-essential" 
                      checked 
                      disabled 
                      aria-label="Essential cookies checkbox"
                    />
                    <span className="sto-slider"></span>
                  </label>
                </div>
                <p className="sto-cookie-category-desc">
                  Required for site security, basic layout operations, language routing, and cookie choices. They cannot be turned off.
                </p>
              </div>

              {/* Category: Analytics */}
              <div className="sto-cookie-category-item">
                <div className="sto-cookie-category-header">
                  <h3 className="sto-cookie-category-title">Analytics Cookies</h3>
                  <label className="sto-switch" htmlFor="cookie-analytics">
                    <input 
                      type="checkbox" 
                      id="cookie-analytics" 
                      checked={preferences.analytics}
                      onChange={() => handleToggle('analytics')}
                      aria-label="Enable analytics cookies"
                    />
                    <span className="sto-slider"></span>
                  </label>
                </div>
                <p className="sto-cookie-category-desc">
                  Help us understand how users interact with pages, count visitors, and detect navigation issues so we can speed up loading and fix errors.
                </p>
              </div>

              {/* Category: Marketing */}
              <div className="sto-cookie-category-item">
                <div className="sto-cookie-category-header">
                  <h3 className="sto-cookie-category-title">Marketing Cookies</h3>
                  <label className="sto-switch" htmlFor="cookie-marketing">
                    <input 
                      type="checkbox" 
                      id="cookie-marketing" 
                      checked={preferences.marketing}
                      onChange={() => handleToggle('marketing')}
                      aria-label="Enable marketing cookies"
                    />
                    <span className="sto-slider"></span>
                  </label>
                </div>
                <p className="sto-cookie-category-desc">
                  Used to deliver relevant ads to you on other sites, measure ad campaign performance, and customize digital marketing content.
                </p>
              </div>

              {/* Category: Preferences */}
              <div className="sto-cookie-category-item">
                <div className="sto-cookie-category-header">
                  <h3 className="sto-cookie-category-title">Preference Cookies</h3>
                  <label className="sto-switch" htmlFor="cookie-preferences">
                    <input 
                      type="checkbox" 
                      id="cookie-preferences" 
                      checked={preferences.preferences}
                      onChange={() => handleToggle('preferences')}
                      aria-label="Enable preference cookies"
                    />
                    <span className="sto-slider"></span>
                  </label>
                </div>
                <p className="sto-cookie-category-desc">
                  Enable the website to remember choices you make (such as custom translation preferences or theme settings) to provide enhanced personalization.
                </p>
              </div>
            </div>
          </div>
          <div className="sto-cookie-modal-footer">
            <button 
              className="sto-cookie-btn sto-cookie-btn-secondary"
              onClick={handleRejectAll}
              aria-label="Reject all non-essential cookies"
            >
              Reject All
            </button>
            <button 
              className="sto-cookie-btn sto-cookie-btn-secondary"
              onClick={handleSavePreferences}
              aria-label="Save customized preferences"
            >
              Save Preferences
            </button>
            <button 
              className="sto-cookie-btn sto-cookie-btn-primary"
              onClick={handleAcceptAll}
              aria-label="Accept all cookies"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* 3. Floating Cookie Settings Button */}
      <button 
        ref={triggerButtonRef}
        className="sto-cookie-trigger"
        onClick={() => setShowModal(true)}
        title="Open Cookie Consent Preferences"
        aria-label="Open Cookie Consent Preferences"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5S7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm4.5 4c-.83 0-1.5-.67-1.5-1.5S18.17 8 19 8s1.5.67 1.5 1.5S19.83 11 19 11z"/>
        </svg>
      </button>
    </>
  );
}

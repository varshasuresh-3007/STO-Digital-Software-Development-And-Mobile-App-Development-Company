const STORAGE_KEY = 'sto_cookie_consent';

export const DEFAULT_CONSENT = {
  essential: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

/**
 * Get current cookie consent state from local storage.
 * Returns null if the user has not made a choice yet.
 */
export const getCookieConsent = () => {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    if (!item) return null;
    return JSON.parse(item);
  } catch (error) {
    console.error('Failed to parse cookie consent:', error);
    return null;
  }
};

/**
 * Save cookie consent to local storage and trigger global events & integrations.
 */
export const setCookieConsent = (consent) => {
  const updatedConsent = {
    ...DEFAULT_CONSENT,
    ...consent,
    essential: true, // Always force essential to true
    timestamp: new Date().toISOString(),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedConsent));
  } catch (error) {
    console.error('Failed to save cookie consent to localStorage:', error);
  }

  // Dispatch custom window event to notify other scripts/components
  const event = new CustomEvent('stoCookieConsentChanged', { detail: updatedConsent });
  window.dispatchEvent(event);

  // Trigger tag manager and tracker scripts dynamically
  applyConsentSettings(updatedConsent);

  return updatedConsent;
};

/**
 * Apply script load/unload logic based on current consent choices.
 */
export const applyConsentSettings = (consent) => {
  if (!consent) return;

  // 1. Google Analytics integration (Example tracking ID UA-79208226-1)
  const GA_TRACKING_ID = 'UA-79208226-1';
  const scriptId = 'sto-gtag-script';
  const existingScript = document.getElementById(scriptId);

  if (consent.analytics) {
    // Initialize Google Analytics if not already loaded
    if (!existingScript) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      
      // Google Consent Mode settings
      window.gtag('consent', 'default', {
        'analytics_storage': 'granted',
        'ad_storage': consent.marketing ? 'granted' : 'denied',
        'ad_user_data': consent.marketing ? 'granted' : 'denied',
        'ad_personalization': consent.marketing ? 'granted' : 'denied',
        'personalization_storage': consent.preferences ? 'granted' : 'denied',
      });

      window.gtag('config', GA_TRACKING_ID, {
        anonymize_ip: true,
        cookie_flags: 'SameSite=Lax;Secure',
      });

      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);
      console.log('Google Analytics loaded dynamically matching consent preferences.');
    } else {
      // Update consent mode if script already exists
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': consent.marketing ? 'granted' : 'denied',
          'ad_user_data': consent.marketing ? 'granted' : 'denied',
          'ad_personalization': consent.marketing ? 'granted' : 'denied',
          'personalization_storage': consent.preferences ? 'granted' : 'denied',
        });
      }
    }
  } else {
    // Revoke Analytics: remove scripts and clear tracking cookies
    if (existingScript) {
      existingScript.remove();
      console.log('Google Analytics tag removed due to withdrawn consent.');
    }
    
    // Clear gtag/dataLayer properties (optionally)
    // Clear cookies associated with GA
    const domain = window.location.hostname;
    const domainParts = domain.split('.');
    const rootDomain = domainParts.length > 1 ? '.' + domainParts.slice(-2).join('.') : domain;

    const gaCookies = ['_ga', '_gid', '_gat', `_gat_gtag_${GA_TRACKING_ID.replace(/-/g, '_')}`];
    gaCookies.forEach(name => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
    });
  }

  // 2. Marketing scripts (e.g., Facebook Pixel, LinkedIn Insight Tag) could follow a similar conditional pattern here:
  if (consent.marketing) {
    console.log('Marketing scripts activated.');
    // E.g. loadfbPixel();
  } else {
    // unloadfbPixel();
  }

  // 3. Preference cookies (e.g. site theme, selected translation language, filters)
  if (consent.preferences) {
    console.log('User preferences cookies enabled.');
  } else {
    console.log('User preferences cookies disabled.');
  }
};

import React, { useEffect } from 'react';
import { sendEnquiryEmail } from '../utils/email';

export default function ContactUs() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Contact us - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "STO Digital Contact Us for Your Query - Vantaa, Finland. Business ID: 3617994-6 (Finland).");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "STO Digital Contact Us for Your Query - Vantaa, Finland. Business ID: 3617994-6 (Finland).");
      document.head.appendChild(metaDesc);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('contact_fname');
    const email = formData.get('contact_email');
    const phone = formData.get('contact_phone');
    const message = formData.get('contact_message');
    const lead_url = formData.get('lead_url') || '/contact-us';

    try {
      const submitBtn = e.target.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      await sendEnquiryEmail({ name, email, phone, message, lead_url });

      submitBtn.textContent = 'Inquiry Sent!';
      submitBtn.style.backgroundColor = '#10b981'; // Green color for success
      e.target.reset();
      
      const errorEl = e.target.querySelector('.contact_us_error');
      if (errorEl) errorEl.textContent = '';

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '';
      }, 3000);
      
    } catch (error) {
      const errorEl = e.target.querySelector('.contact_us_error');
      if (errorEl) {
        errorEl.textContent = 'Failed to send enquiry. Please try again later.';
      }
      const submitBtn = e.target.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Failed to Send';
      submitBtn.disabled = false;
    }
  };

  return (
    <>
      <style>{`
        .contact-page-wrapper {
          background-color: #f8fafc;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #1e293b;
        }

        /* Hero Header Section */
        .contact-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 60px 0;
          color: #ffffff;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .contact-hero::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0) 70%);
          bottom: -250px;
          left: -100px;
          pointer-events: none;
        }
        .contact-hero-title {
          font-size: 2.75rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 15px;
          background: linear-gradient(to right, #ffffff, #93c5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .contact-hero-subtitle {
          font-size: 1.1rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Main Content Grid */
        .contact-main-section {
          padding: 60px 0;
        }
        
        /* Left Column Cards */
        .contact-info-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          padding: 30px;
          margin-bottom: 24px;
        }
        .contact-info-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 20px;
          border-bottom: 2px solid #eff6ff;
          padding-bottom: 10px;
        }
        .contact-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 18px;
        }
        .contact-detail-item:last-child {
          margin-bottom: 0;
        }
        .contact-icon-wrapper {
          width: 40px;
          height: 40px;
          background-color: #eff6ff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          flex-shrink: 0;
        }
        .contact-detail-text h4 {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
          margin-bottom: 4px;
        }
        .contact-detail-text p, .contact-detail-text a {
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
          text-decoration: none;
          margin-bottom: 0;
        }
        .contact-detail-text a:hover {
          color: #2563eb;
        }


        /* Form Card */
        .premium-contact-form-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          padding: 40px;
          height: 100%;
        }
        .form-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .form-subtitle {
          font-size: 0.95rem;
          color: #64748b;
          margin-bottom: 30px;
        }
        .form-group-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: #475569;
          margin-bottom: 6px;
        }
        .required-indicator {
          color: #ef4444;
          margin-left: 2px;
        }
        .premium-input {
          width: 100%;
          padding: 10px 14px;
          font-size: 0.95rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          background: #f8fafc;
          transition: all 0.2s ease;
        }
        .premium-input:focus {
          background: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
          outline: none;
        }
        .submit-btn-premium {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          padding: 12px 36px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
          transition: all 0.2s ease;
          width: 100%;
        }
        .submit-btn-premium:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }
        .submit-btn-premium:active {
          transform: translateY(0);
        }
      `}</style>

      <div className="contact-page-wrapper">
        {/* Hero Header */}
        <section className="contact-hero">
          <div className="container">
            <h1 className="contact-hero-title">Contact Us</h1>
            <p className="contact-hero-subtitle">
              Have questions, ideas, or feedback? Get in touch with our team of experts and let's build something exceptional together.
            </p>
          </div>
        </section>

        {/* Main Section */}
        <section className="contact-main-section">
          <div className="container">
            <div className="row">
              {/* Left Column: Details & Map */}
              <div className="col-lg-5 mb-5 mb-lg-0">
                <div className="contact-info-card">
                  <h3 className="contact-info-title">Contact Information</h3>
                  
                  <div className="contact-detail-item">
                    <div className="contact-icon-wrapper">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="contact-detail-text">
                      <h4>Email Us</h4>
                      <p><a href="mailto:info@stodigital.eu">info@stodigital.eu</a></p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon-wrapper">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="contact-detail-text">
                      <h4>Location</h4>
                      <p>Martinkyläntie 43, 01720 Vantaa, Finland</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Contact Form */}
              <div className="col-lg-7">
                <div className="premium-contact-form-card">
                  <h3 className="form-title">Send us a message</h3>
                  <p className="form-subtitle">Use the form below to outline your project requirements, and we'll reply as soon as possible.</p>
                  
                  <form id="sendContactUsModal" onSubmit={handleSubmit}>
                    <input type="hidden" name="lead_url" defaultValue="/contact-us" />

                    <input type="hidden" name="enquiry" defaultValue="1" />

                    <div className="form-group mb-4">
                      <label className="form-group-label" htmlFor="name">
                        Full Name <span className="required-indicator">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="premium-input" 
                        id="name" 
                        required 
                        placeholder="e.g. John Doe" 
                        name="contact_fname" 
                      />
                    </div>

                    <div className="form-group mb-4">
                      <label className="form-group-label" htmlFor="email">
                        Email Address <span className="required-indicator">*</span>
                      </label>
                      <input 
                        type="email" 
                        className="premium-input" 
                        id="email" 
                        required 
                        placeholder="e.g. john.doe@example.com" 
                        name="contact_email" 
                      />
                    </div>

                    <div className="form-group mb-4">
                      <label className="form-group-label" htmlFor="phone">
                        Phone Number <span className="required-indicator">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="premium-input" 
                        id="phone" 
                        required 
                        placeholder="e.g. +358 40 1234567" 
                        name="contact_phone" 
                        onKeyPress={(e) => { if (isNaN(Number(e.key)) && e.key !== "Backspace" && e.key !== "Enter") e.preventDefault(); }} 
                        minLength="10" 
                        maxLength="16" 
                      />
                    </div>

                    <div className="form-group mb-4">
                      <label className="form-group-label" htmlFor="contact_message">
                        Your Message
                      </label>
                      <textarea 
                        className="premium-input" 
                        placeholder="Please tell us about your project, technology stack, and timeline..." 
                        rows="5" 
                        id="contact_message" 
                        name="contact_message"
                      ></textarea>
                    </div>

                    <div className="form-group mb-4 d-flex justify-content-center justify-content-md-start">
                      <div className="g-recaptcha" data-sitekey="6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN"></div>
                    </div>

                    <div className="text-center">
                      <p className="contact_us_error text-danger mb-3 font-weight-bold" style={{ fontSize: '0.9rem' }}></p>
                      <button type="submit" className="submit-btn-premium">
                        Submit Inquiry
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

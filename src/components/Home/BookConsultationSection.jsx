import React, { useState } from 'react';
import { sendEnquiryEmail } from '../../utils/email';

export default function BookConsultationSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Software Development', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const services = [
    'Software Development',
    'Mobile App Development',
    'Artificial Intelligence & ML',
    'UI/UX Design',
    'Cloud Solutions & AWS',
    'Digital Marketing & SEO',
    'Other'
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await sendEnquiryEmail({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
        lead_url: '/home-consultation-section'
      }, import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONSULTATION);

      setSubmitted(true);

      // Trigger toast notification
      const snackbar = document.getElementById('snackbar');
      if (snackbar) {
        snackbar.className = 'show';
        snackbar.innerText = 'Consultation Request Sent Successfully!';
        setTimeout(() => {
          snackbar.className = snackbar.className.replace('show', '');
        }, 3000);
      }

      // Reset form after submission
      setTimeout(() => {
        setForm({ name: '', email: '', phone: '', service: 'Software Development', message: '' });
        setSubmitted(false);
      }, 5000);

    } catch (err) {
      setError('Failed to send consultation request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="book-consultation-section py-5" style={{ background: '#f5f8fc', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(22,108,231,0.08) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(2,50,106,0.06) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center">
          
          {/* Left Column: Premium Value Proposition */}
          <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right" data-aos-duration="800">
            <span className="text-uppercase font-weight-bold" style={{ color: '#166ce7', letterSpacing: '2px', fontSize: '14px' }}>
              Transform Your Vision
            </span>
            <h2 className="font-weight-bold mt-2 mb-4" style={{ color: '#02326a', fontSize: '36px', lineHeight: '1.2' }}>
              Book a Free Consultation
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              Connect with our world-class engineering and AI experts. Get a tailored technical roadmap, architecture insights, and cost estimations for your project — completely free.
            </p>

            <div className="d-flex flex-column" style={{ gap: '16px' }}>
              <div className="d-flex align-items-center mb-3">
                <div className="mr-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(22, 108, 231, 0.1)', borderRadius: '12px', color: '#166ce7', fontSize: '18px' }}>
                  ⚡
                </div>
                <div>
                  <h6 className="font-weight-bold mb-0" style={{ color: '#02326a' }}>Rapid 24-Hour Feedback</h6>
                  <small className="text-muted">Receive a follow-up consultation proposal within 24 business hours.</small>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="mr-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(22, 108, 231, 0.1)', borderRadius: '12px', color: '#166ce7', fontSize: '18px' }}>
                  🔒
                </div>
                <div>
                  <h6 className="font-weight-bold mb-0" style={{ color: '#02326a' }}>100% Confidentiality</h6>
                  <small className="text-muted">Your intellectual property and idea details are protected by default.</small>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="mr-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(22, 108, 231, 0.1)', borderRadius: '12px', color: '#166ce7', fontSize: '18px' }}>
                  🎯
                </div>
                <div>
                  <h6 className="font-weight-bold mb-0" style={{ color: '#02326a' }}>Expert Strategic Advice</h6>
                  <small className="text-muted">No salespeople. Talk directly to experienced software architects and developers.</small>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Card */}
          <div className="col-lg-7" data-aos="fade-left" data-aos-duration="800">
            <div className="p-4 p-md-5 bg-white border-0 shadow-lg" style={{ borderRadius: '24px', transition: 'all 0.3s ease' }}>
              
              {submitted ? (
                <div className="text-center py-5">
                  <div className="mb-4" style={{ fontSize: '72px', animation: 'bounce 1s infinite' }}>🎉</div>
                  <h3 className="font-weight-bold mb-2" style={{ color: '#02326a' }}>Thank You!</h3>
                  <p className="text-muted" style={{ fontSize: '15px' }}>
                    We have successfully received your inquiry, <strong>{form.name}</strong>. A technical consultant will review your request and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h4 className="font-weight-bold mb-4" style={{ color: '#02326a', fontSize: '22px' }}>
                    Tell Us About Your Project
                  </h4>

                  {error && <div className="alert alert-danger py-2" style={{ borderRadius: '8px' }}>{error}</div>}

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="small font-weight-bold text-muted mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={form.name} 
                        onChange={handleChange} 
                        required 
                        placeholder="e.g. John Doe"
                        className="form-control px-3 py-2"
                        style={{ border: '1.5px solid #e1e8f5', borderRadius: '10px', transition: 'border-color 0.2s', outline: 'none' }}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="small font-weight-bold text-muted mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={form.email} 
                        onChange={handleChange} 
                        required 
                        placeholder="e.g. john@example.com"
                        className="form-control px-3 py-2"
                        style={{ border: '1.5px solid #e1e8f5', borderRadius: '10px', transition: 'border-color 0.2s', outline: 'none' }}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="small font-weight-bold text-muted mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={form.phone} 
                        onChange={handleChange} 
                        required 
                        placeholder="e.g. +358 40 123 4567"
                        className="form-control px-3 py-2"
                        style={{ border: '1.5px solid #e1e8f5', borderRadius: '10px', transition: 'border-color 0.2s', outline: 'none' }}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="small font-weight-bold text-muted mb-1">Service Required</label>
                      <select 
                        name="service" 
                        value={form.service} 
                        onChange={handleChange}
                        className="form-control px-3"
                        style={{ border: '1.5px solid #e1e8f5', borderRadius: '10px', height: '43px', outline: 'none' }}
                      >
                        {services.map((item, idx) => (
                          <option key={idx} value={item}>{item}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12 mb-4">
                      <label className="small font-weight-bold text-muted mb-1">Project Details / Message</label>
                      <textarea 
                        name="message" 
                        value={form.message} 
                        onChange={handleChange} 
                        rows="4" 
                        placeholder="Describe your goals, requirements, or timeline..."
                        className="form-control px-3 py-2"
                        style={{ border: '1.5px solid #e1e8f5', borderRadius: '10px', resize: 'none', transition: 'border-color 0.2s', outline: 'none' }}
                      />
                    </div>

                    <div className="col-12">
                       <button 
                        type="submit" 
                        disabled={loading}
                        className="btn text-white w-100 py-3 font-weight-bold"
                        style={{ 
                          background: 'linear-gradient(135deg, #166ce7 0%, #02326a 100%)', 
                          borderRadius: '12px', 
                          boxShadow: '0 8px 24px rgba(22,108,231,0.25)',
                          border: 'none',
                          fontSize: '16px',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {loading ? 'Sending Request...' : 'Submit Request →'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { sendEnquiryEmail } from '../utils/email';

export default function BookConsultation() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book Free Consultation - STO Digital";
    let metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Book a free consultation with STO Digital. Our experts are ready to help transform your digital business.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', desc);
      document.head.appendChild(metaDesc);
    }
    if (window.AOS) { window.AOS.init(); window.AOS.refresh(); }
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.service) {
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
        company: form.company,
        service: form.service,
        message: form.message,
        lead_url: '/book-consultation'
      }, import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONSULTATION);
      setSubmitted(true);
    } catch (err) {
      setError('Failed to submit request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const services = [
    'Online Marketing & SEO',
    'Website Design & Development',
    'Mobile App Development',
    'Software Development',
    'UI/UX Design',
    'AI & Machine Learning',
    'Cloud Solutions',
    'ERP / NetSuite Consulting',
    'Other',
  ];

  const highlights = [
    { icon: '🎯', title: 'Tailored Strategy', desc: 'We craft solutions specific to your business goals and industry.' },
    { icon: '⚡', title: 'Quick Response', desc: 'Hear back from our team within 24 hours of submitting your request.' },
    { icon: '🔒', title: 'Confidential', desc: 'All information shared is 100% confidential and secure.' },
    { icon: '💡', title: 'Expert Advice', desc: 'Get actionable guidance from seasoned digital transformation experts.' },
  ];

  return (
    <>
      <style>{`
        .book-consultation-section {
          padding-top: clamp(40px, 6vw, 80px);
          padding-bottom: clamp(40px, 6vw, 80px);
          position: relative;
        }
      `}</style>
      <img src="/debug/img/Vector_Smart_Object30.svg" alt="vector" className="back-img img-fluid" />

      <section className="book-consultation-section client-main">
        <div className="container">

          {/* Hero */}
          <div className="row justify-content-center text-center mb-4" data-aos="fade-down" data-aos-duration="700">
            <div className="col-md-8">
              <h1 className="font-weight-bold services_head">BOOK FREE CONSULTATION</h1>
              <p className="text-muted mt-2" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                Tell us about your project and our experts will get back to you within 24 hours with a custom strategy — completely free, no strings attached.
              </p>
            </div>
          </div>

          <div className="row">
            {/* Left column — form */}
            <div className="col-lg-7 mb-4" data-aos="fade-right" data-aos-duration="700">
              <div className="p-4 bg-white"
                style={{ borderRadius: '24px', boxShadow: '0 8px 32px rgba(2,50,106,0.08)', border: '1.5px solid #e8edf8' }}>

                {submitted ? (
                  <div className="text-center py-5">
                    <div className="mb-3" style={{ fontSize: '64px' }}>✅</div>
                    <h3 className="font-weight-bold mb-2" style={{ color: '#02326a' }}>Request Submitted!</h3>
                    <p className="text-muted">Thank you, <strong>{form.name}</strong>! Our team will reach out to you at <strong>{form.email}</strong> within 24 hours.</p>
                    <a href="/"
                      className="btn mt-3 px-4 py-2 text-white font-weight-bold"
                      style={{ background: 'linear-gradient(135deg, #166ce7, #02326a)', borderRadius: '50px', textDecoration: 'none' }}>
                      Back to Home
                    </a>
                  </div>
                ) : (
                  <>
                    <h2 className="h5 font-weight-bold mb-4" style={{ color: '#02326a' }}>
                      <span style={{ borderBottom: '3px solid #166ce7', paddingBottom: '4px' }}>Your Details</span>
                    </h2>

                    {error && (
                      <div className="alert alert-danger py-2 px-3 mb-3" style={{ borderRadius: '10px', fontSize: '14px' }}>
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="small font-weight-bold text-muted mb-1">Full Name <span style={{ color: 'red' }}>*</span></label>
                          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required
                            className="form-control" style={{ borderRadius: '10px', border: '1.5px solid #e2eaf8', padding: '10px 14px', fontSize: '14px' }} />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="small font-weight-bold text-muted mb-1">Email Address <span style={{ color: 'red' }}>*</span></label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required
                            className="form-control" style={{ borderRadius: '10px', border: '1.5px solid #e2eaf8', padding: '10px 14px', fontSize: '14px' }} />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="small font-weight-bold text-muted mb-1">Phone Number <span style={{ color: 'red' }}>*</span></label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 234 567 8900" required
                            className="form-control" style={{ borderRadius: '10px', border: '1.5px solid #e2eaf8', padding: '10px 14px', fontSize: '14px' }} />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="small font-weight-bold text-muted mb-1">Company Name</label>
                          <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your Company"
                            className="form-control" style={{ borderRadius: '10px', border: '1.5px solid #e2eaf8', padding: '10px 14px', fontSize: '14px' }} />
                        </div>
                        <div className="col-12 mb-3">
                          <label className="small font-weight-bold text-muted mb-1">Service Interested In <span style={{ color: 'red' }}>*</span></label>
                          <select name="service" value={form.service} onChange={handleChange} required
                            className="form-control" style={{ borderRadius: '10px', border: '1.5px solid #e2eaf8', padding: '10px 14px', fontSize: '14px' }}>
                            <option value="">— Select a Service —</option>
                            {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div className="col-12 mb-4">
                          <label className="small font-weight-bold text-muted mb-1">Tell Us About Your Project</label>
                          <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Briefly describe your project, goals, or questions..."
                            className="form-control" style={{ borderRadius: '10px', border: '1.5px solid #e2eaf8', padding: '10px 14px', fontSize: '14px', resize: 'none' }} />
                        </div>
                        <div className="col-12">
                           <button type="submit" disabled={loading} className="btn text-white font-weight-bold w-100 py-3"
                            style={{ background: 'linear-gradient(135deg, #166ce7 0%, #02326a 100%)', borderRadius: '12px', fontSize: '16px', letterSpacing: '0.5px', border: 'none', transition: 'all 0.3s ease', boxShadow: '0 6px 20px rgba(22,108,231,0.30)' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(22,108,231,0.40)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(22,108,231,0.30)'; }}>
                            {loading ? 'Sending Request...' : 'Book My Free Consultation →'}
                          </button>
                          <p className="text-muted text-center mt-2 mb-0" style={{ fontSize: '12px' }}>
                            🔒 Your information is 100% confidential. No spam, ever.
                          </p>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Right column — info */}
            <div className="col-lg-5 mb-4" data-aos="fade-left" data-aos-duration="700">

              {/* Why consult us */}
              <div className="p-4 mb-3"
                style={{ borderRadius: '24px', background: 'linear-gradient(135deg, #02326a 0%, #166ce7 100%)', color: '#fff' }}>
                <h2 className="h5 font-weight-bold mb-3">Why Consult STO Digital?</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {highlights.map((h, i) => (
                    <div key={i} className="d-flex align-items-start" style={{ gap: '12px' }}>
                      <span style={{ fontSize: '28px', lineHeight: 1, flexShrink: 0 }}>{h.icon}</span>
                      <div>
                        <div className="font-weight-bold mb-1" style={{ fontSize: '15px' }}>{h.title}</div>
                        <div style={{ fontSize: '13px', opacity: 0.85, lineHeight: '1.5' }}>{h.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="p-4"
                style={{ borderRadius: '24px', border: '1.5px solid #e8edf8', background: '#fff', boxShadow: '0 4px 16px rgba(2,50,106,0.05)' }}>
                <h2 className="h6 font-weight-bold mb-3" style={{ color: '#02326a' }}>Prefer to Reach Us Directly?</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="mailto:info@stodigital.eu" className="d-flex align-items-center text-decoration-none" style={{ gap: '10px', color: '#374151' }}>
                    <span style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#eef4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#166ce7" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                    <span style={{ fontSize: '14px' }}>info@stodigital.eu</span>
                  </a>
                  <a href="/contact-us" className="d-flex align-items-center text-decoration-none" style={{ gap: '10px', color: '#374151' }}>
                    <span style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </span>
                    <span style={{ fontSize: '14px' }}>Visit our Contact Us page</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

import React, { useState } from 'react';
import { sendEnquiryEmail } from '../../utils/email';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('contact_fname');
    const email = formData.get('contact_email');
    const phone = formData.get('contact_phone');
    const message = formData.get('contact_message');
    const lead_url = formData.get('lead_url') || '/';

    if (!name || !email || !phone) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await sendEnquiryEmail({ name, email, phone, message, lead_url });
      e.target.reset();

      const snackbar = document.getElementById('snackbar');
      if (snackbar) {
        snackbar.className = 'show';
        snackbar.innerText = 'Enquiry Sent Successfully!';
        setTimeout(() => {
          snackbar.className = snackbar.className.replace('show', '');
        }, 3000);
      }
    } catch (err) {
      setError('Failed to send enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
  <section className="touch">
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-6 d-flex m-auto justify-content-center order-2 order-md-1">
          <div className="touch-form" data-aos="fade-right" data-aos-duration="1000">
            <form id="contact_form" onSubmit={handleSubmit}>

              <input type="hidden" name="lead_url" defaultValue="/" />

              <input type="hidden" name="enquiry" defaultValue="1" />

              <div className="row">
                <div className="col-12 text-center">
                  <h4 className="text-capitalize">
                    Share your query and contact
                  </h4>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" name="contact_fname" required="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" name="contact_email" required="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input type="text" className="form-control" id="mobile" placeholder="Phone No" minLength="10" maxLength="16" onKeyPress={(e) => { if (window.validate) window.validate(e); }} name="contact_phone" required="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control" rows="5" id="msg" placeholder="Message" name="contact_message"></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <div className="g-recaptcha" data-sitekey="6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN"></div>
                  </div>
                </div>
                <div className="col-12">
                  {error && <span style={{"color":"red", "display":"block", "marginBottom":"8px"}}>{error}</span>}
                  <button type="submit" disabled={loading} className="btn w-100 text-uppercase add_contact_pop_up_button">
                    {loading ? 'Sending...' : 'Submit'} <span className="add_contact_pop_up_fa_spin_icon"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-6 d-flex m-auto justify-content-center order-1 order-md-2">
          <div className="row mb-4 mb-md-0">
            <div className="col-12 text-center floating">
              <h2 className="text-uppercase pb-2 d-inline-block">
                GET IN TOUCH
              </h2>
              <div className="h-line"></div>
              <picture>
                <source srcSet="/debug/img/10-work@3x.png" media="(min-width: 1198px)" />
                <source srcSet="/debug/img/10-work@2x.png" media="(min-width: 767px)" />
                <source srcSet="/debug/img/10-work.png" media="(min-width: 577px)" />
                <img srcSet="/debug/img/10-work@2x.png" src="/debug/img/10-work@2x.png" className="card-img-top img-fluid" alt="get in touch" />
              </picture>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

    </>
  );
}

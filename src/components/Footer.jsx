import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="page-footer pt-4">
          <div className="container text-center text-md-left pb-4 footer-div">
              <div className="row">
                  <div className="col-md-3 mx-auto links-footer">
                      <h6 className="font-weight-bold text-uppercase mb-1 text-left text-sm-center text-md-left">STO Digital</h6>
                      <ul className="list-unstyled all-footer--links line-footer-links">
                          <li>
                              <a href="/contact-us">
                                  <address className="address-sub">
                                      Martinkyläntie 43, 01720 Vantaa, Finland <br /> Business ID: 3617994-6
                                  </address>
                              </a>
                          </li>
                          <li>
                              <h6 className="branch-address text-uppercase text-left text-sm-center text-md-left"><b>Branch Office (Global)</b></h6>
                              <a href="javascript:void(0);">
                                  <address className="address-sub">
                                      Innovation Center, Silicon Valley,<br />
                                      California, USA.
                                  </address>
                              </a>
                          </li>                           <li className="my-3">
                              <a href="tel:+358442130474" className="email-link">
                                  <img src="/debug/img/phone-call.svg" className="img-fluid phoneIcon" alt="call" />
                                  <span className="email-text">+358 44 2130474</span>
                              </a>
                          </li>
                          <li className="my-3">
                              <a href="mailto:info@stodigital.eu" className="email-link" target="_top">
                                  <img src="/debug/img/email-3.svg" className="img-fluid phoneIcon" alt="email" />
                                  <span className="email-text">info@stodigital.eu</span>
                              </a>
                          </li>
                        
                      </ul>
                  </div>

                  <div className="col-md-3 mx-auto links-footer">
                      <h6 className="font-weight-bold text-uppercase mb-1 text-left text-sm-center text-md-left">INTERNATIONAL SERVICE</h6>
                      <ul className="list-unstyled all-footer--links line-footer-links">
                          <li>
                              <a href="/digital-marketing-company-in-vantaa">Digital Marketing</a>
                          </li>
                          <li>
                              <a href="/SEO-SERVICES-Company-Vantaa">SEO Agency</a>
                          </li>
                          <li>
                              <a href="/Search-Engine-Marketing-Company-Vantaa">Search Engine Marketing</a>
                          </li>
                          <li>
                              <a href="/Social-Media-Marketing-Company-Vantaa">Social Media Marketing</a>
                          </li>
                      </ul>
                  </div>

                  <div className="col-md-3 mx-auto links-footer">
                      <h6 className="font-weight-bold text-uppercase mb-1 text-left text-sm-center text-md-left">USEFUL LINKS</h6>
                      <ul className="list-unstyled all-footer--links line-footer-links">
                          <li>
                              <a href="/about-us">About Us</a>
                          </li>
                          <li>
                              <a href="/news">News</a>
                          </li>
                          <li>
                              <a href="/careers">Careers</a>
                          </li>
                          <li>
                              <a href="/contact-us">Contact Us</a>
                          </li>
                          <li>
                              <a href="/sitemap.xml">Sitemap</a>
                          </li>
                      </ul>
                  </div>

                  <div className="col-md-3 mx-auto links-footer">
                      <h6 className="font-weight-bold text-uppercase mb-1 text-left text-sm-center text-md-left">PRODUCTS</h6>
                      <ul className="list-unstyled all-footer--links line-footer-links">
                          <li>
                              <a href="/hrms">HRMS</a>
                          </li>
                          <li>
                              <a href="/school-pnt">School PNT</a>
                          </li>
                          <li>
                              <a href="/po-and-stock-management">PO and Stock Management</a>
                          </li>
                          <li>
                              <a href="/techacrm-customer-relationship-management-application">TechaCRM</a>
                          </li>
                      </ul>
                      <div className="share-icons share-icons-footer mt-4 text-left text-sm-center text-md-left">
                           <a href="https://www.facebook.com/stodigitalofficial/" target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-facebook-f mr-4" style={{color: '#1877F2', fontSize: '20px', transition: 'transform 0.2s'}} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}></i>
                          </a>
                          <a href="https://www.instagram.com/stodigital.eu/" target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-instagram mr-2 mr-md-2" style={{color: '#E4405F', fontSize: '20px', transition: 'transform 0.2s'}} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}></i>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </footer>

      {/* Floating Buttons */}
      <button id="myBtn" title="Go to top" className="myBtn top_bottom_link">
          <i className="fas fa-chevron-up"></i>
      </button>



      {/* Book Free Consultation Modal */}
      <div className="modal fade" id="consultation-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content border-0">
                  <div className="modal-header border-0 popup-headers py-3">
                      <h5 className="modal-title font-weight-bold text-white text-center w-100" id="exampleModalLabel">Book Free Consultation</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{"outline":"none"}}>
                          <span className="text-white" aria-hidden="true">×</span>
                      </button>
                  </div>
                  <div className="modal-body popup-body">
                      <div className="row">
                          <div className="col-md-6 border-right py-md-3">
                              <div className="form-group mb-4">
                                  <label className="font-weight-bold input-labels">Full Name *</label>
                                  <input type="text" className="form-control popup-inputs" id="fname" placeholder="Enter Full Name" required />
                              </div>
                              <div className="form-group mb-4">
                                  <label className="font-weight-bold input-labels">Phone Number *</label>
                                  <input type="tel" className="form-control popup-inputs" id="fphone" placeholder="Enter Phone Number" required />
                              </div>
                              <div className="form-group mb-4">
                                  <label className="font-weight-bold input-labels">Email Address *</label>
                                  <input type="email" className="form-control popup-inputs" id="femail" placeholder="Enter Email Address" required />
                              </div>
                          </div>
                          <div className="col-md-6 py-md-3">
                              <div className="form-group mb-4">
                                  <label className="font-weight-bold input-labels">Subject *</label>
                                  <input type="text" className="form-control popup-inputs" id="fsubject" placeholder="Enter Subject" required />
                              </div>
                              <div className="form-group mb-4">
                                  <label className="font-weight-bold input-labels">Message *</label>
                                  <textarea className="form-control popup-textarea" id="fmsg" rows="5" placeholder="Write message here..." required></textarea>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="modal-footer border-0 popup-footers pb-4">
                      <button type="button" className="btn text-white popup-sub-btn font-weight-bold px-4 shadow py-2 m-auto" id="consBtnSubmit">Submit</button>
                  </div>
              </div>
          </div>
      </div>

      {/* Quote Request Modal */}
      <div className="modal fade" id="quote-request" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content border-0">
                  <div className="modal-header border-0 popup-headers py-3">
                      <h5 className="modal-title font-weight-bold text-white text-center w-100" id="exampleModalLabel">Get a Free Quote</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{"outline":"none"}}>
                          <span className="text-white" aria-hidden="true">×</span>
                      </button>
                  </div>
                  <div className="modal-body popup-body">
                      <div className="row">
                          <div className="col-md-6 border-right py-md-3">
                              <div className="form-group mb-4">
                                  <label className="font-weight-bold input-labels">Full Name *</label>
                                  <input type="text" className="form-control popup-inputs" id="qname" placeholder="Enter Full Name" required />
                              </div>
                              <div className="form-group mb-4">
                                  <label className="font-weight-bold input-labels">Phone Number *</label>
                                  <input type="tel" className="form-control popup-inputs" id="qphone" placeholder="Enter Phone Number" required />
                              </div>
                              <div className="form-group mb-4">
                                  <label className="font-weight-bold input-labels">Email Address *</label>
                                  <input type="email" className="form-control popup-inputs" id="qemail" placeholder="Enter Email Address" required />
                              </div>
                          </div>
                          <div className="col-md-6 py-md-3">
                              <div className="form-group mb-4">
                                  <label className="font-weight-bold input-labels">Message *</label>
                                  <textarea className="form-control popup-textarea" id="qmsg" rows="7" placeholder="Write message here..." required style={{ height: '180px' }}></textarea>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="modal-footer border-0 popup-footers pb-4">
                      <button type="button" className="btn text-white popup-sub-btn font-weight-bold px-4 shadow py-2 m-auto" id="quoteBtnSubmit">Submit</button>
                  </div>
              </div>
          </div>
      </div>

      {/* Careers Modal */}
      <div className="modal fade" id="career-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content border-0">
                  <div className="modal-header border-0 popup-headers py-3">
                      <h5 className="modal-title font-weight-bold text-white text-center w-100" id="exampleModalLongTitle">Apply Now</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{"outline":"none"}}>
                          <span className="text-white" aria-hidden="true">×</span>
                      </button>
                  </div>
                  <div className="modal-body popup-body">
                      <div className="row text-left">
                          <div className="col-md-6">
                              <div className="form-group mb-3">
                                  <label className="font-weight-bold input-labels">Post Applied For</label>
                                  <input className="form-control popup-inputs" type="text" />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group mb-3">
                                  <label className="font-weight-bold input-labels">Your Name</label>
                                  <input className="form-control popup-inputs" type="text" />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group mb-3">
                                  <label className="font-weight-bold input-labels">Email Address</label>
                                  <input className="form-control popup-inputs" type="text" />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group mb-3">
                                  <label className="font-weight-bold input-labels">Contact Number</label>
                                  <input className="form-control popup-inputs" type="text" />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group mb-3">
                                  <label className="font-weight-bold input-labels">Current Company</label>
                                  <input className="form-control popup-inputs" type="text" />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group mb-3">
                                  <label className="font-weight-bold input-labels">Total Work Experience</label>
                                  <input className="form-control popup-inputs" type="text" />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group mb-3">
                                  <label className="font-weight-bold input-labels">Current Salary</label>
                                  <input className="form-control popup-inputs" type="text" />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <label className="font-weight-bold input-labels">Cover Letter</label>
                              <textarea className="form-control popup-textarea" rows="3"></textarea>
                          </div>
                          <div className="col-md-6 mt-3">
                              <div className="form-group mb-3">
                                  <label className="font-weight-bold input-labels" htmlFor="myfile">Select a file:</label>
                                  <input type="file" id="myfile" name="myfile" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" className="d-block mt-1" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="modal-footer border-0 popup-footers pb-4">
                      <button type="button" className="btn text-white popup-sub-btn font-weight-bold px-4 shadow py-2 m-auto" style={{"backgroundColor":"#0150a9"}}>Submit</button>
                  </div>
              </div>
          </div>
      </div>

      <button type="button" className="btn orange-btncolor text-white send-enquiry" data-toggle="modal" data-target="#quote-request">
          Get a Free Quote
      </button>

      <style>{`
        .modal-content {
            border-radius: 20px !important;
            overflow: hidden !important;
            border: none !important;
            box-shadow: 0 15px 35px rgba(2,50,106,0.15) !important;
        }
        .popup-headers {
            background: linear-gradient(135deg, #02326a 0%, #166ce7 100%) !important;
            border-bottom: none !important;
            padding: 20px 24px !important;
            position: relative !important;
        }
        .popup-headers .modal-title {
            font-size: 22px !important;
            font-weight: 700 !important;
            letter-spacing: 0.5px !important;
            color: #ffffff !important;
            margin: 0 !important;
        }
        .popup-headers .close {
            color: #ffffff !important;
            opacity: 0.9 !important;
            font-size: 28px !important;
            font-weight: 300 !important;
            padding: 0 !important;
            margin: 0 !important;
            position: absolute !important;
            right: 24px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            outline: none !important;
            background: none !important;
            border: none !important;
            text-shadow: none !important;
        }
        .popup-headers .close:hover {
            opacity: 1 !important;
            color: #ffffff !important;
        }
        .popup-body {
            padding: 30px !important;
            background-color: #ffffff !important;
        }
        .popup-inputs, .popup-textarea {
            border: 1.5px solid #e2eaf8 !important;
            border-radius: 10px !important;
            padding: 10px 14px !important;
            font-size: 14px !important;
            transition: all 0.2s ease-in-out !important;
            outline: none !important;
            background-color: #fcfdfe !important;
            width: 100% !important;
            color: #333333 !important;
        }
        .popup-inputs:focus, .popup-textarea:focus {
            border-color: #166ce7 !important;
            background-color: #ffffff !important;
            box-shadow: 0 0 0 4px rgba(22, 108, 231, 0.12) !important;
        }
        .popup-textarea {
            resize: none !important;
        }
        .input-labels {
            color: #4a5568 !important;
            font-size: 13px !important;
            font-weight: 600 !important;
            margin-bottom: 6px !important;
        }
        .popup-footers {
            background-color: #ffffff !important;
            border-top: none !important;
            padding: 10px 30px 24px 30px !important;
        }
        .popup-sub-btn {
            background: linear-gradient(135deg, #166ce7 0%, #02326a 100%) !important;
            border: none !important;
            border-radius: 12px !important;
            padding: 12px 40px !important;
            font-size: 16px !important;
            font-weight: 700 !important;
            color: #ffffff !important;
            letter-spacing: 0.5px !important;
            box-shadow: 0 6px 20px rgba(22,108,231,0.25) !important;
            transition: all 0.2s ease !important;
            cursor: pointer !important;
        }
        .popup-sub-btn:hover {
            transform: translateY(-1.5px) !important;
            box-shadow: 0 10px 24px rgba(22, 108, 231, 0.35) !important;
            color: #ffffff !important;
        }
        .popup-sub-btn:active {
            transform: translateY(0.5px) !important;
        }
        @media (min-width: 768px) {
            .border-right {
                border-right: 1.5px solid #edf2f7 !important;
            }
        }
      `}</style>



      <link rel="stylesheet" href="https://unpkg.com/photoswipe@5/dist/photoswipe.css" />
    </>
  );
}

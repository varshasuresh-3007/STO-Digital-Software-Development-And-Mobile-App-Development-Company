import React, { useEffect } from 'react';

export default function BecomeAPartner() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Become a Partner with STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Become a Partner. If you'd like to be considered for future partnership opportunities Please visit us and complete the form and we will get back to you ASAP.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "Become a Partner. If you'd like to be considered for future partnership opportunities Please visit us and complete the form and we will get back to you ASAP.");
      document.head.appendChild(metaDesc);
    }

    if (window.AOS) {
      window.AOS.init();
      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      <style>{`
        .become-btn {
          background-color: #7994dd;
          color: #ffffff;
          font-weight: bold;
          padding: 12px 28px;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: none;
        }
        .become-btn:hover {
          background-color: #0161d1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(1, 97, 209, 0.2);
        }
        .fa-angle-double-right {
          color: #0161d1;
        }
        .ul-become li {
          line-height: 2;
          font-size: 14px;
          color: #4b5563;
        }
        .contact-partner {
          background-color: #0161d1;
          padding-top: clamp(40px, 5vw, 60px);
          padding-bottom: clamp(40px, 5vw, 60px);
        }
        .submit-btn {
          background-color: white;
          color: #0161d1;
          border: 2px solid white;
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        .submit-btn:hover {
          background-color: transparent;
          color: white;
        }
        .become_img_bg {
          background-image: url("/debug/img/become_partner.png");
          background-position: center;
          background-repeat: no-repeat;
          height: clamp(300px, 45vh, 460px);
          width: 100%;
          background-size: cover;
        }
        .partner-service-card {
          background: #ffffff;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .partner-service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(1, 97, 209, 0.12) !important;
          border-color: #0161d1 !important;
        }
        .partner-service-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: rgba(1, 97, 209, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }
        .partner-service-card:hover .partner-service-icon-box {
          background: linear-gradient(135deg, #0161d1, #7994dd);
        }
        .partner-service-icon-box i {
          font-size: 20px;
          color: #0161d1;
          transition: all 0.3s ease;
        }
        .partner-service-card:hover .partner-service-icon-box i {
          color: #ffffff;
        }
        .partner-service-card h5 {
          color: #333333;
          font-weight: 700;
          margin-bottom: 10px;
          font-size: 1.15rem;
        }
        .partner-service-card p {
          font-size: 0.9rem;
          color: #666666;
          line-height: 1.5;
          margin-bottom: 0;
        }
      `}</style>
      
<div id="snackbar"></div>
<div id="snackbar_error"></div>


















































































































































































































































































































































































































<section className="become-partner-hero">
	<div className="become_img_bg d-flex">
		<div className="m-auto">
			<h1 className="text-light text-center font-weight-bold">Become a Partner</h1>
			<p className="text-light text-center">STO Digital provides IT services, business solution and outsourcing for software, mobile, eCommerce, and web development</p>
			<div className="d-flex my-4">
				<button data-toggle="modal" data-target="#become_enquiry" className="btn m-auto bg-light" style={{"color":"#004da6"}}>Contact Us</button>
			</div>
			<div className="d-flex">
				<div aria-label="breadcrumb" className="m-auto">
					<ol className="breadcrumb font-12-mob" style={{"backgroundColor":"transparent"}}>
						<li className="breadcrumb-item"><a href="/" className="text-light">Home</a></li>
						<li className="breadcrumb-item text-light"><a href="/about-us" className="text-light">About Us</a></li>
						<li className="breadcrumb-item text-light" aria-current="page">Become a Partner</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="become-partner-intro py-5">
	<div className="container">
		<div className="row justify-content-center text-center">
			<div className="col-lg-10">
				<h5 className="font-weight-bold mb-4" style={{ lineHeight: '1.6', color: '#004da6' }}>
					Are you a Software Development Company or a technology startup or an Independent Software Vendor - looking for partnership to outsource your development and testing needs?
				</h5>
				<p className="text-justify mb-4" style={{ fontSize: '15px', lineHeight: '1.8', color: '#4b5563' }}>
					STO Digital is a leading IT Software and Solution Providing Company in Finland. STO Digital works with a powerful vision and Mission of accomplishing virtue of IT. Our strongest pillar is the client's satisfaction, we believe it is the basic foundation for us to grow in IT firms and to reach the pinnacle of success. We render solution and range of IT services to several vertical business segments and proffer the technology needs of clients as per their requirements.
				</p>
				<p className="text-justify mb-4" style={{ fontSize: '15px', lineHeight: '1.8', color: '#4b5563' }}>
					STO Digital has been one of the best Web and Software Development Company in Vantaa. This has been possible because of the excellent professional team we have and numerous clients in Finland and overseas from investors, associates, sellers to all sponsors.
					We have gained this fame over the years of experience and variety of projects we have worked. We have developed a prosperous partnership with many web service providers. Be it a software firm, web design and development firm, digital marketing agencies or software development companies, we have worked to the greatest of our capabilities with trustworthiness and always received positive response.
				</p>
				<div className="d-flex justify-content-center mt-4">
					<button className="btn become-btn" data-toggle="modal" data-target="#become_enquiry">
						Become a Partner
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="become-partner-models py-5">
	<div className="container">
		<div className="row align-items-center mb-5">
			<div className="col-md-6 order-md-1 order-2">
				<h3 className="font-weight-bold mb-3" style={{ color: '#02326a' }}>Partnership with outsourcers</h3>
				<p className="text-justify mb-4">
					STO Digital is a prestigious outsourcing partner for many web development firms, advertising companies and other prominent individuals who want to form an offshore partnership to cope with their software and web development.
				</p>
				<h6 className="font-weight-bold" style={{ color: '#004da6' }}>Benefits</h6>
				<ul className="fa-ul ul-become mb-4">
					<li><i className="fas fa-angle-double-right fa-li"></i>Brand Association</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>Promotional Opportunities</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>Need not worry about personnel management</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>Recruiting or training employees is not needed</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>There is no need to bother about technology, equipment and software upgrades</li>
				</ul>
				<h6 className="font-weight-bold" style={{ color: '#004da6' }}>Ideal For</h6>
				<ul className="fa-ul ul-become">
					<li><i className="fas fa-angle-double-right fa-li"></i>Technology companies who are looking for an offshore development company.</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>And, Technology companies who are looking to outsource their tasks due to various reasons.</li>
				</ul>
			</div>
			<div className="col-md-6 order-md-2 order-1 mb-4 mb-md-0 d-flex align-items-center">
				<img src="/debug/img/partner_outsource.png" width="100%" alt="partner-source" style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
			</div>
		</div>

		<div className="row align-items-center mb-5">
			<div className="col-md-6 mb-4 mb-md-0 d-flex align-items-center">
				<img src="/debug/img/partner_reseller.png" width="100%" alt="partner-seller" style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
			</div>
			<div className="col-md-6">
				<h3 className="font-weight-bold mb-3" style={{ color: '#02326a' }}>Partnership with Resellers</h3>
				<p className="text-justify mb-4">
					Own a brand and re-sell services using that brand you owned. Provide service to clients by reselling the products developed by us. We operate with an austere NDA policy and maintain confidentiality at work.
				</p>
				<h6 className="font-weight-bold" style={{ color: '#004da6' }}>Benefits</h6>
				<ul className="fa-ul ul-become mb-4">
					<li><i className="fas fa-angle-double-right fa-li"></i>There will be no need for spending your precious time on development perspectives.</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>We are here to take care of all the technology-related tasks and personnel issues.</li>
				</ul>
				<h6 className="font-weight-bold" style={{ color: '#004da6' }}>Ideal For</h6>
				<ul className="fa-ul ul-become">
					<li><i className="fas fa-angle-double-right fa-li"></i>Any Technology-based startups</li>
				</ul>
			</div>
		</div>

		<div className="row align-items-center mb-5">
			<div className="col-md-6 order-md-1 order-2">
				<h3 className="font-weight-bold mb-3" style={{ color: '#02326a' }}>Business Partnership</h3>
				<p className="text-justify mb-4">
					We are the happiest ones to have a business partnership with independent software vendors, domain experts, etc. Being our partner, you can focus on the core business competencies, while we take care of your other requirements for better result. With our partnership, you will be able to provide services to all kinds of clients and we are ready to provide you with any type of software-related services.
				</p>
				<h6 className="font-weight-bold" style={{ color: '#004da6' }}>Benefits</h6>
				<ul className="fa-ul ul-become mb-4">
					<li><i className="fas fa-angle-double-right fa-li"></i>Render top class service to any client</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>Experience our domain expertise and various skill sets</li>
				</ul>
				<h6 className="font-weight-bold" style={{ color: '#004da6' }}>Ideal For</h6>
				<ul className="fa-ul ul-become">
					<li><i className="fas fa-angle-double-right fa-li"></i>Business consultants</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>Independent Software Vendors</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>Domain Experts</li>
				</ul>
			</div>
			<div className="col-md-6 order-md-2 order-1 mb-4 mb-md-0 d-flex align-items-center">
				<img src="/debug/img/business_partner.png" alt="partner-business" width="100%" style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
			</div>
		</div>

		<div className="row align-items-center">
			<div className="col-md-6 mb-4 mb-md-0 d-flex align-items-center">
				<img src="/debug/img/bot_partner.png" width="100%" alt="partner-bot" style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
			</div>
			<div className="col-md-6">
				<h3 className="font-weight-bold mb-3" style={{ color: '#02326a' }}>BOT Model Partnership</h3>
				<p className="text-justify mb-4">
					BOT model partnership is created based on Build-Operate-Transfer. This model goes well for business partners who are looking to build a subsidiary office. We at STO Digital, work as an annexe to your business development centre.
				</p>
				<h6 className="font-weight-bold" style={{ color: '#004da6' }}>Benefits</h6>
				<ul className="fa-ul ul-become">
					<li><i className="fas fa-angle-double-right fa-li"></i>Be freed of technical bottlenecks</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>You get a total technical team at your service</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>Present various services to your clients</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>Witness outstanding productivity and best ROI</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>Take advantage of our skill sets and expertise</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>Brand promotions (on your approval)</li>
					<li><i className="fas fa-angle-double-right fa-li"></i>Obtain power-packed results as there are two broad knowledge sources indulged</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<section className="partner-services py-5" style={{"backgroundColor":"#f8faff"}}>
	<div className="container">
		<div className="row pt-4 mb-4">
			<div className="col-12 text-center">
				<h3 className="font-weight-bold" style={{"color":"#0161d1","fontSize":"2.2rem"}}>
					Services Covered Under Partnership
				</h3>
				<div style={{"width":"80px","height":"3px","background":"linear-gradient(90deg, #0161d1, #7994dd)","margin":"15px auto"}}></div>
				<p className="text-muted mx-auto" style={{"maxWidth":"700px","fontSize":"1rem"}}>
					We offer a comprehensive suite of digital, software, and technology solutions to help our partners succeed in their respective markets.
				</p>
			</div>
		</div>
		<div className="row justify-content-center">
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1000">
				<div className="card partner-service-card shadow-sm">
					<div className="partner-service-icon-box">
						<i className="fas fa-laptop-code"></i>
					</div>
					<h5>Software Development Projects</h5>
					<p>Custom software design, development, and engineering services tailored to meet complex business challenges.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1200">
				<div className="card partner-service-card shadow-sm">
					<div className="partner-service-icon-box">
						<i className="fas fa-mobile-alt"></i>
					</div>
					<h5>Web &amp; Mobile Application Development</h5>
					<p>Responsive web apps and native iOS &amp; Android applications with seamless performance and premium UX.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1400">
				<div className="card partner-service-card shadow-sm">
					<div className="partner-service-icon-box">
						<i className="fas fa-bullhorn"></i>
					</div>
					<h5>Digital Marketing Services</h5>
					<p>Comprehensive online marketing campaigns to boost visibility, engage target audiences, and generate leads.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1000">
				<div className="card partner-service-card shadow-sm">
					<div className="partner-service-icon-box">
						<i className="fas fa-paint-brush"></i>
					</div>
					<h5>Branding &amp; Creative Services</h5>
					<p>High-impact logos, graphics, and visual design assets that define and elevate your market presence.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1200">
				<div className="card partner-service-card shadow-sm">
					<div className="partner-service-icon-box">
						<i className="fas fa-robot"></i>
					</div>
					<h5>AI &amp; Automation Solutions</h5>
					<p>Smart artificial intelligence integrations and automation systems that optimize operations and reduce overhead.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1400">
				<div className="card partner-service-card shadow-sm">
					<div className="partner-service-icon-box">
						<i className="fas fa-shopping-cart"></i>
					</div>
					<h5>E-commerce Development</h5>
					<p>Fully-featured, secure e-commerce platforms designed to scale transactions and enhance customer shopping experiences.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1000">
				<div className="card partner-service-card shadow-sm">
					<div className="partner-service-icon-box">
						<i className="fas fa-cloud"></i>
					</div>
					<h5>SaaS Product Development</h5>
					<p>Cloud-native Software-as-a-Service applications developed with robust multi-tenant architectures and scalability.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1200">
				<div className="card partner-service-card shadow-sm">
					<div className="partner-service-icon-box">
						<i className="fas fa-lightbulb"></i>
					</div>
					<h5>Technology Consulting</h5>
					<p>Strategic advice on tech stack selection, system architecture design, and digital transformation initiatives.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1400">
				<div className="card partner-service-card shadow-sm">
					<div className="partner-service-icon-box">
						<i className="fas fa-server"></i>
					</div>
					<h5>Cloud &amp; Infrastructure Services</h5>
					<p>Reliable cloud migration, infrastructure management, hosting, and server optimization support.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1000">
				<div className="card partner-service-card shadow-sm">
					<div className="partner-service-icon-box">
						<i className="fas fa-palette"></i>
					</div>
					<h5>UI/UX Design Services</h5>
					<p>User-centric interface designs and user experience research resulting in highly intuitive digital products.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1200">
				<div className="card partner-service-card shadow-sm">
					<div className="partner-service-icon-box">
						<i className="fas fa-chart-line"></i>
					</div>
					<h5>SEO &amp; Performance Marketing</h5>
					<p>Data-driven search engine optimization and performance campaigns targeting measurable business growth.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1400">
				<div className="card partner-service-card shadow-sm">
					<div className="partner-service-icon-box">
						<i className="fas fa-globe"></i>
					</div>
					<h5>International Client Acquisition</h5>
					<p>Strategic support and marketing funnels designed to facilitate expansion and reach clients in international markets.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-duration="1000">
				<div className="card partner-service-card shadow-sm w-100">
					<div className="partner-service-icon-box">
						<i className="fas fa-handshake"></i>
					</div>
					<h5>Mutually agreed digital or technology-related services</h5>
					<p>Flexible cooperation models to support any specific or custom technological needs agreed upon by both parties.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="contact-partner py-5">
	<div className="container">
		<form id="become_contact_form">
			<input type="hidden" name="lead_url" defaultValue="/become-a-partner" />
			<input type="hidden" name="enquiry" defaultValue="2" />
			<div className="row justify-content-center">
				<div className="col-lg-10">
					<div className="row">
						<div className="col-12 mb-4">
							<h4 className="text-light text-center font-weight-bold">
								Contact Us
							</h4>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label htmlFor="name" className="text-light">Name <a style={{"color":"red"}}>*</a></label>
								<input type="text" className="form-control" id="name" name="enquiry_name_pop_up" />
							</div>
							<div className="form-group">
								<label htmlFor="companyName" className="text-light">Company Name</label>
								<input type="text" className="form-control" id="companyName" name="company_name" />
							</div>
							<div className="form-group">
								<label htmlFor="num" className="text-light">Phone Number <a style={{"color":"red"}}>*</a></label>
								<input type="text" className="form-control" id="num" name="enquiry_phone_pop_up" minLength="10" maxLength="16" onKeyPress={(e) => { if (window.validate) window.validate(e); }} />
							</div>
							<div className="form-group">
								<label htmlFor="Email" className="text-light">Email Address <a style={{"color":"red"}}>*</a></label>
								<input type="email" className="form-control" id="Email" name="enquiry_email_pop_up" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label htmlFor="" className="text-light">Select Service</label>
								<select name="enquiry_services_pop_up" id="" className="form-control pop_up_model">
									<option value="0">Select Services</option>
									<option value="1">Online Marketing</option>
									<option value="2">Web Design &amp; Development</option>
									<option value="3">Mobile Application</option>
									<option value="4">Software Development</option>
									<option value="5">Creative Design</option>
									<option value="6">Others</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlTextarea1" className="text-light">Your Message</label>
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="enquiry_message_pop_up"></textarea>
							</div>
						</div>
						<div className="col-md-12">
								<div className="g-recaptcha" data-sitekey="6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN"></div>
						</div>
						<div className="col-12 mt-4 text-center">
							<span className="add_contact_error" style={{"color":"red"}}></span>
							<button type="submit" className="btn submit-btn add_contact_pop_up_button px-5 py-2 font-weight-bold" style={{ width: 'auto', minWidth: '150px' }}>
								Submit <span className="add_contact_pop_up_fa_spin_icon"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</section>

<div className="modal fade-scale" id="become_enquiry">
	<div className="modal-dialog modal-dialog-centered">
		<div className="modal-content">

			<div className="modal-header border-0 py-2 mb-3" style={{"backgroundColor":"rgb(2, 80, 169)","color":"#ffffff"}}>
				<div className="row w-100">
					<div className="col-12 text-center">
						<p className="apply-now text-center">Query</p>
					</div>
				</div>
				<button type="button" className="close close_btn close_model" data-dismiss="modal">X</button>
			</div>

			<form id="become_contact">

				<input type="hidden" name="lead_url" defaultValue="/become-a-partner" />

				<input type="hidden" name="enquiry" defaultValue="2" />

				<div className="px-3">
					<div className="row pt-3">
						<div className="col-sm-6">
							<div className="form-group">
								<input type="text" className="form-control pop_up_model" id="contact_name" placeholder="Name" name="enquiry_name_pop_up" required="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<input type="text" className="form-control pop_up_model" name="enquiry_phone_pop_up" minLength="10" maxLength="16" onKeyPress={(e) => { if (window.validate) window.validate(e); }} id="mobile_num" placeholder="Mobile Number" required="" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className="form-group">
								<input type="email" className="form-control pop_up_model" id="email" placeholder="Email" name="enquiry_email_pop_up" required="" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<select name="enquiry_services_pop_up" id="" className="form-control pop_up_model">
									<option value="0">Select Services</option>
									<option value="1">Online Marketing</option>
									<option value="2">Web Design &amp; Development</option>
									<option value="3">Mobile Application</option>
									<option value="4">Software Development</option>
									<option value="5">Creative Design</option>
									<option value="6">Others</option>
								</select>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className="form-group">
								<input type="text" className="form-control pop_up_model" id="cmp_name" placeholder="Company Name" name="company_name" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="form-group">
								<textarea className="form-control services_head" name="enquiry_message_pop_up" placeholder="Your Message...." id="" rows="3" style={{"resize":"none"}}></textarea>
							</div>
						</div>
						<div className="col-md-12">
                            <div className="g-recaptcha" data-sitekey="6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN"></div>
                        </div>
					</div>
					<div className="row pt-4">
						<span style={{"color":"red"}} className="add_error"></span>
						<div className="col-12 text-center">
							<div className="form-group">
								<span className="add_contact_error" style={{"color":"red"}}></span>
								<button type="submit" className="btn form-control pop_up_contact_us add_contact_pop_up_button">
									Contact Us <span className="add_contact_pop_up_fa_spin_icon"></span>
								</button>
							</div>
						</div>
					</div>
				</div>

			</form>

		</div>
	</div>
</div>




<div className="modal fade-scale" id="Popup-enquiry">
    <div className="modal-dialog modal-dialog-centered" style={{"transform":"translateY(0px) scaleX(1) scaleY(1) translateX(0px)"}}>
        <div className="modal-content">

                <div className="modal-header border-0 py-2 mb-3" style={{"backgroundColor":"rgb(2, 80, 169)","color":"#ffffff"}}>
                    <div className="row w-100">
                        <div className="col-12 text-center">
                            <p className="apply-now text-center">Query</p>
                        </div>
                    </div>
                    <button type="button" className="close close_btn close_model" data-dismiss="modal">X</button>
                </div>

            <form id="enquiry_pop_up_add">

				<input type="hidden" name="lead_url" defaultValue="/become-a-partner" />

				<input type="hidden" name="enquiry" defaultValue="2" />

                <div className="px-3">
                    <div className="row pt-3">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="text" className="form-control pop_up_model" id="contact_name" placeholder="Name" name="enquiry_name_pop_up" required="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="text" className="form-control pop_up_model" name="enquiry_phone_pop_up" minLength="10" maxLength="16" onKeyPress={(e) => { if (window.validate) window.validate(e); }} id="mobile_num" placeholder="Mobile Number" required="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="email" className="form-control pop_up_model" id="email" placeholder="Email" name="enquiry_email_pop_up" required="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <select name="enquiry_services_pop_up" className="form-control pop_up_model">
                                    <option value="0">Select Services</option>
                                    <option value="1">Online Marketing</option>
                                    <option value="2">Web Design &amp; Development</option>
                                    <option value="3">Mobile Application</option>
                                    <option value="4">Software Development</option>
                                    <option value="5">Creative Design</option>
                                    <option value="6">Others</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <textarea className="form-control services_head" name="enquiry_message_pop_up" placeholder="Your Message...." rows="3" style={{"resize":"none"}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <span style={{"color":"red"}} className="add_error"></span>
                        <div className="col-12 text-center">
                            <div className="form-group">
                                <button type="submit" className="btn form-control pop_up_contact_us add_enquiry_pop_up_button">Contact Us<span className="add_enquiry_pop_up_fa_spin_icon"></span></button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>

        </div>
    </div>
</div>




    





<div className="modal" id="share_url" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-width-47 modal-dialog-centered" role="document" style={{"paddingTop":"4%"}}>
        <div className="modal-content px-0">
            <div className="modal-body p-0">
                <div className="col-12">
                    <div className="row">
                        <button type="button" className="close popup-close" data-dismiss="modal">×</button>
                        <div className="col-12 text-center">
                            <h5 className="py-3 border_bottom">Share with friends</h5>
                        </div>
                        <div className="col-12">
                             <div className="col-12 share-icons text-center  py-5">
                <a href="https://www.facebook.com/login/" target="_blank">
                    <img src="/debug/img/facebook.svg" alt="facebook" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                <a href="https://twitter.com/i/flow/login" target="_blank">
                    <img src="/debug/img/twitter-1.svg" alt="twitter" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                <a href="https://www.linkedin.com/login" target="_blank">
                    <img src="/debug/img/linkedin-1.svg" alt="linkedin" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                <a href="https://www.pinterest.com/login/" target="_blank">
                    <img src="/debug/img/pinterest.svg" alt="pinterest" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                <a href="https://www.instagram.com/accounts/login/" target="_blank">
                    <img src="/debug/img/instagram.svg" alt="instagram" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                
            </div>
              
                        </div>
                       
                         <div className="col-md-6 mx-auto pb-32">
                            <div className="div_share_url">
                                <small>Event Url</small>
                                <p>https://bit.ly/3qCVvOI</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>













<div className="modal fade" id="modal_php_career" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-w-mob" role="document" style={{"maxWidth":"65%"}}>
        <div className="modal-content">
            <div className="modal-header" style={{"backgroundColor":"#0150a9"}}>
                <h5 className="modal-title text-light" id="exampleModalLabel">Personal Information</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="text-light">×</span>
                </button>
            </div>
			<form id="add_career_form">
				<input type="hidden" name="lead_url" defaultValue="/become-a-partner" />
				<div className="modal-body">
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label>Name <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_name" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Phone Number <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" minLength="10" maxLength="16" onKeyPress={(e) => { if (window.validate) window.validate(e); }} name="career_phone" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Email Id <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="email" name="career_email" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Total Exp <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_total_exp" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Relevant Exp <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_relevant_exp" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Career Gap(Reason)</label>
								<input className="form-control" type="text" name="career_gap" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Current CTC <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_current_ctc" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Expected CTC(Offer if any) <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_exp_ctc" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Notice Period(LWD if serving) <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_notice_period" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Current Location</label>
								<input className="form-control" type="text" name="career_current_loc" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Preferred Location</label>
								<input className="form-control" type="text" name="career_preferred_loc" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Reason for job change <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_job_change" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Why should we hire you ?</label>
								<textarea className="form-control" name="career_message"></textarea>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label htmlFor="myfile">Attach your resume <a style={{"color":"red"}}>*</a></label>
                                <small className="text-danger">Only PDF, DOC, and DOCX are allowed</small>
								<input type="file" className="form-control" id="myfile" name="attach_document" required="" />
							</div>
						</div>

					</div>
					<div className="g-recaptcha" data-sitekey="6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN"></div>
				</div>
				<div className="modal-footer">
					<span className="add_career_error" style={{"color":"red"}}></span>
					<button type="submit" className="btn btn-primary m-auto add_career_pop_up_button" style={{"backgroundColor":"#0150a9"}}>
						Submit <span className="add_career_pop_up_fa_spin_icon"></span>
					</button>
				</div>
			</form>
        </div>
    </div>
</div>

<div className="modal fade" id="job_apply_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-w-mob" role="document" style={{"maxWidth":"65%"}}>
        <div className="modal-content">
            <div className="modal-header" style={{"backgroundColor":"#0150a9"}}>
                <h5 className="modal-title text-light" id="exampleModalLabel">Apply Now</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="text-light">×</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>DOB</label>
                            <input className="form-control" type="date" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email Id</label>
                            <input className="form-control" type="email" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Job Application For</label>
                            <input className="form-control" type="email" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Current Company</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Total Work Experience</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Current Salary</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label>Current Salary</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="myfile">Select a file:</label>
                            <input type="file" id="myfile" name="myfile" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary m-auto" style={{"backgroundColor":"#0150a9"}}>Submit</button>
            </div>
        </div>
    </div>
</div>
<link rel="stylesheet" href="https://unpkg.com/photoswipe@5/dist/photoswipe.css" />












    </>
  );
}

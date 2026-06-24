import React, { useEffect } from 'react';

export default function OurPortfolio() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "About STO Digital - Leaders in IT solutions in India";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "STO Digital bunch of IT services & IT solutions help you navigate the shifts in Building Tomorrow's Enterprise.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "STO Digital bunch of IT services & IT solutions help you navigate the shifts in Building Tomorrow's Enterprise.");
      document.head.appendChild(metaDesc);
    }
  }, []);

  return (
    <>
      
    <div className="container">
        
        <div className="row mb-5">
            <div className="col-12 text-center">
                <h1 className="display-4 font-weight-bold text-dark mb-3">Our Work Portfolio</h1>
                <p className="lead text-muted max-w-2xl mx-auto">Explore some of the premium custom web applications, SaaS platforms, and mobile apps engineered by STO Digital.</p>
                <div className="h-line mx-auto" style={{"width":"80px","height":"3px","background":"#ffc107","marginTop":"20px"}}></div>
            </div>
        </div>

        
        <div className="row">
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="card portfolio-card">
                    <a href="/portfolio/digital-commerce.html">
                        <div className="card-img-wrapper">
                            <img src="/uploads/portfolio_digital_commerce.png" alt="Digital Commerce Platform" />
                            <div className="card-overlay">
                                <h5>Digital Commerce Platform</h5>
                                <span>E-Commerce · Web App</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay="150">
                <div className="card portfolio-card">
                    <a href="/portfolio/healthcare-app.html">
                        <div className="card-img-wrapper">
                            <img src="/uploads/portfolio_healthcare_app.png" alt="HealthCare App" />
                            <div className="card-overlay">
                                <h5>HealthCare App</h5>
                                <span>Mobile App · UI/UX Design</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="card portfolio-card">
                    <a href="/portfolio/crm-software.html">
                        <div className="card-img-wrapper">
                            <img src="/uploads/portfolio_crm_software.png" alt="Enterprise CRM Software" />
                            <div className="card-overlay">
                                <h5>Enterprise CRM Software</h5>
                                <span>SaaS · Enterprise Solution</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay="250">
                <div className="card portfolio-card">
                    <a href="/portfolio/travel-portal.html">
                        <div className="card-img-wrapper">
                            <img src="/uploads/portfolio_travel_portal.png" alt="TravelEase Portal" />
                            <div className="card-overlay">
                                <h5>TravelEase Portal</h5>
                                <span>Travel Booking · Web Portal</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="card portfolio-card">
                    <a href="/portfolio/mobile-app.html">
                        <div className="card-img-wrapper">
                            <img src="/uploads/portfolio_mobile_app.png" alt="Foodie Express App" />
                            <div className="card-overlay">
                                <h5>Foodie Express App</h5>
                                <span>Mobile App · Food Delivery</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay="350">
                <div className="card portfolio-card">
                    <a href="/portfolio/education-platform.html">
                        <div className="card-img-wrapper">
                            <img src="/uploads/portfolio_education_platform.png" alt="E-Learning Platform" />
                            <div className="card-overlay">
                                <h5>E-Learning Platform</h5>
                                <span>E-Learning · EdTech Solution</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        
        <div className="row mt-5">
            <div className="col-12">
                <div className="bg-dark text-white p-5 text-center shadow-lg" style={{"borderRadius":"12px","background":"linear-gradient(135deg, #090218 0%, #170d32 100%)"}}>
                    <h3 className="font-weight-bold mb-3">Ready to build something extraordinary?</h3>
                    <p className="lead text-muted mb-4">Let's discuss how STO Digital can transform your product ideas into premium digital realities.</p>
                    <a href="/contact-us" className="btn btn-warning font-weight-bold text-uppercase px-5 py-3" style={{"borderRadius":"6px","boxShadow":"0 4px 15px rgba(255, 193, 7, 0.4)"}}>
                        Book a Free Consultation
                    </a>
                </div>
            </div>
        </div>
    </div>

    </>
  );
}

import React, { useEffect } from 'react';

export default function PortfolioCrmSoftware() {
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
        
        <div className="row mb-4">
            <div className="col-12">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent p-0">
                        <li className="breadcrumb-item"><a href="/" className="text-primary font-weight-bold">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Enterprise CRM Software</li>
                    </ol>
                </nav>
            </div>
        </div>

        
        <div className="row mb-5">
            <div className="col-12 text-center text-md-left">
                <span className="badge badge-primary px-3 py-2 text-uppercase mb-2" style={{"fontSize":"11px","letterSpacing":"1px"}}>SaaS / Enterprise Solutions</span>
                <h1 className="display-4 font-weight-bold text-dark mb-3">Enterprise CRM Software</h1>
                <p className="lead text-muted">TechaCRM - Intelligent Customer Management</p>
            </div>
        </div>

        
        <div className="row mb-5">
            
            <div className="col-lg-8 mb-4 mb-lg-0">
                <div className="card border-0 shadow-lg" style={{"borderRadius":"12px","overflow":"hidden"}}>
                    <img src="/uploads/portfolio_crm_software.png" alt="Enterprise CRM Software" className="img-fluid w-100" style={{"objectFit":"cover"}} />
                </div>
            </div>

            
            <div className="col-lg-4">
                <div className="card border-0 shadow-lg p-4 bg-white h-100" style={{"borderRadius":"12px"}}>
                    <h4 className="font-weight-bold text-dark mb-4 pb-2 border-bottom">Project Specs</h4>
                    <div className="mb-3">
                        <span className="text-muted d-block small text-uppercase">Client</span>
                        <strong className="text-dark" style={{"fontSize":"16px"}}>Global Logistics Corp</strong>
                    </div>
                    <div className="mb-3">
                        <span className="text-muted d-block small text-uppercase">Timeline / Year</span>
                        <strong className="text-dark" style={{"fontSize":"16px"}}>2025</strong>
                    </div>
                    <div className="mb-3">
                        <span className="text-muted d-block small text-uppercase">Tech Stack</span>
                        <strong className="text-primary" style={{"fontSize":"15px"}}>Angular, Java Spring Boot, MySQL, Docker, AWS Cloud</strong>
                    </div>
                    <div className="mb-4">
                        <span className="text-muted d-block small text-uppercase">Scope of Work</span>
                        <strong className="text-dark" style={{"fontSize":"15px"}}>UX/UI Design, Fullstack Development, API Orchestration, Deployment Automation</strong>
                    </div>
                    <a href="/contact-us" className="btn btn-warning btn-block font-weight-bold text-uppercase py-3" style={{"borderRadius":"6px","boxShadow":"0 4px 10px rgba(255,193,7,0.3)"}}>
                        Get Started Today
                    </a>
                </div>
            </div>
        </div>

        
        <div className="row pt-4">
            <div className="col-lg-8">
                
                <div className="bg-white p-4 p-md-5 shadow-sm mb-4" style={{"borderRadius":"12px"}}>
                    <h3 className="font-weight-bold text-dark mb-3">Project Overview</h3>
                    <p className="text-secondary leading-relaxed" style={{"fontSize":"16px","lineHeight":"1.8"}}>An integrated customer relationship management (CRM) suite designed to streamline enterprise lead pipelines, client communications, customer lifecycle value tracking, and predictive sales forecasting.</p>
                </div>

                
                <div className="bg-white p-4 p-md-5 shadow-sm mb-4" style={{"borderRadius":"12px"}}>
                    <h3 className="font-weight-bold text-dark mb-3">The Challenge</h3>
                    <p className="text-secondary leading-relaxed mb-4" style={{"fontSize":"16px","lineHeight":"1.8"}}>Managing sales leads across multiple continents resulted in fractured communication channels, lost lead ownership, lack of accurate analytics, and manual report building that drained staff time.</p>
                    
                    <h3 className="font-weight-bold text-dark mb-3">Our Engineered Solution</h3>
                    <p className="text-secondary leading-relaxed" style={{"fontSize":"16px","lineHeight":"1.8"}}>We implemented a custom enterprise web application using Angular and Java Spring Boot. This CRM centralizes communications, tracks email engagement metrics, provides live team collaboration dashboards, and automates report generation using AWS pipelines.</p>
                </div>
            </div>

            
            <div className="col-lg-4">
                <div className="bg-white p-4 shadow-sm h-100" style={{"borderRadius":"12px"}}>
                    <h3 className="font-weight-bold text-dark mb-4 pb-2 border-bottom">Key Deliverables</h3>
                    <ul className="list-unstyled">
                        
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Dynamic lead staging &amp; pipeline drag-and-drop board</h6>
                            </div>
                        </li>
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Centralized communication tracking (Email, Phone, Chat)</h6>
                            </div>
                        </li>
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Automated weekly sales performance reports</h6>
                            </div>
                        </li>
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Role-based granular user permissions &amp; controls</h6>
                            </div>
                        </li>
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>API integrations with third-party invoicing engines</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        
        <div className="row mt-5 pt-4">
            <div className="col-12 text-center">
                <a href="/" className="btn btn-outline-dark px-5 py-3 font-weight-bold text-uppercase" style={{"borderRadius":"30px"}}>
                    <i className="fas fa-arrow-left mr-2"></i> Back to Homepage
                </a>
            </div>
        </div>
    </div>

    </>
  );
}

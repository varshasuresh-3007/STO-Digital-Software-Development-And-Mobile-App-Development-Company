import React, { useEffect } from 'react';

export default function PortfolioDigitalCommerce() {
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
                        <li className="breadcrumb-item active" aria-current="page">Digital Commerce Platform</li>
                    </ol>
                </nav>
            </div>
        </div>

        
        <div className="row mb-5">
            <div className="col-12 text-center text-md-left">
                <span className="badge badge-primary px-3 py-2 text-uppercase mb-2" style={{"fontSize":"11px","letterSpacing":"1px"}}>E-Commerce / Web Development</span>
                <h1 className="display-4 font-weight-bold text-dark mb-3">Digital Commerce Platform</h1>
                <p className="lead text-muted">Enterprise E-Commerce &amp; Retail Platform</p>
            </div>
        </div>

        
        <div className="row mb-5">
            
            <div className="col-lg-8 mb-4 mb-lg-0">
                <div className="card border-0 shadow-lg" style={{"borderRadius":"12px","overflow":"hidden"}}>
                    <img src="/uploads/portfolio_digital_commerce.png" alt="Digital Commerce Platform" className="img-fluid w-100" style={{"objectFit":"cover"}} />
                </div>
            </div>

            
            <div className="col-lg-4">
                <div className="card border-0 shadow-lg p-4 bg-white h-100" style={{"borderRadius":"12px"}}>
                    <h4 className="font-weight-bold text-dark mb-4 pb-2 border-bottom">Project Specs</h4>
                    <div className="mb-3">
                        <span className="text-muted d-block small text-uppercase">Client</span>
                        <strong className="text-dark" style={{"fontSize":"16px"}}>Apex Retail Group</strong>
                    </div>
                    <div className="mb-3">
                        <span className="text-muted d-block small text-uppercase">Timeline / Year</span>
                        <strong className="text-dark" style={{"fontSize":"16px"}}>2026</strong>
                    </div>
                    <div className="mb-3">
                        <span className="text-muted d-block small text-uppercase">Tech Stack</span>
                        <strong className="text-primary" style={{"fontSize":"15px"}}>React.js, Next.js, Node.js, Stripe, MongoDB, Redis</strong>
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
                    <p className="text-secondary leading-relaxed" style={{"fontSize":"16px","lineHeight":"1.8"}}>A next-generation digital commerce ecosystem engineered to deliver lightning-fast page speeds, seamless single-page checkout, and modular inventory management. Built on modern headless architecture to support scalable global brands.</p>
                </div>

                
                <div className="bg-white p-4 p-md-5 shadow-sm mb-4" style={{"borderRadius":"12px"}}>
                    <h3 className="font-weight-bold text-dark mb-3">The Challenge</h3>
                    <p className="text-secondary leading-relaxed mb-4" style={{"fontSize":"16px","lineHeight":"1.8"}}>The client struggled with high cart abandonment rates due to slow page loads and a multi-step checkout funnel. Furthermore, legacy database structures caused scaling bottlenecks during flash sales and peak seasonal shopping seasons.</p>
                    
                    <h3 className="font-weight-bold text-dark mb-3">Our Engineered Solution</h3>
                    <p className="text-secondary leading-relaxed" style={{"fontSize":"16px","lineHeight":"1.8"}}>We re-engineered the platform using Next.js for server-side rendering (SSR), implemented Redis caching layers for catalog pages, and streamlined the checkout process down to a single screen using Stripe Elements. Custom microservices were written to manage real-time inventory updates.</p>
                </div>
            </div>

            
            <div className="col-lg-4">
                <div className="bg-white p-4 shadow-sm h-100" style={{"borderRadius":"12px"}}>
                    <h3 className="font-weight-bold text-dark mb-4 pb-2 border-bottom">Key Deliverables</h3>
                    <ul className="list-unstyled">
                        
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Server-Side Rendered (SSR) fast storefront loading (&lt;1.2s)</h6>
                            </div>
                        </li>
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Fully integrated, single-click Stripe payment gateway</h6>
                            </div>
                        </li>
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Real-time inventory sync across warehouse APIs</h6>
                            </div>
                        </li>
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Advanced admin dashboard with visual sales analytics</h6>
                            </div>
                        </li>
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Optimized search engines with autocomplete &amp; filtering</h6>
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

import React, { useEffect } from 'react';

export default function PortfolioMobileApp() {
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
                        <li className="breadcrumb-item active" aria-current="page">Foodie Express App</li>
                    </ol>
                </nav>
            </div>
        </div>

        
        <div className="row mb-5">
            <div className="col-12 text-center text-md-left">
                <span className="badge badge-primary px-3 py-2 text-uppercase mb-2" style={{"fontSize":"11px","letterSpacing":"1px"}}>Mobile App / GPS Real-Time</span>
                <h1 className="display-4 font-weight-bold text-dark mb-3">Foodie Express App</h1>
                <p className="lead text-muted">On-Demand Food Delivery Platform</p>
            </div>
        </div>

        
        <div className="row mb-5">
            
            <div className="col-lg-8 mb-4 mb-lg-0">
                <div className="card border-0 shadow-lg" style={{"borderRadius":"12px","overflow":"hidden"}}>
                    <img src="/uploads/portfolio_mobile_app.png" alt="Foodie Express App" className="img-fluid w-100" style={{"objectFit":"cover"}} />
                </div>
            </div>

            
            <div className="col-lg-4">
                <div className="card border-0 shadow-lg p-4 bg-white h-100" style={{"borderRadius":"12px"}}>
                    <h4 className="font-weight-bold text-dark mb-4 pb-2 border-bottom">Project Specs</h4>
                    <div className="mb-3">
                        <span className="text-muted d-block small text-uppercase">Client</span>
                        <strong className="text-dark" style={{"fontSize":"16px"}}>Foodie Express Network</strong>
                    </div>
                    <div className="mb-3">
                        <span className="text-muted d-block small text-uppercase">Timeline / Year</span>
                        <strong className="text-dark" style={{"fontSize":"16px"}}>2026</strong>
                    </div>
                    <div className="mb-3">
                        <span className="text-muted d-block small text-uppercase">Tech Stack</span>
                        <strong className="text-primary" style={{"fontSize":"15px"}}>React Native, Node.js, Express, Socket.io, Google Maps SDK</strong>
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
                    <p className="text-secondary leading-relaxed" style={{"fontSize":"16px","lineHeight":"1.8"}}>A modern on-demand food delivery ecosystem composed of separate consumer, delivery driver, and restaurant-partner applications. Integrates custom route planning and instant order matching algorithms.</p>
                </div>

                
                <div className="bg-white p-4 p-md-5 shadow-sm mb-4" style={{"borderRadius":"12px"}}>
                    <h3 className="font-weight-bold text-dark mb-3">The Challenge</h3>
                    <p className="text-secondary leading-relaxed mb-4" style={{"fontSize":"16px","lineHeight":"1.8"}}>Legacy systems suffered from lag in driver dispatching, leading to cold food deliveries, frustrated customers, and manual dispatcher bottlenecks during dinner peak hours.</p>
                    
                    <h3 className="font-weight-bold text-dark mb-3">Our Engineered Solution</h3>
                    <p className="text-secondary leading-relaxed" style={{"fontSize":"16px","lineHeight":"1.8"}}>We built three high-performance applications connected through a central real-time Node.js server using Socket.io. Drivers are automatically assigned requests based on geolocation closeness, and routes are calculated in real time.</p>
                </div>
            </div>

            
            <div className="col-lg-4">
                <div className="bg-white p-4 shadow-sm h-100" style={{"borderRadius":"12px"}}>
                    <h3 className="font-weight-bold text-dark mb-4 pb-2 border-bottom">Key Deliverables</h3>
                    <ul className="list-unstyled">
                        
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Real-time GPS tracking of delivery drivers</h6>
                            </div>
                        </li>
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Instant order status push notifications via FCM</h6>
                            </div>
                        </li>
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Intelligent auto-dispatcher algorithms</h6>
                            </div>
                        </li>
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Secure digital wallets and online payment processing</h6>
                            </div>
                        </li>
                        <li className="media mb-3">
                            <span className="mr-3 text-success" style={{"fontSize":"20px"}}><i className="fas fa-check-circle"></i></span>
                            <div className="media-body">
                                <h6 className="mt-1 mb-0 font-weight-semibold text-dark" style={{"lineHeight":"1.4"}}>Interactive review &amp; ratings dashboard for menu items</h6>
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

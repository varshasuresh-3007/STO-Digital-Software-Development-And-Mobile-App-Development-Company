import React, { useEffect } from 'react';

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "STO Digital's Products";
    let metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Innovative software products by STO Digital — coming soon.";
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

  return (
    <>
      <img src="/debug/img/Vector_Smart_Object30.svg" alt="vector-smart-object" className="back-img img-fluid" />

      <section className="ui_ux--cta client-main pb-5">
        <div className="container">

          {/* Page heading row matching site style */}
          <div className="row img-row justify-content-center text-center">
            <div className="col-md-6" data-aos="fade-down" data-aos-duration="700">
              <h1 className="font-weight-bold services_head">OUR PRODUCTS</h1>
            </div>
            <div className="col-sm-7 img-div" data-aos="fade-down" data-aos-duration="700">
              <img src="/debug/img/banner_icon.png" alt="banner" className="img-fluid" />
            </div>
          </div>

          {/* Coming Soon card */}
          <div className="row justify-content-center mt-4 mb-5" data-aos="fade-up" data-aos-duration="800">
            <div className="col-lg-8 col-md-10">
              <div className="text-center py-5 px-4 position-relative overflow-hidden"
                   style={{
                     background: 'linear-gradient(135deg, #ffffff 0%, #f4f8ff 100%)',
                     borderRadius: '24px',
                     border: '1.5px solid #e2eaf8',
                     boxShadow: '0 20px 50px rgba(2, 50, 106, 0.08)'
                   }}>

                {/* Decorative blobs */}
                <div style={{ position:'absolute', top:'-40px', right:'-40px', width:'200px', height:'200px',
                  background:'radial-gradient(circle, rgba(22,108,231,0.10) 0%, transparent 70%)', zIndex:0 }}></div>
                <div style={{ position:'absolute', bottom:'-40px', left:'-40px', width:'180px', height:'180px',
                  background:'radial-gradient(circle, rgba(89,144,247,0.10) 0%, transparent 70%)', zIndex:0 }}></div>

                <div className="position-relative" style={{ zIndex: 1 }}>
                  {/* Icon */}
                  <div className="d-inline-flex align-items-center justify-content-center mb-4 rounded-circle"
                       style={{ width:'90px', height:'90px', background:'linear-gradient(135deg, #e0ebfc, #f0f5fd)', boxShadow:'0 8px 20px rgba(22,108,231,0.15)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                         stroke="#166ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>

                  {/* Badge */}
                  <div className="mb-3">
                    <span style={{
                      display:'inline-block', padding:'6px 22px',
                      background:'linear-gradient(135deg, #166ce7 0%, #02326a 100%)',
                      borderRadius:'50px', color:'#fff', fontWeight:700,
                      fontSize:'11px', letterSpacing:'2.5px', textTransform:'uppercase',
                      boxShadow:'0 4px 14px rgba(22,108,231,0.25)'
                    }}>Coming Soon</span>
                  </div>

                  {/* Heading */}
                  <h2 className="font-weight-bold mb-3" style={{ color:'#02326a', fontSize:'2rem' }}>
                    Next-Gen Digital Products
                  </h2>

                  {/* Subtext */}
                  <p className="text-muted mx-auto mb-4" style={{ maxWidth:'520px', fontSize:'16px', lineHeight:'1.7' }}>
                    We are putting the final touches on our state-of-the-art software suites. STO Digital is committed to delivering highly integrated solutions to help build tomorrow's enterprise.
                  </p>

                  {/* Divider */}
                  <div style={{ width:'60px', height:'3px', background:'linear-gradient(90deg, #166ce7, #02326a)', borderRadius:'3px', margin:'0 auto 24px' }}></div>

                  {/* Status dot */}
                  <div className="d-flex align-items-center justify-content-center" style={{ gap:'8px' }}>
                    <span className="d-inline-block rounded-circle bg-success"
                          style={{ width:'9px', height:'9px', boxShadow:'0 0 8px rgba(40,167,69,0.7)' }}></span>
                    <span className="text-muted small font-weight-bold">Development actively in progress. Early access opening soon.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three quality pillar cards */}
          <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="900">
            <div className="col-lg-10">
              <div className="row text-center">
                {[
                  {
                    color:'#166ce7',
                    title:'Cloud Native Architecture',
                    desc:'Engineered from the ground up to leverage autoscaling microservices running securely in enterprise environments.',
                    icon:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#166ce7" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                  },
                  {
                    color:'#10b981',
                    title:'Zero-Trust Security Model',
                    desc:'State-of-the-art secure pipelines using granular scopes, end-to-end token auditing, and robust server integrations.',
                    icon:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  },
                  {
                    color:'#8b5cf6',
                    title:'Sub-Second Dashboards',
                    desc:'Optimized analytics feeds providing real-time responsive data without impacting your active operations.',
                    icon:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  }
                ].map((item, idx) => (
                  <div key={idx} className="col-md-4 mb-4">
                    <div className="p-4 bg-white h-100"
                         style={{ borderRadius:'20px', border:'1.5px solid #e8edf8', transition:'all 0.3s ease', boxShadow:'0 4px 14px rgba(2,50,106,0.04)' }}
                         onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='0 16px 32px rgba(2,50,106,0.10)'; }}
                         onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 4px 14px rgba(2,50,106,0.04)'; }}>
                      <div className="mb-3 d-inline-flex p-3 rounded-circle" style={{ background:'#f4f8ff' }}>
                        {item.icon}
                      </div>
                      <h3 className="h6 font-weight-bold mb-2" style={{ color:'#02326a' }}>{item.title}</h3>
                      <p className="text-muted mb-0 small">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

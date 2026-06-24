import React, { useEffect } from 'react';

export default function News() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Latest Programming And Technology News Updates";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "STO Digital provides the latest programming and technology news updates and trends. Stay updated with the latest trending news in technology and also know what is new in the tech world.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "STO Digital provides the latest programming and technology news updates and trends. Stay updated with the latest trending news in technology and also know what is new in the tech world.");
      document.head.appendChild(metaDesc);
    }
  }, []);

  return (
    <>
      
    <section className="blogs my-4">
        <div className="container">
            <div className="row">
                <div className="col-12 pb-md-3">
                    <h2 className="text-center text-uppercase blogs__title mb-0">
                        News
                    </h2>
                </div>
                <div className="h-line__orange">
                </div>
            </div>
            <div className="row blogs-cards pt-4 allList">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <img src="/debug/img/02-javascript-1.svg" className="card-img-top p-4" alt="AI Revolution" style={{"height":"200px","objectFit":"contain","background":"#f8f9fa"}} />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">AI Revolution in 2026: The Rise of Agentic Systems</h5>
                            <p className="card-text text-muted">Explore how autonomous AI agents are reshaping the corporate landscape, from automated decision-making to complex problem-solving in real-time.</p>
                            <a href="#" className="btn btn-primary btn-sm">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <img src="/debug/img/03-react-1.svg" className="card-img-top p-4" alt="Web Development" style={{"height":"200px","objectFit":"contain","background":"#f8f9fa"}} />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">Modern Web Trends: Beyond React and Vue</h5>
                            <div className="card-text text-muted">A deep dive into the next generation of web frameworks and why performance-first architectures are winning the battle for user attention.</div>
                            <a href="#" className="btn btn-primary btn-sm mt-3">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <img src="/debug/img/07-node-js.svg" className="card-img-top p-4" alt="Backend Scalability" style={{"height":"200px","objectFit":"contain","background":"#f8f9fa"}} />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">STO Digital's New Scalability Benchmarks</h5>
                            <p className="card-text text-muted">Our engineering team has achieved a 40% reduction in server latency using optimized Node.js microservices and edge computing strategies.</p>
                            <a href="#" className="btn btn-primary btn-sm">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <img src="/debug/img/08-golang.svg" className="card-img-top p-4" alt="Cybersecurity" style={{"height":"200px","objectFit":"contain","background":"#f8f9fa"}} />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">Cybersecurity in 2026: Protecting Global Data</h5>
                            <p className="card-text text-muted">With the rise of quantum threats, STO Digital is leading the way in implementing post-quantum encryption for our enterprise clients.</p>
                            <a href="#" className="btn btn-primary btn-sm">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <img src="/debug/img/python.png" className="card-img-top p-4" alt="Fintech" style={{"height":"200px","objectFit":"contain","background":"#f8f9fa"}} />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">Fintech 2.0: The Future of Digital Banking</h5>
                            <p className="card-text text-muted">How blockchain and AI are collaborating to create more secure and user-friendly financial experiences for the next decade.</p>
                            <a href="#" className="btn btn-primary btn-sm">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <img src="/debug/img/01-java-horizontal.svg" className="card-img-top p-4" alt="Education Tech" style={{"height":"200px","objectFit":"contain","background":"#f8f9fa"}} />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">EdTech: Personalized Learning Paths</h5>
                            <p className="card-text text-muted">A look at how STO Digital is helping educational institutions implement AI-driven personalized learning for students worldwide.</p>
                            <a href="#" className="btn btn-primary btn-sm">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  );
}

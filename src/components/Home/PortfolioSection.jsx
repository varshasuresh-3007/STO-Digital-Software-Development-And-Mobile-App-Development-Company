import React from 'react';

export default function PortfolioSection() {
  return (
    <>
  <section className="portfolio_list">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center pb-5">
          <h2 className="text-uppercase d-inline-block">
            our Portfolio
          </h2>
          <div className="h-line"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-3" data-aos="zoom-in" data-aos-delay="160">
								<div className="card">
								<a href="/portfolio/rakesh-pandey">
									<img className="card-img-top img-thumbnail p-0" src="/uploads/Layer_0.png" alt="Rakesh Pandey" />
								</a>
								</div>
						</div><div className="col-md-6 col-lg-4 mb-3" data-aos="zoom-in" data-aos-delay="160">
								<div className="card">
								<a href="/portfolio/kalasparsh">
									<img className="card-img-top img-thumbnail p-0" src="/uploads/kalasparsha.jpg" alt="Kalasparsh" />
								</a>
								</div>
						</div><div className="col-md-6 col-lg-4 mb-3" data-aos="zoom-in" data-aos-delay="160">
								<div className="card">
								<a href="/portfolio/sushant-travels">
									<img className="card-img-top img-thumbnail p-0" src="/uploads/sushant_card.jpg" alt="Sushant Travels" />
								</a>
								</div>
						</div><div className="col-md-6 col-lg-4 mb-3" data-aos="zoom-in" data-aos-delay="160">
								<div className="card">
								<a href="/portfolio/jmi-alumni-brochure">
									<img className="card-img-top img-thumbnail p-0" src="/uploads/brochure1.jpg" alt="JMI Alumni" />
								</a>
								</div>
						</div><div className="col-md-6 col-lg-4 mb-3" data-aos="zoom-in" data-aos-delay="160">
								<div className="card">
								<a href="/portfolio/bravopharma-broucher">
									<img className="card-img-top img-thumbnail p-0" src="/uploads/bravo_pharma_brochure.jpg" alt="Bravopharma" />
								</a>
								</div>
						</div><div className="col-md-6 col-lg-4 mb-3" data-aos="zoom-in" data-aos-delay="160">
								<div className="card">
								<a href="/portfolio/bravo-cure">
									<img className="card-img-top img-thumbnail p-0" src="/uploads/Bravo_Card1.jpg" alt="BravoCure" />
								</a>
								</div>
						</div>      </div>
      <div className="row">
        <div className="col-12 text-center">
          <a href="/our-portfolio" className="btn btn-new text-white text-uppercase px-5">
            View All
          </a>
        </div>
      </div>
    </div>
  </section>

    </>
  );
}

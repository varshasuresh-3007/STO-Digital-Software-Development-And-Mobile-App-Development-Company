import React from 'react';

export default function MilestonesSection() {
  return (
    <>
  <section className="achievement">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center pb-5">
          <h2 className="text-uppercase d-inline-block">
            milestones
          </h2>
          <div className="h-line"></div>
        </div>
        <div className="col-6 col-md-3 text-center" data-aos="zoom-in" data-aos-duration="1000">
          <img srcSet="/debug/img/star(2).svg" src="/debug/img/star(2).svg" className="img-fluid pb-3 milestonesIcon" alt="experience" />
          <h4>
            6+
          </h4>
          <p className="text-uppercase">
            Years experience
          </p>
        </div>
        <div className="col-6 col-md-3 text-center" data-aos="zoom-in" data-aos-duration="1000">
          <img srcSet="/debug/img/worldwide-1.svg" src="/debug/img/worldwide-1.svg" className="img-fluid pb-3 milestonesIcon" alt="website" />
          <h4>
            100+
          </h4>
          <p className="text-uppercase">
            website built
          </p>
        </div>
        <div className="col-6 col-md-3 text-center" data-aos="zoom-in" data-aos-duration="1000">
          <img srcSet="/debug/img/pin.svg" src="/debug/img/pin.svg" className="img-fluid pb-3 milestonesIcon" alt="location" />
          <h4>
            15+
          </h4>
          <p className="text-uppercase">
            service location
          </p>
        </div>
        <div className="col-6 col-md-3 text-center" data-aos="zoom-in" data-aos-duration="1000">
          <img srcSet="/debug/img/inbox.svg" src="/debug/img/pin.svg" className="img-fluid pb-3 milestonesIcon" alt="servers" />
          <h4>
            100+
          </h4>
          <p className="text-uppercase">
            happy Customers
          </p>
        </div>
      </div>
    </div>
  </section>

    </>
  );
}

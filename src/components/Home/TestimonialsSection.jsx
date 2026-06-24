import React, { useEffect } from 'react';

export default function TestimonialsSection() {
  useEffect(() => {
    const $ = window.$;
    if ($ && typeof $.fn.owlCarousel === 'function') {
      const $owl = $('.owl-one');
      $owl.owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1200: {
            items: 3
          }
        }
      });
      return () => {
        $owl.trigger('destroy.owl.carousel');
      };
    }
  }, []);
  return (
    <>
  <section className="testimonials-new">
    <div className="container">
      <div className="row">
        <div className="col-12 text-left testimonials_header">
          <h2 className="text-uppercase pl-5">
            TESTIMONIALS
          </h2>
        </div>
      </div>
      <div className="col-12">
        <div className="owl-carousel owl-theme owl-one">
          <div className="item">
            <div className="card border-0">
              <div className="row testimonials-stars">
                <div className="col-12 text-right">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                </div>
              </div>
              <div className="row user-info">
                <div className="col-3 pr-0">
                  <img src="/debug/img/avatar-1-128.png" className="img-fluid" alt="user" />
                </div>
                <div className="col-9 m-auto">
                  <h3 className="mb-0">
                    Matti Virtanen
                  </h3>
                  <p className="mb-0">
                    Entrepreneur
                  </p>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  We are very satisfied and happy to have found STO Digital as our development partner. They are true
                  professionals.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card border-0">
              <div className="row testimonials-stars">
                <div className="col-12 text-right">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                </div>
              </div>
              <div className="row user-info">
                <div className="col-3 pr-0">
                  <img src="/debug/img/avatar-1-128.png" className="img-fluid" alt="user" />
                </div>
                <div className="col-9 m-auto">
                  <h3 className="mb-0">
                    Jari Korhonen
                  </h3>
                  <p className="mb-0">
                    Entrepreneur
                  </p>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  I am very impressed by the quality of the team working on our project and the team displays a real
                  understanding of our issues.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card border-0">
              <div className="row testimonials-stars">
                <div className="col-12 text-right">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                </div>
              </div>
              <div className="row user-info">
                <div className="col-3 pr-0">
                  <img src="/debug/img/avatar-1-128.png" className="img-fluid" alt="user" />
                </div>
                <div className="col-9 m-auto">
                  <h3 className="mb-0">
                    Mikko Mäkinen
                  </h3>
                  <p className="mb-0">
                    Entrepreneur
                  </p>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  I like the professionalism STO Digital has and the companies attentive nature. They deliver the
                  product on time.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card border-0">
              <div className="row testimonials-stars">
                <div className="col-12 text-right">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                </div>
              </div>
              <div className="row user-info">
                <div className="col-3 pr-0">
                  <img src="/debug/img/avatar-1-128.png" className="img-fluid" alt="user" />
                </div>
                <div className="col-9 m-auto">
                  <h3 className="mb-0">
                    Antti Nieminen
                  </h3>
                  <p className="mb-0">
                    Entrepreneur
                  </p>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  STO Digital has developed a good understanding of our own vision and work flows. I would easily
                  recommend them for any of my projects
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card border-0">
              <div className="row testimonials-stars">
                <div className="col-12 text-right">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                </div>
              </div>
              <div className="row user-info">
                <div className="col-3 pr-0">
                  <img src="/debug/img/avatar-1-128.png" className="img-fluid" alt="user" />
                </div>
                <div className="col-9 m-auto">
                  <h3 className="mb-0">
                    Juho Heikkinen
                  </h3>
                  <p className="mb-0">
                    Entrepreneur
                  </p>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  It has been a pleasure working with STO Digital team. The company is thorough, hard working and devoted
                  to the goals of any given project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <section className="touch services-sec">
	<div className="container-fluid">
		<div className="row">
			<div className="col-12 text-center">
			    <h1 className="text-uppercase mt-5 font-weight-bold"> 
				    HOW DOES IT WORK 
				</h1>
				<div className="h-line"></div>
			</div>
			<div className="col-md-6 d-flex m-auto justify-content-center order-2 order-md-1">
				<div className="touch-form" data-aos="fade-right" data-aos-duration="1000">

				<div className="row">
                <div className="col-12">
                    <div id="accordion" className="myaccordion">
                        <div className="card card-shadow-services mb-3">
                            <div className="card-header border-0 p-0" id="headingOne">
                                <h2 className="mb-0 panel-title">
                                    <a className="border-0 d-flex align-items-center justify-content-between btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									      Software Development
                                    </a>
                                </h2>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                   <p>
								        We provide full-cycle software development service encompassing requirements...
								   </p>
								   <a href="/Software-Development-Company-in-Vantaa" className="btn-card btn know-more-btn">
									   Know More
								   </a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-shadow-services mb-3">
                            <div className="card-header  border-0 p-0" id="headingTwo">
                                <h2 className="mb-0 panel-title">
                                    <a className="border-0 d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									      Software Testing
                                    </a>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">
								    <p>
										We help companies to focus on core business by taking over complete responsibility...	
	 							   </p>
								    <a href="/software-testing-company-in-vantaa" className="btn-card btn know-more-btn">
									   Know More
								   </a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-shadow-services mb-3">
                            <div className="card-header border-0 p-0" id="headingThree">
                                <h2 className="mb-0 panel-title">
                                    <a className="border-0 d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									     Digital Marketing
                                    </a>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div className="card-body">
								   <p>
     								   With commerce and businesses moving to the digital, businesses need to...
	 							   </p>
								    <a href="/digital-marketing-company-in-vantaa" className="btn-card btn know-more-btn">
									   Know More
								   </a>
                                </div>
                            </div>
						</div>
						<div className="card card-shadow-services mb-3">
                            <div className="card-header border-0 p-0" id="headingfour">
                                <h2 className="mb-0 panel-title">
                                    <a className="border-0 d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
									   Social Media Marketing
                                    </a>
                                </h2>
                            </div>
                            <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                                <div className="card-body">
								   <p>
								     Social media marketing, or SMM, is a form of internet marketing that involves...	 							   </p>
								    <a href="/Social-Media-Marketing-Company-Vantaa" className="btn-card btn know-more-btn">
									   Know More
								   </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

				</div>
			</div>

			<div className="col-md-6 d-flex m-auto justify-content-center order-1 order-md-2">
				<div className="row">
					<div className="col-12 text-center" data-aos="fade-left" data-aos-duration="1000">
						
						<picture>
							<source srcSet="/debug/img/11-work@3x.png" media="(min-width: 1198px)" />
							<source srcSet="/debug/img/11-work@2x.png" media="(min-width: 767px)" />
							<source srcSet="/debug/img/11-work.png" media="(min-width: 577px)" />
							<img srcSet="/debug/img/11-work@2x.png" className="card-img-top img-fluid" alt="get in touch" />
						</picture>
					</div>
				</div>
			</div>

		</div>
	</div>
</section> */}

    </>
  );
}

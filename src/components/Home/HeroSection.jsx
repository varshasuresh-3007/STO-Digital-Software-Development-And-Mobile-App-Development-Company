import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    title: "Transform Your Business with AI & Machine Learning",
    desc: "Build smarter, faster, and scalable solutions with cutting-edge AI technologies. From automation to predictive intelligence, we turn data into growth."
  },
  {
    title: "Application Development",
    desc: "We provide full-cycle software development service encompassing planning, requirements definition, design and prototyping, software development, testing, deployment and application maintenance."
  },
  {
    title: "Analytical Reporting",
    desc: "Acquiring and utilising accurate information in the form of analytical data is fundamental to many. We at STO Digital give consistent reporting that incorporates analysis of various factors and performance based on the results."
  },
  {
    title: "Digital Marketing",
    desc: "STO Digital is an advanced digital marketing company in Vantaa that enables brands to communicate and interface with their audiences in a much better way through entire computerized transformation."
  },
  {
    title: "SOFTWARE ROBUSTNESS",
    desc: "We help companies to focus on core business by taking over complete responsibility. We provide both black-box and white-box testing support on demand."
  }
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="cta">
        <div className="container-fluid">
          <div className="row">
            <div className="col-7 col-md-6 cta-img">
              <div className="content-center" data-aos="fade-right">
                <div id="carouselExampleIndicators" className="carousel slide">
                  <ol className="carousel-indicators indicator-manual">
                    {HERO_SLIDES.map((_, idx) => (
                      <li 
                        key={idx}
                        className={activeIndex === idx ? 'active' : ''}
                        onClick={() => setActiveIndex(idx)}
                        style={{ cursor: 'pointer' }}
                      ></li>
                    ))}
                  </ol>
                  <div className="carousel-inner">
                    {HERO_SLIDES.map((slide, idx) => (
                      <div 
                        key={idx}
                        className={`carousel-item carousel-item-height ${activeIndex === idx ? 'active' : ''}`}
                        style={{
                          display: activeIndex === idx ? 'block' : 'none',
                          opacity: activeIndex === idx ? 1 : 0,
                          transition: 'opacity 0.6s ease-in-out'
                        }}
                      >
                        <h2>{slide.title}</h2>
                        <p>{slide.desc}</p>
                        <button className="btn btn-common_white mt-sm-3 px-4 text-uppercase" data-toggle="modal" data-target="#quote-request">Know More</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 image-scroller">
              <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop playsInline>
                  <source src="/debug/img/Comp_1.mp4" type="video/mp4" />
                  Your browser is not supported!
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

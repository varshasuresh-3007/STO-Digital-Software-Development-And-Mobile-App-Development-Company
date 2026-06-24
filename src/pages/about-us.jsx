import React, { useEffect } from 'react';

export default function AboutUs() {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

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

    // Refresh AOS animations
    if (window.AOS) {
      window.AOS.init();
      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      
    <img src="/debug/img/Vector_Smart_Object30.svg" alt="vector-smart-object" className="back-img img-fluid" />

<section className="about" id="about">

    <div className="container-fluid">
        <div className="row about-img">
            <img src="/debug/img/about_hero_banner.png" className="img-fluid" alt="About image" style={{ maxHeight: '450px', width: '100%', objectFit: 'cover' }} />

                <h1 className="text-center">Get to know STO Digital</h1>

        </div>
    </div>

        
        <div className="container about-info">

            <div className="p-4 about-para">
                <h2 className="text-center pb-2">ABOUT US</h2>
                <p className="text-justify">
					STO Digital is a fast-growing IT Company that provides holistic IT solutions to
					businesses across geographies
					We offer IT expertise in software, website, and application (iOS &amp; Android) development;
					UI/UX design; and digital marketing. We are situated at around 12 service locations, serving
					businesses belonging to various sectors. So long, we have forayed into healthcare, food
					services, travel &amp; tourism, logistic &amp; shipping, e-commerce, banking, technology,
					manufacturing, and IT-enabled education service industries so far.
					Currently, we have a team of highly skilled IT professionals that work round the clock to
					ensure STO Digital stays true to its offerings &amp; commitments. Our team of experienced experts
					includes software developers, web developers, designers, and digital marketing experts.
				</p>
            </div>

            <div className="p-4 about-difference">
                <h2 className="text-center pb-2">What makes us different? / Why us? / Why STO Digital?</h2>
                <p className="text-justify">
					We, at STO Digital, believe in working in partnerships with our clients. Each of our clients is
					equally important to us and we collaborate, to understand their unique needs and working
					methods. We consistently interact and work together to create intelligent solutions that meet
					our client’s evolving business demands. And thus, provide quick turnarounds by following
					this collaborative style of working. We have been continuously bridging the gap between
					business and technology.
				</p>
                <p className="text-justify">
					We believe that communication is the key and our team of experts always follows this
					principle. We carry out constant communication between team members and clients, ensuring
					transparency. This also enables us to get greater insights as well as trust from all our clients.
					All of our projects are delivered at the stated times and our services come within a rather
					affordable range.
				</p>
                <p className="text-justify">
					Our development process is seamlessly carried out and it follows a systematic approach – We
					begin with signing a Non-Disclosure Agreement (NDA) with the client. Post which process
					and documentation is done. The responsibilities are shared among the team member to ensure
					a timely and smooth progression of the project. Proper scheduling is done of the whole
					process and we also carry out frequent reporting to keep everyone (including the clients)
					within the loop. We have a completely agile approach and get continuous client feedback and
					output, and accordingly change and progress with our development. This is why we can take
					on complex projects that other developers may perceive as difficult, making us one of the
					best software developers out there.
				</p>

            </div>

        </div>

        

        <div className="container-fluid scrolling-about">
            <h3 className="text-center mission-head">Mission</h3>
            <div className="vertical-line">

                <div className="mission" id="mission" data-aos="fade-right">
                     <p className="p-4 mb-0 text-justify">
						 Our mission is to provide innovative software solutions for excellence and enterprise
						 compliance.
					 </p>
                </div>

                <h3 className="text-center mission-head vision-head">Vision</h3>

                <div className="vision" id="vision" data-aos="fade-left">
                    <p className="p-4 text-justify">Our vision is to become businesses’ first choice when it comes to software development and maintenance. To accomplish this, we always try to exceed our client’s expectations. STO Digital strives to build lasting partnerships and ensures client satisfaction.</p>
                </div>
            </div>
        </div>

        <div className="container noscroll-about">
            <div className="row mb-3">
                <div className="col-12 px-0">
                    <h3 className="text-center no-mission p-4 mb-0">Mission</h3>
                </div>
                <div className="col-12 px-0">
                    <p className="text-justify p-4 mb-0 no-mission-p">
                        Our mission is to provide innovative software solutions for excellence and enterprise compliance.
                    </p>
                </div>
            </div>
        </div>
        <div className="container noscroll-about">
            <div className="row mb-3">
                <div className="col-12 px-0">
                    <h3 className="text-center no-vision p-4 mb-0">Vision</h3>
                </div>
                <div className="col-12 px-0">
                    <p className="text-justify p-4 mb-0 no-vission-p">
						Our vision is to become the first choice of businesses when it comes to software development
						and maintenance. To accomplish this, STO Digital strives to exceed our client’s expectations
						and ensure their satisfaction. We believe in building long-lasting partnerships.
                    </p>
                </div>
            </div>
        </div>

</section>


    </>
  );
}

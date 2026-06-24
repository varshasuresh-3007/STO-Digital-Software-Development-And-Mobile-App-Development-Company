import React, { useEffect, useState } from 'react';
import { sendEnquiryEmail } from '../utils/email';

export default function SoftwareConsultantInVantaa() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Software Consulting Services | Software Consultant In Vantaa";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "STO Digital follows a consulting-driven approach in our software development process. Considering the importance of education, leadership, and skill development in the hyper-competitive world, we provide many IT-enabled educational services.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "STO Digital follows a consulting-driven approach in our software development process. Considering the importance of education, leadership, and skill development in the hyper-competitive world, we provide many IT-enabled educational services.");
      document.head.appendChild(metaDesc);
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('contact_fname');
    const email = formData.get('contact_email');
    const phone = formData.get('contact_phone');
    const message = formData.get('contact_message');
    const lead_url = formData.get('lead_url') || '/software-consultant-in-vantaa';

    if (!name || !email || !phone) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await sendEnquiryEmail({ name, email, phone, message, lead_url });
      e.target.reset();

      const snackbar = document.getElementById('snackbar');
      if (snackbar) {
        snackbar.className = 'show';
        snackbar.innerText = 'Enquiry Sent Successfully!';
        setTimeout(() => {
          snackbar.className = snackbar.className.replace('show', '');
        }, 3000);
      }
    } catch (err) {
      setError('Failed to send enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      
	
	<section className="consult__banner d-flex align-items-center justify-content-center">
		<div className="container">
			<div className="row">
				<div className="col-12 text-center text-white" data-aos="fade-up" data-aos-duration="1500">
					<h1>SOFTWARE CONSULTANT IN VANTAA</h1>
					<p>
						STO Digital is a fast-growing IT Company that provides holistic IT solutions to businesses across
						geographies We offer IT expertise in software, website, and application (iOS &amp; Android) development; UI/UX
						design; and digital marketing. We are situated at around 12 service locations, serving businesses belonging
						to
						various sectors. So long, we have forayed into healthcare, food services, travel &amp; tourism, logistic &amp;
						shipping, e-commerce, banking, technology, manufacturing, and IT-enabled education service industries so
						far.
						Currently, we have a team of highly skilled IT professionals that work round the clock to ensure STO Digital
						stays true to its offerings &amp; commitments. Our team of experienced experts includes software developers, web
						developers, designers, and digital marketing experts.
					</p>
					<button className="btn btn-common_white mt-sm-3 px-4 text-uppercase" data-toggle="modal" data-target="#quote-request">Contact Us</button>
				</div>
			</div>
		</div>
	</section>
	
	
	<section className="consult__services py-30">
		<div className="container">
			<div className="row" data-aos="fade-up" data-aos-duration="1500">
				<div className="col-md-12">
					<h5 className="text__primary">IT CONSULTING SERVICES</h5>
					<div className="h-line h--line"></div>
				</div>
				<div className="col-12">
					<h6>
						We Handle All Your IT Challenges
					</h6>
					<p className="f-15">
						We, at sto-digital, understand that every client who decides to implement a new Software Solution essentially
						wants to enhance their business performance &amp; overall progress. Our IT Consulting team studies your business
						requirements &amp; processes carefully. We then help you trace your exact software requirements and business
						problem areas that can be effectively managed by innovative software solutions.
					</p>
				</div>
			</div>
			<div className="row">
				
				<div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="3800">
					<a href="/Software-Development-Company-in-Vantaa" target="_blank" className="consult__card__link">
						<div className="card consult__card border-0">
							<div className="consult__card__icon d-flex justify-content-center align-items-center">
								<img src="/debug/img/service-img0ne.svg" alt="service icon" width="40" height="40" />
							</div>
							<div className="card-body consult__card__body">
								<h4>Software development</h4>
								<div className="h-line h__line h__line-left"></div>
								<p className="f-15">
									It is a process involving the creation, maintenance of applications, frameworks of software, design,
									programming, testing, and bug fixing.
								</p>
							</div>
						</div>
					</a>
				</div>
				
				
				<div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="3950">
					<a href="/mobile-app-development-company-in-Vantaa" target="_blank" className="consult__card__link">
						<div className="card consult__card border-0">
							<div className="consult__card__icon d-flex justify-content-center align-items-center">
								<img src="/debug/img/service-imgtwo.svg" alt="service icon" width="40" height="40" />
							</div>
							<div className="card-body consult__card__body">
								<h4>Mobile App Development</h4>
								<div className="h-line h__line  h__line-left"></div>
								<p className="f-15">
									It is the act of developing app suitable for mobile devices that involve writing software for small,
									wireless computing devices.
								</p>
							</div>
						</div>
					</a>
				</div>
				
				
				<div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="4050">
					<a href="/Website-Development-Company-in-Vantaa" target="_blank" className="consult__card__link">
						<div className="card consult__card border-0">
							<div className="consult__card__icon d-flex justify-content-center align-items-center">
								<img src="/debug/img/service-imgthree.svg" alt="service icon" width="40" height="40" />
							</div>
							<div className="card-body consult__card__body">
								<h4>Website Development</h4>
								<div className="h-line h__line  h__line-left"></div>
								<p className="f-15">It involves building and maintaining the websites; it makes the website look great,
									works
									quickly with firm user experience.
								</p>
							</div>
						</div>
					</a>
				</div>
				
				
				<div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="3800">
					<a href="/CRM-software-development-company-Vantaa" target="_blank" className="consult__card__link">
						<div className="card consult__card border-0">
							<div className="consult__card__icon d-flex justify-content-center align-items-center">
								<img src="/debug/img/service-imgfour.svg" alt="service icon" width="40" height="40" />
							</div>
							<div className="card-body consult__card__body">
								<h4> CRM Software Development</h4>
								<div className="h-line h__line  h__line-left"></div>
								<p className="f-15">It is the tool or technique that helps companies make a healthy relationship with their
									customers by organizing the data.
								</p>
							</div>
						</div>
					</a>
				</div>
				
				
				<div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="3950">
					<a href="/ui-ux-design-company-in-vantaa" target="_blank" className="consult__card__link">
						<div className="card consult__card border-0">
							<div className="consult__card__icon d-flex justify-content-center align-items-center">
								<img src="/debug/img/service-imgfive.svg" alt="service icon" width="40" height="40" />
							</div>
							<div className="card-body consult__card__body">
								<h4>
									UI / UX Designing</h4>
								<div className="h-line h__line  h__line-left"></div>
								<p className="f-15">It increases the user experience and customer satisfaction, which ultimately increases
									the
									number of customers, resulting in the growth of the business.
								</p>
							</div>
						</div>
					</a>
				</div>
				
				
				<div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="4050">
					<a href="/digital-marketing-company-in-vantaa" target="_blank" className="consult__card__link">
						<div className="card consult__card border-0">
							<div className="consult__card__icon d-flex justify-content-center align-items-center">
								<img src="/debug/img/service-imgsix.svg" alt="service icon" width="40" height="40" />
							</div>
							<div className="card-body consult__card__body">
								<h4>Digital Marketing</h4>
								<div className="h-line h__line  h__line-left"></div>
								<p className="f-15">It is a strategy that uses multiple channels to attract engage and convert customers
									online.
								</p>
							</div>
						</div>
					</a>
				</div>
				
			</div>
		</div>
	</section>
	
	
	<section className="py-30 consult__contact d-flex justify-content-center align-items-center">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center" data-aos="fade-up" data-aos-duration="1500">
					<p className="text-white">Looking for expert help for your custom software development project? Get in touch for a
						free quote.</p>
					<button className="btn btn-common_white mt-sm-3 px-4 text-uppercase" data-toggle="modal" data-target="#quote-request">Contact Us</button>
				</div>
			</div>
		</div>
	</section>
	
	
	<section className="consult__solution py-30">
		<div className="container">
			<div className="row">
				<div className="col-md-12" data-aos="fade-up" data-aos-duration="1500">
					<h5 className="text__primary">SOLUTION</h5>
					<div className="h-line h--line"></div>
				</div>
				<div className="col-12" data-aos="fade-up" data-aos-duration="1500">
					<h6>
						Our Robust IT Solutions
					</h6>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="3800">
					
					<div className="card solution__card">
						<div className="solution__card__icon">
							<i className="fa fa-file-code-o"></i>
						</div>
						<div className="card-body solution__card__body p-0 text-center">
							<h5 className="solution__card__title">
								CUSTOM SOFTWARE DEVELOPMENT
							</h5>
							<p className="f-14">
								Delivering a powerful software development solution using the right leading-edge technology for market
								leaders &amp; growing businesses.
							</p>
						</div>
					</div>
					
				</div>
				<div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="3950">
					
					<div className="card solution__card">
						<div className="solution__card__icon">
							<i className="fa fa-cube"></i>
						</div>
						<div className="card-body solution__card__body p-0 text-center">
							<h5 className="solution__card__title">
								PRODUCT DEVELOPMENT
							</h5>
							<p className="f-14">
								Delivering human-focused, market-ready digital products with our 360° development approach to accelerate
								your business growth.
							</p>
						</div>
					</div>
					
				</div>
				<div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="4050">
					
					<div className="card solution__card">
						<div className="solution__card__icon">
							<i className="fa fa-mobile"></i>
						</div>
						<div className="card-body solution__card__body p-0 text-center">
							<h5 className="solution__card__title">
								MOBILE APP DEVELOPMENT
							</h5>
							<p className="f-14">
								Building native &amp; hybrid mobile applications using different platforms (Android, iOS) to empower your
								business in the mobile-first world.
							</p>
						</div>
					</div>
					
				</div>
				<div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="3800">
					
					<div className="card solution__card">
						<div className="solution__card__icon">
							<i className="fa fa-users"></i>
						</div>
						<div className="card-body solution__card__body p-0 text-center">
							<h5 className="solution__card__title">
								DEDICATED TEAMS
							</h5>
							<p className="f-14">
								Leverage the best resources for your project by hiring skilled and experienced dedicated engineers
								across
								niche &amp; cutting-edge technologies.
							</p>
						</div>
					</div>
					
				</div>
				<div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="3950">
					
					<div className="card solution__card">
						<div className="solution__card__icon">
							<i className="fa fa-cubes"></i>
						</div>
						<div className="card-body solution__card__body p-0 text-center">
							<h5 className="solution__card__title">
								BLOCKCHAIN DEVELOPMENT
							</h5>
							<p className="f-14">
								Delivering custom blockchain solutions for businesses to leverage faster, cheaper &amp; transparent
								transactions that enable high-value business models.
							</p>
						</div>
					</div>
					
				</div>
				<div className="col-md-4 mt-4" data-aos="zoom-in" data-aos-duration="4050">
					
					<div className="card solution__card">
						<div className="solution__card__icon">
							<i className="fa fa-cogs"></i>
						</div>
						<div className="card-body solution__card__body p-0 text-center">
							<h5 className="solution__card__title">
								AI AND ML SOLUTION
							</h5>
							<p className="f-14">
								Providing innovative AI and ML solutions to delight your customers and helping your business to run
								faster
								&amp; smoother to achieve tangible business growth.
							</p>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</section>
	
	
	<section className="consult__why py-30">
		<div className="container">
			<div className="row" data-aos="fade-up" data-aos-duration="1500">
				<div className="col-md-12">
					<h5 className="text-white">WHY STO DIGITAL</h5>
					<div className="h-line h--line"></div>
				</div>
				<div className="col-12">
					<h6 className="text-white">
						Transparent &amp; Efficient Processes
					</h6>
					<p className="f-15 text-white consult__para">
						Leading enterprises, startups, and agencies rely on our custom Software development services as we stay true
						to ourselves while delivering best results for them.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-3 whycard__parent" data-aos="fade-up" data-aos-duration="3800" data-aos-delay="100">
					
					<div className="card card__small">
						<img src="/debug/img/bt.webp" width="50" height="50" alt="sto-digital" className="mx-auto" />
						<p className="text-white my-2 h3 text-center">Build Integrity &amp; Transparency</p>
						
					</div>
					
				</div>
				<div className="col-md-3 whycard__parent" data-aos="fade-up" data-aos-duration="3950" data-aos-delay="150">
					
					<div className="card card__small">
						<img src="/debug/img/dlvry.webp" width="50" height="50" alt="sto-digital" className="mx-auto" />
						<p className="text-white my-2 h3 text-center">Deliver Perfect Solution</p>
						
					</div>
					
				</div>
				<div className="col-md-3 whycard__parent" data-aos="fade-up" data-aos-duration="4050" data-aos-delay="210">
					
					<div className="card card__small">
						<img src="/debug/img/why2.webp" width="50" height="50" alt="sto-digital" className="mx-auto" />
						<p className="text-white my-2 h3 text-center">Practice <br />Agility</p>
						
					</div>
					
				</div>
				<div className="col-md-3 whycard__parent" data-aos="fade-up" data-aos-duration="5000" data-aos-delay="260">
					
					<div className="card card__small">
						<img src="/debug/img/innovation.webp" width="50" height="50" alt="sto-digital" className="mx-auto" />
						<p className="text-white my-2 text-center h3">Compel Innovation</p>
						
					</div>
					
				</div>
			</div>
		</div>
	</section>
	
	
	<section className="hiring__models py-30">
		<div className="container">
			<div className="row" data-aos="fade-up" data-aos-duration="1500">
				<div className="col-md-12">
					<h5 className="text__primary">HIRING MODELS</h5>
					<div className="h-line h--line"></div>
				</div>
				<div className="col-12">
					<h6>
						Customized To Meet Diverse Needs Of Our Clients
					</h6>
					<p className="f-15">
						STO Digital offers IT consulting services to help you accomplish your next project with less stress and less
						cost. We offer the flexibility to select the most suitable hiring model for all our clients.
					</p>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-md-4 mt-4">
					<div className="card hiring__card border-0">
						<div className="hiring__card__icon d-flex justify-content-center align-items-center mx-auto">
							<img src="/debug/img/team.webp" alt="sto-digital" />
						</div>
						<div className="hiring__card__body">
							<h5 className="text-center">Dedicated Team</h5>
							<div className="h-line h__line mx-auto"></div>
							<p className="f-14 text-center">
								If you represent an organization with a challenge that wants dedicated attention, ask about dedicated
								teams. It’s a pay-as-you-go monthly continuing contract.
							</p>
							<ul className="list-unstyled">
								<li className="list-style-none f--13">
									<div className="check_blue"></div> No hidden costs
								</li>
								<li className="list-style-none f--13">
									<div className="check_blue"></div> Monthly Billing
								</li>
								<li className="list-style-none f--13">
									<div className="check_blue"></div> Fixed hours of part &amp; full time
								</li>
								<li className="list-style-none f--13">
									<div className="check_blue"></div> Pay Only for Significant Work
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-4 mt-4">
					<div className="card hiring__card border-0">
						<div className="hiring__card__icon d-flex justify-content-center align-items-center mx-auto">
							<img src="/debug/img/pa.webp" alt="sto-digital" />
						</div>
						<div className="hiring__card__body">
							<h5 className="text-center">Controlled Agile</h5>
							<div className="h-line h__line mx-auto"></div>
							<p className="f-14 text-center">
								The controlled agile engagement model fit best for those who have a restricted budget &amp; still wants some
								flexibility in the project tasks.
							</p>
							<ul className="list-unstyled">
								<li className="list-style-none f--13">
									<div className="check_blue"></div> No hidden costs
								</li>
								<li className="list-style-none f--13">
									<div className="check_blue"></div> Agile Team
								</li>
								<li className="list-style-none f--13">
									<div className="check_blue"></div> Optimum flexibility
								</li>
								<li className="list-style-none f--13">
									<div className="check_blue"></div> Complete control over budget
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-4 mt-4">
					<div className="card hiring__card border-0">
						<div className="hiring__card__icon d-flex justify-content-center align-items-center mx-auto">
							<img src="/debug/img/timecr.webp" alt="sto-digital" />
						</div>
						<div className="hiring__card__body">
							<h5 className="text-center">Time &amp; Material</h5>
							<div className="h-line h__line mx-auto"></div>
							<p className="f-14 text-center">
								If you represent an organization with endless projects requirements &amp; need ongoing work, ask about
								hourly.
								It’s a pay-as-you-go hour wise continuing contract.
							</p>
							<ul className="list-unstyled">
								<li className="list-style-none f--13">
									<div className="check_blue"></div> No hidden costs
								</li>
								<li className="list-style-none f--13">
									<div className="check_blue"></div> Monthly billing
								</li>
								<li className="list-style-none f--13">
									<div className="check_blue"></div> Requirement based working hours
								</li>

							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	
	<section className="case__study py-30">
		<div className="container">
			<div className="row" data-aos="fade-up" data-aos-duration="1500">
				<div className="col-md-12">
					<h5 className="text__primary">CASE STUDY</h5>
					<div className="h-line h--line"></div>
				</div>
				<div className="col-12">
					<h6>
						Solving Critical Challenges For Our Clients
					</h6>
					<p className="f-15">
						As one of the top IT outsourcing companies, we offer 360° software development services that transform our
						client's vision into actionable software solutions to accelerate their businesses growth.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active casestudy__item">
								<div className="row">
									<div className="col-md-6">
										<div className="casestudy__caption">
											<h5 className="text-white">Election Managenment System</h5>
											<p className="text-white f-15">STO Digital builds Election Management Software that has MVI programs and provides Bulk SMS options, Political Consulting and several Political Campaigning. ye content case study section me add kar do election management card me.</p>
											<h6 className="text-white f-15 mt-4">TECHNOLOGIES USED</h6>
											<p className="text-white f-14">Net MVC 5 | MS SQL Server | HTML5/CCS3 | Bootstrap JavaScript</p>
											<a href="#" className="btn btn-common_white mt-4">
												View Case Study
											</a>
										</div>
									</div>
									<div className="col-md-4 offset-md-2 mt-md-0 mt-3">
										<img src="/debug/img/Logo_final.png" className="w-100" alt="logo" />
									</div>
								</div>
							</div>
							<div className="carousel-item casestudy__item casestudy__item--red">
								<div className="row">
									<div className="col-md-6">
										<div className="casestudy__caption">
											<h5 className="text-white">Online Food Ordering and Delivery System</h5>
											<p className="text-white f-15">91 restaurant app is an online food ordering and delivery app enhance
												the online food ordering experience. It helps restaurants and cafes receive orders from
												application to grow repeat orders and revenue.</p>
											<h6 className="text-white f-15 mt-4">TECHNOLOGIES USED</h6>
											<p className="text-white f-14">Net MVC 5 | MS SQL Server | HTML5/CCS3 | Bootstrap JavaScript</p>
											<a href="#" className="btn btn-common_white mt-4">
												View Case Study
											</a>
										</div>
									</div>
									<div className="col-md-2 offset-md-2 col-8 mx-auto mt-md-0 mt-3">
										<img src="/debug/img/instantgenie.png" className="w-100" alt="logo" />
									</div>
								</div>
							</div>
						</div>
						<a className="carousel-control-prev carousel-control--prev" href="#carouselExampleControls" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next carousel-control--next" href="#carouselExampleControls" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	
	<section className="client client--e py-30">
		<div className="container bg-white">
			<div className="row" data-aos="fade-up" data-aos-duration="1500">
				<div className="col-md-12">
					<h5 className="text__primary">CLIENTS</h5>
					<div className="h-line h--line"></div>
				</div>
				<div className="col-12">
					<h6>
						Trusted By 35+ Customers Since 20016
					</h6>
					<p className="f-15">
						We have clients globally including USA, Canada, UK and retained 90% of them.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="row">
						<div className="col-12 text-center">
							<div className="row client-logos pt-5">
								<div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo.avif" className="card-img-top img-fluid" alt="Greenspace Industrial" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/surflocalnewdesignlogo.svg" className="card-img-top img-fluid" alt="Surf Local " style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/britannia-industries6604.jpg" className="card-img-top img-fluid" alt="Britannia industries limited" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_(5).svg" className="card-img-top img-fluid" alt="kurupz " style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/LOGO-1.png" className="card-img-top img-fluid" alt="Shri Chakradhar Publication " style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo.webp" className="card-img-top img-fluid" alt="Gerald Duthie Accounting LLC" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_(4).svg" className="card-img-top img-fluid" alt="Career Vista " style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/new_1.png" className="card-img-top img-fluid" alt="Trip-Tie" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_(3).svg" className="card-img-top img-fluid" alt="Newtonmarie" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_(3).png" className="card-img-top img-fluid" alt="Micro Medic" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_(2)1.png" className="card-img-top img-fluid" alt="Bietri" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_(2).svg" className="card-img-top img-fluid" alt="SmartSage" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logosvg1.svg" className="card-img-top img-fluid" alt="Talent Genie" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_(1)1.svg" className="card-img-top img-fluid" alt="Vivendoinc" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo3.svg" className="card-img-top img-fluid" alt="Dentscan" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/p_11.png" className="card-img-top img-fluid" alt="Play Pal " style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/Vi_logo_1.png" className="card-img-top img-fluid" alt="Vi Assurance" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/Fevicon.svg" className="card-img-top img-fluid" alt="AR Power" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logosvg.svg" className="card-img-top img-fluid" alt="Whytboard" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo2.svg" className="card-img-top img-fluid" alt="SettleBay " style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/MicrosoftTeams-image_(65).png" className="card-img-top img-fluid" alt="Bizex" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logoserv.svg" className="card-img-top img-fluid" alt="Serv Horizon Inc." style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/Logopluto.svg" className="card-img-top img-fluid" alt="Pluto Planet Inc." style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_(1).png" className="card-img-top img-fluid" alt="Optisych Care Inc." style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/MicrosoftTeams-image_(64).png" className="card-img-top img-fluid" alt="Wheelchair Taxi Sydney" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/MicrosoftTeams-image_(62).png" className="card-img-top img-fluid" alt="SPY Detective Agency" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/MicrosoftTeams-image_(61).png" className="card-img-top img-fluid" alt="Advance Detective Agency " style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_img6_(1).png" className="card-img-top img-fluid" alt="Careerrepo " style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logored.svg" className="card-img-top img-fluid" alt="Parkbay" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo.png" className="card-img-top img-fluid" alt="Certro portal" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_prashant.svg" className="card-img-top img-fluid" alt="Dr Prashant Website" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_(1).svg" className="card-img-top img-fluid" alt="GEM Portal" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_(10).png" className="card-img-top img-fluid" alt="Astrohelp software" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_(9).png" className="card-img-top img-fluid" alt="Total hotels management system" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo.svg" className="card-img-top img-fluid" alt="Filmibeat" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/1665474043415.png" className="card-img-top img-fluid" alt="Mentutor" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/Logo_final.png" className="card-img-top img-fluid" alt="Election Management System" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/cvtech_1-8_(2).png" className="card-img-top img-fluid" alt="Clairvoyance-Tech" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/petscape_1-8.png" className="card-img-top img-fluid" alt="PetScape" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/logo_svg.svg" className="card-img-top img-fluid" alt="Instant Genie" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/myhireeLogo.png" className="card-img-top img-fluid" alt="Myhiree" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/rda_logo_(2).png" className="card-img-top img-fluid" alt="IndianRda Careers" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/Logo.avif" className="card-img-top img-fluid" alt="ReNew " style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/APP_ICON.png" className="card-img-top img-fluid" alt="WedBuzz" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/rda_logo_(1).png" className="card-img-top img-fluid" alt="IndianRDA" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/happynotes_logo.png" className="card-img-top img-fluid" alt="Happy Notes" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/kecolor.png" className="card-img-top img-fluid" alt="Kosher East" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/smartmortage1.jpg" className="card-img-top img-fluid" alt="Smart Mortgage" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/codi_img.png" className="card-img-top img-fluid" alt="CODi" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/mudar_logo.png" className="card-img-top img-fluid" alt="MUDARORGANIC" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/bapl_logo.svg" className="card-img-top img-fluid" alt="BAPL" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/mafna.png" className="card-img-top img-fluid" alt="MAFNA" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/hurray.png" className="card-img-top img-fluid" alt="Hurrayedutech " style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/sushant_Logo.png" className="card-img-top img-fluid" alt="Sushant Travels" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/Bravo-logo2.png" className="card-img-top img-fluid" alt="BRAVO PHARMA  " style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/carelick.png" className="card-img-top img-fluid" alt="CareLick" style={{"width":"100px"}} />
										</picture>
									</div>
								</div><div className="col-6 col-sm-4 col-md-2" data-aos="flip-up" data-aos-duration="1000">
									<div className="client-box client--box">
										<picture>
											<img srcSet="/uploads/smart-repair3.png" className="card-img-top img-fluid" alt="SMART REPAIR " style={{"width":"100px"}} />
										</picture>
									</div>
								</div>							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
	
	
	{/* <section className="testimonials-new">
		<div className="container">
			<div className="row">
				<div className="col-12 text-left testimonials_header">
					<h2 className="text-uppercase pl-5" data-aos="fade-up" data-aos-duration="1500">
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
									<img src="/debug/img/Nishant_Kumar.jpeg" className="img-fluid" alt="user" />
								</div>
								<div className="col-9 m-auto">
									<h3 className="mb-0">
										Nishant Kumar
									</h3>
									<p className="mb-0">
										Bravo Pharma
									</p>
								</div>
							</div>
							<div className="card-body">
								<p className="card-text">
									STO Digital delivers services on time with no compromise in quality. Analytical skills and
									responsiveness are the quality that i like the most.
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
										Bhuvan Patil
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
										Nikhil Kumar
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
										Andrew Brooks
									</h3>
									<p className="mb-0">
										Entrepreneur
									</p>
								</div>
							</div>
							<div className="card-body">
								<p className="card-text">
									I like the professionalism STO Digital Pvt Ltd has and the companies attentive nature. They deliver the
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
										Deepak singh
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
										Adil Khan
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
	</section> */}
	
	
	<section className="faqs touch">
		<div className="container">
			<div className="row" data-aos="fade-up" data-aos-duration="1500">
				<div className="col-md-6">
					<h5 className="text__primary">FREQUENTLY ASKED QUESTION</h5>
					<div className="h-line h--line"></div>
					<h6>
						Everything About IT Consulting Services
					</h6>
					
					<section className="questions">
						
						<div className="section-center">
							
							<article className="question question_white show-text">
								
								<div className="question-title d-flex justify-content-between align-items-center">
									<button type="button" className="question-btn question-btn_p w-100 d-flex justify-content-between">
										<p className="mb-0 faq-title faq_haeder faq_haeder--sm color-black f-16 text-left">
											WHICH IT STRATEGY &amp; CONSULTING SERVICES DO YOU OFFER?
										</p>
										<span className="plus-icon">
											<i className="fa fa-plus"></i>

										</span>
										<span className="minus-icon">
											<i className="fa fa-minus"></i>
										</span>
									</button>
								</div>
								
								
								<div className="question-text faq-card-body">
									<p className="faq_para color-black f-14">
										Our IT strategists implement a variety of techniques for figure out issues in your software &amp;
										development processes and suggest the best solution consequently.
									</p>
								</div>
								
							</article>
							
							
							<article className="question question_white">
								
								<div className="question-title d-flex justify-content-between align-items-center">
									<button type="button" className="question-btn question-btn_p w-100 d-flex justify-content-between">
										<p className="mb-0 faq-title faq_haeder color-black faq_haeder--sm  f-16 text-left">
											HOW TO CHOOSE A COST-EFFECTIVE IT CONSULTING FIRM FOR A STARTUPS?
										</p>
										<span className="plus-icon">
											<i className="fa fa-plus"></i>
										</span>
										<span className="minus-icon">
											<i className="fa fa-minus"></i>
										</span>
									</button>
								</div>
								
								
								<div className="question-text faq-card-body">
									<p className="faq_para color-black f-14">
										To find the top IT strategy &amp; software consulting firm you first need to analyse some point
										including the experience of the firm, cost-effectiveness and does they are specialized in the
										technology you are looking for. We anticipate the output of the technology choice and offer advice
										on how to meet your business goal with minimal investments.
									</p>
								</div>
								
							</article>
							
							
							<article className="question question_white">
								
								<div className="question-title d-flex justify-content-between align-items-center">
									<button type="button" className="question-btn question-btn_p w-100 d-flex justify-content-between">
										<p className="mb-0 faq-title faq_haeder faq_haeder--sm  color-black f-16 text-left">WHAT TYPE OF CLIENTS
											HAVE YOU WORKED WITH?
										</p>
										<span className="plus-icon">
											<i className="fa fa-plus"></i>

										</span>
										<span className="minus-icon">
											<i className="fa fa-minus"></i>
										</span>
									</button>
								</div>
								
								
								<div className="question-text faq-card-body">
									<p className="faq_para color-black f-14">
										We have clients from education, finance, healthcare, travel, logistic, media, automotive and retail.
									</p>
								</div>
								
							</article>
							
							
							<article className="question question_white">
								
								<div className="question-title d-flex justify-content-between align-items-center">
									<button type="button" className="question-btn question-btn_p w-100 d-flex justify-content-between">
										<p className="mb-0 faq-title faq_haeder faq_haeder--sm  color-black f-16 text-left">
											WHAT DOES SOFTWARE CONSULTANTS DO?
										</p>
										<span className="plus-icon">
											<i className="fa fa-plus"></i>
										</span>
										<span className="minus-icon">
											<i className="fa fa-minus"></i>
										</span>
									</button>
								</div>
								
								
								<div className="question-text faq-card-body">
									<p className="faq_para color-black f-14">
										An IT consultant works in collaboration with clients &amp; guides them on how to use technology to meet
										their business goals or overcome IT challenges. They work to enhance the structure and competence of
										IT systems for various companies.
									</p>
								</div>
								
							</article>
							

						</div>
					</section>
					
				</div>
				<div className="col-md-6 d-flex m-auto justify-content-center order-2 order-md-1">
					<div className="touch-form" data-aos="fade-right" data-aos-duration="1000">
						<form id="contact_form" onSubmit={handleSubmit}>

							<input type="hidden" name="lead_url" defaultValue="/software-consultant-in-vantaa" />

							<input type="hidden" name="enquiry" defaultValue="1" />

							<div className="row">
								<div className="col-12 text-center">
									<h4 className="text-capitalize">
										Share your query and contact
									</h4>
								</div>
								<div className="col-12">
									<div className="form-group">
										<input type="text" className="form-control" id="name" placeholder="Name" name="contact_fname" required="" />
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<input type="email" className="form-control" id="email" placeholder="Email" name="contact_email" required="" />
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<input type="text" className="form-control" id="mobile" placeholder="Phone No" minLength="10" maxLength="16" onKeyPress={(e) => { if (window.validate) window.validate(e); }} name="contact_phone" required="" />
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<textarea className="form-control" rows="5" id="msg" placeholder="Message" name="contact_message"></textarea>
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<div className="g-recaptcha" data-sitekey="6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN"></div>
									</div>
								</div>
								<div className="col-12">
									{error && <span style={{"color":"red", "display":"block", "marginBottom":"8px"}}>{error}</span>}
									<button type="submit" disabled={loading} className="btn w-100 text-uppercase add_contact_pop_up_button">
										{loading ? 'Sending...' : 'Submit'} <span className="add_contact_pop_up_fa_spin_icon"></span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	

    </>
  );
}

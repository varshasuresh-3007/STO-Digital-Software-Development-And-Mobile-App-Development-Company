import React, { useEffect } from 'react';

export default function RecruitmentService() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "IT Recruitments Jobs | It Recruitment Openings";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Apply for best IT Jobs, Check out latest ✓ It Recruitments job vacancies @sto-digital.com with eligibility etc. Explore IT recruitment openings in your desired locations now");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "Apply for best IT Jobs, Check out latest ✓ It Recruitments job vacancies @sto-digital.com with eligibility etc. Explore IT recruitment openings in your desired locations now");
      document.head.appendChild(metaDesc);
    }

    if (window.AOS) {
      window.AOS.init();
      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      
   <section className="recruitment__topbanner d-flex align-items-center justify-content-center">
      <div className="container">
         <div className="row">
            <div className="col-md-6">
               <div>
                  <h1>Recruitment <br /> Service</h1>
                  <p>Are you currently recruiting? Or are you simply looking for any information and advice relating to recruitment? Well, we are here to help. We specialize in professional recruitment services and can find for you the perfect  - temporary, contract, as well as permanent – candidates. We have a vast network, a perfect approach, and the necessary experience to help you fill in all roles while saving your effort, time, and money.</p>
                  
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="about__sto-digital bg__common gap__common">
      <div className="container">
         <div className="row">
            <div className="col-md-6 d-flex justify-content-center mb-md-auto mb-3">
               <img src="/debug/img/about__banner.png" alt="about sto-digital" className="w-mob-100" />
            </div>
            <div className="col-md-6 d-flex align-items-center ">
               <div className="about__content">
                  <h4>About STO Digital</h4>
                  <p>STO Digital Pvt Ltd has competence in <br /> Recruitment &amp; Professional Staffing. In five <br /> years, it has acquired unique capabilities to locate, <br /> recruit and retain the right talent and obtain the <br /> highest possible level of customer’s satisfaction.</p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="vendor__diff gap__common">
      <div className="container">
         <div className="row">
            <div className="col-md-12 text-center">
               <h2 className="text-white">How STO Digital Is Different From Other <br /> Vendors?</h2>
            </div>
         </div>
         <div className="row mt-4">
            <div className="col-md-6 mb-4">
               <div className="card diff__detailsCard border-0">
                  <div className="d-flex align-items-center">
                     <img src="/debug/img/diff1.svg" className="mr-2" width="65" height="65" alt="Differnciation" />
                     <div>
                        <h6>We work closely with clients with assigned SPOC for quick T.A.T.</h6>
                        <p>Our specially assigned SPOC ensures fast, flexible, and focused operations. We love working on close terms with our clients, avoiding any miscommunication, and angle for perfect coordination through our SPOC. Thus we are easily able to reduce the TurnAround Time so that a rightful candidate accepts the offer for a position earliest since the opening of the position.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-6 mb-4">
               <div className="card diff__detailsCard border-0">
                  <div className="d-flex align-items-center">
                     <img src="/debug/img/diff2.svg" className="mr-2" width="65" height="65" alt="Differnciation" />
                     <div>
                        <h6>We maintain our own database with updated tracker.</h6>
                        <p>We have our client database which we continuously maintain through routine and check for any hardware or data faults. With continuous internal updates and an updated tracker, we can track any data at any point in time, thus ultimately providing Customer Satisfaction which is our core focus.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-6 mb-4">
               <div className="card diff__detailsCard border-0">
                  <div className="d-flex align-items-center">
                     <img src="/debug/img/diff3.svg" className="mr-2" width="65" height="65" alt="Differnciation" />
                     <div>
                        <h6>We are experts in Social Media recruitment.</h6>
                        <p>We understand that potential candidates – either actively or passively – frequent the digital social media platforms. We have relevant experience and have become experts in attracting such candidates through the perfect combination of Social Media Recruitment as well as employer branding.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-6 mb-4">
               <div className="card diff__detailsCard border-0">
                  <div className="d-flex align-items-center">
                     <img src="/debug/img/diff4.svg" className="mr-2" width="65" height="65" alt="Differnciation" />
                     <div>
                        <h6>Our team has and expertise in negotiation and rapport building with candidates</h6>
                        <p>Our experienced team has outstanding communication, negotiation, and rapport-building skills. We ensure that the prospective candidates are able to connect with us, while maintaining complete honesty and transparency with both parties – our clients as well as the candidates. </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="our__services gap__common bg__common">
      <div className="container">
         <div className="row">
            <div className="col-md-12 text-center">
               <h3>Our Services</h3>
            </div>
         </div>
         <div className="row mt-4">
            <div className="col-md-4 mb-md-auto mb-4">
               <div className="card service__new-card border-0">
                  <div className="img-box card__imgbox">
                     <img src="/debug/img/service1.png" width="45" height="45" alt="services" />
                  </div>
                  <div className="card-body text-center">
                     <p className="service__desc-p mb-0 text-center">
                        Staff-Augmentation IT &amp; Non-IT 
                     </p>
                     <span className="small_desc">(Contract to Hire, Contract, Permanent staffing Payroll)</span>
                     <p className="dtails__para-card">
                        Scale your team quickly with less TurnAround Time, less Operational Costs, and less Recruitment hassle. Leave the complete hiring, screening, deployment, contracting, and permanent staffing in our capable hands and we will work as a part of you for Staff-augmentation – IT as well as Non IT.
                     </p>
                  </div>
               </div>
            </div>
            <div className="col-md-4  mb-md-auto mb-4">
               <div className="card service__new-card border-0">
                  <div className="img-box card__imgbox">
                     <img src="/debug/img/service2.png" width="35" height="35" alt="services" />
                  </div>
                  <div className="card-body text-center">
                     <p className="service__desc-p mb-0 text-center">
                        Software Development
                     </p>
                     <p className="dtails__para-card">
                        Our services include designing, developing, and deploying various types of software. Developing Custom Software, Mobile &amp; Web Applications, DevOps Automation, System Integration, etc. – we provide it all to that take care of all of our customers’ needs. 
                     </p>
                  </div>
               </div>
            </div>
            <div className="col-md-4  mb-md-auto mb-4">
               <div className="card service__new-card border-0">
                  <div className="img-box card__imgbox">
                     <img src="/debug/img/service3.png" width="45" height="45" alt="services" />
                  </div>
                  <div className="card-body text-center">
                     <p className="service__desc-p mb-0 text-center">
                        Digital Marketing
                     </p>
                     <p className="dtails__para-card">
                        We excel at all Digital Marketing strategies including Influencer Marketing, Social Media so that we enable our customers to meet their business needs and get optimized growth. You can get the perfect solutions for your business’s digital channels 
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="rtg__lifeCycle">
      <div className="container">
         <div className="row">
            <div className="col-md-12 text-center">
               <h3 className="text-white">Recruiting Life Cycle</h3>
            </div>
         </div>
         <div className="container step-progress-container px-0 d-md-block d-none">
            <ul className="progressBar list-unstyled">
               <li className="">
                  <div className="active">
                     <img src="/debug/img/loop2.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Client Initiate Hiring <br /> Requirement</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop1.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Account Manager</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop3.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Assignment of Requirement <br /> to recruiter</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop4.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Requirement <br /> Understanding</p>
               </li>
               
               <li className="">
                  <div>
                     <img src="/debug/img/loop5.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Formulating Search <br /> String</p>
               </li>
            </ul>
            <div className="dashed__height dashed__height-right"></div>
            <ul className="progressBar list-unstyled progressBar__second">
               <li className="">
                  <div>
                     <img src="/debug/img/loop6.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Calling Up <br /> Candidates</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop7.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Getting Updated <br /> Resume</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop8.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Checking the Quality of <br /> Resume and Matching it <br /> to the Requirement</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop9.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Format the Resume and <br /> Submitting the resume to <br /> Account Manager</p>
               </li>
               
               <li className="">
                  <div>
                     <img src="/debug/img/loop10.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Account Manager consults <br /> the candidate for further <br /> clarifications, if required.</p>
               </li>
            </ul>
            <div className="dashed__height dashed__height-left"></div>
            <ul className="progressBar list-unstyled progressBar__second progressBar__third">
               <li className="">
                  <div>
                     <img src="/debug/img/loop11.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Resume is submitted to <br /> the client</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop12.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Client provides feedback / <br /> interview request</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop13.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Recruiter arranges the <br /> interview and confirms <br /> it with the client</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop14.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p"> Closure</p>
               </li>
               
               <li className="" style={{"opacity":"0"}}>
                  <div>
                     <img src="/debug/img/loop1.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Account Manager consults <br /> the candidate for further <br /> clarifications, if required.</p>
               </li>
            </ul>
         </div>
         
         <div className="container step-progress-container progress__container-container px-0 d-md-none d-block ">
            <ul className="progressBar  progressBar__mob list-unstyled">
               <li className="">
                  <div className="active">
                     <img src="/debug/img/loop2.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Client Initiate Hiring <br /> Requirement</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop1.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Account Manager</p>
               </li>
               <li className="content__50">
                  <div>
                     <img src="/debug/img/loop3.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Assignment of Requirement <br /> to recruiter</p>
               </li>
            </ul>
            <div className="dashed__height dashed__height-right dashed__height-rightmove"></div>
            <ul className="progressBar  progressBar__mob list-unstyled">
               <li className="content__before-50">
                  <div>
                     <img src="/debug/img/loop4.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Requirement <br /> Understanding</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop5.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Formulating Search <br /> String</p>
               </li>
               <li className="content__50">
                  <div>
                     <img src="/debug/img/loop6.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Calling Up <br /> Candidates</p>
               </li>
            </ul>
            <div className="dashed__height dashed__height-left dashed__height-leftmove"></div>
            <ul className="progressBar  progressBar__mob list-unstyled">
               <li className="content__before-50">
                  <div>
                     <img src="/debug/img/loop7.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Getting Updated <br /> Resume</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop8.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Checking the Quality of <br /> Resume and Matching it <br /> to the Requirement</p>
               </li>
               <li className="content__50">
                  <div>
                     <img src="/debug/img/loop9.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Format the Resume and <br /> Submitting the resume to <br /> Account Manager</p>
               </li>
            </ul>
            <div className="dashed__height dashed__height-right dashed__height-rightmove dashed__height-110"></div>
            <ul className="progressBar  progressBar__mob list-unstyled">
               <li className="content__before-50">
                  <div>
                     <img src="/debug/img/loop10.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Account Manager consults <br /> the candidate for further <br /> clarifications, if required.</p>
               </li>
               <li className="">
                  <div>
                     <img src="/debug/img/loop11.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Resume is submitted to <br /> the client</p>
               </li>
               <li className="content__50">
                  <div>
                     <img src="/debug/img/loop12.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Client provides feedback / <br /> interview request</p>
               </li>
            </ul>
            <div className="dashed__height dashed__height-left dashed__height-leftmove dashed__height-130"></div>
            <ul className="progressBar  progressBar__mob list-unstyled">
               <li className="content__before-50">
                  <div>
                     <img src="/debug/img/loop13.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Recruiter arranges the <br /> interview and confirms <br /> it with the client</p>
               </li>
               <li className="content-mob-none">
                  <div>
                     <img src="/debug/img/loop14.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p"> Closure</p>
               </li>
               <li className="" style={{"opacity":"0"}}>
                  <div>
                     <img src="/debug/img/loop9.svg" width="30" height="30" alt="recruitment flow" />
                  </div>
                  <p className="stat-p">Format the Resume and <br /> Submitting the resume to <br /> Account Manager</p>
               </li>
            </ul>
         </div>
      </div>
   </section>
   {/* <section className="service__testimonials gap__common bg__common">
      <div className="container">
         <div className="row">
            <div className="col-md-12 text-center pb-4">
               <h3>Testimonial</h3>
            </div>
         </div>
      </div>
      <div className="container testimonial_carousel__container mx-auto px-4">
      <div className="owl-carousel owl-theme owl__div owl-carousel-service">
         <div className="card ttml_card border-0">
            <div className="card-body p-0">
               <div className="card__top text-center py-2">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
               </div>
               <p className="text-center mb-1">
                  STO Digital has been an amazing recruitment agency who helped us throughout the whole recruitment process. These guys are very efficient and provide exceptional service.
               </p>
            </div>
            <div className="service__card-footer text-center mx-auto">
               <img src="/debug/img/tester4.jpeg" className="img-thumbnail img__testimonial" alt="sto-digital" />
               <h6 className="mb-0">John</h6>
               
            </div>
         </div>
         <div className="card ttml_card border-0">
            <div className="card__top text-center py-2">
               <i className="fa fa-quote-left" aria-hidden="true"></i>
            </div>
            <div className="card-body p-0">
               <p className="text-center mb-1">
                  Very professional service. Kathija Ma'am guided me throughout the interview process. Her diligence and patience were impeccable!
               </p>
            </div>
            <div className="service__card-footer text-center mx-auto">
               <img src="/debug/img/pro_fle.png" className="img-thumbnail img__testimonial" alt="sto-digital" />
               <h6 className="mb-0">Abhishek</h6>
               
            </div>
         </div>
         <div className="card ttml_card border-0">
            <div className="card__top text-center py-2">
               <i className="fa fa-quote-left" aria-hidden="true"></i>
            </div>
            <div className="card-body p-0">
               <p className="text-center mb-1">
                  I would highly recommend Aman from STO Digital. He was extremely patient and approachable with my innumerable queries and was professional enough to keep me updated as the process lasted approximately a month.
               </p>
            </div>
            <div className="service__card-footer text-center mx-auto">
               <img src="/debug/img/tester2.jpeg" className="img-thumbnail img__testimonial" alt="sto-digital" />
               <h6 className="mb-0">Swati</h6>
               
            </div>
         </div>
         <div className="card ttml_card border-0">
            <div className="card__top text-center py-2">
               <i className="fa fa-quote-left" aria-hidden="true"></i>
            </div>
            <div className="card-body p-0">
               <p className="text-center mb-1">
                  I appreciate their roles for giving awesome support for finding better opportunities in the market. I highly recommend this recruitment firm to Job seekers and employers.
               </p>
            </div>
            <div className="service__card-footer text-center mx-auto">
               <img src="/debug/img/tster3.jpeg" className="img-thumbnail img__testimonial" alt="sto-digital" />
               <h6 className="mb-0">Sraddha</h6>
               
            </div>
         </div>
      </div>
   </div></section> */}
   <section className="clients__logo d-flex align-items-center">
      <div className="container">
         <div className="row">
            <div className="col-md-3 col-6 mb-md-0 mb-2 d-flex align-items-center justify-content-center">
               <img src="/debug/img/happynotes_logo.png" width="170" className="mob-width clients__logo-img" alt="clients" />
            </div>
            <div className="col-md-3 col-6 mb-md-0 mb-2 d-flex align-items-center justify-content-center">
               <img src="/debug/img/smart-repair3.png" alt="clients" className="mob-width clients__logo-img" width="145" />
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
               <img src="/debug/img/hurray@2x.png" alt="clients" className="mob-width clients__logo-img" width="150" />
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
               <img src="/debug/img/sushant_Logo.png" alt="clients" width="220" className="mob-width clients__logo-img" />
            </div>
         </div>
      </div>
   </section>
   
   <section className="feature rules gap__common" id="feature">
      <div className="container">
         <div className="row">
            <div className="col-12 text-center mb pb-4">
               <h3>Our Area of Expertise</h3>
            </div>
            <div className="col-md-12 d-flex align-items-center px-0">
               <div className="row">
                  <div className="col-md-4 pr-md-0">
                     <div className="card feature__card border-0" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="d-flex align-items-start">
                           <img src="/debug/img/icon1.svg" width="40" height="40" alt="rules" />
                           <div className="feature__card_para ">
                              <p className="feature__card-heading f-600 f-18">Software Developers</p>
                              <p>Our Software developers are experts in planning, defining, designing, building, deploying, and maintaining software/application solutions. They are adept at using the latest tools &amp; technologies for developing cutting-edge software as needed by the clients. </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 pr-md-0">
                     <div className="card feature__card border-0" data-aos="zoom-in" data-aos-duration="1700">
                        <div className="d-flex align-items-start">
                           <img src="/debug/img/icon2x.svg" width="40" height="40" alt="" />
                           <div className="feature__card_para">
                              <p className="feature__card-heading f-600 f-18">Software Architect</p>
                              <p>Reduce your development &amp; maintenance costs with the help of our expert software architecture. We have expertise in organizing all the components of software designing and modernizing technology to improve on and integrate all the system functionalities.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 pr-md-0">
                     <div className="card feature__card border-0" data-aos="zoom-in" data-aos-duration="1900">
                        <div className="d-flex align-items-start">
                           <img src="/debug/img/icon3x.svg" width="40" height="40" alt="rules" />
                           <div className="feature__card_para">
                              <p className="feature__card-heading f-600 f-18">Project Manager Technical</p>
                              <p>Our expert Technical Project Managers are well equipped with all the necessary technical knowledge required for planning, developing, brainstorming, designing, and scheduling a project. They are also adept at the proper designation of tasks to the project team members.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 pr-md-0">
                     <div className="card feature__card border-0" data-aos="zoom-in" data-aos-duration="2100">
                        <div className="d-flex align-items-start">
                           <img src="/debug/img/icon4x.svg" width="40" height="40" alt="" />
                           <div className="feature__card_para">
                              <p className="feature__card-heading f-600 f-18">Program Manager</p>
                              <p>With expertise in guiding a complete team to achieve completion of a project; our programmer managers strategically articulate the objectives of a program, oversee various projects, ensure they coordinate, and even access how ultimately a business will be affected by it.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 pr-md-0">
                     <div className="card feature__card border-0" data-aos="zoom-in" data-aos-duration="2300">
                        <div className="d-flex align-items-start">
                           <img src="/debug/img/icon5x.svg" width="40" height="40" alt="" />
                           <div className="feature__card_para">
                              <p className="feature__card-heading f-600 f-18">Manager CLM(Customer Lifecycle Management)</p>
                              <p>Our CLM Managers are experts in tracking the customer lifecycle stage, assigning &amp; measuring metrics for the CLM, and marketing to customers based on their lifecycle stage to improve on their value and satisfaction.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 pr-md-0">
                     <div className="card feature__card border-0" data-aos="zoom-in" data-aos-duration="2300">
                        <div className="d-flex align-items-start">
                           <img src="/debug/img/iconr5x.svg" width="40" height="40" alt="" />
                           <div className="feature__card_para">
                              <p className="feature__card-heading f-600 f-18">Campaigns Manager</p>
                              <p>Our expert Campaign managers work on formulating, running, and executing marketing campaigns for our client organizations for any product/service/event. They are also adept at measuring the effectiveness of the marketing campaign and accordingly prepare reports about them.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 pr-md-0">
                     <div className="card feature__card border-0" data-aos="zoom-in" data-aos-duration="2500">
                        <div className="d-flex align-items-start">
                           <img src="/debug/img/icon6x.svg" width="40" height="40" alt="" />
                           <div className="feature__card_para">
                              <p className="feature__card-heading f-600 f-18">Brand Manager</p>
                              <p>We have Brand Managers who expertly analyze a brand’s perception in the market and then strategize &amp; plan to achieve the necessary perception of the brand based on its objectives.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 pr-md-0">
                     <div className="card feature__card border-0" data-aos="zoom-in" data-aos-duration="2700">
                        <div className="d-flex align-items-start">
                           <img src="/debug/img/digitalmarket.svg" width="40" height="40" alt="" />
                           <div className="feature__card_para">
                              <p className="feature__card-heading f-600 f-18">Digital Marketing</p>
                              <p>We are experts in utilizing all the digital channels, digital technologies, digital media, and digital platforms to promote, market, and advertise a product/service/event for our clients so that they can easily &amp; effectively connect with their potential consumers.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 pr-md-0">
                     <div className="card feature__card border-0" data-aos="zoom-in" data-aos-duration="2900">
                        <div className="d-flex align-items-start">
                           <img src="/debug/img/icon8x.svg" width="40" height="40" alt="" />
                           <div className="feature__card_para">
                              <p className="feature__card-heading f-600 f-18">SEO</p>
                              <p>Get to the top of the Serch Result’s page with our expert SEO services. We use the best and latest digital practices to help our clients connect their business with potential consumers by increasing their online rankings and driving more traffic to the business.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 pr-md-0">
                     <div className="card feature__card border-0" data-aos="zoom-in" data-aos-duration="3000">
                        <div className="d-flex align-items-start">
                           <img src="/debug/img/icon9x.svg" width="40" height="40" alt="" />
                           <div className="feature__card_para">
                              <p className="feature__card-heading f-600 f-18">Content Writers</p>
                              <p>We expertly deal with all your content needs – from ideation till its delivery. Our experienced content writers provide writing services for a number of verticals and categories. They ensure high-quality content that is free of grammatical errors and optimized for Search Engines.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="contact-banner">
      <div className="container-fluid p-0">
         <div className="row">
            <div className="col-md-6 p-0 ">
            </div>
            <div className="col-md-6 py-4 bg-banner-contact p-md-0 d-flex align-items-center">
               <div className="col-md-8 mx-auto">
                  <h2 className="text-white pl-2 pb-3">Contact Us</h2>
                  <div className="message__formBox">
                     <form action="">
                        <div className="col-12">
                           <div className="form-group">
                              <input type="text" className="form-control info-form-input" placeholder="Your Name" />
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="form-group">
                              <input type="text" className="form-control" placeholder="Email Address" />
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="form-group">
                              <textarea className="form-control" name="" id="" cols="30" rows="5" placeholder="Message..."></textarea>
                           </div>
                        </div>
                        <div className="col-12">
                           <a href="#" className="btn-rounded px-3 py-1 mt-4">
                           Send Message
                           </a>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   
   <section className="popular-search gap__common">
      <div className="container">
         <div className="row">
            <div className="col-md-12 text-center mt-3">
               <a href="#" className="parent__btn-click" target="_blank">
               <input type="button" value="IT Staffing" className="py-1 px-2 mt-2 btn-color-footer" />
               </a>
               <a href="#" className="parent__btn-click" target="_blank">
               <input type="button" value="Recruitment Process Outsourcing" className="py-1 px-2 mt-2 btn-color-footer" />
               </a>
               <a href="#" className="parent__btn-click" target="_blank">
               <input type="button" value="Temporary Staffing" className="py-1 px-2 mt-2 btn-color-footer" />
               </a>
               <a href="#" className="parent__btn-click" target="_blank">
               <input type="button" value="Executive Level Hiring" className="py-1 px-2 mt-2 btn-color-footer" />
               </a> <br />
               <a href="#" className="parent__btn-click" target="_blank">
               <input type="button" value="Executive Level Hiring" className="py-1 px-2 mt-2 btn-color-footer" />
               </a>
               <a href="#" className="parent__btn-click" target="_blank">
               <input type="button" value="Temporary Staffing" className="py-1 px-2 mt-2 btn-color-footer" />
               </a>
               <a href="#" className="parent__btn-click" target="_blank">
               <input type="button" value="Recruitment Process Outsourcing" className="py-1 px-2 mt-2 btn-color-footer" />
               </a>
               <a href="#" className="parent__btn-click" target="_blank">
               <input type="button" value="IT Staffing" className="py-1 px-2 mt-2 btn-color-footer" />
               </a>
            </div>
         </div>
      </div>
   </section>

    </>
  );
}

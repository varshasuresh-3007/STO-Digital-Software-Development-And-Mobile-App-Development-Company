import React, { useEffect } from 'react';

export default function EducationalWebPortalDevelopmentCompany() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Education Web Portal Development Company - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "STO Digital is the best in Educational portal development company in Vantaa, India, having designed and developed numerous of web portal development for the Education sector at reasonable cost.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "STO Digital is the best in Educational portal development company in Vantaa, India, having designed and developed numerous of web portal development for the Education sector at reasonable cost.");
      document.head.appendChild(metaDesc);
    }
  }, []);

  return (
    <>
      <style>{`
        .bg-image-app {
          background-image: url("/debug/img/edu_web_port_dev_img.jpg");
        }
      `}</style>
      
    <img src="/debug/img/Vector_Smart_Object30.svg" alt="vector-smart-object" className="back-img img-fluid" />
    <section className="seo-parallax">
        <div className="container-fluid">
            <div className="row">
                <div className="bg-image-app">
                <div className="h-100 d-flex">
                    <h2 className="my-auto text-light ml-4 w-50">EDUCATIONAL WEB PORTAL DEVELOPMENT</h2>
                </div>
                </div>
            </div>
        </div>

    </section>
    <section className="seo-page"></section>
    <section className="technology--info technology__margin-0">

        <div className="container-fluid">
           <div className="row">
            <div className="col-md-8 col-lg-9">
             <div className="product-description--div p-4">

                <div className="row technology_contents-ui">
                    <div className="col-sm-12">
                        <h2 className="font-weight-bold text-let pb-2 text-center">Educational Web Portal Development</h2>
                    </div>
                </div>

                <div className="row project-mean">
                    <div className="col-sm-12">
                        <p className="text-justify px-5 pb-1 ">
                            <a href="/" className="sto-digital__link--style">STO Digital</a> is the top leading Educational web portal development company in Vantaa, with the wide range of experience in designing and developing the numerous website in the education sector. The field of education has no end and thus it is growing rapidly with making the information technology as the major and the basic part of the learning process. Nowadays, the internet acts as a basic need in our lives and therefore having an educational portal is must increase the student commitment towards you to provide them with the best information needed about the courses in which they wanted to pursue in future. Our organization is best known for our effective, well- planned educational websites. We ensure our clients with the promise to provide them with the best and most useful information. We cannot delay the fact that young generation is diverting more towards the IT side, Internet has become the basic need of our life and in this case, the online existence of an educational institute will play the major role in enhancing the student's career.
                        </p>
                        <p className="text-justify px-5 pb-1 ">
                            The portals developed by us acts really beneficial for the students and provide them with the best learning material to upgrade their score. Our organization has a team of highly experienced and qualified experts and teachers who assure our client’s with the best high-quality and a professionally designed educational website for your school or the university.
                        </p>
                        <p className="text-justify px-5 pb-1 ">
                            STO Digital understands the need for education and thus promise you the best education service like the education web portal development with all the modern features that are user-friendly, efficient, flexible and stable.
                        </p>
                        <p className="text-justify px-5 pb-1 ">
                            Our company has experience in building the best websites by meeting all the requirements of our client. We provide the best fastest growing online education portal that integrates the technology with the education. Education is a highly growing field as everyone is now realizing the importance of literacy. Our organization is a collection of the best-experienced team members who will provide you with the best results in the lowest possible prices. Our <strong>educational web portal development company</strong> is growing rapidly as the online technologies become more popular, the need for education website development constantly increases over time.
                        </p>
                    </div>
                    <div className="col-sm-12 text-center">
                        <a href="javascript:void(0);" className="btn-color-parent" aria-haspopup="true" tabIndex="0" data-toggle="modal" data-target="#quote-request">
                            <input type="button" value="Enquiry" className="py-3 px-5 mt-4 btn-color" />
                        </a>
                    </div>
                </div>
            </div>
           <div className="hide-form"></div>
            </div>
          <div className="col-md-4 col-lg-3 order-1 order-md-2">
	
	<form id="contactSeo" className="web_analysis">
		<div className="row px-3 py-2">
			<div className="col-12 text-center">
				<h2 className="mb-0 d-inline-block mb-2">
					Contact Us
				</h2>
			</div>
			<input type="hidden" name="lead_url" defaultValue="/Educational-Web-Portal-Development-company" />

			<div className="col-12">
				<div className="form-group">
					<label htmlFor="fName">Name <a style={{"color":"red"}}>*</a></label>
					<input type="text" className="form-control" name="seo_name" placeholder="Name" required="" />
				</div>
			</div>
			<div className="col-12">
				<div className="form-group">
					<label htmlFor="email">Email <a style={{"color":"red"}}>*</a></label>
					<input type="email" className="form-control" name="seo_email" placeholder="Email" required="" />
				</div>
			</div>
			<div className="col-12">
				<div className="form-group">
					<label htmlFor="poh">Phone <a style={{"color":"red"}}>*</a></label>
					<input type="text" className="form-control" name="seo_phone" placeholder="Phone" required="" />
				</div>
			</div>
			
			<div className="col-12 mb-3">
				<div className="form-group">
					<label htmlFor="msg">Message</label>
					<textarea className="form-control" name="seo_message" row="5" placeholder="Message..."></textarea>
				</div>
			</div>
			<div className="col-md-12">
				<div className="g-recaptcha" data-sitekey="6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN"></div>
			</div>
			<div className="col-12">
				<span className="add_seo_error" style={{"color":"red"}}></span>
				<button type="submit" className="btn w-100 py-1 add_seo_pop_up_button">
					Submit <span className="add_seo_pop_up_fa_spin_icon"></span>
				</button>
			</div>
		</div>
	</form>
</div>
 
          </div>
        </div>
    </section>


    </>
  );
}

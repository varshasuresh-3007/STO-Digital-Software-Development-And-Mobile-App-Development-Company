import React, { useEffect } from 'react';

export default function ApacheServer() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Apache Server - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Apache is maintained by the opensource organization Apache software foundation. It is most widely used web server and has deployment over 67% webserver around the world.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "Apache is maintained by the opensource organization Apache software foundation. It is most widely used web server and has deployment over 67% webserver around the world.");
      document.head.appendChild(metaDesc);
    }
  }, []);

  return (
    <>
      
<img src="/debug/img/Vector_Smart_Object30.svg" alt="vector-smart-object" className="back-img img-fluid" />
<section className="technologies-cta">
   <div className="container">
        <div className="row img-row">

            <div className="col-md-5 text-center">
                <h1 className="font-weight-bold">Apache Server</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/apache.png" alt="html5 and css3" width="60%" height="60%" className="img-fluid" />
            </div>

        </div>
   </div>
</section>
<section className="seo-page"></section>
<section className="technologies-cta">
       <div className="container-fluid">
       <div className="row">
         <div className="col-md-8 col-lg-9">
        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>
            
            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Apache Web Server</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">Apache is maintained by the opensource organization Apache software foundation. It is most widely used web server and has deployment over 67% webserver around the world.  Apache’s popularity can be credited because of it fast reliable and secure. Apache is totally free software and it is released under the Apache License 2.0. Apache can be used on both linux and Windows server, however study shows 93% of apache webserver deployments are on linux.  </p>

                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>
            
            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Benefits</h2>
                <div className="row">
                    <div className="col-md-6 para-color">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Develop web applications and large-scale websites in a customized, flexible, lightweight framework.
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Quickly implement and support web applications and websites.
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Apache Web Server subscription includes certified and integrated software with everything you need to build and manage the web applications your essential business operations depend on. It also helps you avoid integration and version conflicts.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 para-color">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Pay a lot less than you would for heavyweight proprietary solutions.
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Apache Web Server takes advantage of Red Hat's expertise in leading and contributing to popular open source projects.
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Tracks security issues
                                and defines criticality.
                                Outlines impacted use cases and
                                delivers critical security updates as they're identified.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>
            
            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Why Apache Web Server?</h2>
                <h5 className="font-weight-bold">Apache Web Server includes:</h5>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        Apache Tomcat, the market-leading servlet container. Apache web server, the world's most popular web server, All the common modules and connectors for security and load balancing.
                    </p>
                </div>
            </div>
            <div className="col-sm-12 text-center">
                <a href="javascript:void(0);" className="btn-color-parent" aria-haspopup="true" tabIndex="0" data-toggle="modal" data-target="#quote-request">
                    <input type="button" value="Enquiry" className="py-3 px-5 mt-4 btn-color" />
                </a>
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
			<input type="hidden" name="lead_url" defaultValue="/apache-server" />

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

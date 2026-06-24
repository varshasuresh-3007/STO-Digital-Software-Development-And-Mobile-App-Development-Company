import React, { useEffect } from 'react';

export default function HtmlCss() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "HTML5 & CSS3 Programming Language - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "HTML is a markup language and CSS is a style sheet language. HTML5 provides the advanced tags to integrate the multimedia content smoothly.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "HTML is a markup language and CSS is a style sheet language. HTML5 provides the advanced tags to integrate the multimedia content smoothly.");
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
                    <h1 className="font-weight-bold">HTML,HTML5 / CSS3</h1>
                </div>
                <div className="col-md-7 text-center img-div">
                    <img src="/debug/img/html_css.png" alt="html5 and css3" width="" height="" className="img-fluid" />
                </div>

            </div>
      </div>
    </section>
    <section className="seo-page"></section>
    <section className="technologies-cta technology__margin-0 mx-2">
        <div className="container-fluid">
           <div className="row">
            <div className="col-md-8 col-lg-9">
            <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

                <div className="col-sm-12">
                    <h2 className="font-weight-bold text-center pb-2">HTML5/CSS3 Programming</h2>
                    <div className="row">
                        <p className="text-justify para-color px-5">HTML5 Web Application Html5 or Hyper Text Markup language version 5 , is a New, Free, Open source, dynamic programming language, recommended by W3C Consortium &amp; WHATWG. HTML5 provides the advanced tags to integrate the multimedia content smoothly, also the tags have language with xml syntax embeded in it along with support of CSS(Cascading Style Sheets) which have very good support of DOM scripting. HTML5 and CSS combined enables to create web pages with smoothly integrated Multimedia content such as music, video animation, Cross-document messaging, and MIME Support. HTML5 unleashes the power to the web developer to create an unparalleled pages for the website.
                        </p>
                        <p className="text-justify para-color px-5">  HTML5 unleashes the power to the web developer to create an unparalleled pages for the website.</p>
                    </div>
                </div>

            </div>

            <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

                <div className="col-sm-12">
                    <h2 className="font-weight-bold text-center pb-2">We provide the following services</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                                <li>
                                    <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                    Creating dynamic HTML websites with blogs, forums, and articles
                                </li>
                                <li>
                                    <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                    Managing web tools integrations, and web services – both offline and online
                                </li>
                                <li>
                                    <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                    Sketching 2D &amp; 3D image processing, file casting services, HTML canvas 2D context
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                                <li>
                                    <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                    Maintenance of Microdata (HTML5), Adobe Flash Themes, MIME Types
                                </li>
                                <li>
                                    <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                    Localizing Windows servers, HTTP, FTP, and UDP services
                                </li>
                                <li>
                                    <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                    24×7 Customer Support – e-Mail, Google Talk, and Skype
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

                <div className="col-12">
                    <h2 className="font-weight-bold text-center pb-2">WHY CHOOSE US?</h2>
                </div>
                <div className="col-sm-12">
                    <div className="row">
                        <p className="text-justify para-color px-5">
                            HTML5 Web Application
                            We are one of the well known html5 web development company based in Vantaa and we have a team of skilled HTML5 Developers concentrated on latest XML integrations; Audio &amp; Video support By Google API, CSS Manifest, Content Scripting, and other. Using all these aspects of the HTML5, our expert team of <strong>STO Digital Web design and Website Development Vantaa</strong> makes your website more responsive website and most adaptable to change.
                        </p>
                        <p className="text-justify para-color px-5">
                            At <strong>STO Digital web design,</strong> we build a smooth transaction websites from desktop to mobile platform using HTML5,HTML, JavaScript,CSS3 and many such languages.
                        </p>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <a href="javascript:void(0);" className="btn-color-parent" aria-haspopup="true" roles="button" tabIndex="0" data-toggle="modal" data-target="#quote-request">
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
			<input type="hidden" name="lead_url" defaultValue="/html-css" />

			<div className="col-12">
				<div className="form-group">
					<label htmlFor="seo_name">Name <a style={{"color":"red"}}>*</a></label>
					<input type="text" className="form-control" placeholder="name" name="seo_name" required="" />
				</div>
			</div>
			<div className="col-12">
				<div className="form-group">
					<label htmlFor="seo_email">Email <a style={{"color":"red"}}>*</a></label>
					<input type="email" className="form-control" name="seo_email" placeholder="Email" required="" />
				</div>
			</div>
			<div className="col-12">
				<div className="form-group">
					<label htmlFor="seo_phone">Phone <a style={{"color":"red"}}>*</a></label>
					<input type="text" className="form-control" name="seo_phone" placeholder="Phone" required="" />
				</div>
			</div>
			
			<div className="col-12 mb-3">
				<div className="form-group">
					<label htmlFor="seo_message">Message</label>
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

import React, { useEffect } from 'react';

export default function ShellScripting() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Linux Shell Scripting - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Shell is supported over linux, which is opensource. Shell scripting provides the freedom to automate the execution of the linux command along with programming interface.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "Shell is supported over linux, which is opensource. Shell scripting provides the freedom to automate the execution of the linux command along with programming interface.");
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
                <h1 className="font-weight-bold">SHELL SCRIPTING</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/shell-script.png" alt="shell script logo" width="50%" height="50%" className="img-fluid" />
            </div>

        </div>
    </div>
</section>
<section className="seo-page"></section>
 <section className="technologies-cta" xmlns="http://www.w3.org/1999/html">
     <div className="container-fluid">
      <div className="row"> 
        <div className="col-md-8 col-lg-9">
          <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">WHAT IS SHELL SCRIPT</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        Shell is supported over linux, which is opensource. Shell scripting provides the freedom to automate the execution of the linux command along with programming interface. Shell provides typically like file manipulation, program execution filtering the file, timing and delay, file processing. Like most of the scripting language Shell scripting is an interpreted language.   </p>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-12">
                <h2 className="font-weight-bold text-center pb-2">WHY CHOOSE US?</h2>
                <p className="text-justify para-color px-5">
                    With experience of handling projects of varying size and delivering the best products feasible, we make website with finest UI/UX thus making it run flawlessly on web as well as mobile devices. <strong>STO Digital</strong> empower businesses to connect with customers more freely and easily by providing an identity over the web.
                </p>
            </div>
            <div className="col-12 text-center">
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
			<input type="hidden" name="lead_url" defaultValue="/shell-scripting" />

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

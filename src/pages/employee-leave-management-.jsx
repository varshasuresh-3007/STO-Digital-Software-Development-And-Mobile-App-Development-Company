import React, { useEffect } from 'react';

export default function EmployeeLeaveManagement() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Employee Leave Management";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "");
      document.head.appendChild(metaDesc);
    }
  }, []);

  return (
    <>
      
<div id="snackbar"></div>
<div id="snackbar_error"></div>




<button className="btn btn-common_white mt-sm-3 px-4 text-uppercase open_modal_onload d-none" data-toggle="modal" data-target="#quote-request">

</button>



    




















<img src="/debug/img/Vector_Smart_Object30.svg" alt="vector-smart-object" className="back-img img-fluid" />

<section className="product_description--cta" xmlns="http://www.w3.org/1999/html">
    <div className="container">
        <div className="row" style={{"height":"35vh"}}>
            <div className="col-sm-5 text-center">
                <h1 className="font-weight-bold vertical-alignment">Employee Leave Management </h1>
            </div>
            <div className="col-sm-7 main-image text-center">
                <img src="/uploads/logo_(2).png" alt="product page image" width="60%" height="60%" className="product-drlog" />

            </div>

        </div>
		        <div className="hero-text"><br />
            <h2 className="text-center">Works on Web</h2>

        </div>

        <div className="row mt-4">

            <div className="col-sm-4 product-demo text-center">
                <a href="https://elm.sto-digital.com/" target="_blank" className="social-btns">
                    <img src="/debug/img/web.png" alt="Website" className="btn-color social-btn-color" style={{"width":"50%"}} /></a>

            </div>
			<div className="col-sm-4 gplay text-right">
				<a href="https://play.google.com/store/apps/details?id=com.sto-digital.elm" target="_blank" className="social-btns my-md-auto my-3">
					<img src="/debug/img/Google_play.png" alt="Google play" className="social-btn-color" style={{"width":"50%"}} /></a>
			</div>

			<div className="col-sm-4 social-btns text-center astore">
				<a href="https://apps.apple.com/us/app/employee-life-cycle-management/id1578238347" target="_blank">
					<img src="/debug/img/App_Store.png" alt="App Store" className="social-btn-color" style={{"width":"50%"}} /></a>
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
                    <h2 className="font-weight-bold text-let pb-2 text-center">About Employee Leave Management </h2>
                </div>
            </div>
            <div className="row project-mean">
                <div className="col-sm-12">
                    <p className="text-justify px-5 pb-1 mb-0">
						ELM is the Employee Leave management  Android  and Web Application with the Connection between management and Employees. ELM system is a process by which employees apply for leaves; managers approve them and leave balances are tracked. and also work Management Application					</p>
                </div>
            </div>
        </div>

        

		        <div className="product-description--div technology-list p-4" hidden="">

            <div className="row technology_contents-ui">
                <div className="col-sm-12">
                    <h2 className="font-weight-bold text-let pb-2 text-center" style={{"color":"rgb(33, 37, 41)"}}>Features</h2>
                </div>
            </div>

            <div className="row">
				            </div>

        </div>

        

        <div className="product-description--div p-4">
            <div className="row technology_contents-ui">
                <div className="col-sm-12">
                    <h2 className="font-weight-bold text-let pb-2 text-center">What The Project Means For us</h2>
                </div>
            </div>

            <div className="row project-mean">
                <div className="col-sm-12">
                    <p className="text-justify px-5 pb-3">
						</p><p>Employee&nbsp;leave management system is a process by which employees apply for leaves; managers approve them and leave balances are tracked.&nbsp;</p>

<p>Initially, most companies opt for a manual process that involves a lot of busywork for the HR department.</p>

<p>Traditional Employee leave management looks a little like this:&nbsp;</p>

<ul>
 <li>The employee checks their leave balances using a view-only Excel sheet managed by the HR department</li>
 <li>The employee drops an email to their manager</li>
 <li>The manager looks through the work calendar and other absences of team members to approve or reject the leave</li>
 <li>On approval, the HR manager is also looped in who then adjusts the leave balances accordingly&nbsp;</li>
 <li>Tracking the Employee Workflow(tasks) also</li>
</ul>
					<p></p>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 product-enquiry text-center">
                    <a href="javascript:void(0);" className="btn-color-parent" aria-haspopup="true" tabIndex="0" data-toggle="modal" data-target="#quote-request">
                        <input type="button" value="Enquiry" className="py-3 px-5 btn-color" />
                    </a>
                </div>
            </div>

        </div>

        
		<div className="row technology_contents-ui" hidden="">
                <div className="col-sm-12">
                    <h2 className="font-weight-bold text-let pb-2 text-center">Our Clients</h2>
                </div>
                <div className="row">

                    <div className="col-md-4 card-margin offset-2">
                        <div className="card card-prod-shadow h-100">
                            <img className="card-img-top our-prod--images px-5 pt-2 image-shadow-common" src="/debug/img/carelick.png" alt="A STO Digital Product" />

                            <div className="card-body fixed-card-height">
                                <p className="card-text">Carelick into a respectable and reliable social institution geared towards caring for the needy</p>
                            </div>

                            <div className="card-body text-center">
                                <a href="/carelick" className="btn-color-parent">
                                    <input type="button" value="Learn More" className="btn-color py-3 px-5 " />
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 card-margin">
                        <div className="card card-prod-shadow h-100">
                            <img className="card-img-top our-prod--images px-5 pt-2 image-shadow-common" src="/debug/img/Bravo-bgLogo.png" alt="A STO Digital Product" />

                            <div className="card-body fixed-card-height">
                                <p className="card-text">Bravo Pharma has its own diagnostic laboratories and medical centres</p>
                            </div>

                            <div className="card-body text-center">
                                <a href="/bravo-pharma" className="btn-color-parent">
                                    <input type="button" value="Learn More" className="btn-color py-3 px-5 " />
                                </a>
                            </div>
                        </div>
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
			<input type="hidden" name="lead_url" defaultValue="/employee-leave-management-" />

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
					<input type="text" className="form-control" name="seo_phone" placeholder="Phone" onKeyPress={(e) => { if (isNaN(Number(e.key)) && e.key !== "Backspace" && e.key !== "Enter") e.preventDefault(); }} minLength="10" maxLength="16" required="" />
				</div>
			</div>
			
			<div className="col-12 mb-3">
				<div className="form-group">
					<label htmlFor="msg">Message</label>
					<textarea className="form-control" name="seo_message" row="5" placeholder="Message..."></textarea>
				</div>
			</div>
			<div className="col-md-12">
				<div className="g-recaptcha" data-sitekey="6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN" style={{"transform":"scale(.9)","WebkitTransform":"scale(.9)","transformOrigin":"0 0","WebkitTransformOrigin":"0 0"}}></div>
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





<div className="modal fade-scale" id="Popup-enquiry">
    <div className="modal-dialog modal-dialog-centered" style={{"transform":"translateY(0px) scaleX(1) scaleY(1) translateX(0px)"}}>
        <div className="modal-content">

                <div className="modal-header border-0 py-2 mb-3" style={{"backgroundColor":"rgb(2, 80, 169)","color":"#ffffff"}}>
                    <div className="row w-100">
                        <div className="col-12 text-center">
                            <p className="apply-now text-center">Query</p>
                        </div>
                    </div>
                    <button type="button" className="close close_btn close_model" data-dismiss="modal">X</button>
                </div>

            <form id="enquiry_pop_up_add">

				<input type="hidden" name="lead_url" defaultValue="/employee-leave-management-" />

				<input type="hidden" name="enquiry" defaultValue="2" />

                <div className="px-3">
                    <div className="row pt-3">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="text" className="form-control pop_up_model" id="contact_name" placeholder="Name" name="enquiry_name_pop_up" required="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="text" className="form-control pop_up_model" name="enquiry_phone_pop_up" minLength="10" maxLength="16" onKeyPress={(e) => { if (window.validate) window.validate(e); }} id="mobile_num" placeholder="Mobile Number" required="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="email" className="form-control pop_up_model" id="email" placeholder="Email" name="enquiry_email_pop_up" required="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <select name="enquiry_services_pop_up" className="form-control pop_up_model">
                                    <option value="0">Select Services</option>
                                    <option value="1">Online Marketing</option>
                                    <option value="2">Web Design &amp; Development</option>
                                    <option value="3">Mobile Application</option>
                                    <option value="4">Software Development</option>
                                    <option value="5">Creative Design</option>
                                    <option value="6">Others</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <textarea className="form-control services_head" name="enquiry_message_pop_up" placeholder="Your Message...." rows="3" style={{"resize":"none"}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <span style={{"color":"red"}} className="add_error"></span>
                        <div className="col-12 text-center">
                            <div className="form-group">
                                <button type="submit" className="btn form-control pop_up_contact_us add_enquiry_pop_up_button">Contact Us<span className="add_enquiry_pop_up_fa_spin_icon"></span></button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>

        </div>
    </div>
</div>





<div className="modal" id="share_url" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-width-47 modal-dialog-centered" role="document" style={{"paddingTop":"4%"}}>
        <div className="modal-content px-0">
            <div className="modal-body p-0">
                <div className="col-12">
                    <div className="row">
                        <button type="button" className="close popup-close" data-dismiss="modal">×</button>
                        <div className="col-12 text-center">
                            <h5 className="py-3 border_bottom">Share with friends</h5>
                        </div>
                        <div className="col-12">
                             <div className="col-12 share-icons text-center  py-5">
                <a href="https://www.facebook.com/login/" target="_blank">
                    <img src="/debug/img/facebook.svg" alt="facebook" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                <a href="https://twitter.com/i/flow/login" target="_blank">
                    <img src="/debug/img/twitter-1.svg" alt="twitter" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                <a href="https://www.linkedin.com/login" target="_blank">
                    <img src="/debug/img/linkedin-1.svg" alt="linkedin" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                <a href="https://www.pinterest.com/login/" target="_blank">
                    <img src="/debug/img/pinterest.svg" alt="pinterest" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                <a href="https://www.instagram.com/accounts/login/" target="_blank">
                    <img src="/debug/img/instagram.svg" alt="instagram" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                
            </div>
              
                        </div>
                       
                         <div className="col-md-6 mx-auto pb-32">
                            <div className="div_share_url">
                                <small>Event Url</small>
                                <p>https://bit.ly/3qCVvOI</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>













<div className="modal fade" id="modal_php_career" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-w-mob" role="document" style={{"maxWidth":"65%"}}>
        <div className="modal-content">
            <div className="modal-header" style={{"backgroundColor":"#0150a9"}}>
                <h5 className="modal-title text-light" id="exampleModalLabel">Personal Information</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="text-light">×</span>
                </button>
            </div>
			<form id="add_career_form">
				<input type="hidden" name="lead_url" defaultValue="/employee-leave-management-" />
				<div className="modal-body">
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label>Name <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_name" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Phone Number <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" minLength="10" maxLength="16" onKeyPress={(e) => { if (window.validate) window.validate(e); }} name="career_phone" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Email Id <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="email" name="career_email" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Total Exp <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_total_exp" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Relevant Exp <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_relevant_exp" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Career Gap(Reason)</label>
								<input className="form-control" type="text" name="career_gap" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Current CTC <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_current_ctc" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Expected CTC(Offer if any) <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_exp_ctc" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Notice Period(LWD if serving) <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_notice_period" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Current Location</label>
								<input className="form-control" type="text" name="career_current_loc" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Preferred Location</label>
								<input className="form-control" type="text" name="career_preferred_loc" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Reason for job change <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_job_change" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Why should we hire you ?</label>
								<textarea className="form-control" name="career_message"></textarea>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label htmlFor="myfile">Attach your resume <a style={{"color":"red"}}>*</a></label>
                                <small className="text-danger">Only PDF, DOC, and DOCX are allowed</small>
								<input type="file" className="form-control" id="myfile" name="attach_document" required="" />
							</div>
						</div>

					</div>
					<div className="g-recaptcha" data-sitekey="6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN"></div>
				</div>
				<div className="modal-footer">
					<span className="add_career_error" style={{"color":"red"}}></span>
					<button type="submit" className="btn btn-primary m-auto add_career_pop_up_button" style={{"backgroundColor":"#0150a9"}}>
						Submit <span className="add_career_pop_up_fa_spin_icon"></span>
					</button>
				</div>
			</form>
        </div>
    </div>
</div>

<div className="modal fade" id="job_apply_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-w-mob" role="document" style={{"maxWidth":"65%"}}>
        <div className="modal-content">
            <div className="modal-header" style={{"backgroundColor":"#0150a9"}}>
                <h5 className="modal-title text-light" id="exampleModalLabel">Apply Now</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="text-light">×</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>DOB</label>
                            <input className="form-control" type="date" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email Id</label>
                            <input className="form-control" type="email" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Job Application For</label>
                            <input className="form-control" type="email" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Current Company</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Total Work Experience</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Current Salary</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label>Current Salary</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="myfile">Select a file:</label>
                            <input type="file" id="myfile" name="myfile" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary m-auto" style={{"backgroundColor":"#0150a9"}}>Submit</button>
            </div>
        </div>
    </div>
</div>
<link rel="stylesheet" href="https://unpkg.com/photoswipe@5/dist/photoswipe.css" />












    </>
  );
}

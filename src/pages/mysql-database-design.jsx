import React, { useEffect } from 'react';

export default function MysqlDatabaseDesign() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "SQL Database - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Oracle is proprietary Database management system owned by Oracle corporation. It is SQL based database, it provides extensive programming interfaces and it is multimodel database. ");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "Oracle is proprietary Database management system owned by Oracle corporation. It is SQL based database, it provides extensive programming interfaces and it is multimodel database. ");
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
                <h1 className="font-weight-bold">SQL Database</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/mysql-logo.png" alt="html5 and css3" width="60%" height="60%" className="img-fluid" />
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
                <h2 className="font-weight-bold text-center pb-2">Oracle</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">Oracle is proprietary Database management system owned by Oracle corporation. It is SQL based database, it provides extensive programming interfaces and it is multimodel database. In general Oracle is widely used in the Transaction processing systems, Oracle database also provides distributed database management system.  Oracle is known for the fastest and most scalable database available in the market. It also provides the rich admin interface.
                    </p>

                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">How It Works</h2>
                <div className="row">
                    <div className="col-md-6 para-color">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                The MySQL server is the manager of the database system. It handles all your database instructions.
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                The MySQL server then creates a subdirectory in its data directory, names the new subdirectory newdata, and puts the necessary files with the required format into the newdata subdirectory.
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Eliminate manual database management
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                The MySQL server is usually set up so that it starts when the computer starts and continues running all the time. This is the usual setup for a website.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 para-color">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                MySQL along with a myriad of other databases store data and indexes so that you can access the data quickly, zeroing in on the piece of information you are looking for by accessing the index that gets you to it the fastest.
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                The MySQL Database Software is a client/server system that consists of a multithreaded SQL server that supports different back ends, several different client programs and libraries, administrative tools, and a wide range of application programming interfaces (APIs).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Why MySQL?</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        The database is free and open source with a commercial license available (MySQL is now owned by Oracle after they bought Sun).
                        Common applications for MySQL include php and java based web applications that require a DB storage backend, e.g. Dokuwiki, Joomla, xwiki etc
                    </p>
                    <p className="text-justify para-color px-5">
                        MySQL has one major advantage, since it is free, it is usually available on shared hosting packages and can be easily set up in a Linux, Unix or Windows environment. If a web application requires more than database, requires load balancing or sharding
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
			<input type="hidden" name="lead_url" defaultValue="/mysql-database-design" />

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

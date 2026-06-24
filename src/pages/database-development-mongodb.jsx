import React, { useEffect } from 'react';

export default function DatabaseDevelopmentMongodb() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "MongoDB Database Development - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "MongoDB is an opensource document oriented database. Again it is leading noSQL database. MongoDB provides the cross platform support.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "MongoDB is an opensource document oriented database. Again it is leading noSQL database. MongoDB provides the cross platform support.");
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
                <h1 className="font-weight-bold">MongoDB Database</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/mongo.png" alt="html5 and css3" width="60%" height="60%" className="img-fluid" />
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
                <h2 className="font-weight-bold text-center pb-2">What is MongoDB Database?</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">MogoDB is an opensource document oriented database. Again it is leading noSQL database. MongoDB provides the cross platform support. It is distributed under Apache open source license. For storing the data it uses the json like schema with dynamic schemas.
                    </p>
                    <p className="text-justify para-color px-5">Major advantage of the MongoDB is the ability to handle very large amount of data which most SQL based Databases fails to realize.  MongoDB provides the Sharding which is the process of storing the data across different servers to support the very large size of the data. Even with large amount of data it still provides the acceptable read and write throughput. </p>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Why go for MongoDB?</h2>
                <div className="row">
                    <div className="col-md-6 para-color">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Mongodb is the perfect database for creating modern MVC style apps or RESTful APIs.
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                As data is stored in document form it allows developers the ability to retrieve full responses and pipe them out as JSON without requiring additional queries, joins or data manipulation.
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                The ability to store data in a schemaless structure ensures developers greater flexibility in how the data is managed.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 para-color">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                The MongoDB database can hold collections of documents with each document having its own size, content, and number of fields.
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                MongoDB is especially useful with cloud computing
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                The web applications being built for this particular MongoDB guide is an RSS aggregator like Google Reader. The web applications will have two key components: A REST API and a Feed grabber.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Why MongoDB?</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        Store large volumes of data that often have little to no structure. Make the most of cloud computing and storage. With MongoDB, it’s easy to spread data out across commodity hardware on-site or in the cloud without needing additional software.

                    </p>
                    <p className="text-justify para-color px-5">
                        Location-based data analytics and operations. Get real-time data reporting and analytics.
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
			<input type="hidden" name="lead_url" defaultValue="/database-development-mongodb" />

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

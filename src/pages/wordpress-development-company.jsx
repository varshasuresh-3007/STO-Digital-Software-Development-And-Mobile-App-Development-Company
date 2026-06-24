import React, { useEffect } from 'react';

export default function WordpressDevelopmentCompany() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Wordpress Development Company";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "STO Digital offers high quality Wordpress Development services, Theme Customization, CMS, Wordpress Theme and Plugin Development services in Vantaa!");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "STO Digital offers high quality Wordpress Development services, Theme Customization, CMS, Wordpress Theme and Plugin Development services in Vantaa!");
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
                <h1 className="font-weight-bold">WORDPRESS</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/wordpress.png" alt="wordpress logo" width="40%" height="40%" className="img-fluid" />
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">BEST WORDPRESS SOLUTION PROVIDER</h2>
                <div className="row">
                    <div className="col-12">
                        <h6 className="font-weight-bold text-center pb-2">Stunning websites that means serious business</h6>
                    </div>
                    <p className="text-justify para-color px-5">
                        Wordpress is the most popular blogging platform and a powerful content management system that allows creating a stunning website for businesses, professionals, and bloggers. WordPress provide a powerful platform to manage a website and supports a high level of customization.
                    </p>
                    <p className="text-justify para-color px-5">
                        <strong>STO Digital</strong> offers web application development services to help businesses meet their objectives. <strong>STO Digital's</strong> dedicated WordPress development team works towards building robust, valuable and sophisticated web solutions for clients; ensuring capability to inject desired features and functionalities.
                    </p>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-12">
                <h2 className="font-weight-bold text-center pb-2">WHY GET WORDPRESS SOLUTIONS DEVELOPED?</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Cost-effective
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Design consistency
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Design flexibility
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Mobile readiness
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-12">
                <h2 className="font-weight-bold text-center pb-2">STO DIGITAL ADVANTAGES FOR WORDPRESS SOLUTIONS</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Responsive web UI/UX design
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                WordPress widget theme creation
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Podcast configuration
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Server &amp; domain migration
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Maintenance &amp; Support
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Custom plugin development and installation
                            </li>
                        </ul>
                    </div>
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

    </div>
    </section>

    </>
  );
}

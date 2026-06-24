import React, { useEffect } from 'react';

export default function DrupalDevelopmentCompany() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Drupal Development Company, Drupal Developers";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "STO Digital Drupal web Design and Development Vantaa, Drupal Web Design and Development India, Drupal service provider Vantaa, Drupal Design");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "STO Digital Drupal web Design and Development Vantaa, Drupal Web Design and Development India, Drupal service provider Vantaa, Drupal Design");
      document.head.appendChild(metaDesc);
    }
  }, []);

  return (
    <>
      
    <img src="/debug/img/Vector_Smart_Object30.svg" alt="vector-smart-object" className="back-img img-fluid" />
    <section className="technologies-cta" xmlns="http://www.w3.org/1999/html">
        <div className="container">

        <div className="row img-row">

            <div className="col-md-5 text-center">
                <h1 className="font-weight-bold">DRUPAL</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/drupal.png" alt="drupal logo" width="40%" height="40%" className="img-fluid" />
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">BEST DRUPAL SOLUTION PROVIDER</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        Drupal is PHP based open source content management framework. Drupal is widely used in webdevelopment, Rough estimate suggest that at least 2.3% of all the internet web development is done using the drupal backend.  Interfaces provided by drupal makes the content publishing easy.
                    </p>
                    <p className="text-justify para-color px-5">
                    Drupal is supported by large community and wide range of support is available for the same. Web development using Drupal is cloud ready, easy to maintain, fast and customizable.
                    </p>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-12">
                <h2 className="font-weight-bold text-center pb-2">WHAT DO WE PROVIDE</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Drupal CMS website Development
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Drupal Ecommerce portal Development
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Drupal Theme Integration and Customization
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Drupal Community Service portal Development
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Drupal Gallery and Events Management System Development
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Maintenance work for Drupal Portal
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">WHY CHOOSE US?</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        <strong>STO Digital</strong> strives to focus on the customer and deliver solutions designed around their needs as we possess quality Drupal Developers and Drupal Experts. We have dedicated PHP software development team with extensive experience in Drupal based Web Development with full functional knowledge base to meet the customer expectations.
                    </p>
                    <p className="text-justify para-color px-5">
                        Contact us today to know more about our Drupal web development services or to hire our Drupal developers for your needs.
                    </p>
                </div>
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

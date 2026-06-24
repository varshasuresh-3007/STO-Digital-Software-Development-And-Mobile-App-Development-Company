import React, { useEffect } from 'react';

export default function SoftwareTestingCompanyInVantaa() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Software Testing Company in Vantaa, Software testing Company near me";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "STO Digital offers Software Testing Services & QA Testing Services Vantaa. Mobile App Testing. Automated Testing. Functional Testing. Performance Testing. Security Testing. Data Quality Assurance. Data Warehouse Testing.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "STO Digital offers Software Testing Services & QA Testing Services Vantaa. Mobile App Testing. Automated Testing. Functional Testing. Performance Testing. Security Testing. Data Quality Assurance. Data Warehouse Testing.");
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
                <h1 className="font-weight-bold">Software Testing</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/softwaretesting.png" alt="html5 and css3" width="85%" height="85%" className="img-fluid" />
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Software Testing </h2>
                <div className="row">
                    <p className="text-justify para-color px-5">Software Testing is an approach to detect difference between given input and expected output. At STO Digital we provide support for software testing. Any testing requirement at any point of software development cycle is supported by STO Digital.</p>
                    <p className="text-justify para-color px-5">We at STO Digital provide below testing support.  We provide both Blackbox and whitebox testing support on demand. In whitebox testing we provide, various types of Unit and integration testing such as API level testing, Code coverage, Fault Injection testing.  Under blackbox testing we provide support such as System testing , acceptance testing. </p>
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
                                Software testing is a wide process that includes several connected processes
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Software testing is a series of processes that investigate and evaluate the quality of software
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                The software can go as a whole, in components, or within a live system
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 para-color">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Regulatory, technical, business, functional and user requirements.
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Software testing is a series of processes that investigate and evaluate the quality of software
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Why Software Testing?</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        Software testing is really required to point out the defects and errors that were made during the development phases.
                    </p>
                    <p className="text-justify para-color px-5">
                    Testing is necessary in order to provide the facilities to the customers like the delivery of high quality product or software application which requires lower maintenance cost and hence results into more accurate, consistent and reliable results.</p>
                </div>
            </div>
            <div className="col-sm-12 text-center">
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

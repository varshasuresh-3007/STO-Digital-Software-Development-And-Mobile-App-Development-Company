import React, { useEffect } from 'react';

export default function SoftwareIntegrationTesting() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Software Integration Testing - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "In Integration testing method, individual software modules are taken and combined and tested as group. Integration testing done after unit testing. Integration testing identifies the issues in the interfacing between modules.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "In Integration testing method, individual software modules are taken and combined and tested as group. Integration testing done after unit testing. Integration testing identifies the issues in the interfacing between modules.");
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
                <h1 className="font-weight-bold">Integration Testing</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/integration.png" alt="html5 and css3" width="45%" height="45%" className="img-fluid" />
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Integration Testing </h2>
                <div className="row">
                    <p className="text-justify para-color px-5">In Integration testing method, individual software modules are taken and combined and tested as group. Integration testing done after unit testing. Integration testing identifies the issues in the interfacing between modules.</p>
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
                                Integration testing improves the quality of the code
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                It allows the programmer to refactor code or upgrade system libraries
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Integration testing reduces defects in the newly developed features or reduces bugs when changing the existing functionality
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 para-color">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Integration testing helps reduce the cost of bug fixes
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Integration testing provides documentation of the system
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Why Integration Testing?</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        Integration testing, especially test driven development, is a design or implementation activity, not a testing activity.
                    </p>

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

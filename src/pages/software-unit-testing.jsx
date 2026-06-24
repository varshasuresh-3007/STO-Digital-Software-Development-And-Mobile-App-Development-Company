import React, { useEffect } from 'react';

export default function SoftwareUnitTesting() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Software Unit Testing - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Software Unit Testing Services are delivered by a dedicated team of STO Digital experts in a combination of automated tools checking and manual functional testing.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "Software Unit Testing Services are delivered by a dedicated team of STO Digital experts in a combination of automated tools checking and manual functional testing.");
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
                <h1 className="font-weight-bold">Unit Testing</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/unittesting.png" alt="html5 and css3" width="45%" height="45%" className="img-fluid" />
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Unit Testing </h2>
                <div className="row">
                    <p className="text-justify para-color px-5">Unit testing is the test that verify the specific unit of the code. From the unit testing code coverage can be calculated to detect the code which is being delivered how much is actually tested by developer. As aim of unite testing is executing each line developed, Unit testing helps to detect the corner cases which in general will not be caught during the functional tests. There are various methods of unit testing automation for every language, to name a few Gtest/Gmock, junit, Cunit. In general unit test support comes along with programming language. </p>
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
                                Unit testing improves the quality of the code
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Unit testing allows the programmer to refactor code or upgrade system libraries
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Unit testing reduces defects in the newly developed features or reduces bugs when changing the existing functionality
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 para-color">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Unit testing helps reduce the cost of bug fixes
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Unit testing provides documentation of the system
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Why Unit Testing?</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        Unit testing, especially test driven development, is a design or implementation activity, not a testing activity.
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

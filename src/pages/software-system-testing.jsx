import React, { useEffect } from 'react';

export default function SoftwareSystemTesting() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Software System Testing - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "We at sto-digital committed to deliver the software testing & System Testing with quality and with shorter turn around for new feature addition and maintenance. Web development is preferred using the MVC architecture pattern. Hence we have got expertise.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "We at sto-digital committed to deliver the software testing & System Testing with quality and with shorter turn around for new feature addition and maintenance. Web development is preferred using the MVC architecture pattern. Hence we have got expertise.");
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
                <h1 className="font-weight-bold">System Testing</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/systemtesting.png" alt="html5 and css3" width="45%" height="45%" className="img-fluid" />
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">System Testing </h2>
                <div className="row">
                    <p className="text-justify para-color px-5"><strong>MVC</strong> : Model view controller is the software architecture pattern to implement the user interfaces, it is most popular development architecture for web application. It basically separates the application (web application) logic in to three separate parts. One for the UI(view), another business logic and third is data. This helps to have loose coupling with the data UI and Business logic. It increases the software maintanability and in case if new feature needed to be added it becomes very easy at the later stages. </p>
                      </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Why System Testing?</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        We at sto-digital committed to deliver the software with quality and with shorter turn around for new feature addition and maintenance. Web development is preferred using the MVC architecture pattern. Hence we have got expertise.</p>
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

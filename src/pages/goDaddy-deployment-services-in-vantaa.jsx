import React, { useEffect } from 'react';

export default function GodaddyDeploymentServicesInVantaa() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Connecting a GoDaddy Domain - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "GoDaddy–one of the world’s largest Web hosting providers and domain name registrars–says a technical problem, and not an attack by hackers, was responsible for service disruptions that darkened websites and email for much of yesterday afternoon and evening.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "GoDaddy–one of the world’s largest Web hosting providers and domain name registrars–says a technical problem, and not an attack by hackers, was responsible for service disruptions that darkened websites and email for much of yesterday afternoon and evening.");
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
                <h1 className="font-weight-bold">GoDaddy</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/go_daddy.png" alt="html5 and css3" width="70%" height="70%" className="img-fluid" />
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Connecting a GoDaddy domain</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        GoDaddy–one of the world’s largest Web hosting providers and domain name registrars–says a technical problem, and not an attack by hackers, was responsible for service disruptions that darkened websites and email for much of yesterday afternoon and evening. </p>
                    <p className="text-justify para-color px-5">GoDaddy, the world's number one ICANN-accredited domain registrar, offers everything you might need for establishing your online presence: from custom email accounts to complete ecommerce solutions.</p>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">GoDaddy Features</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Full network redundancy
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Best-in-class equipment for firewalls, routers and servers
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Fully-Integrated monitoring system
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Reliable fire protection, detection and suppression systems
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Innovative secure technology restricting access to all data centers locations
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Complete protection due to automatic email monitoring for virus detection and cleaning
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                24/7 security staff, data center staff (both are on-site) and network operations center
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">GoDaddy Web Hosting Plans</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        GoDaddy offers affordable web hosting plans. For more complicated solutions GoDaddy provides with virtual server hosting (virtual private hosting) and dedicated server hosting.   </p>
                    <p className="text-justify para-color px-5">
                        These services are used when a website is traffic-intensive (e.g. the one of a big enterprise) and a more reliable vps hosting is needed
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

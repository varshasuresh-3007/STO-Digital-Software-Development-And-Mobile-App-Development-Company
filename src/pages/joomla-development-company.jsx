import React, { useEffect } from 'react';

export default function JoomlaDevelopmentCompany() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Joomla Development Company";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "STO Digital is one of the best Web Design and Development Company in Vantaa with skilled and professional Joomla web developers.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "STO Digital is one of the best Web Design and Development Company in Vantaa with skilled and professional Joomla web developers.");
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
                <h1 className="font-weight-bold">JOOMLA</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/joomla.png" alt="joomla logo" width="40%" height="40%" className="img-fluid" />
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">BEST JOOMLA SOLUTION PROVIDER</h2>
                <div className="row">
                    <div className="col-12">
                        <h6 className="font-weight-bold text-center pb-2">The Flexible Platform Emancipating Website Creators</h6>
                    </div>
                    <p className="text-justify para-color px-5">
                        Joomla is another Content Management System(CMS) with popular backend database support such as MySQLi, MySQL, or PostgreSQL database. Databses makes the content delivery easier for the site manager as well as the site visitor. Joomla is the opensource framework.
                    </p>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-12">
                <h2 className="font-weight-bold text-center pb-2">WHY GET JOOMLA SOLUTIONS DEVELOPED?</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                High level of customization
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Built-in SEO functionality
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Easy content management
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                E-commerce friendly
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Blogging friendly website
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Rapid development
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Quick turnaround time
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Performance-oriented solutions
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-12">
                <h2 className="font-weight-bold text-center pb-2">STO DIGITAL ADVANTAGES FOR JOOMLA SOLUTIONS</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                High level of customization
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Multiple OS support
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Security enhancement
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Functionality extension
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-12">
                <h2 className="font-weight-bold text-center pb-2">WHY CHOOSE US?</h2>
                <ul className="para-color" style={{"listStyleType":"none","paddingLeft":"0"}}>
                    <li>
                        <strong>OPEN SOURCE : </strong>There is no need to pay user fees as it is an open source CMS. At nominal development cost, we offer the best results as it has a large array of extensions or modules available for free or at very low cost.
                    </li>
                    <li>
                        <strong>HIGH SCALABILITY : </strong>This CMS allows us to handle thousands of web pages irrespective of their sizes. Our proficient developers are capable of tackling the load that too without any dip in the website performance.
                    </li>
                    <li>
                        <strong>SIMPLE REVAMPING : </strong>Most of the businesses come up with website re-branding every 2 or 3 years to go along with the web evolution. Using Joomla, we update the website easily just with a fraction of the cost.
                    </li>
                    <li>
                        <strong>EASY HANDLING : </strong>Once we create a great looking website. The website owners are able to manage &amp; update the content, create new pages, remove old pages, upload pictures, edit old pages, and much more.
                    </li>
                </ul>
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

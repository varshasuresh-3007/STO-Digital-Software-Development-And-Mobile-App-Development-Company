import React, { useEffect } from 'react';

export default function PhpDevelopmentCompanyInVantaa() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "PHP Developer, PHP Development Company in Vantaa";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "STO Digital is a leading PHP Web Design & Development Company in Vantaa which provides reliable custom Web Design & Development. PHP Web Application Development For your business needs.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "STO Digital is a leading PHP Web Design & Development Company in Vantaa which provides reliable custom Web Design & Development. PHP Web Application Development For your business needs.");
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
                <h1 className="font-weight-bold">PHP WEB DEVELOPMENT</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/php.png" alt="html5 and css3" width="60%" height="60%" className="img-fluid" />
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">PHP Web Development</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">PHP is, hypertext Pre-processor, it is opensource server side scripting language. It is most widely used server-side scripting programming language. PHP is supported by over million web servers, and used over 25 million pages.  PHP is most suited for server side to display the dynamic web page content. Main advantage of PHP is being lightweight and open source programming language, which does not add up the cost of the software, because of no licencing cost.</p>
                    <p className="text-justify para-color px-5">Supporting the php based web pages is easy and efficient. It also provides the smooth integration with the backend databases like MySQL and Postgrasql, not only this its ability to work with database engine makes it more useful. </p>

                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Codeigniter Framework Development Services</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Codeigniter is a PHP-driven framework, containing a grab-bag of libraries, helpers, plug-ins and other resources
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Codeigniter takes care of complex procedures and functionalities for which PHP is defined
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Codeigniter does all the heavy lifting for you while maintaining high performance
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Codeigniter PHP developers create a clean design and code readability for code reusability
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Codeigniter implifies PHP syntax, streamline the code underlying your web pages, and simply churn out dynamic, interactive and professional website required
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Codeigniter is so natural and easy that it reduces the learning curve to just a day
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Codeigniter Framework Development provides high flexibility and reliability to Codeigniter Website Developers team to develop outstanding web applications based on
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
              <h2 className="font-weight-bold text-center pb-2">HOW WE OFFER PHP DEVELOPMENT SERVICES</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        Our talented programmers live up to mark all your PHP web development requirements including website development, corporate website development, etc.
                    </p>
                    <p className="text-justify para-color px-5">
                        At <strong>STO Digital web design,</strong> We make complete use of this open source scripting language to create lively web pages.
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

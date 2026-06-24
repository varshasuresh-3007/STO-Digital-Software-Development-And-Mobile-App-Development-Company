import React, { useEffect } from 'react';

export default function AutomationDeploymentServices() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Automation Deployment Services - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "There are various tools and support available for the server side automation, serverside automation includes the deployment support backup and recovery auto updating the software, new code push, upgrading the OEMs.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "There are various tools and support available for the server side automation, serverside automation includes the deployment support backup and recovery auto updating the software, new code push, upgrading the OEMs.");
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
                <h1 className="font-weight-bold">Deployment Automation Support</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/tomcat.png" alt="html5 and css3" width="60%" height="60%" className="img-fluid" />
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Deployment Automation Support</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">There are various tools and support available for the server side automation, serverside automation includes the deployment support backup and recovery auto updating the software, new code push, upgrading the OEMs.  We at sto-digital support all these deployments using the few of the market leading technology such as Ansible, python scripting, shell scripting.
                    </p>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Ansible</h2>

                <div className="row">
                    <p className="text-justify para-color px-5">
                        Ansible is the automation orchestration, used in case of large deployment. Ansible is free opensource tool which helps to execute the commands/scripts and orchestrate them in a desired fashion. It helps us to do upgrade of the software or periodic maintenance without bringing down all server and in automated way, which reduces the human error possibility and reduces the downtime.
                    </p>

                </div>
            </div>

        </div>
        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Scripting</h2>

                <div className="row">
                    <p className="text-justify para-color px-5">
                        Automation is the way to do the repetitive task, Industry is moving towards the automation very fast.
                        Python is the leading scripting language to provide the automation. Python is interpreted language and high level programming language which makes the development in python very fast. With its rich set of modules, which improves the speed and efficiency in development. Python is highly scalable language along with lot of features like integration of backend, http handling etc..
                        We at sto-digital already have development team capable of delivering the software developed using Python.                    </p>

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

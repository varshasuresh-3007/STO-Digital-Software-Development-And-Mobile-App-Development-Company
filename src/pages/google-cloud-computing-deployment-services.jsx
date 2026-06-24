import React, { useEffect } from 'react';

export default function GoogleCloudComputingDeploymentServices() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Google Computing Services - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Google Cloud Platform services can be accessed by software developers, cloud administrators and other enterprise IT professionals over the public internet or through a dedicated network connection.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "Google Cloud Platform services can be accessed by software developers, cloud administrators and other enterprise IT professionals over the public internet or through a dedicated network connection.");
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
                <h1 className="font-weight-bold">GOOGLE CLOUD PLATFORM</h1>
            </div>
            <div className="col-md-7 text-center img-div">
                <img src="/debug/img/google_cloud.png" alt="html5 and css3" width="65%" height="65%" className="img-fluid" />
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Google Cloud Platform</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">Google Cloud Platform is a suite of public cloud computing services offered by Google. The platform includes a range of hosted services for compute, storage and application development that run on Google hardware. </p>
                    <p className="text-justify para-color px-5"> Google Cloud Platform services can be accessed by software developers, cloud administrators and other enterprise IT professionals over the public internet or through a dedicated network connection. </p>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Google Cloud Platform offerings</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Google Cloud Platform offers services for compute, storage, networking, big data, machine learning
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Google Compute Engine, which is an infrastructure-as-a-service (IaaS) offering that provides users with virtual machine instances for workload hosting
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Google App Engine, which is a platform-as-a-service (PaaS) offering that gives software developers access to Google's scalable hosting
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="para-color mb-0" style={{"listStyleType":"none","paddingLeft":"10px"}}>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Google Cloud Storage, which is a cloud storage platform designed to store large, unstructured data sets
                            </li>
                            <li>
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon" alt="tick" width="20" height="20" />
                                Google Container Engine, which is a management and orchestration system for Docker containers that runs within Google's public cloud. Google Container Engine is based on the Google Kubernetes container orchestration engine.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="row p-4 shadow-common contents-tech" style={{"backgroundColor":"white"}}>

            <div className="col-sm-12">
                <h2 className="font-weight-bold text-center pb-2">Google Cloud  Higher-level services</h2>
                <div className="row">
                    <p className="text-justify para-color px-5">
                        Google continues to add higher-level services, such as those related to big data and machine learning, to its cloud platform. </p>
                    <p className="text-justify para-color px-5">
                        For artificial intelligence (AI), Google offers its Cloud Machine Learning Engine, a managed service that enables users to build and train machine learning models. Various APIs are also available for the translation and analysis of speech, text, images and videos.
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

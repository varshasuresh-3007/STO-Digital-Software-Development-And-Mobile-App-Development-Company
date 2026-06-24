import React, { useEffect } from 'react';

export default function SoftwareDevelopmentLifeCycle() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Software Development Life Cycle Models - STO Digital";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "STO Digital Software Development Life Cycle includes a plan for how to develop, alter, and maintain a software system. The life cycle defines a methodology for improving the quality of software and the overall development process.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "STO Digital Software Development Life Cycle includes a plan for how to develop, alter, and maintain a software system. The life cycle defines a methodology for improving the quality of software and the overall development process.");
      document.head.appendChild(metaDesc);
    }
  }, []);

  return (
    <>
      <style>{`
        .backgrund-image-txt-left {
          background-image: url("/debug/img/sdlc_img.jpg");
        }
      `}</style>
      

<section className="seo-parallax">
    
    
    <div className="col-12">
        <div className="row">
            <div className="backgrund-image-txt-left">
                <div className="row h-100">
                    <div className="col-lg-6 col-9 d-flex">
                        <h1 className="text-center m-auto">Software Development<br /> Life Cycle</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="technology--info">

    <div className="container">

        <div className="row text-center">
            <div className="col-12">
                <h2 className="font-weight-bold" style={{"color":"#0250a9"}}>The Seven Phases Of SDLC</h2>
            </div>
        </div>
        
        <div className="row text-center">
            <div className="col-12">
                <picture>
                    <source media="(min-width: 650px)" srcSet="/debug/img/infographic-copy@3x.png" />
                    <source media="(min-width: 465px)" srcSet="/debug/img/infographic-copy@2x.png" />
                    <img src="/debug/img/infographic-copy.png" alt="sdlc phases" style={{"width":"100%"}} />
                </picture>
            </div>
        </div>

        <div className="product-description--div p-4">

            <div className="row technology_contents-ui">
                <div className="col-sm-12 px-5 pb-1">
                    <h2 className="font-weight-bold text-let pl-1" style={{"color":"#0250a9"}}>1.Planning</h2>
                </div>
            </div>

            <div className="row project-mean">
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The planning phase involves aspects of project and product
                        management. This may include:
                    </p>
                </div>
                <div className="col-md-12 px-5 pb-1 full-length-list">
                        <ul className="para-color" style={{"listStyleType":"none"}}>
                            <li className="ml-1">

                                <img src="/debug/img/tick.svg" className="img-fluid list-icon-large" alt="tick" width="20" height="20" />
                                Resource allocation (both human and materials)
                            </li>
                            <li className="ml-1">
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon-large" alt="tick" width="20" height="20" />
                                Capacity planning
                            </li>
                            <li className="ml-1">
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon-large" alt="tick" width="20" height="20" />
                                Project scheduling
                            </li>
                            <li className="ml-1">
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon-large" alt="tick" width="20" height="20" />
                                Cost estimation
                            </li>
                            <li className="ml-1">
                                <img src="/debug/img/tick.svg" className="img-fluid list-icon-large" alt="tick" width="20" height="20" />
                                Provisioning
                            </li>
                        </ul>
                    </div>
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The outputs of the planning phase include: project plans, schedules, cost estimations, and procurement requirements. Ideally,
                        Project Managers and Development staff collaborate with Operations and Security teams
                        to ensure all perspectives are represented.
                    </p>
                </div>

            </div>
        </div>

        <div className="product-description--div p-4">

            <div className="row technology_contents-ui">
                <div className="col-sm-12 px-5 pb-1">
                    <h2 className="font-weight-bold text-let pl-1" style={{"color":"#0250a9"}}>2.Requirements</h2>
                </div>
            </div>

            <div className="row project-mean">
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The planning phase involves aspects of project and product
                        management. This may include:
                    </p>
                </div>
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The outputs of the planning phase include: project plans, schedules, cost estimations, and procurement requirements. Ideally,
                        Project Managers and Development staff collaborate with Operations and Security teams
                        to ensure all perspectives are represented.
                    </p>
                </div>

            </div>
        </div>

        <div className="product-description--div p-4">

            <div className="row technology_contents-ui">
                <div className="col-sm-12 px-5 pb-1">
                    <h2 className="font-weight-bold text-let pl-1" style={{"color":"#0250a9"}}>3.Design and Prototyping</h2>
                </div>
            </div>

            <div className="row project-mean">
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The planning phase involves aspects of project and product
                        management. This may include:
                    </p>
                </div>
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The outputs of the planning phase include: project plans, schedules, cost estimations, and procurement requirements. Ideally,
                        Project Managers and Development staff collaborate with Operations and Security teams
                        to ensure all perspectives are represented.
                    </p>
                </div>

            </div>
        </div>

    </div>
</section>

<section className="technology--info">

    <div className="container">

        <div className="product-description--div p-4">

            <div className="row technology_contents-ui">
                <div className="col-sm-12 px-5 pb-1">
                    <h2 className="font-weight-bold text-let pl-1" style={{"color":"#0250a9"}}>4.Software Development</h2>
                </div>
            </div>

            <div className="row project-mean">
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The planning phase involves aspects of project and product
                        management. This may include:
                    </p>
                </div>
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The outputs of the planning phase include: project plans, schedules, cost estimations, and procurement requirements. Ideally,
                        Project Managers and Development staff collaborate with Operations and Security teams
                        to ensure all perspectives are represented.
                    </p>
                </div>

            </div>
        </div>

        <div className="product-description--div p-4">

            <div className="row technology_contents-ui">
                <div className="col-sm-12 px-5 pb-1">
                    <h2 className="font-weight-bold text-let pl-1" style={{"color":"#0250a9"}}>5. Testing</h2>
                </div>
            </div>

            <div className="row project-mean">
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The planning phase involves aspects of project and product
                        management. This may include:
                    </p>
                </div>
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The outputs of the planning phase include: project plans, schedules, cost estimations, and procurement requirements. Ideally,
                        Project Managers and Development staff collaborate with Operations and Security teams
                        to ensure all perspectives are represented.
                    </p>
                </div>

            </div>
        </div>

        <div className="product-description--div p-4">

            <div className="row technology_contents-ui">
                <div className="col-sm-12 px-5 pb-1">
                    <h2 className="font-weight-bold text-let pl-1" style={{"color":"#0250a9"}}>6. Deployment</h2>
                </div>
            </div>

            <div className="row project-mean">
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The planning phase involves aspects of project and product
                        management. This may include:
                    </p>
                </div>
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The outputs of the planning phase include: project plans, schedules, cost estimations, and procurement requirements. Ideally,
                        Project Managers and Development staff collaborate with Operations and Security teams
                        to ensure all perspectives are represented.
                    </p>
                </div>

            </div>
        </div>

        <div className="product-description--div p-4">

            <div className="row technology_contents-ui">
                <div className="col-sm-12 px-5 pb-1">
                    <h2 className="font-weight-bold text-let pl-1" style={{"color":"#0250a9"}}>7. Operations and Maintenance</h2>
                </div>
            </div>

            <div className="row project-mean">
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The planning phase involves aspects of project and product
                        management. This may include:
                    </p>
                </div>
                <div className="col-sm-12 px-5 pb-1">
                    <p className="text-justify pb-1 ">
                        The outputs of the planning phase include: project plans, schedules, cost estimations, and procurement requirements. Ideally,
                        Project Managers and Development staff collaborate with Operations and Security teams
                        to ensure all perspectives are represented.
                    </p>
                </div>

            </div>
        </div>

    </div>
</section>


    </>
  );
}

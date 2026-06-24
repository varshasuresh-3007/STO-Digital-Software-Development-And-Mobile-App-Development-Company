import React from 'react';

export default function AiTechnologiesSection() {
  return (
    <>
  <section className="technology">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center pb-5">
          <h2 className="text-uppercase d-inline-block">
            AI &amp; Data Technologies
          </h2>
          <div className="h-line"></div>
        </div>
      </div>

      <div className="row technology-box">
        <div className="col-12">
          <div className="row">
            <div className="col text-center" data-aos="zoom-out" data-aos-duration="1000" style={{"margin":"auto"}}>
              <img src="/debug/img/AILogo.svg" className="AILogo" alt="java" style={{"width":"120px"}} />
              <p className="font-weight-bold" style={{"fontSize":"14px"}}>Artificial Intelligence (AI)</p>
            </div>
            <div className="col text-center" data-aos="zoom-out" data-aos-duration="1000" style={{"margin":"auto"}}>
              <img src="/debug/img/MLLogo.svg" className="AILogo" alt="java" style={{"width":"120px"}} />
              <p className="font-weight-bold" style={{"fontSize":"14px"}}>Machine Learning (ML)</p>
            </div>
            <div className="col text-center" data-aos="zoom-out" data-aos-duration="1000" style={{"margin":"auto"}}>
              <img src="/debug/img/deep-learningLogo.svg" className="AILogo" alt="java" style={{"width":"120px"}} />
              <p className="font-weight-bold" style={{"fontSize":"14px"}}>Deep Learning</p>
            </div>
            <div className="col text-center" data-aos="zoom-out" data-aos-duration="1000" style={{"margin":"auto"}}>
              <img src="/debug/img/nlpLogo.svg" className="AILogo" alt="java" style={{"width":"120px"}} />
              <p className="font-weight-bold" style={{"fontSize":"14px"}}>NLP</p>
            </div>
            <div className="col text-center" data-aos="zoom-out" data-aos-duration="1000" style={{"margin":"auto"}}>
              <img src="/debug/img/computer-visioLogo.svg" className="AILogo" alt="java" style={{"width":"120px"}} />
              <p className="font-weight-bold" style={{"fontSize":"14px"}}>Computer Vision</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>

    </>
  );
}

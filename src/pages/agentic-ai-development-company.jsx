import React, { useEffect } from 'react';

export default function AgenticAiDevelopmentCompany() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Agentic AI Development Company | STO Digital AI Services";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "STO Digital is a leading agentic AI development company offering custom autonomous AI solutions, smart automation and intelligent systems to transform business operations.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "STO Digital is a leading agentic AI development company offering custom autonomous AI solutions, smart automation and intelligent systems to transform business operations.");
      document.head.appendChild(metaDesc);
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInDown {
            from {
                opacity: 0;
                transform: translateY(-40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-20px);
            }
        }
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-60px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(60px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes gradientShift {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
        @keyframes fa-spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        h1 {
            font-size: 4rem;
            font-weight: 800;
            letter-spacing: -.8px;
            animation: slideInDown 0.8s ease-out;
            background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-transform: uppercase;
            line-height: 1.1;
        }
        h2 {
            font-size: 1.5rem;
            animation: slideInDown 1s ease-out 0.2s both;
            font-weight: 300;
            letter-spacing: 0.5px;
        }
        .become_img_bg {
            background-image: url("/debug/img/agenticai.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 500px;
            width: 100%;
            position: relative;
            overflow: hidden;
            animation: fadeInScale 1s ease-out;
            align-items: center;
        }
        .become_img_bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(1, 97, 209, 0.5) 0%, rgba(121, 148, 221, 0.3) 100%);
            animation: fadeInScale 1.2s ease-out;
        }
        .become_img_bg .m-auto {
            position: relative;
            z-index: 2;
            animation: float 3s ease-in-out infinite;
        }
        .bannerContact {
            width: 100%;
            max-width: 350px;
            margin-right: 40px;
        }
        .service_dubai_contact {
            background-color: #0161d1;
            padding-top: 50px;
            padding-bottom: 50px;
        }
        .service_dubai_contact label,
        .service_dubai_contact h2 {
            color: #ffffff;
        }
        .service_dubai_contact input {
            height: 45px;
        }
        .service_dubai_contact button {
            background-color: white;
            color: #0161d1;
            margin: auto;
            width: 200px;
            height: 56px;
        }
        .service_dubai_contact textarea {
            height: 100px;
        }
        .agentic-ai-section {
            padding: 48px 20px;
            color: #1e293b;
        }
        .agentic-container {
            margin: 0 auto;
        }
        .agentic-header {
            text-align: center;
            margin-bottom: 50px;
        }
        .agentic-header h1 {
            font-size: 2.5rem;
            color: #0f172a;
            margin-bottom: 10px;
        }
        .agentic-header p {
            font-size: 1.15rem;
            color: #64748b;
        }
        .agentic-flex-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
            justify-content: center;
            margin-bottom: 50px;
        }
        .agentic-card {
            background: #ffffff;
            flex: 1 1 300px;
            max-width: 340px;
            background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/debug/img/abstract.avif');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            padding: 35px 25px;
            border-radius: 20px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            cursor: pointer;
            position: relative;
        }
        .agentic-card img {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100px;
        }
        .agentic-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border-color: #3b82f6;
        }
        .agentic-card:hover .agentic-icon {
            transform: scale(1.2) rotate(5deg);
        }
        .agentic-icon {
            font-size: 2.8rem;
            margin-bottom: 20px;
            transition: transform 0.3s ease;
        }
        .agentic-card span {
            font-weight: 600;
            font-size: 1.1rem;
            color: #334155;
        }
        .about-infoNewBox {
            background: linear-gradient(135deg, #1e293b 0%, #01326a 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            transition: all 0.3s ease;
            cursor: default;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(56, 189, 248, 0.2);
        }
        .about-infoNewBox:hover {
            transform: translateY(-10px);
            border-color: #38bdf8;
        }
        .about-infoNewBox p {
            color: #eaebec;
        }
        .about-infoNewBox:hover p {
            color: #f8fafc;
        }
        .agentic-footer-card {
            background: linear-gradient(135deg, #1e293b 0%, #01326a 100%);
            color: #f1f5f9;
            padding: 40px;
            border-radius: 24px;
            line-height: 1.8;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.2);
        }
        .agentic-footer-card p {
            color: #f1f5f9;
        }
        .agentic-footer-card strong {
            color: #60a5fa;
        }
        .boxWrapper {
            background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.98)), url('/debug/img/network-mesh-wire-digital-technol.avif');
            position: relative;
            overflow: hidden;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
        .boxWrapper::before {
            content: "";
            position: absolute;
            top: -50px;
            right: -50px;
            width: 150px;
            height: 150px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 50%;
        }
        .sto-digital-container {
            --primary: #0f172a;
            --secondary: #0ea5e9;
            --accent: #14b8a6;
            --bg-light: #f8fafc;
            --text-dark: #1e293b;
            --text-muted: #475569;
            margin: 0 auto !important;
            padding-top: 0 !important;
            padding-bottom: 48px !important;
            background-color: #ffffff;
            border-radius: 24px;
            color: var(--text-dark);
        }
        .ts-hero {
            display: flex;
            align-items: center;
            gap: 40px;
            padding: 40px;
            background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.5)), url('/debug/img/abstract.avif');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 20px;
            margin-bottom: 60px;
        }
        .ts-hero-content {
            flex: 1;
        }
        .ts-hero-content h3,
        .benefits-content h3 {
            font-size: 35px;
            font-weight: 600;
        }
        .ts-hero-image {
            flex: 1;
            display: flex;
            justify-content: center;
        }
        .ts-hero-image img {
            max-width: 100%;
            height: auto;
            border-radius: 16px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .ts-hero h1 {
            font-size: 2.2rem;
            color: var(--primary);
            line-height: 1.2;
            margin-bottom: 20px;
        }
        .ts-hero p {
            font-size: 1.1rem;
            color: var(--text-muted);
            line-height: 1.7;
        }
        .ts-differentiators-title {
            text-align: center;
            font-size: 1.8rem;
            margin-bottom: 40px;
            color: var(--primary);
            font-weight: 700;
        }
        .ts-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            margin-bottom: 50px;
        }
        .ts-card {
            background: #ffffff;
            flex: 1 1 300px;
            max-width: 350px;
            padding: 30px;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .ts-card:hover {
            transform: translateY(-5px);
            border-color: var(--secondary);
            box-shadow: 0 10px 30px rgba(14, 165, 233, 0.1);
        }
        .ts-icon {
            width: 48px;
            height: 48px;
            background: rgba(14, 165, 233, 0.1);
            color: var(--secondary);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 20px;
            transition: transform 0.3s ease;
        }
        .ts-card:hover .ts-icon {
            background: var(--secondary);
            color: #fff;
            transform: rotate(10deg);
        }
        .ts-card-text {
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.5;
        }
        .ts-footer {
            background: linear-gradient(135deg, #1e293b 0%, #01326a 100%);
            color: #f1f5f9;
            padding: 40px;
            border-radius: 24px;
            line-height: 1.8;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.2);
            font-size: 20px;
        }
        .containerCommon {
            margin: 0 auto;
            color: #1a202c;
        }
        .servicesContainer {
            padding: 48px 0;
        }
        .services-header {
            text-align: center;
            margin-bottom: 48px;
        }
        .services-header h1 {
            font-size: 2.8rem;
            color: #0f172a;
            margin-bottom: 20px;
            font-weight: 800;
        }
        .services-flex-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 25px;
            justify-content: center;
        }
        .service-card {
            background: #ffffff;
            flex: 1 1 350px;
            max-width: 380px;
            padding: 35px;
            border-radius: 20px;
            border: 1px solid #e2e8f0;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            display: flex;
            flex-direction: column;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.99)), url('/debug/img/ai-chip-intelligence-technology-deep-learning.jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border-color: #3b82f6;
            background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.95)), url('/debug/img/ai-chip-intelligence-technology-deep-learning.jpg');
        }
        .service-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
        }
        .service-icon {
            font-size: 2rem;
            background: #eff6ff;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 14px;
            color: #3b82f6;
        }
        .service-number {
            font-weight: 900;
            color: #e2e8f0;
            font-size: 1.5rem;
        }
        .service-card h2 {
            font-size: 1.4rem;
            color: #1e293b;
            margin-bottom: 15px;
            line-height: 1.3;
        }
        .service-description {
            font-size: 0.95rem;
            color: #475569;
            margin-bottom: 20px;
            line-height: 1.6;
        }
        .service-list {
            list-style: none;
            padding: 0;
            margin: 0 0 25px 0;
            flex-grow: 1;
        }
        .service-list li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 10px;
            font-size: 0.9rem;
            color: #334155;
        }
        .service-list li::before {
            content: "→";
            position: absolute;
            left: 0;
            color: #3b82f6;
            font-weight: bold;
        }
        .keywords-box {
            border-top: 1px solid #f1f5f9;
            padding-top: 15px;
            margin-top: auto;
        }
        .keywords-label {
            display: block;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            color: #94a3b8;
            margin-bottom: 8px;
            letter-spacing: 0.05em;
        }
        .keywords-text {
            font-size: 0.85rem;
            color: #64748b;
            font-style: italic;
        }
        .container {
            margin: 0 auto;
            color: #1a202c;
            line-height: 1.6;
        }
        .section-header {
            text-align: center;
            margin-bottom: 50px;
        }
        .section-header h2 {
            font-size: 2.2rem;
            color: #0f172a;
            margin-bottom: 10px;
        }
        .industry-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            margin-bottom: 80px;
        }
        .industry-card {
            background: #fff;
            flex: 1 1 350px;
            max-width: 380px;
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
        }
        .industry-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .industry-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            background-color: #cbd5e1;
        }
        .industry-content h3 {
            margin: 0 0 10px 0;
            color: #3b82f6;
            font-size: 22px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .benefits-section {
            background: #f8fafc;
            background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.5)), url('/debug/img/abstract.avif');
            padding: 50px;
            border-radius: 30px;
            margin-bottom: 80px;
            display: flex;
            align-items: center;
            gap: 40px;
            flex-wrap: wrap;
        }
        .benefits-content {
            flex: 1;
            min-width: 300px;
        }
        .benefits-list {
            list-style: none;
            padding: 0;
        }
        .benefits-list li {
            padding: 12px 0;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 15px;
            border-bottom: 1px solid #e2e8f0;
        }
        .benefits-list li::before {
            content: "✓";
            background: #10b981;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
        .cta-box {
            background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/debug/img/network-mesh-wire-digital-technol.avif');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: top;
            padding: 60px;
            border-radius: 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .cta-box h2 {
            color: #60a5fa;
            margin-bottom: 20px;
        }
        .cta-box p {
            max-width: 800px;
            margin: 0 auto 30px;
            opacity: 0.9;
            font-size: 1.1rem;
        }
        .keyword-cloud {
            margin-top: 60px;
            text-align: center;
            padding-bottom: 48px;
        }
        .keyword-cloud h4 {
            margin-bottom: 20px;
            color: #64748b;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .pill-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
        }
        .pill {
            background: #eff6ff;
            color: #3b82f6;
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 500;
            border: 1px solid #dbeafe;
        }
        @media (max-width: 768px) {
            .benefits-section {
                padding: 30px;
            }
            .cta-box {
                padding: 40px 20px;
            }
            .services-header h1 {
                font-size: 2rem;
            }
            .service-card {
                flex: 1 1 100%;
                max-width: 100%;
            }
            h1 {
                font-size: 2rem;
                margin-top: 10px;
            }
            h2 {
                font-size: 1.2rem;
            }
            .become_img_bg {
                flex-direction: column;
            }
            .become_img_bg .m-auto {
                margin-left: auto !important;
                margin-right: auto !important;
            }
        }
        @media (max-width: 992px) {
            .ts-hero {
                flex-direction: column;
                text-align: center;
            }
            .ts-hero-image {
                order: -1;
            }
        }
        @media (max-width: 640px) {
            .agentic-header h1 {
                font-size: 2rem;
            }
            .agentic-card {
                flex: 1 1 100%;
            }
        }
        .contentWrapperBox {
            background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.2)), url('/debug/img/ailayer.avif');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-attachment: fixed;
            position: relative;
            z-index: 1;
        }
        .contentWrapperBox::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            box-shadow: inset 0 0 100px 50px #ffffff;
            pointer-events: none;
            z-index: -1;
        }
      `}</style>
      
<div id="snackbar"></div>
<div id="snackbar_error"></div>


















































































































































































































































































































































































































<section>
    <div className="col-12">
        <div className="row">
            <div className="become_img_bg d-flex">
                <div className="m-auto" data-aos="zoom-in">
                    <h1 className="text-light text-center font-weight-bold">
                        Agentic AI Development Company
                    </h1>
                    <h2 className="text-light text-center font-weight-bold">
                        Empowering Businesses with Autonomous, Goal-Driven AI Systems
                    </h2>
                </div>

                
                <div className="bannerContact">
                    <form id="contactSeo" className="web_analysis p-3 pt-2 d-md-block d-none">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="mb-0 d-inline-block mb-2">Contact Us</h2>
                            </div>
                            <input type="hidden" name="lead_url" defaultValue="/agentic-ai-development-company" />

                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="fName">Name <span style={{"color":"red"}}>*</span></label>
                                    <input type="text" className="form-control" name="seo_name" placeholder="Your Name" required="" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="email">Email <span style={{"color":"red"}}>*</span></label>
                                    <input type="email" className="form-control" name="seo_email" placeholder="Your Email" required="" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="poh">Phone <span style={{"color":"red"}}>*</span></label>
                                    <input type="text" className="form-control" name="seo_phone" placeholder="Your Phone" required="" />
                                </div>
                            </div>

                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <label htmlFor="msg">Message</label>
                                    <textarea className="form-control" name="seo_message" placeholder="Tell us about your project..."></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="g-recaptcha" data-sitekey="6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN"></div>
                            </div>
                            <div className="col-12">
                                <span className="add_seo_error" style={{"display":"none"}}></span>
                                <button type="submit" className="btn w-100 add_seo_pop_up_button">
                                    Submit <span className="add_seo_pop_up_fa_spin_icon"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<div className="boxWrapper">
    <section className="about py-5">
        <div className="container about-infoNewBox">
            <div className="row">
                <div className="col-md-12">
                    <p className="px-4 pt-4 pb-0 mb-4">
                        STO Digital is an experienced <b>agentic AI development company</b> which assists businesses in
                        designing, developing, and implementing intelligent AI agents with the ability to think, plan,
                        act,
                        learn, and collaborate independently. Our Agentic AI solutions are more than conventional AI
                        models
                        as they allow systems to make autonomous decisions, evolve in a changing environment, and
                        execute
                        intricate workflows with a minimum number of human interventions.
                    </p>
                    <p className="px-4 py-0">
                        In the modern digital economy, where the speed of life is fast and companies focus on
                        automation, it
                        is more than automation that companies require – it is AI agents with the ability to reason,
                        plan,
                        and provide results. The services offered by STO Digital based on the Agentic AI are aimed at
                        assisting organisations in increasing their scale, minimising expenses, enhancing
                        decision-making,
                        and gaining a competitive advantage.
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>
<div className="contentWrapperBox">
    <div className="agentic-ai-section">
        <div className="agentic-container container containerCommon">

            <header className="agentic-header pt-4">
                <h3 className="font-weight-bold">What Is Agentic AI?</h3>
                <p>The AI systems with autonomous agents that have the ability to:</p>
            </header>

            <div className="agentic-flex-wrapper">
                <div className="agentic-card">
                    <div className="agentic-icon">🎯</div>
                    <span>Setting and pursuing goals</span>
                </div>

                <div className="agentic-card">
                    <div className="agentic-icon">🗺️</div>
                    <span>Planning multi-step actions</span>
                </div>

                <div className="agentic-card">
                    <div className="agentic-icon">🛠️</div>
                    <span>Engaging with systems, APIs and tools.</span>
                </div>

                <div className="agentic-card">
                    <div className="agentic-icon">📈</div>
                    <span>Feedback and experience learning.</span>
                </div>

                <div className="agentic-card">
                    <div className="agentic-icon">🤝</div>
                    <span>Work with other agents and human beings.</span>
                </div>
            </div>

            <div className="container agentic-footer-card">
                <p className="mb-0">
                    In contrast to classical AI or rule-based automation, <strong>agentic AI systems are active,
                        dynamic,
                        and autonomous.</strong>
                    They are best suited to complex business scenarios where dynamic and scale-based decisions need to
                    be
                    made.
                </p>
            </div>

        </div>
    </div>
    <div className="sto-digital-container container containerCommon">

        <section className="ts-hero">
            <div className="ts-hero-content">
                <h3>Why Choose STO Digital for Agentic AI Development?</h3>
                <p>STO Digital is an AI engineering firm with profound knowledge in large language models (LLMs), machine
                    learning, cloud architecture, and enterprise computing to provide production-scale Agentic AI
                    solutions.
                </p>
            </div>
            <div className="ts-hero-image">
                <img src="/debug/img/sto-digitalaichoose.avif" alt="Agentic AI Development" />
            </div>
        </section>

        <h3 className="ts-differentiators-title font-weight-bold">Our Key Differentiators</h3>

        <div className="ts-grid">
            <div className="ts-card">
                <div className="ts-icon">🏗️</div>
                <p className="ts-card-text">Experience in the architecture and orchestration of agentic AI.</p>
            </div>

            <div className="ts-card">
                <div className="ts-icon">⚡</div>
                <p className="ts-card-text">The experience with the autonomous agents, powered by the LLM.</p>
            </div>

            <div className="ts-card">
                <div className="ts-icon">🛡️</div>
                <p className="ts-card-text">Vigorous emphasis on business-level security and scalability.</p>
            </div>

            <div className="ts-card">
                <div className="ts-icon">🎯</div>
                <p className="ts-card-text">Personalised AI agents in business goal alignment.</p>
            </div>

            <div className="ts-card">
                <div className="ts-icon">🚀</div>
                <p className="ts-card-text">Strategy from deployment to optimisation delivery.</p>
            </div>
        </div>

        

    </div>
    <div className="container servicesContainer containerCommon pt-0">
        <header className="services-header">
            <h3 className="font-weight-bold">Our Agentic AI Development Services</h3>
        </header>

        <div className="services-flex-grid">
            <div className="service-card">
                <div className="service-top">
                    <div className="service-icon">🧩</div>
                    <div className="service-number">01</div>
                </div>
                <h2>Custom Agentic AI Strategy and Consulting.</h2>
                <p className="service-description">We begin with you learning your business processes, challenges and goals.
                    The
                    AI consultants of our business develop a specific Agentic AI roadmap to match your strategic and
                    operational goals.</p>
                <ul className="service-list">
                    <li>AI use case identification (agentic).</li>
                    <li>AI feasibility analysis</li>
                    <li>Multi-agent system design</li>
                    <li>Artificial intelligence governance and risk measurement.</li>
                    <li>Planning of AI strategy using ROI.</li>
                </ul>
                <div className="keywords-box">
                    <span className="keywords-label">Trending Keywords</span>
                    <span className="keywords-text">agentic AI strategy, AI agents consulting, autonomous AI systems</span>
                </div>
            </div>

            <div className="service-card">
                <div className="service-top">
                    <div className="service-icon">🤖</div>
                    <div className="service-number">02</div>
                </div>
                <h2>Autonomous AI Agent Development</h2>
                <p className="service-description">STO Digital is a company that builds bespoke autonomous AI agents that are
                    capable of undertaking independent tasks, decisions, and communication with digital environments.
                </p>
                <ul className="service-list">
                    <li>Goal-orientated AI agents</li>
                    <li>LLM-based reasoning agents</li>
                    <li>Tool-using AI agents</li>
                    <li>Memory-enabled AI agents</li>
                    <li>Instantaneous autonomous agents.</li>
                </ul>
                <p className="service-description">Our AI agents will perform well in the enterprise real-life situation.
                </p>
                <div className="keywords-box">
                    <span className="keywords-label">Trending Keywords</span>
                    <span className="keywords-text">autonomous AI agents, LLM agents, AI decision-making systems</span>
                </div>
            </div>

            <div className="service-card">
                <div className="service-top">
                    <div className="service-icon">🕸️</div>
                    <div className="service-number">03</div>
                </div>
                <h2>Multi-Agent Systems &amp; Orchestration</h2>
                <p className="service-description">We implement multi-agent intelligent systems such that multiple
                    intelligent
                    agents cooperate to solve intricate problems. Such systems are suited to large operations, workflows
                    in
                    an enterprise and distributed decision-making.</p>
                <ul className="service-list">
                    <li>Enterprise process coordination.</li>
                    <li>Supply chain optimisation</li>
                    <li>Financial forecasting and financial analysis.</li>
                    <li>Automation of customer service.</li>
                    <li>IT monitoring and operations.</li>
                </ul>
                <div className="keywords-box">
                    <span className="keywords-label">Trending Keywords</span>
                    <span className="keywords-text">multi-agent AI systems, agent orchestration, collaborative AI</span>
                </div>
            </div>

            <div className="service-card">
                <div className="service-top">
                    <div className="service-icon">⚙️</div>
                    <div className="service-number">04</div>
                </div>
                <h2>Agentic AI for Business Process Automation</h2>
                <p className="service-description">Redefine your processes, using agentic AI-driven automation, beyond RPA.
                    Solutions are able to examine circumstances, choose courses and act upon systems.</p>
                <ul className="service-list">
                    <li>Intelligent document processing.</li>
                    <li>Independent customer care personnel.</li>
                    <li>Automation of CRM and ERP tasks in AI.</li>
                    <li>Automation of compliance and reporting.</li>
                    <li>Smart task execution.</li>
                </ul>
                <div className="keywords-box">
                    <span className="keywords-label">Trending Keywords</span>
                    <span className="keywords-text">AI workflow automation, intelligent automation, agentic process
                        automation</span>
                </div>
            </div>

            <div className="service-card">
                <div className="service-top">
                    <div className="service-icon">🧠</div>
                    <div className="service-number">05</div>
                </div>
                <h2>LLM-Powered Agentic AI Solutions</h2>
                <p className="service-description">We use the state-of-the-art Large Language Models (LLMs) to build
                    reasoning-based Agentic AI systems that can comprehend the context, generate knowledge, and take
                    actions.</p>
                <ul className="service-list">
                    <li>GPT-based autonomous agents</li>
                    <li>Retrieval-augmented generation (RAG).</li>
                    <li>Context-aware AI agents</li>
                    <li>Long-term memory AI agents.</li>
                    <li>Safe implementation of enterprise LLM.</li>
                </ul>
                <div className="keywords-box">
                    <span className="keywords-label">Trending Keywords</span>
                    <span className="keywords-text">LLM agents, generative AI agents, RAG-based AI systems</span>
                </div>
            </div>

            <div className="service-card">
                <div className="service-top">
                    <div className="service-icon">🔌</div>
                    <div className="service-number">06</div>
                </div>
                <h2>Agentic AI Integration with Enterprise Systems</h2>
                <p className="service-description">STO Digital guarantees a smooth connection between the solutions of the
                    Agentic
                    AI and your current IT solution environment.</p>
                <ul className="service-list">
                    <li>ERP, CRM, and HRMS platforms</li>
                    <li>Cloud services (AWS, Azure, GCP)</li>
                    <li>Data warehouses and databases.</li>
                    <li>APIs and microservices</li>
                    <li>Business intelligence applications.</li>
                </ul>
                <p className="service-description">Our artificial intelligence agents are smart online employees in your
                    business.</p>
                <div className="keywords-box">
                    <span className="keywords-label">Trending Keywords</span>
                    <span className="keywords-text">enterprise AI integration, AI agents for ERP, AI system
                        integration</span>
                </div>
            </div>

            <div className="service-card">
                <div className="service-top">
                    <div className="service-icon">🛡️</div>
                    <div className="service-number">07</div>
                </div>
                <h2>AI Safety, Governance &amp; Monitoring</h2>
                <p className="service-description">Responsible AI is at the core of our approach. We implement robust AI
                    governance frameworks to ensure transparency, reliability, and compliance.</p>
                <ul className="service-list">
                    <li>Agent behaviour monitoring</li>
                    <li>Bias and risk mitigation</li>
                    <li>Secure data handling</li>
                    <li>Explainable AI (XAI)</li>
                    <li>Compliance with global AI regulations</li>
                </ul>
                <div className="keywords-box">
                    <span className="keywords-label">Trending Keywords</span>
                    <span className="keywords-text">AI governance, responsible AI, AI safety frameworks</span>
                </div>
            </div>

            <div className="service-card">
                <div className="service-top">
                    <div className="service-icon">📈</div>
                    <div className="service-number">08</div>
                </div>
                <h2>Continuous Optimisation &amp; AI Agent Learning</h2>
                <p className="service-description">AI systems that are agentic enhance as time goes by. Our services involve
                    continuous optimisation, performance management and improvement.</p>
                <ul className="service-list">
                    <li>High-performance agent analytics.</li>
                    <li>Feedback-loop learning</li>
                    <li>Model fine-tuning</li>
                    <li>Timely and policy optimization.</li>
                    <li>Scalability enhancements</li>
                </ul>
                <div className="keywords-box">
                    <span className="keywords-label">Trending Keywords</span>
                    <span className="keywords-text">adaptive AI systems, self-learning AI agents, AI optimisation</span>
                </div>
            </div>
        </div>
    </div>
    <div className="container useCaseContainer containerCommon">

        <section className="section-header">
            <h3 className="font-weight-bold">Industry Use Cases of Agentic AI</h3>
            <p>STO Digital provides Agentic AI solutions in industries:</p>
        </section>

        <div className="industry-grid">
            <div className="industry-card">
                <img src="/debug/img/financets.jpg" alt="Finance" className="industry-img" />
                <div className="industry-content">
                    <h3>🏦 Finance</h3>
                    <p>Financial planning agents, autonomous risk analysis, and fraud detectors.</p>
                </div>
            </div>

            <div className="industry-card">
                <img src="/debug/img/healthcare.avif" alt="Healthcare" className="industry-img" />
                <div className="industry-content">
                    <h3>🏥 Healthcare</h3>
                    <p>Smart care management, healthcare data processing agents.</p>
                </div>
            </div>

            <div className="industry-card">
                <img src="/debug/img/retail.avif" alt="Retail" className="industry-img" />
                <div className="industry-content">
                    <h3>🛍️ Retail/E-commerce</h3>
                    <p>AI retail agents, demand prediction agents.</p>
                </div>
            </div>

            <div className="industry-card">
                <img src="/debug/img/Manufacturing.avif" alt="Manufacturing" className="industry-img" />
                <div className="industry-content">
                    <h3>🏭 Manufacturing</h3>
                    <p>Supply chain agents, predictive maintenance.</p>
                </div>
            </div>

            <div className="industry-card">
                <img src="/debug/img/SaaS.avif" alt="IT SaaS" className="industry-img" />
                <div className="industry-content">
                    <h3>💻 IT &amp; SaaS</h3>
                    <p>Autonomous DevOps, artificial intelligence agents.</p>
                </div>
            </div>
        </div>

        <div className="benefits-section">
            <div className="benefits-content">
                <h3>Benefits of Agentic AI for Your Business</h3>
                <ul className="benefits-list">
                    <li>Quick and better decision-making.</li>
                    <li>Reduced operational costs</li>
                    <li>Scalable interdepartmental automation.</li>
                    <li>Better customer experience.</li>
                    <li>Increased agility and innovation.</li>
                </ul>
                <p style={{"marginTop":"20px","color":"#64748b","fontStyle":"italic"}}>
                    The agentic AI helps the businesses shift to proactive intelligence rather than the reactive
                    operations.
                </p>
            </div>
            <div style={{"flex":"1","textAlign":"center"}}>
                <img src="/debug/img/aiagentbenefit.avif" alt="Benefits" style={{"maxWidth":"100%","borderRadius":"20px","boxShadow":"0 10px 20px rgba(0,0,0,0.05)"}} />
            </div>
        </div>

        <div className="cta-box">
            <h2>Why Agentic AI Is the Future of Enterprise AI</h2>
            <p>The next form of artificial intelligence is agentic AI, the type of system capable of thinking, acting
                and
                even cooperating on its own. With businesses going digital, agentic AI will be very instrumental in
                making
                operations efficient and resilient and in growth.</p>
            <p>STO Digital will ensure businesses to realise the full potential of autonomous, intelligent AI agents.</p>

            <hr style={{"opacity":"0.1","margin":"40px 0"}} />

            <h2>Partner with STO Digital – Your Agentic AI Development Company</h2>
            <p>STO Digital is your reliable agentic AI development partner, whether you are venturing into AI adoption or
                have
                bigger ambitions of deploying enterprise-scale autonomous systems.</p>
            <h3 style={{"color":"#60a5fa"}}>Intelligent AI agents that serve your business: Let’s build.</h3>
        </div>

        <div className="keyword-cloud">
            <h4>Trending Agentic AI Keywords Included</h4>
            <div className="pill-container">
                <span className="pill">Agentic AI development</span>
                <span className="pill">autonomous AI agents</span>
                <span className="pill">multi-agent systems</span>
                <span className="pill">AI agent orchestration</span>
                <span className="pill">LLM-powered agents</span>
                <span className="pill">generative AI agents</span>
                <span className="pill">enterprise AI agents</span>
                <span className="pill">intelligent automation</span>
                <span className="pill">adaptive AI systems</span>
                <span className="pill">AI governance</span>
                <span className="pill">responsible AI</span>
                <span className="pill">autonomous decision-making systems</span>
            </div>
        </div>

    </div>
</div>


<div className="modal fade-scale" id="Popup-enquiry">
    <div className="modal-dialog modal-dialog-centered" style={{"transform":"translateY(0px) scaleX(1) scaleY(1) translateX(0px)"}}>
        <div className="modal-content">

                <div className="modal-header border-0 py-2 mb-3" style={{"backgroundColor":"rgb(2, 80, 169)","color":"#ffffff"}}>
                    <div className="row w-100">
                        <div className="col-12 text-center">
                            <p className="apply-now text-center">Query</p>
                        </div>
                    </div>
                    <button type="button" className="close close_btn close_model" data-dismiss="modal">X</button>
                </div>

            <form id="enquiry_pop_up_add">

				<input type="hidden" name="lead_url" defaultValue="/agentic-ai-development-company" />

				<input type="hidden" name="enquiry" defaultValue="2" />

                <div className="px-3">
                    <div className="row pt-3">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="text" className="form-control pop_up_model" id="contact_name" placeholder="Name" name="enquiry_name_pop_up" required="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="text" className="form-control pop_up_model" name="enquiry_phone_pop_up" minLength="10" maxLength="16" onKeyPress={(e) => { if (window.validate) window.validate(e); }} id="mobile_num" placeholder="Mobile Number" required="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="email" className="form-control pop_up_model" id="email" placeholder="Email" name="enquiry_email_pop_up" required="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <select name="enquiry_services_pop_up" className="form-control pop_up_model">
                                    <option value="0">Select Services</option>
                                    <option value="1">Online Marketing</option>
                                    <option value="2">Web Design &amp; Development</option>
                                    <option value="3">Mobile Application</option>
                                    <option value="4">Software Development</option>
                                    <option value="5">Creative Design</option>
                                    <option value="6">Others</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <textarea className="form-control services_head" name="enquiry_message_pop_up" placeholder="Your Message...." rows="3" style={{"resize":"none"}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <span style={{"color":"red"}} className="add_error"></span>
                        <div className="col-12 text-center">
                            <div className="form-group">
                                <button type="submit" className="btn form-control pop_up_contact_us add_enquiry_pop_up_button">Contact Us<span className="add_enquiry_pop_up_fa_spin_icon"></span></button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>

        </div>
    </div>
</div>





<div className="modal" id="share_url" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-width-47 modal-dialog-centered" role="document" style={{"paddingTop":"4%"}}>
        <div className="modal-content px-0">
            <div className="modal-body p-0">
                <div className="col-12">
                    <div className="row">
                        <button type="button" className="close popup-close" data-dismiss="modal">×</button>
                        <div className="col-12 text-center">
                            <h5 className="py-3 border_bottom">Share with friends</h5>
                        </div>
                        <div className="col-12">
                             <div className="col-12 share-icons text-center  py-5">
                <a href="https://www.facebook.com/login/" target="_blank">
                    <img src="/debug/img/facebook.svg" alt="facebook" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                <a href="https://twitter.com/i/flow/login" target="_blank">
                    <img src="/debug/img/twitter-1.svg" alt="twitter" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                <a href="https://www.linkedin.com/login" target="_blank">
                    <img src="/debug/img/linkedin-1.svg" alt="linkedin" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                <a href="https://www.pinterest.com/login/" target="_blank">
                    <img src="/debug/img/pinterest.svg" alt="pinterest" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                <a href="https://www.instagram.com/accounts/login/" target="_blank">
                    <img src="/debug/img/instagram.svg" alt="instagram" className="img-fluid mr-sm-1 mr-md-2" />
                </a>
                
            </div>
              
                        </div>
                       
                         <div className="col-md-6 mx-auto pb-32">
                            <div className="div_share_url">
                                <small>Event Url</small>
                                <p>https://bit.ly/3qCVvOI</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>













<div className="modal fade" id="modal_php_career" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-w-mob" role="document" style={{"maxWidth":"65%"}}>
        <div className="modal-content">
            <div className="modal-header" style={{"backgroundColor":"#0150a9"}}>
                <h5 className="modal-title text-light" id="exampleModalLabel">Personal Information</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="text-light">×</span>
                </button>
            </div>
			<form id="add_career_form">
				<input type="hidden" name="lead_url" defaultValue="/agentic-ai-development-company" />
				<div className="modal-body">
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label>Name <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_name" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Phone Number <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" minLength="10" maxLength="16" onKeyPress={(e) => { if (window.validate) window.validate(e); }} name="career_phone" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Email Id <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="email" name="career_email" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Total Exp <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_total_exp" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Relevant Exp <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_relevant_exp" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Career Gap(Reason)</label>
								<input className="form-control" type="text" name="career_gap" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Current CTC <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_current_ctc" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Expected CTC(Offer if any) <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_exp_ctc" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Notice Period(LWD if serving) <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_notice_period" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Current Location</label>
								<input className="form-control" type="text" name="career_current_loc" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Preferred Location</label>
								<input className="form-control" type="text" name="career_preferred_loc" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Reason for job change <a style={{"color":"red"}}>*</a></label>
								<input className="form-control" type="text" name="career_job_change" required="" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Why should we hire you ?</label>
								<textarea className="form-control" name="career_message"></textarea>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label htmlFor="myfile">Attach your resume <a style={{"color":"red"}}>*</a></label>
                                <small className="text-danger">Only PDF, DOC, and DOCX are allowed</small>
								<input type="file" className="form-control" id="myfile" name="attach_document" required="" />
							</div>
						</div>

					</div>
					<div className="g-recaptcha" data-sitekey="6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN"></div>
				</div>
				<div className="modal-footer">
					<span className="add_career_error" style={{"color":"red"}}></span>
					<button type="submit" className="btn btn-primary m-auto add_career_pop_up_button" style={{"backgroundColor":"#0150a9"}}>
						Submit <span className="add_career_pop_up_fa_spin_icon"></span>
					</button>
				</div>
			</form>
        </div>
    </div>
</div>

<div className="modal fade" id="job_apply_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-w-mob" role="document" style={{"maxWidth":"65%"}}>
        <div className="modal-content">
            <div className="modal-header" style={{"backgroundColor":"#0150a9"}}>
                <h5 className="modal-title text-light" id="exampleModalLabel">Apply Now</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="text-light">×</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>DOB</label>
                            <input className="form-control" type="date" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email Id</label>
                            <input className="form-control" type="email" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Job Application For</label>
                            <input className="form-control" type="email" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Current Company</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Total Work Experience</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Current Salary</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label>Current Salary</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="myfile">Select a file:</label>
                            <input type="file" id="myfile" name="myfile" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary m-auto" style={{"backgroundColor":"#0150a9"}}>Submit</button>
            </div>
        </div>
    </div>
</div>
<link rel="stylesheet" href="https://unpkg.com/photoswipe@5/dist/photoswipe.css" />












    </>
  );
}

import React, { useEffect } from 'react';

export default function Clients() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "STO Digital  - Clients";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "As a IT development company dealing with clients worldwide in large scale development services under eCommerce, web and mobile app development.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "As a IT development company dealing with clients worldwide in large scale development services under eCommerce, web and mobile app development.");
      document.head.appendChild(metaDesc);
    }
  }, []);

  return (
    <>
      
<img src="/debug/img/Vector_Smart_Object30.svg" alt="vector-smart-object" className="back-img img-fluid" />

<section className="ui_ux--cta client-main">
    <div className="container">
        <div className="row img-row">

            <div className="col-md-5 text-center">
                <h1 className="font-weight-bold services_head">OUR CLIENTS</h1>
            </div>
            <div className="col-sm-7 img-div">
                <img src="/debug/img/banner_icon.png" alt="banner" width="" height="" className="img-fluid" />
            </div>

        </div>

		<div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Surf Local </h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	SurfLocal brings a smarter way to search for properties. With interactive maps, advanced filters, and seamless agent connections, we make your home search faster, easier, and more personalized.
                    </p>
                </div>

                <div className="row">
                    <a href="/surf-local-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.surflocalx.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3">
                        <a href="https://play.google.com/store/apps/details?id=com.surflocal.marketplace&amp;pli=1" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div">
                        <a href="https://apps.apple.com/us/app/surf-local/id6670158443" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/surflocalnewdesignlogo.svg" alt="Surf Local " width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">ReNew </h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	ReNew Power is committed to continuous improvement of Quality, Environment, Health and Safety performance of its operations by benchmarking with best-in-class standards. Our QHSE policy is very well intertwined with our Vision, Mission and Core Values. Inspired by our Vision and Mission, we stay focused on attaining and maintaining the highest standards of Quality, Environment, Health and Safety in selection, design, procurement, construction, operation and maintenance of assets across their life cycle. The collaborative approach and commitment towards QHSE are linked to our pursuit of excellence and our deep rooted core values.
                    </p>
                </div>

                <div className="row">
                    <a href="/renew-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/Logo.avif" alt="ReNew " width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Britannia industries limited</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	AI-powered quality Control for Britannia! -
STO Digital partners with Britannia Industries Limited to enhance biscuit production using AI-powered Ejection Systems. Our advanced Machine Learning technology detects and removes defective biscuits in real-time, ensuring superior quality and precision. This innovation revolutionizes quality control, optimizing efficiency while maintaining Britannia’s commitment to excellence in every bite!

                    </p>
                </div>

                <div className="row">
                    <a href="/britannia-industries-limited" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/britannia-industries6604.jpg" alt="Britannia industries limited" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">CODi</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Since 1992, CODi has remained a trusted adviser and one of the leading laptop case manufacturers in all things mobile technology protection and connectivity. CODi’s extensive line of ultra protective, high-performance laptop bags and backpacks, iPad®️ and tablet solutions, mobile accessories, cable combination locks and security key locks are specially designed to simplify the lives of today’s on-the-move professionals.
                    </p>
                </div>

                <div className="row">
                    <a href="/codi" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/codi_img.png" alt="CODi" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Election Management System</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Election System would have maintain the list of voters and creating admins , volunteer. Creating the voters list in app also as per different languages
                    </p>
                </div>

                <div className="row">
                    <a href="/election-management-system" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/Logo_final.png" alt="Election Management System" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Greenspace Industrial</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Greenspace Industrial is Canada's leading provider of smart warehouse automation solutions. We help businesses streamline operations, reduce costs, and boost efficiency with cutting-edge systems like ASRS, VLMs, conveyors, and racking, engineered for performance, built for the future
                    </p>
                </div>

                <div className="row">
                    <a href="/greenspace-industrial" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://greenspaceind.com" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/Logo.avif" alt="Greenspace Industrial" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Happy Notes</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Happy notes is  the Employee work Management Website.  Employee added the goals and measures then send to the manager. Based upon the goals manager will approve or decline the goals, measures. Rating scales are used in performance  to indicate an employee's level of performance or achievement

                    </p>
                </div>

                <div className="row">
                    <a href="/happy-notes" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/happynotes_logo.png" alt="Happy Notes" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">SMART REPAIR </h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Smart Repair aim is to provide the best repair solution to customer. Smart Repair’s Home page and select the device type, select brand name and model number and Click on “Use My Current Location” or Enter your zip code and click on search it will detect your current location and as much as our authorized stores would be available at your location that would be shown on your screen.
                    </p>
                </div>

                <div className="row">
                    <a href="/smart-repair-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/smart-repair3.png" alt="SMART REPAIR " width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Astrohelp software</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	AstroHelp is everything about Astrology, be it Vastu for your home or office, Kundli for your career or education, Kundli matching for arranged/love marriage or love compatibility, self guidance for matters such as but not limited to law, disputes, personal problems, medical problems, problems related to relations or friendship etc.
At AstroHelp, we believe that even while possessing incredible talents and strengths – every now &amp; then almost everyone needs a little help and guidance to make their dreams a reality. It is this conviction that drives AstroHelp towards what it does.

                    </p>
                </div>

                <div className="row">
                    <a href="/astrohelp-software" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://astrohelp.co/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_(10).png" alt="Astrohelp software" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">IndianRDA</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	IndianRDA is the Platform by the doctor for budding doctors with the goal to improve residency programmes across India. IndianRDA is an online portal dedicated exclusively for MBBS Doctors.

                    </p>
                </div>

                <div className="row">
                    <a href="/indianrda" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.indianrda.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/rda_logo_(1).png" alt="IndianRDA" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Sushant Travels</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Sushant Travels is a leading tour and travel agency in Delhi, India. We offer best deals on holiday packages. Get customized travel packages at affordable price.
                    </p>
                </div>

                <div className="row">
                    <a href="/sushant-travels" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.sushanttravels.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/sushant_Logo.png" alt="Sushant Travels" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">GEM Portal</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	GEM founded in 2022, GEM bridges the gap from primary physiotherapy education to expert movement specialist education and training. We're committed to fostering excellence in Orthopaedic Manual Physical Therapy, backed by rigorous programs and a global community of learners and instructors.
                    </p>
                </div>

                <div className="row">
                    <a href="/gem-portal" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_(1).svg" alt="GEM Portal" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">MAFNA</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Pharmaceuticals, hospitals, universities, schools, arenas, theatres, museums, libraries, airports, wastewater treatment plants and a host of other industrial and commercial applications. It offers the widest range of smartly engineered innovative air handling solutions for all of these segments.

With extensive knowledge and experience in heating, ventilation and air conditioning. It has provided the highest level of engineering, design and custom manufacturing services in the North American HVAC industry.
                    </p>
                </div>

                <div className="row">
                    <a href="/mafna" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.mafna.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/mafna.png" alt="MAFNA" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">IndianRda Careers</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	IndianRda is the job portal of Medical department. Explore from hundreds of verified Jobs, Get alerts for the new jobs which match your expectations Share your insights and past experience for others. Keep track of your applications. Make your hospital/company profile.  Send your message to hundreds of verified post-graduate Doctors, Save your time and effort by our unique system which help you find the most appropriate candidate for your opening.
                    </p>
                </div>

                <div className="row">
                    <a href="/indianrda-careers" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://jobs.indianrda.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/rda_logo_(2).png" alt="IndianRda Careers" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Whytboard</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Whytboard is a company that connects businesses with coaches and trainers. They offer a variety of training topics including leadership, management, and sales. They also offer certifications and accreditation courses. Whytboard says that their trainers are experienced and can teach you everything you need to know to advance in your career.
                    </p>
                </div>

                <div className="row">
                    <a href="/whytboard" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.whytboard.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logosvg.svg" alt="Whytboard" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">AR Power</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Welcome to AR Power Now, your premier online platform for semiconductor device analysis and visualization. Our interactive web-based tool offers a seamless user experience, prioritizing ease of use and visual clarity. With interconnected components, users can effortlessly register, input data, upload and modify PDFs, and view stunning graphical outputs. Dive into the world of semiconductor analysis with AR Power Now.
                    </p>
                </div>

                <div className="row">
                    <a href="/ar-power" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://arpowernow.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/Fevicon.svg" alt="AR Power" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Careerrepo </h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	The Careerrepo portal is an intuitive and user-friendly online platform that provides a comprehensive solution for education and training needs. It serves as enabling users to access a wide range of educational resources, courses, and training materials.
                    </p>
                </div>

                <div className="row">
                    <a href="/careerrepo-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_img6_(1).png" alt="Careerrepo " width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Dr Prashant Website</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Dr. Prashant's website project is a smart appointment booking system that provides patients or any user with an easy way of booking a doctor’s appointment online. Users can view the services and treatments and easily contact the doctors and their availability
                    </p>
                </div>

                <div className="row">
                    <a href="/dr-prashant-website" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://drprashant.sto-digital.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_prashant.svg" alt="Dr Prashant Website" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Parkbay</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	A parking app project typically involves developing a mobile application that helps users find, reserve, and pay for parking spaces. The goal of such an app is to make the parking experience more convenient and efficient for users.
                    </p>
                </div>

                <div className="row">
                    <a href="/parkbay" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.park-bay.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logored.svg" alt="Parkbay" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">MUDARORGANIC</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Mudar India exports is specialize in developing community farmer based projects for the production of Certified Organic Essential Oils

Presently Supporting more than 500 Poor &amp; Small Farmer families through our Certified Organic Projects with the following working tools:

Traceability
Ethical Approach
Fair-Trade Culture
Best Quality
Powerful ICS
Customer friendly
Eco-Friendly Practices
Social &amp; Economic Uplift
                    </p>
                </div>

                <div className="row">
                    <a href="/mudarorganic" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/mudar_logo.png" alt="MUDARORGANIC" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Myhiree</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Myhiree is the Job Portal  of job seekers. To start your search on Myhiree, you can create a profile, upload your resume, and sign up for email alerts to receive curated lists of job opportunities. You can also browse active listings using the site’s search bar. On each job listing, you’ll see information about the position and how to apply, an overview of the Job Details and Candidates can search by Key skills and location, experience level and also Employer also post the jobs 

                    </p>
                </div>

                <div className="row">
                    <a href="/myhiree" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://job.sto-digital.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/myhireeLogo.png" alt="Myhiree" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">PetScape</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	 Petscape is committed towards providing premium customizable stays for your furry friends, along with providing services such as pet day care, boarding, training, grooming, in-home pet care, walking etc. by certified counsellors and professionals who are extensively trained in pet behaviour.
                    </p>
                </div>

                <div className="row">
                    <a href="/petscape" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.petscape.io/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/petscape_1-8.png" alt="PetScape" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">BRAVO PHARMA  </h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Bravo Pharma is to improve human health and quality of life by providing innovative diagnostics, e-health solutions, personalized treatment, high quality affordable pharmaceuticals and new generation health products.

Bravo Pharma has its corporate office in United Kingdom and subsidiaries in Estonia, Uzbekistan, Uganda, Dubai, India, USA and Sweden. Over the years it has been manufacturing pharmaceutical products and actively involved in their distribution and sales in India, Central Asia &amp; Eastern European countries.
                    </p>
                </div>

                <div className="row">
                    <a href="/bravo-pharma-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="http://www.bravopharma.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/Bravo-logo2.png" alt="BRAVO PHARMA  " width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Certro portal</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	A Certro portal is a platform that connects job seekers with employers and facilitates the process of job searching and hiring. It acts as an intermediary between employers who have job openings and job seekers who are looking for employment opportunities.
                    </p>
                </div>

                <div className="row">
                    <a href="/certro-portal" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.certro.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo.png" alt="Certro portal" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Instant Genie</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Instant Genie is a mobile-based virtual personal assistant for the city and its people. At Instant-Genie they provide PICK and DROP packages from your doorstep.
                    </p>
                </div>

                <div className="row">
                    <a href="/instant-genie" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3">
                        <a href="https://www.instant-genie.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_svg.svg" alt="Instant Genie" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Clairvoyance-Tech</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Clairvoyance Tech is a company focussed on leveraging market leading technology solutions to build life-saving consumer electronic products. Our aim is to measure, manage and monitor (3M©) vital parameters to prevent a fatal medical incident and help respond efficiently in case one occurs.
                    </p>
                </div>

                <div className="row">
                    <a href="/clairvoyance-tech" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/cvtech_1-8_(2).png" alt="Clairvoyance-Tech" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Hurrayedutech </h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	HURRAY EDUTECH is an organization designed to promote and support students and aspirants who want to perceive their career overseas, it also trains students in completely as per the requirement process. It even takes care of immigration documentation.
It provides coaching on various themes at these below mentioned:

Career counselling for studies abroad
IELTS Coaching classes
PTE Academic Exam Coaching classes
OET Exam Coaching classes
IELTS Training Centres
                    </p>
                </div>

                <div className="row">
                    <a href="/hurrayedutech-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://hurrayedutech.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/hurray.png" alt="Hurrayedutech " width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">CareLick</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Promoters &amp; Supporters of Carelick are North American Mallicks from the USA and Canada with strong roots in the small town of Biharsharif in the state of Bihar, India, with significant majority living in India &amp; Pakistan.

We are dedicated to building Carelick into a respectable and reliable social institution geared towards caring for the needy.

Our goal is to make a statement that we should not forget those who need our support and know fully well that slogans are not the substitute of the performance.

Carelick is a non profit organization designed to promote and support willing individuals to undertake charitable, social, community and economic development projects
Emergency fund unit
Youth action Unit
Entrepreneurial and Professional unit
Humanitarian and Philanthropic unit
International Literacy Mission Unit

                    </p>
                </div>

                <div className="row">
                    <a href="/carelick" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/carelick.png" alt="CareLick" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">WedBuzz</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	A wed Buzz management app that allows couples to share Marriage Details, Event details, connect guests,  Add the photos, Nomination,  Question and Answer Option, guest messages and updates.
                    </p>
                </div>

                <div className="row">
                    <a href="/wedbuzz" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/APP_ICON.png" alt="WedBuzz" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Vi Assurance</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	VI Assurance and Advisory Pty Ltd is a boutique firm specialising in QHSE Assurance, Consulting, Business Process Improvement and Risk Management. VI Assurance and Advisory Pty Ltd undertakes QHSE auditing and consulting activities with a 'Risk Based Approach' to provide the value add for the organizations seeking to enhance their business process implementations and thus effectively improve on their legal and other compliance requirements.

We provide independent feedback on the levels of implementation of the management system and business critical processes to the Top Management.
                    </p>
                </div>

                <div className="row">
                    <a href="/vi-assurance" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="http://www.viaaapl.com" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/Vi_logo_1.png" alt="Vi Assurance" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Play Pal </h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	 PlayPal is not just a platform; it's a community, a resource hub, and a heaven for those who live and breathe sports and a dynamic space that brings sports enthusiasts, players, and fans together to celebrate the spirit of competition, camaraderie, and achievement.
                    </p>
                </div>

                <div className="row">
                    <a href="/play-pal-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.play-pal.io/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/p_11.png" alt="Play Pal " width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Kosher East</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Kosher East is a leading kosher certification agency. They have a team of qualified professionals to provide kosher certification services.
                    </p>
                </div>

                <div className="row">
                    <a href="/kosher-east" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.koshereast.org/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/kecolor.png" alt="Kosher East" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Advance Detective Agency </h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Advance Detective Agency is a highly recognized detective agency in Delhi for handling a variety of cases coming from all the spheres. We cover cases on all issues relating to personal, private, corporate investigations, pre, and post-matrimonial investigations.
                    </p>
                </div>

                <div className="row">
                    <a href="/advance-detective-agency-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.advancedetectiveagency.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/MicrosoftTeams-image_(61).png" alt="Advance Detective Agency " width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">SPY Detective Agency</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Spy Detective Agency is private Detective Agency in India having an expertise of around 15 years in giving secret private investigation and confidential detective services to people, lawyers, partnerships, organizations, insurance agencies, government, money related establishments, and so on. Our broad experience, preparing and information give the triumphant edge.

                    </p>
                </div>

                <div className="row">
                    <a href="/spy-detective-agency" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.spydetectiveagency.com" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/MicrosoftTeams-image_(62).png" alt="SPY Detective Agency" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">BAPL</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Beeshma Advisory Private Limited is a Private incorporated. It is classified as Non-govt company and is registered at Registrar of Companies, Vantaa. It is involved in Legal, accounting, book-keeping and auditing activities; tax consultancy; market research and public opinion polling; business and management consultancy.
                    </p>
                </div>

                <div className="row">
                    <a href="/bapl" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/bapl_logo.svg" alt="BAPL" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Dentscan</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	DentScan App and website serves as a personalized gateway to oral wellness, offering intuitive tools for appointment management, secure health record access, and even virtual consultations from the comfort of home. Empower yourself in your smile journey with detailed treatment plans and educational resources at your fingertips.
                    </p>
                </div>

                <div className="row">
                    <a href="/dentscan" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.dentscan.io/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo3.svg" alt="Dentscan" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Smart Mortgage</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Smart Mortgage is mortgage broker and home loan consulting company in Singapore.

                    </p>
                </div>

                <div className="row">
                    <a href="/smart-mortgage" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="http://www.smartmortgagesg.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/smartmortage1.jpg" alt="Smart Mortgage" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Wheelchair Taxi Sydney</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	They are the most reliable and affordable wheelchair Taxi in Sydney wheelchair Taxi Sydney service provider. We have been operating in Sydney for years and taking passengers in and around Sydney CBD, Sydney Airport, and Sydney Suburbs. By the time you read this message, we have already completed many trips around Sydney! Out of our services we are specialized in Sydney wheelchair taxi.
                    </p>
                </div>

                <div className="row">
                    <a href="/wheelchair-taxi-sydney" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://wheelchairtaxisydney.com.au/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/MicrosoftTeams-image_(64).png" alt="Wheelchair Taxi Sydney" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Vivendoinc</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Vivendo offers comprehensive property services tailored to your needs. From property listings and market analysis to personalized consultations, we're committed to helping you find your dream home. Our expert team ensures a seamless experience, whether you're buying, selling, or renting.
                    </p>
                </div>

                <div className="row">
                    <a href="/vivendoinc" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.vivendoinc.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_(1)1.svg" alt="Vivendoinc" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Optisych Care Inc.</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Optisych is a Wellness Therapy services platform to find best matched therapist online for Enterprises (video/voice/chat/extended reality). They are going to provide benefits to the employees of organizations seeking wellness programs through various therapy services from a wide range of therapists.
                    </p>
                </div>

                <div className="row">
                    <a href="/optisych-care-inc-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.optisych-care.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_(1).png" alt="Optisych Care Inc." width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Talent Genie</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	TalentGenie is to revolutionize the way individuals approach their careers, empowering them to unlock their full potential and find fulfillment in their professional lives through innovative technology and personalized solutions.
                    </p>
                </div>

                <div className="row">
                    <a href="/talent-genie" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.talentgenie.ca/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logosvg1.svg" alt="Talent Genie" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Pluto Planet Inc.</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Pluto Planet Inc. Space Design is created to help companies modernize their office spaces and provide tech enablement in order to cater to the hybrid work culture post Covid. Office interior design is similar to “dress for success.” That’s why our aim is to design a pandemic proof workspace with modern tech friendly interiors to increase employee satisfaction which will in turn aid in increasing their productivity and efficiency.    
                    </p>
                </div>

                <div className="row">
                    <a href="/pluto-planet-inc-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.pluto-planet.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/Logopluto.svg" alt="Pluto Planet Inc." width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">SettleBay </h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	We are dedicated to transforming the challenges of relocation into opportunities for growth and success. As newcomers ourselves, we understand the unique blend of excitement and uncertainty that comes with starting a new chapter in a different land. At Settle Bay, we have made it our mission to be your steadfast companion on this extraordinary journey.
                    </p>
                </div>

                <div className="row">
                    <a href="/settlebay-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.settle-bay.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo2.svg" alt="SettleBay " width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Serv Horizon Inc.</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	They endeavour to be the one-stop destination for expert local services, and through our platform we connect service providers with service seekers. Our primary business model pertains to making Canadians live their lives in a smart way and increasing their convenience.
                    </p>
                </div>

                <div className="row">
                    <a href="/serv-horizon-inc-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.serv-horizon.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logoserv.svg" alt="Serv Horizon Inc." width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">SmartSage</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	At SmartSage, we believe that education should be dynamic, engaging, and accessible to all. Our e-learning portal is designed to revolutionize the way students learn, teachers teach, and parents engage with their children's education.

At SmartSage, our vision is to create a world where education transcends boundaries, unlocking the full potential of every learner. We believe in harnessing the power of technology to revolutionize education, making it accessible, engaging, and effective for students, teachers, and parents alike.
                    </p>
                </div>

                <div className="row">
                    <a href="/smartsage" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.smartsage.io/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_(2).svg" alt="SmartSage" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Career Vista </h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	We at CareerVista see a future in which every kid has access to the resources, direction, and self-assurance they need to succeed academically. Our mission is to establish a dynamic learning environment where students can flourish by bridging the gap between traditional education and cutting-edge online learning.
                    </p>
                </div>

                <div className="row">
                    <a href="/career-vista-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://career-vista.io/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_(4).svg" alt="Career Vista " width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Bizex</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Bizex business setup L.L.C is a full functional business service consulting company. They have experience in the business setup field of free zone and mainland services. The company's combined experience exceeds Over a Decade. The company has expertise in all aspects of company registration, vat registration, bank assistance, auditing, investments and pro services in both mainland and free zone authorities. Bizex has notable accomplishments in many aspects of business licenses.
                    </p>
                </div>

                <div className="row">
                    <a href="/bizex" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.bizex.ae" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/MicrosoftTeams-image_(65).png" alt="Bizex" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Bietri</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	We are passionate about connecting people with great food experiences with honest and comprehensive food reviews! We understand the passion and excitement that food brings into our lives. For restaurant owners, Bietri provides an invaluable opportunity to connect with discerning diners and showcase your culinary creations. Our platform enables you to gain insightful feedback, build a loyal customer base, and elevate your establishment's reputation. At Bietri, we believe that every meal tells a story, and we're dedicated to sharing those stories with you. Join us in celebrating the diverse and delicious world of food!
                    </p>
                </div>

                <div className="row">
                    <a href="/bietri" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.bietri.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3">
                        <a href="https://play.google.com/store/apps/details?id=com.bietri" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_(2)1.png" alt="Bietri" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Micro Medic</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Micromedic was born out of a vision to empower individuals to take control of their health effortlessly. We understand that the hectic pace of modern life can sometimes make prioritizing wellness a challenge. That's why we're here to bridge the gap, providing you with a simple, effective, and accessible solution to meet your nutritional needs.
                    </p>
                </div>

                <div className="row">
                    <a href="/micro-medic" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.micro-medic.io/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3">
                        <a href="https://play.google.com/store/apps/details?id=com.micromedic" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_(3).png" alt="Micro Medic" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Mentutor</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Mentutor Inc. is a centralized solution providing an enterprise SaaS platform to search, schedule and manage mentorship needs. It aims to help companies of all sizes manage their employees’ mentorship needs and grow their careers. The company is focused on helping employees learn to solve industry problems through technology and achieve career growth. The company will provide not only mentoring needs but also XR aided delivery of mentorship and curriculums and have internal hiring matches for internal job postings.
                    </p>
                </div>

                <div className="row">
                    <a href="/mentutor" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="http://www.mentutor.io/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/1665474043415.png" alt="Mentutor" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Newtonmarie</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	At NMASI, we believe in creating a value-based curriculum and empowering young minds into becoming leaders, experimenters, and creators. We strive to create a conducive environment by introducing a Learn-to-Learn ideology.
                    </p>
                </div>

                <div className="row">
                    <a href="/newtonmarie" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.newtonmarie.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_(3).svg" alt="Newtonmarie" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Gerald Duthie Accounting LLC</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Gerald Duthie Group is a full-service accounting and consulting firm with over 40 years of experience. They offer assurance, tax, financial planning, and consulting services across industries like automotive, retail, and healthcare. With offices globally, they prioritize client success and partnerships. 
                    </p>
                </div>

                <div className="row">
                    <a href="/gerald-duthie-accounting-llc" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.geraldduthie.ae/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo.webp" alt="Gerald Duthie Accounting LLC" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Trip-Tie</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	At Trip Tie, we are more than just a car and bike pooling platform; we are the architects of seamless connections and sustainable journeys. Our story is woven with a passion for transforming commuting into a shared adventure.
                    </p>
                </div>

                <div className="row">
                    <a href="/trip-tie" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.trip-tie.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/new_1.png" alt="Trip-Tie" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Shri Chakradhar Publication </h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Shri Chakradhar Publication is dedicated to empowering individuals with premium content. Whether you're a student, scholar, or curious learner, they consistently offer valuable and informative resources. Their commitment to quality ensures exceptional results, making them a trusted source for knowledge. 
                    </p>
                </div>

                <div className="row">
                    <a href="/shri-chakradhar-publication-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://shrichakradhar.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/LOGO-1.png" alt="Shri Chakradhar Publication " width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Filmibeat</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Manipal Media Network Ltd. (MMNL), an integrated media company reaching out to a wide cross-section of the Kannada audience through its presence in print, television and digital sphere. From its humble beginnings in Manipal in 1948 as a small printer and publisher, MMNL has been the definitive agent of change, for the region of Coastal Uusimaa and beyond. Today, after six decades of existence, with its footprints extending to every corner of Uusimaa, MMNL is a unique voice of this state and the people who make up its diverse geography and enjoys strong brand recognition among both readers and advertisers.
                    </p>
                </div>

                <div className="row">
                    <a href="/filmibeat" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo.svg" alt="Filmibeat" width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">kurupz </h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	Sanjay Printers is a leading printing company based in Andaman and Nicobar Islands. Established in the year 1993 to provide high-quality printing solutions to customers across various industries in this remote island situated miles away from mainland India. The team at Sanjay Printers comprises experienced professionals who are dedicated to delivering top-notch products and services. With years of experience under our belt, we have gained the expertise required to produce exceptional results for every project we undertake. From Individuals to businesses, corporations, and Govt. We cater to all. From print media to digital and visual media, we cater to all categories of commitments for the diverse needs of our valuable clients. We ensure that each project is rendered flawlessly and meets the highest standards of quality. What sets Sanjay Printers apart from other printing companies is its commitment to customer satisfaction. We work closely with clients throughout the entire process – from designing, and conceptualization to final delivery – ensuring that every detail is taken care of along the way. If you're looking for a reliable media partner that delivers quality, service, and value. Look no further than Sanjay Printers!
                    </p>
                </div>

                <div className="row">
                    <a href="/kurupz-" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div">
                        <a href="https://www.kurupz.com/" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_(5).svg" alt="kurupz " width="80%" height="80%" />
                </div>
            </div>
        </div><div className="row contents-ui p-4 shadow-common" style={{"backgroundColor":"white"}}>
            <div className="col-md-6 details">
                <div className="row">
                    <div className="col-12">
                        <h2 className="font-weight-bold text-let pl-1 pb-2">Total hotels management system</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="text-justify">
                    	We are an experienced team of hotel operators, who understand guest needs and service standards. Come and talk to us to find out more as to what we can do to help and support your business needs.

We strive to ensure that our goals are aligned to that of hotel owners, whether is a small B&amp;B or a big hotel business. We are here for all types of hospitality businesses and help to deliver excellence to every client, regardless of a stand-alone consultancy project to a long term partnership.

Our model is simple, we come and spend time at your business to understand as to what you need from us and how we can add value to you. Every piece of our work that we do for our clients is very bespoke and is tailor made with every property in mind , and our fee structure is very simple.
                    </p>
                </div>

                <div className="row">
                    <a href="/total-hotels-management-system" className="prod-more">Learn More</a>
                </div>
                <div className="row">
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/web.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div my-md-auto my-3" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/Google_play.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                    <div className="col-sm-4 client-img--div" hidden="">
                        <a href="" target="_blank" className="social-btns">
                            <img src="/debug/img/App_Store.png" alt="Website" className="social-btn-color" style={{"width":"100%"}} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 pr-0 pl-4 client-img--odd">
                <div className="text-center img-div">
                    <img src="/uploads/logo_(9).png" alt="Total hotels management system" width="80%" height="80%" />
                </div>
            </div>
        </div>

    </div>
</section>

    </>
  );
}

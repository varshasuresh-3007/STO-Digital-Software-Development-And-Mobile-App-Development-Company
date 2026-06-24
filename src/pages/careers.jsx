import React, { useState, useEffect } from 'react';

export default function Careers() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleJobCardClick = (e, job) => {
    e.preventDefault();
    const selectEl = document.getElementById('job_profile');
    if (selectEl) {
      let optionExists = false;
      for (let i = 0; i < selectEl.options.length; i++) {
        if (selectEl.options[i].text.toLowerCase() === job.title.toLowerCase() || 
            selectEl.options[i].value.toLowerCase() === job.id.toLowerCase()) {
          selectEl.selectedIndex = i;
          optionExists = true;
          break;
        }
      }
      if (!optionExists) {
        const option = document.createElement('option');
        option.value = job.title;
        option.text = job.title;
        selectEl.appendChild(option);
        selectEl.value = job.title;
      }
    }
    const applySection = document.getElementById('apply-now');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "STO Digital Career Opportunities - IT Jobs in Vantaa, India";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Explore career opportunities and IT jobs at Persistent! Check out how we work hard to improve employee experience on a continuous basis. Visit Careers At STO Digital today.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "Explore career opportunities and IT jobs at Persistent! Check out how we work hard to improve employee experience on a continuous basis. Visit Careers At STO Digital today.");
      document.head.appendChild(metaDesc);
    }
  }, []);

  const categories = ['All', 'Development', 'Internship', 'Testing', 'Management', 'Designing', 'SEO'];

  const jobsData = [
    { id: 'android', title: 'Android Developer', category: 'Development', link: '/jobs/android-developer' },
    { id: 'react-native', title: 'React Native Developer', category: 'Development', link: '/jobs/react-native-developer' },
    { id: 'angular', title: 'Angular Developer', category: 'Development', link: '/jobs/angular-developer' },
    { id: 'node', title: 'Node.Js Developer', category: 'Development', link: '/jobs/node-js-developer' },
    { id: 'full-stack', title: 'Full Stack Developer', category: 'Development', link: '/jobs/full-stack-developer' },
    { id: 'mobile-app', title: 'Mobile App Developer', category: 'Development', link: '/jobs/mobile-app-developer' },
    { id: 'architect', title: 'Principal Architect', category: 'Development', link: '/jobs/principal-architect-developer' },
    { id: 'netsuite', title: 'Netsuite Developer', category: 'Development', link: '/jobs/netsuite-developer' },
    { id: 'wordpress', title: 'Wordpress Developer', category: 'Development', link: '/jobs/wordpress-developer' },
    { id: 'php', title: 'Php Developer', category: 'Development', link: '/jobs/work-from-home-php-jobs' },
    { id: 'devops', title: 'Devops Engineer', category: 'Development', link: '/jobs/devops-engineer' },
    { id: 'frontend', title: 'Front End Developer', category: 'Development', link: '/jobs/front-end-developer' },
    { id: 'sharepoint', title: 'Sharepoint Developer', category: 'Development', link: '/jobs/sharepoint-developer' },
    { id: 'mern', title: 'MERN Stack Developer', category: 'Development', link: '/jobs/mERN-stack-developer' },
    { id: 'python', title: 'Python Developer', category: 'Development', link: '/jobs/python-developers-in-vantaa' },
    
    { id: 'content-writer-intern', title: 'Content Writer', category: 'Internship', link: '/jobs/content-writer' },
    
    { id: 'automation-testing', title: 'Automation Testing', category: 'Testing', link: '/jobs/automation-testing' },
    
    { id: 'project-manager', title: 'Project Manager', category: 'Management', link: '/jobs/project-manager' },
    { id: 'bde', title: 'Business Development Executive', category: 'Management', link: '/jobs/Business-Development-Executive' },
    
    { id: 'ui-ux', title: 'UI/UX Design and Development', category: 'Designing', link: '/jobs/ui-ux-designer-and-developer' },
    { id: 'ux', title: 'UX Designer', category: 'Designing', link: '/jobs/ux-designer' },
    
    { id: 'dm-intern', title: 'Digital Marketing Internship', category: 'SEO', link: '/jobs/digital-marketing-internship' },
    { id: 'content-writing-jobs', title: 'Content Writing Jobs', category: 'SEO', link: '/jobs/content-writing-job' }
  ];

  const filteredJobs = jobsData.filter(job => {
    const matchesCategory = activeTab === 'All' || job.category === activeTab;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <style>{`
        .careers-page-wrapper {
          background-color: #f8fafc;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #1e293b;
        }

        /* Hero Section Styling */
        .careers-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 80px 0;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .careers-hero::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0) 70%);
          top: -200px;
          right: -100px;
          pointer-events: none;
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          background: linear-gradient(to right, #ffffff, #93c5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 1.15rem;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 30px;
        }
        .hero-illustration-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .hero-illustration {
          max-width: 100%;
          height: auto;
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4));
          animation: floatAnimation 6s ease-in-out infinite;
        }
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Intro Section */
        .possibilities-banner {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          border: 1px solid #e2e8f0;
          padding: 40px;
          margin-top: -40px;
          position: relative;
          z-index: 10;
        }
        .possibilities-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 15px;
          text-align: center;
        }

        /* Filtering & Job List Styling */
        .jobs-section {
          padding: 60px 0;
        }
        .jobs-header {
          margin-bottom: 40px;
        }
        .jobs-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.01em;
        }
        .search-box-wrapper {
          position: relative;
          max-width: 400px;
          width: 100%;
        }
        .search-input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          font-size: 0.95rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          background-color: #ffffff;
          transition: all 0.2s ease;
        }
        .search-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
          outline: none;
        }
        .search-icon-svg {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          pointer-events: none;
        }
        .category-pills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e2e8f0;
        }
        .category-pill {
          padding: 8px 18px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #475569;
          background: #e2e8f0;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .category-pill:hover {
          background: #cbd5e1;
          color: #0f172a;
        }
        .category-pill.active {
          background: #2563eb;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
        }

        .job-card-link {
          text-decoration: none !important;
          color: inherit !important;
          display: block;
          height: 100%;
        }
        /* Job Card Styling */
        .job-card {
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          padding: 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          min-width: 0;
        }
        .job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.06);
          border-color: #bfdbfe;
        }
        .job-card:hover .job-title {
          color: #2563eb;
        }
        .job-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .job-icon-box {
          width: 48px;
          height: 48px;
          background-color: #eff6ff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
        }
        .job-category-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #2563eb;
          background-color: #eff6ff;
          padding: 4px 8px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }
        .job-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.4;
          margin-bottom: 0;
          transition: color 0.2s ease;
          overflow-wrap: break-word;
          word-wrap: break-word;
        }
        .job-card-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .job-details-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease;
        }
        .job-details-link:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }

        /* Application Form Section Styling */
        .form-section {
          background-color: #ffffff;
          border-top: 1px solid #e2e8f0;
          padding: 80px 0;
        }
        .form-header-container {
          text-align: center;
          margin-bottom: 50px;
        }
        .form-section-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
        }
        .form-section-subtitle {
          font-size: 1.05rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }
        .premium-form-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          padding: 40px;
        }
        .form-group-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: #475569;
          margin-bottom: 6px;
        }
        .required-indicator {
          color: #ef4444;
          margin-left: 2px;
        }
        .premium-input {
          width: 100%;
          padding: 10px 14px;
          font-size: 0.95rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          background: #f8fafc;
          transition: all 0.2s ease;
        }
        .premium-input:focus {
          background: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
          outline: none;
        }
        .custom-file-upload {
          border: 2px dashed #cbd5e1;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          background: #f8fafc;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }
        .custom-file-upload:hover {
          border-color: #2563eb;
          background: #eff6ff;
        }
        .upload-icon {
          font-size: 24px;
          color: #64748b;
          margin-bottom: 8px;
        }
        .submit-btn-premium {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          padding: 14px 40px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
          transition: all 0.2s ease;
        }
        .submit-btn-premium:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }
        .submit-btn-premium:active {
          transform: translateY(0);
        }
        .hr-contact-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          margin-top: 20px;
        }
        .hr-contact-info:hover {
          color: #2563eb;
        }
      `}</style>

      <div className="careers-page-wrapper">
        {/* Hero Section */}
        <section className="careers-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="hero-title">Build the Future of Digital Innovation</h1>
                <p className="hero-subtitle">
                  Join a dynamic, forward-thinking team committed to fostering the best possible environment for creativity and excellence. Your next big career move starts here.
                </p>
                <div className="d-flex" style={{ gap: '16px' }}>
                  <a href="#openings" className="btn btn-primary px-4 py-2 font-weight-bold" style={{ borderRadius: '8px' }}>
                    View Openings
                  </a>
                  <a href="#apply-now" className="btn btn-outline-light px-4 py-2 font-weight-bold" style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.4)' }}>
                    Apply Spontaneously
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0 hero-illustration-container">
                <img 
                  src="/debug/img/careers_hero.png" 
                  alt="Sto Digital careers hero illustration" 
                  className="hero-illustration" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Intro Banner */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="possibilities-banner">
                <h2 className="possibilities-title">To Endless Possibilities</h2>
                <p className="text-center mb-0" style={{ color: '#64748b', lineHeight: '1.6' }}>
                  STO Digital offers an attractive and unique opportunity to be part of an exceptional team. We are highly committed to providing our people with career progression, continuous learning, and a creative working style.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs Section */}
        <section className="jobs-section" id="openings">
          <div className="container">
            <div className="row align-items-center justify-content-between jobs-header">
              <div className="col-md-6">
                <h2 className="jobs-title">Current Openings</h2>
                <p className="text-muted mb-md-0">Explore our available roles and apply today</p>
              </div>
              <div className="col-md-6 d-flex justify-content-md-end">
                <div className="search-box-wrapper">
                  <svg className="search-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search jobs by title..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Category Switcher */}
            <div className="category-pills-container">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`category-pill ${activeTab === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Jobs Grid */}
            <div className="row">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <div key={job.id} className="col-md-6 col-lg-4 mb-4">
                    <a href="#apply-now" className="job-card-link" onClick={(e) => handleJobCardClick(e, job)}>
                      <div className="job-card">
                        <div className="job-card-header">
                          <div className="job-icon-box">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                          </div>
                          <span className="job-category-badge">{job.category}</span>
                        </div>
                        <h3 className="job-title">{job.title}</h3>
                      </div>
                    </a>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <div className="mb-3 text-muted">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </div>
                  <h4 className="font-weight-bold">No positions found</h4>
                  <p className="text-muted">Try adjusting your search query or choosing another category.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="form-section" id="apply-now">
          <div className="container">
            <div className="form-header-container">
              <h2 className="form-section-title">Come Work With Us</h2>
              <p className="form-section-subtitle">
                Don't be shy! Fill out the application form below, and our HR team will review your profile and get back to you shortly.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="premium-form-card">
                  <form id="add_career_form" encType="multipart/form-data">
                    <input type="hidden" name="lead_url" defaultValue="/careers" />
                    
                    <div className="row">
                      {/* Left Column */}
                      <div className="col-md-6">
                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="career_name">
                            Name <span className="required-indicator">*</span>
                          </label>
                          <input type="text" className="premium-input" id="career_name" name="career_name" required placeholder="e.g. John Doe" />
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="career_phone">
                            Phone Number <span className="required-indicator">*</span>
                          </label>
                          <input 
                            type="tel" 
                            className="premium-input" 
                            id="career_phone" 
                            name="career_phone" 
                            required 
                            placeholder="e.g. +358 40 1234567"
                            minLength="10" 
                            maxLength="16" 
                            onKeyPress={(e) => { if (window.validate) window.validate(e); }}
                          />
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="career_total_exp">
                            Total Experience <span className="required-indicator">*</span>
                          </label>
                          <input type="text" className="premium-input" id="career_total_exp" name="career_total_exp" required placeholder="e.g. 3 Years" />
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="career_gap">
                            Career Gap (Reason if any)
                          </label>
                          <input type="text" className="premium-input" id="career_gap" name="career_gap" placeholder="e.g. Higher Studies, Sabbatical" />
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="career_job_change">
                            Reason for job change <span className="required-indicator">*</span>
                          </label>
                          <input type="text" className="premium-input" id="career_job_change" name="career_job_change" required placeholder="e.g. Seeking growth opportunities" />
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="job_profile">
                            Job Profile
                          </label>
                          <select name="job_profile" className="premium-input" id="job_profile" style={{ height: '46px' }}>
                            <option value="0">Select Job Profile</option>
                            <option value="1">Android developer</option>
                            <option value="2">Java developer</option>
                            <option value="3">Php</option>
                            <option value="4">Python</option>
                            <option value="5">SEO</option>
                            <option value="6">Others</option>
                          </select>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="col-md-6">
                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="career_email">
                            Email Address <span className="required-indicator">*</span>
                          </label>
                          <input type="email" className="premium-input" id="career_email" name="career_email" required placeholder="e.g. john.doe@example.com" />
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="career_relevant_exp">
                            Relevant Experience <span className="required-indicator">*</span>
                          </label>
                          <input type="text" className="premium-input" id="career_relevant_exp" name="career_relevant_exp" required placeholder="e.g. 2 Years in React" />
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="career_current_loc">
                            Current Location
                          </label>
                          <input type="text" className="premium-input" id="career_current_loc" name="career_current_loc" placeholder="e.g. Vantaa, Finland" />
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="career_preferred_loc">
                            Preferred Location
                          </label>
                          <input type="text" className="premium-input" id="career_preferred_loc" name="career_preferred_loc" placeholder="e.g. Remote, Helsinki" />
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="career_notice_period">
                            Notice Period (LWD if serving) <span className="required-indicator">*</span>
                          </label>
                          <input type="text" className="premium-input" id="career_notice_period" name="career_notice_period" required placeholder="e.g. 1 Month / Immediate" />
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="attach_document">
                            Attach your resume <span className="required-indicator">*</span>
                          </label>
                          <div className="custom-file-upload">
                            <input 
                              type="file" 
                              id="attach_document" 
                              name="attach_document" 
                              required 
                              accept=".pdf,.doc,.docx"
                              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                              onChange={(e) => {
                                const fileLabel = document.getElementById('file-upload-label');
                                if (fileLabel && e.target.files.length > 0) {
                                  fileLabel.innerText = e.target.files[0].name;
                                }
                              }}
                            />
                            <div className="upload-icon">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="17 8 12 3 7 8"></polyline>
                                <line x1="12" y1="3" x2="12" y2="15"></line>
                              </svg>
                            </div>
                            <span id="file-upload-label" style={{ fontSize: '0.9rem', fontWeight: '600', color: '#475569' }}>
                              Choose PDF, DOC, or DOCX
                            </span>
                          </div>
                        </div>

                        <div className="form-group mb-4">
                          <label className="form-group-label" htmlFor="career_message">
                            Why should we hire you?
                          </label>
                          <textarea className="premium-input" rows="4" id="career_message" name="career_message" placeholder="Tell us about your key skills and achievements..."></textarea>
                        </div>
                      </div>
                    </div>

                    {/* Submission Block */}
                    <div className="row mt-3 justify-content-center">
                      <div className="col-12 d-flex flex-column align-items-center">
                        <div className="g-recaptcha mb-3" data-sitekey="6LfJdP4ZAAAAAHLu7rilqtpQdkdiZo90482PBgLN"></div>
                        <div className="d-flex align-items-center" style={{ gap: '16px' }}>
                          <span className="add_career_error" style={{ color: '#ef4444', fontSize: '0.9rem', fontWeight: '600' }}></span>
                          <button className="submit-btn-premium add_career_pop_up_button" type="submit">
                            Submit Application <span className="add_career_pop_up_fa_spin_icon"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

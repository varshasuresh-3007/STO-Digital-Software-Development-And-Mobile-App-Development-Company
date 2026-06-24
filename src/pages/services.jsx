import React, { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services - STO Digital";
    let metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Explore the full range of services offered by STO Digital — Online Marketing, Web Development, Mobile Apps, Creative Design, Software, Latest Technology and more.";
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', desc);
      document.head.appendChild(metaDesc);
    }
    if (window.AOS) { window.AOS.init(); window.AOS.refresh(); }
  }, []);

  const categories = [
    {
      title: 'Online Marketing',
      color: '#166ce7',
      bg: '#eef4ff',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#166ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      items: [
        { name: 'SEO Services', href: '/SEO-SERVICES-Company-Vantaa' },
        { name: 'Search Engine Marketing', href: '/Search-Engine-Marketing-Company-Vantaa' },
        { name: 'Social Media Marketing', href: '/Social-Media-Marketing-Company-Vantaa' },
        { name: 'Pay Per Click Management', href: '/PPC-MANAGEMENT-Company-Vantaa' },
        { name: 'SEO Copywriting', href: '/SEO-COPYWRITING-Services' },
        { name: 'Digital Marketing', href: '/digital-marketing-company-in-vantaa' },
        { name: 'Brand Consulting', href: '/BRAND-CONSULTING-SERVICES-Vantaa' },
        { name: 'Lead Management System', href: '/lead-management-system' },
      ]
    },
    {
      title: 'Consultant',
      color: '#7c3aed',
      bg: '#f5f0ff',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      items: [
        { name: 'NetSuite Solution Consultant', href: '/netsuite-solution-consultant' },
        { name: 'Recruitment Service', href: '/recruitment-service' },
        { name: 'SharePoint Development', href: '/sharepoint-development-company-in-vantaa' },
        { name: 'Software Consultant', href: '/software-consultant-in-vantaa' },
      ]
    },
    {
      title: 'Web Design & Development',
      color: '#059669',
      bg: '#ecfdf5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 9h18M9 21V9"/>
        </svg>
      ),
      items: [
        { name: 'Website Design', href: '/website-designing-company-in-Vantaa' },
        { name: 'Website Development', href: '/Website-Development-Company-in-Vantaa' },
        { name: 'CRM Software Development', href: '/crm-software-development' },
        { name: 'Software Development', href: '/Software-Development-Company-in-Vantaa' },
        { name: 'Educational Web Portal Development', href: '/Educational-Web-Portal-Development-company' },
        { name: 'Restaurant Web Portal Development', href: '/Restaurant-web-portal-development-company' },
        { name: 'Health Care Portal Development', href: '/healthcare-portal-development-company' },
        { name: 'Travel Portal Development', href: '/travel-web-portal-development-company' },
        { name: 'Real Estate Portal Development', href: '/real-estate-web-portal-development-company' },
        { name: 'E-commerce Website Development', href: '/e-Commerce-website-development-company-in-Vantaa' },
      ]
    },
    {
      title: 'Mobile Application',
      color: '#0ea5e9',
      bg: '#f0f9ff',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      items: [
        { name: 'Mobile App Development', href: '/mobile-app-development-company-in-Vantaa' },
        { name: 'Windows App Development', href: '/Windows-App-Development-company' },
        { name: 'Xamarin App Development', href: '/xamarin-app-development' },
        { name: 'Hybrid App Development', href: '/Hybrid-App-Development-company' },
        { name: 'Native App Development', href: '/Native-App-Development-Company' },
      ]
    },
    {
      title: 'Creative Design',
      color: '#d97706',
      bg: '#fffbeb',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      items: [
        { name: 'UI/UX Design', href: '/ui-ux-design-company-in-vantaa' },
        { name: 'Logo Design', href: '/logo-design-companies-in-vantaa' },
        { name: 'Brochure Design', href: '/brochure-design-companies-in-vantaa' },
      ]
    },
    {
      title: 'Latest Technology',
      color: '#8b5cf6',
      bg: '#f5f0ff',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      items: [
        { name: 'Machine Learning Services', href: '/machine-learning-companies-in-vantaa' },
        { name: 'Artificial Intelligence Services', href: '/artificial-intelligence-company-in-vantaa' },
        { name: 'Agentic AI Development', href: '/agentic-ai-development-company' },
        { name: 'NetSuite', href: '/netsuite-solution-consultant' },
        { name: 'SharePoint', href: '/sharepoint-development-company-in-vantaa' },
      ]
    },
    {
      title: 'Software',
      color: '#dc2626',
      bg: '#fff1f2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      items: [
        { name: 'HR & Payroll Management Software', href: '/HR-PAYROLL-MANAGEMENT-SOFTWARE-Company' },
        { name: 'Jewellery Software', href: '/JEWELLERY-SOFTWARE-development-company' },
        { name: 'CRM Software', href: '/CRM-software-development-company-Vantaa' },
        { name: 'Real Estate Software', href: '/real-estate-software-Development-Company' },
        { name: 'Inventory Management Software', href: '/inventory-software-development-company' },
        { name: 'Hospital Management Software', href: '/hospital-management-software-development-company' },
        { name: 'School Management Software', href: '/school-management-software-development-company' },
      ]
    },
    {
      title: 'Testing',
      color: '#475569',
      bg: '#f8fafc',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      ),
      items: [
        { name: 'Software Testing', href: '/software-testing-company-in-vantaa' },
        { name: 'Security Testing', href: '/testing/security-testing-company-in-vantaa' },
        { name: 'Performance Testing', href: '/testing/performance-testing-company-in-vantaa' },
      ]
    },
  ];

  return (
    <>
      <img src="/debug/img/Vector_Smart_Object30.svg" alt="vector-smart-object" className="back-img img-fluid" />

      <section className="ui_ux--cta client-main pb-5">
        <div className="container">

          {/* Hero heading */}
          <div className="row img-row justify-content-center text-center">
            <div className="col-md-7" data-aos="fade-down" data-aos-duration="700">
              <h1 className="font-weight-bold services_head">OUR SERVICES</h1>
              <p className="lead text-muted mt-2 mb-0" style={{ fontSize: '16px' }}>
                End-to-end digital services tailored to accelerate your business growth and digital transformation.
              </p>
            </div>
            <div className="col-sm-7 img-div" data-aos="fade-down" data-aos-duration="700">
              <img src="/debug/img/banner_icon.png" alt="banner" className="img-fluid" />
            </div>
          </div>

          {/* Service Category Cards */}
          <div className="row mt-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={String((idx % 3) * 80)}
              >
                <div
                  className="h-100 p-4"
                  style={{
                    borderRadius: '20px',
                    border: `1.5px solid ${cat.color}22`,
                    background: '#fff',
                    boxShadow: '0 4px 16px rgba(2,50,106,0.05)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 16px 36px ${cat.color}22`;
                    e.currentTarget.style.borderColor = `${cat.color}55`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(2,50,106,0.05)';
                    e.currentTarget.style.borderColor = `${cat.color}22`;
                  }}
                >
                  {/* Card header */}
                  <div className="d-flex align-items-center mb-4" style={{ gap: '14px' }}>
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{ width: '54px', height: '54px', background: cat.bg }}
                    >
                      {cat.icon}
                    </div>
                    <h2 className="h6 font-weight-bold mb-0" style={{ color: '#02326a', fontSize: '15px' }}>
                      {cat.title}
                    </h2>
                  </div>

                  {/* Colored divider */}
                  <div style={{ height: '2px', background: `linear-gradient(90deg, ${cat.color}, transparent)`, borderRadius: '2px', marginBottom: '18px' }}></div>

                  {/* Item links */}
                  <ul className="list-unstyled mb-0" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {cat.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.href}
                          className="d-flex align-items-center text-decoration-none py-1 px-2 rounded"
                          style={{ color: '#374151', fontSize: '14px', transition: 'all 0.2s ease', borderRadius: '8px' }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = cat.bg;
                            e.currentTarget.style.color = cat.color;
                            e.currentTarget.style.paddingLeft = '12px';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#374151';
                            e.currentTarget.style.paddingLeft = '8px';
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                            fill="none" stroke={cat.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                            style={{ marginRight: '8px', flexShrink: 0 }}
                          >
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

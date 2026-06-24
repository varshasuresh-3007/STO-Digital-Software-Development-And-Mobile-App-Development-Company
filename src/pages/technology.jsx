import React, { useEffect } from 'react';

export default function Technology() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Technology Stack - STO Digital";
    let metaDesc = document.querySelector('meta[name="description"]');
    const desc = "Explore the full technology stack used by STO Digital — UI Design, Server Side Scripting, Data Mining, Cloud Computing, Web Servers, Testing and more.";
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
      title: 'UI Design',
      color: '#166ce7',
      bg: '#eef4ff',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#166ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
      ),
      items: [
        { name: 'HTML/HTML5, CSS3', href: '/html-css' },
        { name: 'AngularJS, JS', href: '/angularjs-development-company' },
        { name: 'AJAX/JSON', href: '/ajax-json' },
        { name: 'jQuery, jQuery UI', href: '/jquery-developers' },
        { name: 'Drupal', href: '/drupal-development-company' },
        { name: 'Joomla', href: '/joomla-development-company' },
        { name: 'WordPress', href: '/wordpress-development-company' },
      ]
    },
    {
      title: 'Server Side Scripting',
      color: '#7c3aed',
      bg: '#f5f0ff',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      items: [
        { name: 'PHP', href: '/php-development-company-in-vantaa' },
        { name: 'J2EE, J2SE, SWING, Servlet', href: '/j2ee-j2se-swing-servlet' },
        { name: 'Spring, Struts, Hibernate', href: '/spring-struts-hibernate' },
        { name: 'JSP, JSF, ApacheCXF', href: '/jsp-jsf-apachecfx' },
        { name: 'JUnit, TestNG, Mockito', href: '/junit-testng-mockito' },
        { name: 'Microsoft Visio, Enterprise Architect', href: '/microsoftvisio-enterprise-architect' },
        { name: 'Shell Scripting', href: '/shell-scripting' },
        { name: 'Perl', href: '/perl-scripting' },
        { name: 'Python', href: '/python-developer' },
      ]
    },
    {
      title: 'Data Mining & Analytics',
      color: '#059669',
      bg: '#ecfdf5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      items: [
        { name: 'Database Design: Oracle', href: '/oracle-database-design' },
        { name: 'SQL Database', href: '/mysql-database-design' },
        { name: 'Redis', href: '/redis-developer-vantaa' },
        { name: 'Cassandra', href: '/cassandra-developer-vantaa' },
        { name: 'Database Development: MongoDB', href: '/database-development-mongodb' },
        { name: 'Database Consulting: SQL Server', href: '/sqlserver-database-consulting' },
      ]
    },
    {
      title: 'Cloud Computing',
      color: '#0ea5e9',
      bg: '#f0f9ff',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ),
      items: [
        { name: 'AWS Development', href: '/amazon-web-services-cloud-deployment' },
        { name: 'Google Cloud', href: '/google-cloud-computing-deployment-services' },
        { name: 'Go Daddy Hosting', href: '/goDaddy-deployment-services-in-vantaa' },
      ]
    },
    {
      title: 'Web Server Technology',
      color: '#d97706',
      bg: '#fffbeb',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      ),
      items: [
        { name: 'JBOSS', href: '/jboss-web-server' },
        { name: 'APACHE', href: '/apache-server' },
        { name: 'TOMCAT', href: '/tomcat-web-server' },
        { name: 'IIS', href: '/internet-information-server' },
      ]
    },
    {
      title: 'Testing',
      color: '#dc2626',
      bg: '#fff1f2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      ),
      items: [
        { name: 'Software Testing', href: '/software-testing-company-in-vantaa' },
        { name: 'Unit Testing', href: '/software-unit-testing' },
        { name: 'Integration Testing', href: '/software-integration-testing' },
        { name: 'System Testing', href: '/software-system-testing' },
        { name: 'Deployment Automation Support', href: '/automation-deployment-services' },
      ]
    },
    {
      title: 'Software Process',
      color: '#475569',
      bg: '#f8fafc',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        </svg>
      ),
      items: [
        { name: 'SDLC', href: '/software-development-life-cycle' },
      ]
    },
  ];

  return (
    <>
      <img src="/debug/img/Vector_Smart_Object30.svg" alt="vector-smart-object" className="back-img img-fluid" />

      <section className="ui_ux--cta client-main pb-5">
        <div className="container">

          {/* Hero heading row */}
          <div className="row img-row justify-content-center text-center">
            <div className="col-md-7" data-aos="fade-down" data-aos-duration="700">
              <h1 className="font-weight-bold services_head">OUR TECHNOLOGY</h1>
              <p className="lead text-muted mt-2 mb-0" style={{ fontSize: '16px' }}>
                A comprehensive stack of battle-tested technologies powering STO Digital's enterprise solutions.
              </p>
            </div>
            <div className="col-sm-7 img-div" data-aos="fade-down" data-aos-duration="700">
              <img src="/debug/img/banner_icon.png" alt="banner" className="img-fluid" />
            </div>
          </div>

          {/* Technology Category Cards */}
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

                  {/* Thin colored divider */}
                  <div style={{ height: '2px', background: `linear-gradient(90deg, ${cat.color}, transparent)`, borderRadius: '2px', marginBottom: '18px' }}></div>

                  {/* Item links */}
                  <ul className="list-unstyled mb-0" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {cat.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.href}
                          className="d-flex align-items-center text-decoration-none py-1 px-2 rounded"
                          style={{
                            color: '#374151',
                            fontSize: '14px',
                            transition: 'all 0.2s ease',
                            borderRadius: '8px',
                            width: '100%',
                            minWidth: 0
                          }}
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
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={cat.color}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ marginRight: '8px', flexShrink: 0 }}
                          >
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                          <span style={{ minWidth: 0, wordBreak: 'break-all', overflowWrap: 'break-word' }}>
                            {item.name}
                          </span>
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

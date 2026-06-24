import React, { useState, useEffect } from 'react';

const BLOGS_DATABASE = [
  {
    title: "How Claude AI Can Be Helpful For Digital Marketing",
    url: "/post/how-claude-ai-can-be-helpful-for-digital-marketing",
    image: "/blog/2026/05/1777794424.png",
    date: "03-05-2026",
    type: "Digital Marketing",
    description: "The Role of Claude AI in Modern Marketing. Digital marketing is becoming more competitive, data-driven, and fast-paced. Building smarter campaigns..."
  },
  {
    title: "How B2B Gifting Strengthens Client Relationships In The Digital Age",
    url: "/post/how-b2b-gifting-strengthens-client-relationships-in-the-digital-age",
    image: "/debug/img/no_blogs.jpg",
    date: "29-04-2026",
    type: "Customer Relationship",
    description: "Building lasting client relationships is one of the most important goals for any business, especially in the digital sales environments of today..."
  },
  {
    title: "How Identity Restoration Services Help You Recover Faster",
    url: "/post/how-identity-restoration-services-help-you-recover-faster",
    image: "/debug/img/no_blogs.jpg",
    date: "29-04-2026",
    type: "Data Security",
    description: "Identity theft hits millions of people every year, and the aftermath is rarely simple. Victims find themselves untangling financial records and databases..."
  },
  {
    title: "How Fractional HR Support Helps Companies Scale Without Overhead",
    url: "/post/how-fractional-hr-support-helps-companies-scale-without-overhead",
    image: "/debug/img/no_blogs.jpg",
    date: "29-04-2026",
    type: "Business Development",
    description: "Growing companies run into a familiar bind. They need senior HR expertise to handle policies and scale, but the budget rarely stretches to full-time hires..."
  },
  {
    title: "How A Strategic Long-Term SEO Strategy Drives Lasting Results",
    url: "/post/how-a-strategic-long-term-seo-strategy-drives-lasting-results",
    image: "/blog/2026/04/1777457518.png",
    date: "29-04-2026",
    type: "Digital Marketing",
    description: "The number one priority for any business that wants to last in today’s hyper-competitive digital space is online visibility. Standard SEO drives clicks..."
  }
];

export default function TechnologyBlogs() {
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Dynamic SEO Injection
    document.title = "Top 1000+ Technology Blogs For Latest Tech Updates";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Stay informed with the top 1000+ tech blogs, delivering the latest updates on cutting-edge technology trends, innovation, and breakthroughs.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "Stay informed with the top 1000+ tech blogs, delivering the latest updates on cutting-edge technology trends, innovation, and breakthroughs.");
      document.head.appendChild(metaDesc);
    }
  }, []);

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  const handleClear = () => {
    setSearchInput('');
    setSearchQuery('');
  };

  const filteredBlogs = BLOGS_DATABASE.filter(blog => {
    const q = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(q) ||
      blog.description.toLowerCase().includes(q) ||
      blog.type.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <style>{`
        .header {
            position:relative;
            text-align:center;
            background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
            color:white;
        }
        .logo {
            width:50px;
            fill:white;
            padding-right:15px;
            display:inline-block;
            vertical-align: middle;
        }
        .inner-header {
            height:19vh;
            width:100%;
            margin: 0;
            padding: 0;
        }
        .flex { /*Flexbox for containers*/
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .waves {
            position:relative;
            width: 100%;
            height:15vh;
            margin-bottom:-7px; /*Fix for safari gap*/
            min-height:100px;
            max-height:150px;
        }
        .content {
            position:relative;
            height:20vh;
            text-align:center;
            background-color: white;
        }
        .parallax > use {
            animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
        }
        .parallax > use:nth-child(1) {
            animation-delay: -2s;
            animation-duration: 7s;
        }
        .parallax > use:nth-child(2) {
            animation-delay: -3s;
            animation-duration: 10s;
        }
        .parallax > use:nth-child(3) {
            animation-delay: -4s;
            animation-duration: 13s;
        }
        .parallax > use:nth-child(4) {
            animation-delay: -5s;
            animation-duration: 20s;
        }
        @keyframes move-forever {
            0% {
                transform: translate3d(-90px,0,0);
            }
            100% {
                transform: translate3d(85px,0,0);
            }
        }
        @media (max-width: 1024px) {
            .inner-header {
                height: 25vh;
            }
        }
        @media (max-width: 768px) {
            .waves {
                height:40px;
                min-height:40px;
            }
            .content {
                height:30vh;
            }
            h1 {
                font-size:24px;
            }
            .inner-header{
                height: 285px;
            }
            .inner-header .h1 > br{
                display: none;
            }
        }
      `}</style>
      <div className="header">
        <div className="inner-header flex px-4">
          <h1 className="text-uppercase h1">Top Technology Blogs For Latest <br /> Tech Updates, News &amp; Information!</h1>
        </div>

        <div>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"></use>
            </g>
          </svg>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          
          <div className="col-lg-8 pt-4 px-5">
            <div className="row">
              <div className="col-md-12 pt-5 pb-4 px-md-5 blogsP">
                <p className="mb-3 text-justify">
                  Are you in search of <strong>tech blogs</strong> to stay abreast of the <strong>latest technology trends?</strong> Look no further—your quest ends here! Keep reading...
                </p>
                <p className="mb-3 text-justify">
                  From various walks of life, people are captivated by the rapid progress of technology, molding our existence into the digital realm!
                </p>
                <p className="mb-3 text-justify">
                  With fresh <strong>tech trends</strong> emerging quarterly and information swiftly becoming outdated as <strong>technology advances,</strong> it's now imperative to remain pertinent and gain insights into the most recent technologies, the digital sphere, social media, and the broader web landscape!
                </p>
                <h4 className="mb-2"><b>But how can this be achieved?</b></h4>
                <p className="mb-3 text-justify">
                  Enter the realm of <strong>technology blogs,</strong> where countless tech aficionados and businesses from diverse sectors find solace. These blogs deliver the latest tech updates quicker than any other source, serving as a vital conduit.
                </p>
                <p className="mb-3 text-justify">
                  Beyond merely showcasing cutting-edge discoveries, these technology blogs empower readers to consistently stay ahead of the curve by deciphering contemporary tech trends!
                </p>
                <p className="mb-3 text-justify">
                  As a result, we've curated a compilation of the <strong>top technology blogs,</strong> acting as conduits for the most recent global insights.
                </p>
                <p className="mb-3 text-justify">
                  Embracing these forefront technology blogs promises a continuous flow of ingenious concepts in the realm of technology. Whether it's breaking news or details about the latest market gadgets, these blogs encompass the entirety of the modern tech domain!
                </p>
                <p>
                  So, let's delve right in!
                </p>
              </div>
            </div>

            <div className="row allList pb-5" id="allList">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog, idx) => (
                  <div className="col-md-6 mb-4" key={idx}>
                    <div className="card h-100" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.08)', border: 'none', borderRadius: '8px', overflow: 'hidden' }}>
                      <a href={blog.url}>
                        <img className="card-img-top blog-img" src={blog.image} alt={blog.title} style={{ height: '220px', objectFit: 'cover', width: '100%' }} />
                      </a>
                      <div className="card-body">
                        <div className="row mb-2">
                          <div className="col-7">
                            <h6 className="blog-type text-uppercase text-primary font-weight-bold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
                              {blog.type}
                            </h6>
                          </div>
                          <div className="col-5 text-right">
                            <h5 className="blog-date" style={{ fontSize: '11px', color: '#888' }}>
                              {blog.date}
                            </h5>
                          </div>
                        </div>
                        <a href={blog.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <h4 className="card-title font-weight-bold" style={{ fontSize: '17px', color: '#090218', lineHeight: '1.3' }}>{blog.title}</h4>
                          <p className="card-text text-muted" style={{ fontSize: '13.5px', height: '65px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{blog.description}</p>
                        </a>
                        <div className="row mt-3 border-top pt-2">
                          <div className="col-12 blog-share">
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + blog.url)}`} target="_blank" rel="noreferrer">
                              <img src="/debug/img/facebook.svg" alt="facebook" className="img-fluid mr-2" style={{ width: '20px', height: '20px' }} />
                            </a>
                            <a href={`https://www.twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin + blog.url)}`} target="_blank" rel="noreferrer">
                              <img src="/debug/img/twitter-1.svg" alt="twitter" className="img-fluid mr-2" style={{ width: '20px', height: '20px' }} />
                            </a>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.origin + blog.url)}`} target="_blank" rel="noreferrer">
                              <img src="/debug/img/linkedin-1.svg" alt="linkedin" className="img-fluid mr-2" style={{ width: '20px', height: '20px' }} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <h4 className="text-muted">No technology blogs found matching your search.</h4>
                  <button className="btn btn-secondary mt-3" onClick={handleClear}>Reset Search</button>
                </div>
              )}
            </div>
          </div>

          <aside className="col-lg-4 widget-listing">
            <div className="widget search">
              <div className="form-group">
                <h3 className="h6">Search the blog</h3>
                <input 
                  type="text" 
                  id="searchData" 
                  className="form-control" 
                  value={searchInput} 
                  onChange={(e) => setSearchInput(e.target.value)} 
                  placeholder="What are you looking for?"
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
                />
              </div>
              <div className="form-group mb-0">
                <button type="button" className="btn btn-primary mr-2" onClick={handleSearch} style={{ backgroundColor: "#0262d3", color: "#fff", borderColor: "#0262d3" }}>Search</button>
                <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>
              </div>
            </div>

            <div className="widget widget__para">
              <h2>About STO Digital's Blog</h2>
              <p className="mb-3">
                <strong>STO Digital</strong> is a dedicated research and content powerhouse specializing in technology blogs. With a keen focus on staying at the forefront of emerging tech trends, we deliver insightful and meticulously researched articles.
              </p>
              <p className="mb-3">
                Our team of experts possesses a deep understanding of the ever-evolving tech landscape, providing readers with up-to-date information, analyses, and reviews. From groundbreaking innovations to the latest <strong>technology,</strong> our content offers a comprehensive view of the dynamic <strong>world of technology</strong>.
              </p>
              <p>
                Whether you're a tech enthusiast or a professional seeking to stay informed, our commitment to delivering accurate and engaging content establishes us as a trusted source for all things tech-related.
              </p>
            </div>

            <div className="widget latest-posts">
              <header>
                <h3 className="h6">Latest Posts</h3>
              </header>
              {BLOGS_DATABASE.slice(0, 4).map((blog, idx) => (
                <div className="blog-posts" key={idx}>
                  <a href={blog.url}>
                    <div className="item d-flex align-items-center">
                      <div className="image">
                        <img src={blog.image} alt={blog.title} className="img-fluid" style={{ objectFit: 'cover', height: '60px', width: '60px' }} />
                      </div>
                      <div className="title">
                        <strong>{blog.title}</strong>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </>
  );
}

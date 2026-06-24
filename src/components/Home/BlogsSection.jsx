import React, { useEffect } from 'react';

export default function BlogsSection() {
  useEffect(() => {
    const $ = window.$;
    if ($ && typeof $.fn.owlCarousel === 'function') {
      const $owl = $('.owl-three');
      $owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1,
            margin: 0
          },
          1025: {
            items: 2,
            margin: 0
          }
        },
        navText: [
          "<img src='/debug/img/right-arrow_blog.svg' width='28.5px' height='28.5px' alt='back arrow img' />",
          "<img src='/debug/img/left-arrow_blog.svg' width='28.5px' height='28.5px' alt='nexr arrow img' />"
        ]
      });
      return () => {
        $owl.trigger('destroy.owl.carousel');
      };
    }
  }, []);
  return (
    <>
  <section className="blogs">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 bg-blog">
          <div className="quote-container">
            <div className="quote">
              <i className="fas fa-quote-right"></i>
            </div>
            <h2 className="text-uppercase text-center d-inline-block">
              Our Blogs
            </h2>
          </div>
        </div>
        <div className="col-md-6 blog-showcase">
          <div className="owl-carousel owl-theme owl-three">
            <div className="item" data-aos="zoom-in-left" data-aos-duration="1000">
							<div className="card">
								<a href="/post/how-claude-ai-can-be-helpful-for-digital-marketing" style={{"textDecoration":"none","color":"inherit"}}>
								    <img className="card-img-top blog-img" src="/blog/2026/05/1777794424.png" alt="How Claude AI Can Be Helpful For Digital Marketing" />
								</a>
								<div className="card-body py-1">
								    <a href="/post/how-claude-ai-can-be-helpful-for-digital-marketing" style={{"textDecoration":"none","color":"inherit"}}>
									<div className="row">
										<div className="col-md-7" style={{"alignSelf":"center"}}>
											<h6 className="blog-type text-uppercase">
												Digital Marketing
											</h6>
										</div>
										<div className="col-md-5" style={{"alignSelf":"center"}}>
											<h5 className="blog-date">
												03-05-2026
											</h5>
										</div>
										<div className="col-12">
											<h5 className="blog-title">
												How Claude AI Can Be Helpful For Digital Marketing
											</h5>
											<div className="blogCardDesc">	
											<p>
												The Role of Claude AI in Modern Marketing

Digital marketing is becoming more competitive, data-dr...
											</p>
											</div>
										</div>
									</div>
									</a>
									
									<div className="row">
									  <div className="col-12 blog-share float-right">
											<a href="https://www.facebook.com/sharer/sharer.php?u=/post/how-claude-ai-can-be-helpful-for-digital-marketing" target="_blank">
												<img src="/debug/img/facebook.svg" alt="facebook" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
											<a href="https://www.twitter.com/intent/tweet?url=/post/how-claude-ai-can-be-helpful-for-digital-marketing" target="_blank">
												<img src="/debug/img/twitter-1.svg" alt="twitter" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
											<a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=/post/how-claude-ai-can-be-helpful-for-digital-marketing" target="_blank">
												<img src="/debug/img/linkedin-1.svg" alt="linkedin" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
										</div>
                                    </div>
								</div>
						
							</div>
						</div><div className="item" data-aos="zoom-in-left" data-aos-duration="1000">
							<div className="card">
								<a href="/post/how-b2b-gifting-strengthens-client-relationships-in-the-digital-age" style={{"textDecoration":"none","color":"inherit"}}>
								    <img className="card-img-top blog-img" src="/debug/img/no_blogs.jpg" alt="How B2B Gifting Strengthens Client Relationships In The Digital Age" />
								</a>
								<div className="card-body py-1">
								    <a href="/post/how-b2b-gifting-strengthens-client-relationships-in-the-digital-age" style={{"textDecoration":"none","color":"inherit"}}>
									<div className="row">
										<div className="col-md-7" style={{"alignSelf":"center"}}>
											<h6 className="blog-type text-uppercase">
												Customer Relationship
											</h6>
										</div>
										<div className="col-md-5" style={{"alignSelf":"center"}}>
											<h5 className="blog-date">
												29-04-2026
											</h5>
										</div>
										<div className="col-12">
											<h5 className="blog-title">
												How B2B Gifting Strengthens Client Relationships In The Digital Age
											</h5>
											<div className="blogCardDesc">	
											<p>
												Building lasting client relationships is one of the most important goals for any business, especiall...
											</p>
											</div>
										</div>
									</div>
									</a>
									
									<div className="row">
									  <div className="col-12 blog-share float-right">
											<a href="https://www.facebook.com/sharer/sharer.php?u=/post/how-b2b-gifting-strengthens-client-relationships-in-the-digital-age" target="_blank">
												<img src="/debug/img/facebook.svg" alt="facebook" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
											<a href="https://www.twitter.com/intent/tweet?url=/post/how-b2b-gifting-strengthens-client-relationships-in-the-digital-age" target="_blank">
												<img src="/debug/img/twitter-1.svg" alt="twitter" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
											<a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=/post/how-b2b-gifting-strengthens-client-relationships-in-the-digital-age" target="_blank">
												<img src="/debug/img/linkedin-1.svg" alt="linkedin" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
										</div>
                                    </div>
								</div>
						
							</div>
						</div><div className="item" data-aos="zoom-in-left" data-aos-duration="1000">
							<div className="card">
								<a href="/post/how-identity-restoration-services-help-you-recover-faster" style={{"textDecoration":"none","color":"inherit"}}>
								    <img className="card-img-top blog-img" src="/debug/img/no_blogs.jpg" alt="How Identity Restoration Services Help You Recover Faster" />
								</a>
								<div className="card-body py-1">
								    <a href="/post/how-identity-restoration-services-help-you-recover-faster" style={{"textDecoration":"none","color":"inherit"}}>
									<div className="row">
										<div className="col-md-7" style={{"alignSelf":"center"}}>
											<h6 className="blog-type text-uppercase">
												Data Security
											</h6>
										</div>
										<div className="col-md-5" style={{"alignSelf":"center"}}>
											<h5 className="blog-date">
												29-04-2026
											</h5>
										</div>
										<div className="col-12">
											<h5 className="blog-title">
												How Identity Restoration Services Help You Recover Faster
											</h5>
											<div className="blogCardDesc">	
											<p>
												Identity theft hits millions of people every year, and the aftermath is rarely simple. Victims find ...
											</p>
											</div>
										</div>
									</div>
									</a>
									
									<div className="row">
									  <div className="col-12 blog-share float-right">
											<a href="https://www.facebook.com/sharer/sharer.php?u=/post/how-identity-restoration-services-help-you-recover-faster" target="_blank">
												<img src="/debug/img/facebook.svg" alt="facebook" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
											<a href="https://www.twitter.com/intent/tweet?url=/post/how-identity-restoration-services-help-you-recover-faster" target="_blank">
												<img src="/debug/img/twitter-1.svg" alt="twitter" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
											<a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=/post/how-identity-restoration-services-help-you-recover-faster" target="_blank">
												<img src="/debug/img/linkedin-1.svg" alt="linkedin" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
										</div>
                                    </div>
								</div>
						
							</div>
						</div><div className="item" data-aos="zoom-in-left" data-aos-duration="1000">
							<div className="card">
								<a href="/post/how-fractional-hr-support-helps-companies-scale-without-overhead" style={{"textDecoration":"none","color":"inherit"}}>
								    <img className="card-img-top blog-img" src="/debug/img/no_blogs.jpg" alt="How Fractional HR Support Helps Companies Scale Without Overhead" />
								</a>
								<div className="card-body py-1">
								    <a href="/post/how-fractional-hr-support-helps-companies-scale-without-overhead" style={{"textDecoration":"none","color":"inherit"}}>
									<div className="row">
										<div className="col-md-7" style={{"alignSelf":"center"}}>
											<h6 className="blog-type text-uppercase">
												Business Development
											</h6>
										</div>
										<div className="col-md-5" style={{"alignSelf":"center"}}>
											<h5 className="blog-date">
												29-04-2026
											</h5>
										</div>
										<div className="col-12">
											<h5 className="blog-title">
												How Fractional HR Support Helps Companies Scale Without Overhead
											</h5>
											<div className="blogCardDesc">	
											<p>
												Growing companies run into a familiar bind. They need senior HR expertise, but the budget rarely str...
											</p>
											</div>
										</div>
									</div>
									</a>
									
									<div className="row">
									  <div className="col-12 blog-share float-right">
											<a href="https://www.facebook.com/sharer/sharer.php?u=/post/how-fractional-hr-support-helps-companies-scale-without-overhead" target="_blank">
												<img src="/debug/img/facebook.svg" alt="facebook" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
											<a href="https://www.twitter.com/intent/tweet?url=/post/how-fractional-hr-support-helps-companies-scale-without-overhead" target="_blank">
												<img src="/debug/img/twitter-1.svg" alt="twitter" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
											<a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=/post/how-fractional-hr-support-helps-companies-scale-without-overhead" target="_blank">
												<img src="/debug/img/linkedin-1.svg" alt="linkedin" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
										</div>
                                    </div>
								</div>
						
							</div>
						</div><div className="item" data-aos="zoom-in-left" data-aos-duration="1000">
							<div className="card">
								<a href="/post/how-a-strategic-long-term-seo-strategy-drives-lasting-results" style={{"textDecoration":"none","color":"inherit"}}>
								    <img className="card-img-top blog-img" src="/blog/2026/04/1777457518.png" alt="How A Strategic Long-Term SEO Strategy Drives Lasting Results" />
								</a>
								<div className="card-body py-1">
								    <a href="/post/how-a-strategic-long-term-seo-strategy-drives-lasting-results" style={{"textDecoration":"none","color":"inherit"}}>
									<div className="row">
										<div className="col-md-7" style={{"alignSelf":"center"}}>
											<h6 className="blog-type text-uppercase">
												Digital Marketing
											</h6>
										</div>
										<div className="col-md-5" style={{"alignSelf":"center"}}>
											<h5 className="blog-date">
												29-04-2026
											</h5>
										</div>
										<div className="col-12">
											<h5 className="blog-title">
												How A Strategic Long-Term SEO Strategy Drives Lasting Results
											</h5>
											<div className="blogCardDesc">	
											<p>
												The number one priority for any business that wants to last in today’s hyper-competitive digit...
											</p>
											</div>
										</div>
									</div>
									</a>
									
									<div className="row">
									  <div className="col-12 blog-share float-right">
											<a href="https://www.facebook.com/sharer/sharer.php?u=/post/how-a-strategic-long-term-seo-strategy-drives-lasting-results" target="_blank">
												<img src="/debug/img/facebook.svg" alt="facebook" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
											<a href="https://www.twitter.com/intent/tweet?url=/post/how-a-strategic-long-term-seo-strategy-drives-lasting-results" target="_blank">
												<img src="/debug/img/twitter-1.svg" alt="twitter" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
											<a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=/post/how-a-strategic-long-term-seo-strategy-drives-lasting-results" target="_blank">
												<img src="/debug/img/linkedin-1.svg" alt="linkedin" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
										</div>
                                    </div>
								</div>
						
							</div>
						</div><div className="item" data-aos="zoom-in-left" data-aos-duration="1000">
							<div className="card">
								<a href="/post/6-reliable-tools-for-viewing-ig-stories-without-being-seen" style={{"textDecoration":"none","color":"inherit"}}>
								    <img className="card-img-top blog-img" src="/debug/img/no_blogs.jpg" alt="6 Reliable Tools For Viewing IG Stories Without Being Seen (Tested &amp; Ranked)" />
								</a>
								<div className="card-body py-1">
								    <a href="/post/6-reliable-tools-for-viewing-ig-stories-without-being-seen" style={{"textDecoration":"none","color":"inherit"}}>
									<div className="row">
										<div className="col-md-7" style={{"alignSelf":"center"}}>
											<h6 className="blog-type text-uppercase">
												Marketing Updates
											</h6>
										</div>
										<div className="col-md-5" style={{"alignSelf":"center"}}>
											<h5 className="blog-date">
												28-04-2026
											</h5>
										</div>
										<div className="col-12">
											<h5 className="blog-title">
												6 Reliable Tools For Viewing IG Stories Without Being Seen (Tested &amp; Ranked)
											</h5>
											<div className="blogCardDesc">	
											<p>
												One of the most significant worries of Instagram users nowadays is privacy. Instagram is not a place...
											</p>
											</div>
										</div>
									</div>
									</a>
									
									<div className="row">
									  <div className="col-12 blog-share float-right">
											<a href="https://www.facebook.com/sharer/sharer.php?u=/post/6-reliable-tools-for-viewing-ig-stories-without-being-seen" target="_blank">
												<img src="/debug/img/facebook.svg" alt="facebook" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
											<a href="https://www.twitter.com/intent/tweet?url=/post/6-reliable-tools-for-viewing-ig-stories-without-being-seen" target="_blank">
												<img src="/debug/img/twitter-1.svg" alt="twitter" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
											<a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=/post/6-reliable-tools-for-viewing-ig-stories-without-being-seen" target="_blank">
												<img src="/debug/img/linkedin-1.svg" alt="linkedin" className="img-fluid mr-sm-1 mr-md-2" />
											</a>
										</div>
                                    </div>
								</div>
						
							</div>
						</div>          </div>
        </div>
      </div>
    </div>
  </section>
  
{/*other technologies or products */}
    </>
  );
}

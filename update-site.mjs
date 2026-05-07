import fs from 'fs';
import path from 'path';

const indexPath = path.join(process.cwd(), 'public', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Sanitization replacements
console.log('Sanitizing data...');
html = html.replace(/Bangalore/g, 'Mock City');
html = html.replace(/HSR Layout/g, 'Tech Park Phase 2');
html = html.replace(/\+91\s*8884\s*739\s*988/g, '+91 99999 00001');
html = html.replace(/\[email&#160;protected\]/g, 'contact@mock-digital.com');

// 2. Update Testimonials with real Techasoft data
console.log('Updating Testimonials...');
const realTestimonials = [
    {
        name: 'Nishant Kumar',
        role: 'Bravo Pharma',
        quote: 'Techasoft delivers services on time and they have a very professional approach towards software development. Their expertise in pharmaceutical solutions is impressive.'
    },
    {
        name: 'Dr. Shivaraj',
        role: 'Natus',
        quote: 'The team at Techasoft is highly professional and dedicated. They understood our healthcare requirements perfectly and delivered a robust solution.'
    },
    {
        name: 'Arun Varma',
        role: 'E-Kart Solutions',
        quote: 'Working with them has been a great experience. Their agile methodology and transparent communication helped us launch our platform ahead of schedule.'
    }
];

const testimonialHtml = realTestimonials.map(t => `
          <div class="item">
            <div class="card border-0">
              <div class="row testimonials-stars">
                <div class="col-12 text-right">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <div class="row user-info">
                <div class="col-3 pr-0">
                  <img src="/debug/img/avatar-1-128.png" class="img-fluid" alt="user">
                </div>
                <div class="col-9 m-auto">
                  <h3 class="mb-0">${t.name}</h3>
                  <p class="mb-0">${t.role}</p>
                </div>
              </div>
              <div class="card-body">
                <p class="card-text">${t.quote}</p>
              </div>
            </div>
          </div>`).join('\n');

// Find the testimonial carousel and replace its content
const testimonialRegex = /<div class="owl-carousel owl-theme owl-one">[\s\S]*?<\/div>\s*<\/div>/;
html = html.replace(testimonialRegex, `<div class="owl-carousel owl-theme owl-one">${testimonialHtml}</div></div>`);

// 3. Inject Industries Section if missing
if (!html.includes('Industries We Serve')) {
    console.log('Injecting Industries section...');
    const industriesHtml = `
  <section class="industries py-5 bg-light" id="industries">
    <div class="container">
      <div class="row text-center mb-5">
        <div class="col-12">
          <h2 class="text-uppercase font-weight-bold">Industries We Serve</h2>
          <div class="h-line mx-auto"></div>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-3 mb-4">
          <div class="industry-card p-4 bg-white shadow-sm rounded">
            <i class="fas fa-microchip fa-3x mb-3 text-primary"></i>
            <h5>Technology</h5>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="industry-card p-4 bg-white shadow-sm rounded">
            <i class="fas fa-shopping-cart fa-3x mb-3 text-primary"></i>
            <h5>E-commerce</h5>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="industry-card p-4 bg-white shadow-sm rounded">
            <i class="fas fa-university fa-3x mb-3 text-primary"></i>
            <h5>Banking</h5>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="industry-card p-4 bg-white shadow-sm rounded">
            <i class="fas fa-truck fa-3x mb-3 text-primary"></i>
            <h5>Logistics</h5>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="industry-card p-4 bg-white shadow-sm rounded">
            <i class="fas fa-heartbeat fa-3x mb-3 text-primary"></i>
            <h5>Healthcare</h5>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="industry-card p-4 bg-white shadow-sm rounded">
            <i class="fas fa-plane fa-3x mb-3 text-primary"></i>
            <h5>Travel</h5>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="industry-card p-4 bg-white shadow-sm rounded">
            <i class="fas fa-graduation-cap fa-3x mb-3 text-primary"></i>
            <h5>Education</h5>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="industry-card p-4 bg-white shadow-sm rounded">
            <i class="fas fa-cogs fa-3x mb-3 text-primary"></i>
            <h5>Manufacturing</h5>
          </div>
        </div>
      </div>
    </div>
  </section>`;
    
    // Inject before footer
    html = html.replace('<footer', industriesHtml + '\n<footer');
}

fs.writeFileSync(indexPath, html);
console.log('public/index.html updated successfully!');

import React, { useEffect } from 'react';
import HeroSection from '../components/Home/HeroSection';
import BridgeSection from '../components/Home/BridgeSection';
import ServicesSection from '../components/Home/ServicesSection';
import TechnologiesSection from '../components/Home/TechnologiesSection';
import AiTechnologiesSection from '../components/Home/AiTechnologiesSection';
import ClientsSection from '../components/Home/ClientsSection';
import ContactSection from '../components/Home/ContactSection';
import MilestonesSection from '../components/Home/MilestonesSection';
import PortfolioSection from '../components/Home/PortfolioSection';
import BlogsSection from '../components/Home/BlogsSection';
import BookConsultationSection from '../components/Home/BookConsultationSection';
import FooterServicesSection from '../components/Home/FooterServicesSection';

export default function Home() {
  useEffect(() => {
    // Dynamic SEO Injection for Home
    document.title = "STO Digital - Leading AI & Software Development Company";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    const descriptionText = "STO Digital is a leading software development and AI engineering company in Vantaa, Finland, providing state-of-the-art web application, mobile app, and digital marketing services.";
    if (metaDesc) {
      metaDesc.setAttribute('content', descriptionText);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', descriptionText);
      document.head.appendChild(metaDesc);
    }

    if (window.AOS) {
      window.AOS.init();
      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      <style>{`
        .home-new .testimonials-new .card {
          background-image: url('/debug/img/TESTIMONIAL.svg');
        }

        .home-new .cta {
          background-image: url('/debug/img/side-design_home@3x.png');
          background-position: top left;
          background-repeat: no-repeat;
          background-size: 13%;
          position: relative;
        }

        .home-new .our-service {
          background-image: url('/debug/img/side-design_reverse.png'), url('/debug/img/side-design_home@3x.png');
          background-position: left 0, right bottom;
          background-repeat: no-repeat;
          background-size: 13%;
        }

        .home-new .client {
          background-image: url('/debug/img/side-design_reverse.png') !important;
          background-position: left center !important;
          background-repeat: no-repeat !important;
          background-size: 13% !important;
        }
      `}</style>
      <main className="home-new">
        <HeroSection />
        <BridgeSection />
        <ServicesSection />
        <TechnologiesSection />
        <AiTechnologiesSection />
        <ClientsSection />
        <ContactSection />
        <MilestonesSection />
        <PortfolioSection />
        <BlogsSection />
        <BookConsultationSection />
        <FooterServicesSection />
      </main>
    </>
  );
}


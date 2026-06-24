import React from 'react';

const clientLogos = [
  { alt: "Greenspace Industrial", src: "/uploads/logo.avif" },
  { alt: "Surf Local ", src: "/uploads/surflocalnewdesignlogo.svg" },
  { alt: "Britannia industries limited", src: "/uploads/britannia-industries6604.jpg" },
  { alt: "kurupz ", src: "/uploads/logo_(5).svg" },
  { alt: "Shri Chakradhar Publication ", src: "/uploads/LOGO-1.png" },
  { alt: "Gerald Duthie Accounting LLC", src: "/uploads/logo.webp" },
  { alt: "Career Vista ", src: "/uploads/logo_(4).svg" },
  { alt: "Trip-Tie", src: "/uploads/new_1.png" },
  { alt: "Newtonmarie", src: "/uploads/logo_(3).svg" },
  { alt: "Micro Medic", src: "/uploads/logo_(3).png" },
  { alt: "Bietri", src: "/uploads/logo_(2)1.png" },
  { alt: "SmartSage", src: "/uploads/logo_(2).svg" },
  { alt: "Talent Genie", src: "/uploads/logosvg1.svg" },
  { alt: "Vivendoinc", src: "/uploads/logo_(1)1.svg" },
  { alt: "Dentscan", src: "/uploads/logo3.svg" },
  { alt: "Play Pal ", src: "/uploads/p_11.png" },
  { alt: "Vi Assurance", src: "/uploads/Vi_logo_1.png" },
  { alt: "AR Power", src: "/uploads/Fevicon.svg" },
  { alt: "Whytboard", src: "/uploads/logosvg.svg" },
  { alt: "SettleBay ", src: "/uploads/logo2.svg" },
  { alt: "Bizex", src: "/uploads/MicrosoftTeams-image_(65).png" },
  { alt: "Serv Horizon Inc.", src: "/uploads/logoserv.svg" },
  { alt: "Pluto Planet Inc.", src: "/uploads/Logopluto.svg" },
  { alt: "Optisych Care Inc.", src: "/uploads/logo_(1).png" },
  { alt: "Wheelchair Taxi Sydney", src: "/uploads/MicrosoftTeams-image_(64).png" },
  { alt: "SPY Detective Agency", src: "/uploads/MicrosoftTeams-image_(62).png" },
  { alt: "Advance Detective Agency ", src: "/uploads/MicrosoftTeams-image_(61).png" },
  { alt: "Careerrepo ", src: "/uploads/logo_img6_(1).png" },
  { alt: "Parkbay", src: "/uploads/logored.svg" },
  { alt: "Certro portal", src: "/uploads/logo.png" },
  { alt: "Dr Prashant Website", src: "/uploads/logo_prashant.svg" },
  { alt: "GEM Portal", src: "/uploads/logo_(1).svg" },
  { alt: "Astrohelp software", src: "/uploads/logo_(10).png" },
  { alt: "Total hotels management system", src: "/uploads/logo_(9).png" },
  { alt: "Filmibeat", src: "/uploads/logo.svg" },
  { alt: "Mentutor", src: "/uploads/1665474043415.png" },
  { alt: "Election Management System", src: "/uploads/Logo_final.png" },
  { alt: "Clairvoyance-Tech", src: "/uploads/cvtech_1-8_(2).png" },
  { alt: "PetScape", src: "/uploads/petscape_1-8.png" },
  { alt: "Instant Genie", src: "/uploads/logo_svg.svg" },
  { alt: "Myhiree", src: "/uploads/myhireeLogo.png" },
  { alt: "IndianRda Careers", src: "/uploads/rda_logo_(2).png" },
  { alt: "ReNew ", src: "/uploads/Logo.avif" },
  { alt: "WedBuzz", src: "/uploads/APP_ICON.png" },
  { alt: "IndianRDA", src: "/uploads/rda_logo_(1).png" },
  { alt: "Happy Notes", src: "/uploads/happynotes_logo.png" },
  { alt: "Kosher East", src: "/uploads/kecolor.png" },
  { alt: "Smart Mortgage", src: "/uploads/smartmortage1.jpg" },
  { alt: "CODi", src: "/uploads/codi_img.png" },
  { alt: "MUDARORGANIC", src: "/uploads/mudar_logo.png" },
  { alt: "BAPL", src: "/uploads/bapl_logo.svg" },
  { alt: "MAFNA", src: "/uploads/mafna.png" },
  { alt: "Hurrayedutech ", src: "/uploads/hurray.png" },
  { alt: "Sushant Travels", src: "/uploads/sushant_Logo.png" },
  { alt: "BRAVO PHARMA  ", src: "/uploads/Bravo-logo2.png" },
  { alt: "CareLick", src: "/uploads/carelick.png" },
  { alt: "SMART REPAIR ", src: "/uploads/smart-repair3.png" },
];

export default function ClientsSection() {
  // Duplicate logos array to make a seamless infinite loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <>
      <style>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          position: relative;
          display: flex;
          padding: 30px 0;
          background: #fff;
        }

        .marquee-container::before,
        .marquee-container::after {
          position: absolute;
          top: 0;
          width: 80px;
          height: 100%;
          content: "";
          z-index: 2;
          pointer-events: none;
        }

        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
        }

        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
        }

        .marquee-content {
          display: flex;
          width: max-content;
          animation: marquee-scroll 60s linear infinite;
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        .marquee-item {
          flex-shrink: 0;
          width: 160px;
          height: 80px;
          margin: 0 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .marquee-item img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          opacity: 1;
        }

        .marquee-item:hover img {
          transform: scale(1.12);
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section className="client py-5" style={{ background: '#fff' }}>
        <div className="container bg-white text-center">
          <h2 className="text-uppercase pb-2 d-inline-block" style={{ fontWeight: '700', letterSpacing: '1px' }}>
            OUR CLIENTS
          </h2>
          <div className="h-line mb-4"></div>
          
          <div className="marquee-container mt-4">
            <div className="marquee-content">
              {duplicatedLogos.map((client, idx) => (
                <div className="marquee-item" key={idx}>
                  <img 
                    src={client.src} 
                    alt={client.alt} 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

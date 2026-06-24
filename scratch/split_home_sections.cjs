const fs = require('fs');
const path = require('path');

const srcPath = '/Users/renoroy/Desktop/into in 2/src/pages/Home.jsx';
const outputDir = '/Users/renoroy/Desktop/into in 2/src/components/Home';

// Create folder if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const content = fs.readFileSync(srcPath, 'utf8');
const lines = content.split('\n');

const sections = [
  { name: 'HeroSection', start: 8, end: 92 },
  { name: 'BridgeSection', start: 93, end: 102 },
  { name: 'ServicesSection', start: 103, end: 378 },
  { name: 'TechnologiesSection', start: 379, end: 449 },
  { name: 'AiTechnologiesSection', start: 450, end: 491 },
  { name: 'ClientsSection', start: 492, end: 854 },
  { name: 'ContactSection', start: 855, end: 929 },
  { name: 'TestimonialsSection', start: 930, end: 1219 },
  { name: 'MilestonesSection', start: 1220, end: 1268 },
  { name: 'PortfolioSection', start: 1269, end: 1368 },
  { name: 'BlogsSection', start: 1369, end: 1487 },
  { name: 'FooterServicesSection', start: 1488, end: 2051 }
];

sections.forEach((sec) => {
  // lines are 1-indexed, slice needs 0-indexed bounds
  const extractedLines = lines.slice(sec.start - 1, sec.end);
  const jsxBody = extractedLines.join('\n');
  
  const fileContent = `import React from 'react';

export default function ${sec.name}() {
  return (
    <>
${jsxBody}
    </>
  );
}
`;
  
  const destFile = path.join(outputDir, `${sec.name}.jsx`);
  fs.writeFileSync(destFile, fileContent, 'utf8');
  console.log(`Extracted: ${sec.name} -> ${destFile}`);
});

// Write the updated Home.jsx
const homeNewContent = `import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import BridgeSection from '../components/Home/BridgeSection';
import ServicesSection from '../components/Home/ServicesSection';
import TechnologiesSection from '../components/Home/TechnologiesSection';
import AiTechnologiesSection from '../components/Home/AiTechnologiesSection';
import ClientsSection from '../components/Home/ClientsSection';
import ContactSection from '../components/Home/ContactSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import MilestonesSection from '../components/Home/MilestonesSection';
import PortfolioSection from '../components/Home/PortfolioSection';
import BlogsSection from '../components/Home/BlogsSection';
import FooterServicesSection from '../components/Home/FooterServicesSection';

export default function Home() {
  return (
    <>
      <main className="home-new">
        <HeroSection />
        <BridgeSection />
        <ServicesSection />
        <TechnologiesSection />
        <AiTechnologiesSection />
        <ClientsSection />
        <ContactSection />
        <TestimonialsSection />
        <MilestonesSection />
        <PortfolioSection />
        <BlogsSection />
        <FooterServicesSection />
      </main>
    </>
  );
}
`;

fs.writeFileSync(srcPath, homeNewContent, 'utf8');
console.log('Successfully updated src/pages/Home.jsx with modular subcomponents!');

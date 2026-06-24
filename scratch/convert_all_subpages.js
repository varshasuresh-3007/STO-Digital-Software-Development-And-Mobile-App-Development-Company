const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const backupDir = path.resolve(__dirname, '../static_backup');
const srcPagesDir = path.resolve(__dirname, '../src/pages');
const routesFile = path.resolve(__dirname, '../src/routes.jsx');

// Maintain a registry of routing paths and component names
const routeRegistry = [];

// Helper to convert filename or path to PascalCase component name
function getComponentName(relativeFilePath) {
  const cleanPath = relativeFilePath.replace(/\.html\.bak$/, '').replace(/\.html$/, '');
  const segments = cleanPath.split(path.sep);
  const camelSegments = segments.map(seg => {
    return seg
      .replace(/[^a-zA-Z0-9]/g, ' ')
      .split(' ')
      .filter(Boolean)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  });
  return camelSegments.join('');
}

// Helper to convert style attributes to React Style Objects
function convertStyleToReact(styleStr) {
  if (!styleStr) return '';
  const props = {};
  styleStr.split(';').forEach(pair => {
    const parts = pair.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      const val = parts.slice(1).join(':').trim();
      if (key && val) props[key] = val;
    }
  });
  return `style={${JSON.stringify(props)}}`;
}

// Convert HTML content into valid JSX code
function convertToJSX(html) {
  if (!html) return '';

  // 1. Convert standard HTML classes and attribute variations
  let jsx = html
    .replace(/class=/g, 'className=')
    .replace(/colspan=/g, 'colSpan=')
    .replace(/rowspan=/g, 'rowSpan=')
    .replace(/autocomplete=/g, 'autoComplete=')
    .replace(/onclick=/g, 'onClick=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/tabindex=/g, 'tabIndex=');

  // 2. Map inline style attributes
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    return convertStyleToReact(p1);
  });

  // 3. Self-close void elements correctly
  const voidElements = ['img', 'br', 'input', 'source', 'hr', 'meta', 'link'];
  voidElements.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*[^/])>`, 'gi');
    jsx = jsx.replace(regex, `<${tag}$1 />`);
  });

  // 4. Handle brackets / curly braces in text content safely
  jsx = jsx.replace(/\{/g, '{"{"}').replace(/\}/g, '{"}"}');

  return jsx;
}

// Recursively scan directories for HTML files
function processDirectory(dir, relativePath = '') {
  const currentDir = path.join(dir, relativePath);
  if (!fs.existsSync(currentDir)) return;
  const items = fs.readdirSync(currentDir);

  for (const item of items) {
    const itemRelative = path.join(relativePath, item);
    const itemAbsolute = path.join(dir, itemRelative);
    const stats = fs.statSync(itemAbsolute);

    if (stats.isDirectory()) {
      processDirectory(dir, itemRelative);
    } else if (stats.isFile()) {
      const ext = path.extname(item).toLowerCase();
      // Skip backups or non-html
      if (ext !== '.html') continue;

      // Filter small modal-only files (~8KB or below)
      if (stats.size < 12000) {
        console.log(`Skipping partial template: ${itemRelative} (${stats.size} bytes)`);
        continue;
      }

      console.log(`Processing page: ${itemRelative}...`);
      const rawHTML = fs.readFileSync(itemAbsolute, 'utf-8');
      const $ = cheerio.load(rawHTML);

      // Extract SEO
      const title = $('title').text().trim() || 'STO Digital - AI and Digital Transformation Agency';
      const description = $('meta[name="description"]').attr('content') || '';

      // Extract unique contents
      let mainHtml = '';
      if ($('main').length > 0) {
        mainHtml = $('main').html();
      } else {
        // Fallback to body tag extraction while stripping out headers/footers
        const bodyClone = $('body').clone();
        bodyClone.find('.top-header, .navbar, footer, script, style, #myBtn, .consulting-floating, #consultation-modal, #quote-request, #career-modal, #chatbotModal, .send-enquiry').remove();
        mainHtml = bodyClone.html();
      }

      const jsxContent = convertToJSX(mainHtml);
      const componentName = getComponentName(itemRelative);

      // Define target path inside src/pages/
      const cleanRelativePath = itemRelative.replace(/\.html$/, '');
      const targetComponentFile = path.join(srcPagesDir, `${cleanRelativePath}.jsx`);

      // Ensure directory exists
      fs.mkdirSync(path.dirname(targetComponentFile), { recursive: true });

      // Generate the React Page component template
      const pageTemplate = `import React, { useEffect } from 'react';

export default function ${componentName}() {
  useEffect(() => {
    // Dynamic SEO Injection
    document.title = ${JSON.stringify(title)};
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', ${JSON.stringify(description)});
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', ${JSON.stringify(description)});
      document.head.appendChild(metaDesc);
    }
  }, []);

  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

      fs.writeFileSync(targetComponentFile, pageTemplate, 'utf-8');
      console.log(`Successfully compiled: ${itemRelative} -> src/pages/${cleanRelativePath}.jsx`);

      // Add to route registry
      const routeUrl = '/' + cleanRelativePath.replace(/\\/g, '/');
      routeRegistry.push({
        url: routeUrl,
        componentName: componentName,
        filePath: `./pages/${cleanRelativePath.replace(/\\/g, '/')}`
      });
    }
  }
}

// Execute the migration scanner
processDirectory(backupDir);

// Generate src/routes.jsx
console.log('Generating src/routes.jsx routing table...');
const importsCode = routeRegistry
  .map(route => `const ${route.componentName} = React.lazy(() => import('${route.filePath}'));`)
  .join('\n');

const routesListCode = routeRegistry
  .map(route => `      <Route path="${route.url}" element={<${route.componentName} />} />`)
  .join('\n');

const routesTemplate = `import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Lazy-loaded pages
${importsCode}

export default function AppRoutes() {
  return (
    <Suspense fallback={
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#ffffff' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    }>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
${routesListCode}
          {/* Fallback for undefined paths */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
`;

fs.writeFileSync(routesFile, routesTemplate, 'utf-8');
console.log('Successfully generated src/routes.jsx routing registry!');
console.log(`Total React pages registered: ${routeRegistry.length + 1}`);

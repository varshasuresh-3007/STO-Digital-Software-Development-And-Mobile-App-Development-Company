import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Lazy-loaded pages
const BrandConsultingServicesVantaa = React.lazy(() => import('./pages/BRAND-CONSULTING-SERVICES-Vantaa'));
const CrmSoftwareDevelopmentCompanyVantaa = React.lazy(() => import('./pages/CRM-software-development-company-Vantaa'));
const EducationalWebPortalDevelopmentCompany = React.lazy(() => import('./pages/Educational-Web-Portal-Development-company'));
const HybridAppDevelopmentCompany = React.lazy(() => import('./pages/Hybrid-App-Development-company'));
const NativeAppDevelopmentCompany = React.lazy(() => import('./pages/Native-App-Development-Company'));
const RestaurantWebPortalDevelopmentCompany = React.lazy(() => import('./pages/Restaurant-web-portal-development-company'));
const SeoServicesCompanyVantaa = React.lazy(() => import('./pages/SEO-SERVICES-Company-Vantaa'));
const SearchEngineMarketingCompanyVantaa = React.lazy(() => import('./pages/Search-Engine-Marketing-Company-Vantaa'));
const SocialMediaMarketingCompanyVantaa = React.lazy(() => import('./pages/Social-Media-Marketing-Company-Vantaa'));
const SoftwareDevelopmentCompanyInVantaa = React.lazy(() => import('./pages/Software-Development-Company-in-Vantaa'));
const WebsiteDevelopmentCompanyInVantaa = React.lazy(() => import('./pages/Website-Development-Company-in-Vantaa'));
const WindowsAppDevelopmentCompany = React.lazy(() => import('./pages/Windows-App-Development-company'));
const AboutUs = React.lazy(() => import('./pages/about-us'));
const AgenticAiDevelopmentCompany = React.lazy(() => import('./pages/agentic-ai-development-company'));
const AjaxJson = React.lazy(() => import('./pages/ajax-json'));
const AlumniPlatform = React.lazy(() => import('./pages/alumni-platform'));
const AmazonWebServicesCloudDeployment = React.lazy(() => import('./pages/amazon-web-services-cloud-deployment'));
const AngularjsDevelopmentCompany = React.lazy(() => import('./pages/angularjs-development-company'));
const ApacheServer = React.lazy(() => import('./pages/apache-server'));
const ArtificialIntelligenceCompanyInVantaa = React.lazy(() => import('./pages/artificial-intelligence-company-in-vantaa'));
const AutomationDeploymentServices = React.lazy(() => import('./pages/automation-deployment-services'));
const BecomeAPartner = React.lazy(() => import('./pages/become-a-partner'));
const BookConsultation = React.lazy(() => import('./pages/book-consultation'));
const BrochureDesignCompaniesInVantaa = React.lazy(() => import('./pages/brochure-design-companies-in-vantaa'));
const Careers = React.lazy(() => import('./pages/careers'));
const CassandraDeveloperVantaa = React.lazy(() => import('./pages/cassandra-developer-vantaa'));
const Clients = React.lazy(() => import('./pages/clients'));
const ContactUs = React.lazy(() => import('./pages/contact-us'));
const CrmSoftwareDevelopment = React.lazy(() => import('./pages/crm-software-development'));
const DatabaseDevelopmentMongodb = React.lazy(() => import('./pages/database-development-mongodb'));
const DigitalMarketingCompanyInVantaa = React.lazy(() => import('./pages/digital-marketing-company-in-vantaa'));
const DoctorClickAway = React.lazy(() => import('./pages/doctor-click-away'));
const DrLog = React.lazy(() => import('./pages/dr-log'));
const DrupalDevelopmentCompany = React.lazy(() => import('./pages/drupal-development-company'));
const ECommerceWebsiteDevelopmentCompanyInVantaa = React.lazy(() => import('./pages/e-Commerce-website-development-company-in-Vantaa'));
const EKart = React.lazy(() => import('./pages/e-kart'));
const ELearning = React.lazy(() => import('./pages/e-learning'));
const EmployeeLeaveManagement = React.lazy(() => import('./pages/employee-leave-management-'));
const GodaddyDeploymentServicesInVantaa = React.lazy(() => import('./pages/goDaddy-deployment-services-in-vantaa'));
const GoogleCloudComputingDeploymentServices = React.lazy(() => import('./pages/google-cloud-computing-deployment-services'));
const Grocery = React.lazy(() => import('./pages/grocery'));
const HealthcarePortalDevelopmentCompany = React.lazy(() => import('./pages/healthcare-portal-development-company'));
const Hrms = React.lazy(() => import('./pages/hrms'));
const HtmlCss = React.lazy(() => import('./pages/html-css'));
const InternetInformationServer = React.lazy(() => import('./pages/internet-information-server'));
const J2eeJ2seSwingServlet = React.lazy(() => import('./pages/j2ee-j2se-swing-servlet'));
const JbossWebServer = React.lazy(() => import('./pages/jboss-web-server'));
const JoomlaDevelopmentCompany = React.lazy(() => import('./pages/joomla-development-company'));
const JqueryDevelopers = React.lazy(() => import('./pages/jquery-developers'));
const JspJsfApachecfx = React.lazy(() => import('./pages/jsp-jsf-apachecfx'));
const JunitTestngMockito = React.lazy(() => import('./pages/junit-testng-mockito'));
const LogoDesignCompaniesInVantaa = React.lazy(() => import('./pages/logo-design-companies-in-vantaa'));
const MachineLearningCompaniesInVantaa = React.lazy(() => import('./pages/machine-learning-companies-in-vantaa'));
const Matrimony = React.lazy(() => import('./pages/matrimony'));
const MicrosoftvisioEnterpriseArchitect = React.lazy(() => import('./pages/microsoftvisio-enterprise-architect'));
const MobileAppDevelopmentCompanyInVantaa = React.lazy(() => import('./pages/mobile-app-development-company-in-Vantaa'));
const MysqlDatabaseDesign = React.lazy(() => import('./pages/mysql-database-design'));
const NetsuiteSolutionConsultant = React.lazy(() => import('./pages/netsuite-solution-consultant'));
const News = React.lazy(() => import('./pages/news'));
const OcrOpticalCharacterRecognitionScannerApp = React.lazy(() => import('./pages/ocr-optical-character-recognition-scanner-app'));
const OracleDatabaseDesign = React.lazy(() => import('./pages/oracle-database-design'));
const OurPortfolio = React.lazy(() => import('./pages/our-portfolio'));
const PerlScripting = React.lazy(() => import('./pages/perl-scripting'));
const PhpDevelopmentCompanyInVantaa = React.lazy(() => import('./pages/php-development-company-in-vantaa'));
const PoAndStockManagement = React.lazy(() => import('./pages/po-and-stock-management'));
const PortfolioCrmSoftware = React.lazy(() => import('./pages/portfolio/crm-software'));
const PortfolioDigitalCommerce = React.lazy(() => import('./pages/portfolio/digital-commerce'));
const PortfolioEducationPlatform = React.lazy(() => import('./pages/portfolio/education-platform'));
const PortfolioHealthcareApp = React.lazy(() => import('./pages/portfolio/healthcare-app'));
const PortfolioMobileApp = React.lazy(() => import('./pages/portfolio/mobile-app'));
const PortfolioTravelPortal = React.lazy(() => import('./pages/portfolio/travel-portal'));
const PostHowAStrategicLongTermSeoStrategyDrivesLastingResults = React.lazy(() => import('./pages/post/how-a-strategic-long-term-seo-strategy-drives-lasting-results'));
const PostHowB2bGiftingStrengthensClientRelationshipsInTheDigitalAge = React.lazy(() => import('./pages/post/how-b2b-gifting-strengthens-client-relationships-in-the-digital-age'));
const PostHowClaudeAiCanBeHelpfulForDigitalMarketing = React.lazy(() => import('./pages/post/how-claude-ai-can-be-helpful-for-digital-marketing'));
const PostHowFractionalHrSupportHelpsCompaniesScaleWithoutOverhead = React.lazy(() => import('./pages/post/how-fractional-hr-support-helps-companies-scale-without-overhead'));
const PostHowIdentityRestorationServicesHelpYouRecoverFaster = React.lazy(() => import('./pages/post/how-identity-restoration-services-help-you-recover-faster'));
const Products = React.lazy(() => import('./pages/products'));
const PythonDeveloper = React.lazy(() => import('./pages/python-developer'));
const RealEstateWebPortalDevelopmentCompany = React.lazy(() => import('./pages/real-estate-web-portal-development-company'));
const RecruitmentService = React.lazy(() => import('./pages/recruitment-service'));
const RedisDeveloperVantaa = React.lazy(() => import('./pages/redis-developer-vantaa'));
const SchoolPnt = React.lazy(() => import('./pages/school-pnt'));
const Services = React.lazy(() => import('./pages/services'));
const SharepointDevelopmentCompanyInVantaa = React.lazy(() => import('./pages/sharepoint-development-company-in-vantaa'));
const ShellScripting = React.lazy(() => import('./pages/shell-scripting'));
const SoftwareConsultantInVantaa = React.lazy(() => import('./pages/software-consultant-in-vantaa'));
const SoftwareDevelopmentLifeCycle = React.lazy(() => import('./pages/software-development-life-cycle'));
const SoftwareIntegrationTesting = React.lazy(() => import('./pages/software-integration-testing'));
const SoftwareSystemTesting = React.lazy(() => import('./pages/software-system-testing'));
const SoftwareTestingCompanyInVantaa = React.lazy(() => import('./pages/software-testing-company-in-vantaa'));
const SoftwareUnitTesting = React.lazy(() => import('./pages/software-unit-testing'));
const SpringStrutsHibernate = React.lazy(() => import('./pages/spring-struts-hibernate'));
const SqlserverDatabaseConsulting = React.lazy(() => import('./pages/sqlserver-database-consulting'));
const TechacrmCustomerRelationshipManagementApplication = React.lazy(() => import('./pages/techacrm-customer-relationship-management-application'));
const Technology = React.lazy(() => import('./pages/technology'));
const TechnologyBlogs = React.lazy(() => import('./pages/technology-blogs'));
const TomcatWebServer = React.lazy(() => import('./pages/tomcat-web-server'));
const TravelWebPortalDevelopmentCompany = React.lazy(() => import('./pages/travel-web-portal-development-company'));
const UiUxDesignCompanyInVantaa = React.lazy(() => import('./pages/ui-ux-design-company-in-vantaa'));
const WebsiteDesigningCompanyInVantaa = React.lazy(() => import('./pages/website-designing-company-in-Vantaa'));
const WedlockPlanner = React.lazy(() => import('./pages/wedlock-planner'));
const WordpressDevelopmentCompany = React.lazy(() => import('./pages/wordpress-development-company'));
const XamarinAppDevelopment = React.lazy(() => import('./pages/xamarin-app-development'));

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
      <Route path="/BRAND-CONSULTING-SERVICES-Vantaa" element={<BrandConsultingServicesVantaa />} />
      <Route path="/CRM-software-development-company-Vantaa" element={<CrmSoftwareDevelopmentCompanyVantaa />} />
      <Route path="/Educational-Web-Portal-Development-company" element={<EducationalWebPortalDevelopmentCompany />} />
      <Route path="/Hybrid-App-Development-company" element={<HybridAppDevelopmentCompany />} />
      <Route path="/Native-App-Development-Company" element={<NativeAppDevelopmentCompany />} />
      <Route path="/Restaurant-web-portal-development-company" element={<RestaurantWebPortalDevelopmentCompany />} />
      <Route path="/SEO-SERVICES-Company-Vantaa" element={<SeoServicesCompanyVantaa />} />
      <Route path="/Search-Engine-Marketing-Company-Vantaa" element={<SearchEngineMarketingCompanyVantaa />} />
      <Route path="/Social-Media-Marketing-Company-Vantaa" element={<SocialMediaMarketingCompanyVantaa />} />
      <Route path="/Software-Development-Company-in-Vantaa" element={<SoftwareDevelopmentCompanyInVantaa />} />
      <Route path="/Website-Development-Company-in-Vantaa" element={<WebsiteDevelopmentCompanyInVantaa />} />
      <Route path="/Windows-App-Development-company" element={<WindowsAppDevelopmentCompany />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/agentic-ai-development-company" element={<AgenticAiDevelopmentCompany />} />
      <Route path="/ajax-json" element={<AjaxJson />} />
      <Route path="/alumni-platform" element={<AlumniPlatform />} />
      <Route path="/amazon-web-services-cloud-deployment" element={<AmazonWebServicesCloudDeployment />} />
      <Route path="/angularjs-development-company" element={<AngularjsDevelopmentCompany />} />
      <Route path="/apache-server" element={<ApacheServer />} />
      <Route path="/artificial-intelligence-company-in-vantaa" element={<ArtificialIntelligenceCompanyInVantaa />} />
      <Route path="/automation-deployment-services" element={<AutomationDeploymentServices />} />
      <Route path="/become-a-partner" element={<BecomeAPartner />} />
      <Route path="/book-consultation" element={<BookConsultation />} />
      <Route path="/brochure-design-companies-in-vantaa" element={<BrochureDesignCompaniesInVantaa />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/cassandra-developer-vantaa" element={<CassandraDeveloperVantaa />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/crm-software-development" element={<CrmSoftwareDevelopment />} />
      <Route path="/database-development-mongodb" element={<DatabaseDevelopmentMongodb />} />
      <Route path="/digital-marketing-company-in-vantaa" element={<DigitalMarketingCompanyInVantaa />} />
      <Route path="/doctor-click-away" element={<DoctorClickAway />} />
      <Route path="/dr-log" element={<DrLog />} />
      <Route path="/drupal-development-company" element={<DrupalDevelopmentCompany />} />
      <Route path="/e-Commerce-website-development-company-in-Vantaa" element={<ECommerceWebsiteDevelopmentCompanyInVantaa />} />
      <Route path="/e-kart" element={<EKart />} />
      <Route path="/e-learning" element={<ELearning />} />
      <Route path="/employee-leave-management-" element={<EmployeeLeaveManagement />} />
      <Route path="/goDaddy-deployment-services-in-vantaa" element={<GodaddyDeploymentServicesInVantaa />} />
      <Route path="/google-cloud-computing-deployment-services" element={<GoogleCloudComputingDeploymentServices />} />
      <Route path="/grocery" element={<Grocery />} />
      <Route path="/healthcare-portal-development-company" element={<HealthcarePortalDevelopmentCompany />} />
      <Route path="/hrms" element={<Hrms />} />
      <Route path="/html-css" element={<HtmlCss />} />
      <Route path="/internet-information-server" element={<InternetInformationServer />} />
      <Route path="/j2ee-j2se-swing-servlet" element={<J2eeJ2seSwingServlet />} />
      <Route path="/jboss-web-server" element={<JbossWebServer />} />
      <Route path="/joomla-development-company" element={<JoomlaDevelopmentCompany />} />
      <Route path="/jquery-developers" element={<JqueryDevelopers />} />
      <Route path="/jsp-jsf-apachecfx" element={<JspJsfApachecfx />} />
      <Route path="/junit-testng-mockito" element={<JunitTestngMockito />} />
      <Route path="/logo-design-companies-in-vantaa" element={<LogoDesignCompaniesInVantaa />} />
      <Route path="/machine-learning-companies-in-vantaa" element={<MachineLearningCompaniesInVantaa />} />
      <Route path="/matrimony" element={<Matrimony />} />
      <Route path="/microsoftvisio-enterprise-architect" element={<MicrosoftvisioEnterpriseArchitect />} />
      <Route path="/mobile-app-development-company-in-Vantaa" element={<MobileAppDevelopmentCompanyInVantaa />} />
      <Route path="/mysql-database-design" element={<MysqlDatabaseDesign />} />
      <Route path="/netsuite-solution-consultant" element={<NetsuiteSolutionConsultant />} />
      <Route path="/news" element={<News />} />
      <Route path="/ocr-optical-character-recognition-scanner-app" element={<OcrOpticalCharacterRecognitionScannerApp />} />
      <Route path="/oracle-database-design" element={<OracleDatabaseDesign />} />
      <Route path="/our-portfolio" element={<OurPortfolio />} />
      <Route path="/perl-scripting" element={<PerlScripting />} />
      <Route path="/php-development-company-in-vantaa" element={<PhpDevelopmentCompanyInVantaa />} />
      <Route path="/po-and-stock-management" element={<PoAndStockManagement />} />
      <Route path="/portfolio/crm-software" element={<PortfolioCrmSoftware />} />
      <Route path="/portfolio/digital-commerce" element={<PortfolioDigitalCommerce />} />
      <Route path="/portfolio/education-platform" element={<PortfolioEducationPlatform />} />
      <Route path="/portfolio/healthcare-app" element={<PortfolioHealthcareApp />} />
      <Route path="/portfolio/mobile-app" element={<PortfolioMobileApp />} />
      <Route path="/portfolio/travel-portal" element={<PortfolioTravelPortal />} />
      <Route path="/post/how-a-strategic-long-term-seo-strategy-drives-lasting-results" element={<PostHowAStrategicLongTermSeoStrategyDrivesLastingResults />} />
      <Route path="/post/how-b2b-gifting-strengthens-client-relationships-in-the-digital-age" element={<PostHowB2bGiftingStrengthensClientRelationshipsInTheDigitalAge />} />
      <Route path="/post/how-claude-ai-can-be-helpful-for-digital-marketing" element={<PostHowClaudeAiCanBeHelpfulForDigitalMarketing />} />
      <Route path="/post/how-fractional-hr-support-helps-companies-scale-without-overhead" element={<PostHowFractionalHrSupportHelpsCompaniesScaleWithoutOverhead />} />
      <Route path="/post/how-identity-restoration-services-help-you-recover-faster" element={<PostHowIdentityRestorationServicesHelpYouRecoverFaster />} />
      <Route path="/products" element={<Products />} />
      <Route path="/python-developer" element={<PythonDeveloper />} />
      <Route path="/real-estate-web-portal-development-company" element={<RealEstateWebPortalDevelopmentCompany />} />
      <Route path="/recruitment-service" element={<RecruitmentService />} />
      <Route path="/redis-developer-vantaa" element={<RedisDeveloperVantaa />} />
      <Route path="/school-pnt" element={<SchoolPnt />} />
      <Route path="/services" element={<Services />} />
      <Route path="/sharepoint-development-company-in-vantaa" element={<SharepointDevelopmentCompanyInVantaa />} />
      <Route path="/shell-scripting" element={<ShellScripting />} />
      <Route path="/software-consultant-in-vantaa" element={<SoftwareConsultantInVantaa />} />
      <Route path="/software-development-life-cycle" element={<SoftwareDevelopmentLifeCycle />} />
      <Route path="/software-integration-testing" element={<SoftwareIntegrationTesting />} />
      <Route path="/software-system-testing" element={<SoftwareSystemTesting />} />
      <Route path="/software-testing-company-in-vantaa" element={<SoftwareTestingCompanyInVantaa />} />
      <Route path="/software-unit-testing" element={<SoftwareUnitTesting />} />
      <Route path="/spring-struts-hibernate" element={<SpringStrutsHibernate />} />
      <Route path="/sqlserver-database-consulting" element={<SqlserverDatabaseConsulting />} />
      <Route path="/techacrm-customer-relationship-management-application" element={<TechacrmCustomerRelationshipManagementApplication />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/technology-blogs" element={<TechnologyBlogs />} />
      <Route path="/tomcat-web-server" element={<TomcatWebServer />} />
      <Route path="/travel-web-portal-development-company" element={<TravelWebPortalDevelopmentCompany />} />
      <Route path="/ui-ux-design-company-in-vantaa" element={<UiUxDesignCompanyInVantaa />} />
      <Route path="/website-designing-company-in-Vantaa" element={<WebsiteDesigningCompanyInVantaa />} />
      <Route path="/wedlock-planner" element={<WedlockPlanner />} />
      <Route path="/wordpress-development-company" element={<WordpressDevelopmentCompany />} />
      <Route path="/xamarin-app-development" element={<XamarinAppDevelopment />} />
          {/* Fallback for undefined paths */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

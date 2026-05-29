import './App.css'
import Home from "./pages/Home.jsx";
import Navbar from './components/Navbar.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import ProcessAutomation from "./pages/ProcessAutomation";
import AiEnhancedDataArchiving from "./pages/AiEnhancedDataArchiv.jsx";
import ApplicationDevelop from "./pages/ApplicationDevelop.jsx"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmartDocumentArchiving from "./pages/SmartDocument.jsx";
import DataSecurity from "./pages/DataSecurity.jsx";
import DataAnalytics from "./pages/DataAnalytics.jsx";
import BusinessContinuity from './pages/BusinessContinuity.jsx';
import  DataCenterTransformation from './pages/DataCenterTransformation.jsx';
import CloudServices  from './pages/CloudServices.jsx';
import ComprehensiveDataMigration from './pages/ComprehensiveDataMigration.jsx';
import InfrastructureVirtualisation from './pages/InfrastructureVirtualisation.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import CookiePolicy from './pages/CookiePolicy.jsx';
import VmwareVirtualization from './pages/VmwareVirtualization.jsx';
// import MessageEmailSolution from './pages/eDiscoveryComplianceArchiving.jsx'
import Enterprisearcheive from './pages/Enterprisearcheive.jsx';
import EDiscoveryComplianceArchiving from './pages/EDiscoveryComplianceArchiving.jsx';



function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/solutions/process-automation" element={<ProcessAutomation />} />
        <Route path="/solutions/data-archiving" element={<AiEnhancedDataArchiving />} />
        <Route path="/solutions/application-development" element={<ApplicationDevelop />} />
        <Route path="/solutions/document-archiving" element={<SmartDocumentArchiving />} />
        <Route path="/solutions/smart-document" element={<SmartDocumentArchiving />} />
        <Route path="/solutions/data-security" element={<DataSecurity />} />
        {/* <Route
          path="/solutions/data-security-migration-integration"
          element={<DataSecurity />}
        /> */}
          <Route path="/solutions/data-analytics" element={<DataAnalytics/>} />
          <Route path="/solutions/business-continuity" element={<BusinessContinuity/>} />
          <Route path="/solutions/datacenter-transformation" element={<DataCenterTransformation/>} />
          <Route path="/solutions/cloud-services" element={<CloudServices/>} />
          <Route path="/solutions/hybrid-migration" element={<ComprehensiveDataMigration/>} />
          <Route path="/solutions/infrastructure-virtualisation" element={<InfrastructureVirtualisation/>} />
          <Route path="/solutions/vmware-virtualization" element={<VmwareVirtualization/>} />
          <Route path="/solutions/eDiscovery-Compliancearchiving" element={<EDiscoveryComplianceArchiving/>} />
          <Route path="/solutions/enterprise-archive" element={<Enterprisearcheive/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/cookie-policy" element={<CookiePolicy/>} />


      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AccountingServices from './pages/AccountingServices';
import BusinessRegistration from './pages/BusinessRegistration';
import CompanySecretary from './pages/CompanySecretary';
import About from './pages/About';
import Contact from './pages/Contact';
import ClientPortal from './pages/ClientPortal';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/accounting" element={<AccountingServices />} />
            <Route path="/services/business-registration" element={<BusinessRegistration />} />
            <Route path="/services/company-secretary" element={<CompanySecretary />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
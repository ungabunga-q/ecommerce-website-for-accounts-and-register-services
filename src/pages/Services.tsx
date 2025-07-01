import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  Shield, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Accounting Services',
      description: 'Comprehensive accounting solutions for businesses of all sizes',
      icon: Calculator,
      features: [
        'Monthly/Quarterly Bookkeeping',
        'Tax Planning & Filing',
        'Financial Statement Preparation',
        'Statutory Audit Services',
        'GST Registration & Returns',
        'TDS & Payroll Management'
      ],
      startingPrice: '₹2,999',
      link: '/services/accounting',
      popular: true
    },
    {
      title: 'Business Registration',
      description: 'Complete business incorporation and registration services',
      icon: FileText,
      features: [
        'Private Limited Company',
        'Limited Liability Partnership',
        'One Person Company',
        'Partnership Firm Registration',
        'Proprietorship Setup',
        'NGO/Trust Registration'
      ],
      startingPrice: '₹4,999',
      link: '/services/business-registration',
      popular: false
    },
    {
      title: 'Company Secretary Services',
      description: 'Corporate compliance and governance solutions',
      icon: Shield,
      features: [
        'Annual Compliance Management',
        'ROC Filings & Returns',
        'Board Meeting Management',
        'Corporate Governance Advisory',
        'Legal Documentation',
        'Regulatory Compliance'
      ],
      startingPrice: '₹7,999',
      link: '/services/company-secretary',
      popular: false
    },
    {
      title: 'Tax Planning & Advisory',
      description: 'Strategic tax planning and optimization services',
      icon: TrendingUp,
      features: [
        'Income Tax Planning',
        'Corporate Tax Strategy',
        'International Taxation',
        'Tax Optimization',
        'Appeal & Litigation Support',
        'Transfer Pricing'
      ],
      startingPrice: '₹5,999',
      link: '/services',
      popular: false
    },
    {
      title: 'Startup Services',
      description: 'Specialized services for startups and entrepreneurs',
      icon: Users,
      features: [
        'Startup India Registration',
        'DPIIT Recognition',
        'Funding Documentation',
        'Investor Relations',
        'Compliance Calendar',
        'Growth Strategy'
      ],
      startingPrice: '₹8,999',
      link: '/services',
      popular: false
    },
    {
      title: 'Legal & Advisory',
      description: 'Legal consultation and business advisory services',
      icon: Award,
      features: [
        'Legal Documentation',
        'Contract Drafting',
        'Business Advisory',
        'Dispute Resolution',
        'Intellectual Property',
        'Employment Law'
      ],
      startingPrice: '₹3,999',
      link: '/services',
      popular: false
    }
  ];

  const industries = [
    'Manufacturing',
    'Information Technology',
    'Healthcare',
    'Real Estate',
    'E-commerce',
    'Financial Services',
    'Education',
    'Hospitality',
    'Retail',
    'Construction',
    'Import/Export',
    'Agriculture'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Services for Every Business Need
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              From startup registration to ongoing compliance, we provide comprehensive 
              professional services to help your business succeed in India's dynamic market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
              >
                Get Free Consultation
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors">
                Calculate Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of professional services 
              designed to meet your specific business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    service.popular 
                      ? 'border-gold-400 ring-2 ring-gold-400/20' 
                      : 'border-neutral-200 hover:border-primary-300'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-900 mb-4">{service.title}</h3>
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-primary-900 mb-2">
                      Starting from {service.startingPrice}
                      <span className="text-sm font-normal text-neutral-500">/month</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      service.popular
                        ? 'bg-gold-500 text-white hover:bg-gold-600'
                        : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our expertise spans across various industries, providing specialized 
              solutions for unique sector requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-neutral-50 hover:bg-primary-50 rounded-lg p-6 text-center transition-colors group"
              >
                <h3 className="font-semibold text-primary-900 group-hover:text-primary-600 transition-colors">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Simple, transparent, and efficient process to get your business 
              the professional services it needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Consultation</h3>
              <p className="text-neutral-600">Free consultation to understand your specific requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Proposal</h3>
              <p className="text-neutral-600">Detailed service proposal with transparent pricing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Execution</h3>
              <p className="text-neutral-600">Professional service delivery with regular updates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Support</h3>
              <p className="text-neutral-600">Ongoing support and maintenance as needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Choose the service that fits your needs or speak with our experts 
            to create a customized solution for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/client-portal"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors"
            >
              Access Client Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
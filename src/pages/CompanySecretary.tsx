import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  FileText, 
  Calendar, 
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

const CompanySecretary = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');

  const services = [
    {
      title: 'Annual Compliance Management',
      description: 'Complete annual filing and compliance management',
      icon: Calendar,
      features: [
        'Annual Return Filing (AOC-4)',
        'Financial Statement Filing',
        'Board Resolution Preparation',
        'Compliance Calendar Management',
        'Deadline Reminders'
      ],
      price: '₹12,999/year'
    },
    {
      title: 'ROC Filings & Returns',
      description: 'All types of ROC filings and statutory returns',
      icon: FileText,
      features: [
        'Change in Directors (DIR-12)',
        'Change in Registered Office',
        'Alteration of MOA/AOA',
        'Share Capital Changes',
        'Charge Creation/Modification'
      ],
      price: '₹2,999/filing'
    },
    {
      title: 'Board Meeting Management',
      description: 'Complete board meeting support and documentation',
      icon: Users,
      features: [
        'Meeting Notice Preparation',
        'Agenda Setting',
        'Minutes Drafting',
        'Resolution Preparation',
        'Statutory Registers Maintenance'
      ],
      price: '₹4,999/meeting'
    },
    {
      title: 'Corporate Governance Advisory',
      description: 'Strategic guidance on corporate governance matters',
      icon: Shield,
      features: [
        'Policy Development',
        'Risk Assessment',
        'Compliance Audits',
        'Regulatory Advisory',
        'Best Practices Implementation'
      ],
      price: '₹19,999/year'
    }
  ];

  const compliancePackages = [
    {
      id: 'basic',
      name: 'Basic Compliance',
      price: '₹8,999',
      period: '/year',
      description: 'Essential compliance for small companies',
      features: [
        'Annual Return Filing',
        'Financial Statement Filing',
        'Basic Board Resolutions',
        'Compliance Calendar',
        'Email Support',
        '2 ROC Filings Included'
      ],
      popular: false,
      suitable: 'Small Private Companies'
    },
    {
      id: 'standard',
      name: 'Standard Package',
      price: '₹15,999',
      period: '/year',
      description: 'Comprehensive compliance for growing businesses',
      features: [
        'All Basic Features',
        'Board Meeting Support',
        'Statutory Register Maintenance',
        'Quarterly Compliance Review',
        'Priority Support',
        '5 ROC Filings Included',
        'Compliance Dashboard Access'
      ],
      popular: true,
      suitable: 'Medium-sized Companies'
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: '₹25,999',
      period: '/year',
      description: 'Complete corporate governance solution',
      features: [
        'All Standard Features',
        'Dedicated CS Professional',
        'Monthly Compliance Reports',
        'Strategic Advisory',
        '24/7 Support',
        'Unlimited ROC Filings',
        'Risk Management Support',
        'Policy Documentation'
      ],
      popular: false,
      suitable: 'Large Companies & Listed Entities'
    }
  ];

  const complianceTimeline = [
    {
      month: 'April',
      tasks: ['Financial Year Planning', 'Board Meeting for Annual Accounts'],
      priority: 'medium'
    },
    {
      month: 'May',
      tasks: ['Annual Return Preparation', 'Statutory Audit Planning'],
      priority: 'high'
    },
    {
      month: 'June',
      tasks: ['Financial Statement Finalization', 'Board Approval'],
      priority: 'high'
    },
    {
      month: 'July',
      tasks: ['Annual Return Filing', 'Financial Statement Filing'],
      priority: 'critical'
    },
    {
      month: 'August',
      tasks: ['Compliance Review', 'Documentation Update'],
      priority: 'medium'
    },
    {
      month: 'September',
      tasks: ['Half-Yearly Compliance Check'],
      priority: 'medium'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-blue-600 bg-blue-100';
      default: return 'text-neutral-600 bg-neutral-100';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Company Secretary Services
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Ensure complete corporate compliance with our expert Company Secretary services. 
                From annual filings to board meeting management, we handle all your statutory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
                >
                  Get Compliance Audit
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors">
                  View Packages
                </button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Compliance Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>100% Statutory Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>Avoid Penalties & Legal Issues</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>Professional Documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>Dedicated CS Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Comprehensive CS Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              From routine compliance to strategic governance advisory, 
              we provide complete Company Secretary services for all business sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-900 mb-4">{service.title}</h3>
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-primary-900">{service.price}</div>
                    <Link
                      to="/contact"
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center space-x-1"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Annual Compliance Packages
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Choose the package that best suits your company's compliance needs. 
              All packages include expert CS support and guaranteed compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {compliancePackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-8 shadow-lg border-2 ${
                  pkg.popular 
                    ? 'border-gold-400 ring-2 ring-gold-400/20' 
                    : 'border-neutral-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {pkg.price}<span className="text-lg text-neutral-500">{pkg.period}</span>
                  </div>
                  <p className="text-neutral-600 mb-2">{pkg.description}</p>
                  <div className="text-sm text-primary-600 font-medium">
                    Suitable for: {pkg.suitable}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-gold-500 text-white hover:bg-gold-600'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  Choose Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Timeline */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Annual Compliance Calendar
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Stay on top of your compliance requirements with our detailed calendar. 
              Never miss a deadline again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceTimeline.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-primary-900">{item.month}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                    {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {item.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Calendar className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Get Full Compliance Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Why CS Services Matter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Why Company Secretary Services Are Essential
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Company Secretary services are mandatory for many businesses and critical 
                for maintaining legal compliance and good corporate governance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">Avoid Penalties</h3>
                    <p className="text-neutral-600">Non-compliance can result in heavy penalties, director disqualification, and legal consequences.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">Legal Protection</h3>
                    <p className="text-neutral-600">Proper compliance provides legal protection and maintains good standing with regulators.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">Business Growth</h3>
                    <p className="text-neutral-600">Good governance practices enhance credibility and attract investors and partners.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">Professional Standards</h3>
                    <p className="text-neutral-600">Maintain high standards of corporate governance and transparency in operations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Professional meeting"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ensure Your Company's Compliance Today
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't risk penalties and legal issues. Get expert Company Secretary services 
            and ensure 100% statutory compliance for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Shield className="h-5 w-5" />
              <span>Get Compliance Audit</span>
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors"
            >
              View Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanySecretary;
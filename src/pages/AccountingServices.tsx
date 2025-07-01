import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield,
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  Award,
  Clock
} from 'lucide-react';

const AccountingServices = () => {
  const [calculatorValues, setCalculatorValues] = useState({
    monthlyTransactions: 50,
    employees: 5,
    turnover: 5000000
  });

  const services = [
    {
      title: 'Monthly Bookkeeping',
      description: 'Complete monthly bookkeeping and account maintenance',
      icon: FileText,
      features: [
        'Daily transaction recording',
        'Bank reconciliation',
        'Expense categorization',
        'Monthly financial reports',
        'Cash flow analysis'
      ],
      price: '₹2,999/month'
    },
    {
      title: 'Tax Planning & Filing',
      description: 'Comprehensive tax planning and compliance services',
      icon: Calculator,
      features: [
        'Income tax return filing',
        'GST registration & returns',
        'Tax planning strategies',
        'TDS compliance',
        'Appeal support'
      ],
      price: '₹4,999/year'
    },
    {
      title: 'Financial Statements',
      description: 'Professional financial statement preparation',
      icon: TrendingUp,
      features: [
        'Profit & Loss statements',
        'Balance sheet preparation',
        'Cash flow statements',
        'Financial ratio analysis',
        'Management reports'
      ],
      price: '₹7,999/quarter'
    },
    {
      title: 'Statutory Audit',
      description: 'Complete statutory audit and compliance',
      icon: Shield,
      features: [
        'Annual audit services',
        'Audit report preparation',
        'Compliance verification',
        'Risk assessment',
        'Recommendation reports'
      ],
      price: '₹15,999/year'
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: '₹2,999',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 100 transactions/month',
        'Monthly bookkeeping',
        'GST returns',
        'Basic financial reports',
        'Email support',
        'Cloud storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹5,999',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 500 transactions/month',
        'Advanced bookkeeping',
        'Tax planning',
        'Detailed financial analysis',
        'Priority support',
        'Quarterly reviews',
        'Compliance calendar'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹12,999',
      period: '/month',
      description: 'Comprehensive solution for large businesses',
      features: [
        'Unlimited transactions',
        'Full accounting suite',
        'Dedicated account manager',
        'Custom reporting',
        '24/7 support',
        'Strategic consulting',
        'Audit support',
        'Multi-location support'
      ],
      popular: false
    }
  ];

  const calculatePrice = () => {
    let basePrice = 2999;
    if (calculatorValues.monthlyTransactions > 100) basePrice += 1000;
    if (calculatorValues.monthlyTransactions > 500) basePrice += 2000;
    if (calculatorValues.employees > 10) basePrice += 1500;
    if (calculatorValues.turnover > 10000000) basePrice += 3000;
    return basePrice;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Accounting Services
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Comprehensive accounting solutions for businesses of all sizes. 
                From bookkeeping to tax planning, we handle your finances so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
                >
                  Get Started Today
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors">
                  View Pricing
                </button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Accounting Services?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>CA & CPA Certified Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>100% Accurate & Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>Real-time Financial Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>Dedicated Account Manager</span>
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
              Complete Accounting Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              From daily bookkeeping to strategic financial planning, 
              we provide comprehensive accounting services tailored to your business needs.
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

      {/* Pricing Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Calculate Your Accounting Costs
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Get an instant estimate for your accounting needs based on your business size and requirements.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Monthly Transactions: {calculatorValues.monthlyTransactions}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    value={calculatorValues.monthlyTransactions}
                    onChange={(e) => setCalculatorValues({...calculatorValues, monthlyTransactions: parseInt(e.target.value)})}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Number of Employees: {calculatorValues.employees}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={calculatorValues.employees}
                    onChange={(e) => setCalculatorValues({...calculatorValues, employees: parseInt(e.target.value)})}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Annual Turnover: ₹{(calculatorValues.turnover / 100000).toFixed(0)} Lakhs
                  </label>
                  <input
                    type="range"
                    min="1000000"
                    max="100000000"
                    step="1000000"
                    value={calculatorValues.turnover}
                    onChange={(e) => setCalculatorValues({...calculatorValues, turnover: parseInt(e.target.value)})}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Estimated Monthly Cost</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">
                ₹{calculatePrice().toLocaleString()}
              </div>
              <p className="text-neutral-600 mb-6">
                This estimate includes bookkeeping, GST returns, and basic financial reporting. 
                Additional services may apply based on specific requirements.
              </p>
              <Link
                to="/contact"
                className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Get Detailed Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Choose Your Accounting Plan
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Flexible pricing plans designed to grow with your business. 
              All plans include expert support and compliance guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-8 shadow-lg border-2 ${
                  plan.popular 
                    ? 'border-gold-400 ring-2 ring-gold-400/20' 
                    : 'border-neutral-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {plan.price}<span className="text-lg text-neutral-500">{plan.period}</span>
                  </div>
                  <p className="text-neutral-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-gold-500 text-white hover:bg-gold-600'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Accounting Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Streamlined process to get your accounting setup quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Assessment</h3>
              <p className="text-neutral-600">We analyze your business requirements and current financial state</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Setup</h3>
              <p className="text-neutral-600">Chart of accounts creation and system configuration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Migration</h3>
              <p className="text-neutral-600">Data migration and historical record setup</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Go Live</h3>
              <p className="text-neutral-600">Ongoing support and monthly reporting begins</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your Accounting?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who trust us with their accounting needs. 
            Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Free Consultation</span>
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

export default AccountingServices;
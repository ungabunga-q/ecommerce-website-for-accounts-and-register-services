import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Users, 
  Building, 
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Award,
  Calendar,
  Download
} from 'lucide-react';

const BusinessRegistration = () => {
  const [selectedState, setSelectedState] = useState('delhi');
  const [activeTab, setActiveTab] = useState('private-limited');

  const businessTypes = [
    {
      id: 'private-limited',
      title: 'Private Limited Company',
      description: 'Most popular choice for startups and growing businesses',
      icon: Building,
      features: [
        'Limited liability protection',
        'Separate legal entity',
        'Easy to raise capital',
        'Professional credibility',
        'Tax benefits available'
      ],
      documents: [
        'PAN Card of Directors',
        'Address Proof',
        'Digital Signature Certificate',
        'Director Identification Number',
        'Registered Office Proof'
      ],
      timeline: '15-20 days',
      price: '₹6,999',
      popular: true
    },
    {
      id: 'llp',
      title: 'Limited Liability Partnership',
      description: 'Perfect for professional services and partnerships',
      icon: Users,
      features: [
        'Limited liability for partners',
        'Flexible management structure',
        'Lower compliance requirements',
        'No minimum capital requirement',
        'Easy admission/retirement of partners'
      ],
      documents: [
        'PAN Card of Partners',
        'Address Proof of Partners',
        'Digital Signature Certificate',
        'Designated Partner ID',
        'Registered Office Address Proof'
      ],
      timeline: '12-15 days',
      price: '₹5,999',
      popular: false
    },
    {
      id: 'opc',
      title: 'One Person Company',
      description: 'Ideal for solo entrepreneurs',
      icon: FileText,
      features: [
        'Single person ownership',
        'Limited liability protection',
        'Separate legal entity',
        'Easy compliance',
        'Professional status'
      ],
      documents: [
        'PAN Card of Subscriber',
        'Address Proof',
        'Nominee Details',
        'Digital Signature Certificate',
        'Registered Office Proof'
      ],
      timeline: '10-15 days',
      price: '₹4,999',
      popular: false
    },
    {
      id: 'partnership',
      title: 'Partnership Firm',
      description: 'Simple structure for joint business ventures',
      icon: Users,
      features: [
        'Easy formation process',
        'Shared profits and losses',
        'Flexible management',
        'Lower registration costs',
        'Quick decision making'
      ],
      documents: [
        'PAN Card of Partners',
        'Address Proof of Partners',
        'Partnership Deed',
        'Registered Office Proof',
        'Bank Account Details'
      ],
      timeline: '7-10 days',
      price: '₹2,999',
      popular: false
    }
  ];

  const states = [
    { value: 'delhi', label: 'Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'pune', label: 'Pune' }
  ];

  const registrationProcess = [
    {
      step: 1,
      title: 'Name Approval',
      description: 'Reserve your company name with MCA',
      duration: '1-2 days'
    },
    {
      step: 2,
      title: 'Document Preparation',
      description: 'Prepare and verify all required documents',
      duration: '2-3 days'
    },
    {
      step: 3,
      title: 'Filing Application',
      description: 'Submit incorporation application online',
      duration: '1 day'
    },
    {
      step: 4,
      title: 'Government Processing',
      description: 'MCA reviews and processes application',
      duration: '7-10 days'
    },
    {
      step: 5,
      title: 'Certificate Issuance',
      description: 'Receive incorporation certificate',
      duration: '1 day'
    },
    {
      step: 6,
      title: 'Post-Incorporation',
      description: 'PAN, TAN, and bank account opening',
      duration: '3-5 days'
    }
  ];

  const currentBusinessType = businessTypes.find(type => type.id === activeTab);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Registration Made Simple
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Register your business online with complete legal compliance. 
              Fast, affordable, and hassle-free incorporation services across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
              >
                Start Registration
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors">
                Compare Options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Type Selector */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Choose Your Business Structure
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Select the business structure that best fits your requirements and goals.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-white rounded-lg p-2 shadow-lg">
            {businessTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`px-4 py-3 m-1 rounded-lg font-medium transition-colors ${
                  activeTab === type.id
                    ? 'bg-primary-600 text-white'
                    : 'text-neutral-600 hover:text-primary-600'
                }`}
              >
                {type.title}
              </button>
            ))}
          </div>

          {/* Selected Business Type Details */}
          {currentBusinessType && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    {currentBusinessType.popular && (
                      <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    )}
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <currentBusinessType.icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {currentBusinessType.title}
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    {currentBusinessType.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-neutral-50 rounded-lg">
                      <Clock className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                      <div className="font-semibold text-primary-900">{currentBusinessType.timeline}</div>
                      <div className="text-sm text-neutral-600">Processing Time</div>
                    </div>
                    <div className="text-center p-4 bg-neutral-50 rounded-lg">
                      <Award className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                      <div className="font-semibold text-primary-900">{currentBusinessType.price}</div>
                      <div className="text-sm text-neutral-600">All Inclusive</div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-primary-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {currentBusinessType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 bg-primary-50">
                  <h4 className="font-semibold text-primary-900 mb-4">Required Documents:</h4>
                  <ul className="space-y-3 mb-6">
                    {currentBusinessType.documents.map((document, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <FileText className="h-4 w-4 text-primary-600" />
                        <span className="text-sm text-neutral-700">{document}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors mb-4"
                  >
                    Start Registration
                  </Link>
                  
                  <button className="block w-full border-2 border-primary-600 text-primary-600 text-center py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors">
                    Download Checklist
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Simple Registration Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our streamlined process ensures quick and hassle-free business registration 
              with complete legal compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrationProcess.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      {item.step}
                    </div>
                    <div className="text-sm text-primary-600 font-medium">{item.duration}</div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.description}</p>
                </div>
                
                {index < registrationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-neutral-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State-wise Information */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              State-Specific Registration Guide
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Get localized information for business registration in your state.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Select Your State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {states.map((state) => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  Registration in {states.find(s => s.value === selectedState)?.label}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-neutral-600">Processing Time</span>
                    <span className="font-semibold text-primary-900">15-20 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-neutral-600">Registration Fee</span>
                    <span className="font-semibold text-primary-900">₹6,999</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-neutral-600">Government Fee</span>
                    <span className="font-semibold text-primary-900">₹1,500</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-600">Our Service Fee</span>
                    <span className="font-semibold text-primary-900">₹5,499</span>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors mt-6"
                >
                  Get Started in {states.find(s => s.value === selectedState)?.label}
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-green-500" />
                  <h4 className="font-semibold text-primary-900">100% Legal Compliance</h4>
                </div>
                <p className="text-neutral-600 text-sm">
                  All registrations are done in accordance with the latest government regulations 
                  and compliance requirements.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-blue-500" />
                  <h4 className="font-semibold text-primary-900">Fast Processing</h4>
                </div>
                <p className="text-neutral-600 text-sm">
                  Quick turnaround time with regular updates on your registration status 
                  and progress.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-gold-500" />
                  <h4 className="font-semibold text-primary-900">Expert Support</h4>
                </div>
                <p className="text-neutral-600 text-sm">
                  Dedicated support from experienced professionals throughout the 
                  registration process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              No hidden charges. Everything you need for business registration at one affordable price.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Business Type</th>
                  <th className="px-6 py-4 text-center">Processing Time</th>
                  <th className="px-6 py-4 text-center">Government Fee</th>
                  <th className="px-6 py-4 text-center">Our Fee</th>
                  <th className="px-6 py-4 text-center">Total Cost</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {businessTypes.map((type, index) => (
                  <tr key={index} className="hover:bg-neutral-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <type.icon className="h-5 w-5 text-primary-600" />
                        <span className="font-medium text-primary-900">{type.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-neutral-600">{type.timeline}</td>
                    <td className="px-6 py-4 text-center text-neutral-600">₹1,500</td>
                    <td className="px-6 py-4 text-center text-neutral-600">₹{parseInt(type.price.replace('₹', '').replace(',', '')) - 1500}</td>
                    <td className="px-6 py-4 text-center font-semibold text-primary-900">{type.price}</td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        to="/contact"
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm"
                      >
                        Get Started
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Register Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your business registration today with India's most trusted professional services firm. 
            Get expert guidance every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Start Registration Now</span>
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

export default BusinessRegistration;
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Calendar,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Accounting Services',
    'Business Registration',
    'Company Secretary Services',
    'Tax Planning',
    'Startup Services',
    'Legal Advisory',
    'Other'
  ];

  const offices = [
    {
      city: 'New Delhi',
      address: '123 Business District, Connaught Place, New Delhi - 110001',
      phone: '+91 98765 43210',
      email: 'delhi@bharatiyabusiness.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
    },
    {
      city: 'Mumbai',
      address: '456 Corporate Avenue, Bandra Kurla Complex, Mumbai - 400051',
      phone: '+91 98765 43211',
      email: 'mumbai@bharatiyabusiness.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
    },
    {
      city: 'Bangalore',
      address: '789 Tech Park, Electronic City, Bangalore - 560100',
      phone: '+91 98765 43212',
      email: 'bangalore@bharatiyabusiness.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
    }
  ];

  const faqs = [
    {
      question: 'How long does business registration take?',
      answer: 'Business registration typically takes 15-20 days for Private Limited Companies and 7-10 days for other entities, depending on document readiness and government processing times.'
    },
    {
      question: 'What documents do I need for accounting services?',
      answer: 'For accounting services, you\'ll need bank statements, receipts, invoices, previous tax returns, and business registration documents. We\'ll provide a detailed checklist based on your specific needs.'
    },
    {
      question: 'Do you provide services across India?',
      answer: 'Yes, we provide services across India. While our physical offices are in major cities, we serve clients nationwide through our digital platform and network of associates.'
    },
    {
      question: 'What are your service charges?',
      answer: 'Our charges vary based on the service type and complexity. We provide transparent pricing with no hidden costs. Contact us for a detailed quote based on your requirements.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Ready to take your business to the next level? Our expert team is here to help. 
              Schedule a free consultation or get in touch with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                Schedule Your Free Consultation
              </h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-700 font-medium">
                      Thank you! We'll get back to you within 24 hours.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Preferred Call Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 7 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your business needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900">Call Us</h4>
                      <p className="text-neutral-600">+91 98765 43210</p>
                      <p className="text-sm text-neutral-500">Available 24/7 for urgent queries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900">Email Us</h4>
                      <p className="text-neutral-600">info@bharatiyabusiness.com</p>
                      <p className="text-sm text-neutral-500">We'll respond within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900">Business Hours</h4>
                      <p className="text-neutral-600">Monday - Saturday</p>
                      <p className="text-sm text-neutral-500">9:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Video Consultation</span>
                  </button>
                  <button className="w-full border-2 border-primary-600 text-primary-600 py-3 px-4 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Start WhatsApp Chat</span>
                  </button>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-900 mb-2">
                  Emergency Support
                </h3>
                <p className="text-red-700 text-sm mb-4">
                  For urgent compliance matters or last-minute filing requirements
                </p>
                <div className="text-red-900 font-semibold">
                  Emergency Hotline: +91 98765 43299
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Office Locations
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Visit us at any of our conveniently located offices across major Indian cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-primary-900 mb-4">{office.city}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary-600 mt-0.5" />
                    <p className="text-neutral-600 text-sm">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-600" />
                    <p className="text-neutral-600 text-sm">{office.phone}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary-600" />
                    <p className="text-neutral-600 text-sm">{office.email}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <p className="text-neutral-600 text-sm">{office.hours}</p>
                  </div>
                </div>

                <button className="w-full mt-4 bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Get quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">
              Can't find what you're looking for?
            </p>
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Ask a Question
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
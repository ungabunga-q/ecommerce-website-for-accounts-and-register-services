import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Award, Shield, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Trust Badges Section */}
      <div className="border-b border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-gold-400 mb-2" />
              <h4 className="font-semibold">CA Certified</h4>
              <p className="text-sm text-primary-200">ICAI Registered</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-gold-400 mb-2" />
              <h4 className="font-semibold">ISO 9001:2015</h4>
              <p className="text-sm text-primary-200">Quality Assured</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-gold-400 mb-2" />
              <h4 className="font-semibold">10+ Years</h4>
              <p className="text-sm text-primary-200">Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-gold-400 mb-2" />
              <h4 className="font-semibold">5000+</h4>
              <p className="text-sm text-primary-200">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BBS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Bharatiya Business</h3>
                <p className="text-sm text-primary-200">Professional Services</p>
              </div>
            </div>
            <p className="text-sm text-primary-200 mb-4">
              Leading Indian professional services firm providing comprehensive accounting, 
              business registration, and company secretarial services since 2014.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-gold-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-gold-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-gold-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-gold-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/accounting" className="text-primary-200 hover:text-gold-400 transition-colors">
                  Accounting Services
                </Link>
              </li>
              <li>
                <Link to="/services/business-registration" className="text-primary-200 hover:text-gold-400 transition-colors">
                  Business Registration
                </Link>
              </li>
              <li>
                <Link to="/services/company-secretary" className="text-primary-200 hover:text-gold-400 transition-colors">
                  Company Secretary
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-200 hover:text-gold-400 transition-colors">
                  Tax Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-200 hover:text-gold-400 transition-colors">
                  Statutory Audit
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-200 hover:text-gold-400 transition-colors">
                  GST Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-primary-200 hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-200 hover:text-gold-400 transition-colors">
                  Tax Updates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-gold-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/client-portal" className="text-primary-200 hover:text-gold-400 transition-colors">
                  Client Portal
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-gold-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-gold-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-200">
                    123 Business District,<br />
                    Connaught Place,<br />
                    New Delhi - 110001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-400" />
                <p className="text-primary-200">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-400" />
                <p className="text-primary-200">info@bharatiyabusiness.com</p>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-primary-800 border border-primary-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
                <button className="px-4 py-2 bg-gold-500 text-white text-sm font-medium rounded-r-md hover:bg-gold-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-200">
            <p>&copy; 2024 Bharatiya Business Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
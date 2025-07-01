import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  Calendar,
  Shield
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '5000+', label: 'Happy Clients', icon: Users },
    { number: '12000+', label: 'Projects Completed', icon: Target },
    { number: '10+', label: 'Years Experience', icon: Calendar },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star }
  ];

  const team = [
    {
      name: 'CA Rajesh Kumar',
      position: 'Founder & Managing Partner',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Chartered Accountant with 15+ years of experience in corporate finance and taxation.',
      credentials: ['CA', 'CPA', 'MBA Finance']
    },
    {
      name: 'CS Priya Sharma',
      position: 'Company Secretary & Partner',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Company Secretary specializing in corporate compliance and governance matters.',
      credentials: ['CS', 'LLB', 'Compliance Expert']
    },
    {
      name: 'Arjun Patel',
      position: 'Senior Manager - Business Registration',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Expert in business incorporation and startup advisory with 8+ years experience.',
      credentials: ['MBA', 'Startup Advisor', 'ROC Expert']
    },
    {
      name: 'Neha Singh',
      position: 'Tax Manager',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Tax planning specialist with expertise in GST, Income Tax, and international taxation.',
      credentials: ['Tax Expert', 'GST Practitioner', 'CMA']
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the highest quality standards.',
      icon: Award
    },
    {
      title: 'Integrity',
      description: 'Honesty and transparency form the foundation of all our client relationships.',
      icon: Shield
    },
    {
      title: 'Innovation',
      description: 'We continuously innovate our processes to provide efficient and modern solutions.',
      icon: TrendingUp
    },
    {
      title: 'Client-Centric',
      description: 'Our clients\' success is our priority, and we tailor solutions to meet their unique needs.',
      icon: Users
    }
  ];

  const certifications = [
    'Institute of Chartered Accountants of India (ICAI)',
    'Institute of Company Secretaries of India (ICSI)',
    'Institute of Cost Accountants of India (ICMAI)',
    'ISO 9001:2015 Certified',
    'SEBI Registered Investment Advisor',
    'Authorized GST Suvidha Provider'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Bharatiya Business Solutions
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              India's leading professional services firm, dedicated to helping businesses 
              achieve compliance, growth, and success through expert financial and legal solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary-900 mb-2">{stat.number}</div>
                  <div className="text-neutral-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-neutral-600">
                <p>
                  Founded in 2014, Bharatiya Business Solutions began with a simple mission: 
                  to make professional services accessible and affordable for businesses across India. 
                  What started as a small practice has grown into one of India's most trusted 
                  professional services firms.
                </p>
                <p>
                  Over the years, we've helped thousands of entrepreneurs and businesses navigate 
                  the complex landscape of Indian business regulations, tax laws, and compliance 
                  requirements. Our commitment to excellence and client satisfaction has earned 
                  us recognition as a leading firm in the industry.
                </p>
                <p>
                  Today, we serve clients across various industries and business sizes, from 
                  startups to large corporations, providing comprehensive solutions that enable 
                  business growth and success.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Our office"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Since 2014</div>
                <div className="text-sm">Serving India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Mission</h3>
              <p className="text-neutral-600 text-lg">
                To empower businesses across India with professional, reliable, and affordable 
                accounting, legal, and compliance services that enable growth, ensure regulatory 
                compliance, and drive long-term success.
              </p>
            </div>
            
            <div className="bg-gold-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-gold-500 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Vision</h3>
              <p className="text-neutral-600 text-lg">
                To be India's most trusted and innovative professional services firm, setting 
                industry standards for quality, client satisfaction, and ethical business practices 
                while contributing to the nation's economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              These values guide everything we do and shape our relationships with clients, 
              partners, and the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-3">{value.title}</h3>
                  <p className="text-neutral-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our team of certified professionals brings decades of combined experience 
              and expertise to serve your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-neutral-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.credentials.map((credential, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Memberships */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Certifications & Memberships
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our professional certifications and memberships ensure you receive 
              services of the highest standards and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-medium text-primary-900">{certification}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their business needs. 
            Let's discuss how we can help your business grow and succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Users className="h-5 w-5" />
              <span>Schedule a Meeting</span>
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
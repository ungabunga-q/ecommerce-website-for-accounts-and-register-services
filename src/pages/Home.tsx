import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  TrendingUp,
  Calculator,
  FileText,
  Shield,
  Clock,
  Phone,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0
  });

  // Animated counter effect
  useEffect(() => {
    const targetStats = { clients: 5000, projects: 12000, satisfaction: 99, years: 10 };
    const duration = 2000;
    const increment = 50;
    
    const timer = setInterval(() => {
      setStats(current => ({
        clients: Math.min(current.clients + Math.ceil(targetStats.clients / (duration / increment)), targetStats.clients),
        projects: Math.min(current.projects + Math.ceil(targetStats.projects / (duration / increment)), targetStats.projects),
        satisfaction: Math.min(current.satisfaction + Math.ceil(targetStats.satisfaction / (duration / increment)), targetStats.satisfaction),
        years: Math.min(current.years + Math.ceil(targetStats.years / (duration / increment)), targetStats.years)
      }));
    }, increment);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: 'Accounting Services',
      description: 'Comprehensive bookkeeping, tax planning, and financial statement preparation',
      icon: Calculator,
      features: ['Monthly Bookkeeping', 'Tax Filing', 'Financial Statements', 'Statutory Audit'],
      link: '/services/accounting'
    },
    {
      title: 'Business Registration',
      description: 'Complete business incorporation and registration services',
      icon: FileText,
      features: ['Private Limited Company', 'LLP Formation', 'One Person Company', 'Partnership Firm'],
      link: '/services/business-registration'
    },
    {
      title: 'Company Secretary',
      description: 'Corporate compliance and governance services',
      icon: Shield,
      features: ['Annual Compliance', 'ROC Filings', 'Board Meetings', 'Corporate Governance'],
      link: '/services/company-secretary'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      company: 'Tech Innovations Pvt Ltd',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Exceptional service! They handled our company registration seamlessly and provided ongoing compliance support. Highly recommended.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      company: 'Patel Enterprises',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Their accounting services have been invaluable. Professional, accurate, and always delivered on time. Great team!',
      rating: 5
    },
    {
      name: 'Arjun Singh',
      company: 'Singh Trading Co.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Outstanding GST and tax planning services. They saved us significant costs and ensured complete compliance.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gold-400 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-gold-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 border-2 border-gold-400 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Trusted
                <span className="text-gold-400"> Professional</span>
                <br />Services Partner
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Expert accounting, business registration, and company secretarial services 
                tailored for Indian businesses. Get compliant, stay competitive.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>CA & CS Certified Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>99.9% Client Satisfaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>24/7 Customer Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>Affordable Pricing</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 hover:text-primary-900 transition-colors text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Hero Image/Stats */}
            <div className="animate-slide-in-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Track Record</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold-400">{stats.clients.toLocaleString()}+</div>
                    <div className="text-sm text-primary-200">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold-400">{stats.projects.toLocaleString()}+</div>
                    <div className="text-sm text-primary-200">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold-400">{stats.satisfaction}%</div>
                    <div className="text-sm text-primary-200">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold-400">{stats.years}+</div>
                    <div className="text-sm text-primary-200">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Comprehensive Professional Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From business registration to ongoing compliance, we provide end-to-end 
              professional services to help your business thrive in India's dynamic market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6 group-hover:bg-primary-600 transition-colors">
                    <Icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors" />
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
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Why Choose Bharatiya Business Solutions?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                With over a decade of experience and thousands of satisfied clients, 
                we're India's most trusted professional services firm.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">Expert Professionals</h3>
                    <p className="text-neutral-600">Certified CAs, CSs, and business experts with extensive industry experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">Fast Turnaround</h3>
                    <p className="text-neutral-600">Quick processing with guaranteed timelines and regular status updates.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">Complete Compliance</h3>
                    <p className="text-neutral-600">100% compliant services ensuring your business stays legally protected.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">Growth-Focused</h3>
                    <p className="text-neutral-600">Strategic advice and planning to help your business scale efficiently.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Professional team"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-neutral-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-xl p-8 shadow-lg mx-4">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-primary-900">{testimonial.name}</h4>
                          <p className="text-neutral-600 text-sm">{testimonial.company}</p>
                          <div className="flex space-x-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-neutral-700 italic text-lg leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="h-6 w-6 text-primary-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="h-6 w-6 text-primary-600" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary-600' : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get expert professional services tailored to your business needs. 
            Schedule a free consultation with our certified professionals today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Schedule Free Consultation</span>
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
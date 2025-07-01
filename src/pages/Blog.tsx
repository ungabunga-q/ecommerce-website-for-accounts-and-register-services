import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Tag,
  ArrowRight,
  Search,
  TrendingUp,
  FileText,
  Calculator,
  Shield
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'tax-updates', name: 'Tax Updates', count: 8 },
    { id: 'gst', name: 'GST', count: 6 },
    { id: 'compliance', name: 'Compliance', count: 5 },
    { id: 'business-tips', name: 'Business Tips', count: 5 }
  ];

  const featuredPost = {
    id: 1,
    title: 'Budget 2024: Key Changes Every Business Owner Should Know',
    excerpt: 'Comprehensive analysis of the latest budget announcements and their impact on businesses, startups, and tax planning strategies.',
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    author: 'CA Rajesh Kumar',
    date: '2024-01-15',
    category: 'Tax Updates',
    readTime: '8 min read',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'GST Return Filing: Common Mistakes to Avoid in 2024',
      excerpt: 'Learn about the most common GST filing errors that can cost your business and how to avoid them with our expert tips.',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      author: 'Neha Singh',
      date: '2024-01-12',
      category: 'GST',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'Private Limited Company vs LLP: Which is Right for Your Business?',
      excerpt: 'A detailed comparison of Private Limited Company and LLP structures to help you choose the best option for your business.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      author: 'Arjun Patel',
      date: '2024-01-10',
      category: 'Business Tips',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'Annual Compliance Checklist for Private Limited Companies',
      excerpt: 'Complete checklist of annual compliance requirements for Private Limited Companies to avoid penalties and maintain good standing.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      author: 'CS Priya Sharma',
      date: '2024-01-08',
      category: 'Compliance',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: '5 Tax-Saving Strategies for Small Businesses in India',
      excerpt: 'Discover legitimate tax-saving strategies that can help small businesses reduce their tax burden while staying compliant.',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      author: 'CA Rajesh Kumar',
      date: '2024-01-05',
      category: 'Tax Updates',
      readTime: '8 min read'
    },
    {
      id: 6,
      title: 'Digital Signature Certificate: Everything You Need to Know',
      excerpt: 'Complete guide to Digital Signature Certificates, their types, uses, and how to obtain one for your business needs.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      author: 'Arjun Patel',
      date: '2024-01-03',
      category: 'Business Tips',
      readTime: '4 min read'
    },
    {
      id: 7,
      title: 'ROC Filing Deadlines: Important Dates to Remember in 2024',
      excerpt: 'Stay on top of all important ROC filing deadlines for 2024 to avoid late fees and penalties.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      author: 'CS Priya Sharma',
      date: '2024-01-01',
      category: 'Compliance',
      readTime: '5 min read'
    }
  ];

  const popularTags = [
    'Income Tax', 'GST', 'Company Registration', 'Annual Compliance', 
    'Tax Planning', 'Startup', 'ROC Filing', 'Business Registration'
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Tax Updates': return Calculator;
      case 'GST': return FileText;
      case 'Compliance': return Shield;
      case 'Business Tips': return TrendingUp;
      default: return FileText;
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase().replace(' ', '-') === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Insights & Updates
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Stay informed with the latest tax updates, compliance requirements, 
              and business tips from our expert team of professionals.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-neutral-900"
                placeholder="Search articles..."
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Featured Article</h2>
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-neutral-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-neutral-400" />
                        <span className="text-sm text-neutral-600">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-neutral-400" />
                        <span className="text-sm text-neutral-600">{featuredPost.date}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center space-x-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Blog Posts Grid */}
            <div>
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => {
                  const CategoryIcon = getCategoryIcon(post.category);
                  return (
                    <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-2">
                            <CategoryIcon className="h-4 w-4 text-primary-600" />
                            <span className="text-primary-600 text-sm font-medium">
                              {post.category}
                            </span>
                          </div>
                          <span className="text-neutral-500 text-sm">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-primary-900 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-neutral-600 mb-4 text-sm line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-neutral-500">
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                          
                          <Link
                            to={`/blog/${post.id}`}
                            className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary-100 text-primary-700'
                            : 'text-neutral-600 hover:bg-neutral-50'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm">{category.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-3">
                  Stay Updated
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Get the latest tax updates and business insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  />
                  <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gold-50 rounded-xl p-6 text-center">
                <h3 className="text-lg font-bold text-primary-900 mb-3">
                  Need Professional Help?
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Our experts are ready to assist you with your business needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-gold-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gold-600 transition-colors text-sm"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
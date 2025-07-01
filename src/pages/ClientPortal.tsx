import React, { useState } from 'react';
import { 
  User, 
  FileText, 
  Calendar, 
  CreditCard,
  Bell,
  Settings,
  Download,
  Upload,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  DollarSign
} from 'lucide-react';

const ClientPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const dashboardStats = [
    { title: 'Active Services', value: '3', icon: FileText, color: 'blue' },
    { title: 'Pending Actions', value: '2', icon: Clock, color: 'orange' },
    { title: 'Completed Tasks', value: '12', icon: CheckCircle, color: 'green' },
    { title: 'Total Savings', value: '₹45,000', icon: DollarSign, color: 'purple' }
  ];

  const recentActivities = [
    { id: 1, type: 'document', title: 'GST Return Filed', date: '2024-01-15', status: 'completed' },
    { id: 2, type: 'payment', title: 'Invoice Generated', date: '2024-01-14', status: 'pending' },
    { id: 3, type: 'meeting', title: 'Consultation Scheduled', date: '2024-01-13', status: 'upcoming' },
    { id: 4, type: 'document', title: 'Annual Return Submitted', date: '2024-01-12', status: 'completed' }
  ];

  const activeServices = [
    {
      id: 1,
      name: 'Monthly Bookkeeping',
      status: 'Active',
      nextDue: '2024-02-01',
      progress: 75,
      assignedTo: 'CA Rajesh Kumar'
    },
    {
      id: 2,
      name: 'GST Compliance',
      status: 'In Progress',
      nextDue: '2024-01-20',
      progress: 40,
      assignedTo: 'Neha Singh'
    },
    {
      id: 3,
      name: 'Annual Compliance',
      status: 'Pending',
      nextDue: '2024-03-31',
      progress: 10,
      assignedTo: 'CS Priya Sharma'
    }
  ];

  const documents = [
    { id: 1, name: 'GST Return - December 2023', type: 'PDF', size: '2.4 MB', date: '2024-01-15' },
    { id: 2, name: 'Financial Statement Q3', type: 'PDF', size: '5.1 MB', date: '2024-01-10' },
    { id: 3, name: 'Tax Planning Report', type: 'PDF', size: '1.8 MB', date: '2024-01-05' },
    { id: 4, name: 'Compliance Certificate', type: 'PDF', size: '890 KB', date: '2023-12-28' }
  ];

  const upcomingTasks = [
    { id: 1, title: 'Review Financial Statements', due: '2024-01-20', priority: 'high' },
    { id: 2, title: 'Submit Tax Documents', due: '2024-01-25', priority: 'medium' },
    { id: 3, title: 'Board Meeting Preparation', due: '2024-02-01', priority: 'low' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-orange-600 bg-orange-100';
      case 'upcoming': return 'text-blue-600 bg-blue-100';
      default: return 'text-neutral-600 bg-neutral-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-orange-600';
      case 'low': return 'text-green-600';
      default: return 'text-neutral-600';
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-primary-900">Client Portal Login</h2>
              <p className="text-neutral-600 mt-2">Access your account dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <a href="#" className="text-primary-600 hover:text-primary-700 text-sm">
                Forgot your password?
              </a>
            </div>

            <div className="mt-8 p-4 bg-neutral-50 rounded-lg">
              <p className="text-sm text-neutral-600 text-center">
                New client? Contact us to set up your account
              </p>
              <button className="w-full mt-2 border-2 border-primary-600 text-primary-600 py-2 px-4 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-primary-900">Client Portal</h1>
              <p className="text-neutral-600">Welcome back, John Doe</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-neutral-600 hover:text-primary-600 transition-colors">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-neutral-600 hover:text-primary-600 transition-colors">
                <Settings className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-lg p-6">
              <ul className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
                  { id: 'services', label: 'My Services', icon: FileText },
                  { id: 'documents', label: 'Documents', icon: FileText },
                  { id: 'calendar', label: 'Calendar', icon: Calendar },
                  { id: 'billing', label: 'Billing', icon: CreditCard },
                  { id: 'profile', label: 'Profile', icon: User }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                          activeTab === item.id
                            ? 'bg-primary-600 text-white'
                            : 'text-neutral-600 hover:bg-neutral-100'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dashboardStats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-neutral-600">{stat.title}</p>
                          <p className="text-2xl font-bold text-primary-900">{stat.value}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${stat.color}-100`}>
                          <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-primary-900 mb-4">Recent Activities</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-b-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-4 w-4 text-primary-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-primary-900">{activity.title}</p>
                            <p className="text-xs text-neutral-500">{activity.date}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                          {activity.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Tasks */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-primary-900 mb-4">Upcoming Tasks</h3>
                  <div className="space-y-3">
                    {upcomingTasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-primary-900">{task.title}</p>
                          <p className="text-xs text-neutral-500">Due: {task.due}</p>
                        </div>
                        <span className={`text-xs font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority} priority
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-6">Active Services</h3>
                <div className="space-y-6">
                  {activeServices.map((service) => (
                    <div key={service.id} className="border border-neutral-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-primary-900">{service.name}</h4>
                          <p className="text-sm text-neutral-600">Assigned to: {service.assignedTo}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status.toLowerCase())}`}>
                          {service.status}
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-neutral-600 mb-1">
                          <span>Progress</span>
                          <span>{service.progress}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div
                            className="bg-primary-600 h-2 rounded-full"
                            style={{ width: `${service.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-600">Next due: {service.nextDue}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-primary-900">My Documents</h3>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2">
                    <Upload className="h-4 w-4" />
                    <span>Upload Document</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary-900">{doc.name}</p>
                          <p className="text-xs text-neutral-500">{doc.type} • {doc.size} • {doc.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-neutral-600 hover:text-primary-600 transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-neutral-600 hover:text-primary-600 transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-6">Upcoming Appointments</h3>
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
                  <p className="text-neutral-600">No upcoming appointments</p>
                  <button className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Schedule Appointment
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-6">Billing & Payments</h3>
                <div className="text-center py-12">
                  <CreditCard className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
                  <p className="text-neutral-600">All payments are up to date</p>
                  <p className="text-sm text-neutral-500 mt-2">Next invoice due: February 1, 2024</p>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-6">Profile Settings</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value="John Doe"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value="john@example.com"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Update Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
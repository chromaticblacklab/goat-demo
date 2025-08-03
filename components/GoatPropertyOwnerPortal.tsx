'use client'
import React, { useState } from 'react'
import { Home, DollarSign, FileText, BookOpen, Settings, Bell, Plus, Upload, Calendar, CreditCard, Download, CheckCircle, AlertCircle, Clock, TrendingUp, Building2, Camera, MapPin, User, Mail, Phone, ChevronRight, X } from 'lucide-react'

export default function GoatPropertyOwnerPortal() {
  const [activeView, setActiveView] = useState('dashboard')
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)

  const properties = [
    {
      id: 1,
      address: '123 Main Street, Mobile, AL',
      units: 4,
      status: 'Compliant',
      annualFee: 450,
      nextInspection: '2024-06-15',
      lastPayment: '2024-01-15',
      photos: 12,
      documents: 8,
      violations: 0,
      gps: { lat: 30.6954, lng: -88.0399 }
    },
    {
      id: 2,
      address: '456 Oak Avenue, Mobile, AL',
      units: 6,
      status: 'Pending Payment',
      annualFee: 680,
      nextInspection: '2024-05-20',
      lastPayment: '2023-12-10',
      photos: 8,
      documents: 6,
      violations: 0,
      gps: { lat: 30.6832, lng: -88.0567 }
    },
    {
      id: 3,
      address: '789 Elm Drive, Mobile, AL',
      units: 2,
      status: 'Needs Attention',
      annualFee: 320,
      nextInspection: '2024-04-10',
      lastPayment: '2024-02-01',
      photos: 5,
      documents: 4,
      violations: 1,
      gps: { lat: 30.7094, lng: -88.0813 }
    }
  ]

  const trainingCourses = [
    { id: 1, title: 'Fair Housing Fundamentals', duration: '2 hours', progress: 100, status: 'Completed' },
    { id: 2, title: 'Tenant Rights & Responsibilities', duration: '1.5 hours', progress: 75, status: 'In Progress' },
    { id: 3, title: 'Property Maintenance Standards', duration: '1 hour', progress: 0, status: 'Not Started' },
    { id: 4, title: 'Discrimination Prevention', duration: '2.5 hours', progress: 0, status: 'Required' }
  ]

  const documents = [
    { name: 'Insurance Certificate 2024', type: 'Insurance', status: 'Approved', date: '2024-01-05' },
    { name: 'Property Registration', type: 'Registration', status: 'Approved', date: '2024-01-01' },
    { name: 'Lead Paint Disclosure', type: 'Disclosure', status: 'Pending', date: '2024-03-10' },
    { name: 'Fair Housing Policy', type: 'Policy', status: 'Approved', date: '2024-02-15' }
  ]

  const recentActivity = [
    { action: 'Payment Received', details: '$450 for 123 Main St', date: '2024-03-15', type: 'payment' },
    { action: 'Document Approved', details: 'Insurance Certificate', date: '2024-03-14', type: 'document' },
    { action: 'Training Completed', details: 'Fair Housing Fundamentals', date: '2024-03-12', type: 'training' },
    { action: 'Inspection Scheduled', details: '456 Oak Ave - June 15', date: '2024-03-10', type: 'inspection' }
  ]

  const stats = {
    totalProperties: properties.length,
    complianceScore: 94,
    pendingPayments: properties.filter(p => p.status === 'Pending Payment').length,
    upcomingInspections: 2
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">🏠 Property Owner Portal</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  JD
                </div>
                <span className="text-sm font-medium">John Doe</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="px-6 border-t">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: Home },
              { id: 'properties', label: 'Properties', icon: Building2 },
              { id: 'documents', label: 'Documents', icon: FileText },
              { id: 'payments', label: 'Payments', icon: DollarSign },
              { id: 'training', label: 'Training', icon: BookOpen }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeView === item.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {activeView === 'dashboard' && (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <Building2 className="h-8 w-8 text-blue-600" />
                  <span className="text-sm text-gray-500">Total</span>
                </div>
                <h3 className="text-2xl font-bold">{stats.totalProperties}</h3>
                <p className="text-gray-600 text-sm">Properties</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <span className="text-sm text-green-600">Good</span>
                </div>
                <h3 className="text-2xl font-bold">{stats.complianceScore}%</h3>
                <p className="text-gray-600 text-sm">Compliance Score</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <AlertCircle className="h-8 w-8 text-orange-600" />
                  <span className="text-sm text-orange-600">Action Needed</span>
                </div>
                <h3 className="text-2xl font-bold">{stats.pendingPayments}</h3>
                <p className="text-gray-600 text-sm">Pending Payments</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <Calendar className="h-8 w-8 text-purple-600" />
                  <span className="text-sm text-purple-600">Scheduled</span>
                </div>
                <h3 className="text-2xl font-bold">{stats.upcomingInspections}</h3>
                <p className="text-gray-600 text-sm">Upcoming Inspections</p>
              </div>
            </div>

            {/* Alerts */}
            {stats.pendingPayments > 0 && (
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-orange-400 mr-3" />
                  <p className="text-sm text-orange-700">
                    You have {stats.pendingPayments} property with overdue payment. 
                    <button 
                      onClick={() => setShowPaymentModal(true)}
                      className="ml-2 underline font-medium hover:text-orange-800"
                    >
                      Pay Now
                    </button>
                  </p>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-blue-600 text-white rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <button 
                  onClick={() => setActiveView('properties')}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors"
                >
                  <Plus className="h-8 w-8 mx-auto mb-2" />
                  <span className="text-sm">Register Property</span>
                </button>
                <button 
                  onClick={() => setShowPaymentModal(true)}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors"
                >
                  <CreditCard className="h-8 w-8 mx-auto mb-2" />
                  <span className="text-sm">Make Payment</span>
                </button>
                <button 
                  onClick={() => setShowUploadModal(true)}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors"
                >
                  <Upload className="h-8 w-8 mx-auto mb-2" />
                  <span className="text-sm">Upload Document</span>
                </button>
                <button 
                  onClick={() => setActiveView('training')}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors"
                >
                  <BookOpen className="h-8 w-8 mx-auto mb-2" />
                  <span className="text-sm">Start Training</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'payment' ? 'bg-green-100' :
                        activity.type === 'document' ? 'bg-blue-100' :
                        activity.type === 'training' ? 'bg-purple-100' :
                        'bg-orange-100'
                      }`}>
                        {activity.type === 'payment' ? <DollarSign className="h-4 w-4 text-green-600" /> :
                         activity.type === 'document' ? <FileText className="h-4 w-4 text-blue-600" /> :
                         activity.type === 'training' ? <BookOpen className="h-4 w-4 text-purple-600" /> :
                         <Calendar className="h-4 w-4 text-orange-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.details}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeView === 'properties' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">My Properties</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Register New Property</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <img 
                      src={`https://via.placeholder.com/400x225?text=Property+${property.id}`} 
                      alt={property.address}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{property.address}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Building2 className="h-4 w-4 mr-1" />
                        {property.units} units
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        GPS tracked
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Annual Fee</span>
                        <span className="font-medium">${property.annualFee}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Next Inspection</span>
                        <span className="font-medium">{property.nextInspection}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        property.status === 'Compliant' ? 'bg-green-100 text-green-700' :
                        property.status === 'Pending Payment' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {property.status}
                      </span>
                      <div className="flex space-x-2 text-sm">
                        <span className="flex items-center text-gray-500">
                          <Camera className="h-4 w-4 mr-1" />
                          {property.photos}
                        </span>
                        <span className="flex items-center text-gray-500">
                          <FileText className="h-4 w-4 mr-1" />
                          {property.documents}
                        </span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'documents' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Documents</h2>
              <button 
                onClick={() => setShowUploadModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
              >
                <Upload className="h-5 w-5" />
                <span>Upload Document</span>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Document Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {documents.map((doc, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-gray-400 mr-3" />
                            <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {doc.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                            doc.status === 'Approved' ? 'bg-green-100 text-green-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {doc.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {doc.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            <Download className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeView === 'payments' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Payment Center</h2>
              <button 
                onClick={() => setShowPaymentModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Make Payment
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">Outstanding Balance</h3>
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-orange-600">$680.00</p>
                        <p className="text-sm text-gray-600">Due for 456 Oak Avenue</p>
                      </div>
                      <button 
                        onClick={() => setShowPaymentModal(true)}
                        className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold">Payment History</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">123 Main Street</p>
                          <p className="text-sm text-gray-600">Annual Registration Fee</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">$450.00</p>
                          <p className="text-sm text-gray-500">Paid Jan 15, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">789 Elm Drive</p>
                          <p className="text-sm text-gray-600">Annual Registration Fee</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">$320.00</p>
                          <p className="text-sm text-gray-500">Paid Feb 1, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium">•••• 4242</p>
                          <p className="text-xs text-gray-500">Expires 12/24</p>
                        </div>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Default</span>
                    </div>
                  </div>
                  <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600">
                    + Add Payment Method
                  </button>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900">Auto-Pay Enabled</p>
                      <p className="text-xs text-blue-700">Annual fees will be charged automatically</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === 'training' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Fair Housing Training</h2>
              <p className="text-gray-600">Complete required training to maintain compliance</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Your Progress</h3>
                <span className="text-sm text-gray-500">1 of 4 courses completed</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{course.title}</h3>
                      <p className="text-sm text-gray-500">{course.duration}</p>
                    </div>
                    {course.status === 'Required' && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium">
                        Required
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          course.progress === 100 ? 'bg-green-600' : 'bg-blue-600'
                        }`} 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button className={`w-full py-2 rounded-lg font-medium ${
                    course.status === 'Completed' 
                      ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    {course.status === 'Completed' ? 'Completed ✓' : 
                     course.status === 'In Progress' ? 'Continue' : 'Start Course'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Make Payment</h3>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property</label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>456 Oak Avenue - $680.00</option>
                  <option>All Properties - $1,450.00</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium">•••• 4242</p>
                    <p className="text-xs text-gray-500">Expires 12/24</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Amount Due</span>
                  <span className="font-semibold">$680.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-semibold">$2.50</span>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-lg">$682.50</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Upload Document</h3>
              <button 
                onClick={() => setShowUploadModal(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property</label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>123 Main Street</option>
                  <option>456 Oak Avenue</option>
                  <option>789 Elm Drive</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>Insurance Certificate</option>
                  <option>Property Registration</option>
                  <option>Inspection Report</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-2">Drag and drop your file here, or</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Browse Files</button>
                <p className="text-xs text-gray-500 mt-2">PDF, JPG, PNG up to 10MB</p>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium">
                Upload Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
'use client'
import React, { useState } from 'react'
import { Search, Filter, Bell, Settings, ChevronDown, Home, Users, FileText, MapPin, Calendar, DollarSign, AlertCircle, CheckCircle, Clock, TrendingUp, Building2, UserCheck, FileSearch, BarChart3 } from 'lucide-react'

export default function GoatMunicipalDashboard() {
  const [selectedMunicipality, setSelectedMunicipality] = useState('Mobile')
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')

  const stats = [
    { label: 'Total Properties', value: '15,247', change: '+12%', icon: Building2, color: 'text-green-600' },
    { label: 'Monthly Revenue', value: '$185,420', change: '+8%', icon: DollarSign, color: 'text-blue-600' },
    { label: 'Compliance Rate', value: '94.2%', change: '+3%', icon: CheckCircle, color: 'text-purple-600' },
    { label: 'Active Violations', value: '89', change: '-15%', icon: AlertCircle, color: 'text-orange-600' }
  ]

  const recentProperties = [
    { id: 1, address: '123 Main St', owner: 'John Smith', status: 'Compliant', fee: '$450', lastInspection: '2024-03-15' },
    { id: 2, address: '456 Oak Ave', owner: 'Sarah Johnson', status: 'Pending', fee: '$380', lastInspection: '2024-02-28' },
    { id: 3, address: '789 Elm Dr', owner: 'Michael Brown', status: 'Violation', fee: '$520', lastInspection: '2024-01-20' },
    { id: 4, address: '321 Pine Rd', owner: 'Lisa Davis', status: 'Compliant', fee: '$410', lastInspection: '2024-03-10' }
  ]

  const violations = [
    { property: '789 Elm Dr', type: 'Fair Housing', severity: 'High', date: '2024-03-18', status: 'Under Investigation' },
    { property: '555 Maple Ln', type: 'Safety Code', severity: 'Medium', date: '2024-03-17', status: 'Notice Sent' },
    { property: '999 Cedar Ct', type: 'Registration', severity: 'Low', date: '2024-03-16', status: 'Pending Review' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">🐐 GOAT Municipal Dashboard</h1>
              <div className="relative">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                  <span className="font-medium">{selectedMunicipality}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="px-6 border-t">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: Home },
              { id: 'properties', label: 'Properties', icon: Building2, href: '/property'},
              { id: 'inspections', label: 'Inspections', icon: FileSearch },
              { id: 'violations', label: 'Violations', icon: AlertCircle },
              { id: 'revenue', label: 'Revenue', icon: DollarSign },
              { id: 'reports', label: 'Reports', icon: BarChart3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Properties */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Recent Properties</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700">View all →</button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentProperties.map((property) => (
                  <div key={property.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <h3 className="font-medium text-gray-900">{property.address}</h3>
                      <p className="text-sm text-gray-600">Owner: {property.owner}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        property.status === 'Compliant' ? 'bg-green-100 text-green-700' :
                        property.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {property.status}
                      </span>
                      <div className="text-right">
                        <p className="font-medium">{property.fee}</p>
                        <p className="text-xs text-gray-500">Annual fee</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Violations */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Active Violations</h2>
                <span className="text-sm text-red-600 font-medium">3 Critical</span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {violations.map((violation, index) => (
                  <div key={index} className="pb-4 border-b last:border-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{violation.property}</h4>
                        <p className="text-sm text-gray-600">{violation.type}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        violation.severity === 'High' ? 'bg-red-100 text-red-700' :
                        violation.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {violation.severity}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{violation.status}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-center text-sm text-blue-600 hover:text-blue-700">
                View all violations →
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-blue-600 text-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors">
              <FileText className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm">Generate Report</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors">
              <Calendar className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm">Schedule Inspection</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm">Owner Lookup</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors">
              <MapPin className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm">View Map</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
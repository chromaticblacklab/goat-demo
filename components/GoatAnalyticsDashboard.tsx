'use client'
import React, { useState } from 'react'
import { TrendingUp, TrendingDown, DollarSign, Users, Building2, AlertCircle, CheckCircle, Brain, Map, Calendar, Filter, Download, RefreshCw, BarChart3, LineChart, PieChart, Activity, Target, Zap, Shield, Scale } from 'lucide-react'
import { LineChart as RechartsLineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { ChevronRight } from 'lucide-react'

export default function GoatAnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('30d')
  const [selectedMetric, setSelectedMetric] = useState('revenue')

  // KPI Data
  const kpis = [
    {
      label: 'Total Revenue',
      value: '$28,476.50',
      change: '+12.4%',
      trend: 'up',
      icon: DollarSign,
      color: 'green',
      subtext: 'Municipal: $14,523 | GOAT: $13,953'
    },
    {
      label: 'Active Properties',
      value: '15,247',
      change: '+8.2%',
      trend: 'up',
      icon: Building2,
      color: 'blue',
      subtext: '1,892 added this month'
    },
    {
      label: 'Compliance Rate',
      value: '94.2%',
      change: '+3.1%',
      trend: 'up',
      icon: CheckCircle,
      color: 'purple',
      subtext: '891 violations resolved'
    },
    {
      label: 'Inspection Efficiency',
      value: '89.3%',
      change: '+5.7%',
      trend: 'up',
      icon: Activity,
      color: 'orange',
      subtext: '12.3% route optimization gain'
    }
  ]

  // Revenue trend data
  const revenueData = [
    { month: 'Jan', actual: 21500, predicted: 21000, municipal: 10965, goat: 10535 },
    { month: 'Feb', actual: 23200, predicted: 22800, municipal: 11832, goat: 11368 },
    { month: 'Mar', actual: 25100, predicted: 24500, municipal: 12801, goat: 12299 },
    { month: 'Apr', actual: 26800, predicted: 26200, municipal: 13668, goat: 13132 },
    { month: 'May', actual: 28476, predicted: 27900, municipal: 14523, goat: 13953 },
    { month: 'Jun', actual: null, predicted: 29800, municipal: 15198, goat: 14602 },
    { month: 'Jul', actual: null, predicted: 31500, municipal: 16065, goat: 15435 }
  ]

  // Compliance by district
  const districtData = [
    { district: 'Downtown', properties: 3241, compliance: 96.8, revenue: 4856, risk: 'low' },
    { district: 'Midtown', properties: 2876, compliance: 95.2, revenue: 4125, risk: 'low' },
    { district: 'West Mobile', properties: 2154, compliance: 93.7, revenue: 3421, risk: 'medium' },
    { district: 'Airport', properties: 1987, compliance: 92.1, revenue: 2876, risk: 'medium' },
    { district: 'Tillmans', properties: 1654, compliance: 91.3, revenue: 2398, risk: 'medium' },
    { district: 'Prichard', properties: 1876, compliance: 89.4, revenue: 2654, risk: 'high' },
    { district: 'Theodore', properties: 1459, compliance: 94.9, revenue: 2146, risk: 'low' }
  ]

  // Fair Housing AI Performance
  const fairHousingData = {
    score: 96.8,
    violations: [
      { type: 'Language-based', count: 12, trend: -25 },
      { type: 'Source of income', count: 8, trend: -15 },
      { type: 'Familial status', count: 5, trend: -30 },
      { type: 'Disability', count: 3, trend: -40 },
      { type: 'Race/Ethnicity', count: 2, trend: -50 }
    ],
    aiMetrics: {
      accuracy: 92.3,
      falsePositives: 3.1,
      processingTime: 1.2,
      modelsTraining: 127000
    }
  }

  // Predictive insights
  const predictions = [
    {
      insight: 'Revenue Acceleration Detected',
      description: 'Current growth rate 12.4% exceeds predictions. December revenue projected at $485,900.',
      confidence: 82,
      impact: 'high',
      recommendation: 'Maintain current acquisition strategy'
    },
    {
      insight: 'Inspection Bottleneck Risk',
      description: 'West Mobile district showing 15% inspector capacity strain. May impact Q4 compliance.',
      confidence: 78,
      impact: 'medium',
      recommendation: 'Add 2 inspectors or implement staggered scheduling'
    },
    {
      insight: 'Fair Housing Improvement',
      description: 'AI interventions reduced violations by 67% YoY. Zero discrimination incidents this month.',
      confidence: 94,
      impact: 'high',
      recommendation: 'Expand AI monitoring to pre-listing review'
    }
  ]

  // Performance radar data
  const radarData = [
    { metric: 'Revenue Growth', current: 88, target: 75 },
    { metric: 'Compliance', current: 94, target: 90 },
    { metric: 'Efficiency', current: 89, target: 85 },
    { metric: 'Fair Housing', current: 97, target: 95 },
    { metric: 'Customer Satisfaction', current: 91, target: 88 },
    { metric: 'Data Quality', current: 93, target: 90 }
  ]

  const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">📊 Advanced Analytics Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">AI-Powered Insights & Predictive Analytics</p>
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <RefreshCw className="h-5 w-5" />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${kpi.color}-100`}>
                  <kpi.icon className={`h-6 w-6 text-${kpi.color}-600`} />
                </div>
                <div className={`flex items-center space-x-1 ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <span className="text-sm font-medium">{kpi.change}</span>
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{kpi.value}</h3>
              <p className="text-gray-600 text-sm mt-1">{kpi.label}</p>
              <p className="text-xs text-gray-500 mt-2">{kpi.subtext}</p>
            </div>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Trend & Prediction */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Revenue Trend & AI Forecast</h2>
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-blue-600 rounded"></div>
                  <span>Actual</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-gray-400 rounded"></div>
                  <span>Predicted</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value?.toLocaleString()}`} />
                <Area
                  type="monotone"
                  dataKey="actual"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="predicted"
                  stackId="2"
                  stroke="#9ca3af"
                  fill="#9ca3af"
                  fillOpacity={0.3}
                  strokeDasharray="5 5"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-blue-600" />
                <p className="text-sm text-blue-900">
                  <strong>AI Prediction:</strong> December revenue projected at $485,900 with 82% confidence
                </p>
              </div>
            </div>
          </div>

          {/* Performance Radar */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Performance vs Targets</h2>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar
                  name="Current"
                  dataKey="current"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Target"
                  dataKey="target"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <p className="text-2xl font-bold text-green-600">92%</p>
              <p className="text-sm text-gray-600">Overall Performance Score</p>
            </div>
          </div>
        </div>

        {/* Predictive Insights */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="h-8 w-8" />
            <div>
              <h2 className="text-xl font-semibold">AI-Powered Predictive Insights</h2>
              <p className="text-purple-100">Machine learning analysis of 12 months historical data</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {predictions.map((prediction, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold">{prediction.insight}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    prediction.impact === 'high' ? 'bg-red-500/20 text-red-100' :
                    'bg-yellow-500/20 text-yellow-100'
                  }`}>
                    {prediction.impact} impact
                  </span>
                </div>
                <p className="text-sm text-purple-100 mb-3">{prediction.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-200">Confidence: {prediction.confidence}%</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
                <div className="mt-3 pt-3 border-t border-white/20">
                  <p className="text-xs text-purple-100">
                    <strong>Action:</strong> {prediction.recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic & Fair Housing Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* District Performance */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">District Performance Analysis</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      District
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Properties
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Compliance
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Revenue
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Risk
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {districtData.map((district, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Map className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-medium">{district.district}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        {district.properties.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                district.compliance >= 95 ? 'bg-green-600' :
                                district.compliance >= 90 ? 'bg-yellow-600' :
                                'bg-red-600'
                              }`}
                              style={{ width: `${district.compliance}%` }}
                            ></div>
                          </div>
                          <span className="text-sm">{district.compliance}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        ${district.revenue.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                          district.risk === 'low' ? 'bg-green-100 text-green-700' :
                          district.risk === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {district.risk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                <p className="text-sm text-yellow-900">
                  <strong>Geographic Insight:</strong> Prichard district requires intervention - compliance below 90%
                </p>
              </div>
            </div>
          </div>

          {/* Fair Housing AI Performance */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Fair Housing AI</h2>
            <div className="text-center mb-6">
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="12"
                    strokeDasharray={`${2 * Math.PI * 56 * fairHousingData.score / 100} ${2 * Math.PI * 56}`}
                    strokeLinecap="round"
                    transform="rotate(-90 64 64)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <p className="text-3xl font-bold text-green-600">{fairHousingData.score}%</p>
                    <p className="text-xs text-gray-600">Compliance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <h3 className="text-sm font-medium text-gray-700">Violations by Type</h3>
              {fairHousingData.violations.map((violation, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{violation.type}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{violation.count}</span>
                    <span className={`text-xs ${
                      violation.trend < 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {violation.trend}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3">AI Performance</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-600">Accuracy</p>
                  <p className="font-medium">{fairHousingData.aiMetrics.accuracy}%</p>
                </div>
                <div>
                  <p className="text-gray-600">False Positives</p>
                  <p className="font-medium">{fairHousingData.aiMetrics.falsePositives}%</p>
                </div>
                <div>
                  <p className="text-gray-600">Processing</p>
                  <p className="font-medium">{fairHousingData.aiMetrics.processingTime}s</p>
                </div>
                <div>
                  <p className="text-gray-600">Training Data</p>
                  <p className="font-medium">{(fairHousingData.aiMetrics.modelsTraining / 1000).toFixed(0)}K</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-xs text-green-900 text-center">
                <strong>0 incidents</strong> this month
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Strategic Recommendations</h2>
            <span className="text-sm text-gray-500">Generated by AI analysis</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="h-5 w-5 text-green-600" />
                <h3 className="font-medium">Revenue Optimization</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Birmingham expansion opportunity: 280% ROI projected within 18 months
              </p>
              <p className="text-xs text-gray-500">High confidence • $890K revenue potential</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">Operational Efficiency</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Implement predictive maintenance to reduce violations by 40%
              </p>
              <p className="text-xs text-gray-500">Medium confidence • $180K cost savings</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <Scale className="h-5 w-5 text-purple-600" />
                <h3 className="font-medium">Compliance Strategy</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Launch premium compliance tier for enterprise properties
              </p>
              <p className="text-xs text-gray-500">High confidence • 15% margin increase</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

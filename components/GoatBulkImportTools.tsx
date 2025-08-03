'use client'
import React, { useState } from 'react'
import { Upload, Database, FileSpreadsheet, FileText, CheckCircle, XCircle, AlertCircle, Loader2, Download, RefreshCw, Settings, ArrowRight, Zap, Shield, Clock, HardDrive, GitBranch, Link2, Play, Pause, ChevronRight, CheckSquare, Square, FileCode, Table } from 'lucide-react'

export default function GoatBulkImportTools() {
  const [activeStep, setActiveStep] = useState(1)
  const [selectedSource, setSelectedSource] = useState<string | null>(null)
  const [isImporting, setIsImporting] = useState(false)
  const [importProgress, setImportProgress] = useState(0)
  const [validationResults, setValidationResults] = useState<any>(null)

  const dataSources = [
    {
      id: 'access',
      name: 'Municipal Access Database',
      type: 'database',
      status: 'connected',
      records: 45621,
      lastSync: '2024-03-15',
      icon: Database,
      tables: ['Properties', 'Owners', 'Permits', 'Violations']
    },
    {
      id: 'sql',
      name: 'SQL Server - Building Dept',
      type: 'database',
      status: 'connected',
      records: 38492,
      lastSync: '2024-03-18',
      icon: Database,
      tables: ['BuildingPermits', 'Inspections', 'Contractors']
    },
    {
      id: 'excel',
      name: 'Property Tax Records.xlsx',
      type: 'file',
      status: 'pending',
      records: 52341,
      lastSync: 'Never',
      icon: FileSpreadsheet,
      sheets: ['2023_Properties', '2023_Assessments', 'Owner_Info']
    },
    {
      id: 'postgres',
      name: 'PostGIS Parcel Data',
      type: 'database',
      status: 'connected',
      records: 125843,
      lastSync: '2024-03-19',
      icon: Database,
      tables: ['Parcels', 'Zoning', 'Boundaries', 'GPS_Points']
    },
    {
      id: 'csv',
      name: 'Code Enforcement Export',
      type: 'file',
      status: 'pending',
      records: 12387,
      lastSync: 'Never',
      icon: FileText,
      files: ['violations_2023.csv', 'citations_2023.csv']
    },
    {
      id: 'mixed',
      name: 'Fire Dept Records',
      type: 'mixed',
      status: 'partial',
      records: 8934,
      lastSync: '2024-02-28',
      icon: FileCode,
      sources: ['Access DB', 'PDF Scans', 'Excel Reports']
    }
  ]

  const fieldMappings = [
    { source: 'prop_address', target: 'property_address', transform: 'Address Normalization', confidence: 98 },
    { source: 'owner_nm', target: 'owner_name', transform: 'Name Formatting', confidence: 95 },
    { source: 'parcel_id', target: 'parcel_number', transform: 'Direct Map', confidence: 100 },
    { source: 'last_insp_dt', target: 'last_inspection_date', transform: 'Date Conversion', confidence: 99 },
    { source: 'fee_amt', target: 'annual_fee', transform: 'Currency Format', confidence: 100 },
    { source: 'status_cd', target: 'compliance_status', transform: 'Status Mapping', confidence: 92 },
    { source: 'lat_long', target: 'gps_coordinates', transform: 'Coordinate Parse', confidence: 96 },
    { source: 'units', target: 'unit_count', transform: 'Integer Validation', confidence: 100 }
  ]

  const importJobs = [
    {
      id: 1,
      name: 'Mobile County Properties',
      status: 'completed',
      progress: 100,
      records: 45621,
      duration: '2h 15m',
      errors: 0,
      warnings: 234
    },
    {
      id: 2,
      name: 'Building Permits 2020-2024',
      status: 'running',
      progress: 72,
      records: 27594,
      duration: '1h 38m',
      errors: 0,
      warnings: 89
    },
    {
      id: 3,
      name: 'Historical Violations',
      status: 'scheduled',
      progress: 0,
      records: 12387,
      duration: 'Est. 45m',
      errors: 0,
      warnings: 0
    }
  ]

  const validationMetrics = {
    overall: 99.2,
    categories: [
      { name: 'Addresses', score: 98.7, issues: 234, total: 45621 },
      { name: 'Owner Names', score: 99.1, issues: 156, total: 45621 },
      { name: 'Phone Numbers', score: 97.3, issues: 567, total: 32456 },
      { name: 'GPS Coordinates', score: 99.8, issues: 23, total: 38923 },
      { name: 'Dates', score: 100, issues: 0, total: 125843 },
      { name: 'Financial Data', score: 99.9, issues: 12, total: 45621 }
    ]
  }

  const handleStartImport = () => {
    setIsImporting(true)
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 15
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setIsImporting(false)
      }
      setImportProgress(progress)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">🔄 Bulk Import & Migration Tools</h1>
              <p className="text-sm text-gray-600 mt-1">Transform municipal data into GOAT-ready format</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="h-5 w-5" />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <Play className="h-4 w-4" />
                <span>Run Import</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Progress Steps */}
        <div className="px-6 py-4 border-t bg-gray-50">
          <div className="flex items-center justify-between max-w-4xl">
            {[
              { step: 1, label: 'Connect Sources' },
              { step: 2, label: 'Map Fields' },
              { step: 3, label: 'Validate Data' },
              { step: 4, label: 'Import & Transform' }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    activeStep >= item.step
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {activeStep > item.step ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <span className="font-medium">{item.step}</span>
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    activeStep >= item.step ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {item.label}
                  </p>
                </div>
                {index < 3 && (
                  <ChevronRight className="h-5 w-5 text-gray-400 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {activeStep === 1 && (
          <>
            {/* Data Sources */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Available Data Sources</h2>
                <p className="text-sm text-gray-600 mt-1">Select the systems and files to import data from</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dataSources.map((source) => (
                    <div
                      key={source.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedSource === source.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedSource(source.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <source.icon className="h-8 w-8 text-gray-600" />
                          <div>
                            <h3 className="font-medium">{source.name}</h3>
                            <p className="text-sm text-gray-500">Type: {source.type}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                          source.status === 'connected' ? 'bg-green-100 text-green-700' :
                          source.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {source.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-gray-600">Records</p>
                          <p className="font-medium">{source.records.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Last Sync</p>
                          <p className="font-medium">{source.lastSync}</p>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t">
                        <p className="text-xs text-gray-600">
                          {source.type === 'database' && `Tables: ${source.tables?.join(', ')}`}
                          {source.type === 'file' && source.sheets && `Sheets: ${source.sheets.join(', ')}`}
                          {source.type === 'file' && source.files && `Files: ${source.files.join(', ')}`}
                          {source.type === 'mixed' && `Sources: ${source.sources?.join(', ')}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setActiveStep(2)}
                    disabled={!selectedSource}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Continue to Field Mapping
                  </button>
                </div>
              </div>
            </div>

            {/* System Compatibility */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">System Compatibility</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { system: 'Microsoft Access', versions: '2000-2019', status: 'full' },
                  { system: 'SQL Server', versions: '2008-2022', status: 'full' },
                  { system: 'PostgreSQL', versions: '9.6+', status: 'full' },
                  { system: 'Excel', versions: '.xls, .xlsx', status: 'full' },
                  { system: 'CSV/TSV', versions: 'All', status: 'full' },
                  { system: 'MySQL', versions: '5.6+', status: 'full' },
                  { system: 'Oracle', versions: '11g+', status: 'partial' },
                  { system: 'MongoDB', versions: '4.0+', status: 'beta' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{item.system}</p>
                      <p className="text-xs text-gray-500">{item.versions}</p>
                    </div>
                    <span className={`text-xs font-medium ${
                      item.status === 'full' ? 'text-green-600' :
                      item.status === 'partial' ? 'text-yellow-600' :
                      'text-blue-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeStep === 2 && (
          <>
            {/* Field Mapping */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Field Mapping Configuration</h2>
                <p className="text-sm text-gray-600 mt-1">Map source fields to GOAT database schema</p>
              </div>
              <div className="p-6">
                <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <p className="text-sm text-blue-900">
                      <strong>Smart Mapping:</strong> AI detected 8 of 12 fields with 95%+ confidence
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {fieldMappings.map((mapping, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <Database className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-medium">{mapping.source}</span>
                        </div>
                      </div>
                      
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <Table className="h-4 w-4 text-gray-400" />
                          <select className="text-sm border rounded px-2 py-1 bg-white">
                            <option>{mapping.target}</option>
                            <option>-- Skip Field --</option>
                            <option>owner_email</option>
                            <option>property_type</option>
                            <option>registration_date</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                          {mapping.transform}
                        </span>
                        <span className={`text-xs font-medium ${
                          mapping.confidence >= 95 ? 'text-green-600' :
                          mapping.confidence >= 90 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {mapping.confidence}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep(1)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    ← Back
                  </button>
                  <div className="space-x-3">
                    <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                      Save Template
                    </button>
                    <button
                      onClick={() => setActiveStep(3)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Validate Mapping
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Transformation Rules */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">Transformation Rules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Address Normalization</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Standardize abbreviations (St → Street)</li>
                    <li>• Validate against USPS database</li>
                    <li>• Extract unit numbers</li>
                    <li>• Geocode for GPS coordinates</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Phone Formatting</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Remove special characters</li>
                    <li>• Validate area codes</li>
                    <li>• Format as (XXX) XXX-XXXX</li>
                    <li>• Identify mobile vs landline</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {activeStep === 3 && (
          <>
            {/* Data Validation */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Data Quality Validation</h2>
                <p className="text-sm text-gray-600 mt-1">Review and resolve data quality issues before import</p>
              </div>
              <div className="p-6">
                {/* Overall Score */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center">
                    <div className="relative">
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
                          strokeDasharray={`${2 * Math.PI * 56 * validationMetrics.overall / 100} ${2 * Math.PI * 56}`}
                          strokeLinecap="round"
                          transform="rotate(-90 64 64)"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div>
                          <p className="text-3xl font-bold text-green-600">{validationMetrics.overall}%</p>
                          <p className="text-xs text-gray-600">Overall Quality</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    45,621 records validated • 423 issues found • 99.2% ready for import
                  </p>
                </div>

                {/* Category Breakdown */}
                <div className="space-y-4">
                  {validationMetrics.categories.map((category, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{category.name}</span>
                          <span className="text-sm text-gray-600">
                            {category.issues} issues / {category.total.toLocaleString()} records
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              category.score >= 99 ? 'bg-green-600' :
                              category.score >= 95 ? 'bg-yellow-600' :
                              'bg-red-600'
                            }`}
                            style={{ width: `${category.score}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className={`text-sm font-medium ${
                        category.score >= 99 ? 'text-green-600' :
                        category.score >= 95 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {category.score}%
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yellow-900">423 Records Need Review</p>
                      <p className="text-sm text-yellow-700 mt-1">
                        234 addresses need verification • 156 missing owner names • 33 invalid phone numbers
                      </p>
                      <button className="text-sm font-medium text-yellow-900 underline mt-2">
                        Review Issues →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    ← Back
                  </button>
                  <div className="space-x-3">
                    <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                      Export Issues
                    </button>
                    <button
                      onClick={() => setActiveStep(4)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Proceed with Import
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Data Preview */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">Sample Data Preview</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-4 py-2 text-left">Property Address</th>
                      <th className="px-4 py-2 text-left">Owner Name</th>
                      <th className="px-4 py-2 text-left">Annual Fee</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">GPS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-2">123 Main St, Mobile, AL 36602</td>
                      <td className="px-4 py-2">John Smith</td>
                      <td className="px-4 py-2">$450.00</td>
                      <td className="px-4 py-2">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
                      </td>
                      <td className="px-4 py-2">30.6954, -88.0399</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">456 Oak Ave, Mobile, AL 36604</td>
                      <td className="px-4 py-2">Sarah Johnson</td>
                      <td className="px-4 py-2">$680.00</td>
                      <td className="px-4 py-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Pending</span>
                      </td>
                      <td className="px-4 py-2">30.6832, -88.0567</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeStep === 4 && (
          <>
            {/* Import Progress */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Import in Progress</h2>
                <p className="text-sm text-gray-600 mt-1">Processing 45,621 records from Municipal Access Database</p>
              </div>
              <div className="p-6">
                {isImporting ? (
                  <>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Overall Progress</span>
                        <span className="text-sm text-gray-600">{Math.round(importProgress)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${importProgress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">
                          {Math.round(importProgress * 456.21)}
                        </p>
                        <p className="text-sm text-gray-600">Records Processed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">12,500</p>
                        <p className="text-sm text-gray-600">Records/Minute</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-orange-600">0</p>
                        <p className="text-sm text-gray-600">Errors</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-600">
                          {Math.max(0, Math.round((100 - importProgress) * 0.45))}m
                        </p>
                        <p className="text-sm text-gray-600">Est. Remaining</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                        <span>Importing property records...</span>
                      </div>
                      <div className="pl-6 text-xs text-gray-500 space-y-1">
                        <p>✓ Connected to source database</p>
                        <p>✓ Field mapping validated</p>
                        <p>• Transforming addresses to standard format...</p>
                        <p>• Geocoding properties for GPS coordinates...</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Import Complete!</h3>
                    <p className="text-gray-600 mb-6">
                      Successfully imported 45,621 records in 2 hours 15 minutes
                    </p>
                    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
                      <div>
                        <p className="text-2xl font-bold text-green-600">45,621</p>
                        <p className="text-sm text-gray-600">Imported</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-yellow-600">234</p>
                        <p className="text-sm text-gray-600">Warnings</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-red-600">0</p>
                        <p className="text-sm text-gray-600">Errors</p>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-3">
                      <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                        View Import Report
                      </button>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Import Another Source
                      </button>
                    </div>
                  </div>
                )}

                {!isImporting && importProgress === 0 && (
                  <div className="text-center py-8">
                    <Database className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Import</h3>
                    <p className="text-gray-600 mb-6">
                      45,621 records validated and ready for import
                    </p>
                    <button
                      onClick={handleStartImport}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center space-x-2 mx-auto"
                    >
                      <Upload className="h-5 w-5" />
                      <span>Start Import</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Import Jobs */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">Import Jobs</h3>
              <div className="space-y-3">
                {importJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        job.status === 'completed' ? 'bg-green-100' :
                        job.status === 'running' ? 'bg-blue-100' :
                        'bg-gray-100'
                      }`}>
                        {job.status === 'completed' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : job.status === 'running' ? (
                          <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
                        ) : (
                          <Clock className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{job.name}</h4>
                        <p className="text-sm text-gray-600">
                          {job.records.toLocaleString()} records • {job.duration}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {job.status === 'running' ? (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{job.progress}%</span>
                          <button className="p-1 hover:bg-gray-200 rounded">
                            <Pause className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="text-sm">
                          {job.errors > 0 && (
                            <span className="text-red-600 font-medium">{job.errors} errors</span>
                          )}
                          {job.warnings > 0 && (
                            <span className="text-yellow-600 font-medium ml-2">{job.warnings} warnings</span>
                          )}
                          {job.errors === 0 && job.warnings === 0 && (
                            <span className="text-green-600 font-medium">Success</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Performance Metrics */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Migration Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold">12,500</p>
              <p className="text-blue-100">Records/Minute</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">99.5%</p>
              <p className="text-blue-100">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">4 hrs</p>
              <p className="text-blue-100">Full Migration</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">Zero</p>
              <p className="text-blue-100">Data Loss</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

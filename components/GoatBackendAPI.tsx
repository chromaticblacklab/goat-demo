'use client'
import React, { useState } from 'react'
import { Code, Database, Shield, Cloud, Cpu, GitBranch, Lock, Zap, Globe, Server, Key, FileJson, Terminal, CheckCircle, AlertCircle, Clock, TrendingUp, Users, Building2, DollarSign, FileText, MapPin, Brain, Layers, Link2, Box, Activity } from 'lucide-react'

export default function GoatBackendAPI() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedEndpoint, setSelectedEndpoint] = useState<string | null>(null)
  const [showResponse, setShowResponse] = useState(false)

  const apiEndpoints = [
    {
      category: 'Authentication',
      endpoints: [
        { method: 'POST', path: '/api/auth/login', description: 'Authenticate user and receive JWT token' },
        { method: 'POST', path: '/api/auth/refresh', description: 'Refresh authentication token' },
        { method: 'POST', path: '/api/auth/logout', description: 'Invalidate user session' },
        { method: 'POST', path: '/api/auth/register', description: 'Register new municipal account' }
      ]
    },
    {
      category: 'Properties',
      endpoints: [
        { method: 'GET', path: '/api/properties', description: 'List all properties with pagination' },
        { method: 'GET', path: '/api/properties/:id', description: 'Get single property details' },
        { method: 'POST', path: '/api/properties', description: 'Register new property' },
        { method: 'PUT', path: '/api/properties/:id', description: 'Update property information' },
        { method: 'POST', path: '/api/properties/:id/gps', description: 'Update GPS coordinates' }
      ]
    },
    {
      category: 'Inspections',
      endpoints: [
        { method: 'GET', path: '/api/inspections', description: 'List scheduled inspections' },
        { method: 'POST', path: '/api/inspections', description: 'Schedule new inspection' },
        { method: 'PUT', path: '/api/inspections/:id', description: 'Update inspection status' },
        { method: 'POST', path: '/api/inspections/:id/photos', description: 'Upload geotagged photos' },
        { method: 'GET', path: '/api/inspections/route', description: 'Get optimized inspection route' }
      ]
    },
    {
      category: 'Fair Housing AI',
      endpoints: [
        { method: 'POST', path: '/api/ai/analyze', description: 'Analyze text for discrimination' },
        { method: 'GET', path: '/api/ai/violations', description: 'Get AI-detected violations' },
        { method: 'POST', path: '/api/ai/train', description: 'Submit training data' },
        { method: 'GET', path: '/api/ai/metrics', description: 'Get AI performance metrics' }
      ]
    },
    {
      category: 'Payments',
      endpoints: [
        { method: 'POST', path: '/api/payments/charge', description: 'Process property fee payment' },
        { method: 'GET', path: '/api/payments/history', description: 'Get payment history' },
        { method: 'POST', path: '/api/payments/split', description: 'Calculate municipal/GOAT split' },
        { method: 'POST', path: '/api/payments/webhook', description: 'Stripe webhook handler' }
      ]
    }
  ]

  const databaseSchema = [
    {
      table: 'municipalities',
      fields: [
        { name: 'id', type: 'UUID', constraints: 'PRIMARY KEY' },
        { name: 'name', type: 'VARCHAR(255)', constraints: 'NOT NULL' },
        { name: 'state', type: 'VARCHAR(2)', constraints: 'NOT NULL' },
        { name: 'population', type: 'INTEGER', constraints: '' },
        { name: 'settings', type: 'JSONB', constraints: '' },
        { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT NOW()' }
      ]
    },
    {
      table: 'properties',
      fields: [
        { name: 'id', type: 'UUID', constraints: 'PRIMARY KEY' },
        { name: 'municipality_id', type: 'UUID', constraints: 'FOREIGN KEY' },
        { name: 'address', type: 'VARCHAR(500)', constraints: 'NOT NULL' },
        { name: 'owner_id', type: 'UUID', constraints: 'FOREIGN KEY' },
        { name: 'gps_location', type: 'GEOGRAPHY(POINT)', constraints: '' },
        { name: 'annual_fee', type: 'DECIMAL(10,2)', constraints: '' },
        { name: 'compliance_status', type: 'ENUM', constraints: '' }
      ]
    },
    {
      table: 'inspections',
      fields: [
        { name: 'id', type: 'UUID', constraints: 'PRIMARY KEY' },
        { name: 'property_id', type: 'UUID', constraints: 'FOREIGN KEY' },
        { name: 'inspector_id', type: 'UUID', constraints: 'FOREIGN KEY' },
        { name: 'scheduled_date', type: 'TIMESTAMP', constraints: '' },
        { name: 'gps_track', type: 'GEOGRAPHY(LINESTRING)', constraints: '' },
        { name: 'photos', type: 'JSONB', constraints: '' },
        { name: 'checklist_results', type: 'JSONB', constraints: '' }
      ]
    },
    {
      table: 'fair_housing_violations',
      fields: [
        { name: 'id', type: 'UUID', constraints: 'PRIMARY KEY' },
        { name: 'property_id', type: 'UUID', constraints: 'FOREIGN KEY' },
        { name: 'detected_text', type: 'TEXT', constraints: '' },
        { name: 'violation_type', type: 'VARCHAR(100)', constraints: '' },
        { name: 'confidence_score', type: 'DECIMAL(5,4)', constraints: '' },
        { name: 'ai_model_version', type: 'VARCHAR(50)', constraints: '' },
        { name: 'detected_at', type: 'TIMESTAMP', constraints: 'DEFAULT NOW()' }
      ]
    }
  ]

  const systemArchitecture = {
    frontend: {
      tech: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS'],
      hosting: 'Vercel Edge Network'
    },
    backend: {
      tech: ['Node.js', 'Express.js', 'TypeScript', 'Prisma ORM'],
      hosting: 'AWS ECS with Fargate'
    },
    database: {
      primary: 'PostgreSQL 15 with PostGIS',
      cache: 'Redis Cluster',
      search: 'Elasticsearch'
    },
    infrastructure: {
      cdn: 'CloudFront',
      storage: 'S3 for documents/photos',
      queue: 'SQS for async jobs',
      monitoring: 'DataDog + CloudWatch'
    }
  }

  const performanceMetrics = {
    api: {
      p50: 45,
      p95: 123,
      p99: 245,
      availability: 99.99
    },
    database: {
      readLatency: 2.3,
      writeLatency: 5.7,
      connectionsActive: 127,
      replicationLag: 0.8
    },
    fairHousingAI: {
      inferenceTime: 1.2,
      accuracy: 94.2,
      throughput: 1000,
      modelSize: '485MB'
    }
  }

  const sampleRequest = {
    method: 'POST',
    url: 'https://api.goatplatform.com/v1/properties',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      'Content-Type': 'application/json',
      'X-Municipality-ID': '550e8400-e29b-41d4-a716-446655440000'
    },
    body: {
      address: '123 Main Street, Mobile, AL 36602',
      owner_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      units: 4,
      property_type: 'multi-family',
      gps_location: {
        lat: 30.6954,
        lng: -88.0399
      }
    }
  }

  const sampleResponse = {
    success: true,
    data: {
      id: '8a4b8c16-9c3d-4e5f-a1b2-3d4e5f6a7b8c',
      address: '123 Main Street, Mobile, AL 36602',
      owner_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      municipality_id: '550e8400-e29b-41d4-a716-446655440000',
      units: 4,
      property_type: 'multi-family',
      annual_fee: 450.00,
      compliance_status: 'pending_inspection',
      gps_location: {
        type: 'Point',
        coordinates: [-88.0399, 30.6954]
      },
      created_at: '2024-03-20T14:30:00Z',
      updated_at: '2024-03-20T14:30:00Z'
    },
    metadata: {
      request_id: 'req_2K4J5M6N7P8Q9R0S',
      response_time: 67
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Code className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">GOAT Backend API</h1>
                <p className="text-gray-400 text-sm">Multi-tenant SaaS Architecture v2.0</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All Systems Operational</span>
              </span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                API Documentation
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="px-6 border-t border-gray-800">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: Layers },
              { id: 'endpoints', label: 'API Endpoints', icon: Link2 },
              { id: 'database', label: 'Database Schema', icon: Database },
              { id: 'security', label: 'Security', icon: Shield },
              { id: 'performance', label: 'Performance', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-white'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {activeTab === 'overview' && (
          <>
            {/* Architecture Overview */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold mb-6">System Architecture</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Globe className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold">Frontend</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {systemArchitecture.frontend.tech.map((tech, i) => (
                      <li key={i}>• {tech}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    Hosted on: {systemArchitecture.frontend.hosting}
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Server className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold">Backend</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {systemArchitecture.backend.tech.map((tech, i) => (
                      <li key={i}>• {tech}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    Hosted on: {systemArchitecture.backend.hosting}
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Database className="h-6 w-6 text-purple-600" />
                    <h3 className="font-semibold">Database</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• {systemArchitecture.database.primary}</li>
                    <li>• {systemArchitecture.database.cache}</li>
                    <li>• {systemArchitecture.database.search}</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Cloud className="h-6 w-6 text-orange-600" />
                    <h3 className="font-semibold">Infrastructure</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• CDN: {systemArchitecture.infrastructure.cdn}</li>
                    <li>• Storage: {systemArchitecture.infrastructure.storage}</li>
                    <li>• Queue: {systemArchitecture.infrastructure.queue}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <GitBranch className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Multi-Tenant Architecture</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Row-level security with complete data isolation between municipalities. 
                  Supports unlimited tenants with sub-100ms tenant resolution.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold">GPS & Spatial Data</h3>
                </div>
                <p className="text-sm text-gray-600">
                  PostGIS integration for advanced geospatial queries. 
                  Route optimization, boundary detection, and GPS tracking with ±3m accuracy.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">AI Fair Housing</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Real-time discrimination detection with 94% accuracy. 
                  Processes 1000+ listings/second with 1.2s inference time.
                </p>
              </div>
            </div>

            {/* Integration Capabilities */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">Integration Capabilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Stripe', status: 'Active', type: 'Payments' },
                  { name: 'SendGrid', status: 'Active', type: 'Email' },
                  { name: 'Twilio', status: 'Active', type: 'SMS' },
                  { name: 'AWS S3', status: 'Active', type: 'Storage' },
                  { name: 'Google Maps', status: 'Active', type: 'Geocoding' },
                  { name: 'USPS', status: 'Active', type: 'Address Validation' },
                  { name: 'Auth0', status: 'Available', type: 'SSO' },
                  { name: 'Webhooks', status: 'Active', type: 'Custom' }
                ].map((integration, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{integration.name}</p>
                      <p className="text-xs text-gray-500">{integration.type}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      integration.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {integration.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'endpoints' && (
          <>
            {/* API Explorer */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Endpoint List */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                  <h2 className="font-semibold">API Endpoints</h2>
                  <p className="text-sm text-gray-600 mt-1">RESTful API v1</p>
                </div>
                <div className="p-6 space-y-6">
                  {apiEndpoints.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h3 className="font-medium text-sm text-gray-700 mb-3">{category.category}</h3>
                      <div className="space-y-2">
                        {category.endpoints.map((endpoint, endpointIndex) => (
                          <button
                            key={endpointIndex}
                            onClick={() => setSelectedEndpoint(`${categoryIndex}-${endpointIndex}`)}
                            className={`w-full text-left p-3 rounded-lg transition-colors ${
                              selectedEndpoint === `${categoryIndex}-${endpointIndex}`
                                ? 'bg-blue-50 border-blue-200 border'
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <span className={`text-xs font-mono px-2 py-1 rounded ${
                                endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                                endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                                endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {endpoint.method}
                              </span>
                              <span className="text-sm font-mono">{endpoint.path}</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1 ml-14">{endpoint.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request/Response */}
              <div className="lg:col-span-2 space-y-6">
                {/* Request */}
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6 border-b">
                    <h3 className="font-semibold">Sample Request</h3>
                  </div>
                  <div className="p-6">
                    <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <div className="text-green-400 mb-2">{sampleRequest.method} {sampleRequest.url}</div>
                      <div className="text-gray-500 mb-2">Headers:</div>
                      {Object.entries(sampleRequest.headers).map(([key, value]) => (
                        <div key={key} className="ml-4">
                          <span className="text-blue-400">{key}</span>: {value}
                        </div>
                      ))}
                      <div className="text-gray-500 mt-3 mb-2">Body:</div>
                      <pre className="ml-4 text-yellow-300">
                        {JSON.stringify(sampleRequest.body, null, 2)}
                      </pre>
                    </div>
                    
                    <button
                      onClick={() => setShowResponse(true)}
                      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
                    >
                      Send Request
                    </button>
                  </div>
                </div>

                {/* Response */}
                {showResponse && (
                  <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Response</h3>
                        <span className="text-sm text-green-600">200 OK • 67ms</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <pre className="text-green-300">
                          {JSON.stringify(sampleResponse, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}

                {/* Rate Limits */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold mb-4">Rate Limits</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Standard Tier</p>
                      <p className="text-2xl font-bold">1,000 req/min</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Enterprise Tier</p>
                      <p className="text-2xl font-bold">10,000 req/min</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-900">
                      Rate limit headers included in all responses: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'database' && (
          <>
            {/* Database Schema */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Database Schema</h2>
                <p className="text-sm text-gray-600 mt-1">PostgreSQL 15 with PostGIS extension</p>
              </div>
              <div className="p-6">
                <div className="space-y-8">
                  {databaseSchema.map((table, index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-3 flex items-center space-x-2">
                        <Database className="h-5 w-5 text-gray-600" />
                        <span>{table.table}</span>
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-gray-50 border-y">
                            <tr>
                              <th className="px-4 py-2 text-left">Field</th>
                              <th className="px-4 py-2 text-left">Type</th>
                              <th className="px-4 py-2 text-left">Constraints</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            {table.fields.map((field, fieldIndex) => (
                              <tr key={fieldIndex}>
                                <td className="px-4 py-2 font-mono">{field.name}</td>
                                <td className="px-4 py-2 font-mono text-blue-600">{field.type}</td>
                                <td className="px-4 py-2 text-gray-600">{field.constraints}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Indexes */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-3">Performance Indexes</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-yellow-600" />
                      <span>Spatial index on properties.gps_location for radius queries</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-yellow-600" />
                      <span>Composite index on (municipality_id, compliance_status)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-yellow-600" />
                      <span>Full-text search index on properties.address</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-yellow-600" />
                      <span>Temporal index on inspections.scheduled_date</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Multi-Tenant Strategy */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">Multi-Tenant Data Isolation</h3>
              <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm">
                <div className="text-green-400 mb-2">-- Row Level Security Policy</div>
                <div>CREATE POLICY tenant_isolation ON properties</div>
                <div className="ml-4">FOR ALL</div>
                <div className="ml-4">USING (municipality_id = current_setting('app.current_tenant')::uuid);</div>
                <div className="mt-3 text-green-400">-- Automatic tenant filtering</div>
                <div>SET app.current_tenant = '550e8400-e29b-41d4-a716-446655440000';</div>
                <div>SELECT * FROM properties; -- Returns only Mobile's data</div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'security' && (
          <>
            {/* Security Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                  <h3 className="text-lg font-semibold">Authentication & Authorization</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>JWT tokens with 15-minute expiry and refresh tokens</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Role-based access control (RBAC) with granular permissions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Multi-factor authentication for administrative accounts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>API key management with scoped permissions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <h3 className="text-lg font-semibold">Data Protection</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span>AES-256 encryption at rest for all sensitive data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span>TLS 1.3 for all data in transit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span>PII data masking in logs and non-production environments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span>Automated backup encryption with customer-managed keys</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Compliance */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="font-semibold mb-4">Compliance & Standards</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'SOC 2 Type II', status: 'Compliant', icon: '🛡️' },
                  { name: 'GDPR', status: 'Compliant', icon: '🇪🇺' },
                  { name: 'CCPA', status: 'Compliant', icon: '🇺🇸' },
                  { name: 'HIPAA', status: 'Ready', icon: '🏥' },
                  { name: 'PCI DSS', status: 'Level 1', icon: '��' },
                  { name: 'ISO 27001', status: 'In Progress', icon: '📋' },
                  { name: 'NIST', status: 'Framework', icon: '🏛️' },
                  { name: 'FedRAMP', status: 'Planned', icon: '🏛️' }
                ].map((compliance, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg text-center">
                    <div className="text-2xl mb-2">{compliance.icon}</div>
                    <p className="font-medium text-sm">{compliance.name}</p>
                    <p className={`text-xs mt-1 ${
                      compliance.status === 'Compliant' || compliance.status === 'Level 1' 
                        ? 'text-green-600' 
                        : compliance.status === 'Ready' || compliance.status === 'Framework'
                        ? 'text-blue-600'
                        : 'text-gray-600'
                    }`}>
                      {compliance.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Headers */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">Security Headers</h3>
              <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-xs">
                <div><span className="text-blue-400">Strict-Transport-Security:</span> max-age=31536000; includeSubDomains; preload</div>
                <div><span className="text-blue-400">X-Content-Type-Options:</span> nosniff</div>
                <div><span className="text-blue-400">X-Frame-Options:</span> DENY</div>
                <div><span className="text-blue-400">X-XSS-Protection:</span> 1; mode=block</div>
                <div><span className="text-blue-400">Content-Security-Policy:</span> default-src 'self'; script-src 'self' 'unsafe-inline'</div>
                <div><span className="text-blue-400">Referrer-Policy:</span> strict-origin-when-cross-origin</div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'performance' && (
          <>
            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold mb-4">API Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">P50 Latency</span>
                      <span className="font-medium">{performanceMetrics.api.p50}ms</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">P95 Latency</span>
                      <span className="font-medium">{performanceMetrics.api.p95}ms</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">P99 Latency</span>
                      <span className="font-medium">{performanceMetrics.api.p99}ms</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Availability</span>
                      <span className="font-medium text-green-600">{performanceMetrics.api.availability}%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold mb-4">Database Performance</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Read Latency</span>
                    <span className="font-medium">{performanceMetrics.database.readLatency}ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Write Latency</span>
                    <span className="font-medium">{performanceMetrics.database.writeLatency}ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Active Connections</span>
                    <span className="font-medium">{performanceMetrics.database.connectionsActive}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Replication Lag</span>
                    <span className="font-medium">{performanceMetrics.database.replicationLag}s</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-500">Primary: us-east-1a | Replica: us-east-1b</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold mb-4">Fair Housing AI</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Inference Time</span>
                    <span className="font-medium">{performanceMetrics.fairHousingAI.inferenceTime}s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Accuracy</span>
                    <span className="font-medium text-green-600">{performanceMetrics.fairHousingAI.accuracy}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Throughput</span>
                    <span className="font-medium">{performanceMetrics.fairHousingAI.throughput} req/s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Model Size</span>
                    <span className="font-medium">{performanceMetrics.fairHousingAI.modelSize}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scalability */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Scalability Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold">461</p>
                  <p className="text-indigo-200">Municipalities</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">350K+</p>
                  <p className="text-indigo-200">Properties/State</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">32+</p>
                  <p className="text-indigo-200">States Ready</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">$200M+</p>
                  <p className="text-indigo-200">Transaction Capacity</p>
                </div>
              </div>
              <p className="text-sm text-indigo-200 mt-6 text-center">
                Auto-scaling enabled • Zero-downtime deployments • 99.99% SLA
              </p>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

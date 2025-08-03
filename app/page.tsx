import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">🐐 GOAT Platform</h1>
          <p className="text-xl mb-8">Municipal Property Management & Fair Housing Compliance</p>
          
          {/* Key Stats */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold mb-6">🎯 Business Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400">$29.4M</div>
                <div className="text-sm">Alabama Revenue</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">461</div>
                <div className="text-sm">Municipalities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">94%</div>
                <div className="text-sm">AI Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">30%</div>
                <div className="text-sm">Efficiency Gain</div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'Municipal Dashboard', 
              href: '/municipal', 
              description: 'Administrative oversight & compliance monitoring', 
              icon: '🏛️',
              value: '$200K+ annual savings'
            },
            { 
              title: 'Property Owner Portal', 
              href: '/owner', 
              description: 'Registration, payments & document management', 
              icon: '🏠',
              value: '4.8/5 satisfaction rate'
            },
            { 
              title: 'Mobile Inspector App', 
              href: '/inspector', 
              description: 'GPS-optimized field operations', 
              icon: '📱',
              value: '25% productivity boost'
            },
            { 
              title: 'Analytics Dashboard', 
              href: '/analytics', 
              description: 'Predictive insights & business intelligence', 
              icon: '📊',
              value: '94% forecast accuracy'
            },
            { 
              title: 'Tenant Services', 
              href: '/tenant', 
              description: 'Fair housing compliance & advocacy', 
              icon: '🛡️',
              value: '67% discrimination reduction'
            },
            { 
              title: 'Data Migration Tools', 
              href: '/migration', 
              description: 'Bulk municipal data import', 
              icon: '🔄',
              value: '4 weeks vs 6 months'
            },
            {
              title: 'Backend API Docs',
              href: '/api',
              description: 'Technical architecture & integration',
              icon: '🔧',
              value: 'Multi-tenant SaaS ready'
            }
          ].map((demo) => (
            <Link key={demo.href} href={demo.href} className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all cursor-pointer group-hover:scale-105">
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{demo.title}</h3>
                <p className="text-gray-200 mb-3">{demo.description}</p>
                <div className="text-sm text-green-300 font-medium">{demo.value}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Municipality?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
              📞 Schedule Live Demo
            </button>
            <button className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors">
              📧 Contact Sales
            </button>
          </div>
          
          <div className="mt-8 text-sm text-gray-300">
            <p>Complete SaaS platform serving municipalities, property owners, and tenants</p>
            <p>AI-powered fair housing compliance • GPS-optimized inspections • Real-time analytics</p>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'
import React, { useState } from 'react'
import { Shield, Home, Phone, Globe, AlertCircle, FileText, Users, BookOpen, Heart, ChevronRight, Search, HelpCircle, Flag, MessageCircle, Calendar, DollarSign, Gavel, Languages, X, Upload, Camera } from 'lucide-react'
import { CheckCircle, Clock } from 'lucide-react'

export default function GoatTenantServices() {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [activeView, setActiveView] = useState('home')
  const [showComplaintModal, setShowComplaintModal] = useState(false)
  const [complaintStep, setComplaintStep] = useState(1)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ]

  const protectedClasses = [
    { icon: '🏘️', class: 'Race', description: 'Protection against discrimination based on race or color' },
    { icon: '🙏', class: 'Religion', description: 'Freedom to practice any religion or no religion' },
    { icon: '🌍', class: 'National Origin', description: 'Protection regardless of country of birth' },
    { icon: '👥', class: 'Sex', description: 'Equal treatment regardless of gender' },
    { icon: '♿', class: 'Disability', description: 'Reasonable accommodations must be provided' },
    { icon: '👨‍👩‍👧‍👦', class: 'Familial Status', description: 'Families with children under 18 are protected' },
    { icon: '💰', class: 'Source of Income', description: 'Cannot discriminate based on lawful income source' }
  ]

  const resources = [
    {
      category: 'Emergency Housing',
      items: [
        { name: 'Emergency Shelter Hotline', phone: '211', available: '24/7' },
        { name: 'Family Promise Mobile', phone: '(251) 441-1991', available: 'Mon-Fri 9-5' },
        { name: 'Salvation Army Shelter', phone: '(251) 438-1625', available: '24/7' }
      ]
    },
    {
      category: 'Legal Aid',
      items: [
        { name: 'Legal Services Alabama', phone: '1-866-456-4995', available: 'Mon-Fri 8-5' },
        { name: 'Fair Housing Center', phone: '1-800-669-9777', available: 'Mon-Fri 9-5' },
        { name: 'Volunteer Lawyers Program', phone: '(251) 438-1102', available: 'Mon-Fri 9-5' }
      ]
    },
    {
      category: 'Financial Assistance',
      items: [
        { name: 'Rental Assistance Program', phone: '(251) 450-4700', available: 'Mon-Fri 8-5' },
        { name: 'Utility Assistance', phone: '(251) 470-7760', available: 'Mon-Fri 8-4' },
        { name: 'Mobile Community Action', phone: '(251) 826-2695', available: 'Mon-Fri 8-5' }
      ]
    }
  ]

  const myCase = {
    caseNumber: 'FH-2024-0342',
    status: 'Under Investigation',
    property: '456 Oak Avenue, Mobile, AL',
    filed: '2024-03-10',
    lastUpdate: '2024-03-18',
    investigator: 'Maria Rodriguez',
    nextStep: 'Witness interviews scheduled for March 25',
    timeline: [
      { date: '2024-03-10', event: 'Complaint filed', status: 'completed' },
      { date: '2024-03-12', event: 'Case assigned to investigator', status: 'completed' },
      { date: '2024-03-15', event: 'Initial evidence review', status: 'completed' },
      { date: '2024-03-18', event: 'Property owner notified', status: 'completed' },
      { date: '2024-03-25', event: 'Witness interviews', status: 'scheduled' },
      { date: '2024-04-01', event: 'Investigation complete', status: 'pending' }
    ]
  }

  const content = {
    en: {
      welcome: 'Welcome to GOAT Tenant Services',
      subtitle: 'Your rights matter. We\'re here to help.',
      protectedNotice: 'You are protected by AI-powered fair housing monitoring 24/7'
    },
    es: {
      welcome: 'Bienvenido a Servicios para Inquilinos GOAT',
      subtitle: 'Tus derechos importan. Estamos aquí para ayudar.',
      protectedNotice: 'Está protegido por monitoreo de vivienda justa con IA 24/7'
    },
    vi: {
      welcome: 'Chào mừng đến với Dịch vụ Người thuê GOAT',
      subtitle: 'Quyền của bạn quan trọng. Chúng tôi ở đây để giúp đỡ.',
      protectedNotice: 'Bạn được bảo vệ bởi AI giám sát nhà ở công bằng 24/7'
    },
    ar: {
      welcome: 'مرحباً بك في خدمات المستأجر GOAT',
      subtitle: 'حقوقك مهمة. نحن هنا للمساعدة.',
      protectedNotice: 'أنت محمي بمراقبة الإسكان العادل بالذكاء الاصطناعي 24/7'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">🛡️ GOAT Tenant Services</h1>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => {
                  const currentIndex = languages.findIndex(l => l.code === selectedLanguage)
                  const nextIndex = (currentIndex + 1) % languages.length
                  setSelectedLanguage(languages[nextIndex].code)
                }}
                className="flex items-center space-x-2 bg-white/20 rounded-lg px-3 py-1.5 hover:bg-white/30"
              >
                <Languages className="h-4 w-4" />
                <span className="text-sm">{languages.find(l => l.code === selectedLanguage)?.flag}</span>
              </button>
            </div>
          </div>
          
          {/* AI Protection Notice */}
          <div className="bg-white/10 rounded-lg p-3 flex items-center space-x-3">
            <Shield className="h-6 w-6 flex-shrink-0" />
            <p className="text-sm">{content[selectedLanguage as keyof typeof content].protectedNotice}</p>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="px-6 border-t border-white/20">
          <nav className="flex space-x-6 overflow-x-auto">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'rights', label: 'My Rights', icon: Gavel },
              { id: 'report', label: 'Report Issue', icon: Flag },
              { id: 'cases', label: 'My Cases', icon: FileText },
              { id: 'resources', label: 'Resources', icon: Heart }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`flex items-center space-x-2 py-3 border-b-2 whitespace-nowrap transition-colors ${
                  activeView === item.id
                    ? 'border-white text-white'
                    : 'border-transparent text-white/70 hover:text-white'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {activeView === 'home' && (
          <>
            {/* Welcome Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold mb-2">{content[selectedLanguage as keyof typeof content].welcome}</h2>
              <p className="text-gray-600 mb-4">{content[selectedLanguage as keyof typeof content].subtitle}</p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">Your Property is Monitored</p>
                    <p className="text-sm text-blue-700 mt-1">
                      456 Oak Avenue is registered with GOAT. All listings and communications are monitored for discrimination.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setShowComplaintModal(true)}
                  className="bg-red-600 text-white rounded-lg p-4 hover:bg-red-700 transition-colors"
                >
                  <Flag className="h-6 w-6 mb-2" />
                  <span className="block text-sm font-medium">Report Discrimination</span>
                </button>
                <button
                  onClick={() => setActiveView('resources')}
                  className="bg-green-600 text-white rounded-lg p-4 hover:bg-green-700 transition-colors"
                >
                  <Phone className="h-6 w-6 mb-2" />
                  <span className="block text-sm font-medium">Get Help Now</span>
                </button>
              </div>
            </div>

            {/* AI Detection Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="font-semibold mb-4">AI Protection Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Discrimination Detection</span>
                  <span className="text-sm font-medium text-green-600">Active ✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Scan</span>
                  <span className="text-sm font-medium">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Alerts This Month</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Protection Level</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                    <span className="text-sm font-medium">94%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Property Listing Verified</p>
                    <p className="text-xs text-gray-500">Your rental listing passed fair housing compliance check</p>
                    <p className="text-xs text-gray-400 mt-1">March 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Monthly Protection Report</p>
                    <p className="text-xs text-gray-500">No discrimination detected in February</p>
                    <p className="text-xs text-gray-400 mt-1">March 1, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeView === 'rights' && (
          <>
            <h2 className="text-2xl font-bold mb-6">Know Your Rights</h2>
            
            {/* Protected Classes */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="font-semibold mb-4">Protected Classes Under Fair Housing</h3>
              <p className="text-sm text-gray-600 mb-4">
                It is illegal to discriminate in housing based on these protected characteristics:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {protectedClasses.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-medium">{item.class}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="font-semibold mb-4">You Have the Right To:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Rent or buy housing free from discrimination</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Receive equal treatment in all housing-related services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Request reasonable accommodations for disabilities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">File a complaint without fear of retaliation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Have your complaint investigated by trained professionals</span>
                </li>
              </ul>
            </div>

            {/* When to File */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold mb-4">When to File a Complaint</h3>
              <p className="text-sm text-gray-600 mb-4">You should file a complaint if you experience:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">Refusal to rent or sell</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">Different terms or conditions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">False information about availability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">Harassment or intimidation</span>
                </div>
              </div>
              <button
                onClick={() => setShowComplaintModal(true)}
                className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
              >
                File a Complaint Now
              </button>
            </div>
          </>
        )}

        {activeView === 'cases' && (
          <>
            <h2 className="text-2xl font-bold mb-6">My Cases</h2>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b bg-gray-50">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">Case #{myCase.caseNumber}</h3>
                    <p className="text-sm text-gray-600 mt-1">{myCase.property}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                    {myCase.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Filed Date</p>
                    <p className="font-medium">{myCase.filed}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Last Update</p>
                    <p className="font-medium">{myCase.lastUpdate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Investigator</p>
                    <p className="font-medium">{myCase.investigator}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Next Step</p>
                    <p className="font-medium text-blue-600">{myCase.nextStep}</p>
                  </div>
                </div>

                <h4 className="font-semibold mb-4">Case Timeline</h4>
                <div className="space-y-4">
                  {myCase.timeline.map((event, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        event.status === 'completed' ? 'bg-green-100' :
                        event.status === 'scheduled' ? 'bg-blue-100' :
                        'bg-gray-100'
                      }`}>
                        {event.status === 'completed' ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : event.status === 'scheduled' ? (
                          <Calendar className="h-4 w-4 text-blue-600" />
                        ) : (
                          <Clock className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{event.event}</p>
                        <p className="text-xs text-gray-500">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-900 font-medium mb-1">Retaliation Protection Active</p>
                  <p className="text-xs text-blue-700">
                    You are protected from retaliation. Any adverse action by your landlord will be investigated.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {activeView === 'resources' && (
          <>
            <h2 className="text-2xl font-bold mb-6">Community Resources</h2>
            
            {resources.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="font-semibold mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.available}</p>
                      </div>
                      
                        href={`tel:${item.phone}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                      <a>
                        <Phone className="h-4 w-4" />
                        <span>{item.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-orange-900">Need Immediate Help?</p>
                  <p className="text-sm text-orange-700 mt-1">
                    Call 211 for 24/7 assistance with housing, food, healthcare, and other essential services.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Report Discrimination Modal */}
      {showComplaintModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Report Discrimination</h3>
                <button
                  onClick={() => {
                    setShowComplaintModal(false)
                    setComplaintStep(1)
                  }}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {complaintStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      What type of discrimination did you experience?
                    </label>
                    <select className="w-full border rounded-lg px-3 py-2">
                      <option>Select a type...</option>
                      <option>Refused to rent</option>
                      <option>Different terms offered</option>
                      <option>Harassment</option>
                      <option>False information about availability</option>
                      <option>Refused reasonable accommodation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      When did this happen?
                    </label>
                    <input type="date" className="w-full border rounded-lg px-3 py-2" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Property Address
                    </label>
                    <input 
                      type="text" 
                      placeholder="123 Main St, City, State"
                      className="w-full border rounded-lg px-3 py-2" 
                    />
                  </div>

                  <button
                    onClick={() => setComplaintStep(2)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Continue
                  </button>
                </div>
              )}

              {complaintStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Describe what happened
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please provide details about the discrimination..."
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Do you have evidence? (Optional)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-gray-400">
                        <Camera className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                        <span className="text-xs text-gray-500">Add Photo</span>
                      </button>
                      <button className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-gray-400">
                        <FileText className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                        <span className="text-xs text-gray-500">Add Document</span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
                    <p className="text-sm text-blue-900">
                      <strong>Anonymous Option:</strong> You can file anonymously, but providing contact info helps our investigation.
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => setComplaintStep(1)}
                      className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setComplaintStep(3)}
                      className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                    >
                      Submit Report
                    </button>
                  </div>
                </div>
              )}

              {complaintStep === 3 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Report Submitted</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Case #FH-2024-0343 has been created. An investigator will contact you within 2 business days.
                  </p>
                  <button
                    onClick={() => {
                      setShowComplaintModal(false)
                      setComplaintStep(1)
                      setActiveView('cases')
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    View My Cases
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

'use client'
import React, { useState, useEffect } from 'react'
import { MapPin, Camera, CheckCircle, XCircle, AlertCircle, Navigation, Clock, Battery, Wifi, WifiOff, Download, Upload, FileText, Home, Calendar, Settings, ChevronRight, Mic, MicOff, Save, Send } from 'lucide-react'

export default function GoatMobileInspectorApp() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 30.6954, lng: -88.0399 })
  const [isOnline, setIsOnline] = useState(true)
  const [batteryLevel, setBatteryLevel] = useState(78)
  const [activeInspection, setActiveInspection] = useState<number | null>(null)
  const [showCamera, setShowCamera] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [photos, setPhotos] = useState<Array<{id: number, location: any, timestamp: string}>>([])
  const [gpsAccuracy, setGpsAccuracy] = useState(3.2)

  // Today's route
  const inspections = [
    {
      id: 1,
      address: '123 Main Street',
      owner: 'John Smith',
      phone: '(251) 555-0123',
      time: '9:00 AM',
      priority: 'normal',
      status: 'completed',
      distance: '0.5 mi',
      units: 4,
      lastInspection: '2023-03-15',
      violations: 0,
      gps: { lat: 30.6954, lng: -88.0399 }
    },
    {
      id: 2,
      address: '456 Oak Avenue',
      owner: 'Sarah Johnson',
      phone: '(251) 555-0456',
      time: '9:45 AM',
      priority: 'high',
      status: 'completed',
      distance: '1.2 mi',
      units: 6,
      lastInspection: '2023-02-28',
      violations: 1,
      gps: { lat: 30.6832, lng: -88.0567 }
    },
    {
      id: 3,
      address: '789 Elm Drive',
      owner: 'Michael Brown',
      phone: '(251) 555-0789',
      time: '10:30 AM',
      priority: 'normal',
      status: 'in-progress',
      distance: '0.8 mi',
      units: 2,
      lastInspection: '2023-01-20',
      violations: 2,
      gps: { lat: 30.7094, lng: -88.0813 }
    },
    {
      id: 4,
      address: '321 Pine Road',
      owner: 'Lisa Davis',
      phone: '(251) 555-0321',
      time: '11:15 AM',
      priority: 'normal',
      status: 'pending',
      distance: '2.1 mi',
      units: 8,
      lastInspection: '2023-03-10',
      violations: 0,
      gps: { lat: 30.7234, lng: -88.0956 }
    }
  ]

  const inspectionChecklist = [
    { id: 1, category: 'Exterior', item: 'Building structure intact', status: null },
    { id: 2, category: 'Exterior', item: 'No visible safety hazards', status: null },
    { id: 3, category: 'Registration', item: 'Current registration posted', status: null },
    { id: 4, category: 'Registration', item: 'Contact information visible', status: null },
    { id: 5, category: 'Fair Housing', item: 'Equal opportunity signage', status: null },
    { id: 6, category: 'Fair Housing', item: 'No discriminatory language', status: null },
    { id: 7, category: 'Safety', item: 'Fire exits clearly marked', status: null },
    { id: 8, category: 'Safety', item: 'Smoke detectors present', status: null }
  ]

  // Simulate GPS updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.0001,
        lng: prev.lng + (Math.random() - 0.5) * 0.0001
      }))
      setGpsAccuracy(Math.max(2.5, Math.min(5, gpsAccuracy + (Math.random() - 0.5) * 0.5)))
    }, 5000)
    return () => clearInterval(interval)
  }, [gpsAccuracy])

  const currentInspection = inspections.find(i => i.id === activeInspection)

  const handleTakePhoto = () => {
    const newPhoto = {
      id: photos.length + 1,
      location: currentLocation,
      timestamp: new Date().toISOString()
    }
    setPhotos([...photos, newPhoto])
    setShowCamera(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-w-md mx-auto">
      {/* Status Bar */}
      <div className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-2">
          <span>9:41 AM</span>
          {isOnline ? (
            <Wifi className="h-3 w-3" />
          ) : (
            <WifiOff className="h-3 w-3 text-red-400" />
          )}
          <span className="text-gray-400">4G</span>
        </div>
        <div className="flex items-center space-x-2">
          <Battery className="h-4 w-4" />
          <span>{batteryLevel}%</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold">Inspector Mobile</h1>
          <button className="p-2 hover:bg-blue-700 rounded">
            <Settings className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{currentLocation.lat.toFixed(6)}, {currentLocation.lng.toFixed(6)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Navigation className="h-4 w-4" />
            <span>±{gpsAccuracy.toFixed(1)}m</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {!activeInspection ? (
        // Route View
        <div className="flex-1 overflow-y-auto">
          <div className="bg-white m-4 rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold">Today's Route</h2>
              <span className="text-sm text-gray-500">3 of 8 completed</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center mb-4">
              <div className="bg-gray-50 rounded p-2">
                <p className="text-2xl font-bold text-blue-600">8</p>
                <p className="text-xs text-gray-600">Total</p>
              </div>
              <div className="bg-gray-50 rounded p-2">
                <p className="text-2xl font-bold text-green-600">3</p>
                <p className="text-xs text-gray-600">Completed</p>
              </div>
              <div className="bg-gray-50 rounded p-2">
                <p className="text-2xl font-bold text-orange-600">5</p>
                <p className="text-xs text-gray-600">Remaining</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Route efficiency</span>
              <span className="font-medium text-green-600">89% optimized</span>
            </div>
          </div>

          <div className="px-4 pb-4 space-y-3">
            {inspections.map((inspection) => (
              <button
                key={inspection.id}
                onClick={() => setActiveInspection(inspection.id)}
                className="w-full bg-white rounded-lg shadow p-4 text-left hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{inspection.address}</h3>
                      {inspection.priority === 'high' && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                          Priority
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{inspection.owner}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{inspection.time}</p>
                    <p className="text-xs text-gray-500">{inspection.distance}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{inspection.units} units</span>
                    <span>{inspection.violations} violations</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {inspection.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : inspection.status === 'in-progress' ? (
                      <Clock className="h-5 w-5 text-blue-600" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="bg-white border-t px-4 py-3">
            <div className="flex items-center justify-between text-sm">
              <div>
                <p className="text-gray-600">Distance remaining</p>
                <p className="font-semibold">3.2 miles</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600">Est. completion</p>
                <p className="font-semibold">2:30 PM</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">Time saved</p>
                <p className="font-semibold text-green-600">45 min</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Active Inspection View
        <div className="flex-1 overflow-y-auto">
          <div className="bg-white">
            <div className="p-4 border-b">
              <button
                onClick={() => setActiveInspection(null)}
                className="flex items-center text-blue-600 mb-3"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                <span className="ml-1 text-sm">Back to route</span>
              </button>
              
              <h2 className="text-xl font-semibold mb-1">{currentInspection?.address}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{currentInspection?.owner}</span>
                <a href={`tel:${currentInspection?.phone}`} className="text-blue-600">
                  {currentInspection?.phone}
                </a>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border-b">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">GPS Location Verified</span>
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-sm text-gray-600">
                <p>Lat: {currentLocation.lat.toFixed(6)}</p>
                <p>Lng: {currentLocation.lng.toFixed(6)}</p>
                <p>Accuracy: ±{gpsAccuracy.toFixed(1)}m</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-semibold mb-3">Inspection Checklist</h3>
            <div className="space-y-1">
              {inspectionChecklist.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{item.item}</p>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded bg-green-100 text-green-700 hover:bg-green-200">
                        <CheckCircle className="h-5 w-5" />
                      </button>
                      <button className="p-2 rounded bg-red-100 text-red-700 hover:bg-red-200">
                        <XCircle className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                onClick={() => setShowCamera(true)}
                className="bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700"
              >
                <Camera className="h-5 w-5" />
                <span>Take Photo</span>
              </button>
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`py-3 rounded-lg flex items-center justify-center space-x-2 ${
                  isRecording 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                <span>{isRecording ? 'Stop' : 'Voice Note'}</span>
              </button>
            </div>

            {/* Photos Taken */}
            {photos.length > 0 && (
              <div className="mt-6">
                <h4 className="font-medium mb-2">Photos ({photos.length})</h4>
                <div className="grid grid-cols-3 gap-2">
                  {photos.map((photo) => (
                    <div key={photo.id} className="relative">
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={`https://via.placeholder.com/150?text=Photo+${photo.id}`}
                          alt={`Photo ${photo.id}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg">
                        <MapPin className="h-3 w-3 inline mr-1" />
                        GPS Tagged
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Complete Inspection */}
            <button className="w-full bg-green-600 text-white py-3 rounded-lg mt-6 flex items-center justify-center space-x-2 hover:bg-green-700">
              <Send className="h-5 w-5" />
              <span>Complete Inspection</span>
            </button>
          </div>
        </div>
      )}

      {/* Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 text-white">
            <button onClick={() => setShowCamera(false)}>
              <XCircle className="h-6 w-6" />
            </button>
            <div className="text-center">
              <p className="text-sm">GPS Location</p>
              <p className="text-xs">{currentLocation.lat.toFixed(6)}, {currentLocation.lng.toFixed(6)}</p>
            </div>
            <div className="w-6"></div>
          </div>
          
          <div className="flex-1 bg-gray-800 flex items-center justify-center">
            <div className="text-white text-center">
              <Camera className="h-24 w-24 mx-auto mb-4 opacity-50" />
              <p>Camera View</p>
            </div>
          </div>
          
          <div className="p-8">
            <button
              onClick={handleTakePhoto}
              className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center hover:bg-gray-200"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
            </button>
          </div>
        </div>
      )}

      {/* Offline Sync Banner */}
      {!isOnline && (
        <div className="absolute bottom-0 left-0 right-0 bg-orange-600 text-white px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <WifiOff className="h-4 w-4" />
            <span className="text-sm">Working offline</span>
          </div>
          <span className="text-xs">Will sync when connected</span>
        </div>
      )}
    </div>
  )
}

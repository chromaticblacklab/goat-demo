'use client'
import React, { useState } from 'react';
import { MapPin, Home, User, Mail, Phone, FileText, Calendar, DollarSign, CheckCircle } from 'lucide-react';

const PropertyRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Owner Information
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    ownerType: 'individual',
    companyName: '',
    taxId: '',
    
    // Property Details
    propertyAddress: '',
    unit: '',
    city: '',
    state: '',
    zipCode: '',
    propertyType: 'single-family',
    yearBuilt: '',
    squareFootage: '',
    bedrooms: '',
    bathrooms: '',
    
    // Rental Information
    monthlyRent: '',
    securityDeposit: '',
    leaseStartDate: '',
    leaseEndDate: '',
    currentOccupancy: 'occupied',
    tenantCount: '',
    
    // Compliance
    lastInspectionDate: '',
    insuranceProvider: '',
    insurancePolicyNumber: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    
    // Documents
    agreeToTerms: false,
    certifyAccuracy: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Property Registration Data:', formData);
    // Here you would typically send the data to your backend API
    alert('Property registration submitted successfully!');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <User className="w-5 h-5" />
              Owner Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Owner Type
                </label>
                <select
                  name="ownerType"
                  value={formData.ownerType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="individual">Individual</option>
                  <option value="company">Company/LLC</option>
                  <option value="trust">Trust</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              {formData.ownerType !== 'individual' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Trust Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tax ID / SSN
                </label>
                <input
                  type="text"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="ownerEmail"
                  value={formData.ownerEmail}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="ownerPhone"
                  value={formData.ownerPhone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Home className="w-5 h-5" />
              Property Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Address
                </label>
                <input
                  type="text"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unit/Apt Number
                </label>
                <input
                  type="text"
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="single-family">Single Family Home</option>
                  <option value="multi-family">Multi-Family</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condominium</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year Built
                </label>
                <input
                  type="number"
                  name="yearBuilt"
                  value={formData.yearBuilt}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Square Footage
                </label>
                <input
                  type="number"
                  name="squareFootage"
                  value={formData.squareFootage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrooms
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bathrooms
                </label>
                <input
                  type="number"
                  step="0.5"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5" />
              Rental Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Rent Amount
                </label>
                <input
                  type="number"
                  name="monthlyRent"
                  value={formData.monthlyRent}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Security Deposit
                </label>
                <input
                  type="number"
                  name="securityDeposit"
                  value={formData.securityDeposit}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lease Start Date
                </label>
                <input
                  type="date"
                  name="leaseStartDate"
                  value={formData.leaseStartDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lease End Date
                </label>
                <input
                  type="date"
                  name="leaseEndDate"
                  value={formData.leaseEndDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Occupancy Status
                </label>
                <select
                  name="currentOccupancy"
                  value={formData.currentOccupancy}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="occupied">Occupied</option>
                  <option value="vacant">Vacant</option>
                  <option value="pending">Pending Move-in</option>
                </select>
              </div>
              
              {formData.currentOccupancy === 'occupied' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Tenants
                  </label>
                  <input
                    type="number"
                    name="tenantCount"
                    value={formData.tenantCount}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5" />
              Compliance & Documentation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Inspection Date
                </label>
                <input
                  type="date"
                  name="lastInspectionDate"
                  value={formData.lastInspectionDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Insurance Provider
                </label>
                <input
                  type="text"
                  name="insuranceProvider"
                  value={formData.insuranceProvider}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Insurance Policy Number
                </label>
                <input
                  type="text"
                  name="insurancePolicyNumber"
                  value={formData.insurancePolicyNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Contact Name
                </label>
                <input
                  type="text"
                  name="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Contact Phone
                </label>
                <input
                  type="tel"
                  name="emergencyContactPhone"
                  value={formData.emergencyContactPhone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-4 mt-6">
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium text-gray-700 mb-2">Required Documents</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Please have the following documents ready to upload after registration:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Property deed or ownership documents</li>
                  <li>• Current insurance certificate</li>
                  <li>• Most recent inspection report</li>
                  <li>• Lead paint disclosure (if applicable)</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-0.5"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to comply with all municipal property regulations and fair housing laws
                  </span>
                </label>
                
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="certifyAccuracy"
                    checked={formData.certifyAccuracy}
                    onChange={handleInputChange}
                    className="mt-0.5"
                  />
                  <span className="text-sm text-gray-600">
                    I certify that all information provided is accurate and complete
                  </span>
                </label>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="bg-blue-600 text-white p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold">Property Registration</h2>
          <p className="mt-1">Register your property with the GOAT Platform</p>
        </div>
        
        {/* Progress Indicator */}
        <div className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i <= step
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {i < step ? <CheckCircle className="w-5 h-5" /> : i}
                </div>
                {i < 4 && (
                  <div
                    className={`w-full h-1 mx-2 ${
                      i < step ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-600">Owner Info</span>
            <span className="text-xs text-gray-600">Property Details</span>
            <span className="text-xs text-gray-600">Rental Info</span>
            <span className="text-xs text-gray-600">Compliance</span>
          </div>
        </div>
        
        <div className="p-6">
          {renderStep()}
          
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Previous
              </button>
            )}
            
            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!formData.agreeToTerms || !formData.certifyAccuracy}
                className="ml-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Registration
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyRegistrationForm;
import React, { useState } from 'react'

function Signup() {
  const [firstName, setFirstName] = useState('John')
  const [lastName, setLastName] = useState('Doe')
  const [gender, setGender] = useState('male')
  const [phoneNumber, setPhoneNumber] = useState('0123456789')
  const [dateOfBirth, setDateOfBirth] = useState('1990-01-01')
  const [location, setLocation] = useState('Accra')
  const [gmcId, setGmcId] = useState('')
  const [address, setAddress] = useState('')
  const [insuranceNumber, setInsuranceNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Add validation here
    console.log('Form submitted!')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Sign Up</h1>
        <p className="text-lg text-gray-600">iMedic PHARMACY</p>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="flex space-x-4">
          <div className="w-full">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-full">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-full">
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              id="dateOfBirth"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
required
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-full">
          <label htmlFor="gmcId" className="block text-sm font-medium text-gray-700">
            GMC ID
          </label>
          <input
            id="gmcId"
            type="text"
            value={gmcId}
            onChange={(e) => setGmcId(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="w-full">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-full">
          <label htmlFor="insuranceNumber" className="block text-sm font-medium text-gray-700">
            Insurance Number
          </label>
          <input
            id="insuranceNumber"
            type="text"
            value={insuranceNumber}
            onChange={(e) => setInsuranceNumber(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-full">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-blue-500 text-white hover:bg-blue-700"
      >
        Sign Up
      </button>
    </form>
  </div>
)
}

export default Signup;
'use client'

import { useState } from 'react'
import { X, CheckCircle2 } from 'lucide-react'

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  courseName?: string
}

export function EnquiryModal({ isOpen, onClose, courseName }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occupation: 'Student',
    studentYear: '',
    employeeDetails: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    try {
      if (SCRIPT_URL && SCRIPT_URL !== 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify({
            ...formData,
            course: courseName
          }),
        })
        setSubmitted(true)
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Submission simulated:', { ...formData, course: courseName })
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Submission failed:', error)
      alert('Network error. Please check your internet or script URL.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuccessClose = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-background rounded-2xl shadow-2xl overflow-hidden border border-border animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="p-6 border-b border-border flex justify-between items-center bg-blue-600 text-white">
          <div>
            <h2 className="text-xl font-bold">Enquire Now</h2>
            <p className="text-blue-100 text-sm">{courseName || 'General Inquiry'}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-blue-700 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-6">
              <div className="flex justify-center">
                <CheckCircle2 size={64} className="text-green-500 animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                <p className="text-muted-foreground">Your enquiry has been sent successfully. We will get back to you shortly.</p>
              </div>
              <button
                onClick={handleSuccessClose}
                className="w-full py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/20"
              >
                Okay
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500"
                    placeholder="10-digit number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">You are a:</label>
                <div className="flex gap-4">
                  {['Student', 'Employee'].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="occupation"
                        value={opt}
                        checked={formData.occupation === opt}
                        onChange={handleInputChange}
                        className="text-blue-600"
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.occupation === 'Student' ? (
                <div>
                  <label className="block text-sm font-semibold mb-2">Year of Study *</label>
                  <select
                    name="studentYear"
                    required
                    value={formData.studentYear}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-semibold mb-2">Designation / Experience</label>
                  <input
                    type="text"
                    name="employeeDetails"
                    value={formData.employeeDetails}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Software Engineer"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-blue-500"
                  placeholder="Any specific questions?"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all disabled:bg-blue-400"
              >
                {isLoading ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

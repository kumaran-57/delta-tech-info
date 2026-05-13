'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    course: '',
    occupation: 'Student',
    studentYear: '',
    employeeDetails: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    try {
      if (SCRIPT_URL && SCRIPT_URL !== 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
        // We use mode: 'no-cors' to avoid preflight issues with Google Scripts
        await fetch(SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(formData),
        })
        
        // With no-cors, we can't check response.ok, but if it doesn't throw, it's sent
        setSubmitted(true)
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Form submitted (simulated):', formData)
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Submission failed:', error)
      alert('Network error. Please check your internet or script URL.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      course: '',
      occupation: 'Student',
      studentYear: '',
      employeeDetails: '',
      message: ''
    })
    setSubmitted(false)
  }

  const courses = [
    'Select a Course',
    'Data Science',
    'Machine Learning',
    'Programming Languages (C, Python, Java, C++)',
    'Full Stack Development',
    'Networking',
    'Cloud Computing (AWS)'
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['Rahul: 7400472116', 'Samrat: 8928363806'],
      link: 'tel:'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['New Panvel', 'Navi Mumbai', 'Maharashtra'],
      link: null
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Friday: 10:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      link: null
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Get in touch with us to learn more about our courses and start your journey with Delta Tech Info.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="p-6 rounded-lg bg-card border border-border">
                  <Icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{info.title}</h3>
                  <ul className="space-y-2">
                    {info.details.map((detail, idx) => {
                      const isPhone = info.link && (detail.includes('Rahul') || detail.includes('Samrat'))
                      const phoneNumber = detail.match(/\d+/)?.[0]

                      return (
                        <li key={idx} className="text-muted-foreground">
                          {isPhone && phoneNumber ? (
                            <a
                              href={`${info.link}${phoneNumber}`}
                              className="text-blue-600 hover:text-blue-700 transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div id="enquiry-form" className="lg:col-span-2">
            {submitted ? (
              <div className="mb-6 p-8 bg-green-50 border border-green-200 rounded-lg text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-green-600 animate-bounce" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-green-800 text-2xl font-bold">Thank you for contacting us!</p>
                  <p className="text-green-700">We&apos;ll get back to you soon.</p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-all"
                >
                  Okay
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-lg bg-card border border-border animate-in slide-in-from-right-10 duration-700">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="10-digit phone number"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enquiry, Demo, Admission, etc."
                  />
                </div>

                {/* Course Selection */}
                <div>
                  <label htmlFor="course" className="block text-sm font-semibold text-foreground mb-2">
                    Interested Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {courses.map((course, index) => (
                      <option key={index} value={index === 0 ? '' : course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Occupation */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    You are a:
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="occupation"
                        value="Student"
                        checked={formData.occupation === 'Student'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-foreground">Student</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="occupation"
                        value="Employee"
                        checked={formData.occupation === 'Employee'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-foreground">Employee</span>
                    </label>
                  </div>
                </div>

                {/* Conditional Fields based on Occupation */}
                {formData.occupation === 'Student' ? (
                  <div>
                    <label htmlFor="studentYear" className="block text-sm font-semibold text-foreground mb-2">
                      Year of Study *
                    </label>
                    <select
                      id="studentYear"
                      name="studentYear"
                      value={formData.studentYear}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="employeeDetails" className="block text-sm font-semibold text-foreground mb-2">
                      Designation / Experience
                    </label>
                    <input
                      type="text"
                      id="employeeDetails"
                      name="employeeDetails"
                      value={formData.employeeDetails}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. Software Engineer, 2 years"
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us more about your enquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                We typically respond within 24 hours. For urgent inquiries, please call us directly.
              </p>
            </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What are the prerequisites for joining a course?',
                a: 'Most beginner courses require basic computer knowledge. For advanced courses, relevant intermediate knowledge is helpful. We offer personalized guidance for every student.'
              },
              {
                q: 'Do you offer job placement assistance?',
                a: 'Yes! We provide 100% placement support including interview preparation, resume building, and job referrals.'
              },
              {
                q: 'What is the course duration?',
                a: 'Courses range from 10-18 weeks depending on the level and subject. We offer flexible batch timings to suit your schedule.'
              },
              {
                q: 'Are certifications recognized by industry?',
                a: 'Yes, our certifications are industry-recognized and valued by employers. Many of our students have landed jobs at top IT companies.'
              },
              {
                q: 'Can I switch courses after enrollment?',
                a: 'Yes, with prior approval from our course directors. We understand that preferences might change and want to support your learning goals.'
              },
              {
                q: 'What payment options do you offer?',
                a: 'We offer flexible payment plans including lump sum, installment options, and EMI. Contact us to discuss what works best for you.'
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="p-6 rounded-lg bg-background border border-border group cursor-pointer"
              >
                <summary className="font-semibold text-foreground text-lg list-none flex items-center justify-between">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180">
                    ↓
                  </span>
                </summary>
                <p className="text-muted-foreground mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

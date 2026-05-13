'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Download, Clock, Users } from 'lucide-react'
import { EnquiryModal } from '@/components/enquiry-modal'

const coursesData = [
  {
    id: 'cloud-computing',
    name: 'Cloud Computing Domain',
    category: 'cloud-computing',
    description: 'Comprehensive cloud training covering IaaS, PaaS, SaaS, architecture, and security across major platforms.',
    levels: [
      { name: 'Basic', duration: '2 Month', details: 'Fundamentals, Overview, and Introduction to Cloud' },
      { name: 'Intermediate', duration: '3 Months', details: 'HR Training, Architecture, IaaS, and PaaS' },
      { name: 'Advance', duration: '5 Month', details: 'HR Training, Internship, Placement Assistance, SaaS, Service Management, and Security' }
    ],
    icon: '☁️',
    syllabus: [
      { title: 'Fundamentals & Overview', topics: ['Computing paradigms (Grid, Cluster, Distributed, Utility, Cloud)', 'Evolution of cloud computing', 'Business drivers'] },
      { title: 'Introduction to Cloud', topics: ['NIST model', 'Characteristics, advantages & disadvantages', 'Cloud vs Grid vs Cluster computing', 'Open standards'] },
      { title: 'Architecture', topics: ['Cloud architecture vs traditional architecture', 'Service models: IaaS, PaaS, SaaS', 'Deployment models: Public, Private, Hybrid, Community'] },
      { title: 'IaaS', topics: ['Virtualization, Hypervisors, VMs', 'Resource virtualization (Server, Storage, Network)', 'Examples: Amazon EC2, Eucalyptus'] },
      { title: 'PaaS', topics: ['SOA (Service-Oriented Architecture)', 'Platforms & management', 'Examples: Google App Engine, Microsoft Azure, Force.com'] },
      { title: 'SaaS', topics: ['Web services, Web 2.0, Web OS', 'SaaS case studies'] },
      { title: 'Service Management', topics: ['SLA, Billing, Scaling', 'Data management & processing'] },
      { title: 'Cloud Security', topics: ['Infrastructure, Data, Identity security', 'Authentication & access control', 'Risk & trust models'] },
      { title: 'Case Studies', topics: ['Azure, Amazon EC2, Eucalyptus'] }
    ]
  },
  {
    id: 'networking-ccna',
    name: 'Networking (CCNA) Domain',
    category: 'networking',
    description: 'Master the fundamentals of networking, from OSI models to advanced routing, switching, and security with Cisco devices.',
    levels: [
      { name: 'Basic', duration: '2 Month', details: 'Networking Basics, TCP/IP, and Subnetting' },
      { name: 'Intermediate', duration: '3 Months', details: 'HR Training, Cisco Devices, Network Management, and Routing' },
      { name: 'Advance', duration: '5 Month', details: 'HR Training, Internship, Placement Assistance, Switching, VLANs, Security, and WAN' }
    ],
    icon: '🔌',
    syllabus: [
      { title: 'Networking Basics', topics: ['Internetworking concepts', 'OSI Model, Ethernet, Cabling', 'Data encapsulation'] },
      { title: 'TCP/IP', topics: ['IP addressing', 'Broadcast concepts'] },
      { title: 'Subnetting', topics: ['VLSM, summarization', 'Troubleshooting IP'] },
      { title: 'Cisco Devices', topics: ['IOS, CLI', 'Router & switch configuration'] },
      { title: 'Network Management', topics: ['Router internals & boot process', 'Backup & restore', 'CDP, Telnet, troubleshooting'] },
      { title: 'Routing', topics: ['Static & dynamic routing', 'RIP, IGRP', 'EIGRP & OSPF'] },
      { title: 'Switching', topics: ['Layer 2 switching', 'Spanning Tree Protocol'] },
      { title: 'VLANs', topics: ['VLAN setup & configuration', 'Inter-VLAN routing', 'Voice VLANs'] },
      { title: 'Security', topics: ['Firewalls, threats', 'Access control lists (ACLs)'] },
      { title: 'NAT & IPv6', topics: ['NAT types & configuration', 'IPv6 addressing & migration'] },
      { title: 'WAN', topics: ['PPP, HDLC, Frame Relay', 'VPNs'] }
    ]
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis & Visualization Domain',
    category: 'data-analysis',
    description: 'A holistic approach to data using Excel, Python, Power BI, and Tableau for powerful insights.',
    levels: [
      { name: 'Basic', duration: '2 Month', details: 'Excel Fundamentals and Power Query' },
      { name: 'Intermediate', duration: '3 Months', details: 'HR Training, Python for Data Analysis, and Data Cleaning' },
      { name: 'Advance', duration: '5 Month', details: 'HR Training, Internship, Placement Assistance, Power BI, and Tableau' }
    ],
    icon: '📊',
    syllabus: [
      { title: 'Python (Data Analysis)', topics: ['Pandas DataFrame', 'Data cleaning', 'Data visualization'] },
      { title: 'Power BI', topics: ['Data connection (web sources)', 'Data transformation', 'Report publishing'] },
      { title: 'Excel', topics: ['Power Query', 'Data cleaning', 'Pivot tables & charts'] },
      { title: 'Tableau', topics: ['Data connection & joins', 'Data cleaning', 'Visualization & dashboards'] }
    ]
  },
  {
    id: 'tableau-specialized',
    name: 'Tableau (Specialized Domain)',
    category: 'data-analysis',
    description: 'Deep dive into Tableau for advanced data visualization, storytelling, and complex analytics.',
    levels: [
      { name: 'Basic', duration: '2 Month', details: 'Tableau Basics and Installation' },
      { name: 'Intermediate', duration: '3 Months', details: 'HR Training, Visualization Techniques, and Dashboards' },
      { name: 'Advance', duration: '5 Month', details: 'HR Training, Internship, Placement Assistance, Advanced Features, and Analytics' }
    ],
    icon: '📈',
    syllabus: [
      { title: 'Basics', topics: ['Tableau installation', 'Connecting datasets'] },
      { title: 'Visualization', topics: ['Bar, Pie, Area, Scatter, Maps, Treemaps'] },
      { title: 'Advanced Features', topics: ['Dashboards & Storylines', 'Data blending & joins', 'Calculated fields & table calculations', 'Parameters & filters', 'Dual axis charts'] },
      { title: 'Advanced Concepts', topics: ['Time series analysis', 'Data extracts', 'Aggregation & granularity', 'Hierarchies & actions'] }
    ]
  },
  {
    id: 'python-ml',
    name: 'Python + Machine Learning Domain',
    category: 'machine-learning',
    description: 'Master Machine Learning lifecycle using Python, from data preprocessing to advanced supervised and unsupervised learning.',
    levels: [
      { name: 'Basic', duration: '2 Month', details: 'Python Basics for Data and Visualization' },
      { name: 'Intermediate', duration: '3 Months', details: 'HR Training, ML Lifecycle, and Supervised Learning' },
      { name: 'Advance', duration: '5 Month', details: 'HR Training, Internship, Placement Assistance, Classification, and Unsupervised Learning' }
    ],
    icon: '🤖',
    syllabus: [
      { title: 'Python Basics for Data', topics: ['NumPy (arrays, indexing)', 'Pandas (ETL, merging, pivoting)'] },
      { title: 'Visualization', topics: ['Matplotlib & Seaborn', 'Line, bar, histogram, scatter plots'] },
      { title: 'Machine Learning', topics: ['ML lifecycle', 'Data preprocessing'] },
      { title: 'Supervised Learning', topics: ['Linear regression (simple & multiple)', 'Polynomial regression'] },
      { title: 'Classification', topics: ['Logistic regression', 'KNN, SVM'] },
      { title: 'Unsupervised Learning', topics: ['K-Means clustering'] },
      { title: 'Advanced ML Concepts', topics: ['Random Forest', 'Overfitting & underfitting', 'Gradient descent', 'Feature selection & regularization'] }
    ]
  },
  {
    id: 'core-python',
    name: 'Core Python (Basic + Advanced) Domain',
    category: 'programming',
    description: 'The ultimate Python guide covering everything from syntax to advanced multithreading, GUI, and Web programming.',
    levels: [
      { name: 'Basic', duration: '2 Month', details: 'Python Syntax, Variables, and Data Structures' },
      { name: 'Intermediate', duration: '3 Months', details: 'HR Training, Functions, Modules, and File Handling' },
      { name: 'Advance', duration: '5 Month', details: 'HR Training, Internship, Placement Assistance, OOP, and Advanced Topics' }
    ],
    icon: '🐍',
    syllabus: [
      { title: 'Basics', topics: ['Syntax, variables, data types', 'Operators & control statements'] },
      { title: 'Data Structures', topics: ['Strings, Lists, Tuples, Dictionaries'] },
      { title: 'Functions & Modules', topics: ['Function types & arguments', 'Modules & packages'] },
      { title: 'File Handling & Exceptions', topics: ['File I/O', 'Exception handling'] },
      { title: 'OOP', topics: ['Classes, inheritance', 'Overloading, overriding'] },
      { title: 'Advanced Topics', topics: ['Regular expressions', 'Database connectivity', 'Networking (sockets)', 'Multithreading'] },
      { title: 'GUI & Web', topics: ['Tkinter GUI', 'CGI programming', 'Email handling'] }
    ]
  }
]

const categories = [
  { id: 'all', name: 'All Domains' },
  { id: 'cloud-computing', name: 'Cloud Computing' },
  { id: 'networking', name: 'Networking (CCNA)' },
  { id: 'data-analysis', name: 'Data Analysis' },
  { id: 'machine-learning', name: 'Machine Learning' },
  { id: 'programming', name: 'Core Python' }
]

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>()

  const handleEnquireClick = (courseName: string) => {
    setSelectedCourse(courseName)
    setIsModalOpen(true)
  }

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-border animate-fade-in">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">Our Courses</h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up animate-delay-100">
            Explore our comprehensive range of IT and technical courses designed to transform your career.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0 animate-slide-up">
            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-bold border border-blue-100"
              >
                <span>{isFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
                <span className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`}>↓</span>
              </button>
            </div>

            {/* Category Filter */}
            <div className={`sticky top-24 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
              <h3 className="font-bold text-lg mb-4 text-foreground hidden lg:block">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id)
                      setIsFilterOpen(false) // Close on mobile after selection
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'bg-card border border-border hover:border-blue-500 text-foreground'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-8 animate-fade-in">
              <p className="text-muted-foreground">
                Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Courses Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className="p-6 rounded-lg bg-card border border-border hover:border-blue-500 hover:shadow-lg transition-all flex flex-col h-full animate-zoom-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{course.icon}</div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{course.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{course.description}</p>

                    {/* Course Levels */}
                    <div className="space-y-3 mb-6">
                      <p className="text-sm font-bold text-foreground">Available Levels:</p>
                      <div className="grid grid-cols-1 gap-2">
                        {course.levels.map((level, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-muted/50 border border-border text-xs">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-bold text-blue-600">{level.name}</span>
                              <span className="text-muted-foreground flex items-center gap-1">
                                <Clock size={12} /> {level.duration}
                              </span>
                            </div>
                            <p className="text-muted-foreground italic">{level.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Syllabus Preview */}
                    <div className="mb-6 flex-grow">
                      <p className="text-sm font-bold text-foreground mb-3">Topics Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {course.syllabus.map((section, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-[10px] font-medium border border-blue-100">
                            {section.title}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3 mt-auto relative z-10">
                      <button
                        onClick={() => handleEnquireClick(course.name)}
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No courses found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchTerm('')
                  }}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName={selectedCourse}
      />
    </main>
  )
}

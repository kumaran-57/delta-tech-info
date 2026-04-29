import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Award, Users, Briefcase, BookOpen } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Earn recognized certifications that boost your career prospects and market value.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of hands-on experience in their fields.'
    },
    {
      icon: Briefcase,
      title: '100% Placement Support',
      description: 'Comprehensive job assistance and interview preparation for career success.'
    },
    {
      icon: BookOpen,
      title: 'Practical Training',
      description: 'Hands-on projects and real-world scenarios to build actual marketable skills.'
    }
  ]

  const courses = [
    {
      id: 'data-science',
      name: 'Data Science',
      description: 'Learn data analysis, visualization, and decision-making with Python and advanced tools.',
      category: 'data-science',
      icon: '📊'
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      description: 'Master ML algorithms, deep learning, and build intelligent predictive models.',
      category: 'machine-learning',
      icon: '🤖'
    },
    {
      id: 'programming-c',
      name: 'Programming Languages (C, Python, Java, C++)',
      description: 'Master fundamental to advanced programming concepts across multiple languages.',
      category: 'programming',
      icon: '💻'
    },
    {
      id: 'full-stack',
      name: 'Full Stack Development',
      description: 'Build complete web applications with modern frontend and backend technologies.',
      category: 'full-stack',
      icon: '🌐'
    },
    {
      id: 'networking',
      name: 'Networking',
      description: 'Understand network infrastructure, protocols, and security fundamentals.',
      category: 'networking',
      icon: '🔌'
    },
    {
      id: 'cloud-aws',
      name: 'Cloud Computing (AWS)',
      description: 'Deploy and manage applications on Amazon Web Services cloud platform.',
      category: 'cloud-computing',
      icon: '☁️'
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden animate-fade-in">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Launch Your <span className="text-blue-600">Tech Career</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Discover your path to success with Delta Tech Info. Industry-expert training in Data Science, Machine Learning, Full Stack Development, Cloud Computing, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                  Explore Courses
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-slide-up">
            Why Choose <span className="text-blue-600">Delta Tech Info?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index} 
                  className="p-6 rounded-lg bg-background border border-border hover:border-blue-500 transition-colors animate-zoom-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 md:py-24 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Our <span className="text-blue-600">Featured Courses</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Comprehensive training programs designed to make you industry-ready with practical skills and certifications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Link key={course.id} href={`/courses?category=${course.category}`}>
                <div 
                  className="h-full p-6 rounded-lg bg-card border border-border hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{course.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                  <div className="inline-block text-blue-600 font-semibold text-sm">
                    Explore Course →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-slide-up animate-delay-300">
            <Link href="/courses">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View All Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white animate-slide-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join hundreds of students who have transformed their careers with Delta Tech Info.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Enquire Now
              </button>
            </Link>
            <Link href="/courses">
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Browse Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const achievements = [
    { number: '500+', label: 'Students Trained' },
    { number: '85%', label: 'Placement Rate' },
    { number: '6', label: 'Specialized Courses' },
    { number: '100%', label: 'Placement Support' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower IT professionals with cutting-edge skills and knowledge, enabling them to excel in their careers and contribute meaningfully to the technology industry.'
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'To become the leading IT training institute in Maharashtra, recognized for quality education, expert instruction, and 100% placement support.'
    },
    {
      icon: TrendingUp,
      title: 'Values',
      description: 'Excellence, integrity, student-centric approach, practical learning, industry relevance, and commitment to continuous improvement drive everything we do.'
    }
  ]

  const team = [
    {
      name: 'Rahul',
      role: 'Director & Lead Instructor',
      expertise: 'Full Stack Development, Cloud Computing',
      contact: '7400472116'
    },
    {
      name: 'Samrat',
      role: 'Course Director & Mentor',
      expertise: 'Data Science, Machine Learning',
      contact: '8928363806'
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Delta Tech Info</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Empowering the next generation of IT professionals through quality education and career guidance.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="p-8 rounded-lg bg-card border border-border hover:border-blue-500 transition-colors">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</p>
                <p className="text-blue-100 text-lg">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Why Choose Delta Tech Info?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              'Industry Expert Instructors with 10+ years of experience',
              '100% Placement Support and Career Guidance',
              'Hands-on Projects and Real-World Scenarios',
              'Comprehensive Course Coverage from Basics to Advanced',
              'Flexible Batch Timings to Suit Your Schedule',
              'Affordable Training Without Compromising Quality',
              'Regular Doubt-Clearing Sessions and Mentoring',
              'Post-Training Support and Job Assistance'
            ].map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-foreground text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="p-8 rounded-lg bg-background border border-border hover:border-blue-500 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.expertise}</p>
                <p className="text-foreground font-semibold">
                  <a href={`tel:${member.contact.replace(/\D/g, '')}`} className="text-blue-600 hover:text-blue-700">
                    {member.contact}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Our Story</h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Delta Tech Info was founded with a simple yet powerful mission: to bridge the gap between academic knowledge and industry requirements. We recognized that many talented individuals were struggling to secure IT jobs not because of lack of intelligence, but because of lack of practical, industry-relevant skills.
            </p>
            <p>
              Our founders, Rahul and Samrat, brought years of professional experience and a passion for teaching to create a training institute that focuses on what truly matters: real-world skills, hands-on experience, and career support.
            </p>
            <p>
              Today, we have successfully trained 500+ students in Data Science, Machine Learning, Programming Languages, Full Stack Development, Networking, and Cloud Computing. Our pride lies not just in the number of students trained, but in the successful placements achieved and the careers transformed.
            </p>
            <p>
              With our 85% placement rate and comprehensive job assistance program, we continue to help students realize their potential and achieve their career goals in the thriving IT industry.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Visit Us</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-2xl font-semibold text-foreground mb-4">New Panvel, Navi Mumbai, Maharashtra</p>
            <p className="text-lg text-muted-foreground mb-8">
              We&apos;re conveniently located in New Panvel for easy access. Visit us to get a personal tour of our facilities and meet with our instructors.
            </p>
            <div className="space-y-4">
              <p className="flex justify-center items-center gap-3 text-foreground">
                <span className="font-semibold">📞 Rahul:</span>
                <a href="tel:7400472116" className="text-blue-600 hover:text-blue-700">
                  7400472116
                </a>
              </p>
              <p className="flex justify-center items-center gap-3 text-foreground">
                <span className="font-semibold">📞 Samrat:</span>
                <a href="tel:8928363806" className="text-blue-600 hover:text-blue-700">
                  8928363806
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

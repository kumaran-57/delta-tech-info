'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Delta Tech Info Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-slate-300 text-sm">Empowering professionals with cutting-edge IT skills and industry certifications.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-lg mb-4">Domains</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link href="/courses" className="hover:text-white transition-colors">Cloud Computing</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Networking (CCNA)</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Data Analysis</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Machine Learning</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Rahul: 7400472116</p>
                  <p>Samrat: 8928363806</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>New Panvel, Navi Mumbai, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-300 text-sm">© {new Date().getFullYear()} Delta Tech Info. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-slate-300">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

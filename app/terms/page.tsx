'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <p>Welcome to Delta Tech Info. By accessing our website and enrolling in our courses, you agree to comply with the following terms and conditions.</p>
          
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Course Enrollment</h2>
            <p>Enrollment in any course is subject to availability and payment of the required fees. Delta Tech Info reserves the right to refuse admission to any individual.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Intellectual Property</h2>
            <p>All course materials, including videos, documents, and code samples provided during training, are the intellectual property of Delta Tech Info and are for personal use only. Redistribution or commercial use is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Conduct</h2>
            <p>Students are expected to maintain professional conduct during training sessions. Any form of harassment or disruptive behavior may lead to immediate termination of enrollment without refund.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitation of Liability</h2>
            <p>Delta Tech Info shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our training services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Navi Mumbai, Maharashtra.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

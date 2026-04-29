'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Refund Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <div className="p-6 bg-red-50 border-l-4 border-red-500 text-red-700 font-bold mb-8">
            Important: Delta Tech Info maintains a strict "No Refund" policy for all course enrollments.
          </div>
          
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Enrollment Fees</h2>
            <p>Once a student has enrolled and paid the course fees (either in full or as an initial installment), the amount is non-refundable and non-transferable under any circumstances.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Commitment to Training</h2>
            <p>Our resources, faculty time, and training materials are allocated immediately upon enrollment. As such, we cannot offer refunds for cancellations or withdrawals.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Course Rescheduling</h2>
            <p>In the rare event that Delta Tech Info cancels a course batch, students will be offered an alternative batch timing or a credit towards a future course of equal value. No cash refunds will be issued.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Acknowledgement</h2>
            <p>By proceeding with the payment and enrollment, you acknowledge that you have read, understood, and agreed to this No-Refund Policy.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

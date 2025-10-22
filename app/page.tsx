import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import DemoForm from '@/components/DemoForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Features />
      <Benefits />
      <DemoForm />
      <Footer />
    </main>
  )
}

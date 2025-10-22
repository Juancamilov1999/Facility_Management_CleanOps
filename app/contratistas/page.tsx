import HeroContractor from '@/components/contractor/HeroContractor'
import ProblemSolutionContractor from '@/components/contractor/ProblemSolutionContractor'
import FeaturesContractor from '@/components/contractor/FeaturesContractor'
import BenefitsContractor from '@/components/contractor/BenefitsContractor'
import DemoFormContractor from '@/components/contractor/DemoFormContractor'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'CleanOps para Contratistas - Gestiona tu operación con eficiencia',
  description:
    'La plataforma que los contratistas de Facility Management necesitan para controlar operaciones, gestionar personal y generar reportes automáticos.',
}

export default function ContratistasPage() {
  return (
    <main className="min-h-screen">
      <HeroContractor />
      <ProblemSolutionContractor />
      <FeaturesContractor />
      <BenefitsContractor />
      <DemoFormContractor />
      <Footer />
    </main>
  )
}

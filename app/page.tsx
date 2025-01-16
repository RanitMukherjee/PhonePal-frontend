import Header from '../components/Header'
import LandingSection from '../components/LandingSection'
import FeaturesSection from '../components/FeaturesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'
import { BackgroundBeams } from "../components/ui/background-beams"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <BackgroundBeams />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <LandingSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}


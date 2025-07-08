import HeroSection from "@/components/HeroSection"
import LogosSection from "@/components/LogosSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import FeaturesSection from "@/components/FeaturesSection"
import DemoSection from "@/components/DemoSection"
import PricingSection from "@/components/PricingSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LogosSection />
      <HowItWorksSection />
      <FeaturesSection />
      <DemoSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

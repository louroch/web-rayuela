import { HeroSection } from "@/components/ui/hero-section"
import { ManifestoSection } from "@/components/ui/manifesto-section"
import { ServicesSection } from "@/components/ui/services-section"
import { ProcessSection } from "@/components/ui/process-section"
import { TestimonialsSection } from "@/components/ui/testimonials-section"
import { ContactForm } from "@/components/ui/contact-form"

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <ManifestoSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactForm />
    </main>  
  )
}
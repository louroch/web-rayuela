import { HeroSection } from "@/components/ui/hero-section"
import { Features } from "@/components/ui/features"
import { Clients } from "@/components/ui/clients"
import { ContactForm } from "@/components/ui/contact-form"

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <Features />
      <Clients />
      <ContactForm />
    </main>  
  )
}
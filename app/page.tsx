import { HeroSection } from "@/components/ui/hero-section"
import { Features } from "@/components/ui/features"
import { Clients } from "@/components/ui/clients"
import { ContactForm } from "@/components/ui/contact-form"
import Image from 'next/image'

export default function Home() {
  // Check if maintenance mode is enabled
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true'

  // If in maintenance mode, show maintenance page
  if (isMaintenanceMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#21211F] to-[#9966FF] flex items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Estamos trabajando para usted
          </h1>
          <div className="flex justify-center mb-8">
            <Image
              src="/assets/mantenimiento.png"
              alt="Mantenimiento"
              width={400}
              height={400}
              className="animate-pulse"
            />
          </div>
          <p className="text-xl md:text-2xl text-gray-200">
            Estamos mejorando nuestro sitio web para brindarte una mejor experiencia.
            <br />
            <span className="text-sm text-gray-300 mt-4 block">
              Volveremos pronto
            </span>
          </p>
        </div>
      </div>
    )
  }

  // Normal home page
  return (
    <main className="flex-grow">
      <HeroSection />
      <Features />
      <Clients />
      <ContactForm />
    </main>  
  )
}
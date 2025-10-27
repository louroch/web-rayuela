import { HeroSection } from "@/components/ui/hero-section"
import { Features } from "@/components/ui/features"
import { Clients } from "@/components/ui/clients"
import { ContactForm } from "@/components/ui/contact-form"

export default function Home() {
  // Check if maintenance mode is enabled
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true'

  // If in maintenance mode, show maintenance page
  if (isMaintenanceMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#21211F] to-[#9966FF] flex items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Estamos renovando nuestro sitio
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Pronto podrás disfrutar de una experiencia mejorada.
          </p>
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={"/assets/mantenimiento.png"}
              alt="Mantenimiento"
              width={300}
              height={300}
              className="animate-pulse"
              loading="eager"
              onError={(e) => {
                console.error("Error loading image:", e);
                e.currentTarget.src = "/assets/mantenimiento.png";
              }}
            />
          </div>
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
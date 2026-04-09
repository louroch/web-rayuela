'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function Features() {
  const features = [
    {
      title: "Personalización Radical",
      description:
        "Aquí no existe el \"Plan Básico, Medio o Premium\". Existe el Plan Vos. Nos sentamos, analizamos tu situación actual y diseñamos una solución específica. Si no necesitas TikTok, no te vendemos TikTok. Si necesitas una valla publicitaria, ahí estaremos.",
    },
    {
      title: "Agilidad 2026",
      description:
        "El mercado actual no perdona la lentitud. Somos un equipo fluido que combina la ética profesional con la frescura de la innovación constante. Aprendemos, aplicamos y evolucionamos con vos.",
    },
    {
      title: "Resultados, no Promesas",
      description:
        "Transparencia absoluta desde el casillero 1. Trabajamos con métricas claras y objetivos tangibles. No vendemos humo, vendemos el resultado de un trabajo bien hecho.",
    },
  ]

  return (
    <section className="relative py-16 bg-gradient-to-br from-[#7433FE] via-[#9966FF] to-[#8BC1A7] overflow-hidden">
      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Por qué tu juego es distinto con nosotros?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8BC1A7] to-[#9966FF] mx-auto rounded-full" />
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="group relative h-full flex flex-col bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9966FF]/20 to-[#8BC1A7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9966FF] group-hover:to-[#8BC1A7] transition-all duration-300">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 flex-grow">
                      <p className="text-white/90 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-20">
            <CarouselPrevious className="relative left-4 bg-white/20 hover:bg-white/30 border-white/30 text-white backdrop-blur-xl" />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20">
            <CarouselNext className="relative right-4 bg-white/20 hover:bg-white/30 border-white/30 text-white backdrop-blur-xl" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}


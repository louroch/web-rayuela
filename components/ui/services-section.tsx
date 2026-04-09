'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const services = [
  {
    title: "El Terreno Digital",
    subtitle: "Web & Posicionamiento",
    description: "No hacemos webs solo para que \"estén\". Desarrollamos ecosistemas digitales intuitivos y posicionamos tu marca donde tiene que ser vista. Si no convierte, no sirve.",
    imageSrc: "/svgs/Marca 360 .svg",
    href: "/servicios/desarrollo-web",
    color: "from-[#9966FF] to-[#8BC1A7]"
  },
  {
    title: "Experiencias Tangibles",
    subtitle: "Papelería, Vía Pública & Eventos",
    description: "Volvimos a enamorarnos de lo que se puede tocar. Desde el diseño de una papelería que transmite calidad al tacto, hasta campañas en vía pública y eventos que dejan huella en la memoria, no solo en el feed.",
    imageSrc: "/svgs/Marca 361 .svg",
    href: "/servicios/diseno-grafico",
    color: "from-[#8BC1A7] to-[#9966FF]"
  },
  {
    title: "Gestión de Proyectos",
    subtitle: "Project Management",
    description: "La creatividad sin orden es solo ruido. Gestionamos tu proyecto de punta a punta, coordinando recursos, tiempos y objetivos. Vos traés la visión, nosotros ponemos la estructura para que suceda.",
    imageSrc: "/svgs/Marca 362 .svg",
    href: "/servicios/consultoria",
    color: "from-[#9966FF] to-[#8BC1A7]"
  },
  {
    title: "Contenido & Social",
    subtitle: "La voz del juego",
    description: "Estrategias de contenido que dialogan, no que monologan. Adaptamos el mensaje para generar lealtad y resultados medibles, huyendo del \"posteo por rellenar\".",
    imageSrc: "/svgs/MArca 363 .svg",
    href: "/servicios/social-media",
    color: "from-[#8BC1A7] to-[#9966FF]"
  },
]

type Service = (typeof services)[number]

const navButtonClass =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-[#9966FF]/50 hover:bg-[#9966FF]/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9966FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#21211F]'

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={service.href} className="block h-full">
      <div className="group flex h-full min-h-[420px] flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#9966FF]/30 transition-all duration-300 hover:-translate-y-2 sm:min-h-[440px]">
        <div className="mb-6 flex h-32 flex-shrink-0 items-end group-hover:scale-110 transition-transform duration-300">
          <img
            src={encodeURI(service.imageSrc)}
            alt={service.title}
            className="max-h-full w-auto object-contain object-left"
          />
        </div>
        <h3 className="mb-1 flex-shrink-0 text-2xl font-bold text-white transition-colors group-hover:text-[#9966FF]">
          {service.title}
        </h3>
        <p className="mb-3 flex-shrink-0 text-sm text-[#8BC1A7]">{service.subtitle}</p>
        <p className="flex-1 text-gray-400 leading-relaxed">{service.description}</p>
      </div>
    </Link>
  )
}

function ServicesMobileCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y [-webkit-tap-highlight-color:transparent] gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="min-w-0 shrink-0 grow-0 basis-full"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={scrollPrev}
          className={navButtonClass}
          aria-label="Tarjeta anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className={navButtonClass}
          aria-label="Siguiente tarjeta"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="tu-marca-en-360" className="py-16 md:py-20 bg-[#21211F] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#9966FF]/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#8BC1A7]/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Tu marca en 360°: Del <span className="text-[#9966FF]">píxel</span> al <span className="text-[#8BC1A7]">papel</span>
          </h2>
        </motion.div>

        <ServicesMobileCarousel />

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Instagram, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Éramos una agencia en pleno crecimiento cuando comenzamos a trabajar en conjunto, fue muy útil para trazar estrategias y metodologías de trabajo, acciones y generación de contenido. Fue un acompañamiento de proyecto.',
    author: 'Ariel Frati',
    role: 'NextStage',
    instagram: 'https://www.instagram.com/nextstage.ar?igsh=MzVubjd3Z3h4ODBr',
  },
  {
    quote:
      'Cuando los contraté no tenía noción de qué contenido de valor podía crear para redes sociales, y hoy en día siento que hubo mucha creatividad para realmente crear contenido de valor.',
    author: 'Mariana Octaviano',
    role: 'InHouse',
    instagram: 'https://www.instagram.com/inhouse.elearning?igsh=MWdrejdzNjQybmpkNg==',
  },
  {
    quote:
      'Para una Fundación la presencia digital es clave, pues muchos proyectos te piden tener una página web para comprobar que existes. Trabajamos en equipo, dedicándole tiempo al desarrollo de la web, porque se trata de un producto sumamente personalizado. La atención al detalle, la capacidad de escucha y el acompañamiento incluso cuando la página ya estaba terminada fue sumamente valioso.',
    author: 'Fundación Expresar',
    instagram: 'https://www.instagram.com/expresarfundacion?igsh=MXg5YXR3MWozNGVmbQ==',
  },
  {
    quote:
      "Lograron posicionar al negocio en el cotidiano de la gente en medio de una transición competitiva brutal. El famoso 'si no estás en las redes no vendés'.",
    author: 'Agustín Luna',
    role: 'El Bajón del Yaggi',
    instagram: 'https://www.instagram.com/elbajondelyaggi?igsh=YzkzanJ2NzN6d3d5',
  },
  {
    quote:
      'Me ayudaron a mejorar, organizar y pensar mi identidad visual y estrategia de posicionamiento en redes para transmitir mejor mi mensaje.',
    author: 'Majo Romano Boscarino',
    instagram: 'https://www.instagram.com/majo_boscarino?igsh=aW1hOGt6Y2sxdWJ1',
  },
  {
    quote:
      'Muy profesionales. Valoro la preocupación por que lo que se haga funcione. Antes de ellos no tenía identidad visual.',
    author: 'El Bajón del Chenga',
    instagram: 'https://www.instagram.com/elbajondelchenga?igsh=MW5ob2M2Y2h2bjZwZQ==',
  },
  {
    quote:
      'Los hace diferente su pasión y los diferencia su entrega. Necesitaba crear una marca personal que represente mi trabajo y profesión pero que esté dividida en dos enfoques bien diferenciados.',
    author: 'Nova Gestión',
    instagram: 'https://www.instagram.com/novagestion.tuc?igsh=bmZnYm85cDIyMjJr',
  },
  {
    quote:
      'Necesitaba la identidad visual de mi marca. No tan solo me supieron interpretar, sino que los colores y las decisiones estéticas en su mayoría son tomadas a partir de la propuesta de Rayuela.',
    author: 'Fabrizio',
    role: 'Nerds',
    instagram: 'https://www.instagram.com/nerds.ar?igsh=a3RucThkb3Vlejh4',
  },
  {
    quote:
      'Necesitábamos que nuestra marca tenga una identidad visual. Con la información que les proporcionamos y la guía del equipo de Rayuela quedamos muy conformes con el logotipo de nuestra marca. Hace tres años que nuestra identidad visual crece. Muchas gracias, nos encanta su trabajo.',
    author: 'Gaby y Diego',
    role: 'Payacróbatas',
    instagram: 'https://www.instagram.com/payacrobatas?igsh=bHJ2bGg2bjE3YWww',
  },
] as const

const cardClassName = [
  'h-full flex flex-row md:flex-col rounded-2xl p-5 md:p-8 min-h-0 md:min-h-[300px] gap-4 md:gap-0',
  'bg-white/[0.05] backdrop-blur-sm border border-white/10',
  'transition-all duration-300 ease-out',
  'hover:-translate-y-1.5',
  'hover:border-[#9966FF]/45',
  'hover:shadow-[0_12px_40px_-12px_rgba(153,102,255,0.25)]',
  'hover:bg-white/[0.08]',
].join(' ')

function TestimonialCard({
  quote,
  author,
  role,
  instagram,
}: {
  quote: string
  author: string
  role?: string
  instagram?: string
}) {
  return (
    <article className={cardClassName}>
      <Quote className="h-6 w-6 md:h-8 md:w-8 text-[#9966FF] md:mb-5 flex-shrink-0 mt-1 md:mt-0" aria-hidden />
      <div className="flex flex-col flex-grow min-w-0">
        <p className="text-white text-[15px] md:text-lg leading-snug md:leading-relaxed mb-4 md:mb-6 flex-grow">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-auto pt-3 md:pt-4 border-t border-white/10 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <div className="font-semibold text-white truncate">{author}</div>
            {role ? <div className="text-sm text-[#8BC1A7]/90 mt-0.5 truncate">{role}</div> : null}
          </div>
          {instagram ? (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${role ?? author}`}
              className="inline-flex items-center justify-center h-9 w-9 shrink-0 rounded-full border border-white/15 text-white/90 hover:text-white hover:border-[#9966FF]/60 hover:bg-[#9966FF]/10 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          ) : null}
        </footer>
      </div>
    </article>
  )
}

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const autoplayPaused = useRef(false)

  useEffect(() => {
    if (!emblaApi) return
    const id = window.setInterval(() => {
      if (!autoplayPaused.current) emblaApi.scrollNext()
    }, 6000)
    return () => window.clearInterval(id)
  }, [emblaApi])

  return (
    <section id="testimonios" className="py-16 md:py-20 bg-[#21211F] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#9966FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#8BC1A7]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[42%_1fr] sm:grid-cols-[35%_1fr] md:grid-cols-[auto_minmax(0,1fr)] gap-x-3 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-8 lg:gap-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-start-1 col-end-2 row-start-1 row-end-2 md:row-span-2 self-end md:self-center mx-auto w-full max-w-[180px] sm:max-w-[220px] md:max-w-[min(36vw,320px)] lg:max-w-[300px] justify-self-center md:justify-self-start"
          >
            <img
              src={encodeURI('/svgs/Tincho.svg')}
              alt=""
              role="presentation"
              className="w-full h-auto max-h-[350px] md:max-h-[min(70vh,520px)] object-contain object-bottom md:object-left"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-start-2 col-end-3 row-start-1 row-end-2 self-center md:self-end min-w-0 text-left"
          >
            <h2 className="text-[1.75rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
              Lo que dicen <span className="text-[#9966FF] block sm:inline">nuestros clientes</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Testimonios reales de empresas que confiaron en nosotros
            </p>
          </motion.div>

          <div
            className="col-span-full md:col-span-1 md:col-start-2 md:row-start-2 relative min-w-0 md:self-start mt-4 md:mt-0"
          onMouseEnter={() => {
            autoplayPaused.current = true
          }}
          onMouseLeave={() => {
            autoplayPaused.current = false
          }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y [-webkit-tap-highlight-color:transparent] gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-full lg:basis-[calc((100%-1.5rem)/2)]"
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={'role' in testimonial ? testimonial.role : undefined}
                    instagram={'instagram' in testimonial ? testimonial.instagram : undefined}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-[#9966FF]/50 hover:bg-[#9966FF]/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9966FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#21211F]"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-[#9966FF]/50 hover:bg-[#9966FF]/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9966FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#21211F]"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

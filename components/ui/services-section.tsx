'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Aquí rompemos la barrera digital/física. Usamos íconos dinámicos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#9966FF]/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-6 h-32 flex items-end group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={encodeURI(service.imageSrc)} 
                      alt={service.title}
                      className="max-h-full w-auto object-contain object-left"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#9966FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#8BC1A7] mb-3">{service.subtitle}</p>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


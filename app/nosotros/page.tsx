'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface Feature {
  title: string
  description: string
  imageUrl: string
}

const features: Feature[] = [
  {
    title: "Experiencia personalizada",
    description: "Adaptamos nuestros servicios a las necesidades únicas de cada cliente.",
    imageUrl: "/svgs/elegirnos/experieciapersonalizada.svg"
  },
  {
    title: "Innovación",
    description: "Buscamos constantemente nuevas soluciones creativas en marketing digital.",
    imageUrl: "/svgs/elegirnos/innovacion.svg"
  },
  {
    title: "Colaboración",
    description: "Trabajamos en estrecha colaboración con nuestros clientes para lograr el éxito.",
    imageUrl: "/svgs/elegirnos/colaboracion.svg"
  },
  {
    title: "Ética",
    description: "Mantenemos altos estándares éticos en todas nuestras prácticas comerciales.",
    imageUrl: "/svgs/elegirnos/etica.svg"
  },
  {
    title: "Transparencia",
    description: "Fomentamos la confianza a través de una comunicación abierta y honesta.",
    imageUrl: "/svgs/elegirnos/Transparencia.svg"
  },
  {
    title: "Profesionalismo",
    description: "Nuestro equipo trabaja con integridad y compromiso en cada proyecto.",
    imageUrl: "/svgs/elegirnos/Profesionalismo.svg"
  },
  {
    title: "Aprendizaje continuo",
    description: "Nos mantenemos actualizados con las últimas tendencias en marketing digital.",
    imageUrl: "/svgs/elegirnos/aprendizaje.svg"
  },
  {
    title: "Resultados medibles",
    description: "Nos enfocamos en proporcionar resultados tangibles y cuantificables.",
    imageUrl: "/svgs/elegirnos/Resultados.svg"
  },
]

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 hover:border-[#9966FF]/30 transition-all duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="mb-4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 + 0.2 }}
      >
        <Image
          src={feature.imageUrl}
          alt={feature.title}
          width={60}
          height={60}
          className=""
        />
      </motion.div>
      <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
      <p className="text-gray-300 text-sm">{feature.description}</p>
    </motion.div>
  )
}

export default function NosotrosPage() {
  return (
    <div className="min-h-[80vh] bg-[#21211F] py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9966FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8BC1A7]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9966FF]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section con diseño tipo revista - directamente sobre el fondo */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Contenedor principal con diseño tipo revista */}
          <div className="relative">
            {/* SVG Nosotros - a la derecha en desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden md:block float-right ml-8 mb-6 w-72 xl:w-96 flex-shrink-0"
              style={{ shapeOutside: 'margin-box' }}
            >
              <div className="relative w-full">
                <Image
                  src="/svgs/nosotros.svg"
                  alt="Rayuela - Nosotros"
                  width={384}
                  height={321}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* SVG Nosotros - móvil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="md:hidden w-full mb-8 mx-auto max-w-sm"
            >
              <Image
                src="/svgs/nosotros.svg"
                alt="Rayuela - Nosotros"
                width={348}
                height={291}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Contenido de texto que rodea la imagen */}
            <div className="text-white space-y-6">
              {/* Título principal */}
              <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed">
                Saltamos con vos en cada etapa del proyecto.
              </p>
              <div className="space-y-6 mt-6">
                <motion.p
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  En 2023 nacimos enfocados en conquistar el mundo digital. Hoy, evolucionamos. Somos una Agencia Creativa Integral porque entendemos que tu marca no vive solo en una pantalla: vive en la calle, en un evento, en las redes y en las decisiones estratégicas de cada día.
                </motion.p>
                <motion.p
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  No trabajamos a ciegas ni usamos plantillas. Combinamos creatividad audaz con análisis de datos precisos para diseñar soluciones a la medida de tu tablero. Ya sea que necesites conceptualizar una idea desde cero o destrabar un proyecto que no avanza, nuestro equipo es tu área creativa y estratégica externa. Tu crecimiento tangible es nuestra única métrica de éxito.
                </motion.p>
              </div>
            </div>

            {/* Clearfix para contener el float */}
            <div className="clear-both"></div>
          </div>
        </motion.div>

        {/* Sección de Metodología */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Marketing Digital de <span className="text-[#9966FF]">0 al cielo</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Creemos en construir desde los cimientos. Cada proyecto es un viaje desde lo fundamental hasta las alturas del éxito digital. Nuestra metodología se basa en:
            </p>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mt-auto">
              <ul className="space-y-4 flex-1">
                {[
                  "Análisis profundo de tu marca y objetivos",
                  "Estrategias personalizadas y adaptativas",
                  "Implementación meticulosa y optimización continua",
                  "Medición constante y ajustes basados en datos"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#9966FF] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <motion.div 
                className="w-48 sm:w-56 flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                  src="/svgs/alcielo.svg"
                  alt="De 0 al cielo"
                  width={224}
                  height={224}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Nuestros <span className="text-[#8BC1A7]">Servicios</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ofrecemos una gama completa de servicios de marketing digital, incluyendo:
            </p>
            <div className="space-y-4">
              {[
                { title: "Branding & Diseño Omnicanal", desc: "Construimos identidad coherente en digital y físico." },
                { title: "Desarrollo Web", desc: "Creamos sitios que ordenan, comunican y convierten." },
                { title: "Paid Media & Performance", desc: "Optimizamos inversión publicitaria con foco en resultados." },
                { title: "Social Media & Creación de Contenido", desc: "Diseñamos contenido estratégico con voz de marca." },
                { title: "Consultoría & Project Management", desc: "Alineamos equipos, tiempos y decisiones para avanzar." }
              ].map((service, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-[#9966FF] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-[#9966FF]">{service.title}:</strong>
                    <span className="text-gray-300 ml-2">{service.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sección de Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Por qué <span className="text-[#9966FF]">elegirnos</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Valores que nos definen y nos diferencian
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}


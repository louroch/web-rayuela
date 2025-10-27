'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Rocket, Users, Lightbulb, BarChart } from 'lucide-react'

interface Feature {
  title: string
  description: string
  imageUrl: string
}

const features: Feature[] = [
  {
    title: "Experiencia personalizada",
    description: "Adaptamos nuestros servicios a las necesidades únicas de cada cliente.",
    imageUrl: "/assets/personalizar.png"
  },
  {
    title: "Innovación",
    description: "Buscamos constantemente nuevas soluciones creativas en marketing digital.",
    imageUrl: "/assets/cohete.png"
  },
  {
    title: "Colaboración",
    description: "Trabajamos en estrecha colaboración con nuestros clientes para lograr el éxito.",
    imageUrl: "/assets/colaboracion.png"
  },
  {
    title: "Ética",
    description: "Mantenemos altos estándares éticos en todas nuestras prácticas comerciales.",
    imageUrl: "/assets/corporativo.png"
  },
  {
    title: "Transparencia",
    description: "Fomentamos la confianza a través de una comunicación abierta y honesta.",
    imageUrl: "/assets/transparencia.png"
  },
  {
    title: "Profesionalismo",
    description: "Nuestro equipo trabaja con integridad y compromiso en cada proyecto.",
    imageUrl: "/assets/profesionalismo.png"
  },
  {
    title: "Aprendizaje continuo",
    description: "Nos mantenemos actualizados con las últimas tendencias en marketing digital.",
    imageUrl: "/assets/aprendizaje-electronico.png"
  },
  {
    title: "Resultados medibles",
    description: "Nos enfocamos en proporcionar resultados tangibles y cuantificables.",
    imageUrl: "/assets/grafico-de-barras.png"
  },
]

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  return (
    <motion.div
      className="bg-[#21211f36] rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
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
      <p className="text-white text-sm">{feature.description}</p>
    </motion.div>
  )
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9966FF] to-[#6600CC] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white rounded-xl shadow-xl p-8 mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Rocket className="h-12 w-12 text-[#9966FF]" />
          </div>
          <h2 className="text-4xl font-bold text-[#9966FF] mb-4 text-center">
          En Rayuela, no simplemente ofrecemos servicios de marketing digital, brindamos el camino completo desde la base hasta el cielo de las posibilidades digitales.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center">
              <Users className="h-8 w-8 text-[#9966FF] mb-4" />
              <h3 className="text-xl font-semibold text-[#9966FF] mb-2">Equipo Apasionado</h3>
              <p className="text-gray-700">Expertos dedicados a la innovación y excelencia en marketing digital.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Lightbulb className="h-8 w-8 text-[#9966FF] mb-4" />
              <h3 className="text-xl font-semibold text-[#9966FF] mb-2">Soluciones Creativas</h3>
              <p className="text-gray-700">Estrategias personalizadas que destacan tu marca en el mundo digital.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart className="h-8 w-8 text-[#9966FF] mb-4" />
              <h3 className="text-xl font-semibold text-[#9966FF] mb-2">Resultados Medibles</h3>
              <p className="text-gray-700">Enfoque en métricas y KPIs para un crecimiento tangible y sostenible.</p>
            </div>
          </div>
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-3xl font-bold text-[#9966FF] mb-4"> Marketing Digital de 0 al cielo</h2>
              <p className="text-lg leading-relaxed">
                Creemos en construir desde los cimientos. Cada proyecto es un viaje desde lo fundamental hasta las alturas del éxito digital. Nuestra metodología se basa en:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Análisis profundo de tu marca y objetivos</li>
                <li>Estrategias personalizadas y adaptativas</li>
                <li>Implementación meticulosa y optimización continua</li>
                <li>Medición constante y ajustes basados en datos</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#9966FF] mb-4">Nuestros Servicios</h2>
              <p className="text-lg leading-relaxed mb-4">
                Ofrecemos una gama completa de servicios de marketing digital, incluyendo:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#9966FF] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong className="text-[#9966FF]">Diseño Creativo:</strong> Identidad visual y contenido cautivador que conecta con tu audiencia.</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#9966FF] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong className="text-[#9966FF]">Gestión de Redes Sociales:</strong> Estrategias que aumentan la visibilidad y el engagement.</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#9966FF] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong className="text-[#9966FF]">Desarrollo Web:</strong> Sitios intuitivos y atractivos que convierten visitantes en clientes.</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#9966FF] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong className="text-[#9966FF]">Publicidad Online:</strong> Campañas optimizadas para máximo retorno de inversión.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          ¿Por qué elegirnos?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}


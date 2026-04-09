'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: "01",
    title: "Análisis",
    description: "Investigamos tu mercado, competencia y audiencia para entender el contexto completo.",
    imageSrc: "/svgs/1.svg",
  },
  {
    number: "02",
    title: "Estrategia",
    description: "Desarrollamos estrategias personalizadas alineadas con tus objetivos de negocio.",
    imageSrc: "/svgs/2.svg",
  },
  {
    number: "03",
    title: "Ejecución",
    description: "Implementamos soluciones creativas y técnicas con atención meticulosa al detalle.",
    imageSrc: "/svgs/3.svg",
  },
  {
    number: "04",
    title: "Optimización",
    description: "Monitoreamos resultados y optimizamos continuamente para maximizar el impacto.",
    imageSrc: "/svgs/4.svg",
  },
]

export function ProcessSection() {
  return (
    <section id="nuestro-proceso" className="py-16 md:py-20 bg-[#21211F] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-12 py-10 flex items-center justify-center">
          {/* Fondo SVG */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <img 
              src="/svgs/procesoavioncompo.svg" 
              alt="" 
              className="w-full min-w-[600px] max-w-[1000px] object-contain opacity-90"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center w-full"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Nuestro <span className="text-[#9966FF]">proceso</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Metodología probada para transformar ideas en resultados
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Línea conectora */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-[#9966FF]/20 to-transparent z-0" />
              )}
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#9966FF]/30 hover:bg-white/10 hover:shadow-xl transition-all duration-300 group h-full">
                <div className="mb-6 h-20 group-hover:scale-105 transition-transform origin-left">
                  <img 
                    src={encodeURI(step.imageSrc)} 
                    alt={`Paso ${step.number}`}
                    className="h-full w-auto object-contain object-left"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


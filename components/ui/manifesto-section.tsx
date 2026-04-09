'use client'

import { motion } from 'framer-motion'

export function ManifestoSection() {
  return (
    <section id="mas-alla-del-marketing" className="py-16 md:py-20 bg-[#21211F] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#9966FF]/5 rounded-full" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#8BC1A7]/5 rounded-lg rotate-12" />
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_120px] xl:grid-cols-[320px_minmax(0,1fr)_150px] gap-8 lg:gap-12 items-end lg:items-center">
          
          {/* Columna 1: Ilustración Lou */}
          <div className="hidden lg:flex w-full h-full items-end justify-start">
            <img
              src={encodeURI("/svgs/Lou compo.svg")}
              alt=""
              role="presentation"
              className="w-full max-h-[60vh] object-contain object-left-bottom"
            />
          </div>

          {/* Columna 2: Contenido de texto */}
          <div className="w-full max-w-4xl mx-auto lg:mx-0 self-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.95] tracking-tight">
                Más allá del Marketing.
                <br />
                <span className="text-[#9966FF]">Arquitectos del Juego.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl"
            >
              <p>
                En 2023 nacimos digitales, pero todo se transforma y nosotros también. Hoy entendemos que una marca no vive solo en una pantalla. Vive en un evento, se toca en una tarjeta de presentación, se impone en la vía pública y se gestiona con precisión de relojero.
              </p>
              <p>
                Olvidate de las fórmulas mágicas de "llevar tu negocio al siguiente nivel". Acá hablamos de saltos reales. De avanzar casillero a casillero con una estrategia hecha a medida. Porque en Rayuela, cada cliente tiene un tablero distinto y las reglas se adaptan a lo que tu negocio realmente necesita, no a lo que un "paquete estándar" te quiere vender.
              </p>
            </motion.div>
          </div>

          {/* Columna 3: Rayuela (Opcional, si va aquí o es un elemento global) */}
          <div className="hidden lg:block w-full">
            {/* Espacio reservado para la rayuela si es parte de esta sección */}
          </div>

        </div>
      </div>
    </section>
  )
}

'use client'
import { useEffect, useRef } from 'react'
import Image from "next/image"
import { motion, useAnimation, useInView } from 'framer-motion'

export function Clients() {
  const clients = [
    { name: "Quino", logo: "/assets/02.png" },
    { name: "Inmobiliaria L&C", logo: "/assets/logoinmo.png" },
    { name: "Guen Cuero", logo: "/assets/05.png" },
    // Duplicate clients to create a seamless loop
    { name: "Quino", logo: "/assets/02.png" },
    { name: "Inmobiliaria L&C", logo: "/assets/logoinmo.png" },
    { name: "Guen Cuero", logo: "/assets/05.png" },
  ]

  const carouselRef = useRef(null)
  const isInView = useInView(carouselRef, { once: false })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [0, -50 * clients.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      })
    } else {
      controls.stop()
    }
  }, [isInView, controls, clients.length])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 max-w-2xl">
            Clientes que eligen nuestra experiencia para alcanzar resultados.
          </h2>

          <div className="w-full overflow-hidden mb-12" ref={carouselRef}>
            <motion.div 
              className="flex"
              animate={controls}
              style={{ width: `${clients.length * 200}px` }} // Adjust based on logo size
            >
              {clients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex items-center justify-center mx-8"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={100}
                    height={75}
                    className="w-auto h-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <button className="px-8 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Testimonios
          </button>
        </div>
      </div>
    </section>
  )
}

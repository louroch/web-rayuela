'use client'
import { useEffect } from 'react'
import Image from "next/image"
import { motion, useAnimation } from 'framer-motion'

export function Clients() {
  const clients = [
    { name: "Quino", logo: "/assets/QUINO.png" },
    { name: "Inmobiliaria L&C", logo: "/assets/logoinmo.png" },
    { name: "Guen Cuero", logo: "/assets/05.png" },
    { name: "Felipe", logo: "/assets/felipe.png" },
    { name: "Yaggi", logo: "/assets/yaggi.png" },
    { name: "Yoe", logo: "/assets/yoe.png" },
    // Duplicate clients to create a seamless loop
    { name: "Quino", logo: "/assets/QUINO.png" },
    { name: "Inmobiliaria L&C", logo: "/assets/logoinmo.png" },
    { name: "Guen Cuero", logo: "/assets/05.png" },
    { name: "Felipe", logo: "/assets/felipe.png" },
    { name: "Yoe", logo: "/assets/yoe.png" },
  ]

  const controls = useAnimation()

  useEffect(() => {
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
  }, [controls, clients.length])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 max-w-2xl">
            Clientes que eligen nuestra experiencia para alcanzar resultados.
          </h2>

          <div className="w-full overflow-hidden mb-12">
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
                    width={400}
                    height={400}
                    className="w-auto h-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


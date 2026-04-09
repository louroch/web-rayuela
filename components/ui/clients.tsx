'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const CLIENTS = [
  { name: "Quino", logo: "/assets/QUINO.png" },
  { name: "Inmobiliaria L&C", logo: "/assets/logoinmo.png" },
  { name: "Guen Cuero", logo: "/assets/05.png" },
  { name: "Felipe", logo: "/assets/felipe.png" },
  { name: "Yaggi", logo: "/assets/yaggi.png" },
  { name: "Yoe", logo: "/assets/yoe.png" },
]

export function Clients() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Comienza a cargar 50px antes de que sea visible
        threshold: 0.1
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 max-w-2xl">
            Clientes que eligen nuestra experiencia para alcanzar resultados.
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full aspect-square">
                  {isVisible ? (
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                      className="object-contain"
                      loading="lazy"
                      quality={85}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 animate-pulse rounded" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


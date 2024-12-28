'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"

const CLIENTS = [
  { name: "Quino", logo: "/assets/QUINO.png" },
  { name: "Inmobiliaria L&C", logo: "/assets/logoinmo.png" },
  { name: "Guen Cuero", logo: "/assets/05.png" },
  { name: "Felipe", logo: "/assets/felipe.png" },
  { name: "Yaggi", logo: "/assets/yaggi.png" },
  { name: "Yoe", logo: "/assets/yoe.png" },
]

export function Clients() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let position = 0

    const scroll = () => {
      position += 0.5
      if (position >= scrollContainer.scrollWidth / 2) {
        position = 0
      }
      scrollContainer.scrollLeft = position
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 max-w-2xl">
            Clientes que eligen nuestra experiencia para alcanzar resultados.
          </h2>

          <div className="w-full overflow-hidden mb-12">
            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
              }}
            >
              {/* Original clients */}
              {CLIENTS.map((client, index) => (
                <div
                  key={client.name}
                  className="flex-shrink-0 w-[120px]"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      sizes="120px"
                      className="object-contain"
                      priority={index < 4}
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {CLIENTS.map((client) => (
                <div
                  key={`${client.name}-duplicate`}
                  className="flex-shrink-0 w-[120px]"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      sizes="120px"
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


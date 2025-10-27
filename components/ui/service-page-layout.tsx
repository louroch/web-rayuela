'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServicePageLayoutProps {
  icon: React.ReactNode
  title: string
  description: string
  features: {
    title: string
    description: string
    icon: React.ReactNode
  }[]
  children: React.ReactNode
}

export function ServicePageLayout({
  icon,
  title,
  description,
  features,
  children
}: ServicePageLayoutProps) {
  return (
    <div className="bg-[#21211F] min-h-screen">
      <motion.div
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white bg-opacity-10 rounded-lg p-8 shadow-xl">
          <div className="text-white mb-4">{icon}</div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-white">
            {description}
          </p>
        
          {children}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="pt-6"
                >
                  <div className="flow-root rounded-lg bg-white px-6 pb-8 shadow-md">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-[#9966FF] p-3 shadow-lg">
                          {feature.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">¿Listo para impulsar tu negocio?</h2>
            <p className="text-xl text-white mb-8">
              Estamos comprometidos con tu éxito. Nuestro equipo está listo para ayudarte a alcanzar todos tus objetivos. No importa el tamaño de tu empresa o la industria en la que te encuentres, tenemos las herramientas y el conocimiento para llevarte al siguiente nivel.
            </p>
            <p className="text-lg text-white mb-8">
              Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos transformar tu presencia digital.
            </p>
            <Link
              href="https://wa.me/5493815712204"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8BC1A7] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contáctanos por WhatsApp
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon'

interface ServicePageLayoutProps {
  icon: React.ReactNode
  title: string
  description: string
  features: {
    title: string
    description: string
    icon: React.ReactNode
    image?: string
  }[]
  children: React.ReactNode
  galleryImages?: string[]
  heroImage?: string
}

export function ServicePageLayout({
  icon,
  title,
  description,
  features,
  children,
  galleryImages = [],
}: ServicePageLayoutProps) {
  return (
    <div className="bg-[#21211F] min-h-screen">
      {/* Hero Section as a Card */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <motion.div
          className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 lg:p-16 xl:p-20 overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background glows inside card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9966FF]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8BC1A7]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

          {/* Internal Header */}
          <div className="relative z-20 flex justify-between items-center mb-12 lg:mb-20">
            <div className="flex items-center gap-3">
              <Link href="/servicios" className="text-white/50 hover:text-white/90 transition-colors text-sm font-semibold tracking-widest uppercase">
                Servicios
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-[#9966FF] text-sm font-semibold tracking-widest uppercase">{title.split(' ')[0]}</span>
            </div>
            <div className="hidden sm:flex items-center gap-8 text-white/40 text-sm font-medium tracking-widest uppercase">
              <span>Estrategia</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Diseño</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Resultados</span>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text (Order 1 on mobile, 1 on desktop) */}
            <div className="flex flex-col items-start text-left order-1">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed font-light"
              >
                {description}
              </motion.p>
            </div>

            {/* Right Column: Illustration (Order 2 on mobile, 2 on desktop) */}
            <div className="flex justify-center lg:justify-end items-center order-2 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[500px] xl:max-w-[650px] relative"
              >
                <div className="w-full relative z-10 [&_img]:w-full [&_img]:h-auto [&_img]:max-h-[60vh] [&_img]:object-contain">
                  {icon}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Children Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-12 border border-white/10"
        >
          {children}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            <span className="bg-gradient-to-r from-[#9966FF] to-[#8BC1A7] bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.7, duration: 0.5 }}
                className="group relative"
              >
                <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-[#9966FF]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#9966FF]/20 hover:-translate-y-2 overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9966FF]/10 to-[#8BC1A7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Feature Image */}
                  {feature.image && (
                    <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#21211F]/80 to-transparent" />
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-[#9966FF] to-[#8BC1A7] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9966FF] group-hover:to-[#8BC1A7] transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery Section */}
        {galleryImages && galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
              <span className="bg-gradient-to-r from-[#9966FF] to-[#8BC1A7] bg-clip-text text-transparent">
                Galería de Proyectos
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index + 1.1, duration: 0.5 }}
                  className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`Proyecto ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9966FF]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#9966FF] via-[#8BC1A7] to-[#9966FF] rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para impulsar tu negocio?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Estamos comprometidos con tu éxito. Nuestro equipo está listo para ayudarte a alcanzar todos tus objetivos. No importa el tamaño de tu empresa o la industria en la que te encuentres, tenemos las herramientas y el conocimiento para llevarte al siguiente nivel.
            </p>
            <p className="text-lg text-white/80 mb-10">
              Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos transformar tu presencia digital.
            </p>
            <Link
              href="https://wa.me/5493815712204"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white text-[#9966FF] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="inline-flex shrink-0 rounded-full bg-[#25D366] p-1.5" aria-hidden>
                <WhatsAppIcon size={22} alt="" />
              </span>
              <span>Contáctanos por WhatsApp</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


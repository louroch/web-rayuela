"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Brush, Globe, Megaphone, Share2, BarChart3 } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ContactModal } from "@/components/ui/contact-modal"
import { SERVICE_SVGS } from "@/lib/service-svgs"

const services = [
  {
    title: "Branding & Diseño Omnicanal",
    subtitle: "Del píxel al papel",
    href: "/servicios/diseno-grafico",
    icon: Brush,
    iconSrc: SERVICE_SVGS.branding,
  },
  {
    title: "Desarrollo Web",
    subtitle: "Tu casa matriz digital",
    href: "/servicios/desarrollo-web",
    icon: Globe,
    iconSrc: SERVICE_SVGS.web,
  },
  {
    title: "Paid Media & Performance",
    subtitle: "Inversión, no gasto",
    href: "/servicios/publicidad-online",
    icon: Megaphone,
    iconSrc: SERVICE_SVGS.paid,
  },
  {
    title: "Social Media & Creación de Contenido",
    subtitle: "La voz de tu juego",
    href: "/servicios/social-media",
    icon: Share2,
    iconSrc: SERVICE_SVGS.contenido,
  },
  {
    title: "Consultoría & Project Management",
    subtitle: "Orquestamos el éxito",
    href: "/servicios/consultoria",
    icon: BarChart3,
    iconSrc: SERVICE_SVGS.consultoria,
  }
]

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <nav className="bg-[#21211F]/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <Image
              src="/assets/rayuelalogo.svg"
              alt="Logo de Rayuela"
              width={95}
              height={95}
              priority
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white sm:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Abrir menú"
          >
            <span className="sr-only">Abrir menú</span>
            <div className="relative w-6 h-6">
              <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} />
              <span className={`absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'}`} />
              <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} />
            </div>
          </button>

          {/* Menú de navegación (pantallas grandes) */}
          <div className="hidden sm:flex sm:space-x-8 sm:ml-auto items-center">
            <Link
              href="/"
              className="text-white/90 hover:text-white px-3 py-2 transition-colors duration-300 font-medium text-sm"
            >
              Inicio
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white/90 hover:text-white px-3 py-2 transition-colors duration-300 font-medium text-sm bg-transparent hover:bg-transparent">
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[340px] p-4 bg-[#21211F] rounded-xl shadow-2xl border border-white/10">
                      <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#9966FF] scrollbar-track-gray-800">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                          >
                            <div
                              className={
                                "iconSrc" in service && service.iconSrc
                                  ? "mt-1 flex-shrink-0 w-11 h-11 flex items-center justify-center"
                                  : "mt-1 flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-[#9966FF]/20 to-[#8BC1A7]/20 group-hover:from-[#9966FF]/30 group-hover:to-[#8BC1A7]/30 transition-all duration-300 w-9 h-9 flex items-center justify-center"
                              }
                            >
                              {"iconSrc" in service && service.iconSrc ? (
                                <Image
                                  src={service.iconSrc}
                                  alt=""
                                  width={44}
                                  height={44}
                                  className="h-10 w-10 object-contain group-hover:scale-105 transition-transform duration-300"
                                  unoptimized
                                />
                              ) : (
                                <service.icon className="h-5 w-5 text-[#9966FF] group-hover:scale-110 transition-transform duration-300" />
                              )}
                            </div>
                            <div>
                              <div className="font-semibold text-white group-hover:text-[#9966FF] transition-colors">
                                {service.title}
                              </div>
                              <div className="text-xs text-[#8BC1A7] mt-0.5">{service.subtitle}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/nosotros"
              className="text-white/90 hover:text-white px-3 py-2 transition-colors duration-300 font-medium text-sm"
            >
              Nosotros
            </Link>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="ml-4 px-6 py-2 bg-[#9966FF] hover:bg-[#8a5ce6] text-white rounded-lg transition-all duration-300 font-medium text-sm"
            >
              Contacto
            </button>
          </div>
        </div>

        {/* Menú hamburguesa (pantallas pequeñas) */}
        {isOpen && (
          <div 
            className="sm:hidden bg-[#21211F] border-t border-white/10 space-y-4 mt-4 p-4 absolute w-full left-0 shadow-xl"
            style={{
              animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
            }}
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#9966FF] py-2"
            >
              Inicio
            </Link>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-white hover:text-[#9966FF] flex items-center justify-between w-full py-2"
              aria-expanded={isServicesOpen}
            >
              Servicios
              {isServicesOpen ? (
                <span className="ml-2">−</span>
              ) : (
                <span className="ml-2">+</span>
              )}
            </button>
            {isServicesOpen && (
              <div className="pl-4 pr-2 max-h-[320px] overflow-y-auto">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white hover:text-[#9966FF] py-2"
                  >
                    <div className="flex items-center gap-2">
                      {"iconSrc" in service && service.iconSrc ? (
                        <Image
                          src={service.iconSrc}
                          alt=""
                          width={36}
                          height={36}
                          className="h-9 w-9 flex-shrink-0 object-contain"
                          unoptimized
                        />
                      ) : (
                        <service.icon className="h-4 w-4 flex-shrink-0 text-[#9966FF]" />
                      )}
                      <span className="font-medium">{service.title}</span>
                    </div>
                    <div className="text-xs text-[#8BC1A7] mt-0.5">{service.subtitle}</div>
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/nosotros"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#9966FF] py-2"
            >
              Nosotros
            </Link>
            <button
              onClick={() => {
                setIsContactModalOpen(true)
                setIsOpen(false)
              }}
              className="block mt-4 px-6 py-3 bg-[#9966FF] hover:bg-[#8a5ce6] text-white rounded-lg text-center font-medium w-full"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </nav>
  )
}

// Estilos para la barra de desplazamiento personalizada
const scrollbarStyles = `
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }
  .scrollbar-thin::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: #9966FF;
    border-radius: 3px;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background-color: #7744CC;
  }
`;

const menuAnimation = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Agrega los estilos al documento
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = scrollbarStyles + menuAnimation;
  document.head.appendChild(style);
}

